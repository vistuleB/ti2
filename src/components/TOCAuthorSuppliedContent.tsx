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
            href="01-00-Boolesche-Schaltkreise" />
          <TOCItem
            label="Größe, Tiefe, Fan-In"
            on_mobile="Größe, Tiefe, Fan-In"
            number={1.1}
            href="01-01-Größe,-Tiefe,-Fan-In" />
          <TOCItem
            label="Wahrheitstabellen, CNF und DNF"
            on_mobile="Wahrheitstabellen, CNF und DNF"
            number={1.2}
            href="01-02-Wahrheitstabellen,-CNF-und-DNF" />
          <TOCItem
            label="Binär-Addierer"
            on_mobile="Binär-Addierer"
            number={1.3}
            href="01-03-Binär-Addierer" />
          <TOCItem
            label="Monotone Funktionen und monotone Schaltkreise"
            on_mobile="Monotone Funktionen und monotone Schaltkreise"
            number={1.4}
            href="01-04-Monotone-Funktionen-und-monotone-Schaltkreise" />
          <TOCItem
            label="Majority"
            on_mobile="Majority"
            number={1.5}
            href="01-05-Majority" />
          <TOCItem
            label="Untere und obere Schranken"
            on_mobile="Untere und obere Schranken"
            number={1.6}
            href="01-06-Untere-und-obere-Schranken" />
          <TOCItem
            label="Unendliche Mengen"
            on_mobile="Unendliche Mengen"
            number={2.0}
            href="02-00-Unendliche-Mengen" />
          <TOCItem
            label="Wer ist größer?"
            on_mobile="Wer ist größer?"
            number={2.1}
            href="02-01-Wer-ist-größer?" />
          <TOCItem
            label="Beispiele abzählbar unendlicher Mengen"
            on_mobile="Beispiele abzählbar unendlicher Mengen"
            number={2.2}
            href="02-02-Beispiele-abzählbar-unendlicher-Mengen" />
          <TOCItem
            label="Mengen, die so groß wie $\R$ sind"
            on_mobile="Mengen, die so groß wie $\R$ sind"
            number={2.3}
            href="02-03-Mengen,-die-so-groß-wie-$\R$-sind" />
          <TOCItem
            label="Die Cantorsche Diagonalisation: $\N \not \approx \R$"
            on_mobile="Die Cantorsche Diagonalisation: $\N \not \approx \R$"
            number={2.4}
            href="02-04-Die-Cantorsche-Diagonalisation:-$\N-\not-\approx-\R$" />
          <TOCItem
            label="Das Schröder-Bernstein-Theore"
            on_mobile="Das Schröder-Bernstein-Theore"
            number={2.5}
            href="02-05-Das-Schröder-Bernstein-Theore" />
          <TOCItem
            label="Der Trichotomiesat"
            on_mobile="Der Trichotomiesat"
            number={2.6}
            href="02-06-Der-Trichotomiesat" />
          <TOCItem
            label="Berechenbarkeit und natürliche Zahlen"
            on_mobile="Berechenbarkeit und natürliche Zahlen"
            number={3.0}
            href="03-00-Berechenbarkeit-und-natürliche-Zahlen" />
          <TOCItem
            label="Primitive Rekursion: Motivation und Definitionen"
            on_mobile="Primitive Rekursion: Motivation und Definitionen"
            number={3.1}
            href="03-01-Primitive-Rekursion:-Motivation-und-Definitionen" />
          <TOCItem
            label="Primitive Rekursion: Konstruktionen und Tricks"
            on_mobile="Primitive Rekursion: Konstruktionen und Tricks"
            number={3.2}
            href="03-02-Primitive-Rekursion:-Konstruktionen-und-Tricks" />
          <TOCItem
            label="Primitive Rekursion kann nicht alles: die éter-Ackermann-Funktion"
            on_mobile="Primitive Rekursion kann nicht alles: die éter-Ackermann-Funktion"
            number={3.3}
            href="03-03-Primitive-Rekursion-kann-nicht-alles:-die-éter-Ackermann-Funktion" />
          <TOCItem
            label="Ein Schritt weiter:  while-Schleifen und \(\mu\)-Rekursion"
            on_mobile="Ein Schritt weiter:  while-Schleifen und \(\mu\)-Rekursion"
            number={3.4}
            href="03-04-Ein-Schritt-weiter:--while-Schleifen-und-\(\mu\)-Rekursion" />
          <TOCItem
            label="Formale Sprachen - Einführung und Beispiele"
            on_mobile="Formale Sprachen - Einführung und Beispiele"
            number={4.0}
            href="04-00-Formale-Sprachen---Einführung-und-Beispiele" />
          <TOCItem
            label="Reguläre Grammatiken"
            on_mobile="Reguläre Grammatiken"
            number={4.1}
            href="04-01-Reguläre-Grammatiken" />
          <TOCItem
            label="Endliche Automaten"
            on_mobile="Endliche Automaten"
            number={4.2}
            href="04-02-Endliche-Automaten" />
          <TOCItem
            label="Nichtdeterministische Endliche Automaten"
            on_mobile="Nichtdeterministische Endliche Automaten"
            number={4.3}
            href="04-03-Nichtdeterministische-Endliche-Automaten" />
          <TOCItem
            label="Von einer regulären Grammatik zu einem endlichen Automaten"
            on_mobile="Von einer regulären Grammatik zu einem endlichen Automaten"
            number={4.4}
            href="04-04-Von-einer-regulären-Grammatik-zu-einem-endlichen-Automaten" />
          <TOCItem
            label="Reguläre Ausdrücke"
            on_mobile="Reguläre Ausdrücke"
            number={4.5}
            href="04-05-Reguläre-Ausdrücke" />
          <TOCItem
            label="Die Grenzen regulärer Sprachen"
            on_mobile="Die Grenzen regulärer Sprachen"
            number={4.6}
            href="04-06-Die-Grenzen-regulärer-Sprachen" />
          <TOCItem
            label="Übungsaufgaben"
            on_mobile="Übungsaufgaben"
            number={4.7}
            href="04-07-Übungsaufgaben" />
          <TOCItem
            label="Kontextfreie Sprachen"
            on_mobile="Kontextfreie Sprachen"
            number={5.0}
            href="05-00-Kontextfreie-Sprachen" />
          <TOCItem
            label="Ableitungen und Ableitungsbäume"
            on_mobile="Ableitungen und Ableitungsbäume"
            number={5.1}
            href="05-01-Ableitungen-und-Ableitungsbäume" />
          <TOCItem
            label="Kontextfreie Grammatiken und Kellerautomaten"
            on_mobile="Kontextfreie Grammatiken und Kellerautomaten"
            number={5.2}
            href="05-02-Kontextfreie-Grammatiken-und-Kellerautomaten" />
          <TOCItem
            label="Rechnerübung: Gute kontextfreie Grammatiken entwerfen"
            on_mobile="Rechnerübung: Gute kontextfreie Grammatiken entwerfen"
            number={5.3}
            href="05-03-Rechnerübung:-Gute-kontextfreie-Grammatiken-entwerfen" />
          <TOCItem
            label="LL(\(k\))-Grammatiken"
            on_mobile="LL(\(k\))-Grammatiken"
            number={5.4}
            href="05-04-LL(\(k\))-Grammatiken" />
          <TOCItem
            label="LR-Parser per Hand entwerfen"
            on_mobile="LR-Parser per Hand entwerfen"
            number={5.5}
            href="05-05-LR-Parser-per-Hand-entwerfen" />
          <TOCItem
            label="Einen Parser in Java implementieren"
            on_mobile="Einen Parser in Java implementieren"
            number={5.6}
            href="05-06-Einen-Parser-in-Java-implementieren" />
          <TOCItem
            label="LR-Grammatiken"
            on_mobile="LR-Grammatiken"
            number={5.7}
            href="05-07-LR-Grammatiken" />
          <TOCItem
            label="Linker Rand, Blüten und die DK-Grammatik"
            on_mobile="Linker Rand, Blüten und die DK-Grammatik"
            number={5.8}
            href="05-08-Linker-Rand,-Blüten-und-die-DK-Grammatik" />
          <TOCItem
            label="Der DK-Automat"
            on_mobile="Der DK-Automat"
            number={5.9}
            href="05-09-Der-DK-Automat" />
          <TOCItem
            label="Allgemeine kontextfreie Sprachen parsen"
            on_mobile="Allgemeine kontextfreie Sprachen parsen"
            number={5.10}
            href="05-10-Allgemeine-kontextfreie-Sprachen-parsen" />
          <TOCItem
            label="Die Grenzen kontextfreier Sprachen"
            on_mobile="Die Grenzen kontextfreier Sprachen"
            number={5.11}
            href="05-11-Die-Grenzen-kontextfreier-Sprachen" />
          <TOCItem
            label="Allgemeine Grammatiken"
            on_mobile="Allgemeine Grammatiken"
            number={6.0}
            href="06-00-Allgemeine-Grammatiken" />
          <TOCItem
            label="Turing-Maschinen"
            on_mobile="Turing-Maschinen"
            number={7.0}
            href="07-00-Turing-Maschinen" />
          <TOCItem
            label="Turingmaschinen: Formale Definition und Beispiele"
            on_mobile="Turingmaschinen: Formale Definition und Beispiele"
            number={7.1}
            href="07-01-Turingmaschinen:-Formale-Definition-und-Beispiele" />
          <TOCItem
            label="Beispiele von Turingmaschinen"
            on_mobile="Beispiele von Turingmaschinen"
            number={7.2}
            href="07-02-Beispiele-von-Turingmaschinen" />
          <TOCItem
            label="Variationen: Mehrband-Maschinen, nichtdeterministische Maschinen"
            on_mobile="Variationen: Mehrband-Maschinen, nichtdeterministische Maschinen"
            number={7.3}
            href="07-03-Variationen:-Mehrband-Maschinen,-nichtdeterministische-Maschinen" />
          <TOCItem
            label="Die universelle Turingmaschine"
            on_mobile="Die universelle Turingmaschine"
            number={7.4}
            href="07-04-Die-universelle-Turingmaschine" />
          <TOCItem
            label="Turing-Maschinen simulieren Turing-Maschinen: die universelle Turing-Maschine"
            on_mobile="Turing-Maschinen simulieren Turing-Maschinen: die universelle Turing-Maschine"
            number={7.5}
            href="07-05-Turing-Maschinen-simulieren-Turing-Maschinen:-die-universelle-Turing-Maschine" />
          <TOCItem
            label="Turingmaschinen, Haltproblem und Unentscheidbarkeit"
            on_mobile="Turingmaschinen, Haltproblem und Unentscheidbarkeit"
            number={7.6}
            href="07-06-Turingmaschinen,-Haltproblem-und-Unentscheidbarkeit" />
          <TOCItem
            label="über Unentscheidbarkeit: Das Postsche Korrespondenzproblem"
            on_mobile="über Unentscheidbarkeit: Das Postsche Korrespondenzproblem"
            number={7.7}
            href="07-07-über-Unentscheidbarkeit:-Das-Postsche-Korrespondenzproblem" />
          <TOCItem
            label="des Postschen Korrespondenzproblems"
            on_mobile="des Postschen Korrespondenzproblems"
            number={7.8}
            href="07-08-des-Postschen-Korrespondenzproblems" />
          <TOCItem
            label="Komplexitätstheorie"
            on_mobile="Komplexitätstheorie"
            number={8.0}
            href="08-00-Komplexitätstheorie" />
          <TOCItem
            label="Das Zeithierarchietheorem"
            on_mobile="Das Zeithierarchietheorem"
            number={8.1}
            href="08-01-Das-Zeithierarchietheorem" />
          <TOCItem
            label="Appendix - Manual für das Schreiben dieses Skripts"
            on_mobile="Appendix - Manual für das Schreiben dieses Skripts"
            number={9.0}
            href="09-00-Appendix---Manual-für-das-Schreiben-dieses-Skripts" />
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;