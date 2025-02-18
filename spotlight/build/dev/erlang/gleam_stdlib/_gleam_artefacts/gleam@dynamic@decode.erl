-module(gleam@dynamic@decode).
-compile([no_auto_import, nowarn_unused_vars, nowarn_unused_function, nowarn_nomatch]).

-export([run/2, success/1, decode_dynamic/1, map/2, map_errors/2, then/2, one_of/2, recursive/1, optional/1, decode_error/2, decode_bool/1, decode_int/1, decode_float/1, decode_bit_array/1, collapse_errors/2, failure/2, new_primitive_decoder/2, decode_string/1, dict/2, list/1, subfield/3, at/2, field/3, optional_field/4, optionally_at/3]).
-export_type([decode_error/0, decoder/1]).

-type decode_error() :: {decode_error, binary(), binary(), list(binary())}.

-opaque decoder(DOT) :: {decoder,
        fun((gleam@dynamic:dynamic_()) -> {DOT, list(decode_error())})}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 348).
-spec run(gleam@dynamic:dynamic_(), decoder(DPB)) -> {ok, DPB} |
    {error, list(decode_error())}.
run(Data, Decoder) ->
    {Maybe_invalid_data, Errors} = (erlang:element(2, Decoder))(Data),
    case Errors of
        [] ->
            {ok, Maybe_invalid_data};

        [_ | _] ->
            {error, Errors}
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 470).
-spec success(DQC) -> decoder(DQC).
success(Data) ->
    {decoder, fun(_) -> {Data, []} end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 708).
-spec decode_dynamic(gleam@dynamic:dynamic_()) -> {gleam@dynamic:dynamic_(),
    list(decode_error())}.
decode_dynamic(Data) ->
    {Data, []}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 862).
-spec map(decoder(DSZ), fun((DSZ) -> DTB)) -> decoder(DTB).
map(Decoder, Transformer) ->
    {decoder,
        fun(D) ->
            {Data, Errors} = (erlang:element(2, Decoder))(D),
            {Transformer(Data), Errors}
        end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 871).
-spec map_errors(
    decoder(DTD),
    fun((list(decode_error())) -> list(decode_error()))
) -> decoder(DTD).
map_errors(Decoder, Transformer) ->
    {decoder,
        fun(D) ->
            {Data, Errors} = (erlang:element(2, Decoder))(D),
            {Data, Transformer(Errors)}
        end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 909).
-spec then(decoder(DTL), fun((DTL) -> decoder(DTN))) -> decoder(DTN).
then(Decoder, Next) ->
    {decoder,
        fun(Dynamic_data) ->
            {Data, Errors} = (erlang:element(2, Decoder))(Dynamic_data),
            Decoder@1 = Next(Data),
            {Data@1, _} = Layer = (erlang:element(2, Decoder@1))(Dynamic_data),
            case Errors of
                [] ->
                    Layer;

                [_ | _] ->
                    {Data@1, Errors}
            end
        end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 952).
-spec run_decoders(
    gleam@dynamic:dynamic_(),
    {DTV, list(decode_error())},
    list(decoder(DTV))
) -> {DTV, list(decode_error())}.
run_decoders(Data, Failure, Decoders) ->
    case Decoders of
        [] ->
            Failure;

        [Decoder | Decoders@1] ->
            {_, Errors} = Layer = (erlang:element(2, Decoder))(Data),
            case Errors of
                [] ->
                    Layer;

                [_ | _] ->
                    run_decoders(Data, Failure, Decoders@1)
            end
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 939).
-spec one_of(decoder(DTQ), list(decoder(DTQ))) -> decoder(DTQ).
one_of(First, Alternatives) ->
    {decoder,
        fun(Dynamic_data) ->
            {_, Errors} = Layer = (erlang:element(2, First))(Dynamic_data),
            case Errors of
                [] ->
                    Layer;

                [_ | _] ->
                    run_decoders(Dynamic_data, Layer, Alternatives)
            end
        end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 1035).
-spec recursive(fun(() -> decoder(DUG))) -> decoder(DUG).
recursive(Inner) ->
    {decoder,
        fun(Data) ->
            Decoder = Inner(),
            (erlang:element(2, Decoder))(Data)
        end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 840).
-spec optional(decoder(DSV)) -> decoder(gleam@option:option(DSV)).
optional(Inner) ->
    {decoder, fun(Data) -> case gleam_stdlib_decode_ffi:is_null(Data) of
                true ->
                    {none, []};

                false ->
                    {Data@1, Errors} = (erlang:element(2, Inner))(Data),
                    {{some, Data@1}, Errors}
            end end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 476).
-spec decode_error(binary(), gleam@dynamic:dynamic_()) -> list(decode_error()).
decode_error(Expected, Found) ->
    [{decode_error, Expected, gleam_stdlib:classify_dynamic(Found), []}].

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 599).
-spec run_dynamic_function(
    gleam@dynamic:dynamic_(),
    binary(),
    fun((gleam@dynamic:dynamic_()) -> {ok, DQW} | {error, DQW})
) -> {DQW, list(decode_error())}.
run_dynamic_function(Data, Name, F) ->
    case F(Data) of
        {ok, Data@1} ->
            {Data@1, []};

        {error, Zero} ->
            {Zero,
                [{decode_error, Name, gleam_stdlib:classify_dynamic(Data), []}]}
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 648).
-spec decode_bool(gleam@dynamic:dynamic_()) -> {boolean(), list(decode_error())}.
decode_bool(Data) ->
    case gleam_stdlib:identity(true) =:= Data of
        true ->
            {true, []};

        false ->
            case gleam_stdlib:identity(false) =:= Data of
                true ->
                    {false, []};

                false ->
                    {false, decode_error(<<"Bool"/utf8>>, Data)}
            end
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 670).
-spec decode_int(gleam@dynamic:dynamic_()) -> {integer(), list(decode_error())}.
decode_int(Data) ->
    run_dynamic_function(
        Data,
        <<"Int"/utf8>>,
        fun gleam_stdlib_decode_ffi:int/1
    ).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 689).
-spec decode_float(gleam@dynamic:dynamic_()) -> {float(), list(decode_error())}.
decode_float(Data) ->
    run_dynamic_function(
        Data,
        <<"Float"/utf8>>,
        fun gleam_stdlib_decode_ffi:float/1
    ).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 723).
-spec decode_bit_array(gleam@dynamic:dynamic_()) -> {bitstring(),
    list(decode_error())}.
decode_bit_array(Data) ->
    run_dynamic_function(
        Data,
        <<"BitArray"/utf8>>,
        fun gleam_stdlib_decode_ffi:bit_array/1
    ).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 895).
-spec collapse_errors(decoder(DTI), binary()) -> decoder(DTI).
collapse_errors(Decoder, Name) ->
    {decoder,
        fun(Dynamic_data) ->
            {Data, Errors} = Layer = (erlang:element(2, Decoder))(Dynamic_data),
            case Errors of
                [] ->
                    Layer;

                [_ | _] ->
                    {Data, decode_error(Name, Dynamic_data)}
            end
        end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 973).
-spec failure(DUA, binary()) -> decoder(DUA).
failure(Zero, Expected) ->
    {decoder, fun(D) -> {Zero, decode_error(Expected, D)} end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 1002).
-spec new_primitive_decoder(
    binary(),
    fun((gleam@dynamic:dynamic_()) -> {ok, DUC} | {error, DUC})
) -> decoder(DUC).
new_primitive_decoder(Name, Decoding_function) ->
    {decoder, fun(D) -> case Decoding_function(D) of
                {ok, T} ->
                    {T, []};

                {error, Zero} ->
                    {Zero,
                        [{decode_error,
                                Name,
                                gleam_stdlib:classify_dynamic(D),
                                []}]}
            end end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 626).
-spec dynamic_string(gleam@dynamic:dynamic_()) -> {ok, binary()} |
    {error, binary()}.
dynamic_string(Data) ->
    case gleam_stdlib_decode_ffi:bit_array(Data) of
        {ok, Data@1} ->
            case gleam@bit_array:to_string(Data@1) of
                {ok, String} ->
                    {ok, String};

                {error, _} ->
                    {error, <<""/utf8>>}
            end;

        {error, _} ->
            {error, <<""/utf8>>}
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 621).
-spec decode_string(gleam@dynamic:dynamic_()) -> {binary(),
    list(decode_error())}.
decode_string(Data) ->
    run_dynamic_function(Data, <<"String"/utf8>>, fun dynamic_string/1).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 794).
-spec fold_dict(
    {gleam@dict:dict(DSH, DSI), list(decode_error())},
    gleam@dynamic:dynamic_(),
    gleam@dynamic:dynamic_(),
    fun((gleam@dynamic:dynamic_()) -> {DSH, list(decode_error())}),
    fun((gleam@dynamic:dynamic_()) -> {DSI, list(decode_error())})
) -> {gleam@dict:dict(DSH, DSI), list(decode_error())}.
fold_dict(Acc, Key, Value, Key_decoder, Value_decoder) ->
    case Key_decoder(Key) of
        {Key@1, []} ->
            case Value_decoder(Value) of
                {Value@1, []} ->
                    Dict = gleam@dict:insert(
                        erlang:element(1, Acc),
                        Key@1,
                        Value@1
                    ),
                    {Dict, erlang:element(2, Acc)};

                {_, Errors} ->
                    push_path({maps:new(), Errors}, [<<"values"/utf8>>])
            end;

        {_, Errors@1} ->
            push_path({maps:new(), Errors@1}, [<<"keys"/utf8>>])
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 774).
-spec dict(decoder(DSA), decoder(DSC)) -> decoder(gleam@dict:dict(DSA, DSC)).
dict(Key, Value) ->
    {decoder, fun(Data) -> case gleam_stdlib_decode_ffi:dict(Data) of
                {error, _} ->
                    {maps:new(), decode_error(<<"Dict"/utf8>>, Data)};

                {ok, Dict} ->
                    gleam@dict:fold(
                        Dict,
                        {maps:new(), []},
                        fun(A, K, V) -> case erlang:element(2, A) of
                                [] ->
                                    fold_dict(
                                        A,
                                        K,
                                        V,
                                        erlang:element(2, Key),
                                        erlang:element(2, Value)
                                    );

                                [_ | _] ->
                                    A
                            end end
                    )
            end end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 742).
-spec list(decoder(DRO)) -> decoder(list(DRO)).
list(Inner) ->
    {decoder,
        fun(Data) ->
            gleam_stdlib_decode_ffi:list(
                Data,
                erlang:element(2, Inner),
                fun(P, K) -> push_path(P, [K]) end,
                0,
                []
            )
        end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 430).
-spec push_path({DPX, list(decode_error())}, list(any())) -> {DPX,
    list(decode_error())}.
push_path(Layer, Path) ->
    Decoder = one_of(
        {decoder, fun decode_string/1},
        [begin
                _pipe = {decoder, fun decode_int/1},
                map(_pipe, fun erlang:integer_to_binary/1)
            end]
    ),
    Path@1 = gleam@list:map(
        Path,
        fun(Key) ->
            Key@1 = gleam_stdlib:identity(Key),
            case run(Key@1, Decoder) of
                {ok, Key@2} ->
                    Key@2;

                {error, _} ->
                    <<<<"<"/utf8,
                            (gleam_stdlib:classify_dynamic(Key@1))/binary>>/binary,
                        ">"/utf8>>
            end
        end
    ),
    Errors = gleam@list:map(
        erlang:element(2, Layer),
        fun(Error) ->
            erlang:setelement(
                4,
                Error,
                lists:append(Path@1, erlang:element(4, Error))
            )
        end
    ),
    {erlang:element(1, Layer), Errors}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 395).
-spec index(
    list(DPL),
    list(DPL),
    fun((gleam@dynamic:dynamic_()) -> {DPO, list(decode_error())}),
    gleam@dynamic:dynamic_(),
    fun((gleam@dynamic:dynamic_(), list(DPL)) -> {DPO, list(decode_error())})
) -> {DPO, list(decode_error())}.
index(Path, Position, Inner, Data, Handle_miss) ->
    case Path of
        [] ->
            _pipe = Inner(Data),
            push_path(_pipe, lists:reverse(Position));

        [Key | Path@1] ->
            case gleam_stdlib_decode_ffi:index(Data, Key) of
                {ok, {some, Data@1}} ->
                    index(Path@1, [Key | Position], Inner, Data@1, Handle_miss);

                {ok, none} ->
                    Handle_miss(Data, [Key | Position]);

                {error, Kind} ->
                    {Default, _} = Inner(Data),
                    _pipe@1 = {Default,
                        [{decode_error,
                                Kind,
                                gleam_stdlib:classify_dynamic(Data),
                                []}]},
                    push_path(_pipe@1, lists:reverse(Position))
            end
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 316).
-spec subfield(list(any()), decoder(DOW), fun((DOW) -> decoder(DOY))) -> decoder(DOY).
subfield(Field_path, Field_decoder, Next) ->
    {decoder,
        fun(Data) ->
            {Out, Errors1} = index(
                Field_path,
                [],
                erlang:element(2, Field_decoder),
                Data,
                fun(Data@1, Position) ->
                    {Default, _} = (erlang:element(2, Field_decoder))(Data@1),
                    _pipe = {Default,
                        [{decode_error,
                                <<"Field"/utf8>>,
                                <<"Nothing"/utf8>>,
                                []}]},
                    push_path(_pipe, lists:reverse(Position))
                end
            ),
            {Out@1, Errors2} = (erlang:element(2, Next(Out)))(Data),
            {Out@1, lists:append(Errors1, Errors2)}
        end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 385).
-spec at(list(any()), decoder(DPI)) -> decoder(DPI).
at(Path, Inner) ->
    {decoder,
        fun(Data) ->
            index(
                Path,
                [],
                erlang:element(2, Inner),
                Data,
                fun(Data@1, Position) ->
                    {Default, _} = (erlang:element(2, Inner))(Data@1),
                    _pipe = {Default,
                        [{decode_error,
                                <<"Field"/utf8>>,
                                <<"Nothing"/utf8>>,
                                []}]},
                    push_path(_pipe, lists:reverse(Position))
                end
            )
        end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 515).
-spec field(any(), decoder(DQG), fun((DQG) -> decoder(DQI))) -> decoder(DQI).
field(Field_name, Field_decoder, Next) ->
    subfield([Field_name], Field_decoder, Next).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 548).
-spec optional_field(any(), DQM, decoder(DQM), fun((DQM) -> decoder(DQO))) -> decoder(DQO).
optional_field(Key, Default, Field_decoder, Next) ->
    {decoder,
        fun(Data) ->
            {Out, Errors1} = case gleam_stdlib_decode_ffi:index(Data, Key) of
                {ok, {some, Data@1}} ->
                    (erlang:element(2, Field_decoder))(Data@1);

                {ok, none} ->
                    {Default, []};

                {error, Kind} ->
                    _pipe = {Default,
                        [{decode_error,
                                Kind,
                                gleam_stdlib:classify_dynamic(Data),
                                []}]},
                    push_path(_pipe, [Key])
            end,
            {Out@1, Errors2} = (erlang:element(2, Next(Out)))(Data),
            {Out@1, lists:append(Errors1, Errors2)}
        end}.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/build/packages/gleam_stdlib/src/gleam/dynamic/decode.gleam", 589).
-spec optionally_at(list(any()), DQT, decoder(DQT)) -> decoder(DQT).
optionally_at(Path, Default, Inner) ->
    {decoder,
        fun(Data) ->
            index(
                Path,
                [],
                erlang:element(2, Inner),
                Data,
                fun(_, _) -> {Default, []} end
            )
        end}.
