import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter number={2}>
        <div id="link-to-toc">
          <Paragraph>
            <a href="../vorlesungsskript">
              <Paragraph>
                Inhaltsverzeichnis
              </Paragraph>
            </a>
          </Paragraph>
          <Paragraph>
            <a href="01-00-BooleanCircuits">
              <Paragraph>
                &lt;&lt; Kapitel 1.1{" "}
              </Paragraph>
            </a>
          </Paragraph>
        </div>
        <div id="link-to-overview">
          <Paragraph>
            <a href="https://www.tu-chemnitz.de/informatik/theoretische-informatik/TI-2/index.html">
              <Paragraph>
                zur Kursübersicht
              </Paragraph>
            </a>
          </Paragraph>
          <Paragraph>
            <a href="01-02-truth-tables-cnf-dnf">
              <Paragraph>
                Kapitel 1.2 &gt;&gt;
              </Paragraph>
            </a>
          </Paragraph>
        </div>
        <main>
          <div id="rightSideWrapper">
            <div class="content">
              <div class="chapter">
                <div class="subChapter">
                  <h1 class="hidden-title">
                    <span class="subChapterTitle">
                      1.1 Größe, Tiefe, Fan-In
                    </span>
                  </h1>
                  <Paragraph>
                    Für Boolesche Schaltkreise gibt es drei Komplexitätsparameter, die uns interessieren.
                  </Paragraph>
                  <div class="well container theorem">
                    <Paragraph>
                      <span class="numbered-title">
                        Definition.{" "}
                      </span>
                      Die Größe eines Schaltkreises ist die Anzahl seiner Gates, also die Anzahl der Knoten im zugrundeliegenden DAG. Die{" "}
                    </Paragraph>
                    <Paragraph>
                      Teife ist die Länge des längsten gerichteten Pfades von einem Input- zu einem Output-Gate. Der{" "}
                    </Paragraph>
                    <Paragraph>
                      Maximum-Fan-in ist der maximale Rein-Grad aller Knoten, also der maximale Fan-in aller Gates.
                    </Paragraph>
                  </div>
                  <div class="alter-warning">
                    <Paragraph>
                      <strong>
                        <Paragraph>
                          Vorsicht.
                        </Paragraph>
                      </strong>
                      Manchmal werden zur Bestimmung der Tiefe die NOT-Gates nicht mitgezählt. Entlang eines Pfades wird also gelegentlich nur die Anzahl der AND- und OR-Gates bestimmt.
                    </Paragraph>
                  </div>
                  <Paragraph>
                    Für alle Parameter Größe, Tiefe, Maximum-Fan-in gilt: klein ist gut. Dies ist klar, wenn Sie sich vorstellen, dass Schaltkreis industriell zum Einsatz kommt. Die Größe bestimmt die Anzahl der Transistoren, die Sie brauchen; die Tiefe bestimmt die Dauer, die das Signal braucht, um durch den ganzen Schaltkreis zu laufen und bestimmt somit die Geschwindigkeit, mit der Ihr Schaltkreis seinen Job erledigt.
                  </Paragraph>
                  <Paragraph>
                    Der Fan-in ist eher von theoretischem Interesse. Wie bereits oben gesehen, können wir immer einen Fan-in von 2 garantieren, indem wir AND- und OR-Gates mit mehr als zwei Inputs als verschachteltes AND oder OR darstellen:
                  </Paragraph>
                  <figure>
                    <Paragraph>
                      <img
                        loading="lazy"
                        src="../img/circuits/and-n-fold-linear-depth.svg"
                        style="height:10em" />
                      oder alternativ:
                    </Paragraph>
                    <img
                      loading="lazy"
                      src="../img/circuits/and-n-fold-log-depth.svg"
                      style="height:10em" />
                  </figure>
                  <Paragraph>
                    In beiden Fällen ersetzen wir ein AND-Gate von Fan-in \(n\) durch \(n-1\) AND-Gates von je Fan-in 2. Wenn wir allerdings die{" "}
                  </Paragraph>
                  <Paragraph>
                    Tiefe betrachten, so sehen wir, dass der linke Schaltkreis Tiefe \(n-1\) hat, der rechte jedoch nur \(\ceil&#123;\log_2(n)&#125;\). Ganz allgemein stellen wir fest:
                  </Paragraph>
                  <div class="well container theorem">
                    <Paragraph>
                      <span class="numbered-title">
                        Theorem
                      </span>
                      Sei \(C\) ein Schaltkreis Maximum-Fan-in \(k\), Größe \(s\) und Tiefe \(d\). Dann gibt es einen äquivalenten Schaltkreis \(C'\) mit Maximum-Fan-in \(2\), Größe höchstens \(s (k-1)\) und Tiefe höchstens \(d \ceil &#123;\log_2 k&#125;\).
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Chapter>
    </Container>
  );
};

export default Article;