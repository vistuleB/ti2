import desugarers/fold_tag_into_next_text_node.{fold_tag_into_next_text_node}
import desugarers/fold_tag_into_prev_text_node.{fold_tag_into_prev_text_node}

import desugarers/replace_text_parent_by_text_bookends.{replace_text_parent_by_text_bookends}
import infrastructure.{type Pipe}

pub fn html_pipeline() -> List(Pipe) {
  [
    replace_text_parent_by_text_bookends(#("i", "i_opening", "i_closing")),
    fold_tag_into_next_text_node(#("i_opening", "_")),
    fold_tag_into_prev_text_node(#("i_closing", "_")),

    replace_text_parent_by_text_bookends(#("b", "b_opening", "b_closing")),
    fold_tag_into_next_text_node(#("b_opening", "*")),
    fold_tag_into_prev_text_node(#("b_closing", "*")),

    replace_text_parent_by_text_bookends(#("code", "code_opening", "code_closing")),
    fold_tag_into_next_text_node(#("code_opening", "`")),
    fold_tag_into_prev_text_node(#("code_closing", "`")),
    
  ]
}