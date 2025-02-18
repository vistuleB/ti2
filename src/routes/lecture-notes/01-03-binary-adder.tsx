import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        count={4}
        title_gr="Binär-Addierer"
        title_en="binary adder"
        number={1.3}
        path="/lecture-notes4.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="01-02-truth-tables-cnf-dnf">
            &lt;&lt; Kapitel 1.2
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="01-04-monotone-circuits">
            Kapitel 1.4 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    3 Binär-Addierer
                  </span>
                </h1>
                <h3>
                  Ein Schaltkreis für binäre Addition
                </h3>
                <Paragraph>
                  Schaltkreise, der zwei Binärzahlen addieren können, finden Sie heutzutage wahrscheinlich in
                  jedem
                  besseren Haushaltsgerät (und wenn Sie ein gegen Covid-19 geimpfter Verschwörungstheoretiker
                  sind, dann
                  höchstwahrscheinlich auch in Ihrem Blut). Grund genug, sich diese genauer anzuschauen.
                  Genau wie bei der Addition von Dezimalzahlen gibt es pro Stelle ein Ergebnis und einen
                  Übertrag (Englisch{" "}
                  <i>
                    carry
                  </i>
                  ); beispielsweise ergibt
                  "sechs plus acht plus sieben = eins, zwei gemerkt", und die 2 muss dann zu den links daneben
                  stehenden Ziffern addiert werden. Binär ist alles viel einfacher, weil man sich nur 0 oder 1
                  merken muss.
                </Paragraph>
                $$
                \begin&#123;array&#125;&#123;cc|cc&#125;
                x&amp;y&amp;&#123;\rm result&#125;&amp;&#123;\rm carry&#125; \\ \hline
                0&amp;0&amp;0&amp;0 \\
                0&amp;1&amp;1&amp;0 \\
                1&amp;0&amp;1&amp;0 \\
                1&amp;1&amp;0&amp;1
                \end&#123;array&#125;
                $$
                <Paragraph>
                  Das Carry wird dann der eins weiter links stehenden Stelle zur Addition weitergegeben.
                  Aber halt! Das heißt doch, dass wir in der nächsten Stelle{" "}
                  <i>
                    drei
                  </i>
                  {" "}Bits addieren
                  müssen:
                  das von \(x\), das von \(y\), und das eingehende Carry \(\cin\). Daraus berechnet
                  sich das Output-Bit \(s\) und das ausgehende Carry \(\cout\), das nach links weitergegeben
                  wird.
                  Unsere Tabelle ist also etwas größer:
                </Paragraph>
                $$
                \begin&#123;array&#125;&#123;ccc|cc&#125;
                x&amp;y&amp;\cin&amp;s&amp;\cout \\ \hline
                0&amp;0&amp;0&amp;0&amp;0 \\
                0&amp;0&amp;1&amp;1&amp;0 \\
                0&amp;1&amp;0&amp;1&amp;0 \\
                0&amp;1&amp;1&amp;0&amp;1 \\
                1&amp;0&amp;0&amp;1&amp;0 \\
                1&amp;0&amp;1&amp;0&amp;1 \\
                1&amp;1&amp;0&amp;0&amp;1 \\
                1&amp;1&amp;1&amp;1&amp;1 \\
                \end&#123;array&#125;
                $$
                <Paragraph>
                  Glücklicherweise muss man sich diese Tabelle nicht merken, es gilt nämlich
                  $$\begin&#123;align*&#125;
                  s&amp;= x \oplus y \oplus \cin \\
                  \cout&amp;= &#123;\rm Maj&#125; (x, y, \cin) \ .
                  \end&#123;align*&#125;$$
                  Die Funktion Maj haben wir schon oben kennengelernt; sie gibt 1 aus, wenn mindestens zwei
                  ihrer drei Input-Bits 1 sind. Wir kürzen Sie im folgenden mit \(M\) ab. Hier ist nun
                  unser \(n\)-Bit-Addierer:
                </Paragraph>
                <figure>
                  <img
                    style="height:10em"
                    src="../img/circuits/adder-ripple.svg"
                    loading="lazy" />
                </figure>
                <Paragraph>
                  Wir numerieren unsere Variablen von \(0, \dots,n-1\), damit wir die
                  repräsentierte natürliche Zahl bequem als
                  \(\sum_&#123;i=0&#125;^n x_i 2^i\) schreiben können. Beachten Sie auch die
                  unvermittelt rechts stehende 0. Streng genommen lässt unsere Definition
                  von Schaltkreisen so etwas nicht zu; allerdings ist es recht einfach,
                  die Definition entsprechend zu verallgemeinern, oder aber den obigen
                  Schaltkreis zu vereinfachen: \(M(x,y,0)\) würde dann zum Beispiel einfach zu \(x \wedge y\)
                  werden).
                </Paragraph>
                <Paragraph>
                  Wie groß ist dieser Schaltkreis? Wenn wir jedes \(\oplus\)- und \(M\)-Gate als{" "}
                  <i>
                    ein
                  </i>
                  {" "}
                  Gate
                  zählen, so haben wir insgesamt \(2n\) innere Gates und \(2n\) Input-Gates.
                  Wenn wir darauf bestehen, \(\oplus\)- und \(M\)-Gates aus AND/OR/NOT zu basteln,
                  haben wir mehr, allerdings in jedem Fall \(O(n)\) viele.
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <span class="numbered-title">
                    Übungsaufgabe
                  </span>
                  Bauen Sie einen Schaltkreis{" "}
                  <tt>
                    oneBitAdder:
                  </tt>
                  &ensp;\( \&#123;0,1\&#125;^3 \rightarrow \&#123;0,1\&#125;^2\) für
                  folgende Funktionalität:
                  <figure>
                    <img
                      style="height:10em"
                      src="../img/circuits/onebitadder.svg"
                      loading="lazy" />
                  </figure>
                  Versuchen Sie, so wenig Gates wie möglich zu verwenden. Entscheiden Sie sich
                  im Voraus, ob Sie beliebigen Fan-in erlauben wollen oder auf Fan-in 2 bestehen.
                </div>
                <Paragraph>
                  Eine Größe von \(O(n)\) ist gut; besseres können wir nicht wirklich erwarten, schließlich
                  muss der Schaltkreis ja allein schon \(n\) Input-Gates haben. Wie steht es mit der Tiefe?
                  Wenn wir jedes \(\oplus\) und \(M\) als Gate
                  betrachten, dann hat der Pfad von \(x_0\) zu \(s_n\) die Länge \(n\) (beachten Sie:
                  das ganz links stehende \(M\) ist streng genommen bereits das Output-Gate; die ausgehende
                  Kante \(s_n\) ist also vielmehr ein Output-Label als eine ausgehende Kante und daher bei der
                  Tiefenbestimmung nicht mitgezählt). Der Addier-Schaltkreis hat also Tiefe \(n\).
                  Eine Tiefe von \(\Omega(n)\) ist in der Regel nicht gut. Idealerweise streben
                  wir eine Tiefe von \(\log n\) an (oder wenn wir besonders ambitionert sind und
                  beliebig großen Fan-in zulassen, sogar konstante Tiefe \(O(1)\)).
                </Paragraph>
                <h3>
                  Carry Look-Ahead
                </h3>
                <Paragraph>
                  Tiefenmässig hat uns der obige Addierer nicht befriedigt. Das Problem ist, dass das Carry
                  im schlimmsten Fall von ganz rechts nach ganz links durchrasseln muss,
                  zum Beispiel wenn man \(11111111 + 00000001\) berechnet. So einen Addierer nennt man
                  {" "}
                  <i>
                    ripple-carry adder
                  </i>
                  .
                </Paragraph>
                <Paragraph>
                  Geringere Tiefe erreicht man mit{" "}
                  <i>
                    Carry Lookahead
                  </i>
                  . Hier versuchen wir,
                  im Voraus bereits das Carry auf Position \(i\) zu berechnen, ohne erst das auf Position
                  \(i-1\) abzuwarten. Es lohnt, ein paar Dinge formaler zu definieren:
                </Paragraph>
                <Paragraph>
                  \(c_i\) ist das Carry, das von Position \(i-1\) an Position \(i\) übergeben wird;
                  \(s_i\) ist das \(i\)-te Bit der Summe (von rechts nach links zählend, bei 0 beginnend).
                  Es gilt also \(c_0 = 0\) und
                  $$\begin&#123;align*&#125;
                  s_i&amp;= x_i \oplus y_i \oplus c_i \\
                  c_&#123;i+1&#125;&amp;= M(x_i, y_i, c_i) \ ,
                  \end&#123;align*&#125;$$
                  und das Ergebnis ist dann \(c_&#123;n&#125; s_&#123;n-1&#125; s_&#123;n-2&#125; \dots, s_2 s_1 s_0\).
                  Bauen wir uns doch mal einen Schaltkreis, der \(c_&#123;k+1&#125;\) berechnet; wir können
                  zum Beispiel den obigen Ripple-Carry-Adder nehmen und alles löschen, was nicht
                  zur Berechnung von \(c_&#123;k+1&#125;\) beiträgt:
                </Paragraph>
                <figure>
                  <img
                    style="height:6em"
                    src="../img/circuits/adder-ripple-only-carry.svg"
                    loading="lazy" />
                </figure>
                <Paragraph>
                  Betrachten Sie \((x_i,y_i)\). Wenn dies \((1,1)\) ist, so ist
                  \(c_&#123;i+1&#125;=1\);
                  wenn \((x_i,y_i) = (0,0)\), so ist \(c_&#123;i+1&#125;=0\). In beiden Fällen spielt
                  alles, was vor \(i\) kommt (rechts davon) spielt keine Rolle. Wenn nun
                  \(x_i \ne y_i\) ist, dann schaltet das \(M\)-Gate einfach \(c_i\) unverändert durch.
                  Dies motiviert die folgenden Definitionen:
                </Paragraph>
                $$\begin&#123;align*&#125;
                g_i&amp;:= x_i \wedge y_i \tag&#123;carry-generate&#125; \\
                p_i&amp;:= x_i \vee y_i \tag&#123;carry-propagate&#125;
                \end&#123;align*&#125;$$
                <Paragraph>
                  Jetzt können wir \(c_&#123;k+1&#125;\) wie folgt berechnen: an Stelle \(k\) wird ein Carry
                  ausgegeben, wenn es eine Stelle \(i \leq k\) gibt, wo \(x_i = y_i=1\) gilt, das
                  Carry also erzeugt wird (carry generate), und dann
                  für alle \(j = \&#123;i+1,\dots,k\&#125;\) das Carry zumindest weitergereicht wird,
                  also \( x_j \vee y_j = 1\) gilt (carry propagate):
                </Paragraph>
                $$
                c_&#123;k+1&#125; := g_k \vee (g_&#123;k-1&#125; \wedge p_k) \vee (g_&#123;k-2&#125; \wedge p_&#123;k-1&#125; \wedge p_&#123;k&#125;) \vee \dots
                \vee
                (g_0 \wedge p_1 \wedge \dots \wedge p_k) \ .
                $$
                Und voilà: dies ist ein Schaltkreis für \(c_&#123;k+1&#125;\) und hat Tiefe 2 (wenn wir $g
                <i>
                  i$ und $p
                </i>
                i$ als
                Inputgates betrachten).
                Wie groß ist er? Er hat \(k\) OR-gates und
                \(1 + 2 + \dots + k\) AND-gates, insgesamt also \(\Theta(k^2)\) Gates.
                Wir konstruieren nun für jedes \(c_1,\dots, c_n\) einen Schaltkreis und setzen
                dann einen Schaltkreis für \(s_k = x_k \oplus y_k \oplus c_k\) oben drauf.
                Insgesamt haben wir Tiefe \(O(1)\), wenn wir beliebigen Fan-in zulassen;
                wenn wir Fan-in 2 wollen, bekommen wir Tiefe \(O(\log n)\).
                Die Anzahl der Gates ist in jedem Fall \(\Theta(n^3)\), genauer gesagt
                etwa \( &#123;n \choose 3&#125;\). Dies scheint
                recht verschwenderisch. Für \(n=64\) wie bei zeitgenössischen Rechnern
                ergibt dies 41664. Das ist nicht unerträglich groß, aber auch nicht besonders handlich.
                <h3>
                  Carry-Lookahead mit \(O(n)\) Gates und \(O(\log n)\) Tiefe
                </h3>
                <Paragraph>
                  Effizientere Lösungen beginnen oft mit einer guten Definition. In diesem Falle ist das die
                  Verallgemeinerung von{" "}
                  <i>
                    Carry Generate \(g_i\)
                  </i>
                  {" "}und{" "}
                  <i>
                    Carry Propagate \(p_i\)
                  </i>
                  {" "}
                  von Indizes auf Intervalle. Für ein Interval
                  \([a,b] := \&#123;a, a+1, \dots, b\&#125;\) definieren wir Funktionen
                  \(g_&#123;[a,b]&#125;\) und \(p_&#123;[a,b]&#125;\) in den Variablen \(x_&#123;a&#125;,\dots,x_&#123;b&#125;, y_a, \dots, y_b\)
                  wie folgt:
                  \(g_&#123;[a,b]&#125;\) soll 1 sein , wenn an Stelle \(b\) ein Carry nach \(b+1\)
                  geschickt wird,
                  selbst wenn von \(a-1\) nach \(a\) kein Carry reinkommt; wenn also \(c_&#123;b+1&#125;=1\) ist,
                  selbst wenn \(c_&#123;a&#125;=0\) ist;
                  \(p_&#123;[a,b]&#125;\) soll 1 sein, wenn an Stelle \(b\) ein Carry nach \(b+1\) rausgeschickt wird,
                  falls eines von \(a-1\) nach \(a\) reingeschickt wird.
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Definition (Carry propagate / generate für Intervalle)
                  </span>
                  Sei \(I = \&#123;a,a+1, \dots, b\&#125;\) ein Intervall natürlicher Zahlen. Die Werte
                  \(p_I\) und \(g_I\) sind wie folgt definiert:
                  <ul>
                    <li>
                      Wenn für alle \(i \in I\) das Paar \(x_i, y_i\) den Wert \((0,1)\) oder \((1,0)\)
                      hat,
                      dann ist \(p_I = 1\) und \(g_I = 0\).
                    </li>
                    <li>
                      Ansonsten sei \(i^* := \max \&#123;i \in I \ | \ (x_i, y_i) \in \&#123;(0,0), (1,1)\&#125; \&#125;\).
                      <ul>
                        <li>
                          Falls \( (x_&#123;i^*&#125;, y_&#123;i^*&#125;) = (1,1) \), dann sind \(p_I = g_I = 1\).
                        </li>
                        <li>
                          Falls \( (x_&#123;i^*&#125;, y_&#123;i^*&#125;) = (0,0) \), dann sind \(p_I = g_I = 0\).
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <Paragraph>
                    Insbesondere für ein-elementige Intervalle \(I = [a,a]\) gilt
                    \(p_&#123;[a]&#125; = p_a = x_a \vee y_a\) und \(g_&#123;[a]&#125; = g_a = x_a \wedge y_a\).
                  </Paragraph>
                </div>
                <Paragraph>
                  Hier sind Boolesche Formeln (in DNF) für \(p_&#123;[a,b]&#125;\) und \(g_&#123;[a,b]&#125;\):
                </Paragraph>
                $$\begin&#123;align*&#125;
                g_&#123;[a,b]&#125;&amp;:= g_b \vee (g_&#123;b-1&#125; \wedge p_b) \vee (g_&#123;b-2&#125; \wedge p_&#123;b-1&#125; \wedge p_b)
                \vee \dots \vee (g_a \wedge p_&#123;a+1&#125; \wedge \dots \wedge p_b) \ , \\
                p_&#123;[a,b]&#125;&amp;:= g_b \vee (g_&#123;b-1&#125; \wedge p_b) \vee (g_&#123;b-2&#125; \wedge p_&#123;b-1&#125; \wedge p_b)
                \vee \dots \vee (g_&#123;a+1&#125; \wedge p_&#123;a+2&#125; \wedge \dots \wedge p_b)
                \vee (p_a \wedge p_&#123;a+1&#125; \wedge \dots \wedge p_b) \ ,
                \end&#123;align*&#125;$$
                <Paragraph>
                  und hier ein Bild zur Illustration:
                </Paragraph>
                <figure>
                  <img
                    style="height:11em"
                    src="../img/circuits/carry-generate-interval.svg"
                    loading="lazy" />
                  <br />
                  <img
                    style="height:11em"
                    src="../img/circuits/carry-propagate-interval.svg"
                    loading="lazy" />
                </figure>
                <Paragraph>
                  Im Extremfall \(a=b\) gilt \(g_&#123;[a,a]&#125; = g_a, p_&#123;[a,a]&#125; = p_a\), also wie
                  die "alten" individuellen \(p_a, g_a\).
                  Diese Definition \(g_&#123;[a,b]&#125;\) ist nützlich, da erstens
                  $$
                  c_&#123;k+1&#125; = g_&#123;[0, k]&#125;
                  $$
                  gilt, wir also die Carrys direkt ablesen, zweitens
                  wir die \(g_&#123;[a,b]&#125;\) bequem rekursiv berechnen können:
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Beobachtung
                  </span>
                  Wenn wir \([a,b] = [a,i] \cup [i+1,b] \) schreiben für \(a \lt i \lt b\), dann gilt
                  $$\begin&#123;align*&#125;
                  p_&#123;[a,b]&#125;&amp;= g_&#123;[i+1,b]&#125; \vee (p_&#123;[a,i]&#125; \wedge p_&#123;[i+1,b]&#125;) \ , \\
                  g_&#123;[a,b]&#125;&amp;= g_&#123;[i+1,b]&#125; \vee (g_&#123;[a,i]&#125; \wedge p_&#123;[i+1,b]&#125;) \ . \\
                  \end&#123;align*&#125;$$
                </div>
                <Paragraph>
                  Überzeugen Sie sich von der Richtigkeit entweder durch Nachdenken (z.B. "damit im Interval
                  \([a,b]\) ein
                  Carry erzeugt wird, muss es entweder im höheren Interval erzeugt werden, oder im
                  niedrigeren,
                  und dann im
                  höheren weitergegeben werden") oder indem Sie explizit die Definitionsformel
                  von \(g_&#123;[a,b]&#125;\) nehmen und in der unteren Hälfte "ausklammern".
                  Die Idee ist jetzt, dass wir mit Hilfe dieser Formel die Funktionen \(p_I, g_I\) für alle
                  Intervalle \(I \subseteq [0,\dots,n-1]\) berechnen und dann mittels
                  \(s_i = x_i \oplus y_i \oplus c_i\) unmittelbar die Binärdarstellung der Summe \(x+y\)
                  ausgeben
                  können.
                  Das Problem: es gibt zu viele Intervalle, nämlich \(1 + 2 + \dots + n = &#123;n+1 \choose 2&#125; =
                  \Theta(n^2)\) viele.
                  Der Trick: wir beschränken uns auf besonders schöne Intervalle, nämlich
                  {" "}
                  <i>
                    Binärintervalle
                  </i>
                  .
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Definition
                  </span>
                  Ein Binärintervall ist eine Menge natürlicher Zahlen der Form
                  $$
                  \&#123; c \cdot 2^d, c \cdot 2^d + 1, \dots, c \cdot 2^&#123;d&#125; + 2^&#123;d&#125; - 1\&#125;
                  $$
                  Es wird eventuell klarer, wenn wir uns die Binärdarstellung anschauen: \([a,b]\) ist ein
                  Binärintervall, wenn $a$ und $b$ folgende Binärdarstellung haben:
                  \(a = (c00\dots 0)_2\) und \(b = (c 11 \dots 1)_2\), wobei $c$ selbst aus mehreren Bits bestehen
                  kann.
                </div>
                <Paragraph>
                  Beispielsweise ist \(12,13,14,15\) ein Binärintervall mit \(c=3\) und \(d=2\); in der
                  Binärdarstellung
                  ist das \(1100, 1101, 1110, 1111\). Wir können es also auch mit
                  in{" "}
                  <i>
                    Sternchennotation
                  </i>
                  {" "}mit [11**] notieren.
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <span class="numbered-title">
                    Übungsaufgabe
                  </span>
                  Seit \(n = 2^d-1\). Wie viele Binärintervalle gibt es in
                  \(\&#123;0,\dots,n-1\&#125;\)?
                </div>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Lemma
                  </span>
                  Es gibt einen Schaltkreis mit Input-Gates \(x_0,\dots,x_&#123;n-1&#125;, y_0, \dots, y_&#123;n-1&#125;\) mit
                  Größe \(6n - 4 \in O(n)\) und Tiefe \(2\, \ceil&#123;\log_2 n&#125; + 1 \ \in O(\log n)\) und
                  Output-Gates
                  \(p_&#123;I&#125;, g_I\) für jedes Binärinterval \(I\).
                </div>
                <div class="well container">
                  {" "}{" "}
                  <b>
                    Beweis.
                  </b>
                  {" "}
                  Ein Binärintervall, zum Beispiel \([32,47]\) können wir
                  als Vereinigung von zwei kleineren Binärintervallen schreiben, hier
                  \([32,47] = [32,39] \cup [40,47]\). In unserer Sternchen-Notation:
                  $$
                  [10****] = [100***] \cup [101***]
                  $$
                  Ganz allgemein gilt \([c*^&#123;k+1&#125;] = [c0*^k] \cup [c1*^k]\) und somit,
                  mit Hilfe von Beobachtung 1.10:
                  $$\begin&#123;align*&#125;
                  p_&#123;[c*^&#123;k+1&#125;]&#125;&amp;= g_&#123;[c1*^k]&#125; \vee (p_&#123;c0*^k&#125; \wedge p_&#123;c1*^k&#125;)\\
                  g_&#123;[c*^&#123;k+1&#125;]&#125;&amp;= g_&#123;[c1*^k]&#125; \vee (g_&#123;c0*^k&#125; \wedge p_&#123;c1*^k&#125;) \ .
                  \end&#123;align*&#125;$$
                  Wir basteln uns also am Besten ein "\(pg\)-Gate" mit vier Inputs und zwei Outputs:
                  <figure>
                    <img
                      style="height:10em"
                      src="../img/circuits/pg-gate.svg"
                      loading="lazy" />
                  </figure>
                  Mit Hilfe dieses Gates können wir
                  \(p_&#123;c0*^k&#125;, g_&#123;c0*^k&#125;\) und \(p_&#123;c1*^k&#125;, g_&#123;c1*^k&#125;\)
                  zu \(p_&#123;c*^&#123;k+1&#125;&#125;, g_&#123;c*^&#123;k+1&#125;&#125;\) kombinieren. Wir fangen
                  nun mit Binärintervallen der Größe \(1\) an und arbeiten uns hoch.
                  Der Übersichtlichkeit halber schreiben wir $pg
                  <i>
                    I$ für das Paar
                    $(p
                  </i>
                  I, g_I)$. Für \(n=16\) schaut das so aus:
                  <figure>
                    <img
                      style="height:18em"
                      src="../img/circuits/pg-all-gates.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    Jede Kante steht hier für zwei gebündelte Kanten, nämlich
                    \(p_I\) und \(g_I\).
                    Und dies ist unser Schaltkreis. Beachten Sie, dass
                    die untersten \(pg_&#123;i&#125;\) keine Input-Gates sind, sondern
                    wiederum aus \(x_i, y_i\) berechnet werden mittels
                    \(p_i = x_i \vee y_i\) bzw. \(g_i = x_i \wedge y_i\). Der
                    Schaltkreis hat also \(2n\) Input-Gates und pro
                    Binärinterval \(I\) zwei Output-Gates: \(p_I, g_I\).
                    Jedes \(pg\) im obigen Bild ist also gleichzeitig ein Output-Gate
                    (auch wenn es für weiter oben "wiederverwendet" wird; nirgendwo
                    steht geschrieben, dass ein Output-Gate keine ausgehenden Kanten
                    haben darf). Sie sehen, dass maximal \(\ceil&#123;\log_2 n&#125;\) viele
                    \(pg\)-Gates hintereinander kommen. Die \(pg\)-Gate-Tiefe ist
                    also \(\ceil&#123;\log_2 n&#125;\). Jedes \(pg\)-Gate hat an sich Tiefe
                    2 (siehe oben), und mit den untersten \(pg_i\) kommt noch einmal
                    eine Schicht dazu. Die Gesamttiefe des oben abgebildeten Schaltkreises
                    ist also
                    $$
                    2\, \ceil&#123;\log_2 n&#125; + 1 \ .
                    $$
                    Um die Größe zu bestimmen,
                    beachten Sie, dass der Schaltkreis wie ein Binärbaum aus
                    \(pg\)-Gates aussieht. Für \(n\)-stellige Zahlen
                    gibt es also \(n-1\) viele \(pg\)-Gates, von denen jedes vier
                    "normale" Gates hat. Pro unterstem \(pg_i\) kommen noch einmal
                    zwei hinzu: ein \(\wedge\)-Gate für \(g_i\) und ein
                    \(\vee\)-Gate für \(p_i\). Insgesamt also
                    $$
                    4 (n-1) + 2n = 6n - 4 \ ,
                    $$
                    wie behauptet.
                    <span class="qed">
                      \(\square\)
                    </span>
                  </Paragraph>
                </div>
                <Paragraph>
                  Eine anschließende Bemerkung: der Schaltkreis
                  besteht ausschließlich aus AND- und OR-Gates; er enthält
                  keine NOT-Gates und ist somit ein{" "}
                  <i>
                    monotoner Schaltkreis.
                  </i>
                  {" "}{" "}
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Lemma
                  </span>
                  Es gibt einen Schaltkreis der Größe \(2n\) und
                  Tiefe \(2 \ceil&#123;\log_2 n&#125; - 2 = O(\log n)\), der die \(p_I, g_I\) für Binärintervalle
                  als Inputs nimmt und daraus \(g_&#123;[0,k]&#125;\) berechnet für jedes
                  \(k=0,\dots,n-1\), also insgesamt \(n\) Output-Gates.
                </div>
                <div class="well container">
                  {" "}{" "}
                  <b>
                    Beweis.
                  </b>
                  {" "}
                  Die Idee ist, dass wir jedes \([0,k]\) als Vereinigung
                  von wenigen Binärintervallen schreiben können, zum Beispiel
                  $$\begin&#123;align*&#125;
                  [0,9]&amp;= [0,7] \cup [8,9] \ , \\
                  [0,12]&amp;= [0,7] \cup [8,11] \cup [12] \ .
                  \end&#123;align*&#125;$$
                  Wie kann man das formalisieren?
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      1. Fall.
                    </b>
                    {" "}Wenn \(k\) die Form \(k = 2^d-1\) hat, dann ist
                    \([0,k]\) bereits ein Binärintervall; dies passiert, wenn
                    die Binärdarstellung von \(k\) die Form \(k = (1^b)_2 \) hat (wobei \(b=0\)
                    sein kann, in welchem Fall \(k=0\) ist).
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        2. Fall.
                      </b>
                      {" "}Wenn \(k\) nicht die Form \(k = 2^d-1\) hat,
                      dann hat die Binärdarstellung von \(k\) nicht die Form \(1^b\); sie
                      enthält also auch nicht-führende Nullen (beachten Sie, dass \((0111)_2\) und \((111)_2\)
                      die
                      gleiche natürliche Zahl darstellen, nämlich 7).
                      Die Zahl \(k\) hat also die Form \(k = (\alpha 1 0^a 1^b)_2\) für \(a \geq 1\) und \(b
                      \geq
                      0\).
                      Definieren
                      wir \(l := (\alpha 0 1^a 1^b)_2 \). Dann gilt
                      \(l+1 = (\alpha 1 0^a 0^b)_2\). Es gilt also
                      $$\begin&#123;align*&#125;
                      [l+1, k] = [(\alpha 1 0^a 0^b)_2, (\alpha 1 0^a 1^b)_2] = [\alpha 1 0^a *^b] \ ,
                      \end&#123;align*&#125;$$
                      <Paragraph>
                        es handelt sich bei $[l+1,k]$ also um ein Binärintervall.
                        Eine äquivalente Definition von
                        \(l\) wäre: das kleinste \(l\), so dass \([l+1,k]\) ein Binärintervall ist.
                        Wir zerlegen nun
                        $[0,k] = [0,l] \cup [k+1,l]$ und berechnen \(pg_&#123;[0,k]&#125;\) so:
                      </Paragraph>
                      <figure>
                        <img
                          style="height:5em"
                          src="../img/circuits/pg0k.svg"
                          loading="lazy" />
                      </figure>
                      Der Wert \(pg_&#123;[l+1,k]&#125;\) ist bereits ein Binärintervall, kann also
                      direkt aus dem vorherigen Schaltkreis abgelesen werden; der andere
                      Input, \(pg_&#123;[0,l]&#125;\), muss rekursiv berechnet werden. Beachten Sie,
                      dass \( l = (\alpha 0 1^a 1^b)_2) \) gilt, die Anzahl der schließenden 1en in der
                      Binärdarstellung
                      also von \(b\) auf \(a+b \geq b+1\) gewachsen ist. Hier ist ein Beispiel
                      für \(n = 32, k = 28\), in Dezimal- und Binärdarstellung:
                      $$\begin&#123;align*&#125;
                      [0,28]&amp;= [0,15] \cup [16,23] \cup [24,27] \cup [28] \\
                      [00000, 11100]&amp;= [00000,01111] \cup [10000,10111] \cup [11000, 11011] \cup [11100] \ .
                      \end&#123;align*&#125;$$
                      Beachten wir die Folge \(28, 27, 23, 15\), also immer die Endpunkte der betreffenden
                      Intervalle; wir haben gesehen, dass die Anzahl der schließenden 1en von Element zu Element
                      in dieser Folge strikt zunimmt (im Allgemeinen
                      folgt auf Element \(k=(\alpha 1 0^a 1^b)_2)\) das Element \(l := (\alpha 0 1^a 1^b)_2 \).
                      Die Anzahl schließender 1en ist mindestens 0 (trivialierweise) und höchstens \(d\);
                      ein genauerer Blick zeigt, dass sie sogar höchstens \(d-1\) ist: wäre sie genau \(d\),
                      dann hätten wir es mit der Zahl \( (1^d)_2 = 2^d-1 \geq n-1 \) zu tun; da aber
                      die Folge der Zahlen{" "}
                      <i>
                        abnimmt
                      </i>
                      , müsste bereits \(k = 2^d-1\) gelten, und wir
                      wären in Fall 1, bzw. bereits fertig, weil \([0,k]\) bereits in Binärintervall wäre.
                      Der Wert von \(b\), der Anzahl schließender 1en, kann also höchstens
                      \(d-1\) mal zunehmen, und somit brauchen wir höchstens
                      \(d-1\) viele \(pg\)-Gates. Das Maximum wird erreicht, wenn \(k = (1...10)_2 \):
                      <figure>
                        <img
                          style="height:18em"
                          src="../img/circuits/pg-0-30.svg"
                          loading="lazy" />
                      </figure>
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Tiefe.
                      </b>
                      {" "}Jedes \(pg\)-Gate hat Tiefe 2,
                      und somit erreichen \(d-1\) solche Gates hintereinander
                      zusammen eine Tiefe von \(2 (d-1) = 2 \ceil&#123;\log_2 n&#125; - 2\).{" "}
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Größe.
                      </b>
                      {" "}Zählen wir die Anzahl von \(pg\)-Gates in unserem
                      Schaltkreis. Wir haben bereits gesehen, dass die Berechnung von \(g_&#123;[0,k]&#125;\) höchstens
                      \(d-1\) viele \(pg\)-Gates braucht. Es scheint also, als bräuchten wir für alle \(n\)
                      Werte
                      von \(k\) insgesamt \((d-1)n = \Theta(n \log n) \) viele. Wir könnten vielleicht noch
                      eine
                      genauere Schranke beweisen, weil nicht jedes \(k\) den Wert \(d-1\) erreicht, allerdings
                      würde auch eine genauere Rechnung \(\Theta(n \log n) \)) ergeben; das ist nicht
                      schlecht,
                      allerdings asymptotisch deutlich schlechter als der Ripple-Through-Addierer, und eben
                      auch nicht das, was wir im Lemma behaupten.{" "}
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    Nein, es ist in der Tat viel einfacher. Schauen Sie, wir berechnen oben
                    zum Beispiel \(pg_&#123;[0,29]&#125;\), in dem wir
                    \(pg_&#123;[28,29]&#125;\) (was bereits als Input bereitgestellt wird, weil \([28,29]\) ein
                    Binärintervall ist)
                    mit \(pg_&#123;[0,27]&#125;\) kombinieren.
                    Nun muss aber \(k=29\) nicht für \(pg_&#123;[0,27]&#125;\) "bezahlen", weil wir es für
                    \(k = 27\) eh berechnen müssen! In anderen Worten, jedes
                    \(pg_&#123;[0, l]&#125;\) ist ja nicht nur Zwischenergebnis, sondern selbst Output-Gate, und
                    somit ist die Anzahl der \(pg\)-Gates gleich der Anzahl der Output-Gates, nämlich genau
                    \(n\).
                    Sogar weniger, weil wir gar kein Gate brauchen, wenn \([0,k]\) bereits ein Binärinterval
                    ist.
                    Hier ist die Konstruktion für \(n=16\):
                    <figure>
                      <img
                        style="height:20em"
                        src="../img/circuits/pg-prefices-16.svg"
                        loading="lazy" />
                    </figure>
                  </Paragraph>
                  <Paragraph>
                    Wir benötigen also (weniger als) \(n\) viele \(pg\)-Gates; jedes davon
                    besteht wiederum aus 4 Basis-Gates \(\wedge, \vee\), und somit
                    brauchen wir maximal \(4n\) Gates. Wenn wir ganz genau hinsehen,
                    können wir es mit \(2n\) Gates schaffen: da \(c_&#123;k+1&#125; = g_&#123;[0,k]&#125;\),
                    brauchen wir ja \(p_&#123;[0,k]&#125;\) gar nicht. Auch, um
                    \(g_&#123;[0,k]&#125;\) aus \(pg_&#123;[0,l]&#125;\) und \(pg_&#123;[l+1,k]&#125;]\) zu berechnen,
                    brauchen wir \(p_&#123;[0,l]&#125;\) nicht:
                    <figure>
                      <img
                        style="height:15em"
                        src="../img/circuits/pg-gadget-no-need-p.svg"
                        loading="lazy" />
                    </figure>
                    Es reichen also in der Tat \(2n\) Basis-Gates aus.{" "}
                    <span class="qed">
                      \(\square\)
                    </span>
                  </Paragraph>
                </div>
                <Paragraph>
                  Wir kombinieren wir nun die beiden Lemmas und erhalten einen Schaltkreis der Tiefe \( 4
                  \ceil &#123;
                  \log_2 n &#125; - 1\) und
                  Größe \(8n - 4\), mit \(x_0, y_0, \dots, x_&#123;n-1&#125;, y_&#123;n-1&#125; \) als Inputvariablen und Carrys
                  \(c_1, \dots, c_n\) als Output-Variablen. Jetzt können wir schließlich
                  $$
                  s_i = x_i \oplus y_i \oplus c_i
                  $$
                  berechnen. Dafür brauchen wir noch einen XOR-Schaltkreis mit 3 Input-Gates. Meine
                  Konstruktion
                  hierfür
                  hat 12 Gates (davon 3 NOT-Gates) und Tiefe 4 (wenn wir die NOT-Gates nicht mitzählen.)
                  Insgesamt gibt das also
                  $$
                  12 n + 8n - 4 = 20n - 4
                  $$
                  Gates
                  und Tiefe
                  $$
                  4 \ceil &#123; \log_2 n &#125; + 3\ .
                  $$
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <span class="numbered-title">
                    Übungsaufgabe
                  </span>
                  Bauen Sie einen Schaltkreis für die Boolesche Funktion
                  "less-than":
                  $$\begin&#123;align*&#125;
                  LT : \&#123;0,1\&#125;^&#123;n&#125; \times \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125; \\
                  LT(\mathbf&#123;x&#125;, \mathbf&#123;y&#125;) =
                  \begin&#123;cases&#125;
                  1&amp;\textnormal&#123; wenn $(\mathbf&#123;x&#125;)_2 \lt (\mathbf&#123;y&#125;)_2$, &#125; \\
                  0&amp;\textnormal&#123; sonst.&#125;
                  \end&#123;cases&#125;
                  \end&#123;align*&#125;$$
                  der also \(\mathbf&#123;x&#125;, \mathbf&#123;y&#125;\) als \(n\)-stellige
                  Binärzahlen interpretiert und ausgibt, ob
                  die erste kleiner ist als die zweite.
                  <Paragraph>
                    Ihr Schaltkreis sollte im Idealfall Größe \(O(n)\) und
                    Tiefe \(O(\log_2 n)\) und Fan-in 2 haben.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;