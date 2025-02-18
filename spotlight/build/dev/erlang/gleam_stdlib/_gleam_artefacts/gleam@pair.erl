-module(gleam@pair).
-compile([no_auto_import, nowarn_unused_vars, nowarn_unused_function, nowarn_nomatch]).

-export([first/1, second/1, swap/1, map_first/2, map_second/2, new/2]).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/pair.gleam", 10).
-spec first({YA, any()}) -> YA.
first(Pair) ->
    {A, _} = Pair,
    A.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/pair.gleam", 24).
-spec second({any(), YD}) -> YD.
second(Pair) ->
    {_, A} = Pair,
    A.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/pair.gleam", 38).
-spec swap({YE, YF}) -> {YF, YE}.
swap(Pair) ->
    {A, B} = Pair,
    {B, A}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/pair.gleam", 53).
-spec map_first({YG, YH}, fun((YG) -> YI)) -> {YI, YH}.
map_first(Pair, Fun) ->
    {A, B} = Pair,
    {Fun(A), B}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/pair.gleam", 68).
-spec map_second({YJ, YK}, fun((YK) -> YL)) -> {YJ, YL}.
map_second(Pair, Fun) ->
    {A, B} = Pair,
    {A, Fun(B)}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/pair.gleam", 83).
-spec new(YM, YN) -> {YM, YN}.
new(First, Second) ->
    {First, Second}.
