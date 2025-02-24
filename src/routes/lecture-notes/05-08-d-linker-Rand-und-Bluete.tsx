import Section from "~/components/Section";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
import NumberedTitle from "~/components/NumberedTitle";
const Article = () => {
  return (
    <Container>
      <Section
        count={36}
        title_gr="Linker Rand, Blüten und die DK-Grammatik"
        title_en="d linker Rand und Bluete"
        number={5.8}
        counter="DefCtr"
        counter="ExoCtr"
        path="/lecture-notes36.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="05-07-c-LR-grammars">
            &lt;&lt; Kapitel 5.7
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="05-09-dk-automat">
            Kapitel 5.9 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    5.8 
                    Linker Rand, Blüten und die DK-Grammatik
                  </span>
                </h1>
                <Paragraph>
                  In diesem Teilkapitel werden wir sehen,
                  wie wir für eine gültige Wortform \(\gamma\)
                  den korrekten Linksreduktionsschritt
                </Paragraph>
                $$\begin&#123;align*&#125;
                \gamma = \alpha \beta w \rstep&#123;&#125; \alpha X w
                \end&#123;align*&#125;$$
                <Paragraph>
                  finden. Als erstes müssen wir uns überlegen,
                  wie die Front \(\front(\gamma) = \alpha \beta\)
                  überhaupt aussehen kann. Wenn wir
                  uns den Ableitungsbaum von \(\gamma\) ansehen,
                  wird das einigermaßen offensichtlich sein.
                </Paragraph>
                <Paragraph>
                  Zur Erinnerung:
                  Zu jeder Ableitung \(S \Step&#123;&#125;^* w \in \Sigma^*\) können wir
                  eindeutig einen{" "}
                  <i>
                    Ableitungsbaum
                  </i>
                  {" "}zeichnen. Wenn die Grammatik
                  eindeutig ist, so hängt auch der Baum nur vom Wort \(w \in L(G)\) ab und
                  nicht von der Ableitung \(S \Step&#123;&#125;^* w\).
                  Allerdings können wir für Zwischenformen
                  \(S \Step&#123;&#125;^* \gamma \Step&#123;&#125;^* w\) auch einen Ableitungsbaum zeichnen,
                  und der unterscheidet sich stark, abhängig davon, ob \(S \Step&#123;&#125;^* \gamma\) eine
                  Rechtsableitung, Linksableitung oder sonst was ist.
                  Ich zeige Ihnen jetzt ein Beispiel für eine Grammatik und
                  eine Handvoll Ableitungen samt Ableitungsbaum.
                </Paragraph>
                $$\begin&#123;align*&#125;
                G&amp;: \\
                S&amp;\rightarrow AB \\
                A&amp;\rightarrow xBS \ | \ Bz \\
                B&amp;\rightarrow yAS \ | \ Az \ | \ x \ | \ y \ | \ z
                \end&#123;align*&#125;$$
                <Paragraph>
                  Es ist zu diesem Zeitpunkt irrelevant, ob \(G\) eindeutig
                  oder sogar \(LR(0)\) ist. Ich interessiere mich
                  gerade nur für Ableitungsbäume von Wortformen.
                </Paragraph>
                <figure class="centered-figure well container">
                  <Carousel>
                    <img
                      style="height:16em"
                      src="../img/context-free/LR/G-right-derivation.svg" />
                    <img
                      style="height:16em"
                      src="../img/context-free/LR/G-left-derivation.svg" />
                    <img
                      style="height:16em"
                      src="../img/context-free/LR/G-messy-derivation.svg" />
                  </Carousel>
                </figure>
                <Paragraph>
                  Fällt Ihnen etwas auf? Schauen Sie sich bitte noch ein weiteres
                  Beispiel an für den Ableitungsbaum einer in einer
                  gültigen Wortform, also von einer, die in einer
                  Rechtsableitung vorkommen kann:
                </Paragraph>
                <figure>
                  <img
                    style="height:40em"
                    src="../img/context-free/LR/G-tree-large.svg" />
                </figure>
                <div class="well container subtheorem">
                  {" "}{" "}
                  <b>
                    Warten Sie!
                  </b>
                  Scrollen Sie erst weiter, wenn Sie den Baum oben lang genug angeschaut haben!
                  Versuchen Sie selbst, die spezielle Form dieses Baumes möglichst
                  formal zu beschreiben!
                </div>
                <div style="height:40em" />
                <div class="well container subtheorem">
                  {" "}{" "}
                  <b>
                    Auflösung.
                  </b>
                  {" "}Hier sehen Sie noch einmal
                  den gleichen Baum, nun aber gewisse Teile verschieden umrandet / eingefärbt.
                </div>
                <figure>
                  <img
                    style="height:40em"
                    src="../img/context-free/LR/G-tree-large-colored.svg" />
                </figure>
                <Paragraph>
                  Sie sehen: links vom Stamm gibt es nur Blätter.
                  Rechts vom Stamm ist jedes Blatt ein Terminalsymbol.
                  Wir erkennen auch, was der letzte Ableitungsschritt war, der zu diesem
                  Baum geführt hat: die Blüte ist hinzugekommen, in diesem Fall
                  also \(A \rightarrow x B S\).
                  Wir definieren nun eingeführten Begriffe formal:
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Definition
                    <NumberedTitle>
                      &ensp;5.8.1{" "}
                    </NumberedTitle>
                    &ensp;/ Beobachtung
                  </span>
                  {" "}{" "}
                  <b>
                    (Stamm, linker Rand, Blüte, Front, rechter Rest)
                  </b>
                  Sei \(S \Step&#123;&#125;^* \gamma\) eine Rechtsableitung, \(\gamma\) also
                  eine gültige Wortform, und
                  \(\mathcal&#123;T&#125;\) der Ableitungsbaum von \(\gamma\).
                  Der{" "}
                  <i>
                    Stamm
                  </i>
                  {" "}ist der Pfad von der Wurzel zu jenem inneren Knoten \(u\),
                  der von allen inneren Knoten, deren Kinder allesamt Blätter sind,
                  am weistesten links steht.
                  Die Kinder von \(u\), per Definition alles Blätter, sind die{" "}
                  <i>
                    Blüte
                  </i>
                  .
                  Die Menge der Knoten, die einen Stammknoten als rechtes Geschwister haben,
                  heißt der{" "}
                  <i>
                    linke Rand
                  </i>
                  . Jeder Knoten \(v\) im linken Rand
                  muss ein Blatt sein, ansonsten stünde er ja weiter links als \(u\);
                  die Menge der rechten Geschwisterkinder von Stammknoten sowie deren Nachkommen
                  heißt der{" "}
                  <i>
                    rechte Rand
                  </i>
                  .
                  Im rechten Rest ist jedes Blatt ein
                  Terminalsymbol, ansonsten wäre es keine Rechtsableitung.
                  <Paragraph>
                    Die Beschriftung der Knoten im linken Rand ergibt eine Wortform \(\alpha\);
                    die Blüte ergibt \(\beta\).
                    Die Blätter im rechten Rand
                    sind ausschließlich mit Terminalen beschriftet und ergeben ein
                    Wort \(w \in \Sigma^*\). Der ganze Baum stellt also eine Rechtsableitung
                  </Paragraph>
                  $$\begin&#123;align*&#125;
                  S \Step&#123;R&#125;^* \alpha \beta w
                  \end&#123;align*&#125;$$
                  dar. Die Wortform \(\alpha\beta\), also linker Rand plus Blüte, nennen wir
                  die{" "}
                  <i>
                    Front
                  </i>
                  {" "}von \(\mathcal&#123;T&#125;\) und schreiben sie als \(\front(\mathcal&#123;T&#125;)\).
                  Wir sagen auch, dass \(\beta\){" "}
                  <i>
                    eine Blüte von \(\gamma\)
                  </i>
                  {" "}und
                  \(\alpha\beta\) die{" "}
                  <i>
                    Front
                  </i>
                  {" "}von \(\gamma\) ist,
                  ohne über den Ableitungsbaum \(\mathcal&#123;T&#125;\) selbst zu reden.
                  Hierbei ist zu beachten, dass in einer mehrdeutigen Grammatik
                  eine gültige Wortform mehrere Ableitungsbäume und somit
                  mehrere Blüten haben kann, die Unterteilung \(\gamma = \alpha\beta w\)
                  also nicht eindeutig ist. Für eindeutige Grammatiken ist
                  die Unterteilung aber eindeutig.
                  <Paragraph>
                    Sei weiterhin \(A\) die Beschriftung des Elternknoten der Blüte
                    (notwenigerweise ein Nichtterminal; Terminale haben keine Kinder).
                    Dann ist \(A \rightarrow \beta\) eine Produktion in der Grammatik und
                    \(\alpha A w\) eine gültige Wortform; wir erhalten den Ableitungsbaum
                    von \(\alpha A w\), indem wir die Blüte von \(\mathcal&#123;T&#125;\) entfernen.
                    Wir schließen, dass
                    $$\begin&#123;align*&#125;
                    \alpha \beta w \rstep&#123;&#125; \alpha A w
                    \end&#123;align*&#125;$$
                    ein korrekter Linksreduktionsschritt ist.
                  </Paragraph>
                </div>
                <Paragraph>
                  Wir können also, ausgehend von der Wortform \(\gamma\),
                  eine Linksreduktion \(\gamma \rstep&#123;&#125;^* S\) finden,
                  indem wir den Ableitungsbaum von \(\gamma\) zeichnen und
                  immer wieder die Blüte abschneiden:
                </Paragraph>
                <figure class="centered-figure well container">
                  <Carousel>
                    <img
                      style="height:40em"
                      src="../img/context-free/LR/tree-destruction/01.svg" />
                    <img
                      style="height:40em"
                      src="../img/context-free/LR/tree-destruction/02.svg" />
                    <img
                      style="height:40em"
                      src="../img/context-free/LR/tree-destruction/03.svg" />
                    <img
                      style="height:40em"
                      src="../img/context-free/LR/tree-destruction/04.svg" />
                    <img
                      style="height:40em"
                      src="../img/context-free/LR/tree-destruction/05.svg" />
                    <img
                      style="height:40em"
                      src="../img/context-free/LR/tree-destruction/06.svg" />
                    <img
                      style="height:40em"
                      src="../img/context-free/LR/tree-destruction/07.svg" />
                    <img
                      style="height:40em"
                      src="../img/context-free/LR/tree-destruction/08.svg" />
                    <img
                      style="height:40em"
                      src="../img/context-free/LR/tree-destruction/09.svg" />
                    <img
                      style="height:40em"
                      src="../img/context-free/LR/tree-destruction/10.svg" />
                  </Carousel>
                </figure>
                <Paragraph>
                  Um für eine Wortform \(\gamma\) den korrekten Reduktionsschritt zu finden,
                  reicht es also aus, linken Rand und Blüte zu bestimmen, also
                  \(\alpha\) und \(\beta\), so dass \(\gamma = \alpha\beta w\)
                  und \(\alpha \beta w \rstep&#123;&#125; \alpha A w\) korrekt ist (\(A\) steht hier
                  für das Nichtterminal, mit dem der Elternknoten der Blüte beschriftet ist).
                  Linken Rand und Blüte zu finden scheint keine leichte Aufgabe zu sein:
                  schließlich müssen wir dafür doch den Ableitungsbaum von \(\gamma\) bilden,
                  was selbst wieder eine Parsing-Aufgabe ist???
                </Paragraph>
                <Paragraph>
                  An dieser Stelle zeigt sich die Genialität des DK-Ansatzes:
                  der Ableitungsbaum von \(\gamma\) kann beliebig verschachtelt sein,
                  aber Stamm, linker Rand und Blüte haben zusammen eine einfache,
                  beinahe linear anmutende Struktur. Schematisch:
                </Paragraph>
                <figure>
                  <img
                    style="height:20em"
                    src="../img/context-free/LR/schema-linker-rand-bluete-stamm.svg" />
                </figure>
                <Paragraph>
                  Die Aussage "Stamm, linker Rand und Blüte haben eine einfache Struktur"
                  können wir formalisieren.
                </Paragraph>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Definition
                    <NumberedTitle>
                      &ensp;5.8.2{" "}
                    </NumberedTitle>
                  </span>
                  Für eine kontextfreie Grammatik \(G\) definieren wir
                  die Sprache \(\Front(G) \subseteq (\Sigma \cup N)^*\):
                  $$\begin&#123;align*&#125;
                  \Front(G) := \&#123;\front(\mathcal&#123;T&#125;) \ | \ \mathcal&#123;T&#125;
                  \textnormal&#123; ist der Ableitungsbaum einer Rechtsableitung &#125;
                  S \Step&#123;R&#125;^* \gamma \&#125;
                  \end&#123;align*&#125;$$
                  alternativ
                  $$\begin&#123;align*&#125;
                  \Front(G) := \&#123;\alpha \beta \ | \ S \Steps&#123;R&#125; \alpha X w
                  \Step&#123;R&#125; \alpha \beta w \&#125;
                  \end&#123;align*&#125;$$
                  also die Menge aller Wortformen, die Front einer gültigen Wortform
                  sind.
                </div>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Lemma
                    </span>
                    Die Sprache \(\Front(G)\) ist regulär.
                    Insbesondere gibt es eine erweitert reguläre Grammatik \(\hat&#123;G&#125;\) für
                    \(\Front(G)\), so dass die Blüte genau die im letzen Ableitungsschritt
                    erzeugten Terminalsymbole sind.
                  </Paragraph>
                </div>
                <Paragraph>
                  Hier ist etwas Mentalgymnastik vonnöten: aus Sicht der Sprache
                  \(\Front(G)\) sind \(\Sigma \cup N\){" "}
                  <i>
                    Terminalsymbole
                  </i>
                  . Sie können
                  ja schließlich in den Wörtern der Sprache auftauchen.
                  Die Grammatik \(\hat&#123;G&#125;\) hat also die Terminalsymbole
                  \(\Sigma \cup N\). Darüberhinaus hat sie
                  die Nichtterminale \(\hat&#123;N&#125; := \&#123; \hat&#123;X&#125; \ | \ X \in N\&#125;\),
                  also für jedes Nichtterminal \(X\) von \(G\) ein
                  Meta-Nichtterminal \(\hat&#123;X&#125;\). Das \(X \in N\) entspricht
                  dem \(\boxed&#123;X&#125;\) in den obigen Bäumen, wo also \(N\) als Blatt vorkommt;
                  das \(\hat&#123;X&#125; \in \hat&#123;N&#125;\) entspricht dem
                  <img
                    style="height:1.5em"
                    src="../img/context-free/LR/circle-X.svg" />
                  ,
                  also wo \(W\) als innerer Knoten vorkommt. Bevor ich
                  \(\hat&#123;G&#125;\) formal definiere, zeige ich den obigen Ableitungsbaum
                  (ohne rechten Rand, weil der ja bei \(\front(G)\) eh fehlt)
                  und annotiere jeden Knoten auf dem Stamm mit der entsprechenden
                  \(\hat&#123;G&#125;\)-Produktion.
                </Paragraph>
                <figure>
                  <img
                    style="height:40em"
                    src="../img/context-free/LR/hat-G-derivation.svg" />
                </figure>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Definition
                    <NumberedTitle>
                      &ensp;5.8.3{" "}
                    </NumberedTitle>
                  </span>
                  Sei \(G = (\Sigma, N, S, P)\) eine kontextfreie Grammatik. Die
                  Front-Grammatik oder DK-Grammatik von \(G\) ist
                  die{" "}
                  <i>
                    erweitert reguläre
                  </i>
                  {" "}Grammatik \(\hat&#123;G&#125; = (\Sigma \cup N, \hat&#123;N&#125;, \hat&#123;S&#125;,
                  \hat&#123;P&#125;)\)
                  mit \(\hat&#123;N&#125; := \&#123;\hat&#123;X&#125; \ | \ X \in N\&#125;\), wobei
                  \(\hat&#123;P&#125;\) für jede \(G\)-Produktion
                  $$\begin&#123;align*&#125;
                  A \rightarrow w_0 A_1 w_1 A_2 w_2 \dots w_&#123;k-1&#125; A_k w_k
                  \end&#123;align*&#125;$$
                  mit \(w_i \in \Sigma^*\) die Produktionen
                  $$\begin&#123;align*&#125;
                  \hat&#123;A&#125;&amp;\rightarrow w_0 \hat&#123;A&#125;_1 \\
                  \hat&#123;A&#125;&amp;\rightarrow w_0 A_1 w_1 \hat&#123;A&#125;_2 \\
                  &amp;\vdots \\
                  \hat&#123;A&#125;&amp;\rightarrow w_0 A_1 w_1 A_2 w_2 \dots A_&#123;k-1&#125; w_&#123;k-1&#125; \hat&#123;A&#125;_k \\
                  \hat&#123;A&#125;&amp;\rightarrow w_0 A_1 w_1 A_2 w_2 \dots w_&#123;k-1&#125; A_k w_k
                  \end&#123;align*&#125;$$
                  besitzt.
                </div>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Beobachtung
                    <NumberedTitle>
                      &ensp;5.8.4{" "}
                    </NumberedTitle>
                  </span>
                  \(\hat&#123;G&#125;\) erzeugt die Sprache
                  \(\Front(G)\).
                </div>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Beispiel
                    <NumberedTitle>
                      &ensp;5.8.5{" "}
                    </NumberedTitle>
                  </span>
                  Für unsere Grammatik \(G\) oben ergeben sich folgende Produktionen
                  \(\hat&#123;P&#125;\) in \(\hat&#123;G&#125;\):
                  $$\begin&#123;align*&#125;
                  \begin&#123;array&#125;&#123;l|l&#125;
                  \textnormal&#123;Produktion in $G$&#125;
                  &
                  \textnormal&#123;Produktion in $\hat&#123;G&#125;$&#125; \\
                  &amp;&#123;\dk&#123;S&#125;&#125; \rightarrow \dk&#123;A&#125;\\
                  S \rightarrow AB&amp;&#123;\dk&#123;S&#125;&#125; \rightarrow \dkt&#123;A&#125; \dk&#123;B&#125;\\
                  &amp;&#123;\dk&#123;S&#125;&#125; \rightarrow \dkt&#123;AB&#125; \\ \hline
                  %
                  &amp;&#123;\dk&#123;A&#125;&#125; \rightarrow \dkt&#123;x&#125; \dk&#123;B&#125;\\
                  A \rightarrow xBS&amp;&#123;\dk&#123;A&#125;&#125; \rightarrow \dkt&#123;x B&#125; \dk&#123;S&#125;\\
                  &amp;&#123;\dk&#123;A&#125;&#125; \rightarrow \dkt&#123;x B S&#125;\\ \hline
                  %
                  A \rightarrow Bz&amp;&#123;\dk&#123;A&#125;&#125; \rightarrow \dk&#123;B&#125;\\
                  &amp;&#123;\dk&#123;A&#125;&#125; \rightarrow \dkt&#123;Bz&#125; \\ \hline
                  %
                  &amp;\dk&#123;B&#125; \rightarrow \dkt&#123;y&#125; \dk&#123;A&#125;\\
                  B \rightarrow y A S&amp;\dk&#123;B&#125; \rightarrow \dkt&#123;y A&#125; \dk&#123;S&#125; \\
                  &amp;\dk&#123;B&#125; \rightarrow \dkt&#123;y A S&#125; \\ \hline
                  %
                  &amp;\dk&#123;B&#125; \rightarrow \dk&#123;A&#125; \\
                  B \rightarrow Az&amp;\dk&#123;B&#125; \rightarrow \dkt&#123;Az&#125; \\ \hline
                  %
                  B \rightarrow x&amp;\dk&#123;B&#125; \rightarrow \dkt&#123;x&#125; \\
                  B \rightarrow y&amp;\dk&#123;B&#125; \rightarrow \dkt&#123;y&#125; \\
                  B \rightarrow z&amp;\dk&#123;B&#125; \rightarrow \dkt&#123;z&#125; \\
                  \end&#123;array&#125;
                  \end&#123;align*&#125;$$
                </div>
                <Paragraph>
                  Nochmals: Produktionen wie
                  \(\dk&#123;B&#125; \rightarrow \dkt&#123;y A&#125; \dk&#123;S&#125;\) sind erweitert regulär
                  weil \(\dkt&#123;y&#125;\) und \(\dkt&#123;A&#125;\) aus Sicht von \(\hat&#123;G&#125;\) beides
                  Terminalsymbole sind. Wir können nun unseren \(LR(0)\)-Parser beschreiben:
                </Paragraph>
                <div
                  id="algorithm-LR-parser"
                  class="well container theorem">
                  <span class="numbered-title">
                    Algorithmus
                  </span>
                  {" "}{" "}
                  <b>
                    - Der \(LR(0)\)-Parser.
                  </b>
                  Starte mit einem leerem Stack. Sei
                  \(\gamma\) der Inhalt des Stacks zu einem Zeitpunkt.
                  <ol>
                    <li>
                      Wenn \(\gamma \in \Front(G)\), dann
                      betrachte die letzte angewandte \(\hat&#123;G&#125;\)-Produktion
                      \(\hat&#123;X&#125; \rightarrow \beta\) und schreibe
                      \(\gamma = \alpha\beta\). Wende die \(G\)-Produktion
                      \(X \rightarrow \beta\) rückwärts an, reduziere also
                      $$\begin&#123;align*&#125;
                      \alpha \beta \rstep&#123;&#125; \alpha X
                      \end&#123;align*&#125;$$
                      Konkret: lösche \(\beta\) vom Stack und ersetze es durch \(A\).
                    </li>
                    <li>
                      Falls \(\gamma \not \in \Front(G)\),
                      lies das nächste Eingabezeichen und lege es auf den Stack.
                    </li>
                  </ol>
                  Der Parser endet, wenn weder Schritt 1 noch Schritt 2 möglich sind;
                  wenn zu diesem Zeitpunkt nur noch \(S\) auf dem Stack liegt,
                  akzeptiert er, andernfalls lehnt er das Eingabewort ab.
                </div>
                <div class="well container theorem">
                  <span class="numbered-title">
                    Theorem
                    <NumberedTitle>
                      &ensp;5.8.6{" "}
                    </NumberedTitle>
                  </span>
                  Wenn der \(LR(0)\)-Parser akzeptiert, dann hat er eine Linksreduktion
                  \(w \rstep&#123;&#125;^* S\) und somit eine Rechtsableitung konstruiert; es gilt
                  also \(w \in L(G)\).
                  <Paragraph>
                    Wenn umgekehrt \(w \in L(G)\) gilt und
                    \(G\) die \(LR(0)\)-Bedingung erfüllt,
                    dann findet der
                    Parser die Rechtsableitung \(S \Step&#123;&#125;^* w\),
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    Der erste Teil der Bedeutung ist einfach zu sehen.
                    Jeder Reduktionsschritt ist ein Linksreduktionsschritt, und
                    wenn man Ende \(S\) steht, waren es auch alles
                    <i>
                      korrekte
                    </i>
                    {" "}Linksreduktionsschritte.
                  </Paragraph>
                  <Paragraph>
                    Der zweite Teil ist schwieriger. Wir nehmen also
                    an, dass \(G\) eine LR(0)-Grammatik ist.
                    Da \(G\) eindeutig ist, hat jede gültige Wortform
                    \(\gamma\) eine eindeutige Rechtsableitung und einen
                    dazugehörigen Ableitungsbaum \(\mathcal&#123;T&#125;\); somit
                    ist \(\front(\gamma) := \front(\mathcal&#123;T&#125;)\) eindeutig bestimmt.
                    Beachten Sie, dass rechts
                    von \(\front(\gamma)\) nur Terminalsymbole folgen.
                    Betrachten wir einen Zeitpunkt während des Parsing-Prozesses.
                    Sei \(\gamma\) der Stackinhalt und \(w\) der ungelesene
                    Teil des Eingabewortes. Wir werden beweisen, dass zu jedem Zeitpunkt folgende
                    Invariante gilt:
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Behauptung.
                    </b>
                    (i) \(\gamma w\) ist eine gültige Wortform. (ii)
                    \(\gamma\) ist ein Präfix von \(\front(\gamma w)\).
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    Die Behauptung gilt offensichtlich am Anfang, da
                    \(\gamma = \epsilon\) und \(w\in L\) ist und
                    somit \(\gamma w = w\) eine gültige Wortform ist. Des weiteren
                    ist der Stack leer, also \(\gamma = \epsilon\), und daher
                    sicherlich ein Präfix von \(\front(w)\).
                    Wir zeigen nun, dass, wenn die Invariante in Schritt \(t\) gilt,
                    sie auch im nächsten Schritt \(t+1\) gilt.
                    Es gibt nun zwei Möglichkeiten.
                    <ol>
                      <li>
                        Der Parser wendet Schritt 1 an, also \(\gamma \in \Front(G)\).
                        Das heißt nach Definition von \(\Front(G)\), dass es ein \(w' \in \Sigma^*\) gibt,
                        so dass \(\gamma w'\) eine gültige Wortform ist
                        und \(\gamma = \front(\gamma w')\). Also
                        $$\begin&#123;align*&#125;
                        S \Step&#123;R&#125;^* \alpha A w' \Step&#123;R&#125;^* \alpha \beta w'
                        \end&#123;align*&#125;$$
                        mit \(\gamma = \alpha \beta\). Es sind \(\alpha\) und \(\beta\) also
                        linker Rand und Blüte von \(\gamma w'\). Somit ist
                        $$\begin&#123;align*&#125;
                        \alpha \beta w' \rstep&#123;&#125; \alpha' A w'
                        \label&#123;left-reduction-w'&#125;
                        \end&#123;align*&#125;$$
                        ein korrekter Linksreduktionsschritt.
                        Die letzte \(\dk&#123;G&#125;\)-Produktion
                        in der Ableitung von \(\dk&#123;S&#125; \Step&#123;&#125;^* \gamma\) war somit
                        \(\dk&#123;A&#125; \rightarrow \beta\); somit ersetzt der Parser
                        das \(\beta\) auf dem Stack durch \(A\); führt also die Linksreduktion
                        $$\begin&#123;align*&#125;
                        \alpha \beta w \rstep&#123;&#125; \alpha A w
                        \label&#123;left-reduction-w&#125;
                        \end&#123;align*&#125;$$
                        an. Da (\ref&#123;left-reduction-w'&#125;) korrekt ist und
                        \(\alpha \beta w\) nach Invariante eine gültige Wortform ist, ist
                        nach LR(0)-Bedingung auch (\ref&#123;left-reduction-w&#125;) ein korrekter
                        Schritt; \(\alpha Aw\) ist also auch eine gültige Wortform; somit
                        gilt Teil (i) der Invariante.
                        Um zu sehen, dass (ii) gilt, beachten Sie, dass nun
                        auf dem Stack oben ein Nichtterminal liegt: \(A\);
                        da rechts vom aktiven Teil nur Terminale stehen, muss
                        \(\alpha A\) ein Präfix von \(\front(\alpha A w)\) sein.
                      </li>
                      <li>
                        Der Parser wendet Schritt 2 an, also \(w = cw'\), er liest
                        \(c\) und legt es auf den Stack. Im nächsten Schritt
                        ist der Stackinhalt \(\gamma' := \gamma c\) und das ungelesene Wort
                        ist \(w'\).
                        Teil (i) der Behauptung gilt offensichtlich, da \(\gamma' w' = \gamma w\)
                        und somit immer noch eine gültige Wortform ist.
                        Um zu sehen, dass Teil (ii) gilt, beachten Sie erstens,
                        dass Teil (ii) vor dem Schritt galt, also \(\gamma\) ein Präfix
                        von \(\front(\gamma w)\) ist; zweitens, dass
                        \(\gamma \not \in \Front(G)\) ist (sonst hätte der Parser Schritt 1 angewandt); somit
                        ist \(\gamma\) ein{" "}
                        <i>
                          echter
                        </i>
                        {" "}Präfix von \(\front(\gamma w)\) und somit
                        ist \(\gamma c\) immer noch ein Präfix von \(\front(\gamma w)\).
                      </li>
                    </ol>
                    Wenn das Eingabewort gelesen ist, ist nun \(w = \epsilon\) und
                    Stackinhalt \(\gamma\) ist selbst eine
                    gültige Wortform, die allerdings nicht weiter reduziert werden kann.
                    Also muss \(\gamma = S\) gelten und der Parser akzeptiert.
                    <span class="qed">
                      \(\square\)
                    </span>
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Article;