import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
const Article = () => {
  return (
    <Container>
      <Chapter number={41}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="06-00-general-grammars">
            <Paragraph>
              &lt;&lt; Kapitel 06.00
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="07-01-Turing-machines-definition">
            <Paragraph>
              Kapitel 07.01 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <h1 class="hidden-title">
                <span class="chapterTitle">
                  7. Turing-Maschinen
                </span>
              </h1>
              <Paragraph>
                <Paragraph>
                  Wir haben in den vorherigen Kapitel mit primitiver Rekursion und \(\lambda\)-Kalkül
                  zwei Modelle kennengelernt, die den Begriff der{" "}
                  <em>
                    Berechnung
                  </em>
                  formalisieren.
                  Das \(\lambda\)-Kalkül ist im Prinzip eine reduktion funktionaler Programmiersprachen
                  auf das absolut essentielle. In diesem Kapitel lernen wir ein
                  weiteres Modell für Berechnung kennen, das im Allgemeinen als Standardmodell
                  gilt: die Turingmaschine. Anders als primitive Rekursion und \(\lambda\)-Kalkül
                  sind Turingmaschinen auch eng mit dem Begriff des Laufzeitkomplexität und Speicherplatzkomplexität
                  verbunden und bilden somit das Fundament der{" "}
                  <em>
                    Komplexitätstheorie
                  </em>
                  , die sich insbesondere
                  mit dem Resourcenverbrauch bei Rechenprozessen beschäftigt.
                </Paragraph>
              </Paragraph>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;