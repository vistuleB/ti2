export default function _() {
  return (
    <>
      <div>
        <div id="link-to-toc">
          <p>
            <a href="../vorlesungsskript">
              <p>Inhaltsverzeichnis</p>
            </a>
          </p>
        </div>
        <div id="link-to-overview">
          <p>
            <a href="https://www.tu-chemnitz.de/informatik/theoretische-informatik/TI-2/index.html">
              <p>zur Kursübersicht</p>
            </a>
          </p>
          <p>
            <a href="01-01-Fanin-Size-Depth">
              <p>Kapitel 1.1 &gt;&gt;</p>
            </a>
          </p>
        </div>
        <main>
          <div id="rightSideWrapper">
            <div class="content">
              <div class="chapter" title="Boolesche Schaltkreise">
                <h1 class="hidden-title">
                  <span class="chapterTitle">1. Boolesche Schaltkreise</span>
                </h1>
                <p>
                  Boolesche&nbsp;Schaltkreise sind ein idealisiertes Modell
                  echter elektronischer Schaltkreise. Als primitive Bausteine
                  haben wir Boolesche Operatoren, auch <i>Gatter</i> (englisch{" "}
                  <i>gates</i>) genannt, die mehrere (typischerweise ein oder
                  zwei) Signale zu einem Ausgabe-Signal kombinieren. Die Signale
                  können nur zwei Werte annehmen: wahr/falsch bzw. 1/0 bzw.{" "}
                  <code>true/false</code>. Hier sehen Sie die drei üblichsten
                  Gatter:
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="../img/circuits/and-or-not-gates.svg"
                    style="height:10em"
                  ></img>
                </figure>
                <p>
                  Von links nach rechts sind dies: das Und-Gatter (
                  <i>and-gate</i>
                  ), Oder-Gatter (<i>or-gate</i>) und das Nicht-Gatter (
                  <i>not-gate</i>
                  ). In C, C++ und Java kennen Sie diese Booleschen Operatoren
                  als <code>&&</code>, <code>|| </code>
                  und <code>!</code>. Was diese Operatoren <i>tun</i>, können
                  wir als
                  <i>Wahrheitstabelle</i> darstellen. Wir listen alle
                  Kombinationen für \(x,y\) auf und schreiben in jede Zeile auch
                  den Wert, den der Operator ausgibt.
                </p>
                <p></p>
                <p>
                  $$ \begin&#123;array&#125;&#123;ll | l&#125; x & y & x \wedge
                  y \\ \hline 0 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \\ 1 & 1 & 1
                  \end&#123;array&#125; \qquad \qquad
                  \begin&#123;array&#125;&#123;ll | l&#125; x & y & x \vee y \\
                  \hline 0 & 0 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 1
                  \end&#123;array&#125; \qquad \qquad
                  \begin&#123;array&#125;&#123;l | l&#125; x & \neg x \\ \hline
                  0 & 1 \\ 1 & 0 \\ \end&#123;array&#125; $$
                </p>
                <p></p>
                <p>
                  Die dritte Zeile der mittleren Tabelle sagt beispielsweise
                  aus, dass \(1 \vee 0 = 1\) gilt.
                </p>
                <p>
                  Vielleicht wünschen Sie sich noch mehr Gates, zum Beispiel ein
                  if-then-else-Gate mit drei Inputs \(x,y,z\), welches \(y\)
                  ausgibt, wenn \(x\) wahr ist und ansonsten \(z\) ausgibt. So
                  ein Gate können Sie sich einfach aus And, Or, Not bauen:
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="../img/circuits/if-then-else-gate.svg' style='height:13em"
                  ></img>
                  <figcaption>
                    <code>if </code>
                    \(x\) <code>then </code>
                    \(y\) <code>else </code>
                    \(z\)
                  </figcaption>
                </figure>
                <p>
                  Jeder Schaltkreis <i>berechnet</i> eine Funktion (formale
                  Definition weiter unten). Informell gesprochen, wenn wir
                  Wahrheitswerte (0/1) in die Input-Gates reinstecken, dann
                  fließen diese durch den Schaltkreis und werden von den
                  AND/OR/NOT-Gates entsprechend ihrer Funktion kombiniert und
                  werden schließlich an den Output-Gates ausgegeben:
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="../img/circuits/if-then-else-gate-with-values.svg"
                    style="height:13em"
                  ></img>
                  <figcaption>
                    Das if-then-else-Gate mit einer konkreten Belegung und einem
                    Ausgabewert
                  </figcaption>
                </figure>
                <div class="well well-lg numbered-exercise container">
                  <p>
                    <span class="numbered-title">
                      Übungsaufgabe <span style="color:blue">1.1 </span>
                    </span>
                    Bauen Sie folgende Gates aus And-, Or- und Not-Gates
                    zusammen:
                  </p>
                  <ol>
                    <li>
                      <p>
                        Ein XOR-Gate \(x \oplus y\). Es gibt 1 aus, wenn einer
                        der beiden Inputs 1 ist und der andere 0.
                      </p>
                    </li>
                    <li>
                      <p>
                        Ein Majority-Gate \(&#123;\rm Maj&#125;(x,y,z)\). Es
                        gibt 1 aus, wenn mindestens zwei seiner Inputs 1 ist.
                      </p>
                    </li>
                    <li>
                      <p>Ein \(n\)-faches XOR-Gate</p>
                      <figure>
                        <img
                          loading="lazy"
                          src="../img/circuits/n-fold-xor.svg"
                          style="height:5em"
                        ></img>
                      </figure>
                      <p>
                        welches 1 ausgibt, wenn eine <i>ungerade</i> Anzahl
                        seiner Inputs auf 1 stehen.
                      </p>
                    </li>
                    <li>
                      <p>
                        Ein \(n\)-faches Majority-Gate \(&#123;\rm Maj&#125;
                        (x_1,\dots,x_n)\), welches 1 ausgibt, wenn mehr als
                        \(n/2\) der Inputs auf 1 stehen. Sie können annehmen,
                        dass \(n\) ungerade ist, wenn es Ihnen hilft.
                      </p>
                      <p>
                        Können Sie vermeiden, dass Ihr Schaltkreis riesengroß
                        wird? Kriegen Sie beispielsweise für \(n = 99\) einen
                        Schaltkreis hin, den man realistischerweise herstellen
                        kann?
                      </p>
                    </li>
                  </ol>
                </div>
                <p>
                  Je nach Kontext kann es hilfreich sein, Gatter mit beliebig
                  vielen Inputs zuzulassen, beispielsweise \(x_1 \wedge x_2
                  \wedge \dots \wedge x_n\) als
                  <i>ein</i> Gate darzustellen:
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="../img/circuits/and-fan-in-n.svg"
                    style="height:10em"
                  ></img>
                </figure>
                <p>
                  Man bezeichnet dies als AND-Gate mit einem <i>Fan-in</i>
                  von \(n\). Das "normale" AND-Gate hat einen Fan-in von 2. Mit
                  \(\vee\)- und \(\oplus\)-Gates geht das ganz analog. Für
                  andere Gates (wie zum Beispiel ein if-then-else-Gate) würde
                  das keinen Sinn machen. Größerer Fan-in ist aber nicht
                  wirklich etwas neues unter der Sonne: Sie können jederzeit
                  großen Fan-in durch kleinen simulieren:
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="../img/circuits/and-n-fold-linear-depth.svg"
                    style="height:10em"
                  ></img>
                </figure>
                <p>
                  Also als geschachteltes AND, oder aber in Form eines
                  Binärbaums:
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="../img/circuits/and-n-fold-log-depth.svg"
                    style="height:10em"
                  ></img>
                </figure>
                <p>
                  Schaltkreise, wie wir sie in diesem Kapitel betrachten, sind
                  immer azyklisch. Das heißt insbesondere, das Dinge mit
                  "Feedback-Schleifen" wie Flipflops eben
                  <i>keine</i> Schaltkreis in unserem Sinn sind:
                </p>
                <figure>
                  <img
                    loading="lazy"
                    src="../img/circuits/flipflop.svg"
                    style="height:10em"
                  ></img>
                </figure>
                <p>
                  Das Flipflop zeigt ein interessantes Verhalten: wenn
                  \(&#123;\rm Reset&#125; = 0, &#123;\rm Set&#125; = 1\) ist, so
                  ist der Ausgabe-Wert des unteren OR-Gates auf jeden Fall 1,
                  und somit ist \(\bar&#123;Q&#125; = 0\); somit sind wiederum
                  beide Input-Werte des oberen OR-Gates 0 und \(Q=1\). Wenn
                  \(&#123;\rm Reset&#125; = 1, &#123;\rm Set&#125; = 0\), dann
                  ist analog \(Q = 0, \bar&#123;Q&#125;=1\). Wenn \(&#123;\rm
                  Reset&#125; = &#123;\rm Set&#125; = 0\), dann leiten beide
                  OR-Gates einfach die Werte der anderen, von rechts kommenden
                  Kabel durch, und somit gilt \(Q = \neg \bar&#123;Q&#125;\) und
                  \(\bar&#123;Q&#125; = \neg Q\); das heißt, die Werte, die
                  zuvor bestanden, bestehen weiter. Das Flipflop implementiert
                  somit einen 1-Bit-Speicher (die Kombination \(&#123;\rm
                  Set&#125; = &#123;\rm Reset&#125; = 1\) würde \(Q =
                  \bar&#123;Q&#125; = 0\) erzeugen und gilt als illegale
                  Eingabe). Ein Flipflop hat somit einen <i>inneren Zustand</i>.
                  Die Schaltkreise in diesem Kapitel haben <i>keinen</i> inneren
                  Zustand: die Werte der Ausgabe-Gates sind vollständig durch
                  die Werte der Input-Gates determiniert. Wir sind nun bereit
                  für eine formale Definition von Schaltkreisen.
                </p>
                <div class="well container theorem">
                  <p>
                    <span class="numbered-title">
                      Definition <span style="color:blue">1.1 </span>
                    </span>
                    <b>(Boolesche Schaltkreise)</b>
                    Ein Boolescher Schaltkreis ist ein gerichteter, azyklischer
                    Graph (englisch
                    <i>directed acyclic graph</i>, kurz <i>DAG</i>
                    ), in welchem jeder Knoten entweder
                  </p>
                  <ul>
                    <li>
                      <p>
                        ein Input-Gate ist und mit einer Input-Variable oder
                        eine Booleschen Konstant (0 oder 1) beschriftet ist und
                        keine eingehenden Kanten hat (in-degree 0), oder
                      </p>
                    </li>
                    <li>
                      <p>mit AND-, OR- oder NOT beschriftet ist,</p>
                    </li>
                  </ul>
                  <p>
                    wobei die mit NOT beschrifteten Knoten genau eine eingehende
                    Kante haben und die mit AND oder OR beschrifteten Knoten
                    mindestens zwei eingehende Kanten haben. Mindestens ein
                    Knoten ist als <i>Output-Gate</i> gekennzeichnet. Die
                    Output-Gates sind ihrerseits mit Output-Variablen
                    \(y_1,\dots,y_m\) beschriftet.
                  </p>
                </div>
                <p>
                  Oft haben wir es mit Schaltkreisen mit nur einem Output-Gate
                  zu tun; in diesem Falle lassen wir die Beschriftung auch gerne
                  weg, weil sie keine zusätzliche Information bringt. Wenn wir
                  allen Input-Variablen eines Schaltkreises \(C\) einen
                  Wahrheitswert zugewiesen bekommen haben, dann können wir den
                  Schaltkreis von "unten" (Input-Gates) nach "oben"
                  (Output-Gates)
                  <i>auswerten</i>, indem eben jeder mit OR/AND/NOT beschriftete
                  Knoten den ihm zugeordnete Booleschen Operator auswertet. Es
                  ist klar, dass der Schaltkreis \(C\) eine <i>Funktion</i>{" "}
                  \(f_C : \&#123;0, 1\&#125;^n \rightarrow \&#123;0,
                  1\&#125;^m\) berechnet. Oft schreiben wir einfach \(C :
                  \&#123;0, 1\&#125;^n \rightarrow \&#123;0, 1\&#125;^m\).
                </p>
                <div class="well container theorem">
                  <p>
                    <span class="numbered-title">
                      Beobachtung <span style="color:blue">1.2</span>
                    </span>
                    &ensp;Ein Schaltkreis \(C\) mit \(n\) Input-Gates und \(m\)
                    Output-Gates berechnet eine Funktion \(f_C : \&#123;0,
                    1\&#125;^n \rightarrow \&#123;0, 1\&#125;^m\).
                  </p>
                </div>
                <p>
                  Es ist auch nicht weiter überraschend, dass es Schaltkreise
                  für die gleiche Funktion geben kann (sie haben für die
                  Funktion \(x_1 \wedge \dots \wedge x_n)\) auch bereits drei
                  verschiedene Schaltkreise gesehen, und im Rahmen der obigen
                  Übungsaufgabe wohl auch mehrere Schaltkreise, die das gleiche
                  tun, entwickelt.
                </p>
                <div class="well container theorem">
                  <p>
                    <span class="numbered-title">
                      Definition <span style="color:blue">1.3 </span>
                    </span>
                    Zwei Boolesche Schaltkreise \(C, C'\) heißen äquivalent,
                    wenn \(f_C = f_&#123;C'&#125;\), wenn sie also die gleiche
                    Funktion berechnen. Wir schreiben \(C \equiv C'\).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
