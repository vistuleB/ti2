import solid
import desugarers/counter.{counter_desugarer}
import desugarers/counter_handles.{counter_handles_desugarer}
import desugarers/fold_tag_contents_into_text
import argv
import simplifile
import gleam/string
import gleam/result
import gleam/list
import gleam/int
import desugarers/remove_vertical_chunks_with_no_text_child.{
  remove_vertical_chunks_with_no_text_child,
}
import desugarers/rename_tag.{rename_tag}
import desugarers/group_siblings_not_separated_by_blank_lines.{group_siblings_not_separated_by_blank_lines}
import desugarers/surround_elements_by.{surround_elements_by}
import desugarers/unwrap_tag_when_child_of_tags.{unwrap_tag_when_child_of_tags}
import desugarers/unwrap_tags.{unwrap_tags}
import desugarers/split_by_indexed_regexes.{split_by_indexed_regexes}
import desugarers/pair_bookends.{pair_bookends}
import desugarers/fold_tags_into_text.{fold_tags_into_text}
// import desugarers/remove_empty_lines.{remove_empty_lines}
import desugarers/concatenate_text_nodes.{concatenate_text_nodes}
import desugarers/prepend_append_to_text_children_of.{prepend_append_to_text_children_of}
import infrastructure as infra
import gleam/io
import infrastructure.{type Pipe}
import lbp_desugaring
import leptos_emitter
import shellout

const ins = string.inspect

fn dotdot(path: String) -> String {
  path
  |> string.split("/")
  |> list.reverse()
  |> list.drop(1)
  |> list.reverse()
  |> string.join("/")
}

fn root() {
  let assert Ok(current_directory) = simplifile.current_directory()
  dotdot(current_directory)
}

fn pipeline() -> List(Pipe) {
  let double_dollar_indexed_regex =
    infra.unescaped_suffix_indexed_regex("\\$\\$")

  let single_dollar_indexed_regex = infra.unescaped_suffix_indexed_regex("\\$")

  let latex_opening_backslash_parenthesis_indexed_regex = infra.unescaped_suffix_indexed_regex("\\\\\\(")
  let latex_closing_backslash_parenthesis_indexed_regex = infra.unescaped_suffix_indexed_regex("\\\\\\)")

  // _ _
  let opening_single_underscore_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[\\s({\\[]|^", "_", "[^\\s)}\\]_]|$")

  let opening_or_closing_single_underscore_indexed_regex_without_asterisks =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[\\*_]|^", "_", "[^\\s)}\\]\\*_]|$")

  let opening_or_closing_single_underscore_indexed_regex_with_asterisks =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[_]|^", "_", "[^\\s)}\\]_]|$")

  let closing_single_underscore_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[_]|^", "_", "[\\s)}\\]]|$")

  // * *
  let opening_single_asterisk_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[\\s({\\[]|^", "\\*", "[^\\s)}\\]\\*]|$")

  let opening_or_closing_single_asterisk_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[\\*]|^", "\\*", "[^\\s)}\\]\\*]|$")

  let closing_single_asterisk_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[\\*]|^", "\\*", "[\\s)}\\]]|$")

  [
    unwrap_tags(["WriterlyBlurb"]),

    // ************************
    // $$ *********************
    // ************************
    split_by_indexed_regexes(
      #([#(double_dollar_indexed_regex, "DoubleDollar")], []),
    ),
    pair_bookends(#(["DoubleDollar"], ["DoubleDollar"], "MathBlock")),
    fold_tags_into_text([#("DoubleDollar", "$$")]),

    // ************************
    // VerticalChunk **********
    // ************************
    surround_elements_by(#(
      [
        "div", "ol", "ul", "h1", "figure", "MathBlock", "Image", "Table",
        "Exercises", "Solution", "Example", "Section", "Exercise", "List",
        "Grid", "ImageLeft", "ImageRight", "Pause",
      ],
      "WriterlyBlankLine",
      "WriterlyBlankLine",
    )),
    group_siblings_not_separated_by_blank_lines(#("VerticalChunk", ["MathBlock"])),
    unwrap_tags(["WriterlyBlankLine"]),
    concatenate_text_nodes(),

    // ************************
    // \( \) ******************
    // ************************
    split_by_indexed_regexes(
      #([
        #(latex_opening_backslash_parenthesis_indexed_regex, "OpeningLatexPara"),
        #(latex_closing_backslash_parenthesis_indexed_regex, "ClosingLatexPara"),
      ], ["MathBlock"]),
    ),
    pair_bookends(#(["OpeningLatexPara"], ["ClosingLatexPara"], "Math")),
    fold_tags_into_text([
      #("OpeningLatexPara", "\\("),
      #("ClosingLatexPara", "\\)"),
    ]),

    // ************************
    // _ & * ******************
    // ************************
    split_by_indexed_regexes(
      #(
        [
          #(
            opening_or_closing_single_underscore_indexed_regex_without_asterisks,
            "OpeningOrClosingUnderscore",
          ),
          #(opening_single_underscore_indexed_regex, "OpeningUnderscore"),
          #(closing_single_underscore_indexed_regex, "ClosingUnderscore"),
          #(
            opening_or_closing_single_asterisk_indexed_regex,
            "OpeningOrClosingAsterisk",
          ),
          #(opening_single_asterisk_indexed_regex, "OpeningAsterisk"),
          #(closing_single_asterisk_indexed_regex, "ClosingAsterisk"),
          #(
            opening_or_closing_single_underscore_indexed_regex_with_asterisks,
            "OpeningOrClosingUnderscore",
          ),
          #(opening_single_underscore_indexed_regex, "OpeningUnderscore"),
          #(closing_single_underscore_indexed_regex, "ClosingUnderscore"),
        ],
        ["MathBlock", "Math"],
      ),
    ),
    pair_bookends(#(
      ["OpeningUnderscore", "OpeningOrClosingUnderscore"],
      ["ClosingUnderscore", "OpeningOrClosingUnderscore"],
      "i",
    )),
    pair_bookends(#(
      ["OpeningAsterisk", "OpeningOrClosingAsterisk"],
      ["ClosingAsterisk", "OpeningOrClosingAsterisk"],
      "b",
    )),
    fold_tags_into_text(
      [
        #("OpeningOrClosingUnderscore", "_"),
        #("OpeningUnderscore", "_"),
        #("ClosingUnderscore", "_"),
        #("OpeningOrClosingAsterisk", "*"),
        #("OpeningAsterisk", "*"),
        #("ClosingAsterisk", "*"),
      ],
    ),

    // ************************
    // cleanup $$, \(, \)
    // ************************
    prepend_append_to_text_children_of([
      #("$$", "$$", "MathBlock"),
      #("\\(", "\\)", "Math"),
    ]),
    fold_tag_contents_into_text.fold_tag_contents_into_text(["MathBlock", "Math"]),

    counter_desugarer(),
    counter_handles_desugarer(),

    // more
    concatenate_text_nodes(),
    // remove_empty_lines(),
    remove_vertical_chunks_with_no_text_child(),
    rename_tag(#("VerticalChunk", "p")),
    unwrap_tag_when_child_of_tags(#("p", ["span", "code", "tt", "figcaption"])),
  ]
}

fn usage_message() {
  io.println(
    "usage: executable_file_name <input_file>
    options:
        <input_file> --debug : debug pipeline steps
        <input_file> --debug-<start:int>-<end:int> : debug pipeline steps with start & stop indices
        <input_file> --debug-<start:int> : shorthand for --debug-<start>-<start>
        ",
  )
}

pub fn run_prettier(
  in: String,
  path: String
) -> Result(_, _) {
  shellout.command(
      run: "npx",
      in: in,
      with: ["prettier", "--write", path],
      opt: [],
    )
}

fn add_v1_boilerplate(output: String) -> String {
  "export default function _() {
  return <>" <> output <> "</>
}
"
}

pub fn write_v1_file(output: String, path: String) -> Nil {
  output
  |> add_v1_boilerplate
  |> simplifile.write(path, _)
  |> result.unwrap(Nil)
}



pub fn process_command_line_args(args: List(String), pipeline: List(Pipe)) -> Nil {
  case args {
    [path, "--debug"] -> {
      lbp_desugaring.assemble_and_desugar_and_callback(path, pipeline, 0, 0, fn(_) { Nil })
    }
    [path, "--emit"] -> {
      lbp_desugaring.assemble_and_desugar_and_callback(path, pipeline, -1, -1, fn(desugared) {
        let path_out = string.drop_end(path, 4) <> ".tsx"
        let path_out = string.drop_start(path_out, string.length("../emu_content/"))
        let path_out = "../src/routes/lecture-notes/" <> path_out
        write_v1_file(solid.vxml_to_jsx(desugared, 0), path_out)
        case run_prettier(".", path_out) {
          Ok(_) -> Nil
          Error(e) -> {
            io.println("error running prettier: " <> ins(e))
            io.println("path_out: " <> path_out <> "[END]")
            Nil
          }
        }
      })
    }
    [path, maybe_debug_range] -> {
      case string.starts_with(maybe_debug_range, "--debug") {
        False -> usage_message()
        True -> {
          let suffix = string.drop_start(maybe_debug_range, 7)
          let pieces = string.split(suffix, "-")
          case list.length(pieces) {
            3 -> {
              let assert [_, b, c] = pieces
              case int.parse(b), int.parse(c) {
                Ok(debug_start), Ok(debug_end) ->
                  lbp_desugaring.assemble_and_desugar_and_callback(path, pipeline, debug_start, debug_end, fn(_) { Nil })
                _, _ ->  usage_message()
              }
            }
            2 -> {
              let assert [_, b] = pieces
              case int.parse(b) {
                Ok(debug_start) ->
                  lbp_desugaring.assemble_and_desugar_and_callback(path, pipeline, debug_start, debug_start, fn(_) { Nil })
                _ ->  usage_message()
              }
            }
            _ -> {
              usage_message()
            }
          }
        }
      }
    }
    _ -> usage_message()
  }
}

pub fn main() {
  argv.load().arguments
  |> process_command_line_args(pipeline())
}

// +18884039000
