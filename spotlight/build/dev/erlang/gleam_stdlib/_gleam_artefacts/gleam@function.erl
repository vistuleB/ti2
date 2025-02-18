-module(gleam@function).
-compile([no_auto_import, nowarn_unused_vars, nowarn_unused_function, nowarn_nomatch]).

-export([flip/1, identity/1, tap/2]).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/function.gleam", 4).
-spec flip(fun((EFG, EFH) -> EFI)) -> fun((EFH, EFG) -> EFI).
flip(Fun) ->
    fun(B, A) -> Fun(A, B) end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/function.gleam", 10).
-spec identity(EFJ) -> EFJ.
identity(X) ->
    X.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/function.gleam", 19).
-spec tap(EFK, fun((EFK) -> any())) -> EFK.
tap(Arg, Effect) ->
    Effect(Arg),
    Arg.
