import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter number={33}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="05-04-LL1-grammars">
            <Paragraph>
              &lt;&lt; Kapitel 05.04
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="05-05-b-Parser-in-Java">
            <Paragraph>
              Kapitel 05.05 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle" />
                </h1>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Betrachten wir die kontextfreie Grammatik $G$ für arithmetische Ausdrücke mit den
                      Variablen $x, y, z$ und strenger Klammerung über dem Alphabet
                      $\Sigma = \&#123;x, y, z, (, ), +, *\&#125;$:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\rightarrow x \ |\ y\ |\ z \\
                  S&amp;\rightarrow (S+S) \\
                  S&amp;\rightarrow (S
                  <b>
                    S)
                    \end&#123;align
                  </b>
                  &#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Sie kann also $(x + (y
                      <b>
                        z))$ ableiten aber eben nicht $(x + y + z)$. Wie können wir nun einen
                        Parser für $G$ schreiben? Also einen Algorithmus, der ein Wort $w \in \Sigma^
                      </b>
                      $ nimmt und einen
                      Ableitungsbaum konstruiert (falls $w \in L(G)$)?
                      Wenn wir uns an das LL-Paradigma halten und eine Linksableitung bauen wollen, dann stoßen wir
                      schon ganz am Anfang auf ein Problem: wenn zum Beispiel
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  w = ((((\dots
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      dann wissen wir nicht, ob wir als ersten Schritt $S \rightarrow (S+S)$ oder $S \rightarrow
                      (S*S)$ tätigen sollen. Das geht auch nicht, wenn wir $k$ Zeichen vorauslesen dürfen, weil
                      der $(((\dots$-Präfix ja länger als $k$ sein kann. Nein, wir müssen anders vorgehen.
                      Wir könnten beispielsweise die Grammatik ändern:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\rightarrow x \ | \ y \ | \ z \\
                  S&amp;\rightarrow (SOS) \\
                  O&amp;\rightarrow + \ | \{" "}
                  <b>
                    {" "}
                    \end&#123;align
                  </b>
                  &#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Das geht aber nicht immer:
                  </Paragraph>
                </Paragraph>
                <div
                  id="example-more-a-than-b"
                  class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        <span class="numbered-title">
                          Beispiel
                        </span>
                        Betrachten wir die recht einfache Sprache{" "}
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125;
                    L_2 := \&#123;a^&#123;m+k&#125; b^m c \ | \ m \geq 1, k \geq 0 \&#125; \ ,
                    \end&#123;align*&#125;
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        also{" "}
                        <em>
                          beliebig viele $a$'s, gefolgt von gleich vielen oder weniger $b$'s (aber mindestens
                          einem), abgeschlossen
                          mit einem $c$
                        </em>
                        . Eine
                        Grammatik ist schnell geschrieben:
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align&#125;
                    S&amp;\rightarrow aS \\
                    S&amp;\rightarrow Xc \\
                    X&amp;\rightarrow aXb \\
                    X&amp;\rightarrow ab
                    \end&#123;align&#125;
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wenn wir jetzt die ersten $k$ Zeichen lesen: $aaaa \dots$, dann
                      gibt es keinen Weg, zu entscheiden, ob danach gleich viele oder weniger
                      $b$'s folgen werden, ob wir also $S \rightarrow sS$ oder $S \rightarrow Xc$ anwenden sollen.
                      Das lässt sich auch nicht durch Umschreiben der Grammatik lösen. Wir müssen
                      lesen, bis wir ein $b$ sehen.
                    </Paragraph>
                  </Paragraph>
                </div>
                <h2>
                  <Paragraph>
                    Das LR-Paradigma
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Wir brauchen einen Paradigmenwechsel. Das LL-Paradigma war ja, mit $S$ zu starten und,
                    geleitet von den nächsten $k$ Zeichen, zu entscheiden, welche Ableitungsregel als nächstes
                    anzuwenden ist. Hierbei haben wir immer versucht, für das am weitesten
                    links stehende Nichtterminal eine Regel zu finden. Wir beschreiben nun ein ganz anderes
                    Vorgehen: wir lesen das Eingabewort $v$ von links nach rechts, unterhalten also
                    einen{" "}
                    <em>
                      Stack
                    </em>
                    , auf dem ein Präfix $\gamma$ von $v$ liegt,
                    bis wir am rechten Ende die rechte Seite einer Produktionsregel erkennen - bis also
                    $\gamma = \alpha \beta$ und es eine Produktion $X \rightarrow \beta$ gibt. Dann ersetzen
                    wir $\alpha \beta$ durch $\alpha X$.
                    Unser Stack enthält nun keine Präfix von $v$ mehr, sondern eine Wortform $\gamma$.
                    Zusammen mit dem ungelesenen Teil $w$ des Eingabewortes ergibt das eine
                    Wortform $\gamma w$. Solange es eine Rechtsableitung
                    $S \Pets&#123;&#125; \gamma w \Pets&#123;&#125; v$ gibt, sind wir auf dem richtigen Weg.
                    Am Besten betrachten wir ein Beispiel für
                    $L_2 = \&#123;a^&#123;m+k&#125; b^m c \ | \ m \geq 1, k \geq 0\&#125;$. Die Farbe grau bedeutet
                    hier, dass wir das Eingabezeichen noch nicht gelesen haben.
                  </Paragraph>
                </Paragraph>
                <figure class="centered-figure well container">
                  <a
                    data-slide="prev"
                    href="#aaabbc-sprache"
                    class="left carousel-control-prev-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <a
                    data-slide="next"
                    href="#aaabbc-sprache"
                    class="right carousel-control-next-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <div
                    style="display:inline-block"
                    data-interval={false}
                    class="carousel"
                    id="aaabbc-sprache">
                    <ol class="carousel-indicators">
                      <li
                        class="active"
                        data-slide-to={1}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={2}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={3}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={4}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={5}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={6}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={7}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={8}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={9}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={10}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={11}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={12}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={13}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={14}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={15}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={16}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={17}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={18}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={19}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={20}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={21}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={22}
                        data-target="#aaabbc-sprache" />
                      <li
                        data-slide-to={23}
                        data-target="#aaabbc-sprache" />
                    </ol>
                    <div
                      style="display:inline-block"
                      class="carousel-inner">
                      <div class="item active">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </div>
                  </div>
                </figure>
                <Paragraph>
                  <Paragraph>
                    Betrachten wir noch ein Beispiel, nun für die etwas nützlichere Grammatik
                    der streng geklammerten arithmetischen Ausdrücke.
                  </Paragraph>
                </Paragraph>
                <figure class="centered-figure well container">
                  <a
                    data-slide="prev"
                    href="#arithm"
                    class="left carousel-control-prev-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <a
                    data-slide="next"
                    href="#arithm"
                    class="right carousel-control-next-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <div
                    style="display:inline-block"
                    data-interval={false}
                    class="carousel"
                    id="arithm">
                    <ol class="carousel-indicators">
                      <li
                        class="active"
                        data-slide-to={1}
                        data-target="#arithm" />
                      <li
                        data-slide-to={2}
                        data-target="#arithm" />
                      <li
                        data-slide-to={3}
                        data-target="#arithm" />
                      <li
                        data-slide-to={4}
                        data-target="#arithm" />
                      <li
                        data-slide-to={5}
                        data-target="#arithm" />
                      <li
                        data-slide-to={6}
                        data-target="#arithm" />
                      <li
                        data-slide-to={7}
                        data-target="#arithm" />
                      <li
                        data-slide-to={8}
                        data-target="#arithm" />
                      <li
                        data-slide-to={9}
                        data-target="#arithm" />
                      <li
                        data-slide-to={10}
                        data-target="#arithm" />
                      <li
                        data-slide-to={11}
                        data-target="#arithm" />
                      <li
                        data-slide-to={12}
                        data-target="#arithm" />
                      <li
                        data-slide-to={13}
                        data-target="#arithm" />
                      <li
                        data-slide-to={14}
                        data-target="#arithm" />
                      <li
                        data-slide-to={15}
                        data-target="#arithm" />
                      <li
                        data-slide-to={16}
                        data-target="#arithm" />
                      <li
                        data-slide-to={17}
                        data-target="#arithm" />
                      <li
                        data-slide-to={18}
                        data-target="#arithm" />
                      <li
                        data-slide-to={19}
                        data-target="#arithm" />
                      <li
                        data-slide-to={20}
                        data-target="#arithm" />
                      <li
                        data-slide-to={21}
                        data-target="#arithm" />
                      <li
                        data-slide-to={22}
                        data-target="#arithm" />
                    </ol>
                    <div
                      style="display:inline-block"
                      class="carousel-inner">
                      <div class="item active">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </div>
                  </div>
                </figure>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wenn wir uns nun die Ableitung ansehen, die wir gefunden haben:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  \texttt&#123;S&#125; \Step&#123;&#125;
                  \texttt&#123;(S+S)&#125; \Step&#123;&#125;
                  \texttt&#123;(S+(S
                  <b>
                    S))&#125; \Step&#123;&#125;
                    \texttt&#123;(S+(S
                  </b>
                  z))&#125; \Step&#123;&#125;
                  \texttt&#123;(S+(y
                  <b>
                    z))&#125; \Step&#123;&#125;
                    \texttt&#123;(x+(y
                  </b>
                  z))&#125;
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      dann sehen wir, dass es sich um eine Rechtsableitung handelt. Daher der Name LR-Parsing: wir
                      beginnen links (daher das L) und suchen eine Rechtsableitung (daher das R), allerdings in
                      umgekehrter
                      Reihenfolge. Statt von $S$ ausgehend $w$ abzuleiten, also $S \Step&#123;&#125;^* w$, versuchen
                      wir $w$ zu $S$ zu{" "}
                      <em>
                        reduzieren
                      </em>
                      , also $w \Pets&#123;&#125;^* S$.
                      Allerdings ist das nicht immer so einfach: manchmal ist nicht auf den ersten Blick erkennbar,
                      welche Produktionsregel wir (rückwärts) anwenden sollen. Hier ein etwas konstruiertes Beispiel:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\rightarrow XYz \\
                  X&amp;\rightarrow aXa \ | \ bXb \ | \ c \\
                  Y&amp;\rightarrow Ya \ | \ Yb \ | \ a \ | \ b
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Die erzeugte Sprache ist{" "}
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  L(G) = \&#123;vcv^Rwz \ | \ v, w \in \&#123;a,b\&#125;^* \&#125;
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Betrachten wir das Eingabewort $acaba$. Wir schreiben nun immer
                    den bis jetzt gelesenen / geparsten Teil des Wortes, gefolgt von dem
                    ungelesen Teil in grau und dahinter
                    in Klammern ,
                    was wir als nächstes tun, also das nächste Zeichen lesen oder eine
                    Regel anwenden.
                  </Paragraph>
                </Paragraph>
                <div class="container">
                  <Paragraph>
                    \begin&#123;align*&#125;
                    &amp;\textcolor&#123;darkgray&#125;&#123;acabaz&#125; \tag&#123;lesen&#125; \\
                    &amp;a\textcolor&#123;darkgray&#125;&#123;cabaz&#125; \tag&#123;lesen&#125; \\
                    &amp;ac\textcolor&#123;darkgray&#125;&#123;abaz&#125; \tag&#123;reduzieren per $X \rightarrow c$&#125; \\
                    &amp;aX\textcolor&#123;darkgray&#125;&#123;abaz&#125; \tag&#123;lesen&#125; \\
                    &amp;aXa\textcolor&#123;darkgray&#125;&#123;baz&#125; \tag&#123;reduzieren per $X \rightarrow aXa$&#125; \\
                    &amp;X\textcolor&#123;darkgray&#125;&#123;baz&#125; \tag&#123;lesen&#125; \\
                    &amp;Xb\textcolor&#123;darkgray&#125;&#123;baz&#125; \tag&#123;reduzieren per $Y \rightarrow b$&#125; \\
                    &amp;XY\textcolor&#123;darkgray&#125;&#123;az&#125; \tag&#123;lesen&#125; \\
                    &amp;XYa\textcolor&#123;darkgray&#125;&#123;z&#125; \tag&#123;reduzieren per $Y \rightarrow Ya$&#125; \\
                    &amp;XY\textcolor&#123;darkgray&#125;&#123;z&#125; \tag&#123;lesen&#125; \\
                    &amp;XYz \tag&#123;reduzieren per $S \rightarrow XYz$&#125; \\
                    &amp;S \tag&#123;fertig&#125;
                    \end&#123;align*&#125;
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Es stellen sich einige Fragen: woher wissen wir zum Beispiel bei
                    $XYa\textcolor&#123;darkgray&#125;&#123;z&#125;$, dass wir per $Y \rightarrow Ya$ reduzieren müssen
                    und nicht per $Y \rightarrow a$? Wir könnten ja auch auf
                    $XYa \Pets&#123;&#125; XYY$ reduzieren. Oder in Schritt 2, bei
                    $a\textcolor&#123;darkgray&#125;&#123;cabaz&#125;$. Da könnten wir ja
                    gleich $a \Pets&#123;&#125; Y$ reduzieren.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        <span class="numbered-title">
                          Beobachtung.
                        </span>
                        Die Reduktion
                        $XYa \Pets&#123;&#125; XYY$ kann nicht richtig sein, weil $XYY$ nie als Präfix in einer
                        Rechtsableitung vorkommen kann. Genauer gesagt: es gibt kein $w \in \Sigma^*$, so dass
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125;
                    S \Step&#123;&#125;^* XYYw \Step&#123;&#125; XYaw
                    \end&#123;align*&#125;
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      eine Rechtsableitung ist.
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wenn wir Glück haben, gibt es immer höchstens eine Reduktionsregel
                      $\alpha \beta w \Pets&#123;&#125; \alpha X w$, so dass
                      $S \Step&#123;&#125;^* \alpha X w \Step&#123;&#125; \alpha \beta w$ in einer Rechtsableitung vorkommen kann.
                      Das hängt von der Grammatik ab. Aber selbst dann brauchen wir einen Algorithmus, der
                      uns sagen kann, ob $XYa \Pets&#123;&#125; XYY$ ein korrekter Reduktionsschritt ist. Dies scheint
                      komplexer, als $w \stackrel&#123;?&#125;&#123;\in&#125; L$ zu entscheiden, ist aber{" "}
                      <em>
                        einfacher
                      </em>
                      !
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Ein zweites Problem ist, dass wir eben manchmal kein Glück haben und es mehrere
                      plausible Reduktionsschritte geben kann. Ein Beispiel wäre die obere Grammatik, leicht
                      abgewandelt:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\rightarrow XY \tag&#123;beachten Sie: oben hatten wir $S \rightarrow XYz$&#125;\\
                  X&amp;\rightarrow aXa \ | \ bXb \ | \ c \\
                  Y&amp;\rightarrow Ya \ | \ Yb \ | \ a \ | \ b
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wenn wir jetzt als einfaches Beispiel $cab$ ableiten wollen:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  \textcolor&#123;darkgray&#125;&#123;cab&#125; \tag&#123;lesen&#125; \\
                  c\textcolor&#123;darkgray&#125;&#123;ab&#125; \tag&#123;reduzieren per $X \rightarrow c$&#125; \\
                  X\textcolor&#123;darkgray&#125;&#123;ab&#125; \tag&#123;lesen&#125; \\
                  Xa\textcolor&#123;darkgray&#125;&#123;ab&#125; \tag&#123;reduzieren per $Y \rightarrow a$&#125; \\
                  XY\textcolor&#123;darkgray&#125;&#123;b&#125; \tag&#123;reduzieren per $Y \rightarrow a$&#125;
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Jetzt liegt die Wortform $XY$ auf unserem Stack und wir haben zwei Möglichkeiten:
                      wir könnten reduzieren, also $XY \Pets&#123;&#125; S$, oder das nächste Zeichen lesen.
                      Ersteres wäre inkorrekt:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  XY\textcolor&#123;darkgray&#125;&#123;b&#125; \Pets&#123;&#125; S \textcolor&#123;darkgray&#125;&#123;b&#125; \ ,
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    wobei $Sb$ eben keine Wortform ist, die in einer Rechtsableitung vorkommen könnte.
                    Das wissen wir aber erst, wenn wir $b$ gelesen haben. Wäre das Eingabewort nämlich nur $ca$,
                    dann
                    wäre $XY \Pets&#123;&#125; S$ tatsächlich die korrekte Reduktion. In der ersten Grammatik
                    hatten wir als "Work-around" ein $z$ am Ende angehängt, um das Wortende zu erkennen.
                    Im Allgemeinen ist es aber leichter, dem Parser zu erlauben, das nächste Zeichen zu lesen.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    All diese Gedanken theoretisch rigoros zu formulieren ist einigermaßen herausvordernd.
                    Daher werden wir erst einmal für eine Grammatik arithmetischer Ausdrücke einen
                    Parser in Java implementieren.
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