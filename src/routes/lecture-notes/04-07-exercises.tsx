import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        count={27}
        title_gr="Übungsaufgaben"
        title_en="exercises"
        number={4.7}
        path="/lecture-notes27.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="04-06-limitations-of-regular-grammars">
            &lt;&lt; Kapitel 4.6
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="05-00-context-free-languages">
            Kapitel 5.0 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    4.7 Übungsaufgaben
                  </span>
                </h1>
                <h3>
                  Reguläre Sprachen und primitive Rekursion
                </h3>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Sei $\Sigma = \&#123;\sigma
                    <i>
                      1, \sigma
                    </i>
                    2, \dots, \sigma
                    <i>
                      k\&#125;$ ein endliches Alphabet. Wir
                      können jedes Zeichen $\sigma
                    </i>
                    i \in \Sigma$ als
                    natürliche Zahl $i$ codieren. Ein Wort $\alpha \in \Sigma^
                    <b>
                      $
                      wird somit zu einer Folge $(a
                      <i>
                        1, a
                      </i>
                      2, \dots, a_n) \in \N^
                    </b>
                    $, was
                    wir wiederum mit den Methoden aus
                    <a href="02-02-examples-of-equipotent-sets.html">
                      Kapitel 2.2
                    </a>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;als{" "}
                    <i>
                      eine
                    </i>
                    {" "}natürliche Zahl $\bar&#123;\alpha&#125;$ codieren können.
                    Mittels dieser Codierung wird eine Sprache $L \subseteq \Sigma^*$
                    zu einer Funktion
                  </Paragraph>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;$$\begin&#123;align*&#125;
                  f_L : \N&amp;\rightarrow \&#123;0,1\&#125; \\
                  a&amp;\mapsto
                  \begin&#123;cases&#125;
                  1&amp;\textnormal&#123; if $\exists \alpha \in L$ with $\bar&#123;\alpha&#125; = a$&#125; \\
                  0&amp;\textnormal&#123; else.&#125;
                  \end&#123;cases&#125;
                  \end&#123;align*&#125;$$
                  <Paragraph>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Sei $L$ eine reguläre Sprache. Zeigen Sie, dass $f_L$ primitiv rekursiv ist!
                  </Paragraph>
                </div>
                <h3>
                  Reguläre Sprachen und Schaltkreise
                </h3>
                <Paragraph>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Wir können jedes Zeichen $\sigma \in \Sigma$ als
                  Bitstring $x
                  <i>
                    &#123;\sigma&#125; \in \cube^k$ codieren, mit $k = \ceil&#123;\log
                  </i>
                  2|\Sigma|&#125;$, und
                  damit jedes $\alpha = (a
                  <i>
                    1, \dots, a
                  </i>
                  n) \in \Sigma^
                  <b>
                    $ als $x
                    <i>
                      a \in \cube^
                      <b>
                        $ mit $nk$ Bits.
                        Smit wird jede Sprache $L \subseteq \Sigma^
                      </b>
                      $ zu einer Funktion
                      $f
                    </i>
                    L : \cube^
                  </b>
                  {" "}\rightarrow \cube$ mittels
                </Paragraph>
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;$$\begin&#123;align*&#125;
                f_L : \cube^*&amp;\rightarrow \cube \\
                y&amp;\mapsto
                \begin&#123;cases&#125;
                1&amp;\textnormal&#123;if $\exists \alpha \in L: x_\alpha = y$&#125; \\
                0&amp;\textnormal&#123;else.&#125;
                \end&#123;cases&#125;
                \end&#123;align*&#125;$$
                <Paragraph>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Für festes $n$ definieren wir $f
                  <i>
                    L^n : \cube^n \rightarrow \cube$ als die
                    Restriktion von $f
                  </i>
                  L$ auf $\cube$, also die Funktion, die nur $n$-Bit-Strings
                  als Input akzeptiert.
                </Paragraph>
                <Paragraph>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Zeigen Sie: wenn $L \subseteq \Sigma^*$ regulär ist, dann gibt es für
                  jedes $n$ einen Schaltkreis $C$ mit $O(n)$ Gates, der $f_L$ berechnet.
                </Paragraph>
              </div>
              <div class="well well-lg numbered-exercise container">
                <Paragraph>
                  <span class="numbered-title">
                    Übungsaufgabe
                  </span>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Verbessern Sie die obige Konstruktion: Ihr Schaltkreis $C$ sollte nun
                  Tiefe $O(\log(n))$ haben und vorzugsweise immer noch $O(n)$ Gates.
                </Paragraph>
              </div>
              <div class="well well-lg numbered-exercise container">
                <Paragraph>
                  <span class="numbered-title">
                    Übungsaufgabe
                  </span>
                  &ensp;
                  <b>
                    (Challenge).
                  </b>
                  {" "}Betrachten wir eine Variante des endlichen Automaten, bei der
                  der Automat{" "}
                  <i>
                    zurückspulen
                  </i>
                  {" "}kann. Der Automat hat also
                  einen "Lesekopf", mit dem er auf einem Zeichen des Eingabewortes steht
                  (anfangs auf dem ersten). In jedem Schritt kann er nach rechts oder links
                  wechseln. Es gibt zwei spezielle Zeichen, die markieren, wo das
                  Wort aufhört: $\lt$ und $\gt$. Die Zustandsübergangsfunktion ist also
                </Paragraph>
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;$$\begin&#123;align*&#125;
                \delta: Q \times (\Sigma \cup \&#123;\lt, \gt\&#125;) \rightarrow Q \times \&#123;L, R\&#125; \ .
                \end&#123;align*&#125;$$
                <Paragraph>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Wenn z.B. $\delta(q, x) = (r, L)$ ist, dann heißt das:{" "}
                  <i>
                    wenn Du im
                    Zustand $q$ bist und der Lesekopf ein $x$ liest, dann wechsle in den
                    Zustand $r$ und gehe nach links.
                    {" "}
                  </i>
                  {" "}{" "}
                </Paragraph>
                <Paragraph>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Der Automat hat genau einen akzeptierenden und einen ablehnenden Zustand.
                  Wenn ein solcher Zustand erreicht wird, hält der Automat an und gibt
                  1 bzw. 0 aus.
                  Die von so einem Automaten $M$ akzeptierte Sprache $L(M)$ ist dann definiert als
                  die Menge aller Wörter $\alpha$, die $M$ in einen akzeptierenden
                  Zustand bringen. Beachten Sie, dass $M$ möglicherweise in eine Endlosschleife
                  geraten kann. In diesem Falle ist $\alpha${" "}
                  <i>
                    kein
                  </i>
                  {" "}Wort in $L(M)$.
                </Paragraph>
                <Paragraph>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Zeigen Sie, dass $L(M)$ eine reguläre Sprache ist. Dass man also aus $M$
                  einen neuen Automaten $M'$ bauen kann, der nur nach rechts laufen kann.
                </Paragraph>
              </div>
              <div class="well well-lg numbered-exercise container">
                <Paragraph>
                  <span class="numbered-title">
                    Übungsaufgabe
                  </span>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Sei $\Sigma = \&#123;1,2, \dots, k\&#125;$ und $L$ die Sprache aller
                  Wörter, in denen mindestens ein Zeichen fehlt, also
                </Paragraph>
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;$$\begin&#123;align*&#125;
                L = \bigcup_&#123;i=1&#125;^k (\Sigma \setminus \&#123;i\&#125;)^*
                \end&#123;align*&#125;$$
                <Paragraph>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Zeigen Sie, dass ein endlicher Automat für $L$ mindestens $2^k$ Zustände braucht.
                </Paragraph>
              </div>
              <div class="well well-lg numbered-exercise container">
                <Paragraph>
                  <span class="numbered-title">
                    Übungsaufgabe
                  </span>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Schreiben Sie eine reguläre Grammatik für $L$ mit höchstens $k+1$ Nichtterminalen.
                </Paragraph>
              </div>
              <div class="well well-lg numbered-exercise container">
                <Paragraph>
                  <span class="numbered-title">
                    Übungsaufgabe
                  </span>
                  &ensp;
                  <b>
                    (Challange.)
                  </b>
                  {" "}Sei $L$ die Sprache aus der vorherigen Aufgabe und
                  $\bar&#123;L&#125; = \Sigma^* \setminus L$ ihr Komplement. $\bar&#123;L&#125;$ ist also
                  die Sprache aller Wörter, in denen jedes Zeichen aus $\Sigma$ mindestens
                  einmal vorkommt.
                </Paragraph>
                <Paragraph>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Zeigen Sie, dass jede reguläre Grammatik für $\bar&#123;L&#125;$ mindestens $2^k$
                  Nichtterminale benötigt.
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