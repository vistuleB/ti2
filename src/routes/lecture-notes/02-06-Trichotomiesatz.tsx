import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        count={14}
        title_gr="Der Trichotomiesat"
        title_en="Trichotomiesatz"
        number={2.6}
        path="/lecture-notes14.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="02-05-Schroeder-Bernstein">
            &lt;&lt; Kapitel 2.5
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="03-00-Computability-NaturalNumbers">
            Kapitel 3.0 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    2.6 Der Trichotomiesatz
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Rekapitulieren wir: für zwei Mengen $A$ und $B$ schreiben $A \leq B$,
                    wenn es eine injektive Funktion $f : A \rightarrow B$ gibt. Das $\leq$
                    schaut wie eine Partialordnung aus.
                  </Paragraph>
                </Paragraph>
                <ol>
                  <li>
                    Es ist reflexiv, weil $A \leq A$ gilt: Die Identität $&#123;\rm id&#125;_A: A
                    \rightarrow A$ ist injektiv.
                  </li>
                  <li>
                    Es ist transitiv, weil aus $A \leq B$ und $B \leq C$ folgt, dass $A
                    \leq C$: Wenn $f: A \rightarrow B$ und $g: B \rightarrow C$ injektiv
                    sind, dann ist $g \circ f: A \rightarrow C, a \mapsto g(f(a))$ auch
                    injektiv.
                  </li>
                  <li>
                    Es ist (so gut wie) antisymmetrisch, weil aus $A \leq B$ und $B \leq
                    A$ zwar nicht $A = B$ folgt, aber laut Schröder-Bernstein-Theorem
                    immerhin $A \approx B$.
                  </li>
                </ol>
                <Paragraph>
                  <Paragraph>
                    Wenn wir also equipotente Mengen als identifisch betrachten, dann ist
                    $\leq$ tatsächlich eine Partialordnung. Ist es eine totale Ordnung?
                    Gilt also immer $A \leq B$ oder $B \leq A$? Dies klingt
                    offensichtlich, ist es aber nicht. Aber wahr ist es, wenn auch nicht
                    ganz einfach zu beweisen.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Theorem
                      </span>
                      {" "}{" "}
                      <b>
                        (Trichotomiesatz der Mengenlehre).
                      </b>
                      Seien $A$ und
                      $B$ zwei Mengen. Dann gibt es eine injektive Funktion $f : A
                      \rightarrow B$ oder eine injektive Funktion $g : A \rightarrow B$.
                      Es gilt also immer genau einer der drei folgenden Fälle:
                    </Paragraph>
                  </Paragraph>
                  <ol>
                    <li>
                      $A \lt B$,
                    </li>
                    <li>
                      $A \approx B$,
                    </li>
                    <li>
                      $A \gt B$.
                    </li>
                  </ol>
                </div>
                <div class="well container">
                  <Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        (Unvollständiger) Beweis.
                      </b>
                      {" "}
                      Will man ein Objekt mit gewissen Eigenschaften (hier: Funktion,
                      injektiv) konstruieren, so lohnt es sich oft, die gestellten
                      Bedingungen zu relaxieren und sich langsam zu einer "richtigen"
                      Lösung hinzutasten.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wir müssen zuerst uns in Erinnerung rufen, was eine
                      {" "}
                      <i>
                        Funktion
                      </i>
                      formal ist. $A \times B := \&#123; (a,b) \ | \ a \in A,
                      b \in B\&#125;$, die Menge aller Paare, heißt das
                      {" "}
                      <i>
                        cartesische Produkt
                      </i>
                      . Eine{" "}
                      <i>
                        Relation
                      </i>
                      ist eine
                      Teilmenge $R \subseteq A \times B$.
                    </Paragraph>
                  </Paragraph>
                  <div class="well container-fluid subtheorem">
                    <Paragraph>
                      <Paragraph>
                        <span class="numbered-title">
                          Definition.
                        </span>
                        Eine Relation $R
                        \subseteq A \times B$ heißt
                      </Paragraph>
                    </Paragraph>
                    <ul>
                      <li>
                        {" "}{" "}
                        <i>
                          Funktion
                        </i>
                        , wenn es für jedes $a \in A$ genau ein $b \in
                        B$ mit $(a,b) \in R$ gibt; wir schreiben dann üblicherweise $f$
                        statt $R$ und schreiben $f(a)$, um dieses $b$ zu benennen.
                      </li>
                      <li>
                        {" "}{" "}
                        <i>
                          Matching
                        </i>
                        , wenn es für jedes $a \in A$
                        {" "}
                        <i>
                          höchstens
                        </i>
                        ein $b \in B$ gibt mit $(a,b) \in R$ und
                        umgekehrt für jedes $b \in B$ höchstens ein $a \in A$ mit $(a,b)
                        \in R$.
                      </li>
                      <li>
                        Wenn $R$ ein Matching ist, dann{" "}
                        <i>
                          sättigt
                        </i>
                        $R$ die Menge
                        $A$, wenn es für{" "}
                        <i>
                          jedes
                        </i>
                        $a \in A$ ein $b \in B$ mit
                        $(a,b) \in R$ gibt; es{" "}
                        <i>
                          sättigt
                        </i>
                        $B$, wenn es für
                        {" "}
                        <i>
                          jedes
                        </i>
                        $b \in B$ ein $a \in A$ gibt mit $(a,b) \in R$.
                      </li>
                    </ul>
                  </div>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Wir beobachten: wenn $R$ ein Matching ist und die Menge $A$ sättigt,
                        dann ist $R$ eine injektive Funktion, und umgekehrt. Wenn $R$ ein
                        Matching ist und sowohl $A$ als auch $B$ sättigt, dann ist $R$ eine
                        bijektive Funktion.
                      </Paragraph>
                    </Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Wir betrachten nun die Menge $\mathcal&#123;M&#125;$ aller Matchings in $A
                        \times B$:
                      </Paragraph>
                    </Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    $$\begin&#123;align*&#125; \mathcal&#123;M&#125; := \&#123; R \subseteq A \times B \ | \ R
                    \textnormal&#123; ist ein Matching&#125;\&#125; \ . \end&#123;align*&#125;$$
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      $(\mathcal&#123;M&#125;, \subseteq)$ ist eine Partialordnung.
                    </Paragraph>
                  </Paragraph>
                  <div class="well container-fluid subtheorem">
                    <Paragraph>
                      <Paragraph>
                        <span class="numbered-title">
                          Beobachtung.
                        </span>
                        Wenn $R \in
                        \mathcal&#123;M&#125;$ ein maximales Element in der Partialordnung
                        $(\mathcal&#123;M&#125;, \subseteq)$ ist, dann sättigt es $A$ oder $B$ (oder
                        beide). Wenn es $A$ sättigt, dann ist es eine injektive Funktion
                        $A \rightarrow B$ und es gilt somit $A \leq B$. Wenn es $B$
                        sättigt, dann ist $R^&#123;-1&#125; := \&#123; (b,a) \ | \ (a,b) \in R\&#125;$ eine
                        injektive Funktion $B \rightarrow A$ und es gilt $B \leq A$.
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
                        Nehmen wir an, dass es weder $A$ noch $B$ sättigt. Dann gibt es
                        also ein $a \in A$, das mit keinem $b' \in B$ "gepaart" ist, und
                        auch ein $b \in B$, das mit keinem $a' \in A$ gepaart ist. Also
                        ist $R \cup \&#123;(a,b)\&#125;$ auch ein Matching, und $R$ ist nicht
                        maximal.
                      </Paragraph>
                    </Paragraph>
                    <span class="qed">
                      \(\square\)
                    </span>
                  </div>
                  <Paragraph>
                    <Paragraph>
                      Wir bekommen also unsere gewünschte injektive Funktion, solange wir
                      ein maximales Element in der Partialordnung $(\mathcal&#123;M&#125;,
                      \subseteq)$ vorweisen können. Aber Vorsicht: nicht jede
                      Partialordnung hat ein maximales Element! Ein Gegenbeispiel ist
                      $(\N, \leq)$. Es gibt immer größere natürliche Zahlen, aber kein
                      maximales Element. Die Gefahr ist also, dass es unendliche
                      aufsteigende Folgen $a
                      <i>
                        1 \lt a
                      </i>
                      2 \lt a_3 \t \dots$ geben kann, für
                      die man keine obere Schranke findet.
                    </Paragraph>
                  </Paragraph>
                  <div class="well container-fluid subtheorem">
                    <Paragraph>
                      <Paragraph>
                        <Paragraph>
                          <span class="numbered-title">
                            Definition.
                          </span>
                          Sei $(X, \preceq)$
                          eine Partialordnung und $S \subseteq X$ eine Menge. Ein Element $x
                          \in X$ ist eine{" "}
                          <i>
                            obere Schranke für $S$
                          </i>
                          wenn
                        </Paragraph>
                      </Paragraph>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      $$\begin&#123;align*&#125; s \leq x \quad \forall s \in S \end&#123;align*&#125;$$
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      <Paragraph>
                        gilt. Dabei ist unerheblich, ob die obere Schranke $x$ selbst in
                        $S$ ist oder nicht.
                      </Paragraph>
                    </Paragraph>
                  </div>
                  <Paragraph>
                    <Paragraph>
                      Die unendliche aufsteigende Folge $1,2,3,\dots$ hat
                      {" "}
                      <i>
                        keine obere Schranke
                      </i>
                      in $\N$. Somit gibt es auch kein
                      maximales Element. Was nun mit $(\mathcal&#123;M&#125;, \subseteq)$? Wenn $M
                      <i>
                        1
                        \subseteq M
                      </i>
                      2 \subseteq M
                      <i>
                        3 \subseteq \dots$ eine unendliche Folge
                        von Matchings ist, dann können wir die doch alle zusammenwerfen:
                        $M
                      </i>
                      1 \cup M
                      <i>
                        2 \cup M
                      </i>
                      3 \cup \dots$ und erhalten ein (vielleicht)
                      größeres. Dies gilt nicht nur für unendliche Folgen, sondern ganz
                      allgemein für Ketten in dieser Partialordnung (also Mengen paarweise
                      vergleichbarer Elemente).
                    </Paragraph>
                  </Paragraph>
                  <div class="well container-fluid subtheorem">
                    <Paragraph>
                      <Paragraph>
                        <Paragraph>
                          <span class="numbered-title">
                            Beobachtung.
                          </span>
                          Sei $S \subseteq
                          \mathcal&#123;M&#125;$ eine Kette in $(\mathcal&#123;M&#125;, \subseteq)$, also eine
                          Menge von Matchings, so dass für alle $M
                          <i>
                            1, M
                          </i>
                          2 \in S$ gilt: $M
                          <i>
                            1
                            \subseteq M
                          </i>
                          2$ oder $M
                          <i>
                            2 \subseteq M
                          </i>
                          1$. Dann ist
                        </Paragraph>
                      </Paragraph>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      $$\begin&#123;align*&#125; \bigcup_&#123;M \in S&#125; M \end&#123;align*&#125;$$
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      <Paragraph>
                        selbst ein Matching.
                      </Paragraph>
                    </Paragraph>
                  </div>
                  <Paragraph>
                    <Paragraph>
                      Wir gehen nun wie folgt vor: wir starten mit einem beliebigen $M
                      <i>
                        0
                        \in \mathcal&#123;M&#125;$; solange dies nicht maximal ist, finden wir ein
                        größeres: $M
                      </i>
                      1 \supsetneq M
                      <i>
                        0$; und wieder und wieder. Dies ergibt
                        im schlimmsten Fall eine unendliche Folge $M
                      </i>
                      0 \subsetneq M
                      <i>
                        1
                        \subsetneq ...$ Wir bilden nun $M'
                      </i>
                      0 := M
                      <i>
                        0 \cup M
                      </i>
                      1 \cup \dots$,
                      was wiederum ein Matching ist. Nun ist aber eventuell $M'
                      <i>
                        0$ wieder
                        nicht maximal, und wir finden $M'
                      </i>
                      1 \supsetneq M'_0$ und so weiter.
                      Wir müssen also diesen "Schritt zur Unendlichkeit" wiederholen,
                      selbst wiederum unendlich mal. Endet das irgendwann? Die Antwort ist
                      "ja", allerdings brauchen wir dafür ein großes Geschütz:
                    </Paragraph>
                  </Paragraph>
                  <div class="well container-fluid subtheorem">
                    <Paragraph>
                      <Paragraph>
                        <span class="numbered-title">
                          Zornsches Lemma.
                        </span>
                        Sei $(X,
                        \preceq)$ eine Partialordnung. Wenn jede Kette $S \subseteq X$
                        eine obere Schranke $x \in X$ hat, dann enthält $X$ mindestens ein
                        maximales Element.
                      </Paragraph>
                    </Paragraph>
                  </div>
                  <Paragraph>
                    <Paragraph>
                      Wir sind nun fertig! Wir können das Zornsche Lemma auf
                      $(\mathcal&#123;M&#125;, \subseteq)$ anwenden und erhalten ein maximales
                      Matching. Dies sättigt $A$ oder $B$ und gibt uns somit eine
                      injektive Funktion $A \rightarrow B$ oder $B \rightarrow A$.
                    </Paragraph>
                    <span class="qed">
                      \(\square\)
                    </span>
                  </Paragraph>
                </div>
                <h3>
                  <Paragraph>
                    Zornsches Lemma, Auswahlaxiom und die axiomatische Mengenlehre
                  </Paragraph>
                </h3>
                <Paragraph>
                  <Paragraph>
                    Glauben Sie das, was das Zornsche Lemma besagt? Bei unendlichen Mengen
                    verlässt und leider schnell die Intuition, oder schlimmer: sie wird
                    trügerisch. Gegen Ende des 19. Jahrhunderts tauchten in der
                    Mathematik, insbesondere in der Analysis und Geometrie, mehr und mehr
                    "paradoxe" Ergebnisse auf, die irgendwie "nicht wahr sein konnten".
                    Man begann, an der mathematischen Intuition zu zweifeln und wollte ein
                    genaues Regelwerk definieren, welche Rechen- und Beweisschritte in der
                    Mathematik erlaubt seien. In moderner Sprache: wann wollte die gesamte
                    Mathematik{" "}
                    <i>
                      axiomatisieren
                    </i>
                    . Treibende Kraft hinter diesem
                    Vorhaben war der deutsche Mathematiker
                  </Paragraph>
                  <Paragraph>
                    <a href="https://de.wikipedia.org/wiki/David_Hilbert">
                      David Hilbert
                    </a>
                    , und somit ist es auch als
                  </Paragraph>
                  <Paragraph>
                    <a href="https://de.wikipedia.org/wiki/Hilbertprogramm">
                      Hilbertprogramm
                    </a>
                    bekannt. Das Bestreben, mathematisches Beweisen und somit auch Rechnen
                    zu mechanisieren, trug maßgeblich zur Entwicklung der Informatik und
                    des Computers bei.
                  </Paragraph>
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;