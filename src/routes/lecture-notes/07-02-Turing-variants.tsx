import Chapter from "~/components/Section";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter title="Turing variants" number={7.2} path="/lecture-notes45.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">Inhaltsverzeichnis</a>
          <a href="07-01-Turing-machines-examples">&lt;&lt; Kapitel 7.1</a>
        </div>
        <div id="link-to-overview" style="text-align: end">
          <a href="/">zur Kursübersicht</a>
          <a href="07-03-Turing-encoding">Kapitel 7.3 &gt;&gt;</a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    4.3 Variationen: Mehrband-Maschinen, nichtdeterministische
                    Maschinen
                  </span>
                </h1>
                <h2>
                  <Paragraph>Turingmaschinen mit mehreren Bändern</Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Im letzten Teilkapitel ist Ihnen bestimmt aufgefallen, dass
                    es auffallend lästig ist, selbst für einfache Sprachen wie
                    \begin&#123;align*&#125; \&#123;a^n b^n c^n \ | \ n \geq 0
                    \&#125; \end&#123;align*&#125; oder \begin&#123;align*&#125;
                    \&#123;wcw \ | \ w \in \&#123;a,b\&#125;^
                    <b>\&#125; \end&#123;align</b>
                    &#125; Turingmaschinen zu programmieren. Ein Grund dafür
                    ist, dass die Maschine nur an einer Position des Bandes
                    lesen und schreiben kann und man deswegen ständig zwischen
                    verschiedenen Stellen hin- und herfahren muss. Es bietet
                    sich daher an, an etwas allgemeineres Modell einer
                    Rechenmaschine zu definieren, das dann auch leichter zu
                    programmieren ist. Dies ist die
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>Mehrband-Turingmaschine</i> .
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Eine Mehrband-Turingmaschine ist wie eine Turingmaschine,
                    nur dass sie statt einem \(k\) viele Bänder und somit auch
                    \(k\) viele Schreib-Lese-Köpfe hat. Die
                    Zustandsübergangsfunktion \(\delta\) hat somit auch die
                    Signatur \begin&#123;align*&#125; \delta : Q \times \Gamma^k
                    \rightarrow Q \times \Gamma^k \times \lsr^k
                    \end&#123;align*&#125;
                  </Paragraph>
                </Paragraph>
                <figure class="centered-figure well container">
                  <a
                    data-slide="prev"
                    href="#tm-multitape"
                    class="left carousel-control-prev-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <a
                    data-slide="next"
                    href="#tm-multitape"
                    class="right carousel-control-next-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-next-icon.svg" />
                    </div>
                  </a>
                  <div
                    style="display: inline-block"
                    data-interval={false}
                    class="carousel"
                    id="tm-multitape">
                    <ol class="carousel-indicators">
                      <li
                        class="active"
                        data-slide-to={1}
                        data-target="#tm-multitape"
                      />
                      <li data-slide-to={2} data-target="#tm-multitape" />
                      <li data-slide-to={3} data-target="#tm-multitape" />
                      <li data-slide-to={4} data-target="#tm-multitape" />
                      <li data-slide-to={5} data-target="#tm-multitape" />
                    </ol>
                    <div style="display: inline-block" class="carousel-inner">
                      <div class="item active">
                        <img
                          style="height: 21em"
                          src="../img/turing-machines/example-3-multitape/01.svg"
                        />
                      </div>
                      <div class="item">
                        <img
                          style="height: 21em"
                          src="../img/turing-machines/example-3-multitape/02.svg"
                        />
                      </div>
                      <div class="item">
                        <img
                          style="height: 21em"
                          src="../img/turing-machines/example-3-multitape/03.svg"
                        />
                      </div>
                      <div class="item">
                        <img
                          style="height: 21em"
                          src="../img/turing-machines/example-3-multitape/04.svg"
                        />
                      </div>
                      <div class="item">
                        <img
                          style="height: 21em"
                          src="../img/turing-machines/example-3-multitape/05.svg"
                        />
                      </div>
                    </div>
                  </div>
                </figure>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">Beispiel</span>
                    Entwerfen wir nun eine Turingmaschine für die
                    Palindromsprache \begin&#123;align*&#125; L := \&#123; w \in
                    \&#123;a,b\&#125;^* \ | \ w = w^R \&#125; \ ,
                    \end&#123;align*&#125; In
                  </Paragraph>
                  <Paragraph>
                    <a href="./04-01-Turing-machines-examples.html#example-palindromes">
                      Beispiel 4.2.2
                    </a>
                    haben wir dafür eine Einband-Turingmaschine geschrieben.
                    Deren Nachteil war, dass sie ständig zwischen dem linken und
                    rechten Rand hin-und-herlaufen musste.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Bauen wir nun eine Mehrband-Turingmaschine. Diese arbeitet
                      in drei einfachen und kurzen Phasen:
                    </Paragraph>
                  </Paragraph>
                  <ol>
                    <li>
                      <tt>copy</tt>: kopiert das \(w\) auf das zweite Band
                    </li>
                    <li>
                      <tt>rewind</tt>: bewegt den Kopf des ersten Bandes zurück
                      zum Anfang
                    </li>
                    <li>
                      <tt>compare</tt>: schaut, ob erstes und zweites Band den
                      gleichen Inhalt haben.
                    </li>
                  </ol>
                  <Paragraph>Den "Quelltext" für</Paragraph>
                  <Paragraph>
                    <a href="https://turingmachinesimulator.com">
                      turingmachinesimulator.com
                    </a>
                    finden Sie in
                  </Paragraph>
                  <Paragraph>
                    <a href="../code/turing machines/palindrome-multiple-tapes.txt">
                      palindrome-multiple-tapes.txt
                    </a>
                    .
                  </Paragraph>
                </div>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">Übungsaufgabe</span>
                    Schreiben Sie eine Mehrband-Turingmaschine, die Binärzahlen
                    addiert. Wenn also beispielsweise <tt>1010+110</tt>
                    auf dem ersten Band (Eingabeband) steht, dann soll nach
                    Abschluss der Berechnung das Ergebnis auf dem Ausgabeband
                    stehen, also <tt>10000</tt>.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      {" "}
                      <b>Tip.</b> Verwenden Sie drei Bänder. Sei der Bandinhalt
                      \(x+y\). In einer ersten Phase kopieren Sie \(x\) auf das
                      zweite Band. In der nächsten Phase gehen Sie ans Ende von
                      \(y\). Dann addieren Sie nach den Regeln der
                      Binäraddition. Ob "1 gemerkt" gilt oder nicht, können Sie
                      in Ihrem internen Zustand speichern. Eine Regel wäre also
                      zum Beispiel:
                    </Paragraph>
                  </Paragraph>
                  <pre>
                    <Paragraph>
                      carry1, 0, 0, _ carry0, 0, 0, 1,&lt;,&lt;,&lt;{" "}
                    </Paragraph>
                    <Paragraph>
                      carry1, 0, 1, _ carry1, 0, 1, 0,&lt;,&lt;,&lt;{" "}
                    </Paragraph>
                  </pre>
                  <Paragraph>
                    <Paragraph>
                      Ein lästiges Detail ist, dass \(y\) kürzer sein könnte als
                      \(x\) und Sie daher in das <tt>+</tt>
                      reinlaufen könnten; wenn \(x\) kürzer ist als \(y\), dann
                      könnten Sie auf dem zweiten Band in ein \(\square\)
                      reinlaufen. Wie ist dieser Fall zu behandeln?
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    {" "}
                    <b>Berechnete Sprache, berechnete Funktion.</b>{" "}
                  </Paragraph>
                  <Paragraph>
                    Die Begriffe des Akzpetierens und Ablehnens definieren wir
                    genau wie für die Einband-Turingmaschinen. Eine formale
                    Definition der Konfiguration ersparen wir uns jedoch. Wenn
                    unsere Mehrband-Turingmaschine nicht nur akzeptieren /
                    ablehnen, sondern etwas
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>berechnen</i> soll, also eine Funktion
                    \begin&#123;align*&#125; f : \Sigma
                    <i>1 \rightarrow \Sigma</i>2 \ , \end&#123;align*&#125; dann
                    bauen wir sie per Konvention so, dass sie ein designiertes
                    Ausgabeband hat, auf dem nach Abschluss der Berechnung das
                    Ausgabewort \(f(x)\) steht.
                  </Paragraph>
                </Paragraph>
                <h2>
                  <Paragraph>
                    Einband-Maschinen können Mehrband-Maschinen simulieren
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Es stellt sich heraus, dass mehrere Bänder zwar ein
                    praktisches Feature sind, aber nicht wirklich mehr
                    Ausdruckskraft verlangen; was eine Mehrband-Turingmaschine
                    schafft, schafft eine Einband-Turingmaschine auch.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">Theorem</span>{" "}
                    <b>
                      (Einband-Turingmaschine simuliert Mehrband-Turingmaschine)
                    </b>{" "}
                    . Sei \(M\) eine Turingmaschine mit \(k\) Bändern, wovon
                    eines ein designiertes Ausgabeband ist. Dann gibt es eine
                    Einband-Turingmaschine \(M'\) mit folgenden Eigenschaften:
                  </Paragraph>
                  <ol>
                    <li>
                      \(M'(x)\) akzeptiert/lehnt ab/terminiert nicht genau dann,
                      wenn \(M(x)\) akzeptiert/ablehnt/nicht terminiert.
                    </li>
                    <li>
                      Wenn \(M(x)\) akzeptiert und \(y\) der Bandinhalt des
                      Ausgabebandes ist, dann akzeptiert \(M'(x)\) auch, und der
                      Bandinhalt (des einzigen Bandes, es gibt ja nur eins) ist
                      \(y\).
                    </li>
                  </ol>
                  <Paragraph>
                    <Paragraph>
                      In anderen Worten: \(M'\) simuliert \(M\).
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}
                    <b>Beweis.</b>{" "}
                  </Paragraph>
                  <Paragraph>
                    Der erste Trick ist, dass wir die \(k\) Bänder von \(M\)
                    "zusammenkleben" in ein neues Band, in welcher jede Zelle
                    \(k\) Symbole enthalten kann:
                  </Paragraph>
                  <figure>
                    <img
                      style="height: 12em"
                      src="../img/turing-machines/example-3-multitape/multitape-to-onetape.svg"
                      loading="lazy"
                    />
                  </figure>
                  <Paragraph>
                    Das Problem sind nun die Köpfe. Wenn wir diese Idee naiv
                    umsetzen würden, hätte unsere Maschine \(M'\) zwar ein Band,
                    dafür drei Köpfe auf diesem:
                  </Paragraph>
                  <figure>
                    <img
                      style="height: 15em"
                      src="../img/turing-machines/example-3-multitape/multitape-to-onetape-three-heads.svg"
                      loading="lazy"
                    />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Wir lösen dies, indem wir die Kopfpositionen in das Band
                      selbst reinschreiben:
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="height: 12em"
                      src="../img/turing-machines/example-3-multitape/multitape-to-onetape-one-head.svg"
                      loading="lazy"
                    />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Das neue Bandalphabet ist also nicht \(\Gamma^k\) sondern
                      \((\Gamma \times \&#123;\texttt&#123;head&#125;,
                      \texttt&#123;nohead&#125;\&#125; )^k\). Wo steht nun aber
                      denn der Kopf von \(M'\)? Jetzt kommt der schwierige Teil:
                      um
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      <i>einen</i> Schritt von \(M\) zu simulieren, muss \(M'\)
                      von ganz links nach ganz rechts laufen und alle
                      Informationen über die \(k\) \(M\)-Köpfe sammeln. Dann von
                      rechts nach links gehen und die ausführen.
                    </Paragraph>
                    <figure class="centered-figure well container">
                      <a
                        data-slide="prev"
                        href="#one-simulates-multi"
                        class="left carousel-control-prev-icon">
                        <div class="carousel-nav-icon">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                      </a>
                      <a
                        data-slide="next"
                        href="#one-simulates-multi"
                        class="right carousel-control-next-icon">
                        <div class="carousel-nav-icon">
                          <img src="../img/carousel-next-icon.svg" />
                        </div>
                      </a>
                      <div
                        style="display: inline-block"
                        data-interval={false}
                        class="carousel"
                        id="one-simulates-multi">
                        <ol class="carousel-indicators">
                          <li
                            class="active"
                            data-slide-to={1}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={2}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={3}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={4}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={5}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={6}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={7}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={8}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={9}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={10}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={11}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={12}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={13}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={14}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={15}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={16}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={17}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={18}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={19}
                            data-target="#one-simulates-multi"
                          />
                          <li
                            data-slide-to={20}
                            data-target="#one-simulates-multi"
                          />
                        </ol>
                        <div
                          style="display: inline-block"
                          class="carousel-inner">
                          <div class="item active">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/01-01.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/02-01.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/02-02.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/02-03.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/02-04.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/02-05.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/02-06.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/02-07.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/02-08.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/03-01.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/03-02.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/04-01.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/04-02.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/04-03.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/04-04.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/05-01.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/05-02.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/06-01.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/07-01.svg"
                            />
                          </div>
                          <div class="item">
                            <img
                              style="height: 19em"
                              src="../img/turing-machines/one-simulates-multi/08-01.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <Paragraph>
                      Wir müssen also die Zustandsmenge deutlich erweitern; so
                      muss sie speichern können, ob wir ein Symbol bereits
                      gelesen haben; ob wir ein Symbol bereits geschrieben haben
                      und ob wir den Kopf bereits entsprechend verschoben haben.
                      Für eine Rechtsverschiebung müssen wir uns zusätzlich noch
                      merken, dass wir sie gerade durchführen und für welches
                      Band. All dies ist viel, aber immer noch endlich. Wir
                      können alles in einer endlichen Zustandsmenge \(Q'\)
                      speichern.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wenn der \(M\)-Zustand (der natürlich auch im
                      \(M'\)-Zustand gespeichert ist),
                    </Paragraph>
                    <Paragraph>
                      <tt>accept</tt>
                      erreicht hat, dann macht \(M'\) noch eine Aufräumphase, in
                      welcher sie alle Symbole, die nicht zum Ausgabeband
                      gehören, durch \(\square\) ersetzt. Dann wechselt sie in
                      ihren eigenen akzeptierenden Zustand <tt>accept'</tt>.
                    </Paragraph>
                  </Paragraph>
                  <span class="qed">\(\square\)</span>
                </div>
                <Paragraph>
                  <h2>
                    <Paragraph>Einfügen versus Überschreiben</Paragraph>
                  </h2>
                  Folgende Aufgabe ist auf einer Einband-Turingmaschine sehr
                  leicht: gegeben ein Eingabewort \(w \in \&#123;a,b\&#125;^*\),
                  ersetze jedes \(b\) durch ein \(c\). In der Syntax von
                </Paragraph>
                <Paragraph>
                  <a href="https://turingmachinesimulator.com">
                    turingmachinesimulator.com
                  </a>
                  :
                </Paragraph>
                <pre class="listing container">
                  <code>
                    name: replace
                    <i>b</i>
                    by_c
                  </code>
                  <code>init: init </code>
                  <code>accept: accept </code>
                  <code />
                  <code>init, a</code>
                  <code>init, a, &gt; </code>
                  <code />
                  <code>init, b</code>
                  <code>init, c, &gt; </code>
                  <code />
                  <code>init, _ </code>
                  <code>accept, _, &gt; </code>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Ungleich schwieriger ist die Aufgabe, jedes \(b\) durch ein
                    \(bc\) zu ersetzen, weil wir hier etwas
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>einfügen</i> wollen. Auf einer Einband-Turingmaschine
                    müssen wir für jedes \(b\) alles, was rechts davon kommt, um
                    eine Zelle nach rechts verschieben. Meinen Quelltext finden
                    sie in
                  </Paragraph>
                  <Paragraph>
                    <a href="../code/turing machines/replace-b-by-bc.txt">
                      replace-b-by-bc.txt
                    </a>
                    Können wir unserer Turingmaschine die Funktionalität geben,
                    eine Zelle <i>einzufügen</i> und alles von Kopf bis zum
                    linken Ende um eins nach links zu verschieben bzw. das
                    analoge, aber nach rechts? Wir sind freie Menschen, wir
                    können definieren, was wir wollen, müssen uns aber zwei
                    Fragen stellen:
                  </Paragraph>
                </Paragraph>
                <ol>
                  <li>
                    Ist das immer noch ein plausibles Modell einer
                    Rechenmaschine? Ist also unser neue Funktionalität
                    physikalisch realisierbar?
                  </li>
                  <li>
                    Verleiht es wirklich neue Funktionalität, oder ist es nur
                    Syntaxzucker?
                  </li>
                </ol>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      In diesem Fall ahnen Sie es wohl bereits: es ist nur
                      Syntaxzucker. Die Funktionalität des
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      <i>Einfügens/Verschiebens</i> können wir leicht mit zwei
                      Bändern simulieren. Wir halten uns einfach an die
                      Konvention, dass auf Band 1 der Kopf immer auf dem
                      linkesten Zeichen steht und auf Band 2 der Kopf jenseits
                      des rechtesten. \begin&#123;align*&#125; \delta(q,x) =
                      (r,y,\texttt&#123;R&#125;) \end&#123;align*&#125; wird
                      dann
                    </Paragraph>
                  </Paragraph>
                  <pre class="container">
                    <Paragraph>q, x, _ r, _, x, &gt;, &gt; </Paragraph>
                  </pre>
                  Eine Linksbewegung ist etwas schwieriger zu implementieren.
                  Aus \(\delta(q,x) = (r,y,\texttt&#123;L&#125;)\) wird
                </Paragraph>
                <pre class="container">
                  <Paragraph>q, x, _ r', x, _, -, - </Paragraph>
                  <Paragraph>
                    r', _, c r, c, _{" "}
                    <span class="comment">// für jedes Zeichen c</span>
                  </Paragraph>
                </pre>
                <Paragraph>
                  <Paragraph>Nehmen Sie die Beispielmaschine</Paragraph>
                  <Paragraph>
                    <a href="../code/turing machines/go-left-go-right.txt">
                      go-left-go-right.txt
                    </a>
                    , geben Sie sie auf
                  </Paragraph>
                  <Paragraph>
                    <a href="https://turingmachinesimulator.com">
                      turingmachinesimulator.com
                    </a>
                    ein und starten Sie sie mit dem Eingabewort \(xxx\).
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Ein neues Zeichen links vom Kopf einfügen ist nun einfach:
                    aus \begin&#123;align*&#125; \delta(q,x) =
                    \textnormal&#123;Zustand $r$, schreibe $y$ und füge $z$
                    links vom Kopf ein&#125; \end&#123;align*&#125; wird
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <Paragraph>q, x, _ r'', _, z, &gt;, &gt; </Paragraph>
                  <Paragraph>
                    r'', c, _ r, c, y, -, &gt;{" "}
                    <span class="comment">// für jedes Zeichen c </span>
                  </Paragraph>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Sie können sich meine Implementierung in
                  </Paragraph>
                  <Paragraph>
                    <a href="../code/turing machines/insert-z-before-y.txt">
                      insert-z-before-y.txt
                    </a>
                    ansehen. Geben Sie beispielsweise <tt>xxyxyyxx</tt>
                    als Eingabewort ein.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Wir können von nun an also so tun, als hätten unsere
                    Turingmaschinen die Möglichkeit, zusätzliche Zellen
                    einzufügen. In einer konkreten Implementierung müssten wir
                    dafür allerdings jedes Band durch zwei Bänder ersetzen.
                    Alternativ können Sie sich eine Turingmaschine vorstellen,
                    die statt \(k\) Bändern einfach \(2k\) Stapel hat.
                  </Paragraph>
                </Paragraph>
                <h2>
                  <Paragraph>Die Dictionary-Maschine</Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Ein fundamentale Datenstruktur beim Programmieren sind
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>Dictionaries</i> , die Key-Value-Paare speichern:
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <code class="terminalPrompt">python -i</code>
                  <code class="pythonPrompt">
                    dict =&#123;"karl" : 42, "eva" : 35, "werner" : 20&#125;
                  </code>
                  <code class="pythonPrompt">dict["eva"]</code>
                  <code class="terminalOutput">35</code>
                  <code class="pythonPrompt" />
                </pre>
                <Paragraph>
                  <Paragraph>
                    Im Zweifelsfall sind diese als Hashmaps oder
                    Rot-Schwarz-Bäume oder B-Bäume implementiert. Hier
                    interessiert uns nicht so sehr die Laufzeit, sondern einfach
                    die Funktionalität. Können wir für Dictionaries eine
                    Turingmaschine implementieren?
                  </Paragraph>
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">Übungsaufgabe</span>
                    Schreiben Sie auf
                  </Paragraph>
                  <Paragraph>
                    <a href="https://turingmachinesimulator.com">
                      turingmachinesimulator.com
                    </a>
                    eine Mehrband-Turingmaschine, die Inputs der Form
                    \begin&#123;align*&#125; k [ k<i>1 : v</i>
                    1; k<i>2 : v</i>
                    2; \dots ; k<i>n : v</i>n ] \end&#123;align*&#125;
                    entgegennimmt, für \(k, k_1, \dots, k_n, v_1, \dots, v_n \in
                    \&#123;0,1\&#125;^n \), also \(\Sigma = \&#123;0,1,
                    \texttt&#123;:&#125;, \texttt&#123;;&#125;,
                    \texttt&#123;[&#125;, \texttt&#123;]&#125;\&#125;\) und
                    akzeptiert, wenn es ein \(i\) gibt mit \(k = k_i\) und in
                    diesem Falle \(v_i\) auf das Ausgabeband schreibt.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      {" "}
                      <b>Tip:</b> Kopieren Sie erst einmal den gesuchten
                      Schlüssel \(k\) auf das zweite Band. Dann können Sie
                      bequem den Schlüssel \(k_i\) auf dem ersten Band mit dem
                      auf dem zweiten Band vergleichen. Wenn Sie es sich einfach
                      machen wollen, nehmen Sie einfach mal an, dass alle
                      Schlüssel gleiche Länge haben. Das erspart Ihnen gefühlt
                      20 Zeilen im Programmcode der Turingmaschine.
                    </Paragraph>
                  </Paragraph>
                </div>
                <h2>
                  <Paragraph>Nichtdeterministische Turingmaschinen</Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Bereits im Kapitel über reguläre Sprachen haben wir gesehen,
                    dass Nichtdeterminismus hilfreich ist, wenn wir Dinge
                    beschreiben wollen, auch wenn es kein realistisches Modell
                    für Rechenmaschinen darstellt. Die Sprache aller Wörter über
                    $\&#123;a,b\&#125;$, die das Teilwort \(aababaa\) enthalten,
                    kann man beispielsweise leicht mit dem folgenden Automaten
                    beschreiben:
                  </Paragraph>
                  <figure>
                    <img
                      style="height: 6em"
                      src="../img/turing-machines/nondeterminism/aababaa.svg"
                      loading="lazy"
                    />
                  </figure>
                  <Paragraph>
                    Es ist klar, was dieser Automat erlaubt. Einen
                    deterministischen Automaten für die gleiche Sprache zu
                    entwerfen (ohne systematisch über den nichtdeterministischen
                    zu gehen) wird schnell chaotisch, und Sie werden sich in den
                    vielen Fallunterscheidungen verlieren.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Andererseits haben wir für endliche Automaten gezeigt, dass
                    die deterministischen und nichtdeterministischen Varianten
                    tatsächlich gleichmächtig sind (Potenzmengenkonstruktion).
                    Für die Kellerautomaten, die für kontextfreie Sprachen
                    relevant sind, galt das nicht (einen Beweis haben wir
                    allerdings in der Vorlesung nicht durchgenommen). Wie sieht
                    es nun für Turingmaschinen aus?
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Um nichtdeterministische Turingmaschinen zu definieren,
                    müssen wir die Zustandsübergangsfunktion \(\delta\) zu einer
                    Zustandsübergangsrelation machen. Statt \(\delta: Q \times
                    \Gamma \rightarrow Q \times \Gamma \times \lsr\) also nun
                    \begin&#123;align*&#125; \delta \subseteq (Q \times \Gamma)
                    \times (Q \times \Gamma \times \lsr) \ .
                    \end&#123;align*&#125; Und statt \(\delta(q,x) =
                    (r,y,\texttt&#123;D&#125;)\) schreiben wir nun \((q,x)
                    \step&#123;\delta&#125; (r,y,\texttt&#123;D&#125;)\). Wir
                    beschränken uns zunächst auf Einband-Turingmaschinen. Für
                    Konfigurationen \(C \in \Gamma^* \times Q \times\Gamma^*\)
                    haben wir keine erweiterte Zustandsübergangsfunktion
                    \(\delta(C) = C'\), wo \(C'\) die Folgekonfiguration ist,
                    sondern eine erweiterte Zustandsübergangsrelation:
                    \begin&#123;align*&#125; C \Step&#123;&#125; C'
                    \end&#123;align*&#125; Wobei nun dank Nichtdeterminismus
                    mehrere Folgekonfigurationen \(C'\) geben kann (oder eben
                    mal auch gar keine). Wir schreiben \begin&#123;align*&#125;
                    C \Step&#123;&#125;^* C' \end&#123;align*&#125; wenn wir von
                    \(C\) in einer Folge von Schritten nach \(C'\) kommen
                    können, also \begin&#123;align*&#125; C = C
                    <i>0 \Step&#123;&#125; C</i>1 \Step&#123;&#125; C_2
                    \Step&#123;&#125; \dots \Step&#123;&#125; C'
                    \end&#123;align*&#125; Wir sagen auch:
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>
                      Die Konfiguration \(C'\) ist von \(C\) aus erreichbar
                    </i>{" "}
                    .
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Für ein Eingabewort \(x\) sie \(C_x :=
                    \texttt&#123;start&#125; x\) die Startkonfiguration. Eine
                    nichtdeterministische Turingmaschine
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>akzeptiert</i> \(x\), wenn es eine akzeptierende
                    Endkonfiguration \(C_&#123;\rm accept&#125;\) gibt mit
                    \begin&#123;align*&#125; C<i>x \Step&#123;&#125;^* C</i>
                    &#123;\rm accept&#125; \end&#123;align*&#125; wenn es also
                    (mindestens) eine akzeptierende Konfiguration gibt, die von
                    \(C_x\) aus erreichbar ist. Dabei kann es
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>mehrere</i> erreichbare akzeptierende Konfigurationen
                    geben, Es kann sogar eine ablehnende Konfiguration \(C_x
                    \Step&#123;&#125;^* C_&#123;\rm reject&#125;\) geben. Spielt
                    keine Rolle: solange es einen Weg \(C_x \Step&#123;&#125;^*
                    C_&#123;\rm accept&#125;\) gibt, sagen wir, dass \(M\) das
                    Eingabewort akzeptiert.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">Definition</span>{" "}
                    <b>
                      (Akzeptieren und Entscheiden bei nichtdeterministischen
                      Turingmaschinen).
                    </b>{" "}
                  </Paragraph>
                  <Paragraph>
                    Eine nichtdeterministische Turingmaschine \(M\) akzeptiert
                    die Sprache \(L\) wenn \begin&#123;align*&#125; x \in L
                    \Longleftrightarrow M \textnormal&#123; akzeptiert&#125; x
                    \end&#123;align*&#125; Für jedes \(x \not \in L\) gibt es
                    also keine akzeptierende Konfiguration \(C\) mit \(C_x
                    \Rightarrow C\).
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Die Turingmaschine \(M\) <i>entscheidet</i> die Sprache
                      \(L\), wenn sie sie akzeptiert und es keine unendlich
                      langen Ketten \begin&#123;align*&#125; C
                      <i>x \Step&#123;&#125; C</i>1 \Step&#123;&#125; C_2
                      \Step&#123;&#125; \dots \end&#123;align*&#125; gibt.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="alert-warning">
                  <Paragraph>
                    Oft wird händeringend versucht, zu erklären, was denn eine
                    nichtdeterministische Turingmaschine
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>tut</i> . Da lesen Sie dann beispielsweise, dass die
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>alle Möglichkeiten gleichzeitig ausprobiert</i> oder den
                    richtigen Pfad von einem <i>Engel</i> gesagt bekommt oder
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>errät</i> . Ich stelle mir lieber vor, dass eine
                    nichtdeterministische Turingmaschine gar nichts "tut"
                    sondern
                  </Paragraph>
                  <Paragraph>
                    {" "}
                    <i>Spielregeln</i> definiert, wie man "ziehen" kann. Man
                    gewinnt, wenn man in einer akzeptierenden Konfiguration
                    landet.
                  </Paragraph>
                </div>
                <Paragraph />
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">Beispiel</span>
                    Beim Teilsummenproblem haben wir eine Liste von Waren (alles
                    Unikate) mit Preisen \(p_1, p_2, \dots, p_n\) und ein
                    Guthaben \(g\) gegeben und wollen wissen, ob wir unser
                    Guthaben exakt ausgeben können. Ob es also eine Teilmenge
                    \(I \subseteq [n]\) von Waren gibt, die genau \(g\) kostet:
                    \begin&#123;align*&#125; \textnormal&#123;gibt es ein&#125;
                    I \subseteq [n] \textnormal&#123; mit&#125; \sum
                    <i>&#123;i \in I&#125; p</i>i = g \textnormal&#123;?&#125;
                    \end&#123;align*&#125; Um das als formale Sprachen bzw.
                    Entscheidungsproblem zu formalisieren, müssen wir uns eine
                    Codierung überlegen. Preise sind ganze Zahlen (in Cent, wenn
                    Sie so wollen), in Dezimalschreibweise dargstellt. Waren
                    sind mit einem \(\#\) separiert. Nach den Waren kommt ein
                    \(:\) und dann das Guthaben. Wenn also beispielsweise die
                    Waren die Preise 65, 8, 22, 19, 7, 58, 30, 1, 13, 38 haben
                    und unser Guthaben 194 ist, dann würden wir das als Wort
                    \begin&#123;align*&#125;
                    \#65\#8\#22\#19\#7\#58\#30\#1\#13\#38:194
                    \end&#123;align*&#125; über dem Alphabet \(\Sigma =
                    \&#123;0,1,2,3,4,5,6,7,8,9,\#,:\&#125;\) codieren. Das Wort
                    ist in unserer Sprache \(L\) enthalten, wenn es nun eben
                    eine Teilmenge gibt, die sich genau zu 194 aufsummiert.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Entwerfen wir nun eine nichtdeterministische
                      Turingmaschine \(M\) für diese Sprache. \(M\) geht von
                      links nach rechts alle Waren durch. Jedes Mal, wenn ein
                      Preis beginnt, haben wir die Möglichkeit, diesen Preis auf
                      das zweite Band zu kopieren (die Ware zu kaufen) oder eben
                      nicht: also \begin&#123;align*&#125;
                      (\texttt&#123;choose&#125;, \#, \square) &amp;\rightarrow
                      (\texttt&#123;buy&#125;, \#, +, \texttt&#123;R&#125;,
                      \texttt&#123;R&#125;)\\ (\texttt&#123;choose&#125;, \#,
                      \square)&amp;\rightarrow (\texttt&#123;skip&#125;, \#,
                      \texttt&#123;R&#125;, \texttt&#123;S&#125;) \\ \\
                      (\texttt&#123;buy&#125;, c, \square)& \rightarrow
                      (\texttt&#123;buy&#125;, c, c, \texttt&#123;R&#125;,
                      \texttt&#123;R&#125;) \tag&#123;für jedes \(c \in
                      \&#123;0,\dots,9\&#125;\)&#125;\\ (\texttt&#123;buy&#125;,
                      \#, \square)& \rightarrow (\texttt&#123;choose&#125;, \#,
                      \square, \texttt&#123;S&#125;, \texttt&#123;S&#125;) \\ \\
                      (\texttt&#123;skip&#125;, c, \square)&amp;\rightarrow
                      (\texttt&#123;skip&#125;, c, \square,
                      \texttt&#123;R&#125;, \texttt&#123;S&#125;) \tag&#123;für
                      jedes \(c \in \&#123;0,\dots,9\&#125;\)&#125;\\
                      (\texttt&#123;skip&#125;, \#, \square)&amp;\rightarrow
                      (\texttt&#123;choose&#125;, \#, \square,
                      \texttt&#123;S&#125;, \texttt&#123;S&#125;) \\ \\
                      (\texttt&#123;buy&#125;, :, \square)&amp;\rightarrow
                      (\texttt&#123;add&#125;, :, \square, \texttt&#123;S&#125;,
                      \texttt&#123;S&#125;) \\ (\texttt&#123;skip&#125;, :,
                      \square)&amp;\rightarrow (\texttt&#123;add&#125;, :,
                      \square, \texttt&#123;S&#125;, \texttt&#123;S&#125;) \\
                      \end&#123;align*&#125; Dies erlaubt uns zum Beispiel, bei
                      Eingabe \(\#65\#8\#22\#19\#7\#58\#30\#1\#13\#38:194\) eine
                      Konfiguration zu erreichen, wo auf dem ersten Band der
                      Kopf auf dem : steht und auf dem zweiten Band
                      \begin&#123;align*&#125; + 6 + 19 + 58 + 1 + 13
                      \end&#123;align*&#125; aber eben auch jede beliebige
                      andere Summe. Im Zustand $\texttt&#123;add&#125;$
                      aufgerufen, muss nun die Turingmaschine alle diese Zahlen
                      auf dem zweiten Band addieren (lästig, geht aber
                      irgendwie) und dann in einer dritten Phase mit der Zahl
                      rechts vom : vergleichen. Stimmen sie überein, akzeptiert
                      die Turingmaschine, stimmt sie nicht über ein, lehnt sie
                      ab. Da \(6 + 19 + 58 + 1 + 13 = 97\), haben wir eine
                      ablehnende Konfiguration erreicht. Es sind aber viele
                      Endkonfigurationen erreichbar. Wir können zum Beispiel in
                      Phase 1 auch \begin&#123;align*&#125; + 65 + 22 + 19+ 7+
                      30+ 13+38 \end&#123;align*&#125; auf das untere Band
                      kopieren. Da dies tatsächlich 194 ergibt, akzeptiert die
                      Turingmaschine. Wir sehen also: \begin&#123;align*&#125;
                      M(\#65\#8\#22\#19\#7\#58\#30\#1\#13\#38:194) =
                      \texttt&#123;accept&#125; \ , \end&#123;align*&#125; weil
                      es eben eine vom Start aus erreichbare akzeptierende
                      Konfiguration gibt.
                    </Paragraph>
                  </Paragraph>
                </div>
                <h2>
                  <Paragraph>
                    Deterministische Turingmaschinen simulieren
                    nichtdeterministische
                  </Paragraph>
                </h2>
                <Paragraph>
                  <Paragraph>
                    Sind nun nichtdeterministische Turingmaschinen inhärent
                    mächtiger? Können Sie das Teilsummenproblem auch mit einer
                    deterministischen lösen? Klar! Hier ist mein Code in Elm,
                    einer funktionalen Programmiersprache: er probiert alle
                    Möglichkeiten durch.
                  </Paragraph>
                </Paragraph>
                <pre class="listing container">
                  <code>module SubsetSum exposing (..)</code>
                  <code />
                  <code />
                  <code>subsetSum : List Int -&gt; Int -&gt; Bool</code>
                  <code>subsetSum prices amount =</code>
                  <code>case ( prices, amount ) of</code>
                  <code>( [], 0 ) -&gt;</code>
                  <code>True</code>
                  <code />
                  <code>( x :: rest, _ ) -&gt;</code>
                  <code>
                    subsetSum rest amount || subsetSum rest (amount - x)
                  </code>
                  <code />
                  <code>( [], _ ) -&gt;</code>
                  <code>False</code>
                </pre>
                <Paragraph>
                  <Paragraph>
                    Auf einer deterministischen Turingmaschine wäre das deutlich
                    anstrengender, aber irgendwie auch möglich. Können wir jede
                    nichtdeterministische Turingmaschine deterministisch
                    simulieren, indem wir "alles ausprobieren"? Ja, in der Tat!
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">Theorem</span>{" "}
                    <b>
                      (Nichtdeterministische Turingmaschinen
                      deterministischsimulieren)
                    </b>{" "}
                  </Paragraph>
                  <Paragraph>
                    Sei \(M\) eine nichtdeterministische Turingmaschine. Dann
                    gibt es eine deterministische Maschine \(M'\) mit \(L(M) =
                    L(M')\), d.h. \(M'\) akzeptiert \(x\) genau dann, wenn \(M\)
                    es akzeptiert.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Zusätzlich gilt: wenn \(M\) die Sprache nicht nur
                      akzpetiert, sondern entscheidet, dann entscheidet auch
                      \(M'\) die Sprache (terminiert also auf jedem
                      Eingabewort).
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}
                    <b>Beweis.</b>{" "}
                  </Paragraph>
                  <Paragraph>
                    Als erstes führen wir eine kosmetische Änderung unserer
                    nichtdeterministischen Maschine durch: wir wollen, dass es
                    für jedes \((q,c)\) genau zwei Möglichkeiten gibt, also
                    \begin&#123;align*&#125; (q,c)& \rightarrow (q
                    <i>1, c</i>
                    1, D<i>1) \\ (q,c)&amp;\rightarrow (q</i>
                    2, c<i>2, D</i>
                    2) \ , \end&#123;align*&#125; außer wenn \(q \in
                    \&#123;\texttt&#123;reject&#125;,\texttt&#123;accept&#125;\&#125;\);
                    dann gibt es gar keine Möglichkeit. Dies ist einfach: sollte
                    es mehr als zwei Möglichkeiten geben, so führen wir
                    Zwischenzustände ein:
                  </Paragraph>
                  <figure>
                    <img
                      style="height: 10em"
                      src="../img/turing-machines/nondeterminism/three-to-two.svg"
                      loading="lazy"
                    />
                  </figure>
                  <Paragraph>
                    Auf der Menge der Konfigurationen schaut das dann noch
                    intuitiver aus:
                  </Paragraph>
                  <figure>
                    <img
                      style="height: 10em"
                      src="../img/turing-machines/nondeterminism/three-to-two-2.svg"
                      loading="lazy"
                    />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Sollte ein Paar \((q,c)\) weniger als zwei
                      Folgemöglichkeiten geben, so erfinden wir einfach neue,
                      die jedoch direkt nach
                    </Paragraph>
                    <Paragraph>
                      <tt>reject</tt>
                      führen. Es sollte klar sein, dass diese Änderungen rein
                      kosmetisch sind und nichts an der Funktionsweise von \(M\)
                      ändern.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Nun bauen wir \(M\) um und geben ihr ein zweites Band. Auf
                      diesem Band soll ein Wort in \(\&#123;0,1\&#125;^*\)
                      stehen. Wir machen \(M\) deterministisch mit der folgenden
                      Regel: wenn Du im Zustand \(q\) bist und auf dem ersten
                      Band ein \(c\) hast und auf dem zweiten Band eine \(0\)
                      liest, nimm den oberen Pfeil, der von \(q,c\) ausgeht;
                      wenn Du eine \(1\) liest, nimm den unteren Pfeil.
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img
                      style="height: 10em"
                      src="../img/turing-machines/nondeterminism/two-to-det.svg"
                      loading="lazy"
                    />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Falls wir auf dem zweiten Band einem anderen Zeichen
                      begegnen (\(\square\) oder sonst etwas, das weder 0 noch 1
                      ist), dann lehnen wir sofort ab. Wir haben nun eine
                      deterministische Turingmaschine \(M''\), die jedoch nicht
                      das gleiche tut wie \(M\). Aber: wenn \(x \in L(M)\), dann
                      gibt es ein Wort \(z \in \&#123;0,1\&#125;^*\), das wir
                      auf das zweite Band schreiben <i>könnten</i> , so dass
                      \(M''\) das Eingabewort \(x\) akzeptiert. Im Gegenzug:
                      wenn \(x \not \in L(M)\), dann können wir auf das zweite
                      Band schreiben, was wir wollen, \(M''\) wird immer
                      ablehnen.
                    </Paragraph>
                  </Paragraph>
                  <figure class="centered-figure well container">
                    <a
                      data-slide="prev"
                      href="#det-sim-nondet"
                      class="left carousel-control-prev-icon">
                      <div class="carousel-nav-icon">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </a>
                    <a
                      data-slide="next"
                      href="#det-sim-nondet"
                      class="right carousel-control-next-icon">
                      <div class="carousel-nav-icon">
                        <img src="../img/carousel-next-icon.svg" />
                      </div>
                    </a>
                    <div
                      style="display: inline-block"
                      data-interval={false}
                      class="carousel"
                      id="det-sim-nondet">
                      <ol class="carousel-indicators">
                        <li
                          class="active"
                          data-slide-to={1}
                          data-target="#det-sim-nondet"
                        />
                        <li data-slide-to={2} data-target="#det-sim-nondet" />
                        <li data-slide-to={3} data-target="#det-sim-nondet" />
                        <li data-slide-to={4} data-target="#det-sim-nondet" />
                        <li data-slide-to={5} data-target="#det-sim-nondet" />
                        <li data-slide-to={6} data-target="#det-sim-nondet" />
                        <li data-slide-to={7} data-target="#det-sim-nondet" />
                        <li data-slide-to={8} data-target="#det-sim-nondet" />
                        <li data-slide-to={9} data-target="#det-sim-nondet" />
                        <li data-slide-to={10} data-target="#det-sim-nondet" />
                        <li data-slide-to={11} data-target="#det-sim-nondet" />
                        <li data-slide-to={12} data-target="#det-sim-nondet" />
                        <li data-slide-to={13} data-target="#det-sim-nondet" />
                        <li data-slide-to={14} data-target="#det-sim-nondet" />
                      </ol>
                      <div style="display: inline-block" class="carousel-inner">
                        <div class="item active">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/01.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/02.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/03.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/04.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/05.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/06.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/07.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/08.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/09.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/10.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/11.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/12.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/13.svg"
                          />
                        </div>
                        <div class="item">
                          <img
                            style="height: 23rm"
                            src="../img/turing-machines/det-simulates-nondet/14.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Nun bauen wir schlussendlich eine Maschine \(M'\), die in
                      einer Endlosschleife alle möglichen \(z \in
                      \&#123;0,1\&#125;^*\) aufzählt, auf das zweite Band
                      schreibt, und \(M''\) neustartet. Geht das? Wir können zum
                      Beispiel \(i = 1,2,3,4,\dots\) hochzählen, binär schreiben
                      und die führende 1 löschen. Überzeugen Sie sich, dass in
                      dieser Reihe wirklich alle \(z \in \&#123;0,1\&#125;^*\)
                      vorkommen.
                    </Paragraph>
                  </Paragraph>
                  <span class="qed">\(\square\)</span>
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
