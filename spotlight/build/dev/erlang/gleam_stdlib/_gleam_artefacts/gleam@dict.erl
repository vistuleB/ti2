-module(gleam@dict).
-compile([no_auto_import, nowarn_unused_vars, nowarn_unused_function, nowarn_nomatch]).

-export([size/1, to_list/1, new/0, is_empty/1, get/2, has_key/2, insert/3, from_list/1, keys/1, values/1, take/2, merge/2, delete/2, drop/2, upsert/3, fold/3, map_values/2, filter/2, each/2, combine/3]).
-export_type([dict/2]).

-type dict(KU, KV) :: any() | {gleam_phantom, KU, KV}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 36).
-spec size(dict(any(), any())) -> integer().
size(Dict) ->
    maps:size(Dict).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 80).
-spec to_list(dict(LE, LF)) -> list({LE, LF}).
to_list(Dict) ->
    maps:to_list(Dict).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 129).
-spec new() -> dict(any(), any()).
new() ->
    maps:new().

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 52).
-spec is_empty(dict(any(), any())) -> boolean().
is_empty(Dict) ->
    Dict =:= maps:new().

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 150).
-spec get(dict(MH, MI), MH) -> {ok, MI} | {error, nil}.
get(From, Get) ->
    gleam_stdlib:map_get(From, Get).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 116).
-spec has_key(dict(LV, any()), LV) -> boolean().
has_key(Dict, Key) ->
    maps:is_key(Key, Dict).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 169).
-spec insert(dict(MN, MO), MN, MO) -> dict(MN, MO).
insert(Dict, Key, Value) ->
    maps:put(Key, Value, Dict).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 92).
-spec from_list_loop(list({LO, LP}), dict(LO, LP)) -> dict(LO, LP).
from_list_loop(List, Initial) ->
    case List of
        [] ->
            Initial;

        [{Key, Value} | Rest] ->
            from_list_loop(Rest, insert(Initial, Key, Value))
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 88).
-spec from_list(list({LJ, LK})) -> dict(LJ, LK).
from_list(List) ->
    maps:from_list(List).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 223).
-spec reverse_and_concat(list(NX), list(NX)) -> list(NX).
reverse_and_concat(Remaining, Accumulator) ->
    case Remaining of
        [] ->
            Accumulator;

        [First | Rest] ->
            reverse_and_concat(Rest, [First | Accumulator])
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 216).
-spec do_keys_loop(list({NS, any()}), list(NS)) -> list(NS).
do_keys_loop(List, Acc) ->
    case List of
        [] ->
            reverse_and_concat(Acc, []);

        [{Key, _} | Rest] ->
            do_keys_loop(Rest, [Key | Acc])
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 212).
-spec keys(dict(NN, any())) -> list(NN).
keys(Dict) ->
    maps:keys(Dict).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 249).
-spec do_values_loop(list({any(), OH}), list(OH)) -> list(OH).
do_values_loop(List, Acc) ->
    case List of
        [] ->
            reverse_and_concat(Acc, []);

        [{_, Value} | Rest] ->
            do_values_loop(Rest, [Value | Acc])
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 244).
-spec values(dict(any(), OC)) -> list(OC).
values(Dict) ->
    maps:values(Dict).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 318).
-spec do_take_loop(dict(PL, PM), list(PL), dict(PL, PM)) -> dict(PL, PM).
do_take_loop(Dict, Desired_keys, Acc) ->
    Insert = fun(Taken, Key) -> case gleam_stdlib:map_get(Dict, Key) of
            {ok, Value} ->
                insert(Taken, Key, Value);

            {error, _} ->
                Taken
        end end,
    case Desired_keys of
        [] ->
            Acc;

        [First | Rest] ->
            do_take_loop(Dict, Rest, Insert(Acc, First))
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 309).
-spec take(dict(OX, OY), list(OX)) -> dict(OX, OY).
take(Dict, Desired_keys) ->
    maps:with(Desired_keys, Dict).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 363).
-spec insert_pair(dict(QJ, QK), {QJ, QK}) -> dict(QJ, QK).
insert_pair(Dict, Pair) ->
    insert(Dict, erlang:element(1, Pair), erlang:element(2, Pair)).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 356).
-spec fold_inserts(list({QC, QD}), dict(QC, QD)) -> dict(QC, QD).
fold_inserts(New_entries, Dict) ->
    case New_entries of
        [] ->
            Dict;

        [First | Rest] ->
            fold_inserts(Rest, insert_pair(Dict, First))
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 350).
-spec merge(dict(PU, PV), dict(PU, PV)) -> dict(PU, PV).
merge(Dict, New_entries) ->
    maps:merge(Dict, New_entries).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 382).
-spec delete(dict(QP, QQ), QP) -> dict(QP, QQ).
delete(Dict, Key) ->
    maps:remove(Key, Dict).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 410).
-spec drop(dict(RB, RC), list(RB)) -> dict(RB, RC).
drop(Dict, Disallowed_keys) ->
    case Disallowed_keys of
        [] ->
            Dict;

        [First | Rest] ->
            drop(delete(Dict, First), Rest)
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 440).
-spec upsert(dict(RI, RJ), RI, fun((gleam@option:option(RJ)) -> RJ)) -> dict(RI, RJ).
upsert(Dict, Key, Fun) ->
    case gleam_stdlib:map_get(Dict, Key) of
        {ok, Value} ->
            insert(Dict, Key, Fun({some, Value}));

        {error, _} ->
            insert(Dict, Key, Fun(none))
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 484).
-spec fold_loop(list({RU, RV}), RX, fun((RX, RU, RV) -> RX)) -> RX.
fold_loop(List, Initial, Fun) ->
    case List of
        [] ->
            Initial;

        [{K, V} | Rest] ->
            fold_loop(Rest, Fun(Initial, K, V), Fun)
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 476).
-spec fold(dict(RP, RQ), RT, fun((RT, RP, RQ) -> RT)) -> RT.
fold(Dict, Initial, Fun) ->
    fold_loop(maps:to_list(Dict), Initial, Fun).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 188).
-spec map_values(dict(MZ, NA), fun((MZ, NA) -> ND)) -> dict(MZ, ND).
map_values(Dict, Fun) ->
    maps:map(Fun, Dict).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 273).
-spec filter(dict(OL, OM), fun((OL, OM) -> boolean())) -> dict(OL, OM).
filter(Dict, Predicate) ->
    maps:filter(Predicate, Dict).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 517).
-spec each(dict(RY, RZ), fun((RY, RZ) -> any())) -> nil.
each(Dict, Fun) ->
    fold(
        Dict,
        nil,
        fun(Nil, K, V) ->
            Fun(K, V),
            Nil
        end
    ).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dict.gleam", 538).
-spec combine(dict(SD, SE), dict(SD, SE), fun((SE, SE) -> SE)) -> dict(SD, SE).
combine(Dict, Other, Fun) ->
    fold(
        Dict,
        Other,
        fun(Acc, Key, Value) -> case gleam_stdlib:map_get(Acc, Key) of
                {ok, Other_value} ->
                    insert(Acc, Key, Fun(Value, Other_value));

                {error, _} ->
                    insert(Acc, Key, Value)
            end end
    ).
