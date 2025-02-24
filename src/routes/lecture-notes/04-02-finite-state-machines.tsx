import Section from "~/components/Section";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
import NumberedTitle from "~/components/NumberedTitle";
const Article = () => {
  return (
    <Container>
      <Section
        count={22}
        title_gr="Endliche Automaten"
        title_en="finite state machines"
        number={4.2}
        counter="DefCtr"
        counter="ExoCtr"
        path="/lecture-notes22.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="04-01-regular-grammars">
            &lt;&lt; Kapitel 4.1
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="04-03-nfsm">
            Kapitel 4.3 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    4.2 
                    Endliche Automaten
                  </span>
                </h1>
                <Paragraph>
                  Grammatiken erlauben es uns, gewisse Formate zu beschreiben. Das reicht uns aber nicht:
                  wir wollen Daten{" "}
                  <i>
                    parsen
                  </i>
                  , im engen Sinne also eine grammatische Ableitung rekonstruieren
                  und allgemein die Struktur eines gegebenen Wortes herausarbeiten. Ein bescheideneres Ziel
                  ist es, für ein gegebenes Wort zu{" "}
                  <i>
                    entscheiden
                  </i>
                  , ob es sich überhaupt aus einer Grammatik
                  ableiten lässt. Für reguläre Grammatiken gibt es hierfür die{" "}
                  <i>
                    endlichen Automaten
                  </i>
                  . Sie
                  können
                  endliche Automaten verstehen als ein eingeschränktes Modell eines Rechners;
                  oder als Blaupause für einen effizienten Algorithmus, um reguläre Grammatiken zu parsen.
                </Paragraph>
                <Paragraph>
                  Hier sehen Sie ein Beispiel für einen endlichen Automaten über dem Alphabet \(\Sigma =
                  \&#123;x,y,z\&#125;\). Die Idee ist,
                  dass der Automat ein Wort \(\alpha\) Zeichen für Zeichen einliest. Die Pfeile zwischen den
                  Kreisen (den
                  <i>
                    Zuständen
                  </i>
                  {" "}des Automaten) zeigen an, in welchen neuen Zustand beim Lesen eines Zeichen
                  gewechselt werden
                  muss. Der Pfeil "aus dem Nichts", hier der von links nach \(S\), zeigt den{" "}
                  <i>
                    Startzustand
                  </i>
                  an, in welchem
                  der Automat beginnt.
                </Paragraph>
                <figure>
                  <img
                    style="height:13em"
                    src="../img/finite-state-automata/finite-state-machine-example-01.svg"
                    loading="lazy" />
                </figure>
                <Paragraph>
                  Um zu zeigen, wie der Automat ein Eingabewort verarbeitet, nehmen wir das Beispiel \(\alpha =
                  yxzxxyy\).
                </Paragraph>
                <figure class="centered-figure well container">
                  <Carousel>
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-01.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-02.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-03.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-04.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-05.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-06.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-07.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-08.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-09.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-10.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-11.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-12.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-13.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-14.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-15.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-16.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-17.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-18.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-19.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-20.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-21.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-22.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-23.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-24.svg" />
                    <img
                      style="height:18em"
                      src="../img/finite-state-automata/fsa-example-01-25.svg" />
                  </Carousel>
                </figure>
                <Paragraph>
                  In diesem Beispiel endet der Automat im Zustand \(Y\). Sie sehen, dass der Zustand \(X\)
                  mit einem doppelten Rand markiert ist: dies symbolisiert, dass \(X\) ein{" "}
                  <i>
                    akzeptierender
                  </i>
                  Endzustand ist. Wenn der Automat ein Wort \(\alpha\) abgearbeitet hat,{" "}
                  <i>
                    akzeptiert
                  </i>
                  {" "}er
                  es,
                  wenn er in einem akzeptierenden Endzustand gelandet ist; ansonsten{" "}
                  <i>
                    lehnt er es ab
                  </i>
                  . In
                  unserem
                  Beispiel sehen wir also, dass der Automat das Eingabewort \(yxzxxyy\) ablehnt.
                </Paragraph>
                <div class="well container theorem">
                  <span
                    data-label-title="Definition"
                    id="definition-finite-state-machine"
                    class="numbered-title">
                    Definition
                    <NumberedTitle>
                      &ensp;4.2.1{" "}
                    </NumberedTitle>
                  </span>
                  {" "}{" "}
                  <b>
                    (Endlicher Automat, Finite State Machine).
                  </b>
                  Ein endlicher Automat besteht aus einem endlichen Eingabealphaet \(\Sigma\), einer endlichen
                  Menge \(Q\) von Zuständen,
                  einem Startzustand \(\qstart \in Q\), einer Menge \(F \subseteq Q\) von akzeptierenden
                  Endzuständen
                  und einer
                  Zustandsübergangsfunktion
                  $$\begin&#123;align*&#125;
                  \delta : Q \times \Sigma \rightarrow Q \ .
                  \end&#123;align*&#125;$$
                  Formal gesehen ist also ein Automat ein Quintupel \(M = (\Sigma, Q, \qstart, F, \delta)\).
                </div>
                <Paragraph>
                  Die Idee ist, dass der Automat im Zustand \(\qstart\) startet und nun in jedem Schritt ein
                  weiteres
                  Zeichen des Eingabewortes liest. Wenn er im Zustand \(q\) ist und das Zeichen \(x\) liest,
                  so wechselt er in den Zustand \(\delta(q,x)\). Statt \(\delta(q,x) = q'\) verwenden wir die
                  leichter zu lesende Schreibweise
                  $$
                  q \stackrel&#123;x&#125;&#123;\rightarrow&#125; q' \ .
                  $$
                  Wenn das Wort zu Ende ist, dann{" "}
                  <i>
                    akzeptiert
                  </i>
                  der Automat, wenn er in einem akzeptierenden Zustand angekommen ist, also in \(F\).
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Beispiel
                    <NumberedTitle>
                      &ensp;4.2.2{" "}
                    </NumberedTitle>
                  </span>
                  Betrachten wir den endlichen Automaten
                  <figure>
                    <img
                      style="height:10em"
                      src="../img/finite-state-automata/finite-state-machine-example-01.svg"
                      loading="lazy" />
                  </figure>
                  und stellen ihn gemäß
                  <span
                    data-ref="definition-finite-state-machine"
                    class="reference" />
                  als Quintupel \(M = (\Sigma, Q, \qstart, F, \delta)\) dar mit
                  $$\begin&#123;align*&#125;
                  \Sigma&amp;= \&#123;x,y,z\&#125; \\
                  Q&amp;= \&#123;S, X, Y\&#125; \\
                  \qstart&amp;= S \\
                  F&amp;= \&#123;X\&#125; \ .
                  \end&#123;align*&#125;$$
                  <Paragraph>
                    Um noch die Zustandsübergangsfunktion \(\delta\) darzustellen, müssen wir uns überlegen,
                    wie wir Funktionen überhaupt darstellen. Da \(\delta\) eine endliche Funktion ist,
                    können wir einfach alle Eingabewert-Ausgabewert-Paare hinschreiben, am Besten
                    in einer Tabelle, so wie wir es bereits bei Booleschen Funktionen mit
                    Wahrheitstabellen getan haben. \(\delta\) ist also
                  </Paragraph>
                  $$\begin&#123;align*&#125;
                  \begin&#123;array&#125;&#123;cc|c&#125;
                  q&amp;\sigma&amp;\delta(q,x) \\ \hline
                  S&amp;x&amp;X \\
                  S&amp;y&amp;S \\
                  S&amp;z&amp;S \\
                  X&amp;x&amp;X \\
                  X&amp;y&amp;Y \\
                  X&amp;z&amp;S \\
                  Y&amp;x&amp;Y \\
                  Y&amp;y&amp;Y \\
                  Y&amp;z&amp;Y
                  \end&#123;array&#125;
                  \end&#123;align*&#125;$$
                  <Paragraph>
                    Da die Funktion \(\delta\) bei jedem endlichen Automaten genau zwei
                    Eingabeparameter hat, können wir es eventuell übersichtlicher als
                    zweidimensionale Tabelle darstellen:
                  </Paragraph>
                  $$\begin&#123;align*&#125;
                  \begin&#123;array&#125;&#123;c|c|c|c&#125;
                  &amp;x&amp;y&amp;z \\ \hline
                  S&amp;X&amp;S&amp;S \\ \hline
                  X&amp;X&amp;Y&amp;S \\ \hline
                  Y&amp;Y&amp;Y&amp;Y
                  \end&#123;array&#125;
                  \end&#123;align*&#125;$$
                  <Paragraph>
                    Diese zwei Tabellen dienen in diesem Beispiel aber nur dazu, noch einmal
                    zu illustrieren, was ich damit meine, wenn ich sage, dass
                    \(\delta\) eine Funktion von \(Q \times \Sigma\) nach \(Q\) ist. Wenn Sie
                    selbst an endlichen Automaten rumbasteln, empfehle ich Ihnen,
                    die Funktion \(\delta\) graphisch mit Kreisen und Pfeilen darzustellen,
                    so wie wir es oben getan haben:
                  </Paragraph>
                  <figure>
                    <img
                      style="height:10em"
                      src="../img/finite-state-automata/finite-state-machine-example-01.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    Das ist eine völlig legitime Notation für eine Funktion \(\delta: Q \times \Sigma \rightarrow
                    Q\)
                    und genau so formal wie die Tabellenschreibweise.
                  </Paragraph>
                </div>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Definition
                    <NumberedTitle>
                      &ensp;4.2.3{" "}
                    </NumberedTitle>
                  </span>
                  {" "}{" "}
                  <b>
                    (Erweiterte Zuständsübergangsfunktion)
                  </b>
                  .
                  Für einen endlichen Automaten \((\Sigma, Q, \qstart, F, \delta)\) definieren wir
                  die{" "}
                  <i>
                    erweiterte Zustandsübergangsfunktion
                  </i>
                  {" "}\(\hat&#123;\delta&#125;: Q \times \Sigma^* \rightarrow
                  Q\) rekursiv wie folgt:
                  $$\begin&#123;align*&#125;
                  \hat&#123;\delta&#125; (q, \epsilon)&amp;= q \\
                  \hat&#123;\delta&#125; (q, x\alpha)&amp;= \hat&#123;\delta&#125; (\delta(x), \alpha) \ .
                  \end&#123;align*&#125;$$
                  \(\hat&#123;\delta&#125; (q, \alpha) = q'\) heißt also, dass der Automat, wenn er sich im Zustand \(q\)
                  befindet
                  und das Wort \(\alpha\) abarbeitet, er danach im Zustand \(q'\) landet. Wir schreiben auch
                  kompakt
                  $$
                  q \stackrel&#123;\alpha&#125;&#123;\rightarrow&#125; q' \ .
                  $$
                </div>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Definition
                    <NumberedTitle>
                      &ensp;4.2.4{" "}
                    </NumberedTitle>
                  </span>
                  {" "}{" "}
                  <b>
                    (Akzeptierte Sprache).
                  </b>
                  Sei \(M = (\Sigma, Q, \qstart, F, \delta)\) ein endlicher Automat. Die von \(M\) akzeptierte
                  Sprache
                  ist
                  $$\begin&#123;align*&#125;
                  L(M) := \&#123; \alpha \in \Sigma \ | \ \hat&#123;\delta&#125;(\qstart, \alpha) \in F \&#125; \ .
                  \end&#123;align*&#125;$$
                </div>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Beispiel
                    <NumberedTitle>
                      &ensp;4.2.5{" "}
                    </NumberedTitle>
                  </span>
                  Der endliche Automat, den wir oben bereits eingeführt haben:
                  <figure>
                    <img
                      style="height:10em"
                      src="../img/finite-state-automata/finite-state-machine-example-01.svg"
                      loading="lazy" />
                  </figure>
                  akzeptiert die Sprache aller \(\alpha \in \&#123;x,y,z\&#125;\), die auf \(x\) enden und nicht die
                  Buchstabenfolge \(xy\) enthalten.
                </div>
                <div class="well well-lg numbered-exercise container">
                  <span class="numbered-title">
                    Übungsaufgabe
                    <NumberedTitle>
                      &ensp;4.2.1{" "}
                    </NumberedTitle>
                  </span>
                  Ändern Sie den Automaten aus dem letzten Beispiel so ab, dass die Bedingung{" "}
                  <i>
                    "die auf \(x\)
                    enden"
                  </i>
                  {" "}entfällt, er also
                  alle Wörter akzeptiert, die die Folge \(xy\) nicht enthalten.
                </div>
                <div class="well well-lg numbered-exercise container">
                  <span class="numbered-title">
                    Übungsaufgabe
                    <NumberedTitle>
                      &ensp;4.2.2{" "}
                    </NumberedTitle>
                  </span>
                  Zeichnen Sie einen Automaten für die Sprache aller Wörter über \(\&#123;a,b,c,d\&#125;\), die
                  die Folge \(a,b,c,d\) enthalten.
                </div>
                <div class="well well-lg numbered-exercise container">
                  <span class="numbered-title">
                    Übungsaufgabe
                    <NumberedTitle>
                      &ensp;4.2.3{" "}
                    </NumberedTitle>
                  </span>
                  Zeichnen Sie einen Automaten für die Sprache aller Wörter über \(\&#123;a,b,c,d\&#125;\), die
                  genau vier \(a\) enthalten.
                </div>
                <h2>
                  Endliche Automaten zu regulären Grammatiken
                </h2>
                Wenn wir einen endlichen Automaten gegeben haben, dann können wir leicht eine entsprechende reguläre
                Grammatik
                dazu bauen, indem wir alle Pfeile einfach in Produktionen übersetzen. Für den Automaten
                <figure>
                  <img
                    style="height:10em"
                    src="../img/finite-state-automata/finite-state-machine-example-01.svg"
                    loading="lazy" />
                </figure>
                würde dies beispielsweise die folgenden Produktionen ergeben:
                $$\begin&#123;align*&#125;
                S&amp;\rightarrow y S \ | \ zS \ | \ x X \\
                X&amp;\rightarrow x X \ | \ z S \ | \ y Y \\
                Y&amp;\rightarrow x Y \ | \ y Y \ | \ z Y \\
                \end&#123;align*&#125;$$
                und, weil \(X\) ein akzeptierender Zustand ist,
                $$\begin&#123;align*&#125;
                X&amp;\rightarrow \epsilon
                \end&#123;align*&#125;$$
                Dies geht ganz allgemein:
                <div
                  id="theorem-fsm-regular"
                  class="well container theorem">
                  <span class="numbered-title">
                    Theorem
                    <NumberedTitle>
                      &ensp;4.2.6{" "}
                    </NumberedTitle>
                  </span>
                  Sei \(M = (\Sigma, Q, \qstart, F, \delta)\) ein endlicher Automat. Dann gibt es eine reguläre
                  Grammatik
                  \(G = (\Sigma, N, P, S)\) mit \(L(G) = L(M)\).
                </div>
                <Paragraph>
                  Wir nehmen dies als Anlass, um mal wieder einen Induktionsbeweis im Detail durchzuführen.
                </Paragraph>
                <div class="well container">
                  {" "}{" "}
                  <b>
                    Beweis.
                  </b>
                  Wir setzen \(N = Q\) und \(S = \qstart\) und führen für jeden Zustandsübergang, der von
                  \(\delta\) beschrieben wird, eine Ableitungsregel ein:
                  $$\begin&#123;align*&#125;
                  q_1 \stackrel&#123;x&#125;&#123;\rightarrow&#125; q_2&amp;\quad \textnormal&#123; wird zur Produktion &#125; \quad
                  q_1 \rightarrow xq_2
                  \end&#123;align*&#125;$$
                  Hiermit erhalten wir eine "Zwischengrammatik" \(G'\). Die endgültige Grammatik \(G\) erhalten
                  wir,
                  indem wir für jeden akzeptierenden Zustand \(q \in N\) die Produktion
                  $$\begin&#123;align*&#125;
                  q \rightarrow \epsilon
                  \end&#123;align*&#125;$$
                  einführen. Wir zeigen nun per Induktion:
                  <div class="well subtheorem theorem">
                    <span class="numbered-title">
                      Behauptung
                      <NumberedTitle>
                        &ensp;4.2.7{" "}
                      </NumberedTitle>
                    </span>
                    Sei \(\alpha \in \Sigma^*\) und \(q, q' \in Q\). Dann gilt
                    \(q \stackrel&#123;\alpha&#125;&#123;\rightarrow&#125; q'\) genau dann,
                    wenn \(q \Rightarrow^* \alpha q'\) in Grammatik \(G'\) gilt.
                  </div>
                  <Paragraph>
                    Bevor wir diese Behauptung beweisen, achten Sie auf die Bedeutung der Symbole. Der
                    einfache Pfeil in \(q \stackrel&#123;\alpha&#125;&#123;\rightarrow&#125; q'\) beschreibt die Arbeitsweise des
                    endlichen Automaten, dass nämlich
                    das Verarbeiten von \(\alpha\) den Automaten vom Zustand \(q\) in den Zustand \(q'\) führt.
                    Der doppelte Pfeil in \(q \Rightarrow^* \alpha q'\) sagt aus, dass aus dem
                    Nichtterminalsymbol
                    \(q\) in der Grammatik
                    \(G\) in möglicherweise mehreren Schritten die Wortform \(\alpha q'\) abgeleitet werden
                    kann.
                    Der Pfeil \(\rightarrow\) "lebt" also im Automaten \(M\), der Pfeil \(\Rightarrow^*\) lebt
                    in
                    der Grammatik \(G'\).
                  </Paragraph>
                  <div class="well subtheorem">
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    Wir verwenden Induktion über die Länge des Wortes \(\alpha\).
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Induktionsbasis.
                      </b>
                      {" "}Wenn \(\alpha = \epsilon\) gilt, also \(\alpha\) die
                      Länge 0 hat, dann
                      gilt \(q \stackrel&#123;\epsilon&#125;&#123;\rightarrow&#125; q'\) genau dann, wenn \(q = q'\) ist. Wie kann
                      nun
                      \(q \Rightarrow^* \epsilon q'\) in \(G'\) gelten? Beachten Sie, dass jede Produktion in
                      \(G'\) ein Terminalsymbol
                      erzeugt; \(q \Rightarrow^* \epsilon q'\) kann also nur gelten, wenn{" "}
                      <i>
                        keine
                      </i>
                      Produktion erfolgt ist und somit
                      \(q = q'\) gilt. Wir sehen: beide Aussagen sind äquivalent zu \(q = q'\) und somit auch
                      äquivalent zueinander.
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Induktionsschritt
                      </b>
                      . Wenn \(\alpha\) die Länge \(n+1\) hat, so schreiben
                      wir \(\alpha = x \beta\)
                      für ein Wort \(\beta \in \Sigma^*\) der Länge \(n\). Per Induktionshypothese können wir
                      nun davon ausgehen, dass für alle
                      \(q_1, q_2 \in Q\) die Aussage \(q_1 \stackrel&#123;\beta&#125;&#123;\rightarrow&#125; q_2\) genau dann
                      gilt,
                      wenn \(q_1 \Rightarrow^* \beta q_2\) gilt.
                      Unser Ziel ist es, zu zeigen, dass die beiden folgenden Aussagen äquivalent sind:
                      <ol>
                        <li>
                          \(q \stackrel&#123;x \beta&#125;&#123;\rightarrow&#125; q'\) im endlichen Automaten \(M\),
                        </li>
                        <li>
                          \(q \Rightarrow^* x \beta q'\) in der Grammatik \(G'\).
                        </li>
                      </ol>
                      Wir müssen beide Richtungen zeigen, also zeigen, dass aus Aussage (1) die Aussage (2) folgt
                      und umgekehrt.
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Aus (1) folgt (2).
                      </b>
                      {" "}Nehmen wir also an, dass
                      \(q \stackrel&#123;x \beta&#125;&#123;\rightarrow&#125; q'\) gilt und bezeichnen
                      \(q_1 := \delta(q,x)\). Es gilt also
                      $$
                      q \stackrel&#123;x&#125;&#123;\rightarrow&#125; q_1 \stackrel&#123;\beta&#125;&#123;\rightarrow&#125; q'
                      $$
                      Der erste Teil, also \(q \stackrel&#123;x&#125;&#123;\rightarrow&#125; q_1\), bedeutet, dass wir in \(G'\)
                      die Produktion
                      \(q \rightarrow xq_1\) eingeführt haben.
                      Auf den zweiten Teil, also \(q_1 \stackrel&#123;\beta&#125;&#123;\rightarrow&#125; q'\), können
                      wir die Induktionshypothese anwenden und schließen, dass
                      \(q_1 \Rightarrow^* \beta q'\) gilt. Nun können wir mit dem Nichtterminal \(q\)
                      beginnen,
                      die Produktion \(q \rightarrow x q_1\) anwenden und dann mit \(q_1\) fortfahrend die
                      Wortform
                      \(\beta q'\) ableiten, also
                      $$
                      q \Rightarrow x q_1 \Rightarrow^* x \beta q' \ .
                      $$
                      Dies zeigt die erste Richtung.
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Aus (2) folgt (1).
                      </b>
                      Nun nehmen wir an, dass \(q \Rightarrow^* x \beta q'\) gilt. Untersuchen wir die erste
                      Produktion, die in dieser
                      Ableitung verwendet worden ist. Alle Produktionen in \(G'\) erzeugen ein Terminalsymbol,
                      also muss es eine
                      Produktion der Form
                      $$
                      q \rightarrow x q_1
                      $$
                      gewesen sein. Die Ableitung hat also die Form
                      $$\begin&#123;align*&#125;
                      q \Rightarrow x q_1 \Rightarrow^* x \beta q' \ ,
                      \end&#123;align*&#125;$$
                      wir können also aus \(q_1\) die Wortform \(\beta q'\) ableiten: \(q_1 \Rightarrow^*
                      \beta q'\). Auf diese
                      Erkenntnis wenden wir die Induktionshypothese an und schließen, dass
                      $$
                      q_1 \stackrel&#123;\beta&#125;&#123;\rightarrow&#125; q'
                      $$
                      gilt. Die Produktionsregel \(q \rightarrow x q_1 \) kann nur in \(G'\) eingeführt worden
                      sein, weil
                      \(\delta(q,x) = q_1\), also \(q \stackrel&#123;x&#125;&#123;\rightarrow&#125; q_1\). Somit sehen wir, dass
                      $$
                      q \stackrel&#123;x&#125;&#123;\rightarrow&#125; q_1 \stackrel&#123;\beta&#125;&#123;\rightarrow&#125; q'
                      $$
                      gilt, also zusammengenommen \(q \stackrel&#123;x\beta&#125;&#123;\rightarrow&#125; q'\). Dies zeigt die
                      zweite Richtung.
                    </Paragraph>
                    Hiermit endet der Induktionsbeweis.
                    <span class="qed">
                      \(\square\)
                    </span>
                  </div>
                  <Paragraph>
                    Wir haben nun die Behauptung bewiesen. Als nächstens betrachten wir die Grammatik \(G\) und
                    behaupten,
                    dass \(L(G) = L(M)\) gilt. Sei \(\alpha \in \Sigma\), dann behaupten wir also, dass wir
                    folgenden
                    zwei Aussagen äquivalent sind:
                  </Paragraph>
                  <ol>
                    <li>
                      \(\qstart \stackrel&#123;\alpha&#125;&#123;\rightarrow&#125; q'\) für einen Zustand \(q' \in F\),
                    </li>
                    <li>
                      \(\qstart \Rightarrow^* \alpha\) in Grammatik \(G\).
                    </li>
                  </ol>
                  <Paragraph>
                    Wenn nun also \(\qstart \stackrel&#123;\alpha&#125;&#123;\rightarrow&#125; q'\) gilt und \(q' \in F\), dann
                    wissen wir von der obigen Behauptung, dass es in \(G'\) die Ableitung
                    \(\qstart \Rightarrow^* \alpha q'\) gibt. Da \(q' \in F\) ist, enthält \(G\) die
                    Produktion \(q' \rightarrow \epsilon\), und somit können wir in \(G\) die Ableitung
                    \(\qstart \Rightarrow^* \alpha q' \Rightarrow \alpha\) machen.
                  </Paragraph>
                  <Paragraph>
                    In der anderen Richtung, wenn \(\qstart \Rightarrow^* \alpha\) in Grammatik \(G\) gilt, dann
                    betrachten wir den letzten Ableitungsschritt. Da \(\alpha\) keine Nichtterminalsymbole
                    enthält, muss im letzten Ableitungsschritt ein Nichtterminalsymbol
                    verschwunden sein. Die einzigen Produktionen in \(G\) bei denen das Nichtterminal
                    verschwindet,
                    sind von der Form \(q' \rightarrow \epsilon\), wenn \(q'\) im Automaten \(M\) ein
                    akzeptierender Endzustand ist.
                    Sei nun also \(q' \rightarrow \epsilon\) die Produktion, die im letzten Ableitungsschritt
                    angewendet worden ist.
                    Es gilt also
                    \(\qstart \Rightarrow^* \alpha q' \Rightarrow \alpha\). Beachten Sie nun weiter, dass
                    all jene Produktionen, die in \(G\) aber nicht in \(G'\) sind, die Form \(q' \rightarrow
                    \epsilon\) haben,
                    also das Nichtterminalsymbol verschwinden lassen; es kann in einer Ableitung also nur eine
                    solche Produktion angewandt
                    worden sein, und das ganz zum Schluss. Das heißt: die Ableitung
                    \(\qstart \Rightarrow^* \alpha q'\) verwendet ausschließlich \(G'\)-Produktionen. Somit
                    können
                    wir die oben gezeigte Behauptung anwenden
                    und folgern, dass
                    $$
                    \qstart \stackrel&#123;\alpha&#125;&#123;\rightarrow&#125; q'
                    $$
                    gilt. Dies ist genau Punkt 1, den wir zeigen wollten.
                    <span class="qed">
                      \(\square\)
                    </span>
                  </Paragraph>
                </div>
                <Paragraph>
                  Beachten Sie, dass dieser Beweis eigentlich gar nicht so schwierig ist, wie er hier aussieht.
                  Ich habe
                  ihn absichtlich sehr formal und ausführlich geschrieben, um Ihnen das Prinzip des
                  Induktionsbeweises ins
                  Gedächtnis zu rufen.
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <span class="numbered-title">
                    Übungsaufgabe
                    <NumberedTitle>
                      &ensp;4.2.4{" "}
                    </NumberedTitle>
                  </span>
                  Schreiben Sie zu folgendem Automaten über dem Alphabet \(\Sigma = \&#123;0,1,2,3,4,5,6,7,8,9\&#125;\) eine
                  äquivalente reguläre Grammatik:
                  <figure>
                    <img
                      style="height:13em"
                      src="../img/finite-state-automata/finite-state-machine-example-02.svg"
                      loading="lazy" />
                  </figure>
                  und beschreiben Sie die Sprache in eigenen Worten.
                </div>
                <h2>
                  Reguläre Grammatiken zu endlichen Automaten?
                </h2>
                <Paragraph>
                  Im letzten Abschnitt haben wir gesehen, wie wir zu einem gegebenen endlichen Automaten recht
                  einfach eine äquivalente
                  reguläre Grammatik schreibne können. Es drängt sich die Frage auf: geht das auch umgekehrt?
                  Versuchen wir es.
                  Zu jedem "Grammatik-Pfeil" \(X \rightarrow aY\) bauen wir uns einen "Automaten-Pfeil" \(X
                  \stackrel&#123;a&#125;&#123;\rightarrow&#125; Y\).
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Beispiel
                    <NumberedTitle>
                      &ensp;4.2.8{" "}
                    </NumberedTitle>
                  </span>
                  Betrachten wir die{" "}
                  <a href="./04-01-regular-grammars#example-aaabb">
                    &ensp;reguläre Grammatik aus
                    dem vorherigen Kapitel 4.1{" "}
                  </a>
                  :
                  $$\begin&#123;align*&#125;
                  S&amp;\rightarrow \epsilon \ |\ a S \ | \ b T \\
                  T&amp;\rightarrow \epsilon \ | \ b T \ .
                  \end&#123;align*&#125;$$
                  <Paragraph>
                    Versuchen wir, daraus einen endlichen Automaten zu bauen. Als Zustandsmenge nehmen wir die
                    Menge nichtterminaler Symbole \(\&#123;S,T\&#125;\), als
                    Startzustand das Startsymbol \(S\). Zustandsübergänge ergeben sich aus den
                    Produktionsregeln, wobei wir für Produktionen der Form
                    \(A \rightarrow \epsilon\) den Zustand \(A\) zu einem Endzustand machen. Also:
                  </Paragraph>
                  <figure>
                    <img
                      style="height:11em"
                      src="../img/finite-state-automata/finite-state-machine-example-03.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    Wie Sie sehen, ist das nicht ganz korrekt. Als erstes fällt ins Auge, dass alle Zustände
                    akzeptierende Endzustände sind.
                    Als zweites fällt uns auf, dass es bei \(T\) für das Eingabesymbol \(a\) keinen ausgehenden
                    Pfeil gibt. Der
                    Funktionswert \(\delta(T,a)\) ist also undefiniert. Der Grund hierfür ist, dass, wenn erst
                    mal ein \(b\) vorgekommen ist,
                    eben kein \(a\) mehr vorkommen darf. Die Definition eines endlichen Automaten
                    verlangt aber, dass \(\delta\) eine Funktion ist, also für alle Eingabewerte definiert ist.
                    Wir lösen das, indem wir einen sogenannten{" "}
                    <i>
                      Fehlerzustand (Trap State)
                    </i>
                    {" "}einführen,
                    der im Prinzip
                    den Zustand
                    <i>
                      lehne das Wort ab, egal, was noch kommt
                    </i>
                    {" "}versinnbildlicht:
                    <figure>
                      <img
                        style="height:12em"
                        src="../img/finite-state-automata/finite-state-machine-example-04.svg"
                        loading="lazy" />
                    </figure>
                    Dies ist nun unser endlicher Automat \(M\) mit \(L(M) = L(G)\).
                  </Paragraph>
                </div>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Beispiel
                    <NumberedTitle>
                      &ensp;4.2.9{" "}
                    </NumberedTitle>
                  </span>
                  Betrachten wir die{" "}
                  <a href="./04-01-regular-grammars#example-xxx1yyy">
                    &ensp;reguläre Grammatik
                    aus
                    dem vorherigen Kapitel 4.1{" "}
                  </a>
                  :
                  $$\begin&#123;align*&#125;
                  A&amp;\rightarrow 0 A \ | 1 A \ | 1 B \\
                  B&amp;\rightarrow 0 C \ | 1 C \\
                  C&amp;\rightarrow 0 D \ | 1 D \\
                  D&amp;\rightarrow 0 E \ | 1 E \\
                  E&amp;\rightarrow \epsilon \
                  \end&#123;align*&#125;$$
                  Wobei wir aus dem vorherigen Beispiel lernen und einen Fehlerzustand einführen:
                  <figure>
                    <img
                      style="height:7em"
                      src="../img/finite-state-automata/finite-state-machine-example-05.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    Leider ist diese Lösung auch nicht korrekt: jetzt gibt es zu viele Pfeile! Aus dem Zustand
                    \(A\) gehen zwei
                    Pfeile mit \(1\) beschriftet hinaus. Wenn wir uns vor Augen halten, was die von \(G\)
                    erzeugte Sprache ist, so
                    wird das Problem klarer: \(G\) erzeugt die Sprache aller Wörter über \(\&#123;0,1\&#125;\), deren
                    <i>
                      viertletztes
                    </i>
                    {" "}Zeichen
                    eine 1 ist. Die Herausforderung ist nun: wenn der Automat eine 1 liest, dann weiß er nicht,
                    ob das jetzt schon
                    das viertletzte Zeichen ist oder nicht; er weiß also nicht, ob er im Zustand \(A\) bleiben
                    soll oder weiter
                    zum Zustand \(B\) gehen soll.
                  </Paragraph>
                </div>
                <Paragraph>
                  Um mit Fällen wie dem eben geschilderten umgehen zu können, erweitern wir die Definition des
                  endlichen Automaten
                  in nächsten Kapitel zu einem{" "}
                  <i>
                    nichtdeterministischen
                  </i>
                  {" "}endlichen Automaten.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Article;