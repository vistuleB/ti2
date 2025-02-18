-module(snag).
-compile([no_auto_import, nowarn_unused_vars, nowarn_unused_function, nowarn_nomatch]).

-export([new/1, error/1, layer/2, context/2, map_error/2, pretty_print/1, line_print/1]).
-export_type([snag/0]).

-type snag() :: {snag, binary(), list(binary())}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/snag/src/snag.gleam", 39).
-spec new(binary()) -> snag().
new(Issue) ->
    {snag, Issue, []}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/snag/src/snag.gleam", 51).
-spec error(binary()) -> {ok, any()} | {error, snag()}.
error(Issue) ->
    {error, new(Issue)}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/snag/src/snag.gleam", 68).
-spec layer(snag(), binary()) -> snag().
layer(Snag, Issue) ->
    {snag, Issue, [erlang:element(2, Snag) | erlang:element(3, Snag)]}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/snag/src/snag.gleam", 82).
-spec context({ok, AKZ} | {error, snag()}, binary()) -> {ok, AKZ} |
    {error, snag()}.
context(Result, Issue) ->
    case Result of
        {ok, _} ->
            Result;

        {error, Snag} ->
            {error, layer(Snag, Issue)}
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/snag/src/snag.gleam", 102).
-spec map_error({ok, ALC} | {error, ALD}, fun((ALD) -> binary())) -> {ok, ALC} |
    {error, snag()}.
map_error(Result, Describer) ->
    case Result of
        {ok, A} ->
            {ok, A};

        {error, B} ->
            _pipe = Describer(B),
            error(_pipe)
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/snag/src/snag.gleam", 137).
-spec pretty_print_cause(list(binary())) -> binary().
pretty_print_cause(Cause) ->
    _pipe = Cause,
    _pipe@1 = gleam@list:index_map(
        _pipe,
        fun(Line, Index) ->
            gleam@string:concat(
                [<<"  "/utf8>>,
                    erlang:integer_to_binary(Index),
                    <<": "/utf8>>,
                    Line,
                    <<"\n"/utf8>>]
            )
        end
    ),
    gleam@string:concat(_pipe@1).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/snag/src/snag.gleam", 128).
-spec pretty_print(snag()) -> binary().
pretty_print(Snag) ->
    Output = <<<<"error: "/utf8, (erlang:element(2, Snag))/binary>>/binary,
        "\n"/utf8>>,
    case erlang:element(3, Snag) of
        [] ->
            Output;

        Cause ->
            <<<<Output/binary, "\ncause:\n"/utf8>>/binary,
                (pretty_print_cause(Cause))/binary>>
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/snag/src/snag.gleam", 157).
-spec line_print(snag()) -> binary().
line_print(Snag) ->
    _pipe = [gleam@string:append(<<"error: "/utf8>>, erlang:element(2, Snag)) |
        erlang:element(3, Snag)],
    gleam@string:join(_pipe, <<" <- "/utf8>>).
