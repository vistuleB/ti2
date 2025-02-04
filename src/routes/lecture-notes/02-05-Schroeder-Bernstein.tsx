import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
const Article = () => {
  return (
    <Container>
      <Chapter number={13}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="02-04-diagonalization">
            <Paragraph>
              &lt;&lt; Kapitel 02.04
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="02-06-Trichotomiesatz">
            <Paragraph>
              Kapitel 02.06 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div
          style="display:none"
          id="mathjax-definitions">
          <Paragraph>
            \(
            \newcommand&#123;\floor&#125;[1]&#123;\left\lfloor #1 \right\rfloor&#125;
            \newcommand&#123;\ceil&#125;[1]&#123;\left\lceil #1 \right\rceil&#125;
          </Paragraph>
          <Paragraph>
            \newcommand&#123;\R&#125;&#123;\mathbb&#123;R&#125;&#125;
            \newcommand&#123;\Z&#125;&#123;\mathbb&#123;Z&#125;&#125;
            \newcommand&#123;\N&#125;&#123;\mathbb&#123;N&#125;&#125;
            \newcommand&#123;\Q&#125;&#123;\mathbb&#123;Q&#125;&#125;
            \newcommand&#123;\cin&#125;&#123;c
            <i>
              &#123;\rm in&#125;&#125;
              \newcommand&#123;\cout&#125;&#123;c
            </i>
            &#123;\rm out&#125;&#125;
            \newcommand&#123;\maj&#125;&#123;\textnormal&#123;Maj&#125;&#125;
            \newcommand&#123;\xor&#125;&#123;\oplus&#125;
            \newcommand&#123;\depth&#125;&#123;\textnormal&#123;depth&#125;&#125;
            \newcommand&#123;\poly&#125;&#123;\textnormal&#123;poly&#125;&#125;
            \newcommand&#123;\pfrac&#125;[2]&#123;\left(\frac&#123;#1&#125;&#123;#2&#125;\right)&#125;
            \newcommand&#123;\cube&#125;&#123;\&#123;0,1\&#125;&#125;
            \newcommand&#123;\cuben&#125;&#123;\cube^&#123;\N&#125;&#125;
            \)
          </Paragraph>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;