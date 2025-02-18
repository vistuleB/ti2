import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        count={28}
        title_gr="Kontextfreie Sprachen"
        title_en="context free languages"
        number={5.0}
        path="/lecture-notes28.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="04-07-exercises">
            &lt;&lt; Kapitel 4.7
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="05-01-ableitungen">
            Kapitel 5.1 &gt;&gt;
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
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Some introductory stuff about grammars.
              </Paragraph>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;