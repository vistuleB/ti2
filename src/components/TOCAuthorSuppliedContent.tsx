import TOCItem from "./TOCItem";

const TOCAuthorSuppliedContent = () => {
  return (
    <>
      <div id="Chapters">
        <ul style="list-style: none">
          <TOCItem
            label="Boolean circuits"
            on_mobile="Boolean circuits"
            number={1.0}
            href="Chapter1" />
          <TOCItem
            label="Fanin Size Depth"
            on_mobile="Fanin Size Depth"
            number={1.1}
            href="Chapter2" />
          <TOCItem
            label="truth tables cnf dnf"
            on_mobile="truth tables cnf dnf"
            number={1.2}
            href="Chapter3" />
          <TOCItem
            label="binary adder"
            on_mobile="binary adder"
            number={1.3}
            href="Chapter4" />
          <TOCItem
            label="monotone circuits"
            on_mobile="monotone circuits"
            number={1.4}
            href="Chapter5" />
          <TOCItem
            label="majority"
            on_mobile="majority"
            number={1.5}
            href="Chapter6" />
          <TOCItem
            label="lower and upper bounds"
            on_mobile="lower and upper bounds"
            number={1.6}
            href="Chapter7" />
          <TOCItem
            label="infinite sets"
            on_mobile="infinite sets"
            number={2.0}
            href="Chapter8" />
          <TOCItem
            label="comparing sizes"
            on_mobile="comparing sizes"
            number={2.1}
            href="Chapter9" />
          <TOCItem
            label="examples of equipotent sets"
            on_mobile="examples of equipotent sets"
            number={2.2}
            href="Chapter10" />
          <TOCItem
            label="sets like R"
            on_mobile="sets like R"
            number={2.3}
            href="Chapter11" />
          <TOCItem
            label="diagonalization"
            on_mobile="diagonalization"
            number={2.4}
            href="Chapter12" />
          <TOCItem
            label="Schroeder Bernstein"
            on_mobile="Schroeder Bernstein"
            number={2.5}
            href="Chapter13" />
          <TOCItem
            label="Trichotomiesatz"
            on_mobile="Trichotomiesatz"
            number={2.6}
            href="Chapter14" />
          <TOCItem
            label="Computability NaturalNumbers"
            on_mobile="Computability NaturalNumbers"
            number={3.0}
            href="Chapter15" />
          <TOCItem
            label="primitive recursion definitions"
            on_mobile="primitive recursion definitions"
            number={3.1}
            href="Chapter16" />
          <TOCItem
            label="primitive recursion constructions"
            on_mobile="primitive recursion constructions"
            number={3.2}
            href="Chapter17" />
          <TOCItem
            label="ackermann"
            on_mobile="ackermann"
            number={3.3}
            href="Chapter18" />
          <TOCItem
            label="mu recursion"
            on_mobile="mu recursion"
            number={3.4}
            href="Chapter19" />
          <TOCItem
            label="formal languages"
            on_mobile="formal languages"
            number={4.0}
            href="Chapter20" />
          <TOCItem
            label="regular grammars"
            on_mobile="regular grammars"
            number={4.1}
            href="Chapter21" />
          <TOCItem
            label="finite state machines"
            on_mobile="finite state machines"
            number={4.2}
            href="Chapter22" />
          <TOCItem
            label="nfsm"
            on_mobile="nfsm"
            number={4.3}
            href="Chapter23" />
          <TOCItem
            label="regular grammar to fsm"
            on_mobile="regular grammar to fsm"
            number={4.4}
            href="Chapter24" />
          <TOCItem
            label="regular expressions"
            on_mobile="regular expressions"
            number={4.5}
            href="Chapter25" />
          <TOCItem
            label="limitations of regular grammars"
            on_mobile="limitations of regular grammars"
            number={4.6}
            href="Chapter26" />
          <TOCItem
            label="exercises"
            on_mobile="exercises"
            number={4.7}
            href="Chapter27" />
          <TOCItem
            label="context free languages"
            on_mobile="context free languages"
            number={5.0}
            href="Chapter28" />
          <TOCItem
            label="ableitungen"
            on_mobile="ableitungen"
            number={5.1}
            href="Chapter29" />
          <TOCItem
            label="cfg to pda"
            on_mobile="cfg to pda"
            number={5.2}
            href="Chapter30" />
          <TOCItem
            label="exercise design grammars"
            on_mobile="exercise design grammars"
            number={5.3}
            href="Chapter31" />
          <TOCItem
            label="LL1 grammars"
            on_mobile="LL1 grammars"
            number={5.4}
            href="Chapter32" />
          <TOCItem
            label="a LR parsing by hand"
            on_mobile="a LR parsing by hand"
            number={5.5}
            href="Chapter33" />
          <TOCItem
            label="b Parser in Java"
            on_mobile="b Parser in Java"
            number={5.5}
            href="Chapter34" />
          <TOCItem
            label="c LR grammars"
            on_mobile="c LR grammars"
            number={5.5}
            href="Chapter35" />
          <TOCItem
            label="d linker Rand und Bluete"
            on_mobile="d linker Rand und Bluete"
            number={5.5}
            href="Chapter36" />
          <TOCItem
            label="dk automat"
            on_mobile="dk automat"
            number={5.6}
            href="Chapter37" />
          <TOCItem
            label="general parsing"
            on_mobile="general parsing"
            number={5.9}
            href="Chapter38" />
          <TOCItem
            label="not context free"
            on_mobile="not context free"
            number={5.10}
            href="Chapter39" />
          <TOCItem
            label="general grammars"
            on_mobile="general grammars"
            number={6.0}
            href="Chapter40" />
          <TOCItem
            label="Turing machines"
            on_mobile="Turing machines"
            number={7.0}
            href="Chapter41" />
          <TOCItem
            label="Turing machines definition"
            on_mobile="Turing machines definition"
            number={7.1}
            href="Chapter42" />
          <TOCItem
            label="Turing machines examples"
            on_mobile="Turing machines examples"
            number={7.1}
            href="Chapter43" />
          <TOCItem
            label="Turing variants"
            on_mobile="Turing variants"
            number={7.2}
            href="Chapter44" />
          <TOCItem
            label="Turing encoding"
            on_mobile="Turing encoding"
            number={7.3}
            href="Chapter45" />
          <TOCItem
            label="Turing universal"
            on_mobile="Turing universal"
            number={7.3}
            href="Chapter46" />
          <TOCItem
            label="undecidability"
            on_mobile="undecidability"
            number={7.5}
            href="Chapter47" />
          <TOCItem
            label="Post correspondence problem"
            on_mobile="Post correspondence problem"
            number={7.6}
            href="Chapter48" />
          <TOCItem
            label="PCP applications"
            on_mobile="PCP applications"
            number={7.7}
            href="Chapter49" />
          <TOCItem
            label="Complexity Theory"
            on_mobile="Complexity Theory"
            number={8.0}
            href="Chapter50" />
          <TOCItem
            label="Time hierarchy theorem"
            on_mobile="Time hierarchy theorem"
            number={8.1}
            href="Chapter51" />
          <TOCItem
            label=""
            on_mobile=""
            number="9.appendix.emu"
            href="Chapter52" />
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;