import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter number={8}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="01-06-lower-and-upper-bounds">
            <Paragraph>
              &lt;&lt; Kapitel 01.06
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="02-01-comparing-sizes">
            <Paragraph>
              Kapitel 02.01 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <h1 class="hidden-title">
                <span class="chapterTitle">
                  2. Unendliche Mengen
                </span>
              </h1>
              <Paragraph>
                <Paragraph>
                  Mit den Boolesche Schaltkreise haben wir bereits ein Modell für Berechnung kennengelernt.
                  Es ist abstrakt genug, um mathematisch rigorose Aussagen darüber zu treffen und über obere und
                  untere Schranken zu sprechen.
                  Gleichzeitig ist es sehr konkret und nah an seiner physikalischen Realisierung.
                  Ein entscheidender Nachteil Boolescher Schaltkreise jedoch: Sie müssen von Anfang an wissen, wie
                  groß
                  Ihr Input ist; also wie vielen Input-Variablen $x
                  <i>
                    1, \dots, x
                  </i>
                  n$ Sie begegnen werden.
                  Für ein allgemeines Modell der Berechnung ist dies ungeeignet. Wir wollen ja{" "}
                  <em>
                    ein
                  </em>
                  Computerprogramm, das beliebig große Eingaben verkraften kann. Ein Computerprogramm
                  soll also{" "}
                  <em>
                    endlich
                  </em>
                  sein, aber für eine{" "}
                  <em>
                    unendliche
                  </em>
                  Menge potentieller Eingaben
                  funktionieren.
                </Paragraph>
                <Paragraph>
                  In diesem Kapitel werden wir daher unendliche Mengen besser kennenlernen.
                </Paragraph>
              </Paragraph>
              <div class="well container theorem">
                <Paragraph>
                  <Paragraph>
                    <span class="numbered-title">
                      Beispiel
                    </span>
                    Die Mengen $\N, \Z, \Q, \R$ sind unendlich. Die
                    Mengen
                    $\&#123;a,e,i,o,u\&#125;$ und $\&#123;0,1,2,3,4,5,6,7,8,9\&#125;$ sind endlich.
                  </Paragraph>
                </Paragraph>
              </div>
              <div class="well container theorem">
                <Paragraph>
                  <Paragraph>
                    <span class="numbered-title" />
                    Die Menge
                    \begin&#123;align*&#125;
                    \&#123;0,1\&#125;^* := \&#123;\epsilon\&#125; \cup \&#123;0,1\&#125; \cup \&#123;00, 01, 10, 11\&#125; \cup \dots \cup \&#123;0,1\&#125;^n
                    \cup
                    \dots \ ,
                    \end&#123;align*&#125;
                    also die Menge aller endlichen Bit-Strings ist unendlich. Mit $\epsilon$ bezeichnen wir hier den
                    leeren String.
                    Ganz generell: wenn $\Sigma$ eine
                    nichtleere
                    Menge ist, dann ist $\Sigma^*$, die Menge aller endlichen Strings über $\Sigma$, unendlich.
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