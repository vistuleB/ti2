-module(spotlight).
-compile([no_auto_import, nowarn_unused_vars, nowarn_unused_function, nowarn_nomatch]).

-export([main/0]).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 10).
-spec path_from_reversed_path(list(binary())) -> binary().
path_from_reversed_path(Reversed_path) ->
    _pipe = Reversed_path,
    _pipe@1 = lists:reverse(_pipe),
    gleam@string:join(_pipe@1, <<"/"/utf8>>).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 16).
-spec drop_last(binary(), binary()) -> binary().
drop_last(S, Char) ->
    case gleam_stdlib:string_ends_with(S, Char) of
        true ->
            gleam@string:drop_end(S, 1);

        false ->
            S
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 23).
-spec inverted_path_pieces(binary()) -> list(binary()).
inverted_path_pieces(Path) ->
    _pipe = Path,
    _pipe@1 = drop_last(_pipe, <<"/"/utf8>>),
    _pipe@2 = gleam@string:split(_pipe@1, <<"/"/utf8>>),
    lists:reverse(_pipe@2).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 30).
-spec protected_from_commenting(binary()) -> boolean().
protected_from_commenting(Name) ->
    (gleam_stdlib:string_starts_with(Name, <<"__parent"/utf8>>) orelse gleam_stdlib:string_starts_with(
        Name,
        <<"."/utf8>>
    ))
    orelse gleam_stdlib:contains_string(Name, <<"/."/utf8>>).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 34).
-spec add_hashtag_if_appropriate(binary()) -> binary().
add_hashtag_if_appropriate(Name) ->
    case gleam_stdlib:string_starts_with(Name, <<"#"/utf8>>) orelse protected_from_commenting(
        Name
    ) of
        true ->
            Name;

        false ->
            <<"#"/utf8, Name/binary>>
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 41).
-spec remove_hashtag_if_there(binary()) -> binary().
remove_hashtag_if_there(Name) ->
    case gleam_stdlib:string_starts_with(Name, <<"#"/utf8>>) of
        true ->
            gleam@string:drop_start(Name, 1);

        false ->
            Name
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 48).
-spec add_or_remove_hashtag_if_appropriate(binary(), boolean()) -> binary().
add_or_remove_hashtag_if_appropriate(Name, Want_a_hashtag) ->
    case Want_a_hashtag of
        true ->
            add_hashtag_if_appropriate(Name);

        false ->
            remove_hashtag_if_there(Name)
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 80).
-spec exists(binary()) -> boolean().
exists(Path) ->
    gleam@result:unwrap(simplifile_erl:is_file(Path), false) orelse gleam@result:unwrap(
        simplifile_erl:is_directory(Path),
        false
    ).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 84).
-spec rename_if_different(binary(), binary()) -> nil.
rename_if_different(From, To) ->
    case (To /= From) andalso exists(From) of
        false ->
            nil;

        true ->
            gleam_stdlib:println(
                <<<<<<"renaming "/utf8, From/binary>>/binary, " to "/utf8>>/binary,
                    To/binary>>
            ),
            _ = shellout:command(
                <<"git"/utf8>>,
                [<<"mv"/utf8>>, From, To],
                <<"."/utf8>>,
                []
            ),
            nil
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 58).
-spec comment_or_uncomment_if_possible(binary(), list(binary()), boolean()) -> nil.
comment_or_uncomment_if_possible(Name, Reversed_parent_path, Want_commented) ->
    New_name = add_or_remove_hashtag_if_appropriate(Name, Want_commented),
    Old_name = add_or_remove_hashtag_if_appropriate(Name, not Want_commented),
    New_reversed_path_pieces = gleam@list:prepend(
        Reversed_parent_path,
        New_name
    ),
    Old_reversed_path_pieces = gleam@list:prepend(
        Reversed_parent_path,
        Old_name
    ),
    New_path = path_from_reversed_path(New_reversed_path_pieces),
    Old_path = path_from_reversed_path(Old_reversed_path_pieces),
    rename_if_different(Old_path, New_path).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 72).
-spec comment_if_possible(binary(), list(binary())) -> nil.
comment_if_possible(Name, Reversed_parent_path) ->
    comment_or_uncomment_if_possible(Name, Reversed_parent_path, true).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 76).
-spec uncomment_if_possible(binary(), list(binary())) -> nil.
uncomment_if_possible(Name, Reversed_parent_path) ->
    comment_or_uncomment_if_possible(Name, Reversed_parent_path, false).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 96).
-spec read_directory(list(binary())) -> list(binary()).
read_directory(Inverted_path) ->
    gleam@result:unwrap(
        simplifile_erl:read_directory(path_from_reversed_path(Inverted_path)),
        []
    ).

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 103).
-spec uncomment_ancestors(list(binary())) -> nil.
uncomment_ancestors(Inverted_path) ->
    case Inverted_path of
        [] ->
            nil;

        [First | Rest] ->
            Sibling_names = read_directory(Rest),
            case not gleam@list:any(
                Sibling_names,
                fun(_capture) ->
                    gleam_stdlib:string_ends_with(_capture, <<".emu"/utf8>>)
                end
            ) of
                true ->
                    nil;

                false ->
                    uncomment_if_possible(First, Rest),
                    uncomment_ancestors(Rest)
            end
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 121).
-spec spotlight_recursive(list(binary())) -> nil.
spotlight_recursive(Inverted_path) ->
    case Inverted_path of
        [] ->
            nil;

        [First | Rest] ->
            Sibling_names = read_directory(Rest),
            case not gleam@list:any(
                Sibling_names,
                fun(_capture) ->
                    gleam_stdlib:string_ends_with(_capture, <<".emu"/utf8>>)
                end
            ) of
                true ->
                    nil;

                false ->
                    gleam@list:each(
                        Sibling_names,
                        fun(_capture@1) ->
                            comment_if_possible(_capture@1, Rest)
                        end
                    ),
                    uncomment_if_possible(First, Rest),
                    spotlight_recursive(Rest)
            end
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 138).
-spec comment_or_uncomment_descendants(list(binary()), boolean(), boolean()) -> nil.
comment_or_uncomment_descendants(Inverted_path, Comment, Including_self) ->
    case Inverted_path of
        [] ->
            nil;

        [First | Rest] ->
            First@1 = case Including_self of
                true ->
                    add_or_remove_hashtag_if_appropriate(First, Comment);

                false ->
                    First
            end,
            Anti_first = case Including_self of
                true ->
                    add_or_remove_hashtag_if_appropriate(First@1, not Comment);

                false ->
                    First@1
            end,
            New_reversed_path_pieces = [First@1 | Rest],
            Old_reversed_path_pieces = [Anti_first | Rest],
            New_path = path_from_reversed_path(New_reversed_path_pieces),
            Old_path = path_from_reversed_path(Old_reversed_path_pieces),
            rename_if_different(Old_path, New_path),
            Files = gleam@result:unwrap(
                simplifile_erl:read_directory(New_path),
                []
            ),
            _pipe = Files,
            gleam@list:each(
                _pipe,
                fun(Name) ->
                    comment_or_uncomment_descendants(
                        gleam@list:prepend(New_reversed_path_pieces, Name),
                        Comment,
                        true
                    )
                end
            )
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 174).
-spec get_root(list(binary())) -> list(binary()).
get_root(Inverted_path) ->
    case Inverted_path of
        [] ->
            [];

        [First | Rest] ->
            case First =:= <<".."/utf8>> of
                true ->
                    Inverted_path;

                false ->
                    Sibling_names = read_directory(Rest),
                    case not gleam@list:any(
                        Sibling_names,
                        fun(_capture) ->
                            gleam_stdlib:string_ends_with(
                                _capture,
                                <<".emu"/utf8>>
                            )
                        end
                    ) of
                        true ->
                            Inverted_path;

                        false ->
                            get_root(Rest)
                    end
            end
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 194).
-spec first_satisfying(list(AES), fun((AES) -> boolean())) -> gleam@option:option(AES).
first_satisfying(L, Condition) ->
    case L of
        [] ->
            none;

        [First | Rest] ->
            case Condition(First) of
                true ->
                    {some, First};

                false ->
                    first_satisfying(Rest, Condition)
            end
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 204).
-spec all_equal_evaluations(list(AEV), fun((AEV) -> any())) -> {ok, nil} |
    {error, {AEV, AEV}}.
all_equal_evaluations(L, F) ->
    case L of
        [] ->
            {ok, nil};

        [First | Rest] ->
            W = F(First),
            case first_satisfying(Rest, fun(Z) -> F(Z) /= W end) of
                {some, Z@1} ->
                    {error, {First, Z@1}};

                none ->
                    all_equal_evaluations(Rest, F)
            end
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 217).
-spec all_equal(list(any())) -> boolean().
all_equal(L) ->
    case L of
        [] ->
            true;

        [First | Rest] ->
            case gleam@list:all(Rest, fun(Z) -> Z =:= First end) of
                false ->
                    false;

                true ->
                    all_equal(Rest)
            end
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 227).
-spec on_true_on_false(boolean(), fun(() -> AFC), fun(() -> AFC)) -> AFC.
on_true_on_false(B, F1, F2) ->
    case B of
        true ->
            F1();

        false ->
            F2()
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 234).
-spec on_error_on_ok(
    {ok, AFD} | {error, AFE},
    fun((AFE) -> AFH),
    fun((AFD) -> AFH)
) -> AFH.
on_error_on_ok(Res, F1, F2) ->
    case Res of
        {error, Thing} ->
            F1(Thing);

        {ok, Thing@1} ->
            F2(Thing@1)
    end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 241).
-spec announce_error(binary()) -> fun(() -> nil).
announce_error(Message) ->
    fun() -> gleam_stdlib:println(Message) end.

-file("/Users/jpsteinb/github.com/vistuleB/solid-project/spotlight/src/spotlight.gleam", 245).
-spec main() -> nil.
main() ->
    Paths = erlang:element(4, argv:load()),
    on_true_on_false(
        gleam@list:is_empty(Paths),
        announce_error(<<"spotlight error: no paths given"/utf8>>),
        fun() ->
            [First | _] = case Paths of
                [_ | _] -> Paths;
                _assert_fail ->
                    erlang:error(#{gleam_error => let_assert,
                                message => <<"Pattern match failed, no pattern matched the value."/utf8>>,
                                value => _assert_fail,
                                module => <<"spotlight"/utf8>>,
                                function => <<"main"/utf8>>,
                                line => 253})
            end,
            _assert_subject = gleam@list:last(Paths),
            {ok, Last} = case _assert_subject of
                {ok, _} -> _assert_subject;
                _assert_fail@1 ->
                    erlang:error(#{gleam_error => let_assert,
                                message => <<"Pattern match failed, no pattern matched the value."/utf8>>,
                                value => _assert_fail@1,
                                module => <<"spotlight"/utf8>>,
                                function => <<"main"/utf8>>,
                                line => 254})
            end,
            Paths@1 = case gleam_stdlib:string_starts_with(
                Last,
                <<"-show"/utf8>>
            ) of
                true ->
                    _pipe = Paths,
                    _pipe@1 = lists:reverse(_pipe),
                    _pipe@2 = gleam@list:drop(_pipe@1, 1),
                    lists:reverse(_pipe@2);

                false ->
                    Paths
            end,
            F = fun(Path) -> _pipe@3 = inverted_path_pieces(Path),
                _pipe@4 = get_root(_pipe@3),
                _pipe@5 = lists:reverse(_pipe@4),
                gleam@string:join(_pipe@5, <<"/"/utf8>>) end,
            on_error_on_ok(
                all_equal_evaluations(Paths@1, F),
                fun(Pair) ->
                    {First@1, Second} = Pair,
                    gleam_stdlib:println(
                        <<"spotlight error: non-equal root directories for paths:"/utf8>>
                    ),
                    gleam_stdlib:println(
                        <<<<<<"- "/utf8, First@1/binary>>/binary, " -> "/utf8>>/binary,
                            (F(First@1))/binary>>
                    ),
                    gleam_stdlib:println(
                        <<<<<<"- "/utf8, Second/binary>>/binary, " -> "/utf8>>/binary,
                            (F(Second))/binary>>
                    )
                end,
                fun(_) ->
                    Root_pieces = begin
                        _pipe@6 = First,
                        _pipe@7 = inverted_path_pieces(_pipe@6),
                        get_root(_pipe@7)
                    end,
                    case gleam_stdlib:string_starts_with(Last, <<"-show"/utf8>>) of
                        false ->
                            nil;

                        true ->
                            Root_string = begin
                                _pipe@8 = Root_pieces,
                                _pipe@9 = lists:reverse(_pipe@8),
                                gleam@string:join(_pipe@9, <<"/"/utf8>>)
                            end,
                            case simplifile:get_files(Root_string) of
                                {error, E} ->
                                    gleam_stdlib:println(
                                        <<<<<<"spotlight error: cannot get files for root dir "/utf8,
                                                    Root_string/binary>>/binary,
                                                ": "/utf8>>/binary,
                                            (gleam@string:inspect(E))/binary>>
                                    );

                                {ok, Files} ->
                                    N = string:length(Root_string),
                                    Message_finish = case Last =:= <<"-show-only"/utf8>> of
                                        true ->
                                            <<":"/utf8>>;

                                        false ->
                                            <<" before spotlighting:"/utf8>>
                                    end,
                                    gleam_stdlib:println(
                                        <<<<"\nfiles in "/utf8,
                                                Root_string/binary>>/binary,
                                            Message_finish/binary>>
                                    ),
                                    gleam@list:each(
                                        Files,
                                        fun(Filename) ->
                                            gleam_stdlib:println(
                                                <<"- "/utf8,
                                                    (begin
                                                        _pipe@10 = Filename,
                                                        gleam@string:drop_start(
                                                            _pipe@10,
                                                            N + 1
                                                        )
                                                    end)/binary>>
                                            )
                                        end
                                    )
                            end
                    end,
                    on_true_on_false(
                        Last =:= <<"-show-only"/utf8>>,
                        fun() -> nil end,
                        fun() ->
                            gleam_stdlib:println(<<""/utf8>>),
                            comment_or_uncomment_descendants(
                                Root_pieces,
                                true,
                                false
                            ),
                            gleam@list:each(
                                Paths@1,
                                fun(Path@1) ->
                                    Pieces = begin
                                        _pipe@11 = Path@1,
                                        inverted_path_pieces(_pipe@11)
                                    end,
                                    comment_or_uncomment_descendants(
                                        Pieces,
                                        false,
                                        true
                                    ),
                                    uncomment_ancestors(Pieces)
                                end
                            ),
                            case gleam_stdlib:string_starts_with(
                                Last,
                                <<"-show"/utf8>>
                            ) of
                                false ->
                                    nil;

                                true ->
                                    Root_string@1 = begin
                                        _pipe@12 = Root_pieces,
                                        _pipe@13 = lists:reverse(_pipe@12),
                                        gleam@string:join(
                                            _pipe@13,
                                            <<"/"/utf8>>
                                        )
                                    end,
                                    case simplifile:get_files(Root_string@1) of
                                        {error, E@1} ->
                                            gleam_stdlib:println(
                                                <<<<<<"spotlight error: cannot get files for root dir "/utf8,
                                                            Root_string@1/binary>>/binary,
                                                        " after spotlighting: "/utf8>>/binary,
                                                    (gleam@string:inspect(E@1))/binary>>
                                            );

                                        {ok, Files@1} ->
                                            N@1 = string:length(Root_string@1),
                                            gleam_stdlib:println(
                                                <<<<"\nfiles in "/utf8,
                                                        Root_string@1/binary>>/binary,
                                                    " after spotlighting:"/utf8>>
                                            ),
                                            gleam@list:each(
                                                Files@1,
                                                fun(Filename@1) ->
                                                    gleam_stdlib:println(
                                                        <<"- "/utf8,
                                                            (begin
                                                                _pipe@14 = Filename@1,
                                                                gleam@string:drop_start(
                                                                    _pipe@14,
                                                                    N@1 + 1
                                                                )
                                                            end)/binary>>
                                                    )
                                                end
                                            )
                                    end
                            end,
                            nil
                        end
                    )
                end
            )
        end
    ).
