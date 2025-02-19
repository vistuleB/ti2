import html_to_writerly
import argv
import blamedlines.{type Blame, type BlamedLine, Blame, BlamedLine}
import gleam/io
import gleam/list
import gleam/option.{Some}
import gleam/string
import infrastructure as infra
import pipeline
import vxml_parser.{type VXML, BlamedAttribute}
import vxml_renderer as vr
import writerly_parser as wp

const ins = string.inspect

type FragmentType {
  Chapter(Int)
  TOCAuthorSuppliedContent
}

type Ti2SplitterError {
  NoTOCAuthorSuppliedContent
  MoreThanOneTOCAuthorSuppliedContent
}

type Ti2EmitterError {
  NumberAttributeAlreadyExists(FragmentType, Int)
}

fn blame_us(message: String) -> Blame {
  Blame(message, -1, [])
}

fn prepand_0(number: String) {
  case string.length(number) {
    1 -> "0" <> number
    _ -> number
  }
}

fn ti2_splitter(
  root: VXML,
) -> Result(List(#(String, VXML, FragmentType)), Ti2SplitterError) {
  let chapter_vxmls = infra.descendants_with_tag(root, "Section")
  io.println("the number of chapters found was: " <> chapter_vxmls |> list.length |> string.inspect)
  use toc_vxml <- infra.on_error_on_ok(
    infra.unique_child_with_tag(root, "TOCAuthorSuppliedContent"),
    with_on_error: fn(error) {
      case error {
        infra.MoreThanOne -> Error(MoreThanOneTOCAuthorSuppliedContent)
        infra.LessThanOne -> Error(NoTOCAuthorSuppliedContent)
      }
    },
  )

  Ok(
    list.flatten([
      [
        #(
          "components/TOCAuthorSuppliedContent.tsx",
          toc_vxml,
          TOCAuthorSuppliedContent,
        ),
      ],
      list.index_map(chapter_vxmls, fn(vxml, index) {
        // use title_attr <- infra.on_none_on_some(
        //   infra.get_attribute_by_name(vxml, "title_en"),
        //   with_on_none: Error(Ti2SplitterError(Message(tp <> " missing title_en attribute")))
        // )
        // use number_attribute <- infra.on_none_on_some(
        //   infra.get_attribute_by_name(item, "number"),
        //   with_on_none: Error(Ti2SplitterError(Message(tp <> " missing number attribute")))
        // )
        let assert Some(title_attr) = infra.get_attribute_by_name(vxml, "title_en")
        let assert Some(number_attribute) = infra.get_attribute_by_name(vxml, "number")
        let section_name = 
            number_attribute.value |> string.split(".") |> list.map(prepand_0) |> string.join("-") 
            <> "-" 
            <> title_attr.value |> string.replace(" ", "-")

        #(
          "routes/lecture-notes/" <> section_name <> ".tsx",
          vxml,
          Chapter(index + 1),
        )
      }),
    ]),
  )
}

fn ti2_section_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
  number: Int,
) -> Result(#(String, List(BlamedLine), FragmentType), Ti2EmitterError) {
  let number_attribute = BlamedAttribute(blame_us("lbp_fragment_emitterL65"), "count", ins(number))

  use fragment <- infra.on_error_on_ok(
    over: infra.prepend_unique_key_attribute(fragment, number_attribute),
    with_on_error: fn(_) { Error(NumberAttributeAlreadyExists(fragment_type, number)) }
  )

  let lines =
    list.flatten([
      [
        case fragment_type {
          Chapter(_) ->
            BlamedLine(
              blame_us("ti2_fragment_emitter"),
              0,
              "import Section from \"~/components/Section\";",
            )
          _ -> panic as "bad fragment_type"
        },
      ],
      [
        BlamedLine(blame_us("ti2_fragment_emitter"), 0, "import Paragraph from \"~/components/Paragraph\";"),
        BlamedLine(blame_us("ti2_fragment_emitter"), 0, "import Container from \"~/components/Container\";"),
        BlamedLine(blame_us("ti2_fragment_emitter"), 0, "import Carousel from \"~/components/Carousel\";"),
        BlamedLine(blame_us("ti2_fragment_emitter"), 0, "import NumberedTitle from \"~/components/NumberedTitle\";"),

        BlamedLine(blame_us("ti2_fragment_emitter"), 0, "const Article = () => {"),
        BlamedLine(blame_us("ti2_fragment_emitter"), 2, "return ("),
        BlamedLine(blame_us("ti2_fragment_emitter"), 4, "<Container>"),

      ],
      vxml_parser.vxml_to_jsx_blamed_lines(fragment, 6),
      [
        BlamedLine(blame_us("ti2_fragment_emitter"), 4, "</Container>"),
        BlamedLine(blame_us("ti2_fragment_emitter"), 2, ");"),
        BlamedLine(blame_us("ti2_fragment_emitter"), 0, "};"),
        BlamedLine(blame_us("ti2_fragment_emitter"), 0, ""),
        BlamedLine(
          blame_us("ti2_fragment_emitter"),
          0,
          "export default Article;",
        ),
      ],
    ])

  Ok(#(path, lines, fragment_type))
}

fn toc_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
) -> Result(#(String, List(BlamedLine), FragmentType), Ti2EmitterError) {
  let lines =
    list.flatten([
      [
        // BlamedLine(
        //   blame_us("toc_emitter"),
        //   0,
        //   "import TOCTitle from \"./TOCTitle\";",
        // ),
        BlamedLine(
          blame_us("toc_emitter"),
          0,
          "import TOCItem from \"./TOCItem\";",
        ),
        // BlamedLine(
        //   blame_us("toc_emitter"),
        //   0,
        //   "import Spacer from \"./Spacer\";",
        // ),
        BlamedLine(blame_us("toc_emitter"), 0, ""),
        BlamedLine(
          blame_us("toc_emitter"),
          0,
          "const TOCAuthorSuppliedContent = () => {",
        ),
        BlamedLine(blame_us("toc_emitter"), 2, "return ("),
        BlamedLine(blame_us("toc_emitter"), 4, "<>"),
      ],
      vxml_parser.vxmls_to_jsx_blamed_lines(fragment |> infra.get_children, 6),
      [
        BlamedLine(blame_us("toc_emitter"), 4, "</>"),
        BlamedLine(blame_us("toc_emitter"), 2, ");"),
        BlamedLine(blame_us("toc_emitter"), 0, "};"),
        BlamedLine(blame_us("toc_emitter"), 0, ""),
        BlamedLine(
          blame_us("toc_emitter"),
          0,
          "export default TOCAuthorSuppliedContent;",
        ),
      ],
    ])

  Ok(#(path, lines, fragment_type))
}


fn ti2_emitter(
  pair: #(String, VXML, FragmentType),
) -> Result(#(String, List(BlamedLine), FragmentType), Ti2EmitterError) {
  let #(path, vxml, fragment_type) = pair
  case fragment_type {
    Chapter(n) ->
      ti2_section_emitter(path, vxml, fragment_type, n)
    TOCAuthorSuppliedContent -> toc_emitter(path, vxml, fragment_type)
  }
}

fn cli_usage() {
  io.println("command line options (mix & match any combination):")
  io.println("")
  io.println("      --prettier")
  io.println("         -> run npm prettier on emitted content")
  io.println("      --spotlight <path1> <path2> ...")
  io.println("         -> spotlight the given paths before assembling")
  io.println("      --debug-pipeline-<x>-<y>")
  io.println("         -> print output of pipes number x up to y")
  io.println("      --debug-pipeline-<x>")
  io.println("         -> print output of pipe number x")
  io.println("      --debug-pipeline-0-0")
  io.println("         -> print output of all pipes")
  io.println("      --debug-fragments-bl <local_path1> <local_path2> ...")
  io.println("         -> print blamed lines of local paths")
  io.println("      --debug-fragments-printed <local_path1> <local_path2> ...")
  io.println("         -> print unprettified output files of local paths")
  io.println(
    "      --debug-fragments-prettified <local_path1> <local_path2> ...",
  )
  io.println("         -> print prettified output files of local paths")
}

pub fn main() {
  // parse html first
  let args = argv.load().arguments

  case args {
    ["--parse-html", path, ..rest] -> {
      use amendments <- infra.on_error_on_ok(
        io.debug(
          vr.process_command_line_arguments(rest, [
            #("--prettier", True),
          ]),
        ),
        fn(error) {
          io.println("")
          io.println("command line error: " <> ins(error))
          io.println("")
          cli_usage()
        },
      )

      let _ = html_to_writerly.html_to_writerly(path, amendments)
      Nil
    }
    _ -> {
      use amendments <- infra.on_error_on_ok(
        io.debug(
          vr.process_command_line_arguments(args, [
            #("--prettier", True),
          ]),
        ),
        fn(error) {
          io.println("")
          io.println("command line error: " <> ins(error))
          io.println("")
          cli_usage()
        },
      )
      let renderer =
        vr.Renderer(
          assembler: wp.assemble_blamed_lines_advanced_mode(_, amendments.assemble_blamed_lines_selector_args),
          source_parser: wp.parse_blamed_lines,
          parsed_source_converter: wp.writerlys_to_vxmls,
          pipeline: pipeline.our_pipeline(),
          splitter: ti2_splitter,
          emitter: ti2_emitter,
          prettifier: vr.prettier_prettifier,
        )

      let parameters =
        vr.RendererParameters(
          input_dir: "../emu_content",
          output_dir: Some("../src"),
          prettifying_option: False,
        )
        |> vr.amend_renderer_paramaters_by_command_line_amendment(amendments)

      let debug_options =
        vr.empty_renderer_debug_options("../renderer_artifacts")
        |> vr.amend_renderer_debug_options_by_command_line_amendment(io.debug(
          amendments
        ), pipeline.our_pipeline())

      case vr.run_renderer(renderer, parameters, debug_options) {
        Ok(Nil) -> {
          Nil
        }
        Error(error) -> io.println("\nrenderer error: " <> ins(error) <> "\n")
      }
    }
  }

}
