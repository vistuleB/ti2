import desugarers/absorb_next_sibling_while.{absorb_next_sibling_while}
import desugarers/add_attributes.{add_attributes}
import desugarers/add_counter_attributes.{add_counter_attributes}
import desugarers/add_exercise_labels.{add_exercise_labels}
import desugarers/add_spacer_divs_before.{add_spacer_divs_before}
import desugarers/add_spacer_divs_between.{add_spacer_divs_between}
import desugarers/add_title_counters_and_titles_with_handle_assignments.{
  add_title_counters_and_titles_with_handle_assignments,
}
import desugarers/change_attribute_value.{change_attribute_value}
import desugarers/concatenate_text_nodes.{concatenate_text_nodes}
import desugarers/convert_int_attributes_to_float.{
  convert_int_attributes_to_float,
}
import desugarers/counter.{counter_desugarer}
import desugarers/counter_handles.{counter_handles_desugarer}
import desugarers/fold_tag_contents_into_text
import desugarers/fold_tags_into_text.{fold_tags_into_text}
import desugarers/free_children.{free_children}
import desugarers/generate_lbp_table_of_contents.{generate_lbp_table_of_contents}
import desugarers/group_siblings_not_separated_by_blank_lines.{
  group_siblings_not_separated_by_blank_lines,
}
import desugarers/insert_indent.{insert_indent}
import desugarers/pair_bookends.{pair_bookends}
import desugarers/prepend_append_to_text_children_of
import desugarers/remove_empty_chunks.{remove_empty_chunks}
import desugarers/remove_empty_lines.{remove_empty_lines}
import desugarers/remove_vertical_chunks_with_no_text_child.{
  remove_vertical_chunks_with_no_text_child,
}
import desugarers/rename_tag
import desugarers/rename_when_child_of.{rename_when_child_of}
import desugarers/split_by_indexed_regexes.{split_by_indexed_regexes}
import desugarers/surround_elements_by.{surround_elements_by}
import desugarers/unwrap_tag_when_child_of_tags
import desugarers/unwrap_tags.{unwrap_tags}
import desugarers/wrap_math_with_no_break.{wrap_math_with_no_break}
import gleam/option.{None, Some}
import infrastructure.{type Pipe} as infra

pub fn our_pipeline() -> List(Pipe) {
  let double_dollar_indexed_regex =
    infra.unescaped_suffix_indexed_regex("\\$\\$")

  let single_dollar_indexed_regex = infra.unescaped_suffix_indexed_regex("\\$")

  let latex_opening_backslash_parenthesis_indexed_regex =
    infra.unescaped_suffix_indexed_regex("\\\\\\(")
  let latex_closing_backslash_parenthesis_indexed_regex =
    infra.unescaped_suffix_indexed_regex("\\\\\\)")

  // _ _
  let opening_single_underscore_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[\\s({\\[]|^", "_", "[^\\s)}\\]_]|$")

  let opening_or_closing_single_underscore_indexed_regex_without_asterisks =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[\\*_]|^", "_", "[^\\s)}\\]\\*_]|$")

  let opening_or_closing_single_underscore_indexed_regex_with_asterisks =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[_]|^", "_", "[^\\s)}\\]_]|$")

  let closing_single_underscore_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[_]|^", "_", "[\\s)}\\]]|$")

  // ` `
  let opening_single_backtick_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[\\s({\\[]|^", "`", "[^\\s)}\\]_]|$")

  // let opening_or_closing_single_backtick_indexed_regex_without_asterisks =
  //   infra.l_m_r_1_3_indexed_regex("[^\\s({\\[\\*_]|^", "`", "[^\\s)}\\]\\*_]|$")

  // let opening_or_closing_single_backtick_indexed_regex_with_asterisks =
  //   infra.l_m_r_1_3_indexed_regex("[^\\s({\\[_]|^", "`", "[^\\s)}\\]_]|$")

  let closing_single_backtick_indexed_regex =
    infra.l_m_r_1_3_indexed_regex("[^\\s({\\[_]|^", "`", "[\\s)}\\]]|$")

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
    group_siblings_not_separated_by_blank_lines(
      #("VerticalChunk", ["MathBlock"]),
    ),
    unwrap_tags(["WriterlyBlankLine"]),
    concatenate_text_nodes(),
    // ************************
    // \( \) ******************
    // ************************
    split_by_indexed_regexes(
      #(
        [
          #(
            latex_opening_backslash_parenthesis_indexed_regex,
            "OpeningLatexPara",
          ),
          #(
            latex_closing_backslash_parenthesis_indexed_regex,
            "ClosingLatexPara",
          ),
        ],
        ["MathBlock"],
      ),
    ),
    pair_bookends(#(["OpeningLatexPara"], ["ClosingLatexPara"], "Math")),
    fold_tags_into_text([
      #("OpeningLatexPara", "\\("),
      #("ClosingLatexPara", "\\)"),
    ]),
    // ************************
    // _ & * & ` ******************
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
          #(opening_single_backtick_indexed_regex, "OpeningBackTick"),
          #(closing_single_backtick_indexed_regex, "ClosingBackTick"),
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
    pair_bookends(#(
      ["OpeningBackTick", "OpeningOrClosingBackTick"],
      ["ClosingBackTick", "OpeningOrClosingBackTick"],
      "code",
    )),
    fold_tags_into_text([
      #("OpeningOrClosingUnderscore", "_"),
      #("OpeningUnderscore", "_"),
      #("ClosingUnderscore", "_"),
      #("OpeningOrClosingAsterisk", "*"),
      #("OpeningAsterisk", "*"),
      #("ClosingAsterisk", "*"),
      #("OpeningOrClosingBackTick", "`"),
      #("OpeningBackTick", "`"),
      #("ClosingBackTick", "`"),
    ]),
    // ************************
    // cleanup $$, \(, \)
    // ************************
    prepend_append_to_text_children_of.prepend_append_to_text_children_of([
      #("$$", "$$", "MathBlock"),
      #("\\(", "\\)", "Math"),
    ]),
    fold_tag_contents_into_text.fold_tag_contents_into_text([
      "MathBlock", "Math",
    ]),
    counter_desugarer(),
    // generate_id_for_handles(),
    // define_article_output_path(#("Chapter", "/lecture-notes", "tsx", "path")),
    // handles_dict_factory_desugarer([#("Chapter", "path")]),
    counter_handles_desugarer(),
    // more
    concatenate_text_nodes(),
    // remove_empty_lines(),
    remove_vertical_chunks_with_no_text_child(),
    rename_tag.rename_tag(#("VerticalChunk", "Paragraph")),
    rename_tag.rename_tag(#("p", "Paragraph")),
    unwrap_tag_when_child_of_tags.unwrap_tag_when_child_of_tags(
      #("Paragraph", ["span", "code", "tt", "figcaption", "em"]),
    ),
  ]
}
