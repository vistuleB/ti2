import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
const Article = () => {
  return (
    <Container>
      <Chapter number={21}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="04-00-formal-languages">
            <Paragraph>
              &lt;&lt; Kapitel 04.00
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="04-02-finite-state-machines">
            <Paragraph>
              Kapitel 04.02 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;