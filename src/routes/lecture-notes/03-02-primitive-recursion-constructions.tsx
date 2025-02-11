import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        title_gr="Primitive Rekursion: Konstruktionen und Tricks"
        title_en="primitive recursion constructions"
        number={3.2}
        path="/lecture-notes17.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="03-01-primitive-recursion-definitions">
            &lt;&lt; Kapitel 3.1
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="03-03-ackermann">
            Kapitel 3.3 &gt;&gt;
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    3.2 Primitive Rekursion: Konstruktionen und Tricks
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Ich beginne dieses Teilkapitel, manche der primitiv-rekursive Implementierungen in
                    </Paragraph>
                    <Paragraph>
                      <a href="../code/primitive-recursion/stockpile.py">
                        stockpile.py
                      </a>
                      zu erklären und
                      werde dann weitere, weniger offensichtliche Konstruktionen diskutieren.
                    </Paragraph>
                  </Paragraph>
                  <h2>
                    <Paragraph>
                      Arithmetische Operationen
                    </Paragraph>
                  </h2>
                  Wir haben bereits gesehen, dass wir die Addition per
                  \(&#123;\rm add&#125; = \primrec (\pi_0, \comp(\succ, \pi_0)) \) schreiben können. Beachten Sie, dass ich
                  hier die Indizierung immer bei 0 beginnen lasse, im Python-Code sowie im Mathematik-Modus (in der
                  Vorlesung hatte ich an der Tafel das oft bei 1 beginnen lassen, entschuldigen Sie die Inkonsistenz).
                  Multiplikation geht nach dem gleichen Schema. Wir schreiben{" "}
                  <code>
                    mult
                  </code>
                  in der Schleifenform, wie sie die primitive Rekursion zulässt, und schreiben in Orange
                  auch gleich die Funktionen \(g\) und \(h\) dazu:
                </Paragraph>
                <Paragraph>
                  <pre class="container">
                    <Paragraph>
                      def mult(t,x):
                      temp = 0{" "}
                      <span class="comment">
                        = zero(x)
                      </span>
                      for i in range(t):
                      temp = add(temp,x){" "}
                      <span class="comment">
                        = Comp(add, p_0, p2) (temp,i,x)
                      </span>
                      return temp
                    </Paragraph>
                  </pre>
                  erinnern Sie sich daran: \(h\) muss immer eine Funktion in der lokalen Variable temp,
                  der Laufvariable \(i\) und \(\vec&#123;x&#125;\) sein. Daher:
                  \begin&#123;align*&#125;
                  &#123;\rm mult&#125; = \primrec(\zero, \comp(&#123;\rm add&#125;, \pi
                  <i>
                    0, \pi
                  </i>
                  2))
                  \end&#123;align*&#125;
                  Genauso erhalten wir \(x^t\), indem wir statt bei 0 bei 1 beginnen und statt
                  \(x\) draufzuzählen, es draufmultiplizieren:
                  \begin&#123;align*&#125;
                  &#123;\rm expReverse&#125; = \primrec(&#123;\rm one&#125;, \comp(&#123;\rm mult&#125;, \pi
                  <i>
                    0, \pi
                  </i>
                  2))
                  \end&#123;align*&#125;
                  Allerdings gibt uns das \((t,x) \mapsto x^t\). Für \(&#123;\rm exp&#125;(a,b) = a^b\) müssen
                  wir die Argumente umdrehen:
                  \begin&#123;align*&#125;
                  &#123;\rm exp&#125; = \comp(&#123;\rm expReverse&#125;, \pi
                  <i>
                    1, \pi
                  </i>
                  0)
                  \end&#123;align*&#125;
                  Die Fakultätsfunktion \(t!\) ist konzeptuell ähnlich, allerdings etwas interessanter, weil
                  wir hier auf das Zwischenergebnis und die Laufvariable zugreifen müssen:
                </Paragraph>
                <Paragraph>
                  <pre class="container">
                    <Paragraph>
                      def factorial(t):
                      temp = 1{" "}
                      <span class="comment">
                        = one()
                      </span>
                      for i in range(t):
                      temp = mult(temp,i+1){" "}
                      <span class="comment">
                        = Comp(mult, p
                        <i>
                          0, Comp(succ, p
                        </i>
                        1)) (temp,i)
                      </span>
                      return temp
                    </Paragraph>
                  </pre>
                  Wir können nicht einfach \(i+1\) schreiben! Wir müssen dies via \(\comp(\succ,\pi_1)\) konstruieren.
                  Denn: die Funktion \(h\) bekommt \(&#123;\rm temp&#125;, i, \vec&#123;x&#125;\) als Input; \(\pi_1\) gibt
                  uns davon das \(i\) zurück und \(\comp(\succ, \pi_1)\) gibt uns \(i+1\).
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Operationen wie \(\pred: t \mapsto t-1\) und \(&#123;\rm minus&#125;\)
                      sind konzeptuell nur ein bisschen anders. Das liegt auch daran,
                      dass wir keine negativen Zahlen haben. Was ist
                      \(\pred(0)\)? Wir definieren das als 0. So können wir
                      pred implementieren:
                    </Paragraph>
                  </Paragraph>
                  <pre class="container">
                    <Paragraph>
                      def pred(t):
                      temp = 0{" "}
                      <span class="comment">
                        = zero()
                      </span>
                      for i in range(t):
                      temp = i{" "}
                      <span class="comment">
                        = p1 (temp,i){" "}
                      </span>
                      return temp
                    </Paragraph>
                  </pre>
                  In Worten: wenn \(t=0\), dann geben wir einfach \(\zero()\)
                  zurück, also \(0\). Ansonsten durchlaufen wir die Schleife \(t\) mal;
                  der letzte Schleifenindex ist \(t-1\), und das ist dann auch der Wert
                  von temp, der zurückgegeben wird. Daher:
                  \begin&#123;align*&#125;
                  \pred = \primrec(\zero, \pi_1)
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Für minus schreiben wir uns erst mal
                      \(&#123;\rm subtractFrom&#125;: (t,x) \mapsto x-t\). Hierfür wenden wir einfach pred
                      \(t\) mal auf \(x\) an:
                      \begin&#123;align*&#125;
                      &#123;\rm subtractFrom&#125;&amp;= \primrec(\pi
                      <i>
                        0, \comp(\pred, \pi
                      </i>
                      0)) \\
                      &#123;\rm minus&#125;&amp;= \comp(&#123;\rm subtractFrom&#125;, \pi
                      <i>
                        1, \pi
                      </i>
                      0)
                      \end&#123;align*&#125;
                    </Paragraph>
                  </Paragraph>
                  <h2>
                    <Paragraph>
                      Boolesche Werte
                    </Paragraph>
                  </h2>
                  <Paragraph>
                    <Paragraph>
                      Die primitive Rekursion stellt uns als "Datentyp" nur die natürlichen Zahlen zur
                      Verfügung. Alles andere müssen wir als natürliche Zahlen nach einem von uns
                      selbst gewählten Schema codieren. Für Boolesche Werte ist das recht naheliegend.
                      Wir codieren{" "}
                      <code>
                        True
                      </code>
                      als 1 und{" "}
                      <code>
                        False
                      </code>
                      als 0.
                      Unser erstes Prädikat, also Funktion mit Booleschem Ausgabewert, ist
                    </Paragraph>
                    <Paragraph>
                      <code>
                        isPositive
                      </code>
                      :
                    </Paragraph>
                  </Paragraph>
                  <pre class="container">
                    <Paragraph>
                      def pred(t):
                      temp = 0{" "}
                      <span class="comment">
                        = zero()
                      </span>
                      for i in range(t):
                      temp = 1{" "}
                      <span class="comment">
                        = one{" "}
                      </span>
                      return temp
                    </Paragraph>
                  </pre>
                  und somit
                  \begin&#123;align*&#125;
                  &#123;\rm isPositive&#125; = \primrec(\zero,&#123;\rm one&#125;)
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Auf ähnliche Weise können wir uns nun lessThan, lessEqual, and, or, not,
                      ifThenElse konstruieren.
                    </Paragraph>
                  </Paragraph>
                  <h2>
                    <Paragraph>
                      Wurzel und Suchen im Allgemeinen
                    </Paragraph>
                  </h2>
                  Eine größere Herausforderung stellt die ganzzahlige Wurzel
                  \(x \mapsto \floor&#123;\sqrt&#123;x&#125;&#125;\) dar. Hierfür haben wir keine Formel
                  mit \(+, *, -\), auch keine schöne rekursive Formel zur Hand.
                  Es handelt sich um ein Suchproblem:
                </Paragraph>
                <div style="text-align:center">
                  <Paragraph>
                    \(\floor&#123;\sqrt&#123;x&#125;&#125;\) ist die größte natürliche Zahl \(i\) mit
                    \(i^2 \leq x\).
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Wir können auch den Suchraum begrenzen: da \(\sqrt&#123;x&#125; \leq x\) für alle natürlichen Zahlen, so
                    gilt:{" "}
                  </Paragraph>
                </Paragraph>
                <div style="text-align:center">
                  <Paragraph>
                    \(\floor&#123;\sqrt&#123;x&#125;&#125;\) ist die größte natürliche Zahl \(i \in \&#123;0,1,\dots,x\&#125;\) mit
                    \(i^2 \leq x\).
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Das Prädikat
                      \begin&#123;align*&#125;
                      &#123;\rm iSquareLessEqualX&#125; (i,x)&amp;= [ i^2 \leq x ]
                      \end&#123;align*&#125;
                      ist primitiv rekursiv:
                      \begin&#123;align*&#125;
                      &#123;\rm iSquareLessEqualX&#125; = \comp(&#123;\rm lessEqual&#125;, \comp(&#123;\rm mult&#125;, \pi
                      <i>
                        0, \pi
                      </i>
                      0), \pi_1)
                      \end&#123;align*&#125;
                      und damit können wir die ganzzahlige Wurzel schreiben als
                    </Paragraph>
                  </Paragraph>
                  <pre class="container">
                    <Paragraph>
                      def largestIbelowTwithISquareLessEqualX(t,x):
                      temp = 0{" "}
                      <span class="comment">
                        = zero(x)
                      </span>
                      for i in range(t):
                      temp = ifThenElse(iSquareLessEqualX(i,x), i, temp){" "}
                      <span class="comment">
                        = Comp(ifThenElse, Comp(iSquareLessEqual, p
                        <i>
                          1, p
                        </i>
                        2), p
                        <i>
                          1, p
                        </i>
                        0) (temp,i,x)
                      </span>
                      return temp
                    </Paragraph>
                  </pre>
                  <Paragraph>
                    <Paragraph>
                      Was geht hier vor? Wenn
                      \(&#123;\rm iSquareLessEqualX&#125;(i,x))\) True ist, dann ersetzen wir temp durch \(i\).
                      Ansonsten belassen wir es beim alten Wert; der endgültige Wert von temp ist
                      also das letzte \(i\), für das das Prädikat True wahr.
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  &#123;\rm largestIbelowTwithISquareLessEqualX = \primrec(zero,
                  \comp(ifThenElse, \comp(iSquareLessEqual, \pi
                  <i>
                    1, \pi
                  </i>
                  2), \pi
                  <i>
                    1, \pi
                  </i>
                  0))&#125;
                  \end&#123;align*&#125;
                  Und schließlich ist
                  \begin&#123;align*&#125;
                  &#123;\rm sqrt&#125; = \comp(&#123;\rm largestIbelowTwithISquareLessEqualX&#125;, \pi
                  <i>
                    0, \pi
                  </i>
                  0)
                  \end&#123;align*&#125;
                  da wir zum Suchen der Wurzel von \(t\) gleich \(t\) als Obergrenze des Suchraumes
                  angeben können. Ganz allgemein können wir für ein Prädikat
                  \(&#123;\rm predicate&#125;(i,x)\) das größte \(i \in \&#123;0,\dots,t\&#125;\) finden, für das
                  \(&#123;\rm predicate&#125;(i,x)\) True ergibt. Da wir wissen, wie wir das primitiv rekursiv
                  machen können, erlauben wir uns, einen neuen Kombinator zu definieren, anstatt
                  diese Konstruktion jedes Mal "von Hand" durchzuführen:
                </Paragraph>
                <Paragraph>
                  <pre class="container">
                    <Paragraph>
                      def LargestLessThan(upperBound, predicate):
                      def new
                      <i>
                        function(*x):
                        temp = 0 
                        for i in range(upperBound(
                        <b>
                          x)):
                          if (predicate(i,
                        </b>
                        x)):
                        temp = i 
                        return temp 
                        return new
                      </i>
                      function
                    </Paragraph>
                  </pre>
                  <Paragraph>
                    <Paragraph>
                      und somit können wir sqrt schreiben als
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  &#123;\rm sqrt&#125; =&#123;\rm LargestLessThan&#125; (\pi_0,&#123;\rm iSquareLessEqual&#125;)
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <h2>
                    <Paragraph>
                      Paare und Listen
                    </Paragraph>
                  </h2>
                  Eine recht stark anmutende Beschränkung primitiv rekursiver Funktionen ist
                  die Tatsache, dass wir in der Schleife nur 
                  {" "}
                  <i>
                    eine
                  </i>
                  {" "}
                  lokale Variable
                  führen dürfen, hier meistens{" "}
                  <code>
                    temp
                  </code>
                  genannt.
                  Manche Funktionen scheinen inhärent mindestens zwei zu benötigen.
                  Betrachten wir den Fall der Fibonacci-Zahlen:
                </Paragraph>
                <Paragraph>
                  <pre class="container">
                    <Paragraph>
                      def fibIterative(t):
                      a = 0
                      b = 1
                      for i in range(t):
                      c = a+b 
                      a = b 
                      b = c 
                      return a
                    </Paragraph>
                  </pre>
                  Wir führen hier zwei lokale Variable, \(a\) und \(b\). Das \(c\) könnten
                  wir mit diesem schönen Trick eliminieren:
                </Paragraph>
                <Paragraph>
                  <pre class="container">
                    <Paragraph>
                      b = a+b 
                      a = b-a{" "}
                    </Paragraph>
                  </pre>
                  Doch selbst dann hätten wir immer noch zwei lokale Variable.
                  Die Fibonacci-Zahlen rekursiv per
                </Paragraph>
                <Paragraph>
                  <code>
                    return F(n-1)+F(n-2)
                  </code>
                  scheint noch weiter weg zu sein
                  vom Paradigma der primitiven Rekursion; primitive Rekursion verzweigt sich nie.
                  Dennoch ist es möglich,{" "}
                  <code>
                    fib
                  </code>
                  primitiv rekursiv zu implementieren.
                  Hauptzutat hierbei ist es, dass wir 
                  {" "}
                  <i>
                    Paare
                  </i>
                  {" "}
                  als neue Datenstruktur
                  verwenden.
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Erinnern Sie sich: die primitive Rekursion stellt uns als Datentyp von Haus aus
                      nur die natürlichen Zahlen zur Verfügung. Alles andere müssen wir nach einem
                      selbst gewählten Schema codieren. Bei Booleschen Werten war es einfach.
                      Wie steht es mit 
                      {" "}
                      <i>
                        Paaren
                      </i>
                      {" "}
                      von natürlichen Zahlen?
                      In{" "}
                      <a href="02-00-infinite-sets.html">
                        Kapitel 2: Unendliche Mengen
                      </a>
                      haben wir
                      die bijektive Funktion
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  \pair : \N^2&amp;\rightarrow \N \\
                  (x,y)&amp;\mapsto&#123;x + y + 1 \choose 2&#125; + x
                  \end&#123;align*&#125;
                  kennengelernt. Diese Funktion ist primitiv rekursiv: es gilt
                  \(&#123;n \choose 2&#125; = 1 + 2 + \cdots + (n-1)\) und somit
                </Paragraph>
                <Paragraph>
                  <pre class="container">
                    <Paragraph>
                      def choose2(t):
                      temp = 0{" "}
                      <span class="comment">
                        = zero()
                      </span>
                      for i in range(t):
                      temp = add(temp,i){" "}
                      <span class="comment">
                        = Comp(add, p0, p1)
                      </span>
                    </Paragraph>
                  </pre>
                  und somit
                  \begin&#123;align*&#125;
                  &#123;\rm choose2&#125;&amp;= \primrec(\zero, \comp(&#123;\rm add&#125;,\pi
                  <i>
                    0,\pi
                  </i>
                  1)) \\
                  \pair&amp;= \comp(&#123;\rm add&#125;, \comp(&#123;\rm choose2&#125;, \comp(&#123;\rm add&#125;, \pi
                  <i>
                    0, \comp(\succ, \pi
                  </i>
                  1)), \pi_0)
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Um die Umkehrfunktionen \(\first, \second\) zu implementieren, die uns aus
                      \(\pair(x,y)\) wieder \(x\) und \(y\) berechnen, bestimmen wir erst
                      den Wert von \(x+y\). Wenn \(\pair(x,y) = n\) gilt und \(x+y=i)\) ist, dann ist
                      \begin&#123;align*&#125;
                      n = \pair(x,y) =&#123;i + 1 \choose 2&#125; + x \geq
                      &#123;i+1 \choose 2&#125; + 0 = \pair(0,i) \ ,
                      \end&#123;align*&#125;
                      und somit ist \(x+y\) der größte Wert von \(i\), so dass \(n \geq \pair(0,i)\) ist.
                      Aus \(x+y\) und \(&#123;x+y+1 \choose 2&#125; + x\) können wir dann leicht \(x\) und \(y\) berechnen:
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  &#123;\rm getXplusY&#125;&amp;=&#123;\rm LargestLessThan&#125;(\pi
                  <i>
                    0, \comp(&#123;\rm greaterEqual&#125;, \pi
                  </i>
                  1, \comp(\pair,
                  \zero, \pi
                  <i>
                    0)))\\
                    \first&amp;= \comp(&#123;\rm minus&#125;, \pi
                  </i>
                  0, \comp(\pair, \zero,&#123;\rm getXplusY&#125;))\\
                  \second&amp;= \comp(&#123;\rm minus&#125;,&#123;\rm getXplusY&#125;, \first)
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Listen können wir implementieren, indem wir Paare verschachtelt zusammenhängen,
                      z.B. \([5,7,9]\) wird zu{" "}
                      <span style="color:red">
                        \(\pair(5, \pair(7, 9))\)
                      </span>
                      . Das ist
                      natürlich
                      inkorrekt:
                    </Paragraph>
                  </Paragraph>
                  <pre class="container">
                    <code class="pythonPrompt">
                      pair(5,pair(7,9))
                    </code>
                    <code class="terminalOutput">
                      11031
                    </code>
                    <code class="pythonPrompt">
                      pair(7,9)
                    </code>
                    <code class="terminalOutput">
                      143
                    </code>
                    <code class="pythonPrompt">
                      pair(5,143)
                    </code>
                    <code class="terminalOutput">
                      11031
                    </code>
                  </pre>
                  <Paragraph>
                    <Paragraph>
                      Das Problem ist, dass wir das Ende der Liste nicht kennen. Wir lösen das Problem, indem
                      wir die leere Liste mit \(0\) codieren und dann aber beim Davorhängen eines Elements
                      1 draufaddieren müssen, also
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  &#123;\rm push&#125; (x,&#123;\rm restlist&#125;)&amp;= 1 + \pair(x,&#123;\rm restlist&#125;) \\
                  &#123;\rm head&#125; (&#123;\rm list&#125;)&amp;= \first(&#123;\rm list&#125; - 1)\\
                  &#123;\rm second&#125; (&#123;\rm list&#125;)&amp;= \second(&#123;\rm list&#125; - 1)
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Jetzt klappt alles wunderbar:
                  </Paragraph>
                </Paragraph>
                <pre class="container">
                  <code class="pythonPrompt">
                    push(11, push(7, push(5, 0)))
                  </code>
                  <code class="terminalOutput">
                    90537
                  </code>
                  <code class="pythonPrompt">
                    head(90537)
                  </code>
                  <code class="terminalOutput">
                    11
                  </code>
                  <code class="pythonPrompt">
                    head(tail(90537))
                  </code>
                  <code class="terminalOutput">
                    7
                  </code>
                  <code class="pythonPrompt">
                    head(tail(tail(90537)))
                  </code>
                  <code class="terminalOutput">
                    5
                  </code>
                </pre>
                <Paragraph>
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Native Implementierung.
                    </b>
                    {" "}
                    Die primitive Rekursion ist
                    ein theoretischer Berechenbarkeitsbegriff für Funktionen
                    auf natürlichen Zahlen. Es ist definitiv keine ernstzunehmende Programmiersprache.
                    Ich finde allerdings, dass es hilfreich ist, sie als Programmiersprache zu begreifen
                    und zu verwenden, rein experimentell. Leider ist sie extrem ineffizient: selbst
                    Subtraktion hat quadratische Komplexität. Längere Listen wie die gerade werden Sie in
                    vertretbarer
                    Zeit nicht behandeln können. Bei meinen eigenen Experimenten mit meinem
                    Python-Framework bin ich daher dazu übergegangen, dass ich, sobald
                    ich gezeigt habe, dass eine Funktion \(f\) primitiv rekursiv ist,
                    sie 
                    {" "}
                    <i>
                      nativ
                    </i>
                    {" "}
                    in Python zu implementieren, also beispielsweise in meiner
                    Datei{" "}
                    <code>
                      stockpile.py
                    </code>
                    :
                  </Paragraph>
                </Paragraph>
                <pre class="listing">
                  <code style="counter-set: listing 63;">
                    def pair(x,y):
                  </code>
                  <code>
                    return int(((x+y+1) * (x+y)) / 2 + x )
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;