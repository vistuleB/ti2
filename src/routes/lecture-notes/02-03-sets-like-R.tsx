import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        number={11}
        path="/lecture-notes11.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="02-02-examples-of-equipotent-sets">
            &lt;&lt; Kapitel 2.2
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="02-04-diagonalization">
            Kapitel 2.4 &gt;&gt;
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;