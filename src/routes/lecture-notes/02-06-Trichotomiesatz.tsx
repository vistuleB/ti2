import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        number={14}
        path="/lecture-notes14.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="02-05-Schroeder-Bernstein">
            &lt;&lt; Kapitel 2.5
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="03-00-Computability-NaturalNumbers">
            Kapitel 3.0 &gt;&gt;
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;