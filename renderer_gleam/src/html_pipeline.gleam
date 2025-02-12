import desugarers/unwrap_tags_if_no_attributes.{unwrap_tags_if_no_attributes}
import desugarers/insert_bookend_text_if_no_attributes.{insert_bookend_text_if_no_attributes}
import desugarers/extract_starting_and_ending_spaces.{extract_starting_and_ending_spaces}
import desugarers/fold_tags_into_text.{fold_tags_into_text}
import desugarers/surround_elements_by.{surround_elements_by}


import infrastructure.{type Pipe}

pub fn html_pipeline() -> List(Pipe) {
  [
    extract_starting_and_ending_spaces(["i", "b", "strong", "em", "code"]),
    insert_bookend_text_if_no_attributes([
      #("i", "_", "_"),
      #("em", "_", "_"),
      #("b", "*", "*"),
      #("strong", "*", "*"),
      #("code", "`", "`"),
    ]),
    surround_elements_by(#(["i", "b", "strong", "em", "code"], "go23_xU", "go23_xU")),
    unwrap_tags_if_no_attributes(["i", "b", "strong", "em", "code"]),
    fold_tags_into_text([#("go23_xU", "")]),
    // insert_string_at_end_of([#("em", " ")]),
  ]
}