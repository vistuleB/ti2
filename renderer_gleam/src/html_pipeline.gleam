import desugarers/replace_text_parent_by_text_bookends.{replace_text_parent_by_text_bookends}
import desugarers/correct_parsed_html_tags.{correct_parsed_html_tags}
import infrastructure.{type Pipe}

pub fn html_pipeline() -> List(Pipe) {
  [
    // correct_parsed_html_tags(),
    replace_text_parent_by_text_bookends(#("i", "_", "_")),
    replace_text_parent_by_text_bookends(#("b", "*", "*")),
    replace_text_parent_by_text_bookends(#("code", "`", "`")),
  ]
}