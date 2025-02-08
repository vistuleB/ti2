import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        number={21}
        path="/lecture-notes21.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="04-00-formal-languages">
            &lt;&lt; Kapitel 4.0
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="04-02-finite-state-machines">
            Kapitel 4.2 &gt;&gt;
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;