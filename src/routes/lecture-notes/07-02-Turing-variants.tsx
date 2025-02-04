import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
const Article = () => {
  return (
    <Container>
      <Chapter number={44}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="07-01-Turing-machines-examples">
            <Paragraph>
              &lt;&lt; Kapitel 07.01
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="07-03-Turing-encoding">
            <Paragraph>
              Kapitel 07.03 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;