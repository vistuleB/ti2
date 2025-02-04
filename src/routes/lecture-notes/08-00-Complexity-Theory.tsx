import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter number={50}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="07-07-PCP-applications">
            <Paragraph>
              &lt;&lt; Kapitel 07.07
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="08-01-Time-hierarchy-theorem">
            <Paragraph>
              Kapitel 08.01 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    Complexity Theory
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Turingmaschinen erlauben uns, den Resourcenverbrauch einer Berechnung zu quantifizieren:
                    zum einen die{" "}
                    <em>
                      Zeit
                    </em>
                    , also die Anzahl der Schritte, die die Turingmaschine
                    durchführt, bis sie anhält; zum anderen der{" "}
                    <em>
                      Speicherplatz
                    </em>
                    , also die Anzahl
                    der Zellen auf dem Band (oder den Bändern), die im Verlauf der Berechnung beschrieben werden.
                    Beides sind Maße, die tatsächlich im echten Leben relevant sind. Turingmaschinen erlauben uns,
                    diese genau zu quantifizieren und die Zeitkomplexität und Speicherkomplexität eines Problems
                    zu untersuchen. In diesem Kapitel werden wir uns zum Großteil auf Zeitkomplexität beschränken.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Es gibt weitere Resourcen, die man mit Turingmaschinen nicht wirklich quantifizieren kann:
                  </Paragraph>
                </Paragraph>
                <ul>
                  <li>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        I/O-Komplexität.
                      </b>
                      {" "}
                      In echten Rechnern haben wir eine Hierarchie von
                      Speichermedien. Den extrem schnellen Prozessorcache; schnellen Cache; den vergleichsweise
                      langsamen
                      Hauptstpeicher (RAM); eventuell sogar einen externen Festplattenspeichern, der um
                      Größenordnungen langsamer ist.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Kommunikationskomplexität.
                      </b>
                      {" "}
                      Bei verteilten Anwendungen (Cloud Computing) ist
                      die limitierende Resource eventuell gar nicht die Rechenkapazität sondern das
                    </Paragraph>
                    <Paragraph>
                      <em>
                        Netzwerk
                      </em>
                      , über
                      das die Daten ausgetauscht werden.
                    </Paragraph>
                  </li>
                </ul>
                <Paragraph>
                  <Paragraph>
                    Also: Turingmaschinen sind zwar universell in dem Sinne, dass sie wohl alle physikalisch
                    realisierbaren
                    Rechnermodelle simulieren können (ich sage{" "}
                    <em>
                      wohl
                    </em>
                    , weil wir nicht wissen, was alles
                    physikalisch realisierbar ist). Allerdings ist es möglich, dass Sie, abhängig von Ihrem
                    Anwendungsfeld, ein abgewandeltes oder völlig anderes Modell benötigen, um den
                    Resourcenverbrauch modellieren zu können.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Dennoch: in diesem Kapitel beschränken wir uns auf die Resource{" "}
                    <em>
                      Zeit
                    </em>
                    , und daher
                    sind Turingmaschinen das Modell der Wahl.
                  </Paragraph>
                </Paragraph>
                <h2>
                  <Paragraph>
                    Zeitkomplexitätsklassen
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Wir beschränken uns der Einfachheit halber auf das Eingabealphabet $\Sigma = \&#123;0,1\&#125;$ und
                    auf Entscheidungsprobleme, wo uns also nur eine Ja/Nein-Antwort interessiert.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Definition
                      </span>
                      Sei $t: \N \rightarrow \N$. Eine
                      Turingmaschinen $M$
                    </Paragraph>
                    <Paragraph>
                      <em>
                        entscheidet
                      </em>
                      eine Sprache $L \subseteq \Sigma^*$ in Zeit $t$ wenn
                    </Paragraph>
                  </Paragraph>
                  <ul>
                    <li>
                      <Paragraph>
                        sie die Sprache entscheidet, also $x \in L \Longleftrightarrow f_M(x) = \texttt&#123;accept&#125;$
                        und
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        für jede Eingabe $x$ in maximal $O(t(|x|))$ Schritten terminiert.
                      </Paragraph>
                    </li>
                  </ul>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Wir definieren nun
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125;
                    \TIME_k(t) := \&#123;L \subseteq \Sigma^* \ | \
                    \textnormal&#123;es gibt eine $k$-Band-TM $M$, die $L$ in Zeit $t$ entscheidet&#125;\&#125;
                    \end&#123;align*&#125;
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        und schließlich
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125;
                    \TIME(t) := \bigcup
                    <i>
                      &#123;k \geq 1&#125; \TIME
                    </i>
                    k(t) \ .
                    \end&#123;align*&#125;
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Falls Sie sich nicht mehr genau an die $O$-Notation erinnern können: in diesem Zusammenhang
                    heißt das, dass es Konstanten $c$ und $d$ gibt, so dass $M$ in maximal
                    $c t(|x|) + d$ Schritten terminiert. Die Konstanten $c$ und $d$ dürfen von $M$ abhängen, aber
                    nicht von der Eingabe $x$ oder der Länge $|x|$.
                    Wir haben in{" "}
                    <a href="07-02-Turing-variants.html">
                      <Paragraph>
                        Kapitel 7.3
                      </Paragraph>
                    </a>
                    gezeigt, wie man eine
                    $k$-Band-Turingmaschine $M$ durch eine
                    Ein-Band-Turingmaschine $M'$. Der Aufwand war quadratisch: wenn $M$ innerhalb von $t$ Schritten
                    terminiert, so terminiert $M'$ innerhalb von $c t^2$ Schritten, wobei $c$ eine Konstante ist,
                    die
                    von $M$ abhängt. Mit unser neuen Notation können wir das sehr konzis schreiben:
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
                        ($k$-Band zu $1$-Band).
                      </b>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      Sei $t: \N \rightarrow \N$. Dann gilt
                      $\TIME
                      <i>
                        k(t) \subseteq \TIME
                      </i>
                      1(t^2)$.
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Der quadratische Overhead wird tatsächlich störend, wenn man Zeit als Resource untersucht.
                    Daher gibt es eine bessere Simulation; die benötigt allerdings zwei Bänder (Oder drei? Weiß ich
                    gerade nicht
                    exakt) und die Konstruktion ist deutlich komplizierter. Daher vorerst ohne Beweis:
                  </Paragraph>
                </Paragraph>
                <div
                  id="k-tape-to-2-tape"
                  class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Theorem
                      </span>
                      {" "}{" "}
                      <b>
                        ($k$-Band zu $2$-Band; ohne
                        Beweis).
                      </b>
                      {" "}
                      Sei
                      $t: \N \rightarrow \N$. Dann gilt $\TIME
                      <i>
                        k(t) \subseteq \TIME
                      </i>
                      2(t \log t)$.
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