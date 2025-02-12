import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        count={34}
        title_gr="Einen Parser in Java implementieren"
        title_en="b Parser in Java"
        number={5.6}
        path="/lecture-notes34.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="05-05-a-LR-parsing-by-hand">
            &lt;&lt; Kapitel 5.5
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="05-07-c-LR-grammars">
            Kapitel 5.7 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    5.6 Einen Parser in Java implementieren
                  </span>
                </h1>
                <div class="alert-info">
                  <Paragraph>
                    Den vollständigen Quelltext, den wir in der Vorlesung geschrieben haben,
                    finden Sie in der Datei{" "}
                    <a href="../code/parsing/arithmetic-in-class/ArithmeticGrammar.java">
                      ArithmeticGrammar.java
                    </a>
                    .
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Ich möchte nun eine kontextfreie Grammatik für arithmetische Ausdrücke der
                      Form{" "}
                      <tt>
                        ((31+402)*83)
                      </tt>
                      entwerfen. Der Einfachheit halber bestehe ich
                      auf strenger Klammerung, so wäre{" "}
                      <tt>
                        (2*(1+2+3))
                      </tt>
                      zum Beispiel nicht erlaubt.
                      Unsere Grammatik soll allgemeine Dezimalzahlen darstellen können.
                      Das Alphabet ist somit
                      $\Sigma = \&#123;\texttt&#123;0&#125;,\texttt&#123;1&#125;,\texttt&#123;2&#125;,\texttt&#123;3&#125;,\texttt&#123;4&#125;,
                      \texttt&#123;5&#125;,\texttt&#123;6&#125;,\texttt&#123;7&#125;,\texttt&#123;8&#125;,\texttt&#123;9&#125;,
                      \texttt&#123;+&#125;,\texttt&#123;*&#125;,\texttt&#123;(&#125;,\texttt&#123;)&#125;\&#125;$.
                      Die Produktionsregeln sind:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  E&amp;\rightarrow N \tag&#123;JustNumber&#125; \\
                  E&amp;\rightarrow \texttt&#123;(&#125;E \texttt&#123;+&#125; E\texttt&#123;)&#125; \tag&#123;Sum&#125; \\
                  E&amp;\rightarrow \texttt&#123;(&#125;E \texttt&#123;*&#125; E\texttt&#123;)&#125; \tag&#123;Product&#125;\\
                  N&amp;\rightarrow D \tag&#123;SingleDigit&#125; \\
                  N&amp;\rightarrow ND \tag&#123;NumberDigit&#125; \\
                  D&amp;\rightarrow \texttt&#123;0&#125;\ | \ \texttt&#123;1&#125;\ | \ \texttt&#123;2&#125;\ | \ \texttt&#123;3&#125;\ | \ \texttt&#123;4&#125;\ | \
                  \texttt&#123;5&#125;\ | \ \texttt&#123;6&#125;\ | \ \texttt&#123;7&#125;\ | \ \texttt&#123;8&#125;\ | \ \texttt&#123;9&#125;
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Die Nichtterminale sind also $E$ (Expression), $N$ (Number) und $D$ (Digit). Wir haben auch
                    den einzelnen Produktionen Namen gegeben, bis auf die der Form $D \rightarrow i$.
                    Was soll nun unser Parser tun? Er soll, gegeben ein Eingabewort $w \in L$, den
                    {" "}
                    <i>
                      Ableitungsbaum
                    </i>
                    konstruieren, für{" "}
                    <tt>
                      ((31+402)*83)
                    </tt>
                    also
                  </Paragraph>
                </Paragraph>
                <figure>
                  <img
                    style="height:20em"
                    src="../img/context-free/arithmetic-syntax-tree.svg" />
                </figure>
                <Paragraph>
                  <Paragraph>
                    Wie wir diesen Baum in Java repräsentieren, darüber sprechen wir in einer Minute.
                    Zuerst aber: wir wollen mit diesem Baum etwas Sinnvolles tun. Zum Beispiel
                    {" "}
                    <i>
                      auswerten
                    </i>
                    , so dass am Ende eine Zahl rauskommt, im obigen Beispiel
                    also $(31 + 402) \cdot 83 = 35939$. Oder den Ausdruck umformen von
                    Infix-Notation zu Präfixnotation, also
                  </Paragraph>
                  <Paragraph>
                    <tt>
                      (* (+ 31 402) 83)
                    </tt>
                    . All dies wird sehr einfach sein, sobald wir
                    den Ableitungsbaum als Datenstruktur vorliegen haben.
                  </Paragraph>
                </Paragraph>
                <h2>
                  <Paragraph>
                    Eine Datenstruktur für Ableitungsbäume
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Für meine Implementierung in Java erschaffe ich für jedes Nichtterminal $X$
                    ein Interface
                    und für jede Produktionsregel $X \rightarrow \alpha$ eine Klasse,
                    die das Interface $X$ implementiert und $\alpha$ als Klassenvariable enthält.
                  </Paragraph>
                </Paragraph>
                <ul>
                  <li>
                    <tt>
                      interface Expression
                    </tt>
                    wird implementiert von
                    <ul>
                      <li>
                        <tt>
                          class Sum
                        </tt>
                        , die als Klassenvariable{" "}
                        <tt>
                          Exrepssion e1, e2
                        </tt>
                        enthält,
                      </li>
                      <li>
                        <tt>
                          class Product
                        </tt>
                        , die als Klassenvariable{" "}
                        <tt>
                          Exrepssion e1, e2
                        </tt>
                        enthält,
                      </li>
                      <li>
                        <tt>
                          class JustNumber
                        </tt>
                        , die als Klassenvariable nur eine{" "}
                        <tt>
                          Number number
                        </tt>
                        enthält;
                      </li>
                    </ul>
                  </li>
                  <li>
                    <tt>
                      interface Number
                    </tt>
                    wird implementiert von
                    <ul>
                      <li>
                        <tt>
                          class MultiDigitNumber
                        </tt>
                        , die als Klassenvariable eine
                        <tt>
                          Number
                        </tt>
                        und eine{" "}
                        <tt>
                          Digit
                        </tt>
                        erhält und
                      </li>
                      <li>
                        <tt>
                          class SingleDigitNumber
                        </tt>
                        , die als Klassenvariable ein{" "}
                        <tt>
                          Digit
                        </tt>
                        enthält;
                      </li>
                    </ul>
                  </li>
                  <li>
                    <tt>
                      interface Digit
                    </tt>
                    wird implementiert von
                    <tt>
                      class DigitOne
                    </tt>
                    ,
                    <tt>
                      class DigitTwo
                    </tt>
                    ,
                    <tt>
                      class DigitThree
                    </tt>
                    ,
                    <tt>
                      class DigitFour
                    </tt>
                    ,
                    <tt>
                      class DigitFive
                    </tt>
                    ,
                    <tt>
                      class DigitSix
                    </tt>
                    ,
                    <tt>
                      class DigitSeven
                    </tt>
                    ,
                    <tt>
                      class DigitEight
                    </tt>
                    und
                    <tt>
                      class DigitNine
                    </tt>
                    .
                  </li>
                </ul>
                <Paragraph>
                  <Paragraph>
                    In unserem Anwendungsfall hat jedes Interface eine Methode
                  </Paragraph>
                  <Paragraph>
                    <tt>
                      public int toInt()
                    </tt>
                    . Interface{" "}
                    <tt>
                      Expression
                    </tt>
                    hat zusätzlich noch
                    die Methode{" "}
                    <tt>
                      String toPrefixNotation()
                    </tt>
                    . Ich schreibe auch ein
                    Über-Interface{" "}
                    <tt>
                      ParseObject
                    </tt>
                    , das alle Interfaces zusammenfasst.
                    Um uns das Debugging zu erleichtern, überschreibe ich in jeder Klasse die Methode
                  </Paragraph>
                  <Paragraph>
                    <tt>
                      public String toString()
                    </tt>
                    .
                  </Paragraph>
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;