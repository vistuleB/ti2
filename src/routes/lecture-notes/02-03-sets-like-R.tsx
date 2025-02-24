import Section from "~/components/Section";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
import NumberedTitle from "~/components/NumberedTitle";
const Article = () => {
  return (
    <Container>
      <Section
        count={11}
        title_gr="Mengen, die so groß wie $\R$ sind"
        title_en="sets like R"
        number={2.3}
        counter="DefCtr"
        counter="ExoCtr"
        path="/lecture-notes11.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="02-02-examples-of-equipotent-sets">
            &lt;&lt; Kapitel 2.2
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="02-04-diagonalization">
            Kapitel 2.4 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    2.3 
                    Mengen, die so groß wie \(\R\) sind
                  </span>
                </h1>
                <Paragraph>
                  Im letzten Kapitel haben wir viele Mengen kennengelernt, die abzählbar
                  unendlich sind, also gleichmächtig mit \(\N\). Hier werden wir nun
                  erkunden, welche Mengen gleichmächtig mit \(\R\) sind. In der
                  mathematischen Fachsprache sagt man: sie haben die
                  <i>
                    Kardinalität des Kontinuums
                  </i>
                  . Das Wort
                  <i>
                    Kardinalität
                  </i>
                  {" "}steht hier für
                  <i>
                    Anzahl der Elemente
                  </i>
                  {" "}(bzw. den Größenbegriff bei unendlichen
                  Mengen), und{" "}
                  <i>
                    Kontinuum
                  </i>
                  {" "}steht für{" "}
                  <i>
                    die reellen Zahlen
                  </i>
                  .
                  Im nächsten Kapitel werden wir zeigen, dass es "echt mehr" reelle
                  Zahlen gibt als natürliche; dass also \(\R\) nicht abzählbar ist. Aber
                  eins nach dem anderen.
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Beobachtung
                      <NumberedTitle>
                        &ensp;2.3.1{" "}
                      </NumberedTitle>
                    </span>
                    &ensp;Es gilt \(\R \approx
                    (0,1)\), wobei \((0,1)\) das offene Einheitsintervall ist.
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    Wir können eine Bijektion explizit hinschreiben:
                  </Paragraph>
                  $$\begin&#123;align*&#125; f : \R&amp;\rightarrow (0,1) \\ x&amp;\mapsto
                  \frac&#123;e^x&#125;&#123;e^x + 1&#125; \end&#123;align*&#125;$$
                  <Paragraph>
                    Mit etwas reeller Analysis kann man nun zeigen:
                  </Paragraph>
                  <ul>
                    <li>
                      \(f\) ist stetig.
                    </li>
                    <li>
                      \(f\) ist streng monoton (z.B. weil \(f'(x) \gt 0\) gilt).
                    </li>
                    <li>
                      \(\lim_&#123;x \rightarrow -\infty&#125; f(x) = 0\) und \(\lim_&#123;x \rightarrow
                      \infty&#125; f(x) = 1\).
                    </li>
                  </ul>
                  <Paragraph>
                    Und somit ist \(f\) eine Bijektion von \(\R\) auf den Wertebereich von
                    \(f\), also \((0,1)\).
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                      <NumberedTitle>
                        &ensp;2.3.1{" "}
                      </NumberedTitle>
                    </span>
                    Zeigen Sie \(\R \approx \R^+\).
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                      <NumberedTitle>
                        &ensp;2.3.2{" "}
                      </NumberedTitle>
                    </span>
                    Zeigen Sie, dass \(\R_0^+ \approx \R^+\) gilt. Sie müssen "die 0
                    verschwinden lassen".
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span
                      id="exercise-open-closed-half-open"
                      class="numbered-title">
                      Übungsaufgabe
                      <NumberedTitle>
                        &ensp;2.3.3{" "}
                      </NumberedTitle>
                    </span>
                    Zeigen Sie, dass \([0,1]\), \([0,1)\), \((0,1]\) und \((0,1)\) alle
                    gleichmächtig sind.
                  </Paragraph>
                </div>
                <Paragraph>
                  Wir führen nun eine neue Notation ein: \(\&#123;0,1\&#125;^&#123;\N&#125;\) ist die Menge
                  aller unendlichen Folgen von \(0\) und \(1\). Formal gesehen bezeichnet
                  man für zwei Mengen \(A\) und \(B\) mit der Notation \(A^B\) die Menge aller
                  Funktionen \(\phi : B \rightarrow A\). Ein Element aus \(\&#123;0,1\&#125;^&#123;\N&#125;\)
                  wäre demnach eien Funktion \(\phi : \N \rightarrow \&#123;0,1\&#125;\). Diese
                  Objekte entsprechen genau den unendlichen \(0/1\)-Folgen, nämlich
                  \(\phi(0)\phi(1)\phi(2)\phi(3)\dots\). Der Unterschied ist rein
                  syntaktisch. Es ist allerdings bequemer, sich ein \(\phi \in
                  \&#123;0,1\&#125;^&#123;\N&#125;\) als unendliche \(0/1\)-Folge vorzustellen.
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span
                      id="theorem-R-bitstrings"
                      class="numbered-title">
                      Theorem
                      <NumberedTitle>
                        &ensp;2.3.2{" "}
                      </NumberedTitle>
                    </span>
                    \(\R \approx \&#123;0,1\&#125;^&#123;\N&#125;\).
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    Die Beweisidee ist einfach, allerdings gehen erst einmal ein paar
                    Dinge schief, die man wieder flicken muss. Da laut
                    <span
                      data-ref="exercise-open-closed-half-open"
                      class="reference" />
                    \(\R \approx [0,1)\) gilt, reicht es, eine Bijektion \(f : [0,1)
                    \rightarrow \&#123;0,1\&#125;^&#123;\N&#125;\) zu konstruieren. So geht's:
                  </Paragraph>
                  <Paragraph>
                    Jede Zahl \(0 \leq x \lt 1\) lässt sich als (unendliche) Binärzahl
                    \((x)_2\) schreiben, beispielsweise
                  </Paragraph>
                  $$\begin&#123;align*&#125; \pfrac&#123;1&#125;&#123;3&#125;_2 = 0.01010101\dots \end&#123;align*&#125;$$
                  <Paragraph>
                    Wir erhalten nun unsere unendliche \(0/1\)-Folge, indem wir die
                    führende Null und den Punkt abschneiden: \(f(1/3) = 010101\dots\). Das
                    geht für jede Zahl in \([0,1)\): \(f(1/2) = 100000\dots\), \(f(1/4) =
                    010000\dots\).
                  </Paragraph>
                  <Paragraph>
                    Die konstruierte Funktion \(f\) ist injektiv: zwei verschiedene \(0
                    \leq x \lt y \lt 1\) haben verschiedene Binärdarstellung und werden
                    somit zu zwie verschiedenen \(0/1\)-Folgen. Leider ist sie nicht
                    surjektiv: die Binärdarstellung einer reellen Zahl hört nie mit
                    \(11111\dots\) auf. Statt \(0.001111111\dots\) würden wir einfach
                    \(0.0100000\dots\) schreiben. Das entspricht dem Phänomen in der
                    Dezimalschreibweise, dass \(0.99999999\dots\) und \(1.000000\dots\) die
                    gleiche Zahl repräsentieren. Die "kanonische" Repräsentierung ist
                    allerdings immer die mit einem unendlichen Schweif an Nullen, nie
                    mit Neunen (oder in Binär: Einsen). Definieren wir also \(X\), die
                    Menge aller \(0/1\)-Folgen mit einem unendlichen Schweif an Einsen:
                  </Paragraph>
                  $$\begin&#123;align*&#125; X := \&#123; a_1 a_2 a_3 \dots \in \&#123;0,1\&#125;^&#123;\N&#125; \ | \
                  \exists\ n \geq 1: a_i = 1 \ \forall i \geq n\&#125; \end&#123;align*&#125;$$
                  <Paragraph>
                    Unsere Funktion \(f\) ist eine Bijektion von \([0,1)\) nach
                    \(\&#123;0,1\&#125;^&#123;\N&#125; \setminus X\). Um daraus eine Bijektion \(g : [0,1)
                    \rightarrow \&#123;0,1\&#125;^&#123;\N&#125;\) zu bauen, müssen wir die Lücken füllen,
                    die \(f\) lässt - also \(X\).
                  </Paragraph>
                  <div class="well well-lg numbered-exercise container-fluid">
                    <Paragraph>
                      <span class="numbered-title">
                        Übungsaufgabe
                        <NumberedTitle>
                          &ensp;2.3.4{" "}
                        </NumberedTitle>
                      </span>
                      Sei \(Y := \&#123; a_1 a_2 a_3 \dots \in \&#123;0,1\&#125;^&#123;\N&#125; \ | \ \exists\ n
                      \geq 1: a_i = 0 \ \forall i \geq n\&#125;\) die Menge aller \(0/1\)-Folgen
                      mit einem unendlichen Schweif von Nullen. Offensichtlich gilt \(X
                      \approx Y\).
                    </Paragraph>
                    <Paragraph>
                      Zeigen Sie, dass \(Y \approx X \cup Y\) gilt.
                    </Paragraph>
                  </div>
                  <div class="well well-lg numbered-exercise container-fluid">
                    <Paragraph>
                      <span class="numbered-title">
                        Übungsaufgabe
                        <NumberedTitle>
                          &ensp;2.3.5{" "}
                        </NumberedTitle>
                      </span>
                      Verwenden Sie die vorherige Übungsaufgabe, um \(Y\) zu verdoppeln
                      und somit eine Bijektion von \([0,1) \rightarrow \&#123;0,1\&#125;^&#123;\N&#125;\) zu
                      konstruieren. Vielleicht hilft Ihnen folgendes Bild:
                    </Paragraph>
                    <figure>
                      <img
                        style="width: 80%"
                        src="../img/infinite-sets/interval-sequences-fill-the-gaps.svg" />
                    </figure>
                  </div>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  Als nächstes zeigen wir, dass \(\R \approx \R^2\) gilt. Dies ist schon
                  erstaunlich: der Zahlenstrahl und die zweidimensionale Ebene sollen
                  also gleichviele Elemente haben!
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span
                      id="theorem-square-interval"
                      class="numbered-title">
                      Theorem
                      <NumberedTitle>
                        &ensp;2.3.3{" "}
                      </NumberedTitle>
                    </span>
                    Es gilt \(\R^2 \approx \R\).
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    {" "}Mithilfe von
                    <span
                      data-ref="theorem-R-bitstrings"
                      class="reference" />
                    &ensp;geht
                    das ganz einfach. Da \(\R \approx \&#123;0,1\&#125;^\N\) gilt, reicht es
                    nämlich, eine Bijektion \(\&#123;0,1\&#125;^\N \times \&#123;0,1\&#125;^\N \rightarrow
                    \&#123;0,1\&#125;^\N\) zu konstruieren. Ein Element von \(\&#123;0,1\&#125;^\N \times
                    \&#123;0,1\&#125;^\N\) besteht aus zwei unendlichen \(0/1\)-Folgen:
                  </Paragraph>
                  $$\begin&#123;align*&#125; (a,b) = (a_1 a_2 a_3 \dots, b_1 b_2 b_3 \dots) \ .
                  \end&#123;align*&#125;$$
                  <Paragraph>
                    Wir müssen dieses Folgenpaar nun in{" "}
                    <i>
                      eine
                    </i>
                    {" "}Folge codieren.
                    Ganz klar:
                  </Paragraph>
                  $$\begin&#123;align*&#125; (a_1 a_2 a_3 \dots, b_1 b_2 b_3 \dots) \mapsto (a_1 b_1
                  a_2 b_2 a_3 b_3 \dots) \end&#123;align*&#125;$$ Dies ist die gewünschte Bijektion
                  \(\&#123;0,1\&#125;^\N \times \&#123;0,1\&#125;^\N \rightarrow \&#123;0,1\&#125;^\N\) .
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  Aus der Funktion \(f: \&#123;0,1\&#125;^&#123;\N&#125; \times \&#123;0,1\&#125;^&#123;\N&#125; \mapsto
                  \&#123;0,1\&#125;^&#123;\N&#125;\) aus
                  <span
                    data-ref="theorem-square-interval"
                    class="reference" />
                  können wir eine (fast) bijektive Funktion \([0,1) \times [0,1)
                  \rightarrow [0,1)\) bauen. Wir nehmen zwei Zahlen \(0 \leq x,y \lt 1\),
                  schreiben sie in Binärdarstellung und vereinigen sie dann per
                  Reißverschlussverfahren zu einer Zahl, z.B.
                </Paragraph>
                $$\begin&#123;align*&#125; \left(\frac&#123;1&#125;&#123;3&#125;, \frac&#123;1&#125;&#123;2&#125;\right) =
                (0.010\overline&#123;10&#125;\dots, 0.1)_2 \mapsto (010101\dots, 100000\dots)
                \mapsto (01100010001000\dots) \mapsto (0.01\overline&#123;1000&#125;)_2 =: z\ .
                \end&#123;align*&#125;$$
                <Paragraph>
                  Um herauszufinden, um welche Zahl es sich bei \(z\) handelt,
                  multiplizieren wir sie mit 64:
                </Paragraph>
                $$\begin&#123;align*&#125; \end&#123;align*&#125;$$
                <Paragraph>
                  Sie erreicht alle Zahlen bis auf diejenigen mit einem unendlichen
                  Schweif von Einsen. Sie ist hochgradig nichtstetig. Dennoch können wir
                  versuchen, sie zu plotten:
                </Paragraph>
                <figure>
                  <img
                    style="height: 20em"
                    src="../img/infinite-sets/bijection-square-interval.png" />
                  <br />
                  <div>
                    Plot der (Fast-) Bijektion \(f : [0,1) \times [0,1) \rightarrow
                    [0,1)\). Ausgabewerte sind mit Farbwerten / Helligkeitswerten
                    codiert. Grün/blass steht für niedrige Werte (nahe der 0),
                    rot/kräftig für hohe (nahe der 1).
                  </div>
                </figure>
                <Paragraph>
                  Als nächstes versuche ich, die Umkehrfunktion \(f^&#123;-1&#125; : [0,1) \mapsto
                  [0,1) \times [0,1)\) zu skizzieren. Das ist etwas schwierig, weil
                  \(f^&#123;-1&#125;\) nicht stetig ist. Was macht \(f^&#123;-1&#125;(z)\)? Sie betrachtet \(z
                  \in [0,1)\) in Binärdarstellung und dröselt dann die unendlich vielen
                  Nachkommastellen auf. Die ungeraden bilden \(x\), die geraden bilden
                  \(y\). Beispielsweise für \(z = 1/7\) gilt
                </Paragraph>
                $$\begin&#123;align*&#125; \frac&#123;1&#125;&#123;7&#125; = (0.001001\overline&#123;001&#125;)_2 \mapsto
                001001001001\dots \mapsto (010010\dots, 001001\dots) \mapsto (
                (0.\overline&#123;010&#125;)_2, (0.\overline&#123;001&#125;)) = \left(\frac&#123;2&#125;&#123;7&#125;,
                \frac&#123;1&#125;&#123;7&#125;\right) \ , \end&#123;align*&#125;$$
                <Paragraph>
                  also \(f^&#123;-1&#125;(1/7) = (2/7, 1/7)\).
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Beobachtung
                      <NumberedTitle>
                        &ensp;2.3.4{" "}
                      </NumberedTitle>
                    </span>
                    &ensp;Die Funktion
                    \(f^&#123;-1&#125;\) bildet
                  </Paragraph>
                  <ul>
                    <li>
                      \(\left[0,\frac&#123;1&#125;&#123;4&#125;\right)\) auf \(\left[0,\frac&#123;1&#125;&#123;2&#125;\right)
                      \times \left[0,\frac&#123;1&#125;&#123;2&#125;\right)\) ab,
                    </li>
                    <li>
                      \(\left[\frac&#123;1&#125;&#123;4&#125;,\frac&#123;1&#125;&#123;2&#125;\right)\) auf
                      \(\left[0,\frac&#123;1&#125;&#123;2&#125;\right) \times \left[\frac&#123;1&#125;&#123;2&#125;,1\right)\),
                    </li>
                    <li>
                      \(\left[\frac&#123;1&#125;&#123;2&#125;,\frac&#123;3&#125;&#123;4&#125;\right)\) auf
                      \(\left[\frac&#123;1&#125;&#123;2&#125;,1\right) \times \left[0,\frac&#123;1&#125;&#123;2&#125;\right)\) und
                    </li>
                    <li>
                      \(\left[\frac&#123;3&#125;&#123;4&#125;,1\right)\) auf \(\left[\frac&#123;1&#125;&#123;2&#125;,1\right)
                      \times \left[\frac&#123;1&#125;&#123;2&#125;,1\right)\).
                    </li>
                  </ul>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    Wir zeigen den ersten Punkt. Sei \(0 \leq z \lt 1/2\) und \((x,y) =
                    f^&#123;-1&#125;(z)\). Dann hat \(z\) die Binärdarstellung \(z =
                    (0.00z_3z_4z_5\dots)\). Die ersten beiden Bits nach dem Komma sind
                    \(0\), und somit sind die jeweils ersten Bits von \(x\) und \(y\) auch 0,
                    was \(x,y \lt 1/2\) bedeutet. Punkt 2 bis 4 folgen aus ähnlichen
                    Überlegungen.
                    <span class="qed">
                      \(\square\)
                    </span>
                  </Paragraph>
                </div>
                <Paragraph>
                  Wenn wir also \(z\) von \(0\) nach \(1\) wandern lassen, dann bewegt sich
                  \(f^&#123;-1&#125;(z)\) von links unten nach links oben, springt dann nach rechts
                  unten und bewegt sich nach rechts oben. Grafisch stelle ich das wie
                  folgt (und etwas unbeholfen) dar:
                </Paragraph>
                <figure>
                  <img
                    style="height: 10em"
                    src="../img/infinite-sets/interval-to-square.svg" />
                </figure>
                <Paragraph>
                  Beachten Sie, dass die Verbindungslinien zwischen den Kreisen Sprünge
                  sind, also Unstetigkeitsstellen von \(f^&#123;-1&#125;\). Innerhalb der
                  Viertelintervalle (also z.B. innerhalb von \(\left[\frac&#123;1&#125;&#123;4&#125;,
                  \frac&#123;1&#125;&#123;2&#125;\right)\)) sieht der Graph wieder ganz ähnlich aus. Hier
                  sehen Sie die ersten paar Schritte dieser "Verfeinerung".
                </Paragraph>
                <figure class="centered-figure well container">
                  <Carousel>
                    <img
                      style="height: 15em"
                      src="../img/infinite-sets/interval-to-square-animation/figures-01-01.svg" />
                    <img
                      style="height: 15em"
                      src="../img/infinite-sets/interval-to-square-animation/figures-01-02.svg" />
                    <img
                      style="height: 15em"
                      src="../img/infinite-sets/interval-to-square-animation/figures-01-03.svg" />
                    <img
                      style="height: 15em"
                      src="../img/infinite-sets/interval-to-square-animation/figures-01-04.svg" />
                  </Carousel>
                </figure>
                <Paragraph>
                  Wir wissen nun, dass \(\R \approx \R^2\) gilt. Ebenso können wir \(\R
                  \approx \R^&#123;k&#125;\) für jedes \(k \in \N^+\) zeigen. Wie sieht es aber mit
                  \(\R^&#123;\N&#125;\) aus? Das ist die Menge aller Funktionen \(\phi: \N
                  \rightarrow \R\) oder, etwas freundlicher formuliert, die Menge aller
                  unendlichen Folgen reeller Zahlen: \(r_1, r_2, r_3, \dots\).
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Theorem
                      <NumberedTitle>
                        &ensp;2.3.5{" "}
                      </NumberedTitle>
                    </span>
                    &ensp;\(\R \approx \R^&#123;\N&#125;\).
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    Da \(\R \approx \cuben\) gilt, reicht es, zu zeigen, dass
                  </Paragraph>
                  $$\begin&#123;align*&#125; \cuben \approx \left(\cuben\right)^&#123;\N&#125; \end&#123;align*&#125;$$
                  <Paragraph>
                    gilt. Interpretieren wir die rechte Seite: das sind unendliche
                    Folgen von "Dingern", und jedes Ding ist wiederum eine unendliche
                    Folge von 0/1. Wir können uns jedes Ding als (unendliche) Zeile
                    vorstellen und erhalten somit eine in beiden Richtungen unendliche
                    Tabelle. Wenn also \(r_i\) eine unendliche \(0/1\)-Folge ist und und
                    \(r_&#123;i,j&#125;\) das \(j\)-te Bit der \(i\)-ten Folge, dann sieht unsere
                    Tabelle so aus:
                  </Paragraph>
                  <figure>
                    <img
                      style="width: 40%"
                      src="../img/infinite-sets/table-infinite-sequences.svg" />
                  </figure>
                  <Paragraph>
                    Wir wollen jetzt eine Bijektion \(f : \cuben \times \cuben
                    \rightarrow \cuben\) definieren. Dafür wenden wir den gleichen Trick
                    an wie in dem Beweis, dass \(\N \approx \N \times \N\) ist: wir
                    zerlegen die Tabelle in Diagonalen und arbeiten jede separat ab:
                  </Paragraph>
                  <figure>
                    <img
                      style="width: 40%"
                      src="../img/infinite-sets/table-infinite-sequences-with-blue.svg" />
                  </figure>
                  <Paragraph>
                    Schließlich definieren wir unsere Folge \(s_1 s_2 s_3 \dots \in
                    \cuben\):
                  </Paragraph>
                  <figure>
                    <img
                      style="width: 40%"
                      src="../img/infinite-sets/table-infinite-sequences-with-s.svg" />
                  </figure>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  Wir haben also die Beweisidee von \(\N \times \N \approx \N\) recycelt.
                  Diese Beobachtung motiviert den folgenden, etwas kurz angebundenen
                  Beweis:
                </Paragraph>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Zweiter Beweis.
                    </b>
                    Um zu zeigen, dass \(\R^\N \approx \R\) gilt, rechnen wir:
                  </Paragraph>
                  $$\begin&#123;align*&#125; \R^\N&amp;\approx \left(\cuben\right)^&#123;\N&#125; \\&amp;\approx
                  \cube^&#123;\N \times \N&#125; \\&amp;\approx \cube^&#123;\N&#125; \\&amp;\approx \R \ .
                  \end&#123;align*&#125;$$
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  Dürfen wir das? Dürfen wir Rechenregeln wie \(\left(x^&#123;b&#125;\right)^c =
                  x^&#123;b \cdot c&#125;\) so einfach anwenden? Noch grundlegender, und das ist
                  auch ein Punkt im ersten Beweis, den ich unter den Teppich gekehrt
                  habe: Zwar wissen wir bereits, dass \(\R \approx \cuben\). Folgt aber
                  daraus bereits, dass \(\R^\N \approx \left(\cuben\right)^\N\)? Erstens
                  also: dürfen wir mit Plus, Mal und Hoch wie gewohnt rechnen? Und
                  dürfen wir in den resultierenden Ausdrücken equipotente Mengen
                  austauschen?
                </Paragraph>
                <Paragraph>
                  Bevor wir das als Theorem formulieren, überlegen wir uns kurz, was
                  denn die Analoga zu den arithmetischen Operationen sind. Am klarsten
                  ist die Multiplikation: die Zahlenmultiplikation \(a \cdot b\) hat als
                  mengentheoretisches Analog das Cartesische Produkt \(A \times B\), die
                  Menge aller Paare \((x,y)\) mit \(x \in A, y \in B\). Die Exponentiation
                  \(a^b\) hat als Analog \(A^B\), die Menge aller{" "}
                  <i>
                    Funktionen
                  </i>
                  {" "}\(\phi:
                  B \rightarrow A\). Was ist das Analog zur Addition? Die Vereinigung \(A
                  \cup B\) wäre zu kurz gegriffen, weil ja zum Beispiel \(\&#123;1,2,3\&#125; \cup
                  \&#123;4,5\&#125;\) fünf Elemente hat, \(\&#123;1,2,3\&#125; \cup \&#123;1,2\&#125;\) aber nur drei.
                  Das "richtige" Analog ist die{" "}
                  <i>
                    disjunkte Vereinigung
                  </i>
                  {" "}\(A \uplus
                  B\), die die Elemente von \(B\) erst einmal "markiert", um sie von denen
                  von \(A\) unterscheidbar zu machen. Somit wäre also \(\&#123;1,2,3\&#125; \uplus
                  \&#123;1,2\&#125; = \&#123;1,2,3,1',2'\&#125;\) eine Menge der Kardinalität 5. Formal kann
                  man \(A \uplus B\) so definieren;
                </Paragraph>
                $$\begin&#123;align*&#125; A \uplus B := \&#123; (a,0) \ | \ a \in A\&#125; \cup \&#123; (b,1) \ |
                \ b \in B\&#125; \ . \end&#123;align*&#125;$$
                <div class="well container theorem">
                  <Paragraph>
                    <span
                      id="calculating-with-cardinals"
                      class="numbered-title">
                      Theorem
                      <NumberedTitle>
                        &ensp;2.3.6{" "}
                      </NumberedTitle>
                    </span>
                    {" "}{" "}
                    <b>
                      (mit Kardinalzahlen rechnen)
                    </b>
                    . Es gelten die
                    üblichen Rechenregeln:
                  </Paragraph>
                  <ol>
                    <li>
                      \(A \times (B \uplus C) \approx (A \times B) \uplus (A \times C)\),
                    </li>
                    <li>
                      \(A^&#123;B&#125; \times A^&#123;C&#125; \approx A^&#123;B \uplus C&#125;\),
                    </li>
                    <li>
                      \(\left(A^&#123;B&#125;\right)^C \approx A^&#123;B \times C&#125;\),
                    </li>
                  </ol>
                  <Paragraph>
                    sowie Kommutativität und Assoziativität von \(\uplus\) und \(\times\).
                  </Paragraph>
                </div>
                <Paragraph>
                  Als zweites gilt, dass wir in so einem
                  "mengentheoretisch-arithmetischen" Ausdruck eine Menge \(A\) durch eine
                  äquipotente Menge \(A'\) ersetzen können:
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span
                      id="replacing-equipotent-cardinals"
                      class="numbered-title">
                      Theorem
                      <NumberedTitle>
                        &ensp;2.3.7{" "}
                      </NumberedTitle>
                    </span>
                    Seien \(A, A', B\) Mengen und \(A \approx A'\). Dann gilt
                  </Paragraph>
                  <ol>
                    <li>
                      \(A \uplus B \approx A' \uplus B\) (und natürlich auch \(B \uplus A
                      \approx B \uplus A'\)).
                    </li>
                    <li>
                      \(A \times B \approx A' \times B\) (und natürlich auch \(B \times A
                      \approx B \times A'\)).
                    </li>
                    <li>
                      \(A^B \approx \left(A'\right)^&#123;B&#125;\).
                    </li>
                    <li>
                      \(B^A \approx B^&#123;A'&#125;\).
                    </li>
                  </ol>
                </div>
                <Paragraph>
                  Beachten Sie, dass ich Punkt 3 und 4 nicht zu einem Punkt
                  zusammengefasst habe. Punkt 4 folgt nämlich nicht unmittelbar aus
                  Punkt 3 sondern erfordert einen separaten Beweis.
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                      <NumberedTitle>
                        &ensp;2.3.6{" "}
                      </NumberedTitle>
                    </span>
                    &ensp;Beweisen Sie so
                    viele Punkte von
                    <span
                      data-ref="calculating-with-cardinals"
                      class="reference" />
                    und
                    <span
                      data-ref="replacing-equipotent-cardinals"
                      class="reference" />
                    , wie Sie wollen.
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Hinweis.
                    </b>
                    {" "}Die Beweise sind alle nicht wirklich
                    schwierig. Sie müssen nur aufpassen, dass Sie sich nicht in der
                    Notation verlieren.
                  </Paragraph>
                </div>
                <h3>
                  Die Partialordnung \(2^&#123;\N&#125;\).
                </h3>
                <Paragraph>
                  Wir betrachten \(2^&#123;\N&#125;\), die Potenzmenge von \(\N\), also die Menge
                  aller Teilmengen.
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                      <NumberedTitle>
                        &ensp;2.3.7{" "}
                      </NumberedTitle>
                    </span>
                    Zeigen Sie, dass \(2^&#123;\N&#125; \approx \cuben\) gilt.
                  </Paragraph>
                </div>
                <Paragraph>
                  Die Elemente von \(2^\N\), also Teilmengen \(A \subseteq \N\), sind nach
                  Inklusion geordnet: \(A \subseteq B\). Somit ist \(\left(2^&#123;\N&#125;,
                  \subseteq\right)\) eine Partialordnung. Eine{" "}
                  <i>
                    Kette
                  </i>
                  {" "}in einer
                  Partialordnung \((X, \preceq)\) ist eine Menge \(Z\), in der alle Elemente
                  paarweise vergleichbar sind. In diesem konkreten Beispiel heißt das:
                  \(Z \subseteq 2^&#123;\N&#125;\) und für alle \(A, B \in Z\) gilt \(A \subseteq B\)
                  oder \(B \subseteq A\). Erinnern Sie sich: \(A\) und \(B\) sind hier Mengen
                  natürlicher Zahlen, und \(Z\) ist eine Menge von Mengen natürlicher
                  Zahlen. Eine{" "}
                  <i>
                    Antikette
                  </i>
                  {" "}in einer Partialordnung \((X,\preceq)\)
                  ist eine Teilmenge \(Z \subseteq X\), in der je zwei Elemente
                  <i>
                    unvergleichbar
                  </i>
                  {" "}sind. In diesem Beispiel heißt das: \(Z
                  \subseteq 2^N\), und für alle \(A, B \in Z\) mit \(A \ne B\) gilt \(A \not
                  \subseteq B\) und \(B \not \subseteq A\). Hier ist ein Beispiel für eine
                  unendliche Kette:
                </Paragraph>
                $$\begin&#123;align*&#125; \&#123;\emptyset, \&#123;1\&#125;, \&#123;1,2\&#125;, \&#123;1,2,3\&#125;, \dots,
                \&#123;1,2,\dots,k\&#125;, \dots \&#125; \end&#123;align*&#125;$$
                <Paragraph>
                  Diese Kette hat zufälligerweise die Form \(A_0 \subseteq A_1 \subseteq
                  A_2 \subseteq \dots\), d.h., die Elemente der Kette sind schön
                  sortiert, von klein nach groß. Dies muss nicht so sein: sei \(k \N :=
                  \&#123; k\cdot i \ | \ i \in \N\&#125;\) die Menge der Vielfachen von \(k\). Dann
                  gilt \(1 \N \supseteq 2 \N \supseteq 4\N \supseteq 8\N \supseteq
                  \dots\), die Elemente sind also in "absteigender" Reihenfolge sortiert.
                  Beide Beispiele haben einen "Anfangspunkt". Das muss aber nicht so
                  sein: sei \([k] := \&#123;1,2,\dots,k\&#125;\).
                </Paragraph>
                $$\begin&#123;align*&#125; \dots \subseteq 2\N \setminus [6] \subseteq 2\N \setminus
                [4] \subseteq 2\N \setminus [2] \subseteq 2\N \subseteq 2\N \cup \&#123;1\&#125;
                \subseteq 2\N \cup \&#123;1,3\&#125; \subseteq 2\N \cup \&#123;1,3,5\&#125; \subseteq \dots
                \end&#123;align*&#125;$$
                <Paragraph>
                  Wenn wir ganz links noch \(\&#123;0\&#125;\) hinschreiben und ganz rechts noch
                  \(\N\), dann haben wir ein weiteres, eventuell ungewohntes Phänomen: das
                  Element \(\&#123;0\&#125;\) in der Kette hat keinen eindeutigen
                  <i>
                    Nachfolger
                  </i>
                  . Egal, welches \(A\) mit \(\&#123;0\&#125; \subsetneq A\) Sie
                  wählen, sie finden immer noch ein \(B\) dazwischen: \(\&#123;0\&#125; \subsetneq B
                  \subsetneq A\).
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Definition
                      <NumberedTitle>
                        &ensp;2.3.8{" "}
                      </NumberedTitle>
                    </span>
                    {" "}{" "}
                    <b>
                      (Dichte Partialordnung)
                    </b>
                    {" "}Eine Partialordnung
                    \((X,\preceq)\) heißt{" "}
                    <i>
                      dicht
                    </i>
                    , wenn es für alle \(x,z \in X\) mit
                    \(x \prec z\) ein \(y \in X\) gibt mit \(x \prec y \prec z\).
                  </Paragraph>
                </div>
                <Paragraph>
                  Ein klassisches Beispiel für eine dichte Ordnung ist \((\Q, \lt)\). Wenn
                  \(x \lt z\), dann ist \(x \lt \frac&#123;x+z&#125;&#123;2&#125; \lt z\). Sie finden also immer
                  etwas dazwischen. Die Ordnung \((\Z, \lt)\) ist nicht dicht: zwischen
                  \(7\) und \(8\) finden Sie nichts. Die Partialordnung \((2^\N, \subseteq)\)
                  ist nicht dicht: es gilt \(\&#123;2\&#125; \subsetneq \&#123;2,3\&#125;\), aber es gibt
                  keine Menge zwischen den beiden.
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                      <NumberedTitle>
                        &ensp;2.3.8{" "}
                      </NumberedTitle>
                    </span>
                    Finden Sie in \((2^\N, \subseteq)\) eine Kette \(X\), so dass \((X,
                    \subseteq)\) dicht ist. Also: eine Menge \(X\), so dass für alle \(A,C
                    \in X\) mit \(A \ne C\) entweder \(A \subsetneq C\) oder \(C \subsetneq A\)
                    gilt (d.h. \(X\) soll eine Kette sein) und zusätzlich ein \(B \in X\)
                    mit \(A \subsetneq B \subsetneq C\) (oder \(C \subseteq B \subsetneq
                    A\)).
                  </Paragraph>
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