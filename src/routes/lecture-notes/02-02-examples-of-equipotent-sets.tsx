import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        count={10}
        title_gr="Beispiele abzählbar unendlicher Mengen"
        title_en="examples of equipotent sets"
        number={2.2}
        path="/lecture-notes10.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="02-01-comparing-sizes">
            &lt;&lt; Kapitel 2.1
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="02-03-sets-like-R">
            Kapitel 2.3 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    2.2 Beispiele abzählbar unendlicher Mengen
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Noch bevor wir im letzten Teilkapitel den Begriff der
                    Gleichmächtigkeit definiert haben, haben wir zwei Beispiele gesehen:
                    $\N^+ \approx \N \approx \Z$. Alle Mengen sind gleichmächtig. In
                    diesem Teilkapitel werden wir unintuitivere Beispiele sehen: $\N
                    \approx \Q$. Dies scheint absurd! $\N$ und $\Z$ liegen ja schön der
                    Reihe nach sortiert, sodass sich eine Bijektion durch eine einfach
                    Umordnung erreichen ließ. Die Elemente der Menge $\Q$ aber liegen ja
                    nicht säuberlich getrennt, sondern ganz dicht nebeneinander. Aber eins
                    nach dem anderen.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span
                        data-label-title="Theorem"
                        id="theorem-N-N^2"
                        class="numbered-title">
                        Theorem
                      </span>
                      Die Mengen $\N$ und $\N^2$ sind gleichmächtig. Mit $\N^2$ (oder auch
                      $\N \times \N$) bezeichnen wir hier das cartesische Produkt von $\N$
                      mit sich selbst: die Menge aller{" "}
                      <i>
                        Paare
                      </i>
                      $(a,b)$ von
                      natürlichen Zahlen.
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="width: 60%"
                      src="../img/infinite-sets/N.svg" />
                    <br />
                    <div>
                      Die Menge $\N$ bzw. ein Teil davon.
                    </div>
                  </figure>
                  <br />
                  <figure>
                    <img
                      style="width: 60%"
                      src="../img/infinite-sets/N-times-N.svg" />
                    <br />
                    <div>
                      Die Menge $\N \times \N$ bzw. ein Teil davon.
                    </div>
                  </figure>
                </div>
                <div class="well container">
                  <Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Beweis.
                      </b>
                      {" "}
                      Wir skizzieren eine Bijektion $f : \N \times \N \rightarrow \N$,
                      indem wir für jeden Punkt $(x,y) \in \N \times \N$ angeben, auf
                      welche natürliche Zahl er abgebildet werden soll:
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="width: 60%"
                      src="../img/infinite-sets/N-times-N-to-N.svg" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Wir zerlegen $\N \times \N$ also in fallende Diagonale und gehen
                      jede Diagonale von rechts unten nach links oben durch. Dadurch
                      können wir die zweidimensionale Gestalt von $\N \times \N$
                      "aufdröseln" und dem eindimensionalen $\N$ zuordnen.
                    </Paragraph>
                    <span class="qed">
                      \(\square\)
                    </span>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Übungsaufgabe
                      </span>
                      Finden Sie eine explizite Formel für die Funktion $f : \N \times \N$
                      aus dem obigen Theorem. Achten Sie erst einmal auf die Werte von
                      $f(x,0)$: $f(3,0) = 6$ und $f(4,0) = 10$ beispielsweise. Erkennen
                      Sie die blauen Zahlen auf der $x$-Achse? Haben Sie eine Formel für
                      sie? Finden Sie eine. Dann erweitern Sie die Formel, so dass sie für
                      alle Werte von $(x,y) \in \N \times \N$ funktioniert!
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Übungsaufgabe
                      </span>
                      Zeigen Sie $\Z \times \Z \approx \Z$, indem Sie eine ähnliche
                      Aufdröselung finden, jetzt aber mit negativen Zahlen.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <Paragraph>
                      <span
                        data-label-title="Übungsaufgabe"
                        id="exercise-cartesian-product"
                        class="numbered-title">
                        Übungsaufgabe
                      </span>
                      Zeigen Sie ganz allgemein: wenn $A \approx A'$ und $B \approx B'$,
                      dann gilt auch $A \times B \approx A' \times B'$.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Übungsaufgabe
                      </span>
                      Zeigen Sie, dass $\N \times \N \times \N \approx \N$ gilt und ganz
                      allgemein: $\N^k \approx \N$.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        <span class="numbered-title">
                          Übungsaufgabe
                        </span>
                        Sei $\N^*$ die Menge aller endlichen Folgen natürlicher Zahlen, also
                      </Paragraph>
                    </Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    $$\begin&#123;align*&#125; \N^* := \&#123;\epsilon\&#125; \cup \N \cup \N^2 \cup \N^3 \cup
                    \dots \ , \end&#123;align*&#125;$$
                  </Paragraph>
                  <Paragraph>
                    {" "}wobei $\epsilon$ die leere Folge (mit 0
                    Gliedern) bezeichnet. Zeigen Sie $\N^* \approx \N$.
                  </Paragraph>
                </div>
                <h2>
                  <Paragraph>
                    Rationale Zahlen
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Ich will Sie nun davon überzeugen, dass $\Q \approx \N$ ist, dass es
                    also "gleich viele rationale wie natürliche Zahlen" gibt. Ich beginne
                    mit etwas Einfacherem:
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Beobachtung.
                      </span>
                      Es gibt eine
                      injektive Funktion $f : \Q \rightarrow \N$.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          Beweis.
                        </b>
                        {" "}
                        Falls Sie es vergessen haben: eine Funktion $f: A \rightarrow B$
                        heißt injektiv, wenn für alle verschiedenen $a, a' \in A$ auch $f(a)
                        \ne f(a')$ gilt. Wenn $f$ also "kollisionsfrei" ist.
                      </Paragraph>
                    </Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Sei $q \in \Q$ eine rationale Zahl. Wir können $q$ als gekürzten
                        Bruch schreiben, also
                      </Paragraph>
                    </Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    $$\begin&#123;align*&#125; q = \frac&#123;a&#125;&#123;b&#125; \end&#123;align*&#125;$$
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      mit $a \in \Z$ und $b \in \N^+$ und $\gcd(a,b) = 1$. Mit $\gcd(a,b)$
                      bezeichnen wir den größten gemeinsamen Teiler (
                      <i>
                        greatest common divisor
                      </i>
                      ) von $a$ und $b$. Wir definieren nun also $f
                      <i>
                        1(q) := (a,b) \in \Z
                        \times \N$. Dies ist injektiv: zwei verschiedene rationale Zahlen
                        $q$ und $q'$ haben verschiedene Darstellung als gekürzter Bruch, und
                        somit gilt auch $f
                      </i>
                      1(q) \ne f_1(q')$.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wir haben nun also eine Injektion $f_1 : \Q \rightarrow \Z \times
                      \N$. Mit
                    </Paragraph>
                    <Paragraph>
                      <span
                        data-ref="exercise-cartesian-product"
                        class="reference" />
                      und{" "}
                      <span
                        data-ref="theorem-N-N^2"
                        class="reference" />
                      gilt $\Z \times \N \approx \N \times \N \approx \N$, und somit gibt
                      es eine Bijektion $f
                      <i>
                        2 : \Z \times \N \rightarrow \N$. Die
                        Verknüpfung $f := f
                      </i>
                      2 \circ f_1 : \Q \rightarrow \N$ ist nun die
                      gewünschte injektive Funktion $f$ von $\$Q$ nach $\N$.
                    </Paragraph>
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  <Paragraph>
                    Dies ist leider keine Bijektion: das Paar $(6,9)$ beispielsweise wird
                    nie vorkommen, weil $\frac&#123;6&#125;&#123;9&#125;$ nicht gekürzt ist.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Beobachtung:
                      </span>
                      Es gibt eine
                      injektive Funktion $g: \N \rightarrow \Q$.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          Beweis.
                        </b>
                        Dies ist ganz einach: da $\N \subseteq \Q$
                        gilt, können wir jedes $n$ einfach bei sich belassen. Die Funktion
                      </Paragraph>
                    </Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    $$\begin&#123;align*&#125; g : \N&amp;\rightarrow \Q \\ n&amp;\mapsto n \end&#123;align*&#125;$$
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      ist die gewünschte Injektion. Man nennt so eine Funktion auch die
                      {" "}
                      <i>
                        Einbettung
                      </i>
                      von $\N$ in $\Q$.
                    </Paragraph>
                    <span class="qed">
                      \(\square\)
                    </span>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Wir sind nun also in der sonderbaren Situation, dass wir eine
                    injektive Funktion $f : \Q \rightarrow \N$ haben, die aber nicht alle
                    $\N$ ausfüllt, also nicht{" "}
                    <i>
                      surjektiv
                    </i>
                    ist. Gleichzeitig haben
                    wir $g : \N \rightarrow \Q$, die injektiv ist aber auch nicht
                    surjektiv. Bei $f$ bleiben also manche natürlichen Zahlen ungenutzt,
                    bei $g$ bleiben rationale Zahlen ungenutzt. Können wir $f$ und $g$
                    irgendwie kombinieren, um eine bijektive Funktion zu erschaffen? Die
                    Antwort lautet{" "}
                    <i>
                      ja, das geht immer
                    </i>
                    , ist nicht ganz trivial zu
                    beweisen, heißt
                  </Paragraph>
                  <Paragraph>
                    <a href="https://en.wikipedia.org/wiki/Schröder–Bernstein_theorem">
                      Schröder-Bernstein-Theorem
                    </a>
                    , und wir werden das im Teilkapitel{" "}
                    <a href="...">
                      ...
                    </a>
                    beweisen.
                    Vorerst behelfen wir uns mit ad-hoc-Methoden.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Theorem
                      </span>
                      Es gilt $\Q \approx \N$.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Beweis.
                      </b>
                      {" "}
                      Wir definieren eine Bijektion $f: \N \rightarrow \Q$, indem wir die
                      Beweisidee von
                    </Paragraph>
                    <Paragraph>
                      <span
                        data-ref="theorem-N-N^2"
                        class="reference" />
                      wiederholen. Wir zeichnen $\Z \times \N^+$ schematisch, löschen aber
                      die Paare $(a,b)$, die nicht einem gekürzten Bruch entsprechen.
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="width: 90%"
                      src="../img/infinite-sets/Z-times-N-removed.svg" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Die Punkte sind die Elemente von $\Z \times \N^+$. Die schwarzen
                      Punkte sind jene Punkte $(x,y)$ mit $\gcd(x,y)=1$. Diese stehen nun
                      in Bijektion mit den rationalen Zahlen. Die entsprechenden
                      rationalen Zahlen habe ich daneben geschrieben - die negativen habe
                      ich aus Gründen der Übersichtlichkeit weggelassen. Sie befinden sich
                      spiegelverkehrt auf der linken Seite. Wir müssen nun eine Aufzählung
                      der schwarzen Punkte finden, also eine Bijektion von $\N$ in die
                      Menge der schwarzen Punkte:
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="width: 90%"
                      src="../img/infinite-sets/N-to-Q.svg" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Das funktioniert natürlich: wir überspringen einfach die gelöschten
                      Punkte. Wir können allerdings nicht bequem eine geschlossene Formel
                      dafür angeben. Auf dem "fünften Hütchen", das von $\frac&#123;4&#125;&#123;1&#125;$ nach
                      $\frac&#123;-4&#125;&#123;1&#125;$ läuft, sind zum Beispiel alle Punkte bis auf $(0,5)$
                      schwarz, was daran liegt, dass $5$ eine Primzahl ist und somit alle
                      $(x,y)$ mit $x+y = 5$ und $x, y \geq 1$ teilerfremd sind. Streng
                      genommen müssten wir uns davon überzeugen, dass unendlich viele
                      schwarze Punkte übrigbleiben. Das ist aber einfach, weil alle Punkte
                      der Form $(x,1)$ der Zahl $\frac&#123;x&#125;&#123;1&#125;$ entsprechen, und das ist ja
                      ein gekürzter Bruch.
                      <span class="qed">
                        \(\square\)
                      </span>
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <h2>
                    <Paragraph>
                      Endliche Strings
                    </Paragraph>
                  </h2>
                  Erinnern wir uns an $\&#123;0,1\&#125;^*$, die Menge aller endlichen Bitstrings.
                  Die Menge ist ganz klar unendlich, weil sie zum Beispiel $1, 11, 111,
                  1111, \dots$ enthält. Ist sie{" "}
                  <i>
                    abzählbar
                  </i>
                  unendlich?
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Theorem
                      </span>
                      Es gilt $\&#123;0,1\&#125;^*
                      \approx \N$.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          Beweis.
                        </b>
                        Hier ist eine Idee: wir interpretieren den
                        Bitstring $a
                        <i>
                          1 a
                        </i>
                        2 \dots a_n$ als $n$-stellige Binärzahl, also
                      </Paragraph>
                    </Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    $$\begin&#123;align*&#125; f(a_1 a_2 \dots a_n) := \sum_&#123;i=1&#125;^n a_i 2^&#123;n-i&#125; \ .
                    \end&#123;align*&#125;$$
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Leider geht das schief, weil $0$, $00$, $000$ etc. alle auf $0$
                        abgebildet werden. Ebenso $1$, $01$, $001$ und so weiter. Wir
                        könnten uns behelfen und dem String eine 1 voranstellen, also
                        beispielsweise
                      </Paragraph>
                    </Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    $$\begin&#123;align*&#125; 0011 \mapsto 10011 \mapsto (10011)_2 = 16 + 2 + 1 = 19
                    \ . \end&#123;align*&#125;$$
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Formal also
                      </Paragraph>
                    </Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    $$\begin&#123;align*&#125; f : \&#123;0,1\&#125;^*&amp;\rightarrow \N \\ a_1 a_2 \dots a_n&
                    \mapsto 2^n + \sum_&#123;i=1&#125;^n a_i 2^&#123;n-i&#125; \ . \end&#123;align*&#125;$$
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Eine äquivalente Interpretation: wir sortieren erst einmal die
                        Bitstrings nach ihrer Länge. Dann gehen wir $\&#123;0,1\&#125;^n$
                        lexicographisch durch, also von $00\dots0$ bis $11\dots$. Diese
                        Reihenfolge durchläuft ganz $\&#123;0,1\&#125;^*$ und ordnet jedem Bitstring
                        eine natürliche Zahl zu. Also:
                      </Paragraph>
                    </Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    $$\begin&#123;align*&#125; \begin&#123;array&#125;&#123;c|c&#125; \epsilon&amp;0&amp;1&amp;00&amp;01&amp;10&amp;11
                    &amp;000&amp;001&amp;010&amp;011&amp;100&amp;101&amp;110&amp;111 \\ \hline 1&amp;2&amp;3&
                    4&amp;5&amp;6&amp;7&amp;8&amp;9&amp;10&amp;11&amp;12&amp;13&amp;14&amp;15 \end&#123;array&#125;
                    \end&#123;align*&#125;$$
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Das haut nicht ganz hin, weil die $0$ nie drankommt. In der Tat
                        stellt die obige Tabelle eine Bijektion $\&#123;0,1\&#125;^* \rightarrow \N^+$
                        dar. Dies ist leicht korrigiert, indem wir 1 abziehen: die Funktion
                      </Paragraph>
                    </Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    $$\begin&#123;align*&#125; g : \&#123;0,1\&#125;^*&amp;\rightarrow \N \\ a_1 a_2 \dots a_n&
                    \mapsto 2^n - 1 + \sum_&#123;i=1&#125;^n a_i 2^&#123;n-i&#125; \ . \end&#123;align*&#125;$$
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      ist eine Bijektion von $\&#123;0,1\&#125;^*$ nach $\N$.
                    </Paragraph>
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  <Paragraph>
                    Geht das auch mit mehr als zwei Symbolen?
                  </Paragraph>
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Übungsaufgabe
                      </span>
                      Definieren Sie eine Bijektion von $\&#123;0,1,2,3\&#125;$^* nach $\N$.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Weil das "Alphabet" $\&#123;0,1,2,3\&#125;$ die Größe $4 = 2^2$ hat, können
                      Sie sich mit einem kleinen Taschenspielertrick behelfen. Schwieriger
                      wird es mit $\&#123;0,1,2\&#125;^
                      <b>
                        $. Zeigen Sie, dass $\&#123;0,1,2\&#125;^
                      </b>
                      {" "}\approx \N$
                      gilt.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Zeigen Sie ganz allgemein: wenn $\Sigma$ eine endliche Menge ist,
                      dann gilt $\Sigma^* \approx \N$.
                    </Paragraph>
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