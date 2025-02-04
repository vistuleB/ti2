import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
const Article = () => {
  return (
    <Container>
      <Chapter number={24}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="04-03-nfsm">
            <Paragraph>
              &lt;&lt; Kapitel 04.03
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="04-05-regular-expressions">
            <Paragraph>
              Kapitel 04.05 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    4.4 Von einer regulären Grammatik zu einem endlichen
                    Automaten
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    In diesem Unterkapitel wollen wir das Gelernte an einem konkreten Beispiel anwenden.
                    Wir beginnen (1) mit einer Beschreibung eines Formats in natürlicher Sprache; (2) basteln uns
                    daraus
                    mit Hilfe des "Baukastenprinzips" eine reguläre Sprache; (3) säubern diese, indem wir Regeln
                    der Form \(X \rightarrow Y\) und \(X \rightarrow a\) eliminieren; (4) bauen einen
                    nichtdeterministischen
                    endlichen Automaten; (5) transformieren diesen in einen deterministischen endlichen Automaten.
                  </Paragraph>
                </Paragraph>
                <h2>
                  <Paragraph>
                    1. Beschreibung des Formats in natürlicher Sprache
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Unsere Sprache \(L\) soll so ähnlich sein wie die der erlaubten Domainnamen, allerdings mit ein
                    paar Abänderungen,
                    um die obigen Transformationen spannender zu machen. Ein Wort in unserer Sprache besteht aus
                    einer
                    nichtleeren Folge von{" "}
                    <em>
                      Labels
                    </em>
                    die jeweils durch einen{" "}
                    <code>
                      .
                    </code>
                    separiert sind.
                    Jedes Label ist eine nichtleere Folge von Blöcken (ein nichtleerer String aus Buchstaben und
                    Zahlen), separiert
                    durch{" "}
                    <code>
                      :
                    </code>
                    oder{" "}
                    <code>
                      -
                    </code>
                    aber niemals durch beides innerhalb eines Blockes.
                    Also:
                  </Paragraph>
                </Paragraph>
                <div style="text-align:center">
                  <code>
                    bla:bla:blue.xyz-12-zx.b:x:yyy:xxx:aaa
                  </code>
                </div>
                <Paragraph>
                  ist ein Wort in \(L\), aber
                </Paragraph>
                <div style="text-align:center">
                  <code>
                    a:b-c.hello
                  </code>
                </div>
                <Paragraph>
                  ist kein Wort in \(L\), da das erste Label die Separatoren{" "}
                  <code>
                    :
                  </code>
                  und{" "}
                  <code>
                    -
                  </code>
                  mischt.
                  Habe ich
                  \(L\) genau genug beschrieben? Stellen wir eine Meta-Frage: Was zählt überhaupt als{" "}
                  <em>
                    genaue
                    Beschreibung
                  </em>
                  einer
                  Sprache? Wir können uns dem Mund fusselig reden und Beispiele und Nicht-Beispiele angeben, am Ende
                  aber werden
                  wir irgendwann beginnen, formale Regeln aufzustellen, die unsere Sprache beschreiben - wir werden
                  also im Prinzip
                  eine{" "}
                  <em>
                    Grammatik
                  </em>
                  schreiben. Tun wir dies also.
                </Paragraph>
                <Paragraph>
                  <h2>
                    <Paragraph>
                      2. Eine reguläre Grammatik
                    </Paragraph>
                  </h2>
                  <Paragraph>
                    <Paragraph>
                      Beginnen wir mit dem Alphabet.
                      Da es 62 alphanumerische Zeichen gibt:{" "}
                      <code>
                        a..zA..Z0..9
                      </code>
                      und wir uns keine unnötige
                      Arbeit machen wollen,
                      beschränken wir uns auf ein Zeichen:{" "}
                      <code>
                        a
                      </code>
                      . Dazu kommen die Separatoren
                    </Paragraph>
                    <Paragraph>
                      <code>
                        :-.
                      </code>
                      . Also: \(\Sigma = \&#123;a,.,:,-\&#125;\). Stellen Sie sich einfach vor, \(a\) stehe
                      für beliebige alphanumerische Zeichen. Sowohl Grammatik als auch Automaten lassen sich einfach
                      anpassen.
                      Wir beginnen ganz unten und schreiben eine Grammatik für
                      Blöcke, also nichtleere Strings aus alphanumerischen Zeichen.
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  B&amp;\rightarrow a \ | \ aB
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Als nächstes führen wir ein nichtterminales Symbole \(C\) für Labels mit{" "}
                      <code>
                        :
                      </code>
                      ein
                      und ein Nichtterminal \(D\) für Labels mit{" "}
                      <code>
                        -
                      </code>
                      . Wir wählen die Buchstaben \(C,D\),
                      weil
                    </Paragraph>
                    <Paragraph>
                      <code>
                        :
                      </code>
                      auf Englisch{" "}
                      <em>
                        colon
                      </em>
                      und{" "}
                      <code>
                        -
                      </code>
                      <em>
                        dash
                      </em>
                      heißt.
                      \(C\)-Labels können wir uns nach dem Baukastenprizip bauen, in dem
                      wir{" "}
                      <a href="./04-01-regular-grammars.html#operation-L(.L)*">
                        <Paragraph>
                          Theorem 4.1.14
                        </Paragraph>
                      </a>
                      anwenden.
                      Wir fügen zur "End-Produktion" \(B \rightarrow a\) eine weiter Produktion \(B \rightarrow a:B\)
                      hinzu und
                      tun das gleiche für \(B \rightarrow b\). Allerdings benennen wir \(B\) in \(C\) um, damit keine
                      Verwechslungsgefahr mit
                      dem ursprünglichen \(B\) aufkommt. Das gleiche machen wir für \(D\).
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  C&amp;\rightarrow a \ | \ aC \ | \ a&#123;:&#125;C \\
                  D&amp;\rightarrow a \ | \ aD \ | \ a&#123;-&#125;D \\
                  T&amp;\rightarrow C \ | D
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Von \(L\) lassen sich nun also alle Labels ableiten. Wir brauchen nun zum Schluss wieder
                      eine Folge von \(L\), mit{" "}
                      <code>
                        .
                      </code>
                      separiert, müssen also wieder
                    </Paragraph>
                    <Paragraph>
                      <a href="./04-01-regular-grammars.html#operation-L(.L)*">
                        <Paragraph>
                          Theorem 4.1.14
                        </Paragraph>
                      </a>
                      anwenden, dieses
                      mal auf die von \(T\) erzeugte Sprache. Im Ergebnis benennen wir das Startsymbol in \(S\) um.
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\rightarrow C \ | \ D \\
                  C&amp;\rightarrow a \ | \ aC \ | \ a&#123;:&#125;C \ | a&#123;.&#125;S \ \\
                  D&amp;\rightarrow a \ | \ aD \ | \ a\text&#123;-&#125;D \ | \ a&#123;.&#125;S \\
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Um eine "richtig" reguläre Sprache zu erhalten, entzerren wir die erweitert regulären
                      Produktionen
                      wie \(C \rightarrow a&#123;:&#125;C\). Dafür brauchen wir neue Symbole \(C', D', S'\):
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\rightarrow C \ | \ D \\
                  C&amp;\rightarrow a \ | \ aC \ | \ aC'\ | \ aS' \\
                  C'&amp;\rightarrow&#123;:&#125;C \\
                  D&amp;\rightarrow a \ | \ aD \ | \ a D' \ | \ aS' \\
                  D'&amp;\rightarrow \text&#123;-&#125;D \\
                  S'&amp;\rightarrow&#123;.&#125;S
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <h2>
                    <Paragraph>
                      3. Die reguläre Grammatik säubern
                    </Paragraph>
                  </h2>
                  <Paragraph>
                    <Paragraph>
                      Wir wollen nun alle Produktionen der Form \(Y \rightarrow x\) eliminieren. Hierfür nehmen wir
                      uns
                    </Paragraph>
                    <Paragraph>
                      <em>
                        ein
                      </em>
                      neues Nichtterminal \(E\) und ersetzen \(Y \rightarrow x\) durch \(Y \rightarrow
                      xE\)
                      und fügen die Produktion \(E \rightarrow \epsilon\) hinzu.
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\rightarrow C \ | \ D \\
                  C&amp;\rightarrow aE \ | \ aC \ | \ aC'\ | \ aS' \\
                  C'&amp;\rightarrow&#123;:&#125;C \\
                  D&amp;\rightarrow aE \ | \ aD \ | \ a D' \ | \ aS' \\
                  D'&amp;\rightarrow \text&#123;-&#125;D \\
                  S'&amp;\rightarrow&#123;.&#125;S \\
                  E&amp;\rightarrow \epsilon
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      In einem zweiten Schritt wollen wir die Produktionen \(S \rightarrow C\) und \(S \rightarrow D\)
                      eliminieren,
                      sodass wir nur noch Produktionen der From \(X \rightarrow aY\) und \(E \rightarrow \epsilon\)
                      haben.
                      Wir gehen vor wie in{" "}
                      <a href="./04-01-regular-grammars.html#theorem-regular-simplified">
                        <Paragraph>
                          Theorem
                          4.1.7
                        </Paragraph>
                      </a>
                      beschrieben.
                      Wir ersetzen \(S \rightarrow C\) also durch alle Produktionen der Form \(S \rightarrow \alpha\),
                      wobei
                      \(\alpha\) eine Wortform ist, die sich aus \(C\) ableiten lässt und nicht nur aus einem
                      einzelnen Nichtterminal
                      besteht; dies trifft glücklicherweise auf{" "}
                      <em>
                        alle
                      </em>
                      rechten Seiten der \(C\)-Produktionen
                      zu; gleiches gilt
                      für \(D\). Wir erhalten:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\rightarrow aE \ | \ aC \ | \ aC'\ | \ aS' \ | \ aD \ | \ a D' \\
                  C&amp;\rightarrow aE \ | \ aC \ | \ aC'\ | \ aS' \ \\
                  C'&amp;\rightarrow&#123;:&#125;C \\
                  D&amp;\rightarrow aE \ | \ aD \ | \ a D' \ | \ aS' \ \\
                  D'&amp;\rightarrow \text&#123;-&#125;D \\
                  S'&amp;\rightarrow&#123;.&#125;S \\
                  E&amp;\rightarrow \epsilon
                  \end&#123;align*&#125;
                </Paragraph>
                <h2>
                  <Paragraph>
                    4. Einen nichtdeterministischen endlichen Automaten bauen
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Dies sollte nun einfach sein. Wir erschaffen Zustände \(S, C, C', D, D', S', E\) und
                    übersetzen jeden Grammatik-Pfeil in einen Automaten-Pfeil.
                  </Paragraph>
                </Paragraph>
                <figure>
                  <img
                    style="height:17em"
                    src="../img/finite-state-automata/nfsm-example-03-big.svg"
                    loading="lazy" />
                </figure>
                <Paragraph>
                  <Paragraph>
                    Ich habe die Zeichen{" "}
                    <code>
                      .:-
                    </code>
                    rot unterlegt, weil man sie sonst kaum erkennen würde in
                    dem Automaten.
                  </Paragraph>
                </Paragraph>
                <h2>
                  <Paragraph>
                    5. Den nichtdeterministischen Automaten in einen deterministischen umwandeln
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Unser nichtdeterministischer endlicher Automat hat Zustandsmenge \(Q = \&#123;S, S', C, C', D, D',
                    E\&#125;\), also insgesamt
                    sieben Zustände. Wenn wir genau nach Buch vorgingen, müssten wir den endlichen Automaten auf der
                    Zustandsmenge \(2^Q\)
                    definieren, er hätte also \(2^7 = 128\) viele Zustände. Das wäre jetzt für einen Rechner kein
                    Problem, aber
                    in diesem vorlesungsskript doch etwas ungünstig.
                    Wir gehen{" "}
                    <em>
                      lazy
                    </em>
                    vor, erschaffen Zustände in \(2^Q\) also nur dann, wenn wir sie
                    brauchen.
                    Wir beginnen mit dem Zustand \(\&#123;S\&#125;\) und legen dann an jeden Zustand Kanten an, jeweils mit
                    \(a, :, -, . \) beschriftet, und erschaffen, falls nötig, dabei neue Zustände. In der folgenden
                    Animation
                    sehen Sie manchmal den mit einem Kreuz markierten Fehlerzustand (trap state). Die akzeptierenden
                    Zustände sind mit fettem Rand markiert.
                  </Paragraph>
                </Paragraph>
                <figure
                  id="figure-ColonDashPeriod"
                  class="centered-figure well">
                  <div>
                    <Paragraph>
                      <Paragraph>
                        Der nichtdeterministische Automat
                      </Paragraph>
                    </Paragraph>
                    <img
                      style="height:17em"
                      src="../img/finite-state-automata/nfsm-example-03-big.svg"
                      loading="lazy" />
                  </div>
                  <a
                    data-slide="prev"
                    href="#nfsm-to-fsm"
                    class="left carousel-control-prev-icon">
                    <div class="carousel-nav-icon">
                      <img
                        style="height:17em"
                        src="../img/finite-state-automata/nfsm-example-03-big.svg"
                        loading="lazy" />
                    </div>
                  </a>
                  <a
                    data-slide="next"
                    href="#nfsm-to-fsm"
                    class="right carousel-control-next-icon">
                    <div class="carousel-nav-icon">
                      <img
                        style="height:17em"
                        src="../img/finite-state-automata/nfsm-example-03-big.svg"
                        loading="lazy" />
                    </div>
                  </a>
                  <div
                    style="display:inline-block"
                    data-interval={false}
                    class="carousel"
                    id="nfsm-to-fsm">
                    <ol class="carousel-indicators">
                      <li
                        class="active"
                        data-slide-to={1}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={2}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={3}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={4}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={5}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={6}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={7}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={8}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={9}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={10}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={11}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={12}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={13}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={14}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={15}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={16}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={17}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={18}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={19}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={20}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={21}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={22}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={23}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={24}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={25}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={26}
                        data-target="#nfsm-to-fsm" />
                      <li
                        data-slide-to={27}
                        data-target="#nfsm-to-fsm" />
                    </ol>
                    <Paragraph>
                      <Paragraph>
                        Der deterministische Automat, Schritt für Schritt gebaut:{" "}
                      </Paragraph>
                    </Paragraph>
                    <div
                      style="display:inline-block"
                      class="carousel-inner">
                      <div class="item active">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                      <div class="item">
                        <img
                          style="height:17em"
                          src="../img/finite-state-automata/nfsm-example-03-big.svg"
                          loading="lazy" />
                      </div>
                    </div>
                  </div>
                </figure>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Dieser Automat hat deutlich weniger also 128 Zustände, nämlich mit nur sieben genau so
                      viele wie der nichtdeterministische (es ist Zufall, dass beide gleich viele Zustände haben;
                      messen
                      Sie dieser Tatsache keine Bedeutung bei). Wir könnten nun von diesem Automaten ausgehend
                      wiederum eine reguläre Grammtik bauen, die in diesem Falle sogar einfacher und klarer
                      wäre als die ursprüngliche. Wenn wir erweitert reguläre Grammatiken erlauben, so können
                      wir den deterministischen Automaten besonders konzise in eine Grammatik fassen:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  S&amp;\rightarrow aT \\
                  T&amp;\rightarrow&#123;.&#125;S \ | \ aT \ | \&#123;:&#125;aC \ | \ \text&#123;-&#125;a D \\
                  C&amp;\rightarrow aC \ | \&#123;:&#125;aC \ | \&#123;.&#125;S \\
                  D&amp;\rightarrow aD \ | \ \text&#123;-&#125;aD \ | \&#123;.&#125;S
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Die Zustände des deterministischen Automaten beschreiben im Prinzip das, was wir uns merken
                    müssen, wenn wir so einen String "parsen": Zustand \( \&#123;C',C,E,D,D',S'\&#125;\), der
                    in der Grammatik dann zum Nichtterminal \(T\) wird, bedeutet beispielsweise
                  </Paragraph>
                  <em>
                    das Label hat schon begonnen, wir wissen aber noch nicht, ob es eines mit
                    <code>
                      :
                    </code>
                    oder eines mit{" "}
                    <code>
                      -
                    </code>
                    ist.
                    Der Zustand \(\&#123;C',C,E,S'\&#125;\) bzw. das Nichtterminal \(C\) heißt dann
                    <em>
                      wir sind innerhalb eines Labels mit{" "}
                      <code>
                        :
                      </code>
                    </em>
                    .
                  </em>
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Übungsaufgabe
                      </span>
                      Erinnern Sie sich an{" "}
                      <a href="./04-03-nfsm#exercise-divisibility">
                        <Paragraph>
                          Aufgabe 4.3.1
                        </Paragraph>
                      </a>
                      . Hier
                      sehen
                      Sie einen nichtdeterministischen endlichen Automaten für die Sprache \(L_4 \cup L_6\), also
                      die Sprache aller Wörter \(1^n\) für ein \(n\), das durch 4 oder 6 teilbar ist.
                      Da unser Alphabet \(\Sigma = \&#123;1\&#125;\) eh nur aus einem Zeichen besteht, habe ich auf die
                      Beschriftung
                      der Kanten verzichtet.
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="height:17em"
                      src="../img/finite-state-automata/nfsm-example-03-big.svg"
                      loading="lazy" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Dieser Automat hat 11 Zustände. Sein Potenzmengenautomat hätte also \(2^&#123;11&#125; = 2048\)
                      Zustände.
                      Führen Sie die Konstruktion{" "}
                      <em>
                        lazy
                      </em>
                      durch, indem Sie vom Startzustand \(\&#123;S\&#125;\)
                      ausgehend die Folgezustände konstruieren. Wieviele Zustände bekommen Sie?
                    </Paragraph>
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