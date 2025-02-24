import Section from "~/components/Section";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
import NumberedTitle from "~/components/NumberedTitle";
const Article = () => {
  return (
    <Container>
      <Section
        count={49}
        title_gr="Anwendungen des Postschen Korrespondenzproblems"
        title_en="PCP applications"
        number={7.8}
        counter="DefCtr"
        counter="ExoCtr"
        path="/lecture-notes49.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="07-07-Post-correspondence-problem">
            &lt;&lt; Kapitel 7.7
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="08-00-Complexity-Theory">
            Kapitel 8.0 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    7.8 
                    Anwendungen des Postschen Korrespondenzproblems
                  </span>
                </h1>
                <Paragraph>
                  Erinnerin Sie sich an kontextfreie Grammatiken? Das waren formale Grammatiken wie zum Beispiel
                  $$\begin&#123;align*&#125;
                  S&amp;\rightarrow Tc \\
                  T&amp;\rightarrow TaTb \\
                  T&amp;\rightarrow \epsilon
                  \end&#123;align*&#125;$$
                  Diese Grammatiken erlauben uns, gewisse Sprachen zu beschreiben, indem Sie Regeln festlegen -
                  hier
                  <i>
                    Produktionen
                  </i>
                  {" "}genannt, nach welchen man aus dem Startsymbol \(S\) Wörter über dem
                  Alphabet
                  (hier: \(\&#123;a,b,c\&#125;\)) ableiten kann. Beispielsweise:
                  $$\begin&#123;align*&#125;
                  S \Rightarrow Tc \Rightarrow TaTbc \Rightarrow TaTaTbbc \Rightarrow
                  TaTabbc \Rightarrow Taabbc \Rightarrow aabbc
                  \end&#123;align*&#125;$$
                  Kontextfreie Grammatiken werden zum Beispiel verwendet, um die Syntax von Dateiformaten,
                  Programmiersprachen und manchmal sogar natürlicher Sprachen zu beschreiben. Es wäre daher
                  schön, über gegebene kontextfreie Grammatik möglichst viele Dinge herausfinden zu können.
                  Leider sind viele solche Probleme unentscheidbar. Als einfaches Beispiel:
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Theorem
                    <NumberedTitle>
                      &ensp;7.8.1{" "}
                    </NumberedTitle>
                  </span>
                  &ensp;Wir wollen bestimmen, ob
                  aus einer gegebenen kontextfreien Grammatik \(G\) ein Palindromwort ableitbar ist,
                  also ein \(\gamma\), das von rechts nach links gelesen gleich ist, sprich
                  \(\gamma = \gamma^R\). Dieses Problem ist unentscheidbar.
                  <Paragraph>
                    Formal gesehen müssten wir eine Codierung kontextfreier Grammatiken über einem festen
                    Alphabet (zum Beispiel \(\&#123;0,1, \rightarrow, ;, \dots\&#125;\) angeben, um dann die{" "}
                    <i>
                      Sprache
                      der
                      Codierungen all jener
                      kontextfreien Grammatik, die ein Palindromwort ableiten können
                    </i>
                    definieren zu können. Da wir aber mittlerweile verstanden haben, dass alle
                    "endlichen" Objekte irgendwie auf Turingmschinen-verträgliche Weise codiert werden können,
                    ersparen wir uns diese Formalitäten.
                  </Paragraph>
                </div>
                <div class="well container">
                  {" "}{" "}
                  <b>
                    Beweis.
                  </b>
                  Wir zeigen: wenn man zu einer gegebenen kontextfreien Grammatik entscheiden könnte,
                  ob sie ein Palindromwort ableiten kann, dann könnten wir auch entscheiden, ob ein
                  gegebenes PCP-Puzzle eine Lösung hat. Da wir bereits Letzteres als unentscheidbar
                  erkannt haben, schließen wir, dass Ersteres auch unentscheidbar ist.
                  <Paragraph>
                    Konkret sei uns nun also ein PCP-Puzzle \(P\) gegeben. Wir bauen daraus eine
                    kontextfreie Grammatik \(G\), so dass
                    \(G\) genau dann ein Palindromwort ableiten kann, wenn \(P\) eine Lösung hat.
                    Die Konstruktion ist überraschend einfach. Wir erschaffen ein Startsymbol \(S\)
                    für unsere Grammatik und erstellen zu jeder Kachel \(\alpha : \beta\) die
                    Grammatikregel
                    $$\begin&#123;align*&#125;
                    S&amp;\rightarrow \alpha S \beta^R \ ,
                    \end&#123;align*&#125;$$
                    wobei \(\beta^R\) das Wort \(\beta\) von rechts nach links gelesen bedeutet, also
                    \((xyz)^R = zyx\). Wir fügen noch eine weitere Regel hinzu:
                    $$\begin&#123;align*&#125;
                    S&amp;\rightarrow \$ \ ,
                    \end&#123;align*&#125;$$
                    wobei \(\$\) ein neues Zeichen ist, dass nicht in der Symbolmenge des PCP-Puzzles \(P\)
                    enthalten ist.
                  </Paragraph>
                  <div class="well subtheorem theorem">
                    <span class="numbered-title">
                      Behauptung
                      <NumberedTitle>
                        &ensp;7.8.2{" "}
                      </NumberedTitle>
                    </span>
                    &ensp;Wenn die Grammatik \(G\) ein Palindromwort
                    ableiten kann, dann hat das PCP-Puzzle \(P\) eine Lösung.
                  </div>
                  <div class="well subtheorem">
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    Die letzte angewandte Regel muss \(S \rightarrow \$\) sein, und somit hat
                    das abgeleitete Wort die Form
                    $$\begin&#123;align*&#125;
                    \alpha_1 \alpha_2 \dots \alpha_n \$ \beta_n^R \dots \beta_2^R \beta_1^R \ .
                    \end&#123;align*&#125;$$
                    Jedes Paar \(\alpha_i : \beta_i\) ist eine Kachel des PCP-Puzzles. Wenn das
                    Wort ein Palindrom ist, dann gilt \(\alpha_1 \dots \alpha_n = \beta_1 \dots \beta_n\)
                    und somit ist
                    $$\begin&#123;align*&#125;
                    (\alpha_1 : \beta_1) (\alpha_2 : \beta_2)\dots (\alpha_n : \beta_n)
                    \end&#123;align*&#125;$$
                    eine Lösung des PCP-Puzzles.
                    <span class="qed">
                      \(\square\)
                    </span>
                  </div>
                  <div class="well subtheorem theorem">
                    <span class="numbered-title">
                      Behauptung
                      <NumberedTitle>
                        &ensp;7.8.3{" "}
                      </NumberedTitle>
                    </span>
                    &ensp;Wenn
                    das PCP-Puzzle \(P\) eine Lösung hat, dann kann die Grammatik \(G\) ein Palindromwort
                    ableiten.
                  </div>
                  <div class="well subtheorem">
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    Sei
                    $$\begin&#123;align*&#125;
                    (\alpha_1 : \beta_1) (\alpha_2 : \beta_2)\dots (\alpha_n : \beta_n)
                    \end&#123;align*&#125;$$
                    eine Lösung des Puzzles, also \(\alpha_1 \alpha_2 \dots \alpha_n = \beta_1 \beta_2 \dots
                    \beta_n \).
                    Dann ist auch
                    $$\begin&#123;align*&#125;
                    \alpha_1 \alpha_2 \dots \alpha_n \$ (\beta_1 \beta_2 \dots \beta_n)^R
                    \end&#123;align*&#125;$$
                    ein Palindrom und kann von \(G\) abgeleitet werden:
                    $$\begin&#123;align*&#125;
                    S \Rightarrow \alpha_1 S \beta_1^R \Rightarrow \alpha_1 \alpha_2 S \beta_2^R \beta_1^R
                    \Rightarrow
                    \dots \Rightarrow
                    \alpha_1 \alpha_2 \dots \alpha_n S \beta_n^R \dots \beta_2^R \beta_1^R \Rightarrow
                    \alpha_1 \alpha_2 \dots \alpha_n \$ \beta_n^R \dots \beta_2^R \beta_1^R
                    \end&#123;align*&#125;$$
                    Somit ist gezeigt, dass \(G\) ein Palindromwort ableiten kann.
                    <span class="qed">
                      \(\square\)
                    </span>
                  </div>
                  Hätten wir nun also einen Algorithmus, der für eine gegebene kontextfreie Grammatik
                  entscheiden könnte, ob sie ein Palindromwort ableiten kann, dann könnten wir
                  PCP-Puzzles wie folgt entscheiden: nimm das Puzzle \(P\), baue nach den obigen
                  Regeln daraus die Grammatik \(G\) und frage dann den Algorithmus, ob
                  \(G\) ein Palindromwort ableiten kann. Dies beantwortet auch die Frage
                  nach der Lösbarkeit des gegebenen PCP-Puzzles.
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <h3>
                  Reduktionen
                </h3>
                <Paragraph>
                  Es lohnt sich, an dieser Stelle zu pausieren. Was Sie gerade gesehen haben,
                  ist eine{" "}
                  <i>
                    Reduktion
                  </i>
                  . Im "echten" Leben verwenden wir Reduktionen,
                  um bereits gefundene Lösungen zu "recyceln". Beispielsweise:
                  <ul>
                    <li>
                      {" "}{" "}
                      <b>
                        Aufgabe:
                      </b>
                      {" "}Zeigen Sie, dass die Funktion
                      \(n \mapsto n!\) im \(\lambda\)-Kalkül berechenbar ist.
                    </li>
                    <li>
                      Wir wissen bereits, wie man \(n \mapsto n!\) als
                      primitiv-rekursive Funktion schreibt.
                    </li>
                    <li>
                      Wir wissen bereits, wie man eine allgemeine primitiv rekursive Funktion
                      im \(\lambda\)-Kalkül implementiert.
                    </li>
                    <li>
                      Wir schließen nun, dass \(n \mapsto n!\) im \(\lambda\)-Kalkül implementierbar ist,
                      und ersparen uns die Details.
                    </li>
                  </ul>
                  Im Kontext der Turing-Berechenbarkeit können wir dieses Prinzip wie folgt
                  formalisieren:
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Definition
                    <NumberedTitle>
                      &ensp;7.8.4{" "}
                    </NumberedTitle>
                  </span>
                  Seien \(L_1 \subseteq \Sigma_1\) und \(L_2 \subseteq \Sigma_2\) zwei Sprachen.
                  Eine{" "}
                  <i>
                    Reduktion von \(L_1\) nach \(L_2\)
                  </i>
                  {" "}ist eine Turing-berechenbare Funktion
                  $$\begin&#123;align*&#125;
                  f : \Sigma_1^* \rightarrow \Sigma_2^*
                  \end&#123;align*&#125;$$
                  mit der Eigenschaft, dass
                  $$\begin&#123;align*&#125;
                  \forall x \in \Sigma_1^*: \ x \in L_1 \Leftrightarrow f(x) \in L_2 \ .
                  \end&#123;align*&#125;$$
                </div>
                <Paragraph>
                  Erinnern Sie sich: dass \(f\) Turing-berechenbar ist, heißt, dass es eine Turingmaschine
                  \(_f\) gibt mit einem dezidierten Ausgabe-Band, so dass \(M_f(x)\) für jedes Eingabewort
                  terminiert und zum Zeitpunkt der Terminierung \(f(x)\) auf das Ausgabeband geschrieben hat.
                  Wenn wir eine Reduktion von \(L_1\) nach \(L_2\) haben, dann liefert uns jeder
                  Entscheidungsalgorithmus
                  für \(L_2\) unmittelbar einen Entscheidungsalgorithmus für \(L_1\):
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Beobachtung
                    <NumberedTitle>
                      &ensp;7.8.5{" "}
                    </NumberedTitle>
                  </span>
                  &ensp;Wenn \(f\) eine Reduktion von \(L_1\) nach
                  \(L_2\) ist und \(L_2\) entscheidbar ist, dann ist auch \(L_1\) entscheidbar.
                </div>
                <div class="well container">
                  {" "}{" "}
                  <b>
                    Beweis.
                  </b>
                  Sei \(M_2\) eine Turingmaschine, die \(L_2\) entscheidet und sei \(M_f\) die Turingmaschine,
                  die \(f\) berechnet.
                  Wir bauen nun eine neue Turingmaschine \(M_1\).
                  Sie nimmt das Eingabewort \(x \in \Sigma_1^* \) und lässt die Turingmaschine
                  \(M_f\) auf \(x\) arbeiten; wenn \(M_f\) terminiert, steht \(f(x)\) auf ihrem Ausgabeband.
                  Wir rufen nun die Turing-Maschien \(M_2\) mit dem Eingabewort \(f(x)\) auf.
                  Wenn \(M_2\) akzeptiert (oder eben ablehnt), dann lassen wir \(M_1\) akzeptieren (oder eben
                  ablehnen). Es gilt nun:
                  $$\begin&#123;align*&#125;
                  M_1(x) = \texttt&#123;accept&#125;&amp;\Leftrightarrow M_2(f(x)) = \texttt&#123;accept&#125; \\
                  &amp;\Leftrightarrow f(x) \in L_2 \tag&#123;weil $M_2$ die Sprache $L_2$ entscheidet&#125; \\
                  &amp;\Leftrightarrow x \in L_1 \tag&#123;weil $f$ eine Reduktion ist&#125;
                  \end&#123;align*&#125;$$
                  und somit entscheidet \(M_1\) die Sprache \(L_1\).
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                Stellen Sie sich einfach vor, dass \(M_f\) der Code ist, den Sie selber schreiben müssen,
                und \(M_2\) die "Bibliotheksfunktion" ist, die Sie ohne groß nachzudenken aufrufen,
                weil sie ja bereist von anderen Leuten (hoffentlich korrekt) implementiert worden ist.
                Behauptung 4.6.8 zeigt also, das etwas{" "}
                <i>
                  möglich
                </i>
                {" "}ist.
                In der Berechenbarkeitstheorie und Komplexitätstheorie sind wir eher daran interessiert,
                zu zeigen, was{" "}
                <i>
                  nicht möglich
                </i>
                {" "}ist, und wenden daher häufiger das Kontrapositiv
                der Behauptung an:
                <div class="well container theorem">
                  <span class="numbered-title">
                    Beobachtung
                    <NumberedTitle>
                      &ensp;7.8.6{" "}
                    </NumberedTitle>
                  </span>
                  &ensp;Wenn \(f\) eine Reduktion von \(L_1\) nach
                  \(L_2\) ist und \(L_1\) unentscheidbar ist, dann ist auch \(L_2\) unentscheidbar.
                </div>
                <div class="well container">
                  {" "}{" "}
                  <b>
                    Beweis.
                  </b>
                  Angenommen, \(L_2\) wäre entscheidbar. Dann wäre laut Behauptung 4.6.8 die Sprache
                  \(L_1\) ja auch entscheidbar, was sie aber nach Annahme nicht ist. Daher ist
                  \(L_2\) eben nicht entscheidbar.
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                Beachten Sie nun, dass so etwas wie Behauptung 4.6.9 bereits oben angewandt haben: wir haben
                das Haltproblem auf das MPCP-Problem reduziert; jenes dann auf das PCP; und schließlich PCP
                auf das "Kann ein Palindrom abgeleitet werden"-Problem. Wir haben also eine ganze Kette
                von Reduktionen bereits durchgeführt.
                Für Neulinge ist diese Richtung oft inintuitiv und verwirrend. Dies spiegelt
                sich in der Verwendung des Konjunktivs{" "}
                <i>
                  wäre / wäre
                </i>
                {" "}in Behauptung 4.6.9 wider.
                Auch ist es schlicht ungewohnt, ein{" "}
                <i>
                  altes
                </i>
                {" "}Problem auf ein{" "}
                <i>
                  neues
                </i>
                {" "}zu reduzieren
                statt umgekehrt.
                <figure>
                  <img
                    style="height:15em"
                    src="../img/pcp/reduction.svg"
                    loading="lazy" />
                </figure>
                Üben wir also Reduktionen:
                <div class="well container theorem">
                  <span class="numbered-title">
                    Theorem
                    <NumberedTitle>
                      &ensp;7.8.7{" "}
                    </NumberedTitle>
                  </span>
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      (Schnittproblem kontextfreier Sprachen)
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  Gegeben zwei kontextfreie Grammatiken \(G_1, G_2\). Es ist
                  unentscheidbar, ob \(L(G_1) \cap L(G_2)\) nichtleer ist, ob es
                  also ein Wort \(x\) mit \(x \in G_1\) und \(x \in G_2\) gibt.
                  <Paragraph>
                    Dieses Problem ist als{" "}
                    <i>
                      Schnittproblem kontextfreier Sprachen
                    </i>
                    bekannt.
                  </Paragraph>
                </div>
                <div class="well container">
                  {" "}{" "}
                  <b>
                    Beweis.
                  </b>
                  Wir reduzieren das Palindromwortproblem (bereits bekannt) auf das Schnittproblem (neues
                  Problem).
                  Sei \(G\) eine Grammatik und \(\Sigma\) die Menge der Terminalsymbole. Sei \(G'\) die
                  folgende Grammatik:
                  $$\begin&#123;align*&#125;
                  S'&amp;\rightarrow x S' x \tag&#123; für alle \(x \in \Sigma\) &#125;\\
                  S'&amp;\rightarrow x \tag&#123; für alle \(x \in \Sigma\) &#125;\\
                  S'&amp;\rightarrow \epsilon
                  \end&#123;align*&#125;$$
                  Die Grammatik \(G'\) erzeugt genau die Sprache der Palindromwörter über \(\Sigma\).
                  Unsere Reduktion \(f\) nimmt nun als Eingabe eine kontextfreie Grammatik \(G\) (bzw. deren
                  Codierung) und gibt das Paar \((G,G')\) aus (bzw. deren Codierungen). Wir stellen fest:
                  \(G\) kann ein Palindromwort ableiten genau dann, wenn \(L(G) \cap L(G') \ne \emptyset\),
                  wenn es also ein Wort \(\alpha\) gibt, dass aus \(G\) und aus \(G'\) abgeleitet werden kann.
                  Die Funktion \(f\) ist also eine Reduktion vom Palindromwortproblem auf das Schnittproblem.
                  Mit Behauptung 4.6.9 zusammen heißt das, dass das Schnittproblem unentscheidbar ist.
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Theorem
                    <NumberedTitle>
                      &ensp;7.8.8{" "}
                    </NumberedTitle>
                  </span>
                  {" "}{" "}
                  <b>
                    (Mehrdeutigkeitsproblem kontextfreier Sprachen)
                  </b>
                  Gegeben eine kontextfreie Grammatik \(G\). Es ist unentscheidbar,
                  ob \(G\) mehrdeutig ist, d.h., ob es ein Wort \(x \in \Sigma^*\) gibt,
                  für das zwei verschiedene Ableitungsbäume existieren.
                </div>
                <div
                  style="background-color: rgba(255,0,0,0.1);"
                  class="well container">
                  {" "}{" "}
                  <b>
                    Falscher Beweis.
                  </b>
                  Wir reduzieren das uns bereits bekannte Schnittproblem auf das Mehrdeutigkeitsproblem.
                  Gegeben seien zwei kontextfreie Grammatiken \(G_1, G_2\) mit Startsymbolen \(S_1, S_2\) und
                  Nichtterminalmenge \(N_1, N_2\). Wir machen in einem ersten Schritt die Mengen \(N_1\) und
                  \(N_2\) disjunkt (wenn sie es nicht eh schon sind; wir können beispielsweise jedes \(X \in N_2\)
                  in
                  \(X'\) umbenennen). Dann führen wir ein Super-Startsymbol \(S\) ein und zwei Produktionen:
                  $$\begin&#123;align*&#125;
                  S&amp;\rightarrow S_1 \\
                  S&amp;\rightarrow S_2
                  \end&#123;align*&#125;$$
                  und übernehmen alle Produktionen von \(G_1\) und \(G_2\). Dies ist unsere neue Grammatik \(G\).
                  Sie sehen nun:
                  wenn es ein \(x \in L(G_1) \cap L(G_2)\) gibt, dann kann man \(x\) auf zwei verschiedene
                  Weisen in \(G\) ableiten, nämlich
                  $$\begin&#123;align*&#125;
                  S&amp;\Rightarrow S_1 \Rightarrow^* x \tag&#123;Ableitung wie in $G_1$&#125; \\
                  S&amp;\Rightarrow S_2 \Rightarrow^* x \tag&#123;Ableitung wie in $G_2$&#125; \ ,
                  \end&#123;align*&#125;$$
                  und das sind wirklich zwei verschiedene Ableitungen, weil ja bereits \(S_1 \ne S_2\).
                  Wenn nun umgekehrt ein Wort \(y\) via \(S_1\) und via \(S_2\) ableitbar sein sollte
                  (\(G\) also mehrdeutig sein sollte), dann bedeutet dies, dass \(G_1\) und \(G_2\) beide
                  das Wort \(y\) ableiten können, also einen nichtleeren Schnitt haben.
                  Dies ist somit unsere Reduktion \(f\): nimm als Eingabe das Paar \(G_1, G_2\) (bzw. dessen
                  Codierung),
                  konstruiere \(G\) und gib \(G\) aus. Dieses \(f\) reduziert das Schnittproblem auf das
                  Mehrdeutigkeitsproblem.
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  Haben Sie den Fehler im Beweis erkannt? Das Problem ist, dass es sein könnte, dass
                  \(G_1\) und \(G_2\) leeren Schnitt haben, \(G_1\) aber bereits mehrdeutig ist.
                  Die Ausgabe-Grammatik \(G\) wäre dann auch mehrdeutig; also hätte die Reduktion \(f\)
                  einen Fehler gemacht.
                  Wir müssen leider bis zum Postschen Korrespondenzproblem zurückgehen und direkt von dort
                  reduzieren.
                  Problematisch ist, dass ein PCP-Puzzle selbst mehrere Lösungen haben kann und auch für
                  ein Lösungswort \(\gamma\) es mehrere Möglichkeiten geben kann, es zu "legen", also
                  $$\begin&#123;align*&#125;
                  \top(s)&amp;= \bottom(s) = \gamma \\
                  \top(s')&amp;= \bottom(s') = \gamma \ .
                  \end&#123;align*&#125;$$
                  Wenn dem so wäre, dann würde bereits unsere Reduktion auf das Palindromwortproblem eine
                  mehrdeutige Grammatik erzeugen. Wir gehen einen anderen Weg.
                  Ich folge hier dem Tip in Exercise 5.21 aus
                  Michael Sipsers Buch{" "}
                  <i>
                    Introduction to the Theory of Computation
                  </i>
                  , third edition.
                </Paragraph>
                <div class="well container">
                  {" "}{" "}
                  <b>
                    Beweis.
                  </b>
                  Sei ein PCP-Puzzle \(P = \&#123; (\alpha_1:\beta_1), \dots, (\alpha_n : \beta_n)\&#125;\) gegeben.
                  Wir erstellen nun eine kontextfreie Gramatik, die es dem "User" erlaubt, zu entscheiden,
                  ob er das Wort via die oberen Teile \(\alpha_i\) oder via die unteren Teile ableiten will;
                  wenn es auf beide Weisen geht, dann ist die Grammatik mehrdeutig und das PCP hat eine Lösung.
                  Also:
                  $$\begin&#123;align*&#125;
                  S&amp;\rightarrow S_1 \\
                  S&amp;\rightarrow S_2 \\
                  S_1&amp;\rightarrow \alpha_i S_1 i \ | \ \alpha_i i \tag&#123;für alle oberen Teile \(\alpha_i\)&#125; \\
                  S_2&amp;\rightarrow \beta_i S_2 i \ | \ \beta_i i \tag&#123;für alle unteren Teile \(\beta_i\)&#125;
                  \end&#123;align*&#125;$$
                  wobei \(1, 2, \dots, n\) neue Symbole sind. Die Indizes \(i\) stellen sicher,
                  dass jede von \(S_1\) ausgehende Ableitung eindeutig ist (und genau so von \(S_2\));
                  die einzige Mehrdeutigkeit kann aufkommen, wenn ein Wort sowohl via \(S_1\) als
                  auch via \(S_2\) ableitbar ist; und dies geschieht genau dann, wenn das PCP-Puzzle
                  eine Lösung hat. Wir haben nun also unsere Reduktion von PCP auf das Mehrdeutigkeitsproblem.
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Article;