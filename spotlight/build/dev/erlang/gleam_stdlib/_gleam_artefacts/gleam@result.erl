-module(gleam@result).
-compile([no_auto_import, nowarn_unused_vars, nowarn_unused_function, nowarn_nomatch]).

-export([is_ok/1, is_error/1, map/2, map_error/2, flatten/1, 'try'/2, then/2, unwrap/2, lazy_unwrap/2, unwrap_error/2, unwrap_both/1, 'or'/2, lazy_or/2, all/1, partition/1, replace/2, replace_error/2, values/1, try_recover/2]).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 20).
-spec is_ok({ok, any()} | {error, any()}) -> boolean().
is_ok(Result) ->
    case Result of
        {error, _} ->
            false;

        {ok, _} ->
            true
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 41).
-spec is_error({ok, any()} | {error, any()}) -> boolean().
is_error(Result) ->
    case Result of
        {ok, _} ->
            false;

        {error, _} ->
            true
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 66).
-spec map({ok, BYW} | {error, BYX}, fun((BYW) -> BZA)) -> {ok, BZA} |
    {error, BYX}.
map(Result, Fun) ->
    case Result of
        {ok, X} ->
            {ok, Fun(X)};

        {error, E} ->
            {error, E}
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 91).
-spec map_error({ok, BZD} | {error, BZE}, fun((BZE) -> BZH)) -> {ok, BZD} |
    {error, BZH}.
map_error(Result, Fun) ->
    case Result of
        {ok, X} ->
            {ok, X};

        {error, Error} ->
            {error, Fun(Error)}
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 120).
-spec flatten({ok, {ok, BZK} | {error, BZL}} | {error, BZL}) -> {ok, BZK} |
    {error, BZL}.
flatten(Result) ->
    case Result of
        {ok, X} ->
            X;

        {error, Error} ->
            {error, Error}
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 158).
-spec 'try'({ok, BZS} | {error, BZT}, fun((BZS) -> {ok, BZW} | {error, BZT})) -> {ok,
        BZW} |
    {error, BZT}.
'try'(Result, Fun) ->
    case Result of
        {ok, X} ->
            Fun(X);

        {error, E} ->
            {error, E}
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 170).
-spec then({ok, CAB} | {error, CAC}, fun((CAB) -> {ok, CAF} | {error, CAC})) -> {ok,
        CAF} |
    {error, CAC}.
then(Result, Fun) ->
    'try'(Result, Fun).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 192).
-spec unwrap({ok, CAK} | {error, any()}, CAK) -> CAK.
unwrap(Result, Default) ->
    case Result of
        {ok, V} ->
            V;

        {error, _} ->
            Default
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 214).
-spec lazy_unwrap({ok, CAO} | {error, any()}, fun(() -> CAO)) -> CAO.
lazy_unwrap(Result, Default) ->
    case Result of
        {ok, V} ->
            V;

        {error, _} ->
            Default()
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 236).
-spec unwrap_error({ok, any()} | {error, CAT}, CAT) -> CAT.
unwrap_error(Result, Default) ->
    case Result of
        {ok, _} ->
            Default;

        {error, E} ->
            E
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 258).
-spec unwrap_both({ok, CAW} | {error, CAW}) -> CAW.
unwrap_both(Result) ->
    case Result of
        {ok, A} ->
            A;

        {error, A@1} ->
            A@1
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 289).
-spec 'or'({ok, CAZ} | {error, CBA}, {ok, CAZ} | {error, CBA}) -> {ok, CAZ} |
    {error, CBA}.
'or'(First, Second) ->
    case First of
        {ok, _} ->
            First;

        {error, _} ->
            Second
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 322).
-spec lazy_or({ok, CBH} | {error, CBI}, fun(() -> {ok, CBH} | {error, CBI})) -> {ok,
        CBH} |
    {error, CBI}.
lazy_or(First, Second) ->
    case First of
        {ok, _} ->
            First;

        {error, _} ->
            Second()
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 348).
-spec all(list({ok, CBP} | {error, CBQ})) -> {ok, list(CBP)} | {error, CBQ}.
all(Results) ->
    gleam@list:try_map(Results, fun(X) -> X end).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 368).
-spec partition_loop(list({ok, CCE} | {error, CCF}), list(CCE), list(CCF)) -> {list(CCE),
    list(CCF)}.
partition_loop(Results, Oks, Errors) ->
    case Results of
        [] ->
            {Oks, Errors};

        [{ok, A} | Rest] ->
            partition_loop(Rest, [A | Oks], Errors);

        [{error, E} | Rest@1] ->
            partition_loop(Rest@1, Oks, [E | Errors])
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 364).
-spec partition(list({ok, CBX} | {error, CBY})) -> {list(CBX), list(CBY)}.
partition(Results) ->
    partition_loop(Results, [], []).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 390).
-spec replace({ok, any()} | {error, CCN}, CCQ) -> {ok, CCQ} | {error, CCN}.
replace(Result, Value) ->
    case Result of
        {ok, _} ->
            {ok, Value};

        {error, Error} ->
            {error, Error}
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 411).
-spec replace_error({ok, CCT} | {error, any()}, CCX) -> {ok, CCT} | {error, CCX}.
replace_error(Result, Error) ->
    case Result of
        {ok, X} ->
            {ok, X};

        {error, _} ->
            {error, Error}
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 427).
-spec values(list({ok, CDA} | {error, any()})) -> list(CDA).
values(Results) ->
    gleam@list:filter_map(Results, fun(R) -> R end).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/result.gleam", 460).
-spec try_recover(
    {ok, CDG} | {error, CDH},
    fun((CDH) -> {ok, CDG} | {error, CDK})
) -> {ok, CDG} | {error, CDK}.
try_recover(Result, Fun) ->
    case Result of
        {ok, Value} ->
            {ok, Value};

        {error, Error} ->
            Fun(Error)
    end.
