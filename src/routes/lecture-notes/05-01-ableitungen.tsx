import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
const Article = () => {
  return (
    <Container>
      <Chapter number={29}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="05-00-context-free-languages">
            <Paragraph>
              &lt;&lt; Kapitel 05.00
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="05-02-cfg-to-pda">
            <Paragraph>
              Kapitel 05.02 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div />
      </Chapter>
    </Container>
  );
};

export default Article;