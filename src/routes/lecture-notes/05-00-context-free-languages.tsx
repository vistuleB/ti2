import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter number={28}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="04-07-exercises">
            <Paragraph>
              &lt;&lt; Kapitel 04.07
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="05-01-ableitungen">
            <Paragraph>
              Kapitel 05.01 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <h1 class="hidden-title">
                <span class="chapterTitle">
                  5. Kontextfreie Sprachen
                </span>
              </h1>
              <Paragraph>
                <Paragraph>
                  Some introductory stuff about grammars.
                </Paragraph>
              </Paragraph>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;