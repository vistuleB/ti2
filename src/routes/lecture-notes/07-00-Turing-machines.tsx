import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        title="Turing-Maschinen"
        number={7.0}
        path="/lecture-notes41.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="06-00-general-grammars">
            &lt;&lt; Kapitel 6.0
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="07-01-Turing-machines-definition">
            Kapitel 7.1 &gt;&gt;
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
                  zwei Modelle kennengelernt, die den Begriff der 
                  {" "}
                  <i>
                    Berechnung
                  </i>
                  {" "}
                  formalisieren.
                  Das \(\lambda\)-Kalkül ist im Prinzip eine reduktion funktionaler Programmiersprachen
                  auf das absolut essentielle. In diesem Kapitel lernen wir ein
                  weiteres Modell für Berechnung kennen, das im Allgemeinen als Standardmodell
                  gilt: die Turingmaschine. Anders als primitive Rekursion und \(\lambda\)-Kalkül
                  sind Turingmaschinen auch eng mit dem Begriff des Laufzeitkomplexität und Speicherplatzkomplexität
                  verbunden und bilden somit das Fundament der 
                  {" "}
                  <i>
                    Komplexitätstheorie
                  </i>
                  {" "}
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