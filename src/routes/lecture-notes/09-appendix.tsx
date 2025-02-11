import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        title=""
        number="9.appendix.emu"
        path="/lecture-notes58.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="08-01-Time-hierarchy-theorem">
            &lt;&lt; Kapitel 8.1
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;