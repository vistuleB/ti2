import TOCItem from "./TOCItem";

const TOCAuthorSuppliedContent = () => {
  return (
    <>
      <div id="Chapters">
        <ul style="list-style: none">
          <TOCItem
            label="Boolesche Schaltkreise"
            on_mobile="Boolesche Schaltkreise"
            number={1.0}
            href="01-00-Boolean-circuits" />
          <TOCItem
            label="Größe, Tiefe, Fan-In"
            on_mobile="Größe, Tiefe, Fan-In"
            number={1.1}
            href="01-01-Fanin-Size-Depth" />
          <TOCItem
            label="Wahrheitstabellen, CNF und DNF"
            on_mobile="Wahrheitstabellen, CNF und DNF"
            number={1.2}
            href="01-02-truth-tables-cnf-dnf" />
          <TOCItem
            label="Binär-Addierer"
            on_mobile="Binär-Addierer"
            number={1.3}
            href="01-03-binary-adder" />
          <TOCItem
            label="1.4 Monotone Funktionen und monotone Schaltkreise"
            on_mobile="1.4 Monotone Funktionen und monotone Schaltkreise"
            number={1.4}
            href="01-04-monotone-circuits" />
          <TOCItem
            label="1.5 Majority"
            on_mobile="1.5 Majority"
            number={1.5}
            href="01-05-majority" />
          <TOCItem
            label="1.6 Untere und obere Schranken"
            on_mobile="1.6 Untere und obere Schranken"
            number={1.6}
            href="01-06-lower-and-upper-bounds" />
          <TOCItem
            label="2. Unendliche Mengen"
            on_mobile="2. Unendliche Mengen"
            number={2.0}
            href="02-00-infinite-sets" />
          <TOCItem
            label="2.1 Wer ist größer?"
            on_mobile="2.1 Wer ist größer?"
            number={2.1}
            href="02-01-comparing-sizes" />
          <TOCItem
            label="2.2 Beispiele abzählbar unendlicher Mengen"
            on_mobile="2.2 Beispiele abzählbar unendlicher Mengen"
            number={2.2}
            href="02-02-examples-of-equipotent-sets" />
          <TOCItem
            label="2.3 Mengen, die so groß wie $\R$ sind"
            on_mobile="2.3 Mengen, die so groß wie $\R$ sind"
            number={2.3}
            href="02-03-sets-like-R" />
          <TOCItem
            label="2.4 Die Cantorsche Diagonalisation: $\N \not \approx \R$"
            on_mobile="2.4 Die Cantorsche Diagonalisation: $\N \not \approx \R$"
            number={2.4}
            href="02-04-diagonalization" />
          <TOCItem
            label="2.5 Das Schröder-Bernstein-Theorem"
            on_mobile="2.5 Das Schröder-Bernstein-Theorem"
            number={2.5}
            href="02-05-Schroeder-Bernstein" />
          <TOCItem
            label="2.6 Der Trichotomiesatz"
            on_mobile="2.6 Der Trichotomiesatz"
            number={2.6}
            href="02-06-Trichotomiesatz" />
          <TOCItem
            label="3. Berechenbarkeit und natürliche Zahlen"
            on_mobile="3. Berechenbarkeit und natürliche Zahlen"
            number={3.0}
            href="03-00-Computability-NaturalNumbers" />
          <TOCItem
            label="3.1 Primitive Rekursion: Motivation und Definitionen"
            on_mobile="3.1 Primitive Rekursion: Motivation und Definitionen"
            number={3.1}
            href="03-01-primitive-recursion-definitions" />
          <TOCItem
            label="3.2 Primitive Rekursion: Konstruktionen und Tricks"
            on_mobile="3.2 Primitive Rekursion: Konstruktionen und Tricks"
            number={3.2}
            href="03-02-primitive-recursion-constructions" />
          <TOCItem
            label="3.3 Primitive Rekursion kann nicht alles: die éter-Ackermann-Funktion"
            on_mobile="3.3 Primitive Rekursion kann nicht alles: die éter-Ackermann-Funktion"
            number={3.3}
            href="03-03-ackermann" />
          <TOCItem
            label="3.4 Ein Schritt weiter:  while-Schleifen und \(\mu\)-Rekursion"
            on_mobile="3.4 Ein Schritt weiter:  while-Schleifen und \(\mu\)-Rekursion"
            number={3.4}
            href="03-04-mu-recursion" />
          <TOCItem
            label="4. Formale Sprachen - Einführung und Beispiele"
            on_mobile="4. Formale Sprachen - Einführung und Beispiele"
            number={4.0}
            href="04-00-formal-languages" />
          <TOCItem
            label="4.1 Reguläre Grammatiken"
            on_mobile="4.1 Reguläre Grammatiken"
            number={4.1}
            href="04-01-regular-grammars" />
          <TOCItem
            label="4.2 Endliche Automaten"
            on_mobile="4.2 Endliche Automaten"
            number={4.2}
            href="04-02-finite-state-machines" />
          <TOCItem
            label="4.3 Nichtdeterministische Endliche Automaten"
            on_mobile="4.3 Nichtdeterministische Endliche Automaten"
            number={4.3}
            href="04-03-nfsm" />
          <TOCItem
            label="4.4 Von einer regulären Grammatik zu einem endlichen Automaten"
            on_mobile="4.4 Von einer regulären Grammatik zu einem endlichen Automaten"
            number={4.4}
            href="04-04-regular-grammar-to-fsm" />
          <TOCItem
            label="4.5 Reguläre Ausdrücke"
            on_mobile="4.5 Reguläre Ausdrücke"
            number={4.5}
            href="04-05-regular-expressions" />
          <TOCItem
            label="4.6 Die Grenzen regulärer Sprachen"
            on_mobile="4.6 Die Grenzen regulärer Sprachen"
            number={4.6}
            href="04-06-limitations-of-regular-grammars" />
          <TOCItem
            label="4.7 Übungsaufgaben"
            on_mobile="4.7 Übungsaufgaben"
            number={4.7}
            href="04-07-exercises" />
          <TOCItem
            label="5. Kontextfreie Sprachen"
            on_mobile="5. Kontextfreie Sprachen"
            number={5.0}
            href="05-00-context-free-languages" />
          <TOCItem
            label="5.1 Ableitungen und Ableitungsbäume"
            on_mobile="5.1 Ableitungen und Ableitungsbäume"
            number={5.1}
            href="05-01-ableitungen" />
          <TOCItem
            label="5.2 Kontextfreie Grammatiken und Kellerautomaten"
            on_mobile="5.2 Kontextfreie Grammatiken und Kellerautomaten"
            number={5.2}
            href="05-02-cfg-to-pda" />
          <TOCItem
            label="5.3 Rechnerübung: Gute kontextfreie Grammatiken entwerfen"
            on_mobile="5.3 Rechnerübung: Gute kontextfreie Grammatiken entwerfen"
            number={5.3}
            href="05-03-exercise-design-grammars" />
          <TOCItem
            label="5.4 LL(\(k\))-Grammatiken"
            on_mobile="5.4 LL(\(k\))-Grammatiken"
            number={5.4}
            href="05-04-LL1-grammars" />
          <TOCItem
            label="5.5 LR-Parser per Hand entwerfen"
            on_mobile="5.5 LR-Parser per Hand entwerfen"
            number={5.5}
            href="05-05-a-LR-parsing-by-hand" />
          <TOCItem
            label="5.6 Einen Parser in Java implementieren"
            on_mobile="5.6 Einen Parser in Java implementieren"
            number={5.6}
            href="05-06-b-Parser-in-Java" />
          <TOCItem
            label="5.5 LR-Grammatiken"
            on_mobile="5.5 LR-Grammatiken"
            number={5.7}
            href="05-07-c-LR-grammars" />
          <TOCItem
            label="5.8 Linker Rand, Blüten und die DK-Grammatik"
            on_mobile="5.8 Linker Rand, Blüten und die DK-Grammatik"
            number={5.8}
            href="05-08-d-linker-Rand-und-Bluete" />
          <TOCItem
            label="5.6 Der DK-Automat"
            on_mobile="5.6 Der DK-Automat"
            number={5.9}
            href="05-09-dk-automat" />
          <TOCItem
            label="5.9 Allgemeine kontextfreie Sprachen parsen"
            on_mobile="5.9 Allgemeine kontextfreie Sprachen parsen"
            number={5.10}
            href="05-10-general-parsing" />
          <TOCItem
            label="5.10 Die Grenzen kontextfreier Sprachen"
            on_mobile="5.10 Die Grenzen kontextfreier Sprachen"
            number={5.11}
            href="05-11-not-context-free" />
          <TOCItem
            label="6. Allgemeine Grammatiken"
            on_mobile="6. Allgemeine Grammatiken"
            number={6.0}
            href="06-00-general-grammars" />
          <TOCItem
            label="7. Turing-Maschinen"
            on_mobile="7. Turing-Maschinen"
            number={7.0}
            href="07-00-Turing-machines" />
          <TOCItem
            label="4.1 Turingmaschinen: Formale Definition und Beispiele"
            on_mobile="4.1 Turingmaschinen: Formale Definition und Beispiele"
            number={7.1}
            href="07-01-Turing-machines-definition" />
          <TOCItem
            label="4.2 Beispiele von Turingmaschinen"
            on_mobile="4.2 Beispiele von Turingmaschinen"
            number={7.2}
            href="07-02-Turing-machines-examples" />
          <TOCItem
            label="4.3 Variationen: Mehrband-Maschinen, nichtdeterministische Maschinen"
            on_mobile="4.3 Variationen: Mehrband-Maschinen, nichtdeterministische Maschinen"
            number={7.3}
            href="07-03-Turing-variants" />
          <TOCItem
            label="4.4 Die universelle Turingmaschine"
            on_mobile="4.4 Die universelle Turingmaschine"
            number={7.4}
            href="07-04-Turing-encoding" />
          <TOCItem
            label="7.5 Turing-Maschinen simulieren Turing-Maschinen: die universelle Turing-Maschine"
            on_mobile="7.5 Turing-Maschinen simulieren Turing-Maschinen: die universelle Turing-Maschine"
            number={7.5}
            href="07-05-Turing-universal" />
          <TOCItem
            label="4.6 Turingmaschinen, Haltproblem und Unentscheidbarkeit"
            on_mobile="4.6 Turingmaschinen, Haltproblem und Unentscheidbarkeit"
            number={7.6}
            href="07-06-undecidability" />
          <TOCItem
            label="Mehr über Unentscheidbarkeit: Das Postsche Korrespondenzproblem"
            on_mobile="Mehr über Unentscheidbarkeit: Das Postsche Korrespondenzproblem"
            number={7.7}
            href="07-07-Post-correspondence-problem" />
          <TOCItem
            label="Anwendungen des Postschen Korrespondenzproblems"
            on_mobile="Anwendungen des Postschen Korrespondenzproblems"
            number={7.8}
            href="07-08-PCP-applications" />
          <TOCItem
            label="8. Komplexitätstheorie"
            on_mobile="8. Komplexitätstheorie"
            number={8.0}
            href="08-00-Complexity-Theory" />
          <TOCItem
            label="8.1 Das Zeithierarchietheorem"
            on_mobile="8.1 Das Zeithierarchietheorem"
            number={8.1}
            href="08-01-Time-hierarchy-theorem" />
          <TOCItem
            label="9. Appendix - Manual für das Schreiben dieses Skripts"
            on_mobile="9. Appendix - Manual für das Schreiben dieses Skripts"
            number={9.0}
            href="09-00-appendix" />
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;