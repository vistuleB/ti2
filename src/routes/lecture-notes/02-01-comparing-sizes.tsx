import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        title_gr="Wer ist größer?"
        title_en="comparing sizes"
        number={2.1}
        path="/lecture-notes9.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="02-00-infinite-sets">
            &lt;&lt; Kapitel 2.0
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="02-02-examples-of-equipotent-sets">
            Kapitel 2.2 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    2.1 Wer ist größer?
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Für endliche Mengen haben den Begriff der 
                      {" "}
                      <i>
                        Größe
                      </i>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      $\&#123;0,1,2,3,4,5,6,7,8,9\&#125;$ hat zehn Elemente und ist somit größer als
                      $\&#123;a,e,i,o,u\&#125;$, die nur fünf Elemente hat. Können wir auch für
                      unendliche Mengen einen Größenbegriff einführen, oder sie zumindest
                      hinsichtlich ihrer Größe vergleichen?
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Bei den "üblichen" unendlichen Mengen $\N, \Z, \Q, \R$ scheint das zu
                      gehen. Es gilt nämlich $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$,
                      und damit können wir doch mit Fug und Recht behaupten:
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <i>
                        Die Menge der ganzen Zahlen ist kleiner als die der rationalen
                        Zahlen
                      </i>
                      {" "}
                      .
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Unser erster Versuch, unendliche Mengen ihrer Größe nach zu
                      vergleichen, verwendet Mengeninklusion: wenn $A \subseteq B$ gilt,
                      dann sagen wir, dass $A$ kleiner gleich $B$ gilt. Allerdings hat
                      dieser Größenbegriff einen großen Nachteil: welche der beiden Mengen
                      ist Ihrer Meinung denn größer:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125; \&#123;\dots, -4, -2, 0, 2, 4, 6, \dots\&#125; \quad
                  \textnormal&#123;oder&#125;\quad \&#123;0,1,2,3, \dots\&#125; ? \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Also die geraden ganzen Zahlen oder die natürlichen? Oder noch
                    schlimmer: ist $\Q$ oder $\&#123;a,b\&#125;^*$ größer? Die zweite Menge hat ja
                    gar nichts mit Zahlen zu tun, sondern besteht aus Strings mit den
                    Symbolen $a$ und $b$. Und generell: auch zwischen den Mengen
                    $\&#123;0,1,2,3,4,5,6,7,8,9\&#125;$ und $\&#123;a,e,i,o,u\&#125;$ gibt es keine
                    Inklusionsrelation, und dennoch ist erstere ganz klar größer als
                    letztere.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Eine rigorose und belastbare Weise, unendliche Mengen hinsichtlich
                    ihrer Größe zu vergleichen, hat
                  </Paragraph>
                  <Paragraph>
                    <a href="https://en.wikipedia.org/wiki/Georg_Cantor">
                      Georg Cantor
                    </a>
                    Ende des 19. Jahrhunderts gefunden. Sie war anfangs nicht
                    unumstritten.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Beispiel
                      </span>
                      Beginnen wir mit einem
                      einfachen Beispiel und betrachten die zwei Mengen $\N =
                      \&#123;0,1,2,3,4,\dots\&#125;$ und $\N^+ = \&#123;1,2,3,4,\dots\&#125;$. Beide sind
                      unendlich, und $\N^+ \subsetneq \N$. Dennoch sind sie in gewisser
                      Weise gleich groß. Ihre Elemente lassen sich nämlich einander
                      paarweise zuordnen:
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="width: 70%"
                      src="../img/infinite-sets/N-N-plus.svg" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Wir können diese Zuordnung auch mit einer einfachen Formel
                        beschreiben. Die Funktion
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125; f : \N&amp;\rightarrow \N^+ \\ n&amp;\mapsto n+1
                    \end&#123;align*&#125;
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      ist eine Bijektion.
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Diese anfangs etwas überraschende Tatsache, dass $\N$ und $\N^+$
                    "gleich groß" sind, ist als 
                    {" "}
                    <i>
                      Hilberts Hotel
                    </i>
                    {" "}
                    bekannt. Das Hotel
                    hat unendlich viele Zimmer, für jede Zahl $n \in \N^+$ eins. Dann
                    kommt ein neuer Gast (die $0$) und braucht ein Zimmer. Er kriegt das
                    Zimmer $1$. Da dies aber schon belegt ist, wird die Person, die bisher
                    in Zimmer 1 logiert hat, auf Zimmer 2 verlegt; die dortige auf Zimmer
                    3, und so weiter. Das Hotel ist also voll belegt, kann aber dennoch
                    weitere Gäste aufnehmen.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Beispiel
                      </span>
                      Ermutigt von unserem
                      Erfolg gerade eben betrachten wir zwei unendliche Mengen, die sich
                      stärker unterscheiden: $\N$ und $\Z = \&#123;\dots, -2, -1, 0, 1, 2,
                      \dots\&#125;$. Wir können diese beiden nicht so schön nebeneinander legen
                      wie $\N$ und $\N^+$ in der obigen Abbildung. Um die Elemente
                      paarweise zuzuordnen, müssen wir hin- und herspringen:
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="width: 70%"
                      src="../img/infinite-sets/N-to-Z.svg" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Dies ist etwas unübersichtlich. Besser geht es, wenn wir $\Z$
                      umstellen:
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="width: 70%"
                      src="../img/infinite-sets/N-to-Z-nicer.svg" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Wir können also unsere Bijektion $f : \N \rightarrow \Z$ wie folgt
                        definieren:
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125; f : \N&amp;\rightarrow \Z \\ n&amp;\mapsto \begin&#123;cases&#125;
                    \frac&#123;n&#125;&#123;2&#125;&amp;\textnormal&#123; wenn $n$ gerade ist,&#125; \\ - \frac&#123;n+1&#125;&#123;2&#125;&
                    \textnormal&#123; wenn $n$ ungerade ist.&#125; \end&#123;cases&#125; \end&#123;align*&#125;
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Übungsaufgabe
                      </span>
                      Finden Sie eine "geschlossene" Form für die Bijektion $f : \N
                      \rightarrow \Z$. Mit "geschlossen" meine ich, dass Sie sie mit den
                      üblichen Operatoren (mal, plus, hoch, minus, geteilt durch) ohne
                      Fallunterscheidung schreiben können.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Anmerkung:
                      </b>
                      {" "}
                      es ist überhaupt nicht schlimm, eine
                      Funktion mit einer Fallunterscheidung zu definieren. Sie ist dadurch
                      nicht etwa eine "Funktion zweiter Klasse".
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Übungsaufgabe
                      </span>
                      Finden Sie die Umkehrfunktion $f^&#123;-1&#125; : \Z \rightarrow \N$. Gerne
                      anfangs mit Fallunterscheidung, dann bitte als geschlossene Formel
                      ohne Fallunterscheidung.
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Wir sind nun reif für eine formale Definition:
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Definition
                      </span>
                      Zwei Mengen $A$ und
                      $B$ heißen 
                      {" "}
                      <i>
                        gleichmächtig
                      </i>
                      {" "}
                      , wenn es eine Bijektion $f : A
                      \rightarrow B$ gibt. Wir schreiben in diesem Falle $A \approx B$.
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Es gilt trivialerweise immer $A \approx A$, da wir ja die
                    Identitätsfunktion $x \mapsto x$ als Bijektion nehmen können. Wenn es
                    eine Bijektion $f : A \rightarrow B$ gibt, dann natürlich auch eine
                    Umkehrfunktion $f^&#123;-1&#125; : B \rightarrow A$. Wenn $f : A \rightarrow B$
                    und $g : B \rightarrow C$ Bijektionen sind, dann ist $g \circ f : A
                    \rightarrow C$ auch eine. Wir sehen: Die Relation $\approx$ ist
                    reflexiv, symmetrisch und transitiv und ist somit eine
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                    <i>
                      Äquivalenzrelation
                    </i>
                    {" "}
                    .
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Definition
                      </span>
                      Eine Menge $A$ mit $A
                      \approx \N$, die also gleichmächtig zu den natürlichen Zahlen ist,
                      nennt man 
                      {" "}
                      <i>
                        abzählbar unendlich
                      </i>
                      {" "}
                      , auf Englisch
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <i>
                        countably infinite
                      </i>
                      {" "}
                      oder einfach 
                      {" "}
                      <i>
                        countable
                      </i>
                      {" "}
                      .
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Wie wir sehen werden, gibt es tatsächlich unendliche Mengen, die
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                    <i>
                      nicht
                    </i>
                    {" "}
                    gleichmächtig mit $\N$ sind, weil sie "viel viel
                    größer" sind. Wir nennen sie 
                    {" "}
                    <i>
                      überabzählbare
                    </i>
                    {" "}
                    Mengen, auf
                    Englisch 
                    {" "}
                    <i>
                      uncountably infinite
                    </i>
                    {" "}
                    .
                  </Paragraph>
                </Paragraph>
                <h2>
                  <Paragraph>
                    Was ist unendlich?
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Der Begriff der Gleichmächtigkeit liefert uns nun eine wunderbar
                    einfache und rigorose Definition von Unendlichkeit.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Definition
                      </span>
                      Eine Menge $A$ heißt
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <i>
                        unendlich
                      </i>
                      {" "}
                      , wenn es eine echte Teilmenge $A' \subsetneq A$
                      gibt, zu der sie gleichmächtig ist, also $A' \approx A$.
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Als Beispiel haben wir $\N^+ \subsetneq \N$ mit $\N^+ \approx \N$
                    gesehen. Also ist $\N$ im obigen Sinne unendlich.
                  </Paragraph>
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Übungsaufgabe
                      </span>
                      Zeigen Sie: wenn eine Menge $A$ unendlich ist (im Sinne der obigen
                      Definition), dann gibt es eine Teilmenge $X \subseteq A$ mit $X
                      \approx \N$.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Hinweis:
                      </b>
                      {" "}
                      Tappen Sie nicht in die "Das ist doch
                      offensichtlich"-Falle: die Menge $A$ könnte ja viel größer sein als
                      $\N$ und keine für Sie "greifbare" Struktur haben. Ihre Aufgabe ist
                      es, dennoch eine abzählbar unendliche Teilmenge $X \subseteq A$ zu
                      finden.
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Angesichts der letzten Übungsaufgabe können wir also sagen, dass
                    abzählbare Unendlichkeit die kleinste Stufe der Unendlichkeit ist.
                    Unterhalb von abzählbar kommen nur noch die endlichen Mengen.
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