import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter number={20}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="03-04-mu-recursion">
            <Paragraph>
              &lt;&lt; Kapitel 03.04
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="04-01-regular-grammars">
            <Paragraph>
              Kapitel 04.01 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <h1 class="hidden-title">
                <span class="chapterTitle">
                  4. Formale Sprachen - Einführung und Beispiele
                </span>
              </h1>
              <div class="subChapter">
                <Paragraph>
                  <Paragraph>
                    Hier sehen Sie einige Beispiele für gültige und ungültige Email-Adressen. Mit{" "}
                    <em>
                      gültig
                    </em>
                    meine ich, dass sie syntaktisch korrekt sind, ungeachtet, ob ein Konto mit dieser Email-Adresse
                    besteht.
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <Paragraph>
                    thomas.schmitz@hszg.de{" "}
                    <span class="comment">
                      Gültig
                    </span>
                    dominik@cs.sjtu.edu.cn{" "}
                    <span class="comment">
                      Gültig
                    </span>
                    raffaela@mayer@gmail.com{" "}
                    <span class="comment">
                      Ungültig: @ kommt zweimal vor
                    </span>
                    lorenz.klein@greatest/company/in/the/world.com{" "}
                    <span class="comment">
                      Ungültig: Domain-Name darf kein / enthalten
                    </span>
                    .schlaumeier@gmail.com{" "}
                    <span class="comment">
                      Ungültig: Google will kein . an erster Stelle
                    </span>
                  </Paragraph>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Hier sehen Sie den Teil eines HTML-Dokuments. Beachten Sie die typische
                    hierarchisch-geschachtelte
                    Struktur (sie müssen es nicht im Detail lesen):
                  </Paragraph>
                </Paragraph>
                <style>
                  <Paragraph>
                    .StartTag,
                    .EndTag&#123;
                    color: blue;
                    &#125;
                  </Paragraph>
                  <Paragraph>
                    .AttributeValueDoubleQuote,
                    .AttributeValueSingleQuote&#123;
                    color: orange
                    &#125;
                  </Paragraph>
                  <Paragraph>
                    .RawText&#123;
                    font-style: italic;
                    &#125;
                  </Paragraph>
                  <Paragraph>
                    .AttributeName&#123;
                    color: limegreen;
                    &#125;
                  </Paragraph>
                </style>
                <pre class="container">
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    div
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    class
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    carousel-inner
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    style
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    display:inline-block
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    div
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    class
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    item active
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="RawText">
                    \(110 x + 794\)
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    img
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    loading
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="AttributeValueDoubleQuote">
                    lazy
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    src
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    ../img/hash/hashfunction
                    <i>
                      110
                    </i>
                    794.svg
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /div
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    div
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    class
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    item
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="RawText">
                    \(502 x + 121\)
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    img
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    loading
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="AttributeValueDoubleQuote">
                    lazy
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    src
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    ../img/hash/hashfunction
                    <i>
                      502
                    </i>
                    121.svg
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /div
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    div
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    class
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    item
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="RawText">
                    \(617 x + 5\)
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    img
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    loading
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="AttributeValueDoubleQuote">
                    lazy
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    src
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    ../img/hash/hashfunction
                    <i>
                      617
                    </i>
                    5.svg
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /div
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    div
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    class
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    item
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="RawText">
                    \(815 x + 562\)
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    img
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    loading
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="AttributeValueDoubleQuote">
                    lazy
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    src
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    ../img/hash/hashfunction
                    <i>
                      851
                    </i>
                    562.svg
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /div
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    div
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    class
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    item
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="RawText">
                    \(868 x + 858\)
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    img
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    loading
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="AttributeValueDoubleQuote">
                    lazy
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    src
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    ../img/hash/hashfunction
                    <i>
                      868
                    </i>
                    858.svg
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /div
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    div
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    class
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    item
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="RawText">
                    \(915 x + 320\)
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /p
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="StartTag">
                    img
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    loading
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="AttributeValueDoubleQuote">
                    lazy
                  </span>
                  <span class="DoubleQuote">
                    "
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    src
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    ../img/hash/hashfunction
                    <i>
                      915
                    </i>
                    320.svg
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="RawText" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /div
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                  <span class="LineBreak" />
                  <span class="LessThanBracket">
                    &lt;
                  </span>
                  <span class="EndTag">
                    /div
                  </span>
                  <span class="WaitingForAttribute" />
                  <span class="AttributeName">
                    class
                  </span>
                  <span class="WaitingForValue">
                    =
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="AttributeValueSingleQuote">
                    carousel-inner
                  </span>
                  <span class="SingleQuote">
                    '
                  </span>
                  <span class="GreaterThanBracket">
                    &gt;
                  </span>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Hier sehen Sie einen Ausschnitt aus einem Elm-Programm (auch diesen müssen Sie nicht im
                    Detail lesen):
                  </Paragraph>
                </Paragraph>
                <pre class="listing container">
                  <code>
                    find : Bst -&gt; String -&gt; Maybe String
                  </code>
                  <code>
                    find tree key =
                  </code>
                  <code>
                    case tree of
                  </code>
                  <code>
                    Empty _ -&gt;
                  </code>
                  <code>
                    Nothing
                  </code>
                  <code />
                  <code>
                    Node ( keyHere, valueHere ) leftChild rightChild -&gt;
                  </code>
                  <code>
                    if key == keyHere then
                  </code>
                  <code>
                    Just valueHere
                  </code>
                  <code />
                  <code>
                    else if key&lt; keyHere then
                  </code>
                  <code>
                    find leftChild key
                  </code>
                  <code />
                  <code>
                    else
                  </code>
                  <code>
                    find rightChild key
                  </code>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Als letztes Beispiel sehen Sie hier eine svg-Datei. Dies ist ein Dateiformat für Vektorgrafiken.
                    In
                    diesem
                    Falle ein Kreis mit einer Geraden:{" "}
                    <img
                      style="height:4em"
                      src="../img/svg-example.svg" />
                  </Paragraph>
                </Paragraph>
                <pre class="listing container">
                  <code>
                    <span class="RawText" />
                    <span class="LessThanBracket">
                      &lt;
                    </span>
                    <span class="StartTag">
                      ?xml
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      version
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      1.0
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      encoding
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      UTF-8
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeName">
                      ?
                    </span>
                    <span class="GreaterThanBracket">
                      &gt;
                    </span>
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="LessThanBracket">
                      &lt;
                    </span>
                    <span class="StartTag">
                      svg
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      xmlns
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      http://www.w3.org/2000/svg
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      xmlns:xlink
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      http://www.w3.org/1999/xlink
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      width
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      102pt
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      height
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      102pt
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      viewBox
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      0 0 102 102
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      version
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      1.1
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="GreaterThanBracket">
                      &gt;
                    </span>
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="LessThanBracket">
                      &lt;
                    </span>
                    <span class="StartTag">
                      g
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      id
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      surface2322
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="GreaterThanBracket">
                      &gt;
                    </span>
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="LessThanBracket">
                      &lt;
                    </span>
                    <span class="StartTag">
                      circle
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      style
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      fill:none;stroke-width:0.4;stroke:rgba(0,0,0,100);
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      cx
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      51
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      cy
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      51
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      r
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      40
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeName">
                      /
                    </span>
                    <span class="GreaterThanBracket">
                      &gt;
                    </span>
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="LessThanBracket">
                      &lt;
                    </span>
                    <span class="StartTag">
                      path
                    </span>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      style
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      fill:none;stroke-width:0.4;stroke:rgba(0,0,0,100);
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="WaitingForAttribute" />
                    <span class="AttributeName">
                      d
                    </span>
                    <span class="WaitingForValue">
                      =
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeValueDoubleQuote">
                      M 50 50 l 33.5 -22.5
                    </span>
                    <span class="DoubleQuote">
                      "
                    </span>
                    <span class="AttributeName">
                      /
                    </span>
                    <span class="GreaterThanBracket">
                      &gt;
                    </span>
                    <span class="RawText" />
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="LessThanBracket">
                      &lt;
                    </span>
                    <span class="EndTag">
                      /g
                    </span>
                    <span class="GreaterThanBracket">
                      &gt;
                    </span>
                    <span class="LineBreak" />
                  </code>
                  <code>
                    <span class="LessThanBracket">
                      &lt;
                    </span>
                    <span class="EndTag">
                      /svg
                    </span>
                    <span class="GreaterThanBracket">
                      &gt;
                    </span>
                    <span class="LineBreak" />
                  </code>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Was haben diese vier Beispiele gemeinsam? Es handelt sich in allen Fällen um{" "}
                    <em>
                      Daten
                    </em>
                    , die
                    in
                    einem bestimmten festgelegten{" "}
                    <em>
                      Format
                    </em>
                    dargelegt werden. Soll ein Rechner etwas sinnvolles damit anfangen (zum Beispiel das
                    Elm-Programm
                    starten oder die HTML-Seite oder die Svg-Datei
                    auf dem Bildschirm darstellen), muss er dieses Format erst einmal "verstehen", also den bloßen
                    String aus ASCII-Zeichen umwandeln in eine logisch
                    sinnvolle Struktur. Und genau darum geht es in den Formalen Sprachen: wir wollen Begriffe,
                    Regeln,
                    Methoden, Algorithmen entwickeln, um
                    Daten, die in einem bestimmten Format vorliegen, zu verarbeiten; ja auch erst einmal überhaupt
                    Begriffe festlegen, wie man solche Formate definiert.
                  </Paragraph>
                </Paragraph>
                <h2>
                  <Paragraph>
                    Korrekte Email-Adressen
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Kommen wir auf unser erstes, einfachstes Beispiel zurück: die Email-Adressen. Können Sie
                    möglichst
                    präzise und möglichst formal beschreiben, wie eine korrekte
                    Email-Adresse auszusehen hat? Hier versuche ich es einmal:
                  </Paragraph>
                </Paragraph>
                <div class="well container">
                  <Paragraph>
                    Eine Emailadresse besteht aus einem{" "}
                    <em>
                      Benutzernamen
                    </em>
                    und einem{" "}
                    <em>
                      Domainnamen
                    </em>
                    , die
                    mit
                    einem{" "}
                    <code>
                      @
                    </code>
                    verbunden sind.
                    Der Benutzername ist ein nichtleerer String bestehend aus Groß- und Kleinbuchstaben, Zahlen, und
                    Punkten (
                    <code>
                      .
                    </code>
                    ).
                    Erster und letzter Buchstaben dürfen keine Punkte sein, außerdem dürfen keine zwei Punkte
                    nebeneinander stehen.
                    Der Domainname ist eine Folge von mindestenes zwei{" "}
                    <em>
                      Labels
                    </em>
                    , die jeweils mit einem
                  </Paragraph>
                  <Paragraph>
                    <code>
                      .
                    </code>
                    separiert sind. Ein Label
                    ist ein nichtleerer String aus Groß- und Kleinbuchstaben, Zahlen und dem Bindestrich
                    (
                    <code>
                      -
                    </code>
                    ).
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Die genauen Regeln mögen von Anbieter zu Anbieter variieren; ich habe mich mal an das gehalten,
                    was
                    ich experimentell bei{" "}
                    <code>
                      gmail.com
                    </code>
                    herausgefunden
                    habe. Die obige Beschreibung ist (hoffentlich) verständlich und präzise und unzweideutig.
                    Allerdings
                    ist sie in natürlicher Sprache verfasst;
                    es ist beispielsweise nicht klar, wie ein Rechner aus der obigen Beschreibung einen Algorithmus
                    konstruieren kann, der Korrektheit einer Email-Adresse überprüft.
                    Außerdem schleichen sich bei natürlicher Sprache schnell Zweideutigkeiten ein, die a priori
                    nicht
                    immer zu erkennen sind.
                    Wir wollen daher ein formales Regelwerk erstellen, wie wir Formate dieser Art vollständig und
                    eindeutig beschreiben können.
                    Ich werde dies nun Schritt für Schritt entwickeln, erst informell anhand des
                    Email-Adressen-Beispiels und dann, im nächsten Kapitel, formal und abstrakt.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Eine Emailadresse ist von der Form{" "}
                    <em>
                      Benutzername
                    </em>
                    <code>
                      @
                    </code>
                    <em>
                      Domainnname
                    </em>
                    . Dies
                    können wir als{" "}
                    <em>
                      Ableitungsregel
                    </em>
                    darstellen:
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <Paragraph>
                    &lt;EmailAdress&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;User&gt; @&lt;Domain&gt;
                  </Paragraph>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Wie können wir nun beispielsweise eine ähnliche Ableitungsregeln für{" "}
                    <code>
                      &lt;Domain&gt;
                    </code>
                    erstellen? Eine{" "}
                    <code>
                      &lt;Domain&gt;
                    </code>
                    soll
                    eine Folge aus mindestens zwei{" "}
                    <code>
                      &lt;Label&gt;
                    </code>
                    sein, jeweils durch einen
                  </Paragraph>
                  <Paragraph>
                    <code>
                      .
                    </code>
                    separiert. Wir erreichen dies, indem wir einen an Rekursion
                    erinnernden Trick anwenden: entweder gibt es genau zwei Labels oder die Domain beginnt mit einem
                    Label,
                    gefolgt von einem Punkt und wiederum einer{" "}
                    <em>
                      Folge von mindestens zwei durch{" "}
                      <code>
                        .
                      </code>
                      separierten Labels
                    </em>
                    ,
                    also wiederum etwas, das wie ein Domainname aussieht. Daher:
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <Paragraph>
                    &lt;Domain&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;Label&gt; .&lt;Label&gt;
                    &lt;Domain&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;Label&gt; .&lt;Domain&gt;
                  </Paragraph>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Wir geben also{" "}
                    <em>
                      zwei
                    </em>
                    Möglichkeiten an, wie mit einem{" "}
                    <code>
                      &lt;Domain&gt;
                    </code>
                    zu
                    verfahren ist.
                    Was ist nun{" "}
                    <code>
                      &lt;Label&gt;
                    </code>
                    ? Dies ist eine nichtleere Folge von in Domainnamen
                    erlaubten
                    Zeichen.
                    Diese sind alphanumerisch (Buchstaben und Zahlen) und der Strich{" "}
                    <code>
                      -
                    </code>
                    (in der Praxis
                    sind
                    eventuell noch weitere Zeichen erlaubt;
                    im Ernstfall hängt dies davon ab, was die Domain Name Server des jeweiligen Landes / der
                    jeweiligen
                    Top-Level-Domain erlauben, siehe
                    zum Beispiel{" "}
                    <a href="https://en.wikipedia.org/wiki/Internationalized_domain_name">
                      <Paragraph>
                        Wikipedia:
                        Internationalized Domain Name
                      </Paragraph>
                    </a>
                    ).
                    Wie formulieren wir{" "}
                    <em>
                      nichtleere Folge von ...
                    </em>
                    mit unserer{" "}
                    <code>
                      --&gt;
                    </code>
                    -Notation?
                    Wieder mit dem Rekursionstrick:
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <Paragraph>
                    &lt;Label&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNumOrDash&gt; 
                    &lt;Label&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNumOrDash&gt;&lt;Label&gt;
                    &lt;AlphaNumOrDash&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNum&gt;
                    &lt;AlphaNumOrDash&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    -{" "}
                  </Paragraph>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Nun müssen wir noch Regeln für{" "}
                    <code>
                      &lt;AlphaNum&gt;
                    </code>
                    angeben. Hier führen wir eine
                    weitere
                    Konvention ein: nämlich, dass wir
                    verschiedene Alternativen mit einem senkrechten Strich | separieren:
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <Paragraph>
                    &lt;AlphaNum&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    a 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    b 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    c 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    d 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    e 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    f 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    g 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    h 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    i 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    j 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    k 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    l 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    m 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    n 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    o 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    p 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    q 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    r 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    s 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    t 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    u 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    v 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    w 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    x 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    y 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    z
                    &lt;AlphaNum&gt;{" "}
                    <STRONG>
                      <Paragraph>
                        -&gt;
                      </Paragraph>
                    </STRONG>
                    A{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    B{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    C{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    D{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    E{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    F{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    G{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    H{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    I{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    J{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    K{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    L{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    M{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    N{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    O{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    P{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    Q{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    R{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    S{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    T{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    U{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    V{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    W{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    X{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    Y{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    Z
                    &lt;AlphaNum&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    0 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    1 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    2 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    3 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    4 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    5 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    6 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    7 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    8 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    9
                  </Paragraph>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Beachten Sie: ich habe hier absichtlich nicht
                  </Paragraph>
                  <Paragraph>
                    <code>
                      &lt;AlphaNum&gt; 
                      {" "}
                      <b>
                        -&gt;
                      </b>
                      {" "}
                      a 
                      {" "}
                      <b>
                        |
                      </b>
                      {" "}
                      ... 
                      {" "}
                      <b>
                        |
                      </b>
                      {" "}
                      z
                    </code>
                    geschrieben, weil ich in diesem Beispiel wirklich alles ausschreiben wollte und mit der
                    ...-Notation
                    schon wieder etwas menschen- aber nicht maschinenlesbares
                    eingeführt hätte.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Wir brauchen noch Regeln für{" "}
                    <code>
                      &lt;User&gt;
                    </code>
                    . Dies ist ein nichtleerer String aus
                    alphanumerischen Zeichen und dem Punkt{" "}
                    <code>
                      .
                    </code>
                    , wobei
                    der Punkt nicht am Anfang und nicht am Ende stehen darf. Also: eine nichtleere Folge von
                  </Paragraph>
                  <Paragraph>
                    <em>
                      Namensblöcken
                    </em>
                    , die jeweils durch{" "}
                    <code>
                      .
                    </code>
                    separiert sind,
                    wobei ein Namensblock eine nichtleere Folge alphanumerischer Zeichen ist.
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <Paragraph>
                    &lt;User&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;NameBlock&gt; 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    &lt;NameBlock&gt; .&lt;User&gt;
                    &lt;NameBlock&gt; 
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNum&gt; 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    &lt;AlphaNum&gt;&lt;NameBlock&gt;
                  </Paragraph>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Nun haben wir unser Emailformat vollständig beschrieben. Das gesamte Regelwerk sehen Sie hier
                    noch
                    einmal im Ganzen:
                  </Paragraph>
                </Paragraph>
                <pre
                  id="email-context-free-grammar"
                  class="container listing">
                  <code>
                    &lt;EmailAddress&gt;    
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;User&gt; @&lt;Domain&gt;
                  </code>
                  <code>
                    &lt;Domain&gt;          
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;Label&gt; .&lt;Label&gt; 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    &lt;Label&gt; .&lt;Domain&gt;
                  </code>
                  <code>
                    &lt;User&gt;            
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;NameBlock&gt; 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    &lt;NameBlock&gt; .&lt;User&gt;
                  </code>
                  <code>
                    &lt;NameBlock&gt;       
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNum&gt; 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    &lt;AlphaNum&gt;&lt;NameBlock&gt;
                  </code>
                  <code>
                    &lt;Label&gt;           
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNumOrDash&gt; 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    &lt;AlphaNumOrDash&gt;&lt;Label&gt;
                  </code>
                  <code>
                    &lt;AlphaNumOrDash&gt;  
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNum&gt; 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    -{" "}
                  </code>
                  <code>
                    &lt;AlphaNum&gt;        
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    a 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    b 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    c 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    d 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    e 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    f 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    g 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    h 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    i 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    j 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    k 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    l 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    m 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    n 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    o 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    p 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    q 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    r 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    s 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    t 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    u 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    v 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    w 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    x 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    y 
                    {" "}
                    <b>
                      |
                    </b>
                    {" "}
                    z
                  </code>
                  <code>
                    &lt;AlphaNum&gt;{" "}
                    <STRONG>
                      <Paragraph>
                        -&gt;
                      </Paragraph>
                    </STRONG>
                    A{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    B{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    C{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    D{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    E{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    F{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    G{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    H{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    I{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    J{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    K{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    L{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    M{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    N{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    O{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    P{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    Q{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    R{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    S{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    T{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    U{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    V{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    W{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    X{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    Y{" "}
                    <STRONG>
                      <Paragraph>
                        |
                      </Paragraph>
                    </STRONG>
                    Z
                  </code>
                </pre>
                <h2>
                  <Paragraph>
                    Ein Beispiel einer formalen Grammatik und einer Ableitung
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Was Sie hier sehen, nennt man eine{" "}
                    <em>
                      formale Grammatik
                    </em>
                    . Ihre Bestandteile sind:
                  </Paragraph>
                </Paragraph>
                <ul>
                  <li>
                    <Paragraph>
                      Das Alphabet \(\Sigma\) aller verwendeten Zeichen, in unserem
                      Fall also \(\Sigma = \&#123;a,\dots,z,A,\dots,Z,.,-,@\&#125;\). Wir nennen \(\Sigma\) die Menge
                      der{" "}
                      <em>
                        terminalen Symbole
                      </em>
                      .
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Eine Menge \(N\) abstrakter Symbole, hier
                      {" "}
                    </Paragraph>
                    <Paragraph>
                      $$
                      N = \&#123;\texttt&#123;&lt;EmailAddress&gt;,&lt;Domain&gt;,
                      &lt;User&gt;,&lt;NameBlock&gt;,&lt;Label&gt;,&lt;AlphaNumOrDash&gt;,&lt;AlphaNum&gt;&#125;
                      \&#125; \ .
                      $$
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      Diese Menge nennen wir die{" "}
                      <em>
                        nichtterminalen Symbole
                      </em>
                      . Wir verlangen, dass \(N \cap
                      \Sigma
                      = \emptyset\) gilt; ein Symbol kann also
                      nicht gleichzeitig Terminalsymbol und Nichtterminalsymbol sein.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Eine Menge \(P\) von Regeln, auch{" "}
                      <em>
                        Produktionen
                      </em>
                      genannt, wobei jede Regel die Form
                      \(X \rightarrow \alpha\) hat, wobei \(\alpha\) eine beliebig lange endliche Folge von
                      Symbolen
                      in \(\Sigma \cup N\) ist.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Ein Startsymbol \(S \in N\), das angibt, wo wir mit unserer Ableitung beginnen sollen. Im
                      obigen
                      Beispiel
                      sind wir ja an Emailadressen interessiert, also ist{" "}
                      <code>
                        &lt;EmailAddress&gt;
                      </code>
                      das
                      Startsymbol.
                    </Paragraph>
                  </li>
                </ul>
                <Paragraph>
                  <Paragraph>
                    Wenn wir nun so eine Grammatik gegeben haben, können wir Wörter{" "}
                    <em>
                      ableiten
                    </em>
                    ; das heißt,
                    wir beginnen mit dem
                    Startsymbol und ersetzen in jedem Schritt ein nichtterminales Symbol durch die rechte Seite
                    einer entsprechenden Regel.
                    Dieser Vorgang ist nicht eindeutig und lässt mehrere Möglichkeiten offen; das ist auch gut so,
                    denn es soll ja mehr als
                    eine Email-Adresse geben. Hier ist ein Beispiel für eine Ableitung basierend auf der obigen
                    Grammatik:
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <code>
                    &lt;EmailAddress&gt;  
                    {" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;User&gt;@&lt;Domain&gt;
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;NameBlock&gt;.&lt;User&gt;@&lt;Domain&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;NameBlock&gt;.&lt;NameBlock&gt;@&lt;Domain&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;NameBlock&gt;.&lt;NameBlock&gt;@&lt;Label&gt;.&lt;Domain&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;NameBlock&gt;.&lt;NameBlock&gt;@&lt;Label&gt;.&lt;Label&gt;.&lt;Label&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNum&gt;.&lt;NameBlock&gt;@&lt;Label&gt;.&lt;Label&gt;.&lt;Label&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNum&gt;.&lt;AlphaNum&gt;@&lt;Label&gt;.&lt;Label&gt;.&lt;Label&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNum&gt;.&lt;AlphaNum&gt;@&lt;AlphaNumOrDash&gt;.&lt;Label&gt;.&lt;Label&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNum&gt;.&lt;AlphaNum&gt;@&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;.&lt;Label&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNum&gt;.&lt;AlphaNum&gt;@&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;&lt;Label&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    &lt;AlphaNum&gt;.&lt;AlphaNum&gt;@&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;&lt;AlphaNumOrDash&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    d.&lt;AlphaNum&gt;@&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;&lt;AlphaNumOrDash&gt;{" "}
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    d.&lt;AlphaNum&gt;@&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;e
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    d.&lt;AlphaNum&gt;@&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;.de
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    d.s@&lt;AlphaNumOrDash&gt;.&lt;AlphaNumOrDash&gt;.de
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    d.s@&lt;AlphaNumOrDash&gt;.b.de
                  </code>
                  <code>
                    {" "}{" "}
                    <b>
                      -&gt;
                    </b>
                    {" "}
                    d.s@a.b.de
                  </code>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Nach dem gleichen Schema könnten wir{" "}
                    <code>
                      d.s.@-.-.--
                    </code>
                    ableiten, was
                    darauf schließen lässt, dass unsere Grammatik nicht wirklich das
                    tut, was wir beabsichtigen, dass sie nämlich{" "}
                    <em>
                      zu viele
                    </em>
                    Emailadressen
                    herleitet, auch solche, die wir nicht als zulässige Adressen gelten lassen wollen.
                  </Paragraph>
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Formulieren Sie weitere Regeln, um unsinnige Domainnamen wie{" "}
                    <code>
                      -.-.--
                    </code>
                    zu verbieten. Wie müssen Sie die obige Grammatik ändern?
                  </Paragraph>
                </div>
                <h1>
                  <Paragraph>
                    Terminologie, formale Definitionen und Beispiele
                  </Paragraph>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Im letzten Abschnitt haben wir die Regeln für die Bildung syntaktisch korrekter
                    Emailadressen formalisiert. Zwar unvollständig, doch hoffe ich, dass das allgemeine
                    Schema klar geworden ist. Wir werden nun alles formaler und abstrakter definieren.
                  </Paragraph>
                </Paragraph>
                <h2>
                  <Paragraph>
                    Alphabet
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Wenn wir über formale Sprachen reden, so liegt immer eine (endliche) Menge von
                    Symbolen zugrunde, das Alphabet \(\Sigma\). Im Emailadressen-Beispiel war (\Sigma) recht groß:
                    die 52 Buchstaben; 10 Ziffern; die Zeichen{" "}
                    <code>
                      @ . -{" "}
                    </code>
                    . Für Java-Programme oder
                    andere Programmiersprachen kämen
                    noch weitere Zeichen hinzu, zum Beispiel{" "}
                    <code>
                      + - / \&#123;&#125;{" "}
                    </code>
                    und so weiter;
                    wenn wir alle Unicode-Zeichen miteinschließen, landen wir im Millionenbereich.
                    In den theoretischen Beispielen, die in diesem Kurs folgen werden, ist das Alphabet fast immer
                    viel kleiner: typische Alphabete zum Beispiel sind \( \&#123;0,1\&#125;\) , \(\&#123;a,b,c,d\&#125;\) oder auch
                    \(\&#123;1\&#125;\), ein Alphabet mit nur einem Zeichen.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Für ein Alphabet \(\Sigma\) bezeichnen wir mit \(\Sigma^*\) die Menge aller
                    endlichen Strings über diesem Alphabet; das schließt den{" "}
                    <em>
                      leeren String
                    </em>
                    mit ein,
                    den wir mit \(\epsilon\) bezeichnen. So ist beispielsweise
                    {" "}
                  </Paragraph>
                  <Paragraph>
                    $$
                    \&#123;a,b\&#125;^* = \&#123;\epsilon, a, b, aa, ab, ba, bb, aaa, aab, aba, ...\&#125;
                    $$
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    Ein Element \(x \in \Sigma^*\), also einen endlichen String aus \(\Sigma\)-Symbolen,
                    bezeichnen wir als{" "}
                    <em>
                      Wort über \(\Sigma\)
                    </em>
                    .
                    Mit \(\Sigma^+\) bezeichnen wir die Menge aller nichtleeren Strings, also
                    \(\Sigma^+ = \Sigma^* \setminus \&#123;\epsilon\&#125;\).
                  </Paragraph>
                </Paragraph>
                <h2>
                  <Paragraph>
                    Sprachen
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Eine Teilmenge \(L \subseteq \Sigma\) bezeichnen wir in diesem Kontext als{" "}
                    <em>
                      Sprache
                    </em>
                    und
                    kürzen Sie oft mit \(L\) ab, was für{" "}
                    <em>
                      language
                    </em>
                    steht. Beispiele für Sprachen wären
                  </Paragraph>
                </Paragraph>
                <ol>
                  <li>
                    <Paragraph>
                      Die Sprache aller syntaktisch korrekten Emailadressen.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Die Sprache aller Java-Programme, die ohne Fehlermeldung kompilieren
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Die Sprache aller Java-Programme, die kompilieren, dann aber mit einem Laufzeitfehler
                      abbrechen.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Die Sprache aller Java-Programme, die kompilieren und nicht mit einem Laufzeitfehler
                      abbrechen.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Die Sprache aller Wörter über \(\&#123;a,b\&#125;\), die gleich viele \(a\)'s wie \(b\)'s enthalten.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Die Sprache aller Palindrome über \(\&#123;a,b,c,d\&#125;\), also Wörter, die von vorne wie hinten
                      gelesen gleich aussehen.
                    </Paragraph>
                  </li>
                </ol>
                <Paragraph>
                  <Paragraph>
                    Wir wollen herausfinden, welche Arten von Sprachen wir mit den im letzten Abschnitt eingeführen
                    Regelwerk
                    aus Ableitungen beschreiben können. Für die gerade aufgelisteten sechs Sprachen lautet die
                    Antwort
                  </Paragraph>
                </Paragraph>
                <ol>
                  <li>
                    <Paragraph>
                      Ja, können wir.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Ja, wenn wir leicht komplexere Ableitungsregeln erlauben.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Ja, wenn wir leicht komplexere Ableitungsregeln erlaubten.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Nein, können wir nicht.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Ja, können wir.
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Ja, können wir.
                    </Paragraph>
                  </li>
                </ol>
                <h2>
                  <Paragraph>
                    Grammatiken
                  </Paragraph>
                </h2>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Definition
                    </span>
                    {" "}{" "}
                    <b>
                      (Kontextfreie Grammatik).
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Eine{" "}
                    <em>
                      kontextfreie Grammatik
                    </em>
                    besteht aus
                  </Paragraph>
                  <ol>
                    <li>
                      <Paragraph>
                        einem endlichen Alphabet \(\Sigma\), den{" "}
                        <em>
                          terminalen Symbolen
                        </em>
                        ;
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        einer dazu disjunkten endlichen Menge \(N\), genannt die{" "}
                        <em>
                          nichtterminalen
                          Symbole
                        </em>
                        ;{" "}
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        einer endlichen Menge \(P\) von{" "}
                        <em>
                          Produktionsregeln
                        </em>
                        der Form
                        \(X \rightarrow \alpha\) mit \(X \in N\) und \(\alpha \in (\Sigma \cup \N)^*\);
                        formal also \(P \subseteq N \times (\Sigma \cup \N)^*\).
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        einem Startsymbol \(S \in N\).
                      </Paragraph>
                    </li>
                  </ol>
                  <Paragraph>
                    Die Grammatik \(G\) ist also ein 4-Tupel \((\Sigma, N, P, S)\).
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Woher der Name{" "}
                    <em>
                      kontextfrei
                    </em>
                    kommt, werden Sie hoffentlich verstehen, wenn wir
                  </Paragraph>
                  <Paragraph>
                    <em>
                      Ableitungen
                    </em>
                    definiert haben.
                    Die Tradition will es, dass wir für die terminalen Symbole
                    Zahlen oder lateinsiche Kleinbuchstaben und für die nichtterminalen Symbole
                    lateinische Großbuchstaben verwenden.
                    Dies ist eine Konvention, die hilfreich ist, solange wir auf abstrakt-theoretischer
                    Ebene über formale Grammatiken sprechen; wenn Sie z.B. eine Grammatik
                    für Java erstellen wollen, dann wird \(\Sigma\) natürlich auch Großbuchstaben enthalten.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Beispiel
                    </span>
                    Wir betrachten die Grammatik \(G = (\&#123;a,b\&#125;, \&#123;S, A, B\&#125;, P, S)\) mit den Produktionsregeln
                    \begin&#123;align*&#125;
                    S&amp;\rightarrow A B \\
                    A&amp;\rightarrow \epsilon \ | \ a A \\
                    B&amp;\rightarrow \epsilon \ | \ b B \ . \\
                    \end&#123;align*&#125;
                    Formal sind die Produktionsregeln \(P\) eine Teilmenge von \( N \times (\Sigma \cup \N)^*\),
                    also
                    {" "}
                  </Paragraph>
                  <Paragraph>
                    $$
                    P = \&#123; (S, AB), (A, \epsilon), (A, aA), (B, \epsilon), (B, bB) \&#125; \ .
                    $$
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    Für konkrete Beispiele wie die gerade betrachtete Grammatik jedoch verwenden wir einfach die
                    Pfeilschreibweise \(S \rightarrow AB, \dots\). Hier ist
                    eine{" "}
                    <em>
                      Ableitung
                    </em>
                    basierend auf der Grammatik:
                    \begin&#123;align*&#125;
                    S \Rightarrow AB \Rightarrow aAB \Rightarrow aAbB \Rightarrow aAbbB
                    \Rightarrow aAbb \Rightarrow abb \ .
                    \end&#123;align*&#125;
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      In jedem Schritt wählen wir ein Nichtterminal aus, zum Beispiel im zweiten Schritt \(A\),
                      und wenden eine Regel an, zum Beispiel \(A \rightarrow aA\). Dadurch
                      wird \(AB\) zu \(aAB\).
                      Wir setzen diese Ableitungsschritte so lange fort, bis nur noch terminale Symbole
                      übrigbleiben. Dann hat sich ein Wort \(\alpha \in \Sigma^*\) ergeben.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Definition
                    </span>
                    Gegeben sei eine kontextfreie Grammatik \(G = (\Sigma, N, P, S)\).
                    Ein String \(\alpha \in (\Sigma \cup N)^*\) heißt{" "}
                    <em>
                      Wortform
                    </em>
                    (im Gegensatz
                    zu einem Wort \(x \in \Sigma^*)\).
                    Für zwei Wortformen \(\alpha , \beta\) schreiben wir
                    {" "}
                  </Paragraph>
                  <Paragraph>
                    $$
                    \alpha \Rightarrow \beta
                    $$
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    wenn wir \(\alpha\) zu \(\beta\) machen können, indem wir ein nichtterminales
                    Symbol \(X\) in \(\alpha\) durch die rechte Seite \(X \rightarrow \gamma\) ersetzen können.
                    Formal gesprochen, wenn wir \(\alpha = \alpha_1 X \alpha_2\) und \(\beta = \beta_1 \gamma
                    \beta_2\)
                    mit Wortformen \(\alpha_1, \alpha_2, \beta_1, \gamma, \beta_2\) und einem Nichtterminal
                    \(X\) schreiben können, so dass \(X \rightarrow \gamma \) eine Produktionsregel in \(P\) ist.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wenn wir \(\alpha = \beta\) "vorlesen", dann sagen wir{" "}
                      <em>
                        \(\beta\) kann aus \(\alpha\) in
                        einem Schritt abgeleitet werden
                      </em>
                      .
                      Wenn \(\beta\) aus \(\alpha\) in mehreren (im Extremfall null) Schritten
                      abgeleitet werden kann, so schreiben wir \(\alpha \Rightarrow^* \beta\).
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Formal bedeutet \(\alpha \Rightarrow^* \beta\), dass es ein \(k \geq 0\) gibt
                      und "Zwischenwortformen" \(\alpha_0, \alpha_1, \dots, \alpha_k\) mit
                      \(\alpha = \alpha_0\) und \(\alpha_k = \beta\), sodass
                      \(\alpha_i \Rightarrow \alpha_&#123;i+1&#125;\) für alle \(i = 0, 1, \dots, k-1\) gilt.
                      Dies schließt den "trivialen" Fall \(k=0\) mit ein, in welchem \(\alpha = \beta\) gilt.
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Nochmals: wenn \(\alpha\) die Form \(\alpha_1 X \alpha_2\) hat, dann dürfen Sie
                      das Nichtterminal \(X\) durch die rechte Seite einer Produktionsregel \(X \rightarrow \gamma\)
                      ersetzen; Sie dürfen das unabhängig von dem{" "}
                      <em>
                        Kontext
                      </em>
                      , in welchem \(X\) in
                      der Wortform \(\alpha\) vorkommt. Daher rührt der Name{" "}
                      <em>
                        kontextfreie Grammatik
                      </em>
                      .
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Beachten Sie, dass \(P\) per Definition eine{" "}
                      <em>
                        endliche Menge
                      </em>
                      von Regeln
                      sein muss, dass jedoch \(\Rightarrow\) im Allgemeinen unendlich ist. Bereits
                      für unsere einfache Grammatik mit den Produktionsregeln
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\rightarrow A B \\
                  A&amp;\rightarrow \epsilon \ | \ a A \\
                  B&amp;\rightarrow \epsilon \ | \ b B \ . \\
                  \end&#123;align*&#125;
                  haben wir beispielsweise
                  \begin&#123;align*&#125;
                  A&amp;\rightarrow aA \\
                  aA&amp;\rightarrow aaA \\
                  aaA&amp;\rightarrow aaaA \\
                  \dots
                  \end&#123;align*&#125;
                  und sehen, dass die Menge aller Paare \(\alpha \Rightarrow \beta\) unendlich ist.
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Definition
                    </span>
                    {" "}{" "}
                    <b>
                      (Die von einer Grammatik erzeugte Sprache).
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Sei \(G = (\Sigma, N, P, S) \) eine kontextfreie Grammatik. Die von \(G\) erzeugte Sprache
                    \(L(G)\) ist die Menge aller Wörter, die vom Startsymbol \(S\) abgeleitet werden können, also
                    \begin&#123;align*&#125;
                    L(G) := \&#123;x \in \Sigma^* \ | \ S \Rightarrow^* x\&#125; \ .
                    \end&#123;align*&#125;
                    Wenn es zu einer Sprache \(L \subseteq \Sigma^*\) eine kontextfreie Grammatik \(G\) mit
                    \(L(G) = L\) gibt, so nennen wir \(L\) eine{" "}
                    <em>
                      kontextfreie Sprache
                    </em>
                    .
                  </Paragraph>
                </div>
                <Paragraph>
                  Beachten Sie, dass in dem obigen Beispiel die Wortform
                  \(aaAB\) zwar aus \(S\) abgeleitet werden kann, allerdings kein{" "}
                  <em>
                    Wort
                  </em>
                  ist,
                  da es noch nichtterminale Symbole enthält. Es gilt also \(aaAB \not \in L(G)\).
                  Oft können wir \(L(G)\) kompakt mit natürlicher Sprache beschreiben:
                </Paragraph>
              </div>
              <div class="well container theorem">
                <Paragraph>
                  <span class="numbered-title">
                    Beispiel.
                  </span>
                  Sei \(G\) die zuletzt betrachtete Grammatik. Dann ist \(L(G)\) die
                  Menge aller Wörter der Form \(a^* b^*\), also Wörter, in denen auf beliebig viele
                  \(a\)'s beliebig viele \(b\)'s folgen.
                </Paragraph>
              </div>
              <Paragraph>
                <Paragraph>
                  Wir betrachten nun einige weitere Beispiele
                </Paragraph>
              </Paragraph>
              <div class="well container theorem">
                <Paragraph>
                  <span class="numbered-title">
                    Beispiel
                  </span>
                  Wir betrachten die Grammatik \(G_2 = (\&#123;a,b\&#125;, \&#123;S\&#125;, P, S)\) mit den Produktionsregeln
                  \begin&#123;align&#125;
                  S&amp;\rightarrow aSbS \\
                  S&amp;\rightarrow bSaS \\
                  S&amp;\rightarrow \epsilon \ .
                  \end&#123;align&#125;
                  Hier sind mögliche Ableitungen des Wortes \(abab\). Zur Verdeutlichung
                  schreiben wir über den Pfeil \(\Rightarrow\) die Nummer der Regel, die
                  wir angewendet haben:
                  \begin&#123;align*&#125;
                  S&amp;\stackrel&#123;(1)&#125;&#123;\Rightarrow&#125; aSbS
                  \stackrel&#123;(1)&#125;&#123;\Rightarrow&#125; aSbaSbS
                  \stackrel&#123;(3)&#125;&#123;\Rightarrow&#125; aSbaSb
                  \stackrel&#123;(3)&#125;&#123;\Rightarrow&#125; abaSb
                  \stackrel&#123;(3)&#125;&#123;\Rightarrow&#125; abab \\
                  S&amp;\stackrel&#123;(1)&#125;&#123;\Rightarrow&#125; aSbS
                  \stackrel&#123;(3)&#125;&#123;\Rightarrow&#125; abS
                  \stackrel&#123;(1)&#125;&#123;\Rightarrow&#125; abaSbS
                  \stackrel&#123;(3)&#125;&#123;\Rightarrow&#125; ababS
                  \stackrel&#123;(3)&#125;&#123;\Rightarrow&#125; abab \ .
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wir sehen also: das gleiche Wort kann mehrere Ableitungen haben.
                      Da die Ersetzungsregeln{" "}
                      <em>
                        kontextfrei
                      </em>
                      sind, spielt es keine Rolle, in welcher
                      Reihenfolge wir nichtterminale Symbole ersetzen. Wenn Sie scharf hinschauen,
                      werden Sie erkennen, dass die beiden Ableitungen "irgendwie gleich" sind, dass nur
                      die Ableitungen in anderer Reihenfolge durchgeführt worden sind. Ich werde
                      das in einem späteren Kapitel formal definieren, was ich mit damit meine.
                      Um Ordnung in das Chaos zu bringen, könnten wir uns zum Beispiel einigen,
                      dass man immer das am weitesten links stehende Nichtterminal ersetzen muss.
                      Das nennt man eine{" "}
                      <em>
                        Linksableitung
                      </em>
                      . Dies ist nicht wirklich eine
                      Einschränkung, da die Ersetzungsreihenfolge keine Rolle spielt.
                      Wir sehen, dass die zweite Ableitung des Wortes \(abab\) oben eine
                      Linksableitung ist; zusammen mit der Beschriftung
                      \(\stackrel&#123;(i)&#125;&#123;\Rightarrow&#125;\), die die Nummer der angewendeten Regel
                      angibt, ist eindeutig, wie wir von \(S\) zum abgeleiteten Wort gekommen sind.
                      Betrachten Sie nun eine weitere Linksableitung \(S \Rightarrow^* abab\):
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\stackrel&#123;(1)&#125;&#123;\Rightarrow&#125; aSbS
                  \stackrel&#123;(2)&#125;&#123;\Rightarrow&#125; abSaSbS
                  \stackrel&#123;(3)&#125;&#123;\Rightarrow&#125; abaSbS
                  \stackrel&#123;(3)&#125;&#123;\Rightarrow&#125; ababS
                  \stackrel&#123;(3)&#125;&#123;\Rightarrow&#125; abab
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Sehen Sie, dass diese Ableitung{" "}
                    <em>
                      qualitativ
                    </em>
                    anders ist, da
                    wir hier auch die Regel \(S \rightarrow bSaS\) angewendet haben? Um die
                    Struktur der Ableitung zu verdeutlichen, könnten wir
                    die ersten beiden Ableitungen mit
                    Wort \(S \Rightarrow^* (ab)(ab)\) bezeichnen und die dritte mit Wort \(S \Rightarrow^* a(ba)b\).
                  </Paragraph>
                </Paragraph>
              </div>
              <h2>
                <Paragraph>
                  Ziele der Theorie der formalen Sprachen
                </Paragraph>
              </h2>
              <Paragraph>
                <Paragraph>
                  Ganz allgemein gesagt wollen wir lernen, wie wir Sprachen formal beschreiben können;
                  wie wir, gegeben eine Grammatik \(G\) und ein Zielwort \(x\), eine Ableitung
                  \(G \Rightarrow^* x\) finden können. Anhand der Ableitungssequenz können wir
                  dann oft auf die logische Struktur von \(x\) schließen. Handelt es sich bei
                  \(G\) zum Beispiel um eine Grammatik für die Programmiersprache Java,
                  so wäre ein Ziel, aus der Ableitungssequenz \(G \Rightarrow^* x\) die Struktur
                  des Programms \(x\), also Klassenstruktur, Methoden, etc., ablesen zu können und schlussendlich
                  das Programm in ausführbaren Maschinencode kompilieren zu können.
                </Paragraph>
              </Paragraph>
              <div class="well container theorem">
                <Paragraph>
                  <span class="numbered-title">
                    Algorithmisches Problem: Parsing
                  </span>
                  Gegeben eine (kontextfreie) Grammatik \(G\) und ein Zielwort \(x\),
                  finde eine Ableitung \(G \Rightarrow^* x\), falls es so eine gibt.
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Für einen String \(x\) eine Ableitung zu finden bezeichnen wir als{" "}
                    <em>
                      parsen
                    </em>
                    ,
                    das zugehörige Hauptwort als{" "}
                    <em>
                      Parsing
                    </em>
                    .
                  </Paragraph>
                </Paragraph>
              </div>
              <Paragraph>
                <Paragraph>
                  {" "}{" "}
                  <b>
                    Die gute Nachricht:
                  </b>
                  {" "}{" "}
                </Paragraph>
                <Paragraph>
                  Die gute Nachricht: wir kennen Algorithmen, die dieses
                  Problem im effizient lösen, wenn wir den "theoretischen" Effizienzbegriff
                  zugrund legen.{" "}
                </Paragraph>
              </Paragraph>
              <Paragraph>
                <Paragraph>
                  {" "}{" "}
                  <b>
                    Die schlechte Nachricht:
                  </b>
                  {" "}
                  wir kennen keinen Algorithmus,
                  der das Parsing kontextfreier Sprachen in seiner ganzen Allgemeinheit
                  in{" "}
                  <em>
                    linearer Zeit
                  </em>
                  erledigt, dessen Laufzeit also proportional zur Länge des Zielwortes
                  \(x\) ist. Dies ist aber, was wir in der Praxis, zum Beispiel bei Compilern, erwarten.
                </Paragraph>
              </Paragraph>
              <Paragraph>
                <Paragraph>
                  {" "}{" "}
                  <b>
                    Die gute Nachricht:
                  </b>
                  {" "}
                  in fast allen praktisch relevanten Fällen haben
                  wir es mit Grammatiken zu tun, die Parsing in linearer Zeit ermöglichen.
                  Und wenn wir Programmiersprachen, Datenformate etc. entwerfen, haben wir es ja in der Hand,
                  Sprache und Grammatik so anzulegen, dass effizientes Parsen möglich ist.{" "}
                </Paragraph>
              </Paragraph>
              <Paragraph>
                <Paragraph>
                  Im nächsten Kapitel lernen wir eine stark eingeschränkte, aber dennoch sehr wichtige Klasse
                  kontextfreier Grammatik kennen, die allesamt ein sehr effizientes Parsing
                  erlauben: die sogenannten{" "}
                  <em>
                    regulären
                  </em>
                  Grammatiken.{" "}
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