// case thing {
//   Thing1(a1, a2) -> return some_function_of_a1_a2
//   Thing2(a3, a4) -> return some_function_of_a3_a4
//   Thing3(a5, a6) -> return some_function_of_a5_a6
//   Thing4(a7, a8) -> put_a7_a8_in_scope_and_break_we_will_continue_below
// }

// fn on_thing1_thing2_thing3_thing4(
//   thing : Thing,
//   f1 : fn(a1: TypeOfA1, a2: TypeOfA2) -> z,
//   f2 : fn(a3: TypeOfA3, a4: TypeOfA4) -> z,
//   f3 : fn(a4: TypeOfA5, a6: TypeOfA6) -> z,
//   f4 : fn(a6: TypeOfA5, a8: TypeOfA6) -> z,
// ) -> z {
//   case thing {
//     Thing1(a1, a2) -> f1(a1, a2)
//     Thing2(a3, a4) -> f2(a3, a4)
//     Thing2(a5, a6) -> f3(a5, a6)
//     Thing2(a7, a8) -> f4(a7, a8)
//   }
// }

// use #(a7, a8) <- on_thing1_thing2_thing3_thing4(
//   thing,
//   fn(a1, a2) -> {...},
//   fn(a3, a4) -> {...},
//   fn(a5, a6) -> {...},
// )

// // continue working...

// use ok_value : a <- on_error_ok(
//   result : Result(a, b),
//   fn (error_payload : b) -> {...},
// )

// ...

// use some_value : a <- on_none_some(
//   option : Option(a),
//   fn () -> {...}, // what to do on 'None' option
// )

// use Nil <- on_true_false(
//   boolean,
//   fn () -> {...}, // what to do on true
// ) 
