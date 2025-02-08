import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        number={23}
        path="/lecture-notes23.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="04-02-finite-state-machines">
            &lt;&lt; Kapitel 4.2
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="04-04-regular-grammar-to-fsm">
            Kapitel 4.4 &gt;&gt;
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;