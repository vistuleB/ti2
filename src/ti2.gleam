import argv
import formatter_renderer
import gleam/dict
import gleam/list
import gleam/io
import gleam/string
import main_renderer
import on
import desugaring as ds

const ins = string.inspect

fn local_cli_usage() {
  let margin = "   "
  io.println(margin <> "--fmt [<cols>] [<cols> <penalty>]")
  io.println(margin <> "  -> (local option) run the formatter")
  io.println("")
  io.println(margin <> "     optional arguments:")
  io.println("")
  io.println(margin <> "     • <cols>: preferred line length")
  io.println(margin <> "     • <cols> <penalty>: preferred line")
  io.println(margin <> "       length and indentation penalty (number")
  io.println(margin <> "       of chars subtracted from line length at")
  io.println(margin <> "       each added level of indentation in the file)")
  io.println("")
}

pub fn main() {
  let args =
    argv.load().arguments
    |> list.map(fn(x) { case x {
      "only" -> "--only"
      _ -> x
    }})


  case args {
    ["--help"] | ["-help"] | ["-h"] -> {
      ds.basic_cli_usage("\nCommand line options (basic):")
      local_cli_usage()
    }

    ["--esoteric"] -> {
      ds.basic_cli_usage("\nCommand line options (basic):")
      local_cli_usage()
      ds.advanced_cli_usage("Command line options (esoteric):")
    }

    _ -> {
      use amendments <-  on.error_ok(
        ds.process_command_line_arguments(args, ["--fmt"]),
        fn(error) {
          io.println("")
          io.println("cli error: " <> ins(error))
          ds.basic_cli_usage("\ncommand line options:")
          local_cli_usage()
        }
      )

      case dict.get(amendments.user_args, "--fmt") {
        Ok(_) -> {
          io.println("")
          io.println("wly -> wly formatter")
          formatter_renderer.formatter_renderer(amendments)
        }

        Error(_) -> {
          io.println("")
          io.println("wly -> html renderer")
          main_renderer.main_renderer(amendments)
        }
      }
    }
  }
}
