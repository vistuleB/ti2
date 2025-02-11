import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        title_gr="des Postschen Korrespondenzproblems"
        title_en="PCP applications"
        number={7.8}
        path="/lecture-notes49.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="07-07-Post-correspondence-problem">
            &lt;&lt; Kapitel 7.7
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="08-00-Complexity-Theory">
            Kapitel 8.0 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    Anwendungen des Postschen Korrespondenzproblems
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Erinnerin Sie sich an kontextfreie Grammatiken? Das waren formale Grammatiken wie zum Beispiel
                    \begin&#123;align*&#125;
                    S&amp;\rightarrow Tc \\
                    T&amp;\rightarrow TaTb \\
                    T&amp;\rightarrow \epsilon
                    \end&#123;align*&#125;
                    Diese Grammatiken erlauben uns, gewisse Sprachen zu beschreiben, indem Sie Regeln festlegen -
                    hier
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                    <i>
                      Produktionen
                    </i>
                    {" "}
                    genannt, nach welchen man aus dem Startsymbol \(S\) Wörter über dem
                    Alphabet
                    (hier: \(\&#123;a,b,c\&#125;\)) ableiten kann. Beispielsweise:
                    \begin&#123;align*&#125;
                    S \Rightarrow Tc \Rightarrow TaTbc \Rightarrow TaTaTbbc \Rightarrow
                    TaTabbc \Rightarrow Taabbc \Rightarrow aabbc
                    \end&#123;align*&#125;
                    Kontextfreie Grammatiken werden zum Beispiel verwendet, um die Syntax von Dateiformaten,
                    Programmiersprachen und manchmal sogar natürlicher Sprachen zu beschreiben. Es wäre daher
                    schön, über gegebene kontextfreie Grammatik möglichst viele Dinge herausfinden zu können.
                    Leider sind viele solche Probleme unentscheidbar. Als einfaches Beispiel:
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Theorem
                    </span>
                    Wir wollen bestimmen, ob
                    aus einer gegebenen kontextfreien Grammatik \(G\) ein Palindromwort ableitbar ist,
                    also ein \(\gamma\), das von rechts nach links gelesen gleich ist, sprich
                    \(\gamma = \gamma^R\). Dieses Problem ist unentscheidbar.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Formal gesehen müssten wir eine Codierung kontextfreier Grammatiken über einem festen
                      Alphabet (zum Beispiel \(\&#123;0,1, \rightarrow, ;, \dots\&#125;\) angeben, um dann die 
                      {" "}
                      <i>
                        Sprache
                        der
                        Codierungen all jener
                        kontextfreien Grammatik, die ein Palindromwort ableiten können
                      </i>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      definieren zu können. Da wir aber mittlerweile verstanden haben, dass alle
                      "endlichen" Objekte irgendwie auf Turingmschinen-verträgliche Weise codiert werden können,
                      ersparen wir uns diese Formalitäten.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Wir zeigen: wenn man zu einer gegebenen kontextfreien Grammatik entscheiden könnte,
                    ob sie ein Palindromwort ableiten kann, dann könnten wir auch entscheiden, ob ein
                    gegebenes PCP-Puzzle eine Lösung hat. Da wir bereits Letzteres als unentscheidbar
                    erkannt haben, schließen wir, dass Ersteres auch unentscheidbar ist.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Konkret sei uns nun also ein PCP-Puzzle \(P\) gegeben. Wir bauen daraus eine
                      kontextfreie Grammatik \(G\), so dass
                      \(G\) genau dann ein Palindromwort ableiten kann, wenn \(P\) eine Lösung hat.
                      Die Konstruktion ist überraschend einfach. Wir erschaffen ein Startsymbol \(S\)
                      für unsere Grammatik und erstellen zu jeder Kachel \(\alpha : \beta\) die
                      Grammatikregel
                      \begin&#123;align*&#125;
                      S&amp;\rightarrow \alpha S \beta^R \ ,
                      \end&#123;align*&#125;
                      wobei \(\beta^R\) das Wort \(\beta\) von rechts nach links gelesen bedeutet, also
                      \((xyz)^R = zyx\). Wir fügen noch eine weitere Regel hinzu:
                      \begin&#123;align*&#125;
                      S&amp;\rightarrow \$ \ ,
                      \end&#123;align*&#125;
                      wobei \(\$\) ein neues Zeichen ist, dass nicht in der Symbolmenge des PCP-Puzzles \(P\)
                      enthalten ist.
                    </Paragraph>
                  </Paragraph>
                  <div class="well subtheorem theorem">
                    <Paragraph>
                      <span class="numbered-title">
                        Behauptung
                      </span>
                      Wenn die Grammatik \(G\) ein Palindromwort
                      ableiten kann, dann hat das PCP-Puzzle \(P\) eine Lösung.
                    </Paragraph>
                  </div>
                  <div class="well subtheorem">
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Beweis.
                      </b>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      Die letzte angewandte Regel muss \(S \rightarrow \$\) sein, und somit hat
                      das abgeleitete Wort die Form
                      \begin&#123;align*&#125;
                      \alpha
                      <i>
                        1 \alpha
                      </i>
                      2 \dots \alpha
                      <i>
                        n \$ \beta
                      </i>
                      n^R \dots \beta
                      <i>
                        2^R \beta
                      </i>
                      1^R \ .
                      \end&#123;align*&#125;
                      Jedes Paar \(\alpha_i : \beta_i\) ist eine Kachel des PCP-Puzzles. Wenn das
                      Wort ein Palindrom ist, dann gilt \(\alpha_1 \dots \alpha_n = \beta_1 \dots \beta_n\)
                      und somit ist
                      \begin&#123;align*&#125;
                      (\alpha
                      <i>
                        1 : \beta
                      </i>
                      1) (\alpha
                      <i>
                        2 : \beta
                      </i>
                      2)\dots (\alpha
                      <i>
                        n : \beta
                      </i>
                      n)
                      \end&#123;align*&#125;
                      eine Lösung des PCP-Puzzles.
                    </Paragraph>
                    <span class="qed">
                      \(\square\)
                    </span>
                  </div>
                  <div class="well subtheorem theorem">
                    <Paragraph>
                      <span class="numbered-title">
                        Behauptung
                      </span>
                      Wenn
                      das PCP-Puzzle \(P\) eine Lösung hat, dann kann die Grammatik \(G\) ein Palindromwort
                      ableiten.
                    </Paragraph>
                  </div>
                  <div class="well subtheorem">
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Beweis.
                      </b>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      Sei
                      \begin&#123;align*&#125;
                      (\alpha
                      <i>
                        1 : \beta
                      </i>
                      1) (\alpha
                      <i>
                        2 : \beta
                      </i>
                      2)\dots (\alpha
                      <i>
                        n : \beta
                      </i>
                      n)
                      \end&#123;align*&#125;
                      eine Lösung des Puzzles, also \(\alpha_1 \alpha_2 \dots \alpha_n = \beta_1 \beta_2 \dots
                      \beta_n \).
                      Dann ist auch
                      \begin&#123;align*&#125;
                      \alpha
                      <i>
                        1 \alpha
                      </i>
                      2 \dots \alpha
                      <i>
                        n \$ (\beta
                      </i>
                      1 \beta
                      <i>
                        2 \dots \beta
                      </i>
                      n)^R
                      \end&#123;align*&#125;
                      ein Palindrom und kann von \(G\) abgeleitet werden:
                      \begin&#123;align*&#125;
                      S \Rightarrow \alpha
                      <i>
                        1 S \beta
                      </i>
                      1^R \Rightarrow \alpha
                      <i>
                        1 \alpha
                      </i>
                      2 S \beta
                      <i>
                        2^R \beta
                      </i>
                      1^R
                      \Rightarrow
                      \dots \Rightarrow
                      \alpha
                      <i>
                        1 \alpha
                      </i>
                      2 \dots \alpha
                      <i>
                        n S \beta
                      </i>
                      n^R \dots \beta
                      <i>
                        2^R \beta
                      </i>
                      1^R \Rightarrow
                      \alpha
                      <i>
                        1 \alpha
                      </i>
                      2 \dots \alpha
                      <i>
                        n \$ \beta
                      </i>
                      n^R \dots \beta
                      <i>
                        2^R \beta
                      </i>
                      1^R
                      \end&#123;align*&#125;
                      Somit ist gezeigt, dass \(G\) ein Palindromwort ableiten kann.
                    </Paragraph>
                    <span class="qed">
                      \(\square\)
                    </span>
                  </div>
                  <Paragraph>
                    Hätten wir nun also einen Algorithmus, der für eine gegebene kontextfreie Grammatik
                    entscheiden könnte, ob sie ein Palindromwort ableiten kann, dann könnten wir
                    PCP-Puzzles wie folgt entscheiden: nimm das Puzzle \(P\), baue nach den obigen
                    Regeln daraus die Grammatik \(G\) und frage dann den Algorithmus, ob
                    \(G\) ein Palindromwort ableiten kann. Dies beantwortet auch die Frage
                    nach der Lösbarkeit des gegebenen PCP-Puzzles.
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <h3>
                  <Paragraph>
                    Reduktionen
                  </Paragraph>
                </h3>
                <Paragraph>
                  <Paragraph>
                    Es lohnt sich, an dieser Stelle zu pausieren. Was Sie gerade gesehen haben,
                    ist eine 
                    {" "}
                    <i>
                      Reduktion
                    </i>
                    {" "}
                    . Im "echten" Leben verwenden wir Reduktionen,
                    um bereits gefundene Lösungen zu "recyceln". Beispielsweise:
                  </Paragraph>
                  <ul>
                    <li>
                      {" "}{" "}
                      <b>
                        Aufgabe:
                      </b>
                      {" "}
                      Zeigen Sie, dass die Funktion
                      \(n \mapsto n!\) im \(\lambda\)-Kalkül berechenbar ist.
                    </li>
                    <li>
                      Wir wissen bereits, wie man \(n \mapsto n!\) als
                      primitiv-rekursive Funktion schreibt.
                    </li>
                    <li>
                      Wir wissen bereits, wie man eine allgemeine primitiv rekursive Funktion
                      im \(\lambda\)-Kalkül implementiert.
                    </li>
                    <li>
                      Wir schließen nun, dass \(n \mapsto n!\) im \(\lambda\)-Kalkül implementierbar ist,
                      und ersparen uns die Details.
                    </li>
                  </ul>
                  <Paragraph>
                    Im Kontext der Turing-Berechenbarkeit können wir dieses Prinzip wie folgt
                    formalisieren:
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Definition
                    </span>
                    Seien \(L_1 \subseteq \Sigma_1\) und \(L_2 \subseteq \Sigma_2\) zwei Sprachen.
                    Eine 
                    {" "}
                    <i>
                      Reduktion von \(L_1\) nach \(L_2\)
                    </i>
                    {" "}
                    ist eine Turing-berechenbare Funktion
                    \begin&#123;align*&#125;
                    f : \Sigma
                    <i>
                      1^* \rightarrow \Sigma
                    </i>
                    2^
                    <b>
                      {" "}
                      \end&#123;align
                    </b>
                    &#125;
                    mit der Eigenschaft, dass
                    \begin&#123;align*&#125;
                    \forall x \in \Sigma
                    <i>
                      1^*: \ x \in L
                    </i>
                    1 \Leftrightarrow f(x) \in L_2 \ .
                    \end&#123;align*&#125;
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Erinnern Sie sich: dass \(f\) Turing-berechenbar ist, heißt, dass es eine Turingmaschine
                    \(_f\) gibt mit einem dezidierten Ausgabe-Band, so dass \(M_f(x)\) für jedes Eingabewort
                    terminiert und zum Zeitpunkt der Terminierung \(f(x)\) auf das Ausgabeband geschrieben hat.
                    Wenn wir eine Reduktion von \(L_1\) nach \(L_2\) haben, dann liefert uns jeder
                    Entscheidungsalgorithmus
                    für \(L_2\) unmittelbar einen Entscheidungsalgorithmus für \(L_1\):
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Beobachtung
                    </span>
                    Wenn \(f\) eine Reduktion von \(L_1\) nach
                    \(L_2\) ist und \(L_2\) entscheidbar ist, dann ist auch \(L_1\) entscheidbar.
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Sei \(M_2\) eine Turingmaschine, die \(L_2\) entscheidet und sei \(M_f\) die Turingmaschine,
                    die \(f\) berechnet.
                    Wir bauen nun eine neue Turingmaschine \(M_1\).
                    Sie nimmt das Eingabewort \(x \in \Sigma_1^* \) und lässt die Turingmaschine
                    \(M_f\) auf \(x\) arbeiten; wenn \(M_f\) terminiert, steht \(f(x)\) auf ihrem Ausgabeband.
                    Wir rufen nun die Turing-Maschien \(M_2\) mit dem Eingabewort \(f(x)\) auf.
                    Wenn \(M_2\) akzeptiert (oder eben ablehnt), dann lassen wir \(M_1\) akzeptieren (oder eben
                    ablehnen). Es gilt nun:
                    \begin&#123;align*&#125;
                    M
                    <i>
                      1(x) = \texttt&#123;accept&#125;&amp;\Leftrightarrow M
                    </i>
                    2(f(x)) = \texttt&#123;accept&#125; \\
                    &amp;\Leftrightarrow f(x) \in L
                    <i>
                      2 \tag&#123;weil $M
                    </i>
                    2$ die Sprache $L
                    <i>
                      2$ entscheidet&#125; \\
                      &amp;\Leftrightarrow x \in L
                    </i>
                    1 \tag&#123;weil $f$ eine Reduktion ist&#125;
                    \end&#123;align*&#125;
                    und somit entscheidet \(M_1\) die Sprache \(L_1\).
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  Stellen Sie sich einfach vor, dass \(M_f\) der Code ist, den Sie selber schreiben müssen,
                  und \(M_2\) die "Bibliotheksfunktion" ist, die Sie ohne groß nachzudenken aufrufen,
                  weil sie ja bereist von anderen Leuten (hoffentlich korrekt) implementiert worden ist.
                  Behauptung 4.6.8 zeigt also, das etwas 
                  {" "}
                  <i>
                    möglich
                  </i>
                  {" "}
                  ist.
                  In der Berechenbarkeitstheorie und Komplexitätstheorie sind wir eher daran interessiert,
                  zu zeigen, was 
                  {" "}
                  <i>
                    nicht möglich
                  </i>
                  {" "}
                  ist, und wenden daher häufiger das Kontrapositiv
                  der Behauptung an:
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Beobachtung
                    </span>
                    Wenn \(f\) eine Reduktion von \(L_1\) nach
                    \(L_2\) ist und \(L_1\) unentscheidbar ist, dann ist auch \(L_2\) unentscheidbar.
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Angenommen, \(L_2\) wäre entscheidbar. Dann wäre laut Behauptung 4.6.8 die Sprache
                    \(L_1\) ja auch entscheidbar, was sie aber nach Annahme nicht ist. Daher ist
                    \(L_2\) eben nicht entscheidbar.
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  Beachten Sie nun, dass so etwas wie Behauptung 4.6.9 bereits oben angewandt haben: wir haben
                  das Haltproblem auf das MPCP-Problem reduziert; jenes dann auf das PCP; und schließlich PCP
                  auf das "Kann ein Palindrom abgeleitet werden"-Problem. Wir haben also eine ganze Kette
                  von Reduktionen bereits durchgeführt.
                  Für Neulinge ist diese Richtung oft inintuitiv und verwirrend. Dies spiegelt
                  sich in der Verwendung des Konjunktivs 
                  {" "}
                  <i>
                    wäre / wäre
                  </i>
                  {" "}
                  in Behauptung 4.6.9 wider.
                  Auch ist es schlicht ungewohnt, ein 
                  {" "}
                  <i>
                    altes
                  </i>
                  {" "}
                  Problem auf ein 
                  {" "}
                  <i>
                    neues
                  </i>
                  {" "}
                  zu reduzieren
                  statt umgekehrt.
                </Paragraph>
                <figure>
                  <img
                    style="height:15em"
                    src="../img/pcp/reduction.svg"
                    loading="lazy" />
                </figure>
                <Paragraph>
                  Üben wir also Reduktionen:
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Theorem
                    </span>
                    <Paragraph>
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          (Schnittproblem kontextfreier Sprachen)
                        </b>
                        {" "}{" "}
                      </Paragraph>
                    </Paragraph>
                    Gegeben zwei kontextfreie Grammatiken \(G_1, G_2\). Es ist
                    unentscheidbar, ob \(L(G_1) \cap L(G_2)\) nichtleer ist, ob es
                    also ein Wort \(x\) mit \(x \in G_1\) und \(x \in G_2\) gibt.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Dieses Problem ist als 
                      {" "}
                      <i>
                        Schnittproblem kontextfreier Sprachen
                      </i>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      bekannt.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Wir reduzieren das Palindromwortproblem (bereits bekannt) auf das Schnittproblem (neues
                    Problem).
                    Sei \(G\) eine Grammatik und \(\Sigma\) die Menge der Terminalsymbole. Sei \(G'\) die
                    folgende Grammatik:
                    \begin&#123;align*&#125;
                    S'&amp;\rightarrow x S' x \tag&#123; für alle \(x \in \Sigma\)&#125;\\
                    S'&amp;\rightarrow x \tag&#123; für alle \(x \in \Sigma\)&#125;\\
                    S'&amp;\rightarrow \epsilon
                    \end&#123;align*&#125;
                    Die Grammatik \(G'\) erzeugt genau die Sprache der Palindromwörter über \(\Sigma\).
                    Unsere Reduktion \(f\) nimmt nun als Eingabe eine kontextfreie Grammatik \(G\) (bzw. deren
                    Codierung) und gibt das Paar \((G,G')\) aus (bzw. deren Codierungen). Wir stellen fest:
                    \(G\) kann ein Palindromwort ableiten genau dann, wenn \(L(G) \cap L(G') \ne \emptyset\),
                    wenn es also ein Wort \(\alpha\) gibt, dass aus \(G\) und aus \(G'\) abgeleitet werden kann.
                    Die Funktion \(f\) ist also eine Reduktion vom Palindromwortproblem auf das Schnittproblem.
                    Mit Behauptung 4.6.9 zusammen heißt das, dass das Schnittproblem unentscheidbar ist.
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Theorem
                    </span>
                    {" "}{" "}
                    <b>
                      (Mehrdeutigkeitsproblem kontextfreier Sprachen)
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Gegeben eine kontextfreie Grammatik \(G\). Es ist unentscheidbar,
                    ob \(G\) mehrdeutig ist, d.h., ob es ein Wort \(x \in \Sigma^*\) gibt,
                    für das zwei verschiedene Ableitungsbäume existieren.
                  </Paragraph>
                </div>
                <div
                  style="background-color: rgba(255,0,0,0.1);"
                  class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Falscher Beweis.
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Wir reduzieren das uns bereits bekannte Schnittproblem auf das Mehrdeutigkeitsproblem.
                    Gegeben seien zwei kontextfreie Grammatiken \(G_1, G_2\) mit Startsymbolen \(S_1, S_2\) und
                    Nichtterminalmenge \(N_1, N_2\). Wir machen in einem ersten Schritt die Mengen \(N_1\) und
                    \(N_2\) disjunkt (wenn sie es nicht eh schon sind; wir können beispielsweise jedes \(X \in N_2\)
                    in
                    \(X'\) umbenennen). Dann führen wir ein Super-Startsymbol \(S\) ein und zwei Produktionen:
                    \begin&#123;align*&#125;
                    S&amp;\rightarrow S
                    <i>
                      1 \\
                      S&amp;\rightarrow S
                    </i>
                    2
                    \end&#123;align*&#125;
                    und übernehmen alle Produktionen von \(G_1\) und \(G_2\). Dies ist unsere neue Grammatik \(G\).
                    Sie sehen nun:
                    wenn es ein \(x \in L(G_1) \cap L(G_2)\) gibt, dann kann man \(x\) auf zwei verschiedene
                    Weisen in \(G\) ableiten, nämlich
                    \begin&#123;align*&#125;
                    S&amp;\Rightarrow S
                    <i>
                      1 \Rightarrow^* x \tag&#123;Ableitung wie in $G
                    </i>
                    1$&#125; \\
                    S&amp;\Rightarrow S
                    <i>
                      2 \Rightarrow^* x \tag&#123;Ableitung wie in $G
                    </i>
                    2$&#125; \ ,
                    \end&#123;align*&#125;
                    und das sind wirklich zwei verschiedene Ableitungen, weil ja bereits \(S_1 \ne S_2\).
                    Wenn nun umgekehrt ein Wort \(y\) via \(S_1\) und via \(S_2\) ableitbar sein sollte
                    (\(G\) also mehrdeutig sein sollte), dann bedeutet dies, dass \(G_1\) und \(G_2\) beide
                    das Wort \(y\) ableiten können, also einen nichtleeren Schnitt haben.
                    Dies ist somit unsere Reduktion \(f\): nimm als Eingabe das Paar \(G_1, G_2\) (bzw. dessen
                    Codierung),
                    konstruiere \(G\) und gib \(G\) aus. Dieses \(f\) reduziert das Schnittproblem auf das
                    Mehrdeutigkeitsproblem.
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  <Paragraph>
                    Haben Sie den Fehler im Beweis erkannt? Das Problem ist, dass es sein könnte, dass
                    \(G_1\) und \(G_2\) leeren Schnitt haben, \(G_1\) aber bereits mehrdeutig ist.
                    Die Ausgabe-Grammatik \(G\) wäre dann auch mehrdeutig; also hätte die Reduktion \(f\)
                    einen Fehler gemacht.
                    Wir müssen leider bis zum Postschen Korrespondenzproblem zurückgehen und direkt von dort
                    reduzieren.
                    Problematisch ist, dass ein PCP-Puzzle selbst mehrere Lösungen haben kann und auch für
                    ein Lösungswort \(\gamma\) es mehrere Möglichkeiten geben kann, es zu "legen", also
                    \begin&#123;align*&#125;
                    \top(s)&amp;= \bottom(s) = \gamma \\
                    \top(s')&amp;= \bottom(s') = \gamma \ .
                    \end&#123;align*&#125;
                    Wenn dem so wäre, dann würde bereits unsere Reduktion auf das Palindromwortproblem eine
                    mehrdeutige Grammatik erzeugen. Wir gehen einen anderen Weg.
                    Ich folge hier dem Tip in Exercise 5.21 aus
                    Michael Sipsers Buch 
                    {" "}
                    <i>
                      Introduction to the Theory of Computation
                    </i>
                    {" "}
                    , third edition.
                  </Paragraph>
                </Paragraph>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Beweis.
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Sei ein PCP-Puzzle \(P = \&#123; (\alpha_1:\beta_1), \dots, (\alpha_n : \beta_n)\&#125;\) gegeben.
                    Wir erstellen nun eine kontextfreie Gramatik, die es dem "User" erlaubt, zu entscheiden,
                    ob er das Wort via die oberen Teile \(\alpha_i\) oder via die unteren Teile ableiten will;
                    wenn es auf beide Weisen geht, dann ist die Grammatik mehrdeutig und das PCP hat eine Lösung.
                    Also:
                    \begin&#123;align*&#125;
                    S&amp;\rightarrow S
                    <i>
                      1 \\
                      S&amp;\rightarrow S
                    </i>
                    2 \\
                    S
                    <i>
                      1&amp;\rightarrow \alpha
                    </i>
                    i S
                    <i>
                      1 i \ | \ \alpha
                    </i>
                    i i \tag&#123;für alle oberen Teile \(\alpha_i\)&#125; \\
                    S
                    <i>
                      2&amp;\rightarrow \beta
                    </i>
                    i S
                    <i>
                      2 i \ | \ \beta
                    </i>
                    i i \tag&#123;für alle unteren Teile \(\beta_i\)&#125;
                    \end&#123;align*&#125;
                    wobei \(1, 2, \dots, n\) neue Symbole sind. Die Indizes \(i\) stellen sicher,
                    dass jede von \(S_1\) ausgehende Ableitung eindeutig ist (und genau so von \(S_2\));
                    die einzige Mehrdeutigkeit kann aufkommen, wenn ein Wort sowohl via \(S_1\) als
                    auch via \(S_2\) ableitbar ist; und dies geschieht genau dann, wenn das PCP-Puzzle
                    eine Lösung hat. Wir haben nun also unsere Reduktion von PCP auf das Mehrdeutigkeitsproblem.
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
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