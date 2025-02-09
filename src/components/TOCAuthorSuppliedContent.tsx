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
            href="01-00-Boolean-circuits"
          />
          <TOCItem
            label="Fanin Size Depth"
            on_mobile="Fanin Size Depth"
            number={1.1}
            href="01-01-Fanin-Size-Depth"
          />
          <TOCItem
            label="truth tables cnf dnf"
            on_mobile="truth tables cnf dnf"
            number={1.2}
            href="01-02-truth-tables-cnf-dnf"
          />
          <TOCItem
            label="binary adder"
            on_mobile="binary adder"
            number={1.3}
            href="01-03-binary-adder"
          />
          <TOCItem
            label="monotone circuits"
            on_mobile="monotone circuits"
            number={1.4}
            href="01-04-monotone-circuits"
          />
          <TOCItem
            label="majority"
            on_mobile="majority"
            number={1.5}
            href="01-05-majority"
          />
          <TOCItem
            label="lower and upper bounds"
            on_mobile="lower and upper bounds"
            number={1.6}
            href="01-06-lower-and-upper-bounds"
          />
          <TOCItem
            label="infinite sets"
            on_mobile="infinite sets"
            number={2.0}
            href="02-00-infinite-sets"
          />
          <TOCItem
            label="comparing sizes"
            on_mobile="comparing sizes"
            number={2.1}
            href="02-01-comparing-sizes"
          />
          <TOCItem
            label="examples of equipotent sets"
            on_mobile="examples of equipotent sets"
            number={2.2}
            href="02-02-examples-of-equipotent-sets"
          />
          <TOCItem
            label="sets like R"
            on_mobile="sets like R"
            number={2.3}
            href="02-03-sets-like-R"
          />
          <TOCItem
            label="diagonalization"
            on_mobile="diagonalization"
            number={2.4}
            href="02-04-diagonalization"
          />
          <TOCItem
            label="Schroeder Bernstein"
            on_mobile="Schroeder Bernstein"
            number={2.5}
            href="02-05-Schroeder-Bernstein"
          />
          <TOCItem
            label="Trichotomiesatz"
            on_mobile="Trichotomiesatz"
            number={2.6}
            href="02-06-Trichotomiesatz"
          />
          <TOCItem
            label="Computability NaturalNumbers"
            on_mobile="Computability NaturalNumbers"
            number={3.0}
            href="03-00-Computability-NaturalNumbers"
          />
          <TOCItem
            label="primitive recursion definitions"
            on_mobile="primitive recursion definitions"
            number={3.1}
            href="03-01-primitive-recursion-definitions"
          />
          <TOCItem
            label="primitive recursion constructions"
            on_mobile="primitive recursion constructions"
            number={3.2}
            href="03-02-primitive-recursion-constructions"
          />
          <TOCItem
            label="ackermann"
            on_mobile="ackermann"
            number={3.3}
            href="03-03-ackermann"
          />
          <TOCItem
            label="mu recursion"
            on_mobile="mu recursion"
            number={3.4}
            href="03-04-mu-recursion"
          />
          <TOCItem
            label="formal languages"
            on_mobile="formal languages"
            number={4.0}
            href="04-00-formal-languages"
          />
          <TOCItem
            label="regular grammars"
            on_mobile="regular grammars"
            number={4.1}
            href="04-01-regular-grammars"
          />
          <TOCItem
            label="finite state machines"
            on_mobile="finite state machines"
            number={4.2}
            href="04-02-finite-state-machines"
          />
          <TOCItem
            label="nfsm"
            on_mobile="nfsm"
            number={4.3}
            href="04-03-nfsm"
          />
          <TOCItem
            label="regular grammar to fsm"
            on_mobile="regular grammar to fsm"
            number={4.4}
            href="04-04-regular-grammar-to-fsm"
          />
          <TOCItem
            label="regular expressions"
            on_mobile="regular expressions"
            number={4.5}
            href="04-05-regular-expressions"
          />
          <TOCItem
            label="limitations of regular grammars"
            on_mobile="limitations of regular grammars"
            number={4.6}
            href="04-06-limitations-of-regular-grammars"
          />
          <TOCItem
            label="exercises"
            on_mobile="exercises"
            number={4.7}
            href="04-07-exercises"
          />
          <TOCItem
            label="context free languages"
            on_mobile="context free languages"
            number={5.0}
            href="05-00-context-free-languages"
          />
          <TOCItem
            label="ableitungen"
            on_mobile="ableitungen"
            number={5.1}
            href="05-01-ableitungen"
          />
          <TOCItem
            label="cfg to pda"
            on_mobile="cfg to pda"
            number={5.2}
            href="05-02-cfg-to-pda"
          />
          <TOCItem
            label="exercise design grammars"
            on_mobile="exercise design grammars"
            number={5.3}
            href="05-03-exercise-design-grammars"
          />
          <TOCItem
            label="LL1 grammars"
            on_mobile="LL1 grammars"
            number={5.4}
            href="05-04-LL1-grammars"
          />
          <TOCItem
            label="a LR parsing by hand"
            on_mobile="a LR parsing by hand"
            number={5.5}
            href="05-05-a-LR-parsing-by-hand"
          />
          <TOCItem
            label="b Parser in Java"
            on_mobile="b Parser in Java"
            number={5.5}
            href="05-05-b-Parser-in-Java"
          />
          <TOCItem
            label="c LR grammars"
            on_mobile="c LR grammars"
            number={5.5}
            href="05-05-c-LR-grammars"
          />
          <TOCItem
            label="d linker Rand und Bluete"
            on_mobile="d linker Rand und Bluete"
            number={5.5}
            href="05-05-d-linker-Rand-und-Bluete"
          />
          <TOCItem
            label="dk automat"
            on_mobile="dk automat"
            number={5.6}
            href="05-06-dk-automat"
          />
          <TOCItem
            label="general parsing"
            on_mobile="general parsing"
            number={5.9}
            href="05-09-general-parsing"
          />
          <TOCItem
            label="not context free"
            on_mobile="not context free"
            number={5.1}
            href="05-10-not-context-free"
          />
          <TOCItem
            label="general grammars"
            on_mobile="general grammars"
            number={6.0}
            href="06-00-general-grammars"
          />
          <TOCItem
            label="Turing machines"
            on_mobile="Turing machines"
            number={7.0}
            href="07-00-Turing-machines"
          />
          <TOCItem
            label="Turing machines definition"
            on_mobile="Turing machines definition"
            number={7.1}
            href="07-01-Turing-machines-definition"
          />
          <TOCItem
            label="Turing machines examples"
            on_mobile="Turing machines examples"
            number={7.1}
            href="07-01-Turing-machines-examples"
          />
          <TOCItem
            label="Turing variants"
            on_mobile="Turing variants"
            number={7.2}
            href="07-02-Turing-variants"
          />
          <TOCItem
            label="Turing encoding"
            on_mobile="Turing encoding"
            number={7.3}
            href="07-03-Turing-encoding"
          />
          <TOCItem
            label="Turing universal"
            on_mobile="Turing universal"
            number={7.3}
            href="07-03-Turing-universal"
          />
          <TOCItem
            label="undecidability"
            on_mobile="undecidability"
            number={7.5}
            href="07-05-undecidability"
          />
          <TOCItem
            label="Post correspondence problem"
            on_mobile="Post correspondence problem"
            number={7.6}
            href="07-06-Post-correspondence-problem"
          />
          <TOCItem
            label="PCP applications"
            on_mobile="PCP applications"
            number={7.7}
            href="07-07-PCP-applications"
          />
          <TOCItem
            label="Complexity Theory"
            on_mobile="Complexity Theory"
            number={8.0}
            href="08-00-Complexity-Theory"
          />
          <TOCItem
            label="Time hierarchy theorem"
            on_mobile="Time hierarchy theorem"
            number={8.1}
            href="08-01-Time-hierarchy-theorem"
          />
          <TOCItem
            label=""
            on_mobile=""
            number="9.appendix.emu"
            href="09-appendix-emu-"
          />
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;
