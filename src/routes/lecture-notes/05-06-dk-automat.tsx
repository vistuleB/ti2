import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        title="dk automat"
        number={5.6}
        path="/lecture-notes37.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="05-05-d-linker-Rand-und-Bluete">
            &lt;&lt; Kapitel 5.5
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="05-09-general-parsing">
            Kapitel 5.9 &gt;&gt;
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;