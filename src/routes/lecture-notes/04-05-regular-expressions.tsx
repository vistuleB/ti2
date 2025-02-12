import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        count={25}
        title_gr="Reguläre Ausdrücke"
        title_en="regular expressions"
        number={4.5}
        path="/lecture-notes25.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="04-04-regular-grammar-to-fsm">
            &lt;&lt; Kapitel 4.4
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="04-06-limitations-of-regular-grammars">
            Kapitel 4.6 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    4.5 Reguläre Ausdrücke
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Wir werden nun eine weitere Weise finden, reguläre Sprachen zu beschreiben: neben regulären
                    Grammatik (ob normal, erweitert, eingeschränkt),
                    endlichen Automaten und nichtdeterministischen endlichen Automaten
                    gibt es noch die{" "}
                    <i>
                      regulären Ausdrücke
                    </i>
                    . Dies wird wahrscheinlich von allen
                    Beschreibungsweise die sein, mit der Sie in der Praxis
                    am ehesten in Berührung kommen.
                    Wir haben bereits in{" "}
                    <a href="./04-01-regular-grammars.html#baukasten">
                      Kapitel 4.1
                    </a>
                    das
                    Baukastenprinzip kennengelernt:
                  </Paragraph>
                </Paragraph>
                <ol>
                  <li>
                    Wenn \(L_1\) und \(L_2\) reguläre Sprachen sind, dann ist \(L_1 \cup L_2\) auch regulär;
                  </li>
                  <li>
                    dann ist auch die Konkatenation
                    \begin&#123;align*&#125;
                    L
                    <i>
                      1 \circ L
                    </i>
                    2 := \&#123;\alpha \beta \ | \alpha \in L
                    <i>
                      1, \beta \in L
                    </i>
                    2\&#125;
                    \end&#123;align*&#125;
                    regulär;
                  </li>
                  <li>
                    wenn \(L\) regulär ist, dann ist auch ihre Kleenesche Hülle
                    \begin&#123;align*&#125;
                    L^* := \&#123; \alpha
                    <i>
                      1 \dots \alpha
                    </i>
                    n \ | \ n \geq 0, \alpha
                    <i>
                      1,\dots,\alpha
                    </i>
                    n \in L\&#125;
                    \end&#123;align*&#125;
                    regulär.
                  </li>
                </ol>
                <Paragraph>
                  <Paragraph>
                    Darüberhinaus haben wir Techniken kennengelernt, um aus den gegebenen regulären Grammatiken
                    eine neue Grammatik für \(L_1 \cup L_2\), \(L_1 \circ L_2\) und \(L\) konstruieren zu können.
                    Sie sollten sich jetzt folgende Frage stellen:
                  </Paragraph>
                </Paragraph>
                <div style="text-align:center">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Frage:
                    </b>
                    {" "}
                    Können{" "}
                    <i>
                      alle
                    </i>
                    regulären Sprachen nach diesem Baukastenprinzip erstellt werden?
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Damit diese Frage überhaupt die Chance hat, mit{" "}
                    <i>
                      ja
                    </i>
                    beantwortet zu werden, müssen wir
                    "Atome" zur Verfügung stellen, mit denen wir beginnen können. Daher:
                  </Paragraph>
                </Paragraph>
                <ul>
                  <li>
                    Die Sprachen \(\emptyset\), \(\&#123;\epsilon\&#125;\) und \(\&#123;x\&#125;\) für jedes \(x \in \Sigma\)
                    sind regulär.
                  </li>
                </ul>
                <Paragraph>
                  Aus diesen \(|\Sigma|+2\) "Grundbausteinen" und den drei Kombinatoren \(\cup\), \(\circ\) und \(^*\)
                  können
                  Sie jede reguläre Sprache zusammenbauen. Dieses Baukastenprinzip hat auch einen Namen: reguläre
                  Ausdrücke.
                  Definieren wir diese nun formal.
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Definition
                    </span>
                    Sei \(\Sigma\) einendliches Alphabet. Die regulären Audrücke über \(\Sigma\) sind induktiv
                    definiert wie folgt und beschreiben folgende Sprachen:
                  </Paragraph>
                  <ul>
                    <li>
                      {" "}{" "}
                      <b>
                        Atome.
                      </b>
                      \(\emptyset\) ist ein regulärer Ausdruck und beschreibt die
                      Sprache \(\emptyset\).
                      \(\epsilon\) ist ein regulärer Ausdruck und beschreibt die Sprache \(\&#123;\epsilon\&#125;\).
                      Jedes einzelne Zeichen \(x \in \Sigma\) ist ein regulärer Ausdruck und
                      beschreibt die Sprache \(\&#123;x\&#125;\).
                    </li>
                    <li>
                      {" "}{" "}
                      <b>
                        Alternative.
                      </b>
                      Wenn \(R_1, R_2\) reguläre Ausdrücke über \(\Sigma\) sind
                      und die Sprachen \(L_1\) und \(L_2\) beschreiben, so ist
                      \((R_1 | R_2)\) ein regulärer Ausdruck und beschreibt die Sprache
                      \(L_1 \cup L_2\) (die regulär ist, wie wir in{" "}
                      <a href="./04-01-regular-grammars.html#baukasten">
                        Kapitel 4.1
                      </a>
                      gesehen haben).
                    </li>
                    <li>
                      {" "}{" "}
                      <b>
                        Konkatenation.
                      </b>
                      \((R_1R_2)\) ist ein regulärer Ausdruck, der
                      die Sprache \(L_1 \circ L_2\) beschreibt (die auch wiederum regulär ist).
                      Der Deutlichkeit halber schreiben wir auch manchmal \(R_1 \circ R_2\).
                    </li>
                    <li>
                      {" "}{" "}
                      <b>
                        Kleenesche Hülle.
                      </b>
                      Wenn \(R\) ein regulärer Ausdruck ist und die Sprache
                      \(L\) beschreibt,
                      dann ist \((R^*)\) ein regulärer Ausdruck und beschreibt die Sprache \(L^*\).
                    </li>
                  </ul>
                  <Paragraph>
                    <Paragraph>
                      Weil in der Praxis neben \(L^*\), also beliebig langen, möglicherweise leeren Folgen von
                      \(L\)-Wörtern wir
                      oft{" "}
                      <i>
                        nichtleere
                      </i>
                      Folgen wollen,
                      führen wir die Abkürzung \(R^+\) für \(R (R^*)\) ein und bezeichnen die beschriebene Sprache
                      \(L \circ L^*\) kurzerhand als \(L^+\).
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    In konkreten fällen lassen gerne die Klammerung weg, wenn keine Verwechslungsgefahr besteht.
                    Auch
                    gehen wir davon aus, dass die Operatoren die Präzedenz \(^*\) vor \(\circ\) vor \(|\) haben (wie
                    {" "}
                    <i>
                      hoch
                    </i>
                    vor{" "}
                    <i>
                      Punkt
                    </i>
                    vor{" "}
                    <i>
                      Strich
                    </i>
                    in der Arithmetik), sodass beispielsweise
                    der Ausdruck \( a^*b|c^*\) die Bedeutung von \((((a^*)b)(c^*))\) hat, genauso wie wir
                    in der Arithmetik \(a^2 b + c^3\) statt \( (((a^2)b) + c^3) \) schreiben.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Die von den atomaren Ausdrücken beschriebenen Sprachen sind alle regulär, da sie alle
                    {" "}
                    <i>
                      endliche Sprachen
                    </i>
                    sind.
                    Dank unserer Vorarbeit aus{" "}
                    <a href="./04-01-regular-grammars.html#baukasten">
                      Kapitel 4.1
                    </a>
                    wissen wir,
                    dass Alterantive, Konkatenation und Kleenesche Hülle wiederum reguläre Sprachen erzeugen.
                    Wir erhalten das folgende Ergebnis:
                  </Paragraph>
                </Paragraph>
                <div
                  id="regex-to-grammar"
                  class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Lemma
                    </span>
                    Die von einem regulären Ausdruck \(R\) beschriebene Sprache \(L(R)\) ist regulär.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Es ist Zeit für ein paar Beispiele.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Beispiel
                    </span>
                    Nehmen wir die Sprache der Wörter der Form `bla:bla:blu.xyz-12-ab.b:x`aus dem
                    letzten Kapitel. Sie erinnern sich:
                    eine endliche Folge von{" "}
                    <i>
                      Labels
                    </i>
                    , wo ein Label eine nichtleere Folge von Blöcken ist, die
                    entweder `:`oder durch `-`separiert sind, wobei innerhalb eines Labels
                    immer nur ein
                    Separatortyp vorkommen darf, und wobei ein Block eine nichtleere Folge von alphanumerischen
                    Zeichen ist (wir haben uns dann auf den Buchstaben \(a\) beschränkt).
                    Sehen Sie, dass bereits unsere natürlichsprachliche Beschreibung von \(L\) von dem
                    Baukastenprinzip gebraucht macht.
                    Wenn wir nun einen regulären Ausdruck für \(L\) erstellen wollen, so können wir bequem Stück für
                    Stück vorgehen.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Ein Block ist eine nichtleere Folge von \(a\)'s. Der entsprechende reguläre Ausdruck \(B\)
                      für Blöcke ist also
                      \begin&#123;align*&#125;
                      B : = a^+
                      \end&#123;align*&#125;
                      Für ein Label müssen wir uns entscheiden, ob wir die Blöcke mit `:`oder
                      `-`separieren; wir
                      erhalten den regulären Ausdruck \(T\) für Labels ist also
                      \begin&#123;align*&#125;
                      T := B (&#123;:&#125;B)^* | B (\text&#123;-&#125;B)^
                      <b>
                        {" "}
                        \end&#123;align
                      </b>
                      &#125;
                      Sehen Sie, dass wir in \(T\) das erste \(B\) "ausfaktorisieren" können und statt dem obigen
                      folgenden Ausdruck schreiben können:
                      \begin&#123;align*&#125;
                      T' := B ( (&#123;:&#125;B)^* | (\text&#123;-&#125;B)^* )
                      \end&#123;align*&#125;
                      Beide Varianten sind äquivalent, d.h., sie beschreiben die gleiche Sprache; die erste
                      Variante, also \(T\), ähnelt mehr dem,
                      was wir in unserer Grammatik bzw. dem nichtdeterministischen Automaten für \(L\) getan
                      haben, während \(T'\) eher
                      die Arbeitsweise des determinisitschen Automaten reflektiert (wir lesen erst einmal einen
                      Block und erst, wenn wir zum ersten mal auf
                      `:`oder `-`stoßen, entscheiden wir uns für den "Typ" des Labels).
                      Schlussendlich ist ein Wort in der Sprache eine mit `.`separierte Folge von
                      Labels, also:
                      \begin&#123;align*&#125;
                      R := T (&#123;.&#125;T)^
                      <b>
                        {" "}
                        \end&#123;align
                      </b>
                      &#125;
                      Somit können wir nun den regulären Ausdruck für \(L\) in seiner ganzen Pracht zeigen:
                    </Paragraph>
                    <Paragraph>
                      \begin&#123;align*&#125;
                      R := (a^+ (&#123;:&#125;a^+)^* | a^+ (\text&#123;-&#125;a^+)^*) (&#123;.&#125;(a^+ (&#123;:&#125;a^+)^* | a^+ (\text&#123;-&#125;a^+)^*))^
                      <b>
                        {" "}
                        \end&#123;align
                      </b>
                      &#125;
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Laden Sie sich{" "}
                    <a href="../code/regular-expressions/TestRegex.java">
                      TestRegex.java
                    </a>
                    herunter,
                    kompilieren und starten Sie es.
                  </Paragraph>
                  <pre>
                    <Paragraph>
                      <code class="terminalPrompt">
                        java TestRegex
                      </code>
                      <code class="terminalOutput">
                        Please enter a regular expression:
                      </code>
                      (a+)(:a+)*
                    </Paragraph>
                    <Paragraph>
                      <code class="terminalOutput">
                        Enter words to be matched, one per line
                      </code>
                      {" "}{" "}
                      <code>
                        aaaaa:aa:aaaa:a
                      </code>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      <code class="terminalOutput">
                        true
                      </code>
                      {" "}{" "}
                      <code>
                        aaa:aa:
                      </code>
                      {" "}{" "}
                    </Paragraph>
                    <code class="terminalOutput">
                      false
                    </code>
                  </pre>
                  <Paragraph>
                    <Paragraph>
                      Schreiben Sie nun einen regulären Ausdruck \(R\) für die obige Sprache und testen Sie ihn
                      mit dem Java-Programm.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    In der Praxis gibt es bei reguläre Ausdrücken viele Abkürzung, so beschreibt
                    `[a-z]`beispielsweise die Menge aller Kleinbuchstaben,
                    `[aoeiuy]`beschreibt die Menge \&#123;a,o,e,i,u,y\&#125; etc.
                    Der reguläre Ausdruck `[a-z]
                    <b>
                      [aeiuoy][a-z]
                    </b>
                    `beschreibt also die
                    Menge aller Wörter, die mindesten einen Vokal enthalten.
                    Lesen Sie hierfür unter Anderem
                  </Paragraph>
                  <div style="text-align:center">
                    <a href="https://www.w3schools.com/java/java_regex.asp">
                      W3Schools
                    </a>
                  </div>
                  <Paragraph>
                    und
                  </Paragraph>
                  <div style="text-align:center">
                    <Paragraph>
                      <a href="https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html">
                        Patternl.html
                        auf der Java-API
                      </a>
                      ,
                    </Paragraph>
                  </div>
                  <Paragraph>
                    lassen sich aber bitte nicht von der Menge an Details erschlagen.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Schreiben Sie nun in der Java-Regex-Syntax einen regulären Ausdruck für unsere obige Sprache
                      \(L\), wo Sie aber
                      neben \(a\) alle alphanumerischen Zeichen zulassen.
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <h2>
                    <Paragraph>
                      Einen regulären Ausdruck für jede reguläre Sprache
                    </Paragraph>
                  </h2>
                  Wir beweisen nun das Gegenstück zu{" "}
                  <a href="#regex-to-grammar">
                    Lemma 4.5.2
                  </a>
                  :
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Theorem
                    </span>
                    Sei \(L\) eine reguläre Sprache. Dann gibt es einen regulären Ausdruck \(R\), der \(L\)
                    beschreibt,
                    also
                    \(L(R) = R\).
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Wir paraphrasieren hier den Beweis aus Michael Sipsers{" "}
                    <i>
                      Introduction to the Theory of
                      Computation
                    </i>
                    .
                  </Paragraph>
                </Paragraph>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    {" "}
                    Zunächst skizzieren wir die Beweisidee. Da \(L\) regulär ist, gibt es einen
                    nichtdeterministischen endlichen
                    Automaten \(M\), die \(L\) akzeptiert. Wir werden nun \(M\) Schritt für Schritt in einen
                    regulären Ausdruck
                    verwandeln. Kern der Idee ist, dass wir neben den üblichen Übergängen
                    \begin&#123;align*&#125;
                    q
                    <i>
                      1 \step&#123;x&#125; q
                    </i>
                    2
                    \end&#123;align*&#125;
                    komplexere Übergänge wie zum Beispiel
                    \(q_1 \step&#123;xy&#125; q_2\) zulassen. Die Bedeutung wäre hier beispielsweise, dass der Automat
                    von \(q_1\) nach \(q_2\) übergehen kann, wenn er die Eingabesymbole \(xy\) liest. Wir lassen
                    auch komplexere
                    Übergänge wie
                    \begin&#123;align*&#125;
                    q
                    <i>
                      1 \step&#123;x|yz^*&#125; q
                    </i>
                    2
                    \end&#123;align*&#125;
                    zu, also "von \(q_1\) kann der Automat nach \(q_2\) gehen, wenn er ein \(x\) liest oder
                    ein \(y\), gefolgt von beliebig vielen \(z\)"; ganz allgemein lassen wir Übergänge der Form
                    \begin&#123;align*&#125;
                    q
                    <i>
                      1 \step&#123;R&#125; q
                    </i>
                    2 \ ,
                    \end&#123;align*&#125;
                    wobei \(R\) ein regulärer Ausdruck ist. Insbesondere lassen wir Übergänge der Form
                    \(q_1 \step&#123;\epsilon&#125; q_2 \) zu.
                    Dies bedeutet, dass der Automat von \(q_1\) nach \(q_2\) "springen" kann, ohne ein Eingabesymbol
                    zu lesen.
                    Des weiteren verlangen wir, dass es genau einen akzeptierenden Endzustand \(q_&#123;\rm end&#125;\) mit
                    \(\qstart \ne q_&#123;\rm end&#125;\),
                    und dass es keine Kanten gibt, die in \(\qstart\) hineingehen, und keine, die aus \(q_&#123;\rm
                    end&#125;\)
                    hinausgehen.
                    All dies lässt sich leicht verwirklichen, wenn wir reguläre Ausdrücke als
                    Kantenbeschriftung zulassen. Wir nennen so einen Automaten einen{" "}
                    <i>
                      verallgemeinerten
                      nichtdeterministischen endlichen Automaten (VNEA)
                    </i>
                    .
                  </Paragraph>
                  <figure>
                    <img
                      style="height:14em"
                      src="../img/finite-state-automata/to-regex/nea-to-vnea.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Definieren wir nun formal, was VNEAs sind und welche Sprache sie akzeptieren:
                    </Paragraph>
                  </Paragraph>
                  <div class="well subtheorem theorem">
                    <Paragraph>
                      <span class="numbered-title">
                        Definition
                      </span>
                      {" "}{" "}
                      <b>
                        (Verallgemeinerter nichtdeterministischer endlicher Automat, VNEA).
                      </b>
                      {" "}
                      Ein VNEA besteht aus einem Alphabet \(\Sigma\), einer Zustandsmenge \(Q\), einen
                      Startzustand \(\qstart \in Q\), einem
                      akzeptierenden Zustand \(q_&#123;\rm end&#125; \in Q \setminus \&#123;\qstart\&#125;\), einer
                      Menge von gerichteten Kanten
                      \begin&#123;align*&#125;
                      E \subseteq (Q \setminus \&#123;\qstart\&#125;) \times (Q \setminus \&#123;q_&#123;\rm end&#125;\&#125;) \ .
                      \end&#123;align*&#125;
                      Jede Kante \((q_i, q_j) \in E\) ist mit einem regulären Ausdruck
                      \(\delta(q_i, q_j)\) beschriftet. Wenn \(R = \delta(q_i, q_j)\) gilt, dann schreiben wir
                      \(q_i \step&#123;R&#125; q_j\).
                      Wenn \(\beta \in L(R)\) gilt, \(\beta\) also ein Wort in der von \(R\) beschriebenen Sprache
                      ist, dann schreiben wir auch
                      \(q_i \step&#123;\beta \in R&#125; q_j \).
                    </Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Für \(q, q' \in Q\) und \(\alpha \in \Sigma^*\) schreiben wir
                        \begin&#123;align*&#125;
                        q \Step&#123;\alpha&#125; q'
                        \end&#123;align*&#125;
                        wenn man \(\alpha\) zerlegen kann als \(\alpha = \beta_1 \beta_2 \dots \beta_k\) gibt
                        (wobei \(\beta_i = \epsilon\) zulässig ist)
                        und es eine Zustandsfolge
                        \(q = q_0, q_1, \dots, q_k = q'\) gibt, wobei \( (q_&#123;i-1&#125;, q_i)\in E\) ist und mit einem
                        regulären Ausdruck
                        \(R_i\) beschriftet ist und
                        jedes \(\beta_i\) in der von \(R_i\) beschriebenen Sprache ist. Wenn also
                        \begin&#123;align*&#125;
                        q
                        <i>
                          0 \step&#123;\beta
                        </i>
                        1 \in R
                        <i>
                          1&#125; q
                        </i>
                        1 \step&#123;\beta
                        <i>
                          2 \in R
                        </i>
                        2&#125; q
                        <i>
                          2 \dots q
                        </i>
                        &#123;k-1&#125; \step&#123;\beta
                        <i>
                          k
                          \in R
                        </i>
                        k&#125; p_k
                        \end&#123;align*&#125;
                        gilt.
                      </Paragraph>
                    </Paragraph>
                  </div>
                  <Paragraph>
                    <Paragraph>
                      Einen gegebenen NEA können wir leicht in einen VNEA transformieren, indem wir, soweit nötig,
                      (1) einen neuen Startzustand kreieren (damit dieser keine eingehenden Kanten hat),
                      (2) einen neuen Endzustand kreieren,
                      (3) "parallele" Übergänge wie \( (q_i, x, q_j), (q_i, y, q_j)\) zu einer Kante
                      zusammenfassen,
                      der dann mit dem regulären Ausdruck \(x | y\) beschriftet ist.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wir haben den ganzen Aufwand betrieben, weil wir für einen VNEA sehr leicht
                      Zustände eliminieren können. Wenn wir zum Beispiel
                      \begin&#123;align*&#125;
                      q
                      <i>
                        0 \step&#123;R
                      </i>
                      1&#125; q
                      <i>
                        1 \step&#123;R
                      </i>
                      2&#125; q_2
                      \end&#123;align*&#125;
                      haben, dann können wir ja ein Wort in \(R_1 R_2\) lesen und direkt von \(q_0\) nach \(q_2\)
                      übergehen;
                      wir brauchen also \(q_1\) gar nicht. Wir müssen nur aufpassen, das neue \(R_1 R_2\) mit
                      einem eventuell bereits bestehenden Übergang von \(q_0\) nach \(q_2\) zu kombinieren. Im
                      allgemeinen:
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="height:10em"
                      src="../img/finite-state-automata/to-regex/eliminate-B.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Falls die mit \(R_2\) beschriftete Selbstschleife an Zustand \(B\) nicht existieren sollte,
                      dann
                      schreiben wir einfach \(R_1R_3\) anstatt \(R_1 R_2^* R_3\); falls der Übergang \(A
                      \step&#123;R_4&#125; B\) nicht
                      existieren sollte , lassen wir das \(R_4 | \) im rechten Bild einfach weg.
                      (Sipser führt hier den eleganten Formalismus ein, zu verlangen, dass{" "}
                      <i>
                        jedes
                      </i>
                      Paar
                      durch
                      eine Kante verbunden ist und würde fehlende Kanten einfach mit dem regulären Ausdruck
                      \(\emptyset\) beschriften.)
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wir suchen uns also einen Zustand \(B \in Q \setminus \&#123;\qstart, \qend\&#125;\), den wir
                      eliminieren wollen, und führen die oben beschriebene
                      \(B\)-Umfahrung parallel für alle Paare \(A,C\) aus, für die es \(A \step&#123;&#125; B \step&#123;&#125; C\)
                      gibt.
                      Wir erhalten einen VNEA mit einem Zustand weniger, der zu dem vorherigen VNEA äquivalent
                      ist, also
                      die gleiche Sprache akzeptiert. Wiederholen wir diesen Schritt, so erhalten
                      wir am Ende einen Automat mit nur zwei Zuständen, nämlich
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="height:2.5em"
                      src="../img/finite-state-automata/to-regex/nvea-final.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Dieser VNEA akzeptiert immer noch die gleiche Sprache \(L\) wie der ursprüngliche NEA, mit
                      dem wir
                      begonnen haben. Welche Sprache ist das? Es ist die Sprache aller \(\alpha \in \Sigma\) mit
                      \begin&#123;align*&#125;
                      \qstart \Step&#123;\alpha&#125; \qend
                      \end&#123;align*&#125;
                      Da der Pfad von \(\qstart\) nach \(\qend\) nur eine Kante hat, muss \(\alpha\) in der von
                      \(R\) beschriebenen Sprache liegen. \(R\) ist der gesuchte reguläre Ausdruck: er beschreibt
                      die Sprache \(L\).
                    </Paragraph>
                    <span class="qed">
                      \(\square\)
                    </span>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Hier sehen Sie den ganzen Ablauf an unserer `aaaa:a:aaa.aa-aa`-Sprache:
                  </Paragraph>
                </Paragraph>
                <div
                  id="carousel-nfsm-to-regex"
                  class="container">
                  <div style="overflow-x: auto; margin: 1em;">
                    <figure>
                      <img
                        style="height:20em"
                        src="../img/finite-state-automata/to-regex/nfsm-to-regex-carpet.svg"
                        loading="lazy" />
                    </figure>
                  </div>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Wandeln Sie nach dem eben beschriebenen Schema den Automaten
                  </Paragraph>
                  <figure>
                    <img
                      style="height:10em"
                      src="../img/finite-state-automata/nfsm-example-02.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    in einen regulären Ausdruck um.
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;