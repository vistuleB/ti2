import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
const Article = () => {
  return (
    <Container>
      <Chapter number={11}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="02-02-examples-of-equipotent-sets">
            <Paragraph>
              &lt;&lt; Kapitel 02.02
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="02-04-diagonalization">
            <Paragraph>
              Kapitel 02.04 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;