import html_to_writerly
import argv
import blamedlines.{type Blame, type BlamedLine, Blame, BlamedLine}
import gleam/io
import gleam/list
import gleam/option.{Some}
import gleam/result
import gleam/string
import infrastructure as infra
import pipeline
import simplifile
import vxml_parser.{type VXML, BlamedAttribute}
import vxml_renderer as vr
import writerly_parser as wp

const ins = string.inspect

type FragmentType {
  Chapter(Int)
}

type Ti2SplitterError {
  NoTOCAuthorSuppliedContent
  MoreThanOneTOCAuthorSuppliedContent
  NoPanelAuthorSuppliedContent
  MoreThanOnePanelAuthorSuppliedContent
}

type Ti2EmitterError {
  NumberAttributeAlreadyExists(FragmentType, Int)
}

fn blame_us(message: String) -> Blame {
  Blame(message, -1, [])
}

fn ti2_splitter(
  root: VXML,
) -> Result(List(#(String, VXML, FragmentType)), Ti2SplitterError) {
  let chapter_vxmls = infra.children_with_tag(root, "Chapter")
  // let bootcamp_vxmls = infra.children_with_tag(root, "Bootcamp")
  // use toc_vxml <- infra.on_error_on_ok(
  //   infra.unique_child_with_tag(root, "TOCAuthorSuppliedContent"),
  //   with_on_error: fn(error) {
  //     case error {
  //       infra.MoreThanOne -> Error(MoreThanOneTOCAuthorSuppliedContent)
  //       infra.LessThanOne -> Error(NoTOCAuthorSuppliedContent)
  //     }
  //   },
  // )

  // use panel_vxml <- infra.on_error_on_ok(
  //   infra.unique_child_with_tag(root, "PanelAuthorSuppliedContent"),
  //   with_on_error: fn(error) {
  //     case error {
  //       infra.MoreThanOne -> Error(MoreThanOnePanelAuthorSuppliedContent)
  //       infra.LessThanOne -> Error(NoPanelAuthorSuppliedContent)
  //     }
  //   },
  // )
  let assert Ok(chapters) = simplifile.read_directory("../emu_content/chapters")
  let chapters =
    chapters
    |> list.filter(fn(c) { c != "__parent.emu" })
    |> list.sort(string.compare)
    |> list.map(fn(c) { string.drop_end(c, 4) })

  Ok(
    list.flatten([
      // [
      //   #(
      //     "components/TOCAuthorSuppliedContent.tsx",
      //     toc_vxml,
      //     TOCAuthorSuppliedContent,
      //   ),
      // ],
      // [
      //   #(
      //     "components/PanelAuthorSuppliedContent.tsx",
      //     panel_vxml,
      //     PanelAuthorSuppliedContent,
      //   ),
      // ],
      list.index_map(chapter_vxmls, fn(vxml, index) {
        let assert [chapter_name, ..] = list.drop(chapters, index)
        #(
          "routes/lecture-notes/" <> chapter_name <> ".tsx",
          vxml,
          Chapter(index + 1),
        )
      }),
      // list.index_map(bootcamp_vxmls, fn(c, index) {
    //   #(
    //     "routes/article/bootcamp" <> ins(index + 1) <> ".tsx",
    //     c,
    //     Bootcamp(index + 1),
    //   )
    // }),
    ]),
  )
}

fn ti2_chapter_bootcamp_common_emitter(
  path: String,
  fragment: VXML,
  fragment_type: FragmentType,
  number: Int,
) -> Result(#(String, List(BlamedLine), FragmentType), Ti2EmitterError) {
  let blame =
    BlamedAttribute(blame_us("ti2_fragment_emitterL65"), "number", ins(number))

  use with_attribute <- infra.on_error_on_ok(
    over: infra.prepend_unique_key_attribute(fragment, blame),
    with_on_error: fn(_) {
      Error(NumberAttributeAlreadyExists(fragment_type, number))
    },
  )

  let lines =
    list.flatten([
      [
        case fragment_type {
          Chapter(_) ->
            BlamedLine(
              blame_us("ti2_fragment_emitter"),
              0,
              "import Chapter from \"~/components/Chapter\";",
            )
          // Bootcamp(_) ->
          //   BlamedLine(
          //     blame_us("ti2_fragment_emitter"),
          //     0,
          //     "import Bootcamp from \"~/components/Bootcamp\";",
          //   )
          _ -> panic as "bad fragment_type"
        },
      ],
      [
        BlamedLine(blame_us("ti2_fragment_emitter"), 0, "const Article = () => {"),
        BlamedLine(blame_us("ti2_fragment_emitter"), 2, "return ("),
      ],
      vxml_parser.vxml_to_jsx_blamed_lines(with_attribute, 4),
      [
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

// fn toc_emitter(
//   path: String,
//   fragment: VXML,
//   fragment_type: FragmentType,
// ) -> Result(#(String, List(BlamedLine), FragmentType), ti2EmitterError) {
//   let lines =
//     list.flatten([
//       [
//         BlamedLine(
//           blame_us("toc_emitter"),
//           0,
//           "import TOCTitle from \"./TOCTitle\";",
//         ),
//         BlamedLine(
//           blame_us("toc_emitter"),
//           0,
//           "import TOCItem from \"./TOCItem\";",
//         ),
//         BlamedLine(
//           blame_us("toc_emitter"),
//           0,
//           "import Spacer from \"./Spacer\";",
//         ),
//         BlamedLine(blame_us("toc_emitter"), 0, ""),
//         BlamedLine(
//           blame_us("toc_emitter"),
//           0,
//           "const TOCAuthorSuppliedContent = () => {",
//         ),
//         BlamedLine(blame_us("toc_emitter"), 2, "return ("),
//         BlamedLine(blame_us("toc_emitter"), 4, "<>"),
//       ],
//       vxml_parser.vxmls_to_jsx_blamed_lines(fragment |> infra.get_children, 6),
//       [
//         BlamedLine(blame_us("toc_emitter"), 4, "</>"),
//         BlamedLine(blame_us("toc_emitter"), 2, ");"),
//         BlamedLine(blame_us("toc_emitter"), 0, "};"),
//         BlamedLine(blame_us("toc_emitter"), 0, ""),
//         BlamedLine(
//           blame_us("toc_emitter"),
//           0,
//           "export default TOCAuthorSuppliedContent;",
//         ),
//       ],
//     ])

//   Ok(#(path, lines, fragment_type))
// }

// fn panel_emitter(
//   path: String,
//   fragment: VXML,
//   fragment_type: FragmentType,
// ) -> Result(#(String, List(BlamedLine), FragmentType), ti2EmitterError) {
//   let lines =
//     list.flatten([
//       [
//         BlamedLine(
//           blame_us("panel_emitter"),
//           0,
//           "import PanelTitle from \"./PanelTitle\";",
//         ),
//         BlamedLine(
//           blame_us("panel_emitter"),
//           0,
//           "import PanelItem from \"./PanelItem\";",
//         ),
//         BlamedLine(blame_us("panel_emitter"), 0, ""),
//         BlamedLine(
//           blame_us("panel_emitter"),
//           0,
//           "const PanelAuthorSuppliedContent = () => {",
//         ),
//         BlamedLine(blame_us("panel_emitter"), 2, "return ("),
//         BlamedLine(blame_us("panel_emitter"), 4, "<>"),
//       ],
//       vxml_parser.vxmls_to_jsx_blamed_lines(fragment |> infra.get_children, 6),
//       [
//         BlamedLine(blame_us("panel_emitter"), 4, "</>"),
//         BlamedLine(blame_us("panel_emitter"), 2, ");"),
//         BlamedLine(blame_us("panel_emitter"), 0, "};"),
//         BlamedLine(blame_us("panel_emitter"), 0, ""),
//         BlamedLine(
//           blame_us("panel_emitter"),
//           0,
//           "export default PanelAuthorSuppliedContent;",
//         ),
//       ],
//     ])

//   Ok(#(path, lines, fragment_type))
// }

fn ti2_emitter(
  pair: #(String, VXML, FragmentType),
) -> Result(#(String, List(BlamedLine), FragmentType), Ti2EmitterError) {
  let #(path, vxml, fragment_type) = pair
  case fragment_type {
    Chapter(n) ->
      ti2_chapter_bootcamp_common_emitter(path, vxml, fragment_type, n)
    // Bootcamp(n) ->
    //   ti2_chapter_bootcamp_common_emitter(path, vxml, fragment_type, n)
    // TOCAuthorSuppliedContent -> toc_emitter(path, vxml, fragment_type)
    // PanelAuthorSuppliedContent -> panel_emitter(path, vxml, fragment_type)
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

      html_to_writerly.html_to_writerly(path, amendments)
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
          assembler: wp.assemble_blamed_lines,
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
