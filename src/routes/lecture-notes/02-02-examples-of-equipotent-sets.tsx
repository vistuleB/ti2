import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
const Article = () => {
  return (
    <Container>
      <Chapter number={10}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="02-01-comparing-sizes">
            <Paragraph>
              &lt;&lt; Kapitel 02.01
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="02-03-sets-like-R">
            <Paragraph>
              Kapitel 02.03 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;