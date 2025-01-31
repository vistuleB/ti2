import desugarers/unwrap_tags_if_no_attributes.{unwrap_tags_if_no_attributes}
import desugarers/insert_bookend_text_if_no_attributes.{insert_bookend_text_if_no_attributes}
import desugarers/extract_starting_and_ending_spaces.{extract_starting_and_ending_spaces}

import infrastructure.{type Pipe}

pub fn html_pipeline() -> List(Pipe) {
  [
    extract_starting_and_ending_spaces(["i", "b", "strong"]),
    insert_bookend_text_if_no_attributes([
      #("i", "_", "_"),
      #("b", "*", "*"),
      #("strong", "*", "*"),
    ]),
    unwrap_tags_if_no_attributes(["i", "b", "strong"]),
  ]
}