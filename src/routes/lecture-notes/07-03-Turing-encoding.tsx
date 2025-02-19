import Chapter from "~/components/Section";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter title="Turing encoding" number={7.3} path="/lecture-notes46.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">Inhaltsverzeichnis</a>
          <a href="07-02-Turing-variants">&lt;&lt; Kapitel 7.2</a>
        </div>
        <div id="link-to-overview" style="text-align: end">
          <a href="/">zur Kursübersicht</a>
          <a href="07-03-Turing-universal">Kapitel 7.3 &gt;&gt;</a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    4.4 Die universelle Turingmaschine
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Wir haben mit der Turingmaschine ein einfaches aber doch
                    sehr mächtiges Modell einer Rechenmaschine kennengelernt.
                    Sie haben vielleicht mittlerweile - auch durch Ihre
                    Programmiererfahrung - das Gefühl, das man im Prinzip alles,
                    was man überhaupt programmieren kann, auch auf einer
                    Turingmaschine hinkriegt. Versetzen Sie sich nun in die Lage
                    der Menschen vor ungefähr 100 Jahren. Damals gab es durchaus
                    Rechenmaschinen. Maschinen zum Addieren und sogar zum
                    Multiplizieren gibt es schon seit dem 17. Jahrhunder (
                    <a href="https://en.wikipedia.org/wiki/Mechanical_calculator">
                      Wikipedia: Mechanical calculator
                    </a>
                    ). Leider musste man für jede Aufgabe eine neue Maschine
                    erfinden und auch bauen. Zahlen addieren? Maschine bauen.
                    Multiplizieren? Neue Maschine bauen. Verschlüsselung
                    brechen? Neue Maschine bauen. Und so weiter.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Die Idee einer{" "}
                    <a href="https://en.wikipedia.org/wiki/Mechanical_calculator#Programmable_mechanical_calculators">
                      programmierbaren Maschine
                    </a>
                    , die erstmals circa 1834 mit Charles Babbage aufkam, ist,
                    dass man neben den Eingabedaten (z.B. die zu
                    multiplizierenden Zahlen) auch die Rechenvorschrift (das
                    Programm) als Eingabe übergibt. Hätte man so eine Maschine,
                    dann müsste man nicht für jede neue Aufgabe eine neue
                    Maschine entwerfen; man könnte <i>eine</i> Maschine bauen
                    und sie für die jeweilige Aufgabe <i>programmieren</i> ,
                    indem ihr auf einem separaten Eingabeband die
                    Rechenvorschrift überreicht. Von heute aus gesehen ist diese
                    Idee nicht mehr allzu überraschend, weil diese Maschinen
                    überall anzutreffen sind. Damals aber war es revolutionär.
                    Um dies, zumindest auf dem Papier, in die Realität zu
                    übersetzen, müssen wir zwei Fragen beantworten.
                  </Paragraph>
                </Paragraph>
                <ol>
                  <li>
                    Wie können wir eine Rechenvorschrift (d.h. ein Programm) so
                    codifizieren, dass wir es im Prinzip als eine Zeichenkette
                    aufschreiben und einer Maschine übergeben können?
                  </li>
                  <li>
                    Welche Maschine könnte so eine Rechenvorschrift lesen und
                    sie an gegebenen Eingabedaten dann auch ausführen?
                  </li>
                </ol>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Es stellt sich heraus, dass wir beide Antworten (beinahe)
                      schon kennen. Eine beliebige Rechenvorschrift können wir,
                      da sind wir uns mittlerweile recht sicher, als
                      Turingmaschine \(M\) implementieren. Diese können wir über
                      einem Alphabet codieren und erhalten ein Wort \(\enc(M)\).
                      Wie tun wir das? Nun ja, auf{" "}
                      <a href="https://turingmachinesimulator.com">
                        turingmachinesimulator.com
                      </a>
                      haben wir das bereits getan: eine Turingmaschine mit
                      Alphabet \(\Sigma\) können wir dort als String über dem
                      Alphabet \begin&#123;align*&#125; \Sigma \cup
                      \&#123;a,\dots,z,A\dots,Z,0,\dots,9\&#125; \cup
                      \&#123;\texttt&#123;&lt;&#125;, \texttt&#123;-&#125;,
                      \texttt&#123;&gt;&#125;, \texttt&#123;,&#125;,
                      \texttt&#123;_&#125;, \texttt&#123;\n&#125;, \dots\&#125;
                      \end&#123;align*&#125; codieren. Codierung ist im Prinzip
                      kein Problem, wir werden aber ein paar Subtilitäten
                      ansprechen.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Punkt 2 ist schwieriger. Können wir eine Maschine bauen,
                      die als eingabe (1) die Codierung \(\enc(M)\) einer
                      Turingmaschine und (2) ein Eingabewort \(w \in \Sigma^*\)
                      entgegennimmt und dann die Berechnung \(M(x)\) simuliert
                      bzw. zu dem Ergebnis gelangt, zu dem auch \(M(x)\)
                      gelangen würde? Die Programmierer von{" "}
                      <a href="https://turingmachinesimulator.com">
                        turingmachinesimulator.com
                      </a>
                      haben dies offensichtlich geschafft: sie haben eine
                      Maschine "gebaut" (also wohl einen Server gemietet und
                      eine Webseite mit viel Javascript programmiert), der eine
                      Turingmaschine in einer spezifischen Codierung und ein
                      Eingabewort einliest und dann diese simuliert.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      In diesem Teilkapitel werden wir sehen, wie wir eine
                      Turingmaschine $M$ über einem fixen, nicht von $M$
                      abhängigen Alphabet codieren können. Im nächsten
                      Teilkapitel werden wir uns überlegen, wie man einen
                      Turingmaschinen-Simulator selbst als Turingmaschine
                      implementieren kann. Also eine Turingmaschine \(U\), die
                      als Input Wörter der Form \begin&#123;align*&#125; c\#x
                      \end&#123;align*&#125; entgegennimmt und dann
                    </Paragraph>
                    <ol class="nested">
                      <li>
                        {" "}
                        <b>ablehnt</b> , falls \(c\) keine gültige Codierung
                        einer Turingmaschine \(M\) ist,
                      </li>
                      <li>
                        ansonsten, falls also \(c = \enc(M)\), dann
                        <ol class="nested">
                          <li>
                            {" "}
                            <b>akzeptiert</b> falls \(M(x)\) akzeptiert;
                          </li>
                          <li>
                            {" "}
                            <b>ablehnt</b> , falls \(M(x)\) ablehnt
                          </li>
                          <li>
                            {" "}
                            <b>nicht terminiert</b> , falls \(M(x)\) nicht
                            terminiert.
                          </li>
                        </ol>
                      </li>
                    </ol>
                    <Paragraph>
                      Falls wir bei \(M\) nicht nur an Akzeptieren / Ablehnen
                      interessiert sind, sondern am Ergebnis der Berechnung,
                      dann hätten wir gerne, dass \(U (\enc(M)\#x)\) am Ende den
                      gleichen Bandinhalt hat wie \(M(x)\) am Ende; hierbei gibt
                      es allerdings eine Schwierigkeit mit den Details der
                      Codierung, die wir gleich ansprechen werden.
                    </Paragraph>
                  </Paragraph>
                  <h3>
                    <Paragraph>Die Codierung</Paragraph>
                  </h3>
                  Zuerst müssen wir uns auf ein Eingabealphabet \(\Sigma\)
                  einigen. Im Ernstfall genügt immer \(\Sigma =
                  \&#123;0,1\&#125;\), allerdings gibt es keinen Grund, für die
                  Definitionen nicht allgemeine endliche Alphabete \(\Sigma\)
                  zuzulassen. Wir wollen nun ein Codierungsalphabet \(\Lambda\)
                  und eine Codierungsfunktion \(\enc\), so dass
                  \begin&#123;align*&#125; \enc(M) \in \Lambda^
                  <b> \end&#123;align</b>
                  &#125; für jede Turingmaschine \(M\) mit Eingabealphabet
                  \(\Sigma\) gilt.
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      {" "}
                      <b>Erster, zum scheitern verurteilter Versuch.</b> Sei
                      \(M\) eine Turingmaschine mit Eingabealphabet \(\Sigma\),
                      Arbeitsalphabet \(\Gamma\), Zustandsmenge \(Q\),
                      Startzustand \(\qstart\), akzeptierendem Zustand
                      \(\qaccept\) und Übergangsfunktion \(\delta\). Wir
                      codieren \(M\) wie folgt: wenn \begin&#123;align*&#125;
                      \delta(q,x) = (r,y,\texttt&#123;R&#125;) \\ \delta(q,y) =
                      (s,z,\texttt&#123;L&#125;) \\ \dots \end&#123;align*&#125;
                      dann schreiben wir in der Codierung
                      \begin&#123;align*&#125; \qstart \# \qaccept \# qxryR \#
                      qyszL \# \dots \end&#123;align*&#125; Unser
                      Codierungsalphabet ist also \begin&#123;align*&#125;
                      \Lambda := Q \cup \Gamma \cup \&#123;\#,
                      \texttt&#123;L&#125;, \texttt&#123;S&#125;,
                      \texttt&#123;R&#125;\&#125; \ . \end&#123;align*&#125;
                      Sehen Sie das Problem? Das Codierungsalphabet ist nicht
                      uniform: wir brauchen, abhängig von der Zustandsmenge
                      \(Q\) und dem Bandalphabet \(\Gamma\) jeweils neue
                      Alphabete. Wir wollen aber ein \(\Lambda\), da für
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      <i>alle</i> Turingmaschinen mit Eingabealphabet \(\Sigma\)
                      funktioniert.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      {" "}
                      <b>Zweiter, erfolgreicher Versuch.</b>{" "}
                    </Paragraph>
                  </Paragraph>
                  Wir müssen also die Zustandsmenge \(Q\) und die Zeichen
                  \(\Gamma \setminus \Sigma\) erst einmal selbst codieren,
                  beispielsweise über dem Alphabet \(\&#123;0,1\&#125;\). Die
                  \(\delta\)-Tabelle der Turingmaschine für
                  \(\&#123;a^nb^nc^n\&#125;\)
                </Paragraph>
                <figure>
                  <img
                    style="height:10em"
                    src="../img/turing-machines/exampe-2-aabbcc/delta-table.svg"
                    loading="lazy"
                  />
                </figure>
                <Paragraph>würde dann zu folgender Tabelle:</Paragraph>
                <figure>
                  <img
                    style="height:10em"
                    src="../img/turing-machines/exampe-2-aabbcc/delta-table.svg"
                    loading="lazy"
                  />
                </figure>
                <Paragraph>
                  <Paragraph>
                    Wenn wir dies nun als <i>ein</i> Wort in obigen Schema
                    schreiben, können wir für eine Tabellenzelle \(\delta(q,x) =
                    (r,y,R)\) nicht einfach \(qxryR\) schreiben, auch nicht
                    einfach die Codierungen zusammenschreiben: in diesem Falle
                    würde nämlich \(\delta(00,0) = (11,0,\texttt&#123;R&#125;)\)
                    zu \(000110\texttt&#123;R&#125;\) und wir würden nicht mehr
                    erkennen, wo welches Zeichen beginnt und aufhört. Wir
                    brauchen ein Separatorzeichen, beispielsweise ein Komma. Aus
                    Gründen, die später klar werden werden, schließen wir die
                    Codierung der Turingmaschine mit einem
                    $\texttt&#123;;&#125;$ ab. Die Codierung der obigen Maschine
                    ist dann also
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <Paragraph>
                    00#100#00,a,01,1,S#00,b,L#00,c,L#00,1,L#00,0,11,0,R#01,a,R#01,b,10,1,S#01,1,R#10,b,R#10,c,00,1,S#10,1,R#11,1,R#11,0,100#;
                  </Paragraph>
                </pre>
                <Paragraph>
                  <Paragraph>
                    In dieser Codierung behalten wir zwei Konventionen bei: wenn
                    eine Regel "fehlt", also beispielsweise für \(\delta(10,a)\)
                    die Zelle leer ist, dann soll das in den Zustand $\qreject$
                    führen; wenn in der Zelle nur ein Richtungszeichen, also
                    beispielsweise <tt>01,1,R</tt>
                    steht, dann ist das eine Abkürzung für
                    \begin&#123;align*&#125; \delta(01,1) =
                    (01,1,\texttt&#123;R&#125;), \end&#123;align*&#125; also
                  </Paragraph>
                  <tt>#01,1,01,1,R#</tt>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Wir können nun <i>jede</i> Turingmaschine über dem Alphabet
                    \(\Sigma\) codieren als Wort über dem Alphabet
                    \begin&#123;align*&#125; \Lambda := \writelambda
                    \end&#123;align*&#125;
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Definition/Beobachtung.
                      </span>
                      Zu einem Eingabealphabet $\Sigma$ definieren wir das{" "}
                      <i>Codierungsalphabet</i>{" "}
                    </Paragraph>
                    <Paragraph>
                      $\Lambda := \writelambda$, wobei wir annehmen, dass
                      $\texttt&#123;#&#125;, \texttt&#123;,&#125;,
                      \texttt&#123;L&#125;, \texttt&#123;S&#125;,
                      \texttt&#123;R&#125;, \texttt&#123;;&#125; \not \in
                      \Sigma$. Wir können nun jede Turingmaschine $M$ mit
                      Eingabealphabet $\Sigma$ als String $\enc(M) \in
                      \Lambda^*$ codieren.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="alert-info container">
                  <Paragraph>
                    {" "}
                    <b>Anmerkungen:</b>{" "}
                  </Paragraph>
                  <Paragraph>
                    das Wort <i>Codierung</i> suggeriert, dass wir, gegeben den
                    String $c = \enc(M)$ die ursprüngliche Turingmaschine $M$
                    rekonstruieren können. Das gilt natürlich nur beschränkt:
                    eventuell decodieren wir $c$ zu einer Maschine $M'$, die
                    sich von $M$ in denen Namen der Zustände und der
                    Bandalphabetsymbole unterscheidet. Allerdings stimmen die
                    Funktionen $f
                    <i>
                      M: \Sigma^* \rightarrow \&#123;\texttt&#123;accept&#125;,
                      \texttt&#123;reject&#125;,
                      \texttt&#123;undefined&#125;\&#125;$ und $f
                    </i>
                    &#123;M'&#125;: \Sigma^* \rightarrow
                    \&#123;\texttt&#123;accept&#125;, \texttt&#123;reject&#125;,
                    \texttt&#123;undefined&#125;\&#125;$ überein.
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
