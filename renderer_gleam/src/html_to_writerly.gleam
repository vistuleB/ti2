import gleam/option
import html_pipeline.{html_pipeline}
import gleam/io
import vxml_parser.{htmgrrrl_based_html_parser, vxmls_to_string, type VXML} as vp
import vxml_renderer as vr
import writerly_parser as wp
import blamedlines as bl
import gleam/string

const ins = string.inspect


fn splitter(vxml: VXML) -> Result(List(#(String, VXML, Nil)), a) {
  Ok([#("test.emu", vxml, Nil)])
}

fn emitter(pair: #(String, VXML, Nil)) -> Result(#(String, List(bl.BlamedLine), Nil), String) {
  let #(path, vxml, Nil) = pair

  Ok(#(path, 
  vp.vxml_to_blamed_lines(vxml)
  , Nil))
}

pub fn prettifier(
  _: String,
  _: #(String, d),
  _: Bool,
) -> Result(String, #(Int, String)) {
  Ok("")
}

pub fn html_to_writerly(file: String) {
  
  let renderer =
    vr.Renderer(
      assembler: wp.assemble_blamed_lines,
      source_parser: fn(bl){ Ok(bl.blamed_lines_to_string(bl)) },
      parsed_source_converter: fn(_) { htmgrrrl_based_html_parser(file) },
      pipeline: html_pipeline.html_pipeline(),
      splitter: splitter,
      emitter: emitter,
      prettifier: prettifier,
    )

  let parameters =
    vr.RendererParameters(
      input_dir: file,
      output_dir: option.Some("../emu_content"),
      prettifying_option: False,
    )
    // |> vr.amend_renderer_paramaters_by_command_line_amendment(amendments)

  let debug_options =
    vr.empty_renderer_debug_options("../renderer_artifacts")
    // |> vr.amend_renderer_debug_options_by_command_line_amendment(io.debug(
    //   amendments,
    // ))

  case vr.run_renderer(renderer, parameters, debug_options) {
    Ok(Nil) -> {
      Nil
    }
    Error(error) -> io.println("\nrenderer error: " <> ins(error) <> "\n")
  }

}