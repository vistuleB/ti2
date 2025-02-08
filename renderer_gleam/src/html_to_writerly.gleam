import simplifile
import gleam/result
import gleam/list
import gleam/option.{type Option}
import html_pipeline.{html_pipeline}
import gleam/io
import vxml_parser.{xmlm_based_html_parser, vxmls_to_string, type VXML} as vp
import vxml_renderer as vr
import writerly_parser as wp
import blamedlines as bl
import gleam/string

const ins = string.inspect

fn blame_us(message: String) -> bl.Blame {
  bl.Blame(message, -1, [])
}

fn each_prev_next(l: List(a), prev: Option(a), f: fn(a, Option(a), Option(a)) -> b) -> Nil {
   case l {
    [] -> Nil
    [first, ..rest] -> {
      let next = case rest {
        [] -> option.None
        [next, .._] -> option.Some(next)
      }
      f(first, prev, next)
      each_prev_next(rest, option.Some(first) ,f)
    }
  }
} 

fn remove_0_at_start(s: String) -> String {
  case string.starts_with(s, "0") {
    True -> string.drop_start(s, 1)
    False -> s
  }
}

fn construct_left_nav(prev_file: Option(String)) {
  let toc_link = vp.V(
    blame_us("toc link"),
    "a",
    [vp.BlamedAttribute(blame_us("toc link attribute"), "href", "../vorlesungsskript")], [vp.T(blame_us("toc link text node"),
      [
        vp.BlamedContent(blame_us("toc link content"), "Inhaltsverzeichnis")
      ]
      )
    ]
  )

  let prev_chapter_link = case prev_file {
    option.Some(prev_file) -> {
      let prev_file_name = string.drop_end(prev_file, 5)
      let assert [prev_number_first, prev_number_second, ..] = string.split(prev_file_name, "-")
      let prev_number = string.join([remove_0_at_start(prev_number_first), remove_0_at_start(prev_number_second)], ".")

      [vp.V(
        blame_us("Prev chapter link"),
        "a",
        [vp.BlamedAttribute(blame_us("Prev chapter attribute"), "href", prev_file_name)], [vp.T(blame_us("Prev chapter text node"),
          [
            vp.BlamedContent(blame_us("Prev chapter content"), "&lt;&lt; Kapitel " <> prev_number)
          ]
          )
        ]
      )]
    }
    option.None -> []
  }
  

  vp.V(blame_us("left nav div"), "div", [vp.BlamedAttribute(blame_us("left nav attribute"), "id", "link-to-toc")], list.flatten([[toc_link], prev_chapter_link]))
}

fn construct_right_nav(next_file: Option(String)) {
 let overview_link = vp.V(
    blame_us("overview link"),
    "a",
    [vp.BlamedAttribute(blame_us("overview link attribute"), "href", "/")], [vp.T(blame_us("overview link text node"),
      [
        vp.BlamedContent(blame_us("overview link content"), "zur Kursübersicht")
      ]
      )
    ]
  )

  let next_chapter_link = case next_file {
    option.Some(next_file) -> {
     let next_file_name = string.drop_end(next_file, 5)
      let assert [next_number_first, next_number_second, ..] = string.split(next_file_name, "-")
      let next_number = string.join([remove_0_at_start(next_number_first), remove_0_at_start(next_number_second)], ".")

      [vp.V(
        blame_us("next chapter link"),
        "a",
        [
          vp.BlamedAttribute(blame_us("next chapter attribute"), "href", next_file_name)
        ], [vp.T(blame_us("next chapter text node"),
          [
            vp.BlamedContent(blame_us("next chapter content"), "Kapitel " <> next_number <> " &gt;&gt;")
          ]
          )
        ]
      )]
    }
    option.None -> []
  }

 
  vp.V(blame_us("right nav div"), "div", [vp.BlamedAttribute(blame_us("right nav attribute"), "id", "link-to-overview"), vp.BlamedAttribute(blame_us("right nav attribute"), "style", "text-align: end")], list.flatten([[overview_link], next_chapter_link]))
}

fn splitter(vxml: VXML, file: String) -> Result(List(#(String, VXML, Nil)), a) {
  let emu_file = file |> string.drop_end(5) <> ".emu"
  Ok([#(emu_file, vxml, Nil)])
}

fn emitter(pair: #(String, VXML, Nil), prev_file: Option(String), next_file: Option(String)) -> Result(#(String, List(bl.BlamedLine), Nil), String) {
  let #(path, vxml, Nil) = pair
  let root = vp.V(blame_us("Root"), "Chapter", [], [
    construct_left_nav(prev_file), 
    construct_right_nav(next_file), 
    vxml
  ])
  let writerlys = wp.vxmls_to_writerlys([root])

  Ok(#(path, wp.writerlys_to_blamed_lines(writerlys), Nil))
  // Ok(#(path, vp.vxml_to_blamed_lines(vxml), Nil))

}

pub fn prettifier(
  _: String,
  _: #(String, d),
  _: Bool,
) -> Result(String, #(Int, String)) {
  Ok("")
}

pub fn html_to_writerly(dir: String, amendments: vr.CommandLineAmendments(Bool)) {
  use files <- result.try(simplifile.read_directory(dir))
  let files = list.sort(files, string.compare)

  each_prev_next(files, option.None, fn(file, prev, next) {
    let renderer =
      vr.Renderer(
        assembler: fn(_) { Ok([]) },
        source_parser: fn(_){ Ok("") },
        parsed_source_converter: fn(_) { 
          let assert Ok(vxmls) = xmlm_based_html_parser(dir <> file)
          [vxmls]
        },
        pipeline: html_pipeline.html_pipeline(),
        splitter: fn(vxml) { splitter(vxml, file) },
        emitter: fn(pair) { emitter(pair, prev, next) },
        prettifier: prettifier,
      )

    let parameters =
      vr.RendererParameters(
        input_dir: "../public/pages",
        output_dir: option.Some("../emu_content/chapters"),
        prettifying_option: False,
      )
      |> vr.amend_renderer_paramaters_by_command_line_amendment(amendments)

    let debug_options =
      vr.empty_renderer_debug_options("../renderer_artifacts")
      |> vr.amend_renderer_debug_options_by_command_line_amendment(io.debug(
        amendments), html_pipeline.html_pipeline())

    case vr.run_renderer(renderer, parameters, debug_options) {
      Ok(Nil) -> {
        io.println("\nprinted: " <> ins(file) <> " as html\n")
      }
      Error(error) -> io.println("\nrenderer error: " <> ins(error) <> "\n")
    }
  })
  Ok(Nil)
}