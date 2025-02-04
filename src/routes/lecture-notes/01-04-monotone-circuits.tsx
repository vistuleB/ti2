import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
const Article = () => {
  return (
    <Container>
      <Chapter number={5}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="01-03-binary-adder">
            <Paragraph>
              &lt;&lt; Kapitel 01.03
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="01-05-majority">
            <Paragraph>
              Kapitel 01.05 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    1.4 Monotone Funktionen und monotone Schaltkreise
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Für zwei Tupel \(\mathbf&#123;x&#125;, \mathbf&#123;y&#125; \in \&#123;0,1\&#125;^n\) schreiben wir
                    \( \mathbf&#123;x&#125; \leq \mathbf&#123;y&#125;\), falls \(x_1 \leq y_1, \dots, x_n \leq y_n\), also
                    \(\mathbf&#123;x&#125;\){" "}
                    <em>
                      in jeder Koordinate
                    </em>
                    kleiner gleich \(\mathbf&#123;y&#125;\) ist.
                    Beispielsweise gilt \( (0,0,1) \leq (1,0,1)\). Allerdings gilt weder
                    \( (0,1,0) \leq (1,0,1)\) noch umgekehrt; die beiden Tupel sind{" "}
                    <em>
                      unvergleichbar
                    </em>
                    ;
                    es handelt sich bei \(\leq\) also um eine{" "}
                    <em>
                      Partialordnung
                    </em>
                    .
                    Am Besten stellen Sie sich eine solche Partialordnung als gerichteten Graphen vor:
                  </Paragraph>
                </Paragraph>
                <figure>
                  <img
                    style="height:10em"
                    src="../img/circuits/hasse-diagram.svg"
                    loading="lazy" />
                </figure>
                <Paragraph>
                  <Paragraph>
                    Diese Darstellung einer Partialordnung als gerichteter Graph bezeichnet man auch als
                  </Paragraph>
                  <Paragraph>
                    <em>
                      Hasse-Diagramm
                    </em>
                    (ich verzichte hier auf eine formale Definition).
                    Es gilt nun \(\mathbf&#123;x&#125; \leq \mathbf&#123;y&#125;\), wenn Sie im Hasse-Diagramm einen
                    Pfad von \(\mathbf&#123;x&#125;\) nach \(\mathbf&#123;y&#125;\) finden.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Vorsicht.
                    </b>
                    {" "}
                    Im obigen Bild steht zwar \(001\) unterhalb von \(110\), allerdings
                    werden Sie keinen Pfad von \(001\) nach \(110\) finden;
                    es gilt also \(001 \not \leq 110\); die beiden Elemente sind{" "}
                    <em>
                      unvergleichbar
                    </em>
                    .
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Definition
                    </span>
                    Eine Boolesche Funktion \(f: \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125;\) heißt
                  </Paragraph>
                  <Paragraph>
                    <em>
                      monoton
                    </em>
                    , wenn
                    {" "}
                  </Paragraph>
                  <Paragraph>
                    $$
                    \forall \mathbf&#123;x&#125; \leq \mathbf&#123;y&#125; \in \&#123;0,1\&#125;^n \ : \
                    f(\mathbf&#123;x&#125;) \leq f(\mathbf&#123;y&#125;) \ .
                    $$
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    In anderen Worten: wenn wir ein Input-Bit von 0 auf 1 ändern, kann das Output-Bit
                    nicht von 1 auf 0 umkippen.
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Welche der Booleschen Funktionen \(\wedge, \vee, \neg, \oplus, \maj\) sind monoton?
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Funktionen auf wenigen Variablen können wir graphisch darstellen und somit
                    erkennen, ob sie monoton sind oder nicht. Für eine Funktion
                    \( f: \&#123;0,1\&#125;^2 \rightarrow \&#123;0,1\&#125;\) markieren
                    wir im Hasse-Diagramm von \(\&#123;0,1\&#125;^2\) diejenigen Elemente blau,
                    auf denen \(f(x,y) = 1\) ist, und die anderen rot.
                  </Paragraph>
                </Paragraph>
                <figure>
                  <img
                    style="height:10em"
                    src="../img/circuits/hasse-diagram.svg"
                    loading="lazy" />
                </figure>
                <Paragraph>
                  <Paragraph>
                    Wir sehen nun, dass es im Bild von \(\wedge\) keinen roten Punkt gibt,
                    der oberhalb eines blauen Punktes liegt, im Bild von \(\oplus\) allerdings
                    schon. Der Grund: \(\wedge\) ist monoton, \(\xor\) ist es nicht.
                    Formaler argumentiert: in der Partialordnung gilt \(01 \leq 11\) aber
                    \(\xor (0,1) \gt \xor (1,0)\), was der Definition einer monotonen Funktion
                    widerspricht. (Ich habe hier absichtlich die Präfixschreibweise \(\xor(0,1)\) verwendet,
                    um hervorzuheben, dass es sich hierbei um eine Funktion in zwei Variablen handelt.)
                    Beachten Sie, dass ich die Worte{" "}
                    <em>
                      "oberhalb"
                    </em>
                    im Sinne der Partialordnung
                    meine, nicht wirklich im geometrischen Sinne in der Abbildung.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Von den Basis-Gates \(\wedge, \vee, \neg\) sind \(\wedge\) und \(\vee\) monoton,
                    \(\neg\) ist es nicht.
                    Es sollte also klar sein, dass ein Schaltkreis ohne Negation immer eine monotone Funktion
                    berechnet. Allerdings stimmt der Umkehrschluss nicht. Der Schaltkreis
                  </Paragraph>
                  <figure>
                    <img
                      style="height:10em"
                      src="../img/circuits/hasse-diagram.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    ist nicht monoton (beachten Sie hinter der \(\bar&#123;y&#125;\)-Schreibweise versteckte NOT-Gate),
                    ist aber äquivalent zu der offensichtlich monotonen Funktion \(x\). Allerdings können wir
                    folgendes beweisen:
                  </Paragraph>
                </Paragraph>
                <div
                  id="theorem-monotone"
                  class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Theorem
                    </span>
                    Zu jeder monotonen Funktion \(f: \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125;\) gibt es einen monotonen
                    Schaltkreis (also ohne NOT-Gates), der \(f\) berechnet.
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Beweisen Sie das Theorem. 
                    {" "}
                    <b>
                      Tip.
                    </b>
                    {" "}
                    Gehen Sie meine oben skizzierten drei
                    Konstruktionen durch (Rekursiv, DNF, CNF) und versuchen Sie, sie so zu modifizieren,
                    dass Sie alle NOT-Gates loswerden.
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Finden Sie alle monotonen Funktionen in zwei Variablen.
                    Wie sieht es mit allen monotonen Funktionen in{" "}
                    <em>
                      drei
                    </em>
                    Variablen aus?
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Am Besten betrachten Sie das{" "}
                      <em>
                        Hasse-Diagramm
                      </em>
                      der
                      Partialordnungen auf Mengen \( \&#123;0,1\&#125;^2\) bzw. \( \&#123;0,1\&#125;^3\):
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="height:10em"
                      src="../img/circuits/hasse-diagram.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      und überlegen sich, wie Sie die vier bzw. acht Knoten auf monotone Weise in einen
                      1-Bereich und einen 0-Bereich aufteilen können.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    {" "}{" "}
                    <b>
                      (Challenge).
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Bauen Sie einen Schaltkreis mit drei Input-Variablen \(x,y,z\), der drei
                    Output-Gates hat, die \(\bar&#123;x&#125;, \bar&#123;y&#125;, \bar&#123;z&#125;\) berechnen.
                    Ihr Schaltkreis darf{" "}
                    <em>
                      höchstens zwei NOT-Gates
                    </em>
                    einhalten,
                    aber beliebig viele AND- und OR-Gates.
                  </Paragraph>
                  <figure>
                    <img
                      style="height:10em"
                      src="../img/circuits/hasse-diagram.svg"
                      loading="lazy" />
                  </figure>
                </div>
                <h1>
                  <Paragraph>
                    Lösungen zu den Übungsaufgaben
                  </Paragraph>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Ich lege Ihnen sehr ans Herz, die obigen Übungsaufgaben selbständig
                    zu bearbeiten. Falls Sie dennoch die Geduld verlieren,
                    so habe ich hier Lösungen ausgearbeitet. Auch mit dem Zweck, an dieser
                    Stelle auf Beweismethoden wie{" "}
                    <em>
                      Induktion
                    </em>
                    und verschiedene
                    Beweisstrategien einzugehen.
                  </Paragraph>
                </Paragraph>
                <div
                  id="theorem-1"
                  class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Theorem
                    </span>
                    Zu jeder monotonen Funktion \(f: \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125;\) gibt es einen monotonen
                    Schaltkreis (also ohne NOT-Gates), der \(f\) berechnet.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Ich werde zweieinhalb Beweise für dieses Theorem vorstellen. Dies dient auch dazu,
                    gängige{" "}
                    <em>
                      Beweistechniken
                    </em>
                    und{" "}
                    <em>
                      Beweismethoden
                    </em>
                    zu illustrieren. Unter
                    Beweismethoden
                    verstehe ich hier formale Methoden wie
                  </Paragraph>
                  <ul>
                    <li>
                      <Paragraph>
                        Beweis durch Induktion,
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Beweis durch Widerspruch,
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Beweis durch vollständige Fallunterscheidung,
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        ...
                      </Paragraph>
                    </li>
                  </ul>
                  <Paragraph>
                    wie sie zum Beispiel auf
                  </Paragraph>
                  <Paragraph>
                    <a href="https://de.wikipedia.org/wiki/Beweis_(Mathematik)#Beweismethoden">
                      <Paragraph>
                        Wikipedia
                      </Paragraph>
                    </a>
                    aufgeführt
                    sind.
                    Diesen zur Seite stehen die nicht wirklich formalisierbaren Beweistechniken oder Beweisstrategien,
                    die sich oft aus persönlicher Erfahrung speisen, wie zum Beispiel
                  </Paragraph>
                  <ul>
                    <li>
                      <Paragraph>
                        kleine Beispiele untersuchen und dann verallgemeinern,
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        bereits Bekanntes abwandeln und hoffen, dass es funktioniert,
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        local change: ein Objekt schrittweise in die gewünschte Richtung verändern;
                      </Paragraph>
                    </li>
                  </ul>
                  <Paragraph>
                    da bei den Beweistechniken Erfahrung, Intuition und Kreativität mit ins Spiel kommen,
                    ist es unmöglich, eine vollständige Liste anzugeben; ich habe die drei obigen Punkte gewählt, weil
                    sie in der Tat das repräsentieren, was wir in den Beweisen jetzt verwenden werden.
                  </Paragraph>
                </Paragraph>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Erster Beweis. Top-Down mit{" "}
                      <code>
                        if-then-else
                      </code>
                      .
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      In diesem Beweis verwende ich die zweite oben erwähnte Technik: bereits bekanntes
                      abwandeln. Was kennen wir denn bereits? Wir kennen
                      die{" "}
                      <a href="../vorlesungsskript.html#truth-table-top-down">
                        <Paragraph>
                          Top-Down-Methode
                        </Paragraph>
                      </a>
                      , wie wir
                      aus einer Wahrheitstabelle einen Schaltkreis bauen:
                    </Paragraph>
                  </Paragraph>
                  <div class="well theorem subtheorem">
                    <Paragraph>
                      <span class="numbered-title">
                        Theorem
                      </span>
                      Zu jeder Booleschen Funktion \(f: \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125;\) gibt es
                      einen Schaltkreis \(C\), der \(f\) berechnet.
                    </Paragraph>
                  </div>
                  <Paragraph>
                    <Paragraph>
                      Wir haben diese Konstruktion in der Vorlesung an einem Beispiel durchexerziert und auch
                      Größe und Tiefe des resultierenden Schaltkreises analysiert, allerdings haben wir
                      den Beweis nicht formal aufgeschrieben. Nutzen wir hier die Gelegennheit und
                      üben an diesem Beispiel das Finden und Führen mathematischer Beweise.
                      Beachten Sie, dass wir nun vorerst über allgemeine, nicht notwendigerweise monotone
                      Boolesche
                      Funktionen
                      reden. Falls Sie sich noch gut an unseren Beweis von Theorem 2 in der Vorlesung
                      erinnern können und eher an Theorem 1 als an allgemeinen Beweismethoden interessiert sind,
                      dürfen Sie gerne{" "}
                      <a href="#after-sub-proof">
                        <Paragraph>
                          runterspringen.
                        </Paragraph>
                      </a>
                    </Paragraph>
                  </Paragraph>
                  <div class="well container-fluid">
                    <Paragraph>
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          Beweis.
                        </b>
                        {" "}{" "}
                      </Paragraph>
                      <Paragraph>
                        Als{" "}
                        <em>
                          Beweismethode
                        </em>
                        verwenden wir Induktion über \(n\), die Anzahl der Variablen.
                      </Paragraph>
                    </Paragraph>
                    <div class="alert-info">
                      <Paragraph>
                        Zur Erinnerung: bei einem Beweis per Induktion wollen wir eine Aussage
                        der Form{" "}
                        <em>
                          Für alle natürlichen Zahlen \(n \in \N\) gilt \(P(n)\)
                        </em>
                        beweisen,
                        wobei \(P(n)\) wiederum eine Aussage ist, in der die Zahl \(n\) irgendwo vorkommt.
                        Bei einem Beweis durch Induktion zeigen wir nun,
                      </Paragraph>
                      <ol>
                        <li>
                          <Paragraph>
                            dass \(P(0)\) gilt (
                            {" "}
                            <b>
                              Induktionsbasis
                            </b>
                            {" "}
                            ),
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph>
                            dass, wenn \(P(n)\) für eine Zahl \(n \in \N \) gilt, dann sicherlich
                            auch \(P(n+1)\) gilt (
                            {" "}
                            <b>
                              Induktionsschritt
                            </b>
                            {" "}
                            ).
                          </Paragraph>
                        </li>
                      </ol>
                      <Paragraph>
                        Wenn wir beide Teile gezeigt haben, können wir uns nun "hochhangeln":
                        \(P(0)\) gilt, weil wir in Punkt 1 gezeigt haben;
                        mit Hilfe von Punkt 2 können wir nun argumentieren, dass
                        aus \(P(0)\) die Aussage \(P(1)\) folgt;
                        dass aus \(P(1)\) die Aussage \(P(2)\) folgt; und so weiter.
                        Da wir auf diese Weise jede natürliche Zahl irgendwann erreichen,
                        können wir schlussfolgern, dass \(P(n)\) für jede Zahl \(n \in \Z\) gilt.
                      </Paragraph>
                    </div>
                    <Paragraph>
                      <Paragraph>
                        Als erstes müssen wir nun unsere Aussage, die wir beweisen wollen (also die im Theorem)
                        so formulieren, dass sie die Form{" "}
                        <em>
                          \(P(n)\) für alle \(n \in \N\)
                        </em>
                        annimmt.
                        Dies ist einfach, da die Zahl \(n\) bereits im Theorem vorkommt. Wir formulieren sie
                        also nun so um:
                      </Paragraph>
                    </Paragraph>
                    <div class="well theorem subtheorem">
                      <Paragraph>
                        <span class="numbered-title">
                          Theorem 1.4.4, alternative Formulierung
                        </span>
                        Für jede natürliche Zahl \(n\) gilt: zu jeder Booleschen Funktion
                        \(f: \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125;\) gibt es einen Schaltkreis \(C\), der
                        \(f\) berechnet.
                      </Paragraph>
                    </div>
                    <Paragraph>
                      <Paragraph>
                        Wir haben also im Prinzip Theorem 1.4.4 umständlicher formuliert, um die
                        Abhängigkeit von \(n\) zu verdeutlichen. Wir müssen nun Induktionsbasis und
                        Induktionsschritt durchführen.
                      </Paragraph>
                    </Paragraph>
                    <Paragraph>
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          Induktionsbasis.
                        </b>
                        {" "}
                        Wenn \(n=0\) ist, dann gibt es nur zwei mögliche
                        Boolesche
                        Funktionen,
                        nämlich die konstanten Funktionen \(0\) und \(1\). Für beide Funktionen
                        gibt es einen Schaltkreis, nämlich bestehend aus einem Input-Gate (mit
                        der Konstant 0 bzw. 1 beschriftet), das gleichzeitig auch Output-Gate ist.
                      </Paragraph>
                    </Paragraph>
                    <div class="alert-warning">
                      <Paragraph>
                        Vielleicht fühlen Sie sich unwohl bei der Idee, es mit Funktionen
                        mit
                        null Variablen tun zu haben. Allerdings: warum? In Java hätten Sie bestimmt kein Problem
                        mit
                      </Paragraph>
                      <Paragraph>
                        <pre
                          style="margin:2ch"
                          class="listing">
                          <Paragraph>
                            public boolean constantFalse()&#123;
                            return false;
                            &#125;
                            public boolean constantTrue()&#123;
                            return true;
                            &#125;
                          </Paragraph>
                        </pre>
                        und dies sind ja offensichtlich Boolesche Funktionen mit null Input-Variablen.
                        Ich nehme Ihre Ängste aber ernst, und in der Tat gibt es Fälle, wo es
                        sich nicht richtig anfühlt, den Induktionsbeweis bei \(0\) anzufangen.
                        In diesem Fall dürfen Sie die Induktionsbasis gerne bei \(n=1\) ansetzen
                        oder wo auch immer Sie sich "wohlfühlen"; sie müssen dann aber im Hinterkopf
                        behalten, dass Sie Ihre Aussage für \(n=0\) nicht bewiesen haben; machnmal
                        ist das unvermeidbar, weil manche Aussagen einfach z.B. erst ab \(n \geq 2\) gelten.
                      </Paragraph>
                      <Paragraph>
                        <Paragraph>
                          <Paragraph>
                            Wenn wir die Induktionsbasis bei \(n=1\) ansetzen wollen, dann sehen wir, dass
                            es{" "}
                            <em>
                              vier
                            </em>
                            Funktionen gibt: \(0, 1, x, \neg x\); all diese haben natürlich
                            einen
                            (sehr einfachen) Schaltkreis. Nur bei \(\neg x\) braucht unser Schaltkreis überhaupt
                            ein
                            Gate.
                          </Paragraph>
                        </Paragraph>
                        <Paragraph>
                          <Paragraph>
                            An diesem Punkt protestieren Sie vielleicht und sagen, dass \(0\) keine Funktion
                            in{" "}
                            <em>
                              einer
                            </em>
                            Variable ist, sondern in{" "}
                            <em>
                              zwei
                            </em>
                            Variablen.
                            Und auch hier appelliere ich an Ihre Programmiererfahrung: weder Sie
                            noch der Java-Compiler werden Probleme mit der Funktion
                          </Paragraph>
                        </Paragraph>
                        <pre
                          style="margin:2ch"
                          class="listing">
                          <Paragraph>
                            public boolean constantFalse(boolean x)&#123;
                            return false;
                            &#125;
                          </Paragraph>
                        </pre>
                        <Paragraph>
                          <Paragraph>
                            haben. Ja in der Tat, Java toleriert es, dass Sie{" "}
                            <code>
                              constantFalse
                            </code>
                            zweimal
                            deklariert haben, einmal als Funktion mit 0 Input-Variablen, einmal als
                            Funktion mit einer Input-Variablen. Um hundertprozentig korrekt zu sein, müssten wir
                            Funktionen \(\textnormal&#123;zero&#125;_n\) definieren als
                          </Paragraph>
                        </Paragraph>
                        \begin&#123;align*&#125;
                        \textnormal&#123;zero&#125;
                        <i>
                          n&amp;: \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125; \\
                          (x
                        </i>
                        1,\dots,x_n)&amp;\mapsto 0 \ .
                        \end&#123;align*&#125;
                      </Paragraph>
                      <Paragraph>
                        <Paragraph>
                          In der Praxis gehen wir in der Mathematik deutlich laxer mit Notation um und
                          hoffen, dass der Leser aus dem Kontext die richtige Interpretation herausliest:
                          ob \(0\) nun eine Konstante ist, eine Funktion mit einer Input-Variablen, mit zwei
                          Input-Variablen etc. In mathematischen Papern lesen Sie
                          in diesem Kontext manchmal{" "}
                          <a href="https://en.wikipedia.org/wiki/Abuse_of_notation">
                            <em>
                              with abuse of
                              notation
                            </em>
                          </a>
                          ,
                          womit die Autoren andeuten, dass sie ihre Notation nicht ganz korrekt anwenden, aber
                          davon ausgehen, dass Leser oder Leserin (die ja Menschen sind und keine Compiler),
                          verstehen, was gemeint ist.
                        </Paragraph>
                      </Paragraph>
                    </div>
                    <Paragraph>
                      <Paragraph>
                        Wir haben nun also die Induktionsbasis erfolgreich gezeigt. Als nächstes kommt nun der
                        Schritt. In diesem nehmen wir an, dass die Aussage \(P(n)\) bereits gilt,
                        und wollen davon ausgehend zeigen, dass auch \(P(n+1)\) gilt.
                        Alternativ können wir annehmen, dass \(P(n-1)\) gilt und wollen \(P(n)\) zeigen (wobei
                        wir nun \(n \geq 1\) annehmen müssen). Ob Sie
                        \(P(n) \Rightarrow P(n+1)\) oder \(P(n-1) \Rightarrow P(n)\) zeigen,
                        kommt aufs Gleiche raus und unterscheidet sich nur in der Notation; in diesem
                        Falle ist es mir angenehmer, \(P(n-1) \Rightarrow P(n)\) zu zeigen. Wir dürfen
                        also die{" "}
                        <em>
                          Induktionshypothese
                        </em>
                        \(P(n-1)\) als gegeben annehmen:
                      </Paragraph>
                    </Paragraph>
                    <div class="well subtheorem">
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          Induktionshypothese.
                        </b>
                        {" "}{" "}
                      </Paragraph>
                      <Paragraph>
                        Zu jeder Booleschen Funktion in \(n-1\) Variablen
                        gibt es einen äquivalenten Schaltkreis.
                      </Paragraph>
                    </div>
                    <Paragraph>
                      <Paragraph>
                        und wollen den Induktionsschritt vollziehen, also \(P(n)\) zeigen:
                      </Paragraph>
                    </Paragraph>
                    <div class="well subtheorem">
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          Ziel des Induktionsschritts.
                        </b>
                        {" "}{" "}
                      </Paragraph>
                      <Paragraph>
                        Zu jeder Booleschen Funktion in \(n\) Variablen
                        gibt es einen äquivalenten Schaltkreis.
                      </Paragraph>
                    </div>
                    <Paragraph>
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          Beweistechnik/-strategie
                        </b>
                        {" "}
                        . Um den Induktionsschritt
                        vollziehen zu können, müssen wir irgendwie die \(n\)-stellige
                        Funktion \(f\) auf sinnvolle Weise in \(n-1\)-stellige Funktionen
                        "zerlegen". Hier ist im Allgemeinen Kreativität gefragt.
                        Im vorliegenden Falle ist es aber recht klar, welche Zerlegung in Frage kommt.
                        Wir definieren zwei neue, "kleinere" Funktionen
                        \(f_0, f_1: \&#123;0,1\&#125;^&#123;n-1&#125; \rightarrow \&#123;0,1\&#125;\) per
                        \begin&#123;align*&#125;
                        f
                        <i>
                          0 (x
                        </i>
                        2, \dots, x
                        <i>
                          n)&amp;:= f(0, x
                        </i>
                        2, \dots, x
                        <i>
                          n) \\
                          f
                        </i>
                        1 (x
                        <i>
                          2, \dots, x
                        </i>
                        n)&amp;:= f(1, x
                        <i>
                          2, \dots, x
                        </i>
                        n) \ .
                        \end&#123;align*&#125;
                        In anderen Worten, wir fixieren das erste Input-Bit auf einen konstanten Wert und
                        erhalten so
                        eine Funktion in \(n-1\) Variablen.
                        Die Funktion \(f_0\) ist im Prinzip die obere Hälfte der Wahrheitstabelle, und
                        \(f_1\) ist die untere Hälfte.
                        Da \(f_0\) und \(f_1\) jeweils nur \(n-1\) Input-Variablen haben,
                        können wir die Induktionshypothese anwenden und folgern,
                        dass es Boolesche Schaltkreise für sie gibt.
                        Nach{" "}
                        <em>
                          Zerlegen in \(f_0, f_1\)
                        </em>
                        und
                      </Paragraph>
                      <Paragraph>
                        <em>
                          Anwenden der Induktionshypothese
                        </em>
                        müssen wir nun
                        die Teilergebnisse wieder{" "}
                        <em>
                          sinnvoll zusammenfügen
                        </em>
                        . Dies
                        tun wir in diesem Falle mit einem{" "}
                        <code>
                          if-then-else
                        </code>
                        -Gate:
                      </Paragraph>
                    </Paragraph>
                    <figure>
                      <img
                        style="height:10em"
                        src="../img/circuits/hasse-diagram.svg"
                        loading="lazy" />
                    </figure>
                    <Paragraph>
                      <Paragraph>
                        Ich behaupte, dass obiger Schaltkreis tatsächlich \(f\) berechnet. Falls dies noch nicht
                        klar sein sollte, können wir auch dies formal beweisen, und zwar
                        durch die Methode{" "}
                        <em>
                          vollständige Fallunterscheidung.
                        </em>
                        Sei
                        nun also ein konkreter Input \(x_1,\dots,x_n\) gegeben.
                      </Paragraph>
                    </Paragraph>
                    <ul>
                      <li>
                        <Paragraph>
                          Der Fall \(x_1 = 1\). Dann gibt der obige Schaltkreis
                          den Wert \(f_1(x_2,\dots,x_n\) aus, was per Definition von \(f_1\)
                          gleich \(f(1, x_2,\dots,x_n) = f(x_1,\dots,x_n)\) ist. Er gibt also den korrekten
                          Wert aus.
                        </Paragraph>
                      </li>
                      <li>
                        <Paragraph>
                          Der Fall \(x_1 = 0\). Dann gibt der obige Schaltkreis
                          den Wert \(f_0(x_2,\dots,x_n\) aus, was per Definition von \(f_0\)
                          gleich \(f(0, x_2,\dots,x_n) = f(x_1,\dots,x_n)\) ist. Er gibt also auch hier den
                          korrekten
                          Wert aus.
                        </Paragraph>
                      </li>
                    </ul>
                    <Paragraph>
                      <Paragraph>
                        Wir haben also erfolgreich einen Schaltkreis für
                        \(f: \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125;\) konstruiert. Unser Induktionsbeweis von Theorem 2
                        ist nun
                        abgeschlossen.{" "}
                        <span class="qed">
                          \(\square\)
                        </span>
                      </Paragraph>
                    </Paragraph>
                  </div>
                </div>
                <Paragraph id="after-sub-proof">
                  <Paragraph>
                    Diesen "hellblauen" Beweis haben wir ja bereits in der Vorlesung
                    geführt. Ich habe ihn hier wiederholt und in größerem Detail besprochen, um
                    auf verschiedene formale Aspekte der Beweisführung einzugehen. Wenden wir uns
                    jetzt dem Beweis von{" "}
                    <a href="#theorem-1">
                      <Paragraph>
                        Theorem 1.4.3
                      </Paragraph>
                    </a>
                    zu.{" "}
                  </Paragraph>
                </Paragraph>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Theorem 1.4.3, nochmals.
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Zu jeder monotonen Funktion \(f: \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125;\) gibt es einen monotonen
                    Schaltkreis (also ohne NOT-Gates), der \(f\) berechnet.
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Erster Beweis. Top-Down mit{" "}
                      <code>
                        if-then-else
                      </code>
                      .
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wir verfolgen die Beweistechnik "Bekanntes abwandeln und hoffen".
                      Das Bekannte ist die Konstruktion im Beweis von Theorem 1, also
                      die top-down-Konstruktion. Wir gehen wieder induktiv vor (allerdings
                      bin ich jetzt weniger formal und weise Sie nicht mehr ständig auf die
                      Bestandteile eines Induktionsbeweises hin) und zerlegen \(f: \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125;\)
                      in
                      zwei neue, "kleinere" Funktionen
                      \(f_0, f_1: \&#123;0,1\&#125;^&#123;n-1&#125; \rightarrow \&#123;0,1\&#125;\) per
                      \begin&#123;align*&#125;
                      f
                      <i>
                        0 (x
                      </i>
                      2, \dots, x
                      <i>
                        n)&amp;:= f(0, x
                      </i>
                      2, \dots, x
                      <i>
                        n) \\
                        f
                      </i>
                      1 (x
                      <i>
                        2, \dots, x
                      </i>
                      n)&amp;:= f(1, x
                      <i>
                        2, \dots, x
                      </i>
                      n) \ .
                      \end&#123;align*&#125;
                      Diese Funktionen sind selbst wiederum monoton (versuchen Sie, dies formal zu zeigen,
                      wenn Sie Lust haben; oder versuchen Sie, es sich intuitiv klar zu machen).
                      Per Induktionshypothese gibt es also monotone Schaltkreise für \(f_0\) und \(f_1\). Wir
                      kombinieren diese mit einem{" "}
                      <code>
                        if-then-else
                      </code>
                      -Gate und erhalten:
                    </Paragraph>
                    <figure>
                      <img
                        style="height:10em"
                        src="../img/circuits/hasse-diagram.svg"
                        loading="lazy" />
                    </figure>
                    <Paragraph>
                      Die "durchgetrichenen" Kabel bedeuten, dass hier mehrere Kabel parallel laufen (also hier
                      \(n-1\)
                      viele).
                      Erkennen Sie das Problem mit der Konstruktion? Klar: das{" "}
                      <code>
                        if-then-else
                      </code>
                      -Gate ist
                      nicht
                      monoton. Unser Schaltkreis schaut also in Wirklichkeit so aus:
                    </Paragraph>
                    <figure>
                      <img
                        style="height:10em"
                        src="../img/circuits/hasse-diagram.svg"
                        loading="lazy" />
                    </figure>
                    <Paragraph>
                      und enthält ein NOT-Gate. Aber klar: wir können natürlich nicht die Konstruktion aus dem
                      vorherigen Beweis wiederholen und hoffen, dass alles klappt. Die Beweistechnik heißt ja auch
                    </Paragraph>
                    <Paragraph>
                      <em>
                        Bekanntes abwandeln
                      </em>
                      , nicht{" "}
                      <em>
                        Bekanntes kritiklos wiederholen
                      </em>
                      . Wie
                      können wir den obigen Schaltkreis abwandeln, dass er monoton wird, also das eine NOT-Gate
                      entfernen? Spontan fallen mir zwei Wege ein: wir können das NOT-Gate einfach
                      durch ein gate-loses Kabel ersetzen oder das Kabel einfach ganz weglassen, also:
                    </Paragraph>
                    <figure>
                      <img
                        style="height:10em"
                        src="../img/circuits/hasse-diagram.svg"
                        loading="lazy" />
                    </figure>
                    <Paragraph>
                      Der linke Schaltkreis gibt uns, als Formel geschrieben,
                      {" "}
                    </Paragraph>
                    <Paragraph>
                      $$
                      (x \wedge f_1) \vee (x \wedge f_0) \equiv x \wedge (f_1 \vee f_0) \ .
                      $$
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      Ich erlaube mir hier, aus Bequemlichkeit einfach \(f_1\) statt \(f_1(x_2,\dots,x_n)\) zu
                      schreiben.
                      Auch ein{" "}
                      <em>
                        abuse of notation
                      </em>
                      . In der obigen Formel habe ich rechts
                      das \(x\) ausgeklammert; die Formel beginnt nun mit \(x \wedge ...\); falls
                      \(x=0\) ist, gibt sie also auf jeden Fall \(0\) aus; das kann im Allgemeinen nicht
                      korrekt (also äquivalent zu \(f\) sein; warum sollte \(f\) automatisch \(0\) sein,
                      nur weil \(x_1=0\) ist? Wir schließen also: das NOT-Gate durch ein gate-loses Kabel
                      zu ersetzen ist im Allgemeinen nicht korrekt.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Schauen wir uns also den Schaltkreis im zweiten Bild an. Das rechte \(\wedge\)-Gate hat nur
                      einen Input, kann also weggelassen werden (d.h. durch ein Kabel ersetzt werden); wir
                      erhalten den
                      monotonen Schaltkreis
                    </Paragraph>
                    <figure>
                      <img
                        style="height:10em"
                        src="../img/circuits/hasse-diagram.svg"
                        loading="lazy" />
                    </figure>
                    <Paragraph>
                      bzw. als Formel:
                      {" "}
                    </Paragraph>
                    <Paragraph>
                      $$
                      (x_1 \wedge f_1) \vee f_0 \ .
                      $$
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      Wir müssen nun zeigen, dass dies wirklich \(f\) berechnet, also
                    </Paragraph>
                  </Paragraph>
                  <div class="well subtheorem theorem">
                    <Paragraph>
                      <span class="numbered-title">
                        Behauptung.
                      </span>
                      Für alle \(x_1,\dots,x_n\) gilt
                      {" "}
                    </Paragraph>
                    <Paragraph>
                      $$
                      f(x_1,\dots,x_n) = (x_1 \wedge f_1(x_2,\dots,x_n)) \vee f_0(x_2,\dots,x_n) \ .
                      $$
                    </Paragraph>
                    <Paragraph>
                      {" "}{" "}
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
                      Wir machen eine Fallunterscheidung nach dem Wert von \(x_1\).
                    </Paragraph>
                    <ul>
                      <li>
                        <Paragraph>
                          Der Fall \(x_1 = 0\). Dann gilt
                          \begin&#123;align*&#125;
                          f(x
                          <i>
                            1,x
                          </i>
                          2,\dots,x
                          <i>
                            n)&amp;= f(0,x
                          </i>
                          2,\dots,x
                          <i>
                            n) \tag&#123;da $x
                          </i>
                          1=0$&#125; \\
                          &amp;= f
                          <i>
                            0 (x
                          </i>
                          2, \dots,x
                          <i>
                            n) \tag&#123;Definition von $f
                          </i>
                          2$&#125; \\
                          &amp;= (0 \wedge f
                          <i>
                            1) \vee f
                          </i>
                          0 \tag&#123;die 0 tötet den ersten Term eh&#125;\\
                          &amp;= (x
                          <i>
                            1 \wedge f
                          </i>
                          1) \vee f
                          <i>
                            0 \tag&#123;weil $x
                          </i>
                          1 = 0$&#125; \ ,
                          \end&#123;align*&#125;
                          und die behauptete Gleichung gilt.
                        </Paragraph>
                      </li>
                      <li>
                        <Paragraph>
                          Der Fall \(x_1 = 1\). Dann gilt
                          \begin&#123;align*&#125;
                          f(x
                          <i>
                            1,\dots,x
                          </i>
                          n)&amp;= f
                          <i>
                            1(x
                          </i>
                          2,\dots,x
                          <i>
                            n) \ .
                            \end&#123;align*&#125;
                            Was ist aber mit der rechten Seite der behaupteten Gleichung?
                            \begin&#123;align*&#125;
                            (x
                          </i>
                          1 \wedge f
                          <i>
                            1) \vee f
                          </i>
                          0&amp;= f
                          <i>
                            1 \vee f
                          </i>
                          0 \tag&#123;da $x
                          <i>
                            1=1$ ist und somit im $\wedge$
                            wegfällt&#125;
                            \end&#123;align*&#125;
                            Die linke Seite ist also \(f_1\), die rechte ist \(f_1 \vee f_0\). Schaut leider
                            nicht
                            gleich aus.
                            Jetzt sollten bei Ihnen die Glocken klingeln: wir haben bisher an keiner Stelle
                            im Beweis verwendet, dass \(f\) eine monotone Funktion ist! Und wenn wir das nicht
                            verwendet
                            haben, kann der Beweis ja gar nicht funktionieren. Also: verwenden wir Monotonität:
                            \begin&#123;align*&#125;
                            (0, x
                          </i>
                          2, \dots,x
                          <i>
                            n)&amp;\leq (1, x
                          </i>
                          2, \dots,x
                          <i>
                            n) \tag&#123;Definition unser Partialordnung,
                            &#125; \\
                            f(0, x
                          </i>
                          2, \dots,x
                          <i>
                            n)&amp;\leq f(1, x
                          </i>
                          2, \dots,x
                          <i>
                            n) \tag&#123;weil $f$ monoton ist.&#125; \\
                            f
                          </i>
                          0&amp;\leq f_1 \ .
                          \end&#123;align*&#125;
                          Wir überprüfen nun also: wenn \(f_0(x_2, \dots, x_n) = 0\) ist, dann
                          gilt \(f_0 \vee f_1 = 0 \vee f_1 = f_1\). Wenn
                          \(f_0 = 1\) ist, dann ist \(f_1 = 1\) wegen Monotonität (größer als 1 geht ja
                          nicht),
                          und daher \(f_0 \vee f_1 = 1 \vee 1 = 1 = f_1\). In jedem Fall gilt also:
                          {" "}
                        </Paragraph>
                        <Paragraph>
                          $$
                          (f_0 \vee f_1) = f_1 \ .
                          $$
                        </Paragraph>
                        <Paragraph>
                          {" "}
                          Und somit sind linke und rechte Seite gleich, wie behauptet.
                        </Paragraph>
                      </li>
                    </ul>
                    <span class="qed">
                      \(\square\)
                    </span>
                  </div>
                  <Paragraph>
                    <Paragraph>
                      Wir haben nun also gezeigt, dass für jeden Input \(x_1,\dots,x_n\) gilt:
                      \begin&#123;align*&#125;
                      f = (x
                      <i>
                        1 \wedge f
                      </i>
                      1) \vee f_0 \ ,
                      \end&#123;align*&#125;
                      (wobei wir aus Gründen der Lesbarkeit statt \(f(x_1,\dots,x_n)\) einfach \(f\) schreiben);
                      per Induktion können wir für \(f_1, f_0\) monotone Schaltkreise finden, und somit ist
                    </Paragraph>
                    <figure>
                      <img
                        style="height:10em"
                        src="../img/circuits/hasse-diagram.svg"
                        loading="lazy" />
                    </figure>
                    <Paragraph>
                      ein monotoner Schaltkreis für \(f\).
                    </Paragraph>
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Zweiter Beweis. Bottom-Up, Konstruktion einer DNF-Formel.
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Als Beweisstrategie verwende ich wieder{" "}
                    <em>
                      Bekanntes abwandeln.
                    </em>
                    <Paragraph>
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          Das Bekannte.
                        </b>
                        {" "}{" "}
                      </Paragraph>
                      <Paragraph>
                        Erinnern Sie sich an die Konstruktion einer DNF-Formel auf Basis der gegebenen
                        Wahrheitstabelle. Für jedes \(n\)-Tupel \(\mathbf&#123;a&#125; := a_1,\dots,a_n) \in \&#123;0,1\&#125;^n\),
                        für welches \(f\) den Wert 1 ausgibt, konstruieren wir einen DNF-Term \(T_&#123;\mathbf&#123;a&#125;&#125;\),
                        der auf \(\mathbf&#123;a&#125;\) eine 1 ausgibt und sonst überall eine 0.
                        Um den Term genau zu beschreiben, definieren wir
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125;
                    I
                    <i>
                      &#123;\mathbf&#123;a&#125;&#125;&amp;:= \&#123; i \in \&#123;1,\dots, n\&#125; \ | \ a
                    </i>
                    i = 1 \&#125; \\
                    O
                    <i>
                      &#123;\mathbf&#123;a&#125;&#125;&amp;:= \&#123; i \in \&#123;1,\dots, n\&#125; \ | \ a
                    </i>
                    i = 0 \&#125; \ .
                    \end&#123;align*&#125;
                    Als Beispiel: wenn \(n=5\) und \(\mathbf&#123;a&#125; = (10010)\), dann ist
                    \(I_&#123;\mathbf&#123;a&#125;&#125; = \&#123;1,4\&#125;\) und \(I_&#123;\mathbf&#123;a&#125;&#125; = \&#123;2,3,5\&#125;\). Wir definieren
                    \begin&#123;align*&#125;
                    T
                    <i>
                      &#123;\mathbf&#123;a&#125;&#125;&amp;:= \bigwedge
                    </i>
                    &#123;i \in I
                    <i>
                      &#123;\mathbf&#123;a&#125;&#125;&#125; x
                    </i>
                    i \wedge
                    \bigwedge
                    <i>
                      &#123;i \in O
                    </i>
                    &#123;\mathbf&#123;a&#125;&#125;&#125; \bar&#123;x&#125;
                    <i>
                      i \ .
                      \end&#123;align*&#125;
                      Für \(\mathbf&#123;a&#125; = (10010)\) gibt das also \(x_1 \wedge x_4 \wedge \bar&#123;x&#125;_2 \wedge
                      \bar&#123;x&#125;_3 \wedge \bar&#123;x&#125;_5\).
                      Noch kompakter kann man es hinschreiben, wenn man für eine Variable
                      \(x\) und einen Wert \(b \in \&#123;0,1\&#125;\) folgendes definiert:
                      \begin&#123;align*&#125;
                      x^&#123;b&#125;&amp;:= \begin&#123;cases&#125;
                      x&amp;\textnormal&#123; if $b=1$,&#125;\\
                      \bar&#123;x&#125;&amp;\textnormal&#123; if $b=0$.&#125;
                      \end&#123;cases&#125;
                      \end&#123;align*&#125;
                      Dann können wir \(T_&#123;\mathbf&#123;a&#125;&#125;\) einfach als
                      \begin&#123;align*&#125;
                      T
                    </i>
                    &#123;\mathbf&#123;a&#125;&#125; = \bigwedge
                    <i>
                      &#123;i=1&#125;^n x
                    </i>
                    i^&#123;a_i&#125;
                    \end&#123;align*&#125;
                    definieren, für \(\mathbf&#123;a&#125; = (10010)\) also
                    \(x_1^1 \wedge x_2^0 \wedge x_3^0 \wedge x_4^1 \wedge x_5^0 =
                    x_1 \wedge \bar&#123;x&#125;_2 \wedge \bar&#123;x&#125;_3 \wedge x_4 \wedge \bar&#123;x&#125;_5\). Das gibt den gleichen
                    Term wie zuvor, nur mit den Literalen in anderer Reihenfolge aufgelistet (was keine
                    Rolle spielt, da \(\wedge\) kommutativ ist).
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Gegen eine Boolesche Funktion \(f: \&#123;0,1\&#125;^n \rightarrow \&#123;0,1\&#125;\),
                        definieren wir
                        {" "}
                      </Paragraph>
                      <Paragraph>
                        $$
                        \sat(f) := \&#123;\mathbf&#123;a&#125; \in \&#123;0,1\&#125;^n \ | \ f(\mathbf&#123;a&#125;) = 1 \&#125; \ .
                        $$
                      </Paragraph>
                      <Paragraph>
                        {" "}
                        Die Abkürzung \(\sat\) steht für{" "}
                        <em>
                          satisfying assignments
                        </em>
                        , also
                        diejenigen Belegungen der Variablen, die \(f\) "erfüllen", also 1 werden lassen.
                        Wir bauen uns einen Schaltkreis \(F\):
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125;
                    F := \bigvee
                    <i>
                      &#123;\mathbf&#123;a&#125; \in \sat(f)&#125; T
                    </i>
                    &#123;\mathbf&#123;a&#125;&#125;
                    \end&#123;align*&#125;
                    Dies ist eine DNF-Formel, also insbesondere ein Schaltkreis der Tiefe 2; wir sehen,
                    dass \(F \equiv f\) ist, dieser Schaltkreis (diese Formel) also die Funktion \(f\)
                    berechnet.
                    Dies ist genau die Konstruktion einer DNF, die wir in der Vorlesung bereits besprochen
                    haben.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Das Bekannte abwandeln.
                      </b>
                      {" "}
                      Der Ausdruck
                      \(\bigvee_&#123;\mathbf&#123;a&#125; \in \sat(f)&#125; T_&#123;\mathbf&#123;a&#125;&#125;\) ist ja bereits
                      ein Schaltkreis (der Tiefe 2), allerdings im Allgemeinen kein
                      monotoner, da die Terme \(T_&#123;\mathbf&#123;a&#125;&#125;\) negative Literale (und somit NOT-Gates)
                      enthalten können.
                      Wie werden wir diese los? Sie erinnern sich, was wir im letzten Beweis getan haben: die
                      NOT-Gates einfach weglassen und die ausgehenden Kabel ersatzlos streichen.
                      Hier hieße das nun, aus dem Term
                      \(x_1 \wedge \bar&#123;x&#125;_2 \wedge \bar&#123;x&#125;_3 \wedge x_4 \wedge \bar&#123;x&#125;_5\) den Term
                      \(x_1 \wedge x_4 \) zu machen. Wir definieren also:
                      {" "}
                    </Paragraph>
                    <Paragraph>
                      $$
                      T'_&#123;\mathbf&#123;a&#125;&#125; := \bigwedge_&#123;i \in I_&#123;\mathbf&#123;a&#125;&#125;&#125; x_i \ .
                      $$
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      Der Term \(T'_&#123;\mathbf&#123;a&#125;&#125;\) ist "kürzer" als \(T_&#123;\mathbf&#123;a&#125;&#125;\), stellt
                      also weniger "Bedingungen". Formal gesprochen:
                    </Paragraph>
                  </Paragraph>
                  <div class="well subtheorem theorem">
                    <Paragraph>
                      <span class="numbered-title">
                        Behauptung.
                      </span>
                      Für alle \(x_1,\dots,x_n\) gilt
                      \(T_&#123;\mathbf&#123;a&#125;&#125; \leq T'_&#123;\mathbf&#123;a&#125;&#125;\).
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
                      Definieren wir zusätzlich noch \(T''_&#123;\mathbf&#123;a&#125;&#125; := \bigwedge_&#123;i \in O_&#123;\mathbf&#123;a&#125;&#125;&#125;
                      \bar&#123;x&#125;_i\),
                      dann können wir \(T_&#123;\mathbf&#123;a&#125;&#125; = T'_&#123;\mathbf&#123;a&#125;&#125; \wedge T''_&#123;\mathbf&#123;a&#125;&#125;\) schreiben.
                      Und jetzt ist \(T'_&#123;\mathbf&#123;a&#125;&#125; \wedge T''_&#123;\mathbf&#123;a&#125;&#125; \leq T'_&#123;\mathbf&#123;a&#125;&#125;\)
                      offensichtlich,
                      weil \(g \wedge h \leq g\) ganz allgemein gilt (überzeugen Sie sich davon).
                    </Paragraph>
                    <span class="qed">
                      \(\square\)
                    </span>
                  </div>
                  <Paragraph>
                    <Paragraph>
                      Wir definieren nun analog zu \(F\) eine DNF-Formel
                      {" "}
                    </Paragraph>
                    <Paragraph>
                      $$
                      F' := \bigvee_&#123;\mathbf&#123;a&#125; \in \sat(f)&#125; T'_&#123;\mathbf&#123;a&#125;&#125; \ .
                      $$
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      Sie können sich vorstellen, dass wir \(F\) nehmen und alle negativen Literale
                      ersatzlos streichen. Wir behaupten nun, dass \(F'\) und \(F\) dieselbe
                      Funktion darstellen:
                    </Paragraph>
                  </Paragraph>
                  <div class="well subtheorem theorem">
                    <Paragraph>
                      <span class="numbered-title">
                        Behauptung
                      </span>
                      \(F \equiv F'\), d.h. sie berechnen beide dieselbe Funktion, nämlich \(f\).
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
                      Um zu zeigen, dass beide dieselbe Funktion berechnen, müssen
                      wir zeigen, dass
                      {" "}
                    </Paragraph>
                    <Paragraph>
                      $$
                      F(\mathbf&#123;x&#125;) = F'(\mathbf&#123;x&#125;) \textnormal&#123; für alle $\mathbf&#123;x&#125; \in \&#123;0,1\&#125;^n$.&#125;
                      $$
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      Eine Möglichkeit, eine Gleichheit \(=\) zu zeigen, ist, beide Ungleichungen
                      \(\leq\) und \(\geq\) zu zeigen, also:
                    </Paragraph>
                    <ol>
                      <li>
                        <Paragraph>
                          \(F(\mathbf&#123;x&#125;) \leq F'(\mathbf&#123;x&#125;)\) und{" "}
                        </Paragraph>
                      </li>
                      <li>
                        <Paragraph>
                          \(F(\mathbf&#123;x&#125;) \geq F'(\mathbf&#123;x&#125;)\).
                        </Paragraph>
                      </li>
                    </ol>
                    <Paragraph>
                      Punkt 1 ist einfach: wir haben bereits gesehen, dass
                      \(T_&#123;\mathbf&#123;a&#125;&#125; \leq T'_&#123;\mathbf&#123;a&#125;&#125;\) gilt, und somit
                      auch
                      {" "}
                    </Paragraph>
                    <Paragraph>
                      $$
                      \bigvee_&#123;\mathbf&#123;a&#125; \in \sat(f)&#125; T_&#123;\mathbf&#123;a&#125;&#125; \leq \bigvee_&#123;\mathbf&#123;a&#125; \in \sat(f)&#125;
                      T'_&#123;\mathbf&#123;a&#125;&#125;
                      $$
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      Hier haben wir angewendet, dass \(\bigvee\) eine monotone Funktion ist und wir somit
                      vom \(\leq\) ihrer Inputs auf das \(\leq\) ihres Outputs schließen können.
                    </Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Punkt 2 ist schwieriger.
                        Um \(F'(\mathbf&#123;x&#125;) \leq F(\mathbf&#123;x&#125;)\) zu zeigen, machen wir eine
                        Fallunterscheidung. Falls \(F'(\mathbf&#123;x&#125;) = 0\) ist, so
                        gilt die Ungleichung offensichtlich, denn kleiner als \(0\) kann der Output
                        ja nicht werden.
                        Falls nun \(F'(\mathbf&#123;x&#125;) = 1\) ist, dann müssen wir zeigen, dass
                        auch \(F(\mathbf&#123;x&#125;) = 1\) gilt. Und das muss mindestens ein bisschen
                        nicht-triviale Arbeit erfordern, weil wir ja irgendwo verwenden müssen, dass
                        \(f\) nicht monoton ist.
                        Nehmen wir also an, dass \(F'(\mathbf&#123;x&#125;) = 1\) ist.
                      </Paragraph>
                    </Paragraph>
                    <Paragraph>
                      <Paragraph>
                        {" "}{" "}
                        <b>
                          Strategie: was haben wir?
                        </b>
                        {" "}{" "}
                      </Paragraph>
                      <Paragraph>
                        Es ist immer gut, Dinge konkret "in der Hand zu haben". In diesem Falle?
                        Wir wissen ja, dass
                        \(F' = \bigvee_&#123;\mathbf&#123;a&#125; \in \sat(f)&#125; T'_&#123;\mathbf&#123;a&#125;&#125; \) ist. Wenn nun
                        also die linke Seite, \(F'\), den Wert 1 annimmt, dann muss es auf der rechten
                        Seite (mindestens) einen Term geben, der auch 1 annimmt:
                        {" "}
                      </Paragraph>
                      <Paragraph>
                        $$
                        T'_&#123;\mathbf&#123;a&#125;^*&#125;(x_1,\dots,x_n) = 1 \ ,
                        $$
                      </Paragraph>
                      <Paragraph>
                        {" "}
                        für ein festes, bestimmtes \(\mathbf&#123;a&#125;^*\), also
                        {" "}
                      </Paragraph>
                      <Paragraph>
                        $$
                        \bigwedge_&#123;i \in I_&#123;\mathbf&#123;a&#125;^*&#125;&#125; x_i = 1 \ .
                        $$
                      </Paragraph>
                      <Paragraph>
                        {" "}
                        Wir wollen
                        zeigen, dass \(F(x_1,\dots,x_n) = 1\) gilt. Da
                        \(F = \bigvee_&#123;\mathbf&#123;a&#125; \in \sat(f)&#125; T_&#123;\mathbf&#123;a&#125;&#125; \) gilt, liegt der
                        Verdacht nahe, dass der entsprechende Term
                        \( T_&#123;\mathbf&#123;a&#125;^*&#125;\) auch 1 ausgibt. Das Problem ist leider, dass
                        \begin&#123;align*&#125;
                        T
                        <i>
                          &#123;\mathbf&#123;a&#125;^*&#125;(\mathbf&#123;x&#125;)&amp;= T'
                        </i>
                        &#123;\mathbf&#123;a&#125;^*&#125;(\mathbf&#123;x&#125;) \wedge
                        T''
                        <i>
                          &#123;\mathbf&#123;a&#125;^*&#125;(\mathbf&#123;x&#125;) \\
                          &amp;= 1 \wedge \bigwedge
                        </i>
                        &#123;i \in O(\mathbf&#123;a&#125;^*)&#125; \bar&#123;x&#125;_i \ .
                        \end&#123;align*&#125;
                        Wir wissen also, dass \(x_i=1\) für alle \(i \in I(\mathbf&#123;a&#125;^*)\) gilt;
                        über die \(i \in O(\mathbf&#123;a&#125;^*)\) wissen wir leider nichts.
                        Was hätten wir denn gerne? Wir hätten gerne, dass
                        für die alle \(x_i = 0\) gilt, weil dann
                        \(\bigwedge_&#123;i \in O(\mathbf&#123;a&#125;^*)&#125; \bar&#123;x&#125;_i = 1\) wäre; wir können das
                        aber nicht garantieren.
                      </Paragraph>
                    </Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Wie schaut denn ein Input \(\mathbf&#123;y&#125;\) aus, auf dem
                        \( T_&#123;\mathbf&#123;a&#125;^*&#125;\) 1 ausgibt? So ein \(\mathbf&#123;y&#125;\) müsste
                        \(y_i=1\) für alle \(i \in I(\mathbf&#123;a&#125;^*)\) und
                        \(y_i=0\) für alle \(i \in O(\mathbf&#123;a&#125;^*)\) haben; also
                        1 sein, wo \(\mathbf&#123;a&#125;^*\) auch 1 ist, und 0 sein, wo
                        \(\mathbf&#123;a&#125;^*\) auch 0 ist. Aha! Es müsste \(\mathbf&#123;a&#125;^*\) selbst sein!
                        Na klar, wir erinnern uns: wir haben den Term \(T_&#123;\mathbf&#123;a&#125;&#125;\) so definiert,
                        dass er auf \(\mathbf&#123;a&#125;\) und nur dort 1 wird. Wir wissen also:
                        {" "}
                      </Paragraph>
                      <Paragraph>
                        $$
                        T_&#123;\mathbf&#123;a&#125;^*&#125; (\mathbf&#123;a&#125;^*) = 1 \ .
                        $$
                      </Paragraph>
                      <Paragraph>
                        {" "}
                        Wenn wir Glück haben, gilt \(\mathbf&#123;a&#125;^* = \mathbf&#123;x&#125;\). Ansonsten
                        gilt immerhin, dass \(x_i=1\) für alle \(i \in I(\mathbf&#123;a&#125;^*)\), also
                        \(x_1 = 1\) wenn \(a^*_i = 1\).
                        In anderen Worten, es gilt \(\mathbf&#123;x&#125; \geq \mathbf&#123;a&#125;^*\)!
                        Wunderbar! Jetzt können wir Monotonie anwenden! Denn selbst
                        wenn \(T_&#123;\mathbf&#123;a&#125;^*&#125;\) nicht monoton ist, so wissen wir, dass
                        \(F\) eine monotone Funktion berechnet, und somit
                        {" "}
                      </Paragraph>
                      <Paragraph>
                        $$
                        F(\mathbf&#123;x&#125;) \geq F(\mathbf&#123;a&#125;^*) = 1 \ .
                        $$
                      </Paragraph>
                      <Paragraph>
                        {" "}
                        Wir können zwar nicht genau mit dem Finger auf einen Term von \(F\) zeigen,
                        der 1 wird, wissen aber{" "}
                        <em>
                          per Monotonie
                        </em>
                        , dass es so einen geben muss.
                      </Paragraph>
                      <span class="qed">
                        \(\square\)
                      </span>
                    </Paragraph>
                  </div>
                  <Paragraph>
                    Wir haben nun gezeigt, dass die DNF-Formeln \(F\) und \(F'\) dieselbe Boolesche Funktion
                    berechnen, nämlich \(f\). Die Formel \(F'\) enthält keine negativen Literale und ist somit
                    ein monotoner Schaltkreis von Tiefe 2.
                  </Paragraph>
                  <span class="qed">
                    \(\square\)
                  </span>
                </div>
                <Paragraph>
                  <Paragraph>
                    Ich habe Ihnen zweieinhalb Beweise versprochen. Der zweieinhalbte Beweis
                    geht nun genau so wie der zweite, nur dass er eine CNF-Formel \(G\) statt einer DNF-Formel \(F\)
                    konstruiert und aus dieser dann alle negativen Literale entfernt, womit wir
                    eine monotone CNF-Formel \(G'\) erhalten. Der Beweis, dass \(G'\) und \(G\) dieselbe Funktion
                    berechnen, geht analog zu dem obigen Beweis.
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