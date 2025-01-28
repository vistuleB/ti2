import reverse_desugarers/delimiters.{delimiters}
import infrastructure.{type Pipe}

pub fn html_pipeline() -> List(Pipe) {
  [
    delimiters(#("i", "_")),
  ]
}