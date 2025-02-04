import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
const Article = () => {
  return (
    <Container>
      <Chapter number={40}>
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            <Paragraph>
              Inhaltsverzeichnis
            </Paragraph>
          </a>
          <a href="05-10-not-context-free">
            <Paragraph>
              &lt;&lt; Kapitel 05.10
            </Paragraph>
          </a>
        </div>
        <div id="link-to-overview">
          <a href="/">
            <Paragraph>
              zur Kursübersicht
            </Paragraph>
          </a>
          <a href="07-00-Turing-machines">
            <Paragraph>
              Kapitel 07.00 &gt;&gt;
            </Paragraph>
          </a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle">
                    6. Allgemeine Grammatiken
                  </span>
                </h1>
                <Paragraph>
                  <Paragraph>
                    Wir haben nun ausführlich über kontextfreie Grammatiken gesprochen
                    und auch Sprachen gesehen, die nicht mit kontextfreien Grammatiken
                    zu beschreiben (und somit auch nicht mit Parsern oder allgemein mit
                    Kellerautomaten) zu entscheiden sind. Da stellen sich die folgenden Fragen:
                  </Paragraph>
                </Paragraph>
                <ol>
                  <li>
                    <Paragraph>
                      Wie mann man die Definition kontextfreier Grammatiken sinnvoll erweitern,
                      so dass sie beispielsweise auch Sprachen wie
                      \(\&#123;a^n b^n c^n \ | \ n \geq 0\&#125;\) umfassen?
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Gibt es eine natürliche Barriere, jenseits derer es
                      keinen vernünftigen Begriff des "Beschreiben könnens" gibt?
                      Oder kann man immer noch allgemeinere Regelwerke zulassen?
                    </Paragraph>
                  </li>
                  <li>
                    <Paragraph>
                      Gibt es für die (noch zu definierende) allgemeinere Art von
                      Grammatiken auch eine Art Automat, so wie die endlichen Automaten
                      für die regulären Grammatiken und die Kellerautomaten für die kontextfreien?
                    </Paragraph>
                  </li>
                </ol>
                <Paragraph>
                  Punkt 1 werden wir in diesem Kapitel diskutieren. Punkt 2 und 3 werden Gegenstand
                  des nächsten Kapitels sein, in welchem wir die Turing-Maschinen einführen.
                </Paragraph>
                <h3>
                  <Paragraph>
                    Allgemeine formale Grammatiken
                  </Paragraph>
                </h3>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Definition
                    </span>
                    {" "}{" "}
                    <b>
                      (formale Grammatik)
                    </b>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Eine formale Grammatik ist gegeben durch ein endliches Alphabet
                    \(\Sigma\) aus{" "}
                    <em>
                      Terminalsymbolen
                    </em>
                    , einer endlichen Menge
                    \(\N\) von{" "}
                    <em>
                      Nichtterminalen
                    </em>
                    , einem Startsymbol
                    \(S \in N\) und einer endlichen Menge an Produktionen
                    \begin&#123;align*&#125;
                    \alpha \rightarrow \beta
                    \end&#123;align*&#125;
                    wobei \(\beta \in (\Sigma \cup \Gamma)^*\)
                    und \(\alpha \in (\Sigma \cup \Gamma)^* \setminus \Sigma^*\). Letzeres
                    bedeutet einfach, dass die linke Seite \(\alpha\) mindestens ein
                    Nichtterminal enthalten muss.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Die Definition formaler Grammatik umschließt offensichtlich die der kontextfreien:
                    sie verbietet nicht, dass alle linken Seiten \(\alpha\) aus genau einem
                    Nichtterminal bestehen; in diesem Falle hätten wir eine kontextfreie Grammatik.
                    Sie verbietet auch nicht, dass zusätzlich alle rechten Seiten
                    \(\beta \in \Sigma^* \times N \cup \Sigma^*\) sind, also höchstens ein
                    Nichtterminal enthalten, welches ganz rechts stehen muss. In diesem Falle
                    würde es sich um eine reguläre Grammatik handeln.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Definition
                    </span>
                    {" "}{" "}
                    <b>
                      (Ableitung und erzeugte Sprache)
                    </b>
                    {" "}
                    . Sei \(G\) eine formale
                    Grammtik und \(\gamma_1, \gamma_2 \in (\Sigma\cup N)^* \) zwei Wortformen.
                    Wir schreiben \(\gamma_1 \Step&#123;&#125; \gamma_2\), wenn wir
                    \begin&#123;align*&#125;
                    \gamma
                    <i>
                      1&amp;= u \alpha v \\
                      \gamma
                    </i>
                    2&amp;= u \beta v
                    \end&#123;align*&#125;
                    schreiben können für Wortformen \(u,v\), sodass \(\alpha \rightarrow \beta\) eine
                    Produktion von \(G\) ist.
                  </Paragraph>
                </div>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Beispiel
                    </span>
                    Betrachten wir die allgemeine Grammatik mit
                    Terminalalphabet \(\Sigma = \&#123;a,b,c\&#125;\), Nichtterminalsymbolen
                    \(N = \&#123;S, A, B, C\&#125;\), Startsymbol \(S\) und den Produktionen
                    \begin&#123;align*&#125;
                    S&amp;\step&#123;1&#125; ABCS \ | \ \epsilon \\
                    AB&amp;\step&#123;2&#125; BA \\
                    BA&amp;\step&#123;3&#125; AB \\
                    AC&amp;\step&#123;4&#125; CA \\
                    CA&amp;\step&#123;5&#125; AC \\
                    BC&amp;\step&#123;6&#125; CB \\
                    CB&amp;\step&#123;7&#125; BC \\
                    A&amp;\step&#123;8&#125; a \\
                    B&amp;\step&#123;9&#125; b \\
                    C&amp;\step&#123;10&#125; c
                    \end&#123;align*&#125;
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Nun schauen wir uns eine Beispielableitung an:
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125;
                    S \Step&#123;1&#125; ABCS \Step&#123;1&#125; ABCABCS \Step&#123;2&#125;
                    ABCABC \Step&#123;5&#125; ABACBC \Step&#123;3&#125; AABCBC
                    \Step&#123;8,8,9,9,10,10&#125;^* aabcbc
                    \end&#123;align*&#125;
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Die obige Beispielableitung illustriert, dass allgemeine formale Grammatiken
                    etwas können, das kontextfreie Grammatiken nicht bieten konnten:
                    das Vertauschen von Symbolen. Das mag nicht als besonders viel erscheinen,
                    wird sich aber als{" "}
                    <em>
                      Game Changer
                    </em>
                    herausstellen.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Sobald wir eine Wortform erreicht haben, die nur aus Terminalsymbolen
                    besteht (also ein{" "}
                    <em>
                      Wort
                    </em>
                    geworden ist), muss unsere Ableitung
                    aufhören: wir können keine weitere Produktion anwenden, da jede
                    linke Seite mindestens ein Nichtterminal enthält. Diese Einschränkung
                    in der Definition allgemeiner formaler Grammatiken ist nicht wirklich
                    notwenig, sie macht Dinge allerdings klar, wo eine Ableitung zu Ende ist / sein muss.
                    Es handelt sich also gewissermaßen um das Gegenteil von Syntax-Antizucker (mir ist
                    gerade keine Substanz eingefallen, deren Geschmack universell als abstoßend empfunden wird).
                    Wir können Grammatiken, die verbotene Produktionen der Form
                    \(\alpha \rightarrow \beta\) mit
                    \(\alpha \in \Sigma^*\) enthalten, immer "auf Linie" bringen, indem
                    wir jedes Terminalsymbol \(x\) in den Produktionen durch ein neues Nichtterminal
                    \(X\) ersetzen und schließlich Produktionen \(X \rightarrow x\) einführen.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Beispiel
                    </span>
                    Versuchen wir nun, eine allgemeine formale Grammatik für die Sprache
                    \begin&#123;align*&#125;
                    L = \&#123;a^nb^nc^n \ | \ n \geq 0\&#125;
                    \end&#123;align*&#125;
                    zu erstellen. Wir haben ja bereits gesehen, dass es zu dieser Sprache keine
                    kontextfreie Grammatik gibt. Als ersten Versuch kopieren wir
                    die obige Grammatik, allerdings lassen wir nur die Vertauschungsregeln zu, die
                    die Buchstaben in die richtige Reihenfolge bringen:
                    \begin&#123;align*&#125;
                    S&amp;\step&#123;&#125; ABCS \ | \ \epsilon \\
                    BA&amp;\step&#123;&#125; AB \\
                    CA&amp;\step&#123;&#125; AC \\
                    CB&amp;\step&#123;&#125; BC \\
                    A&amp;\step&#123;&#125; a \\
                    B&amp;\step&#123;&#125; b \\
                    C&amp;\step&#123;&#125; c
                    \end&#123;align*&#125;
                    Offensichtlich kann jedes Wort in \(L\) erzeugt werden, allerdings
                    auch Wörter wie \(abcabc\), die nicht in \(L\) sind. Können wir
                    die erzeugte Sprache beschreiben? Ich glaube, es ist die Sprache
                    aller \(abc\)-Wörter \(w\) mit
                    gilt
                    \begin&#123;align*&#125;
                    &amp;\#
                    <i>
                      a(w) \geq \#
                    </i>
                    b(w) \geq \#
                    <i>
                      c(w) \quad \textnormal&#123;und&#125; \\
                      &amp;\#
                    </i>
                    a(v) \geq \#
                    <i>
                      b(v) \geq \#
                    </i>
                    c(v) \quad \textnormal&#123;für alle Präfixe $v$ von $w$&#125;
                    \end&#123;align*&#125;
                    wobei \(\#_b(v)\) die Anzahl der in \(v\) enthaltenen \(b\) ist.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Nachdem also unser erster Versuch gescheitert ist, unternehmen wir einen
                      zweiten. Wir stellen uns die Ableitung als aus zwei Phasen
                      bestehend vor. In der ersten wird eine Wortform
                      \(w \in \&#123;A,B,C\&#125;\) erzeugt mit
                      \begin&#123;align*&#125;
                      \#
                      <i>
                        A(w) = \#
                      </i>
                      B(w) = \#_C(w)
                      \end&#123;align*&#125;
                      erzeugt. In einer zweiten wandert ein Kontrollsymbol
                      von links nach rechts durch und wandelt jeden Großbuchstaben
                      in einen Kleinbuchstaben um, weigert sich aber bei
                      Großbuchstaben, die in der falschen Reihenfolge stehen.
                      Wir brauchen nun sieben Nichtterminale
                      \(N = \&#123;S,A,B,C,X,Y,Z\&#125;\). Für \(S\) haben wir die Produktionen
                      \begin&#123;align*&#125;
                      S&amp;\step&#123;1&#125; SABC \\
                      S&amp;\step&#123;2&#125; X
                      \end&#123;align*&#125;
                      so dass \(S \Step&#123;&#125;^* X (ABC)^n\) gilt. Als nächstes brauchen wir
                      die Vertauschregeln, um alles in die richtige Reihenfolge zu bringen:
                      \begin&#123;align*&#125;
                      BA&amp;\step&#123;3&#125; AB \\
                      CA&amp;\step&#123;4&#125; AC \\
                      CB&amp;\step&#123;5&#125; BC
                      \end&#123;align*&#125;
                      Die Nichtterminale \(X,Y,Z\) stehen für folgendes:
                    </Paragraph>
                  </Paragraph>
                  <ul>
                    <li>
                      <Paragraph>
                        \(X\): will \(A\) in \(a\) umwandeln:
                        \begin&#123;align*&#125;
                        XA&amp;\step&#123;6&#125; aX
                        \end&#123;align*&#125;
                        Zu jedem Zeitpunkt können wir beschließen, nun keine
                        \(A\) in \(a\) mehr umzuwandeln, sondern nun \(B\)-Symbole zu erwarten:
                        \begin&#123;align*&#125;
                        X&amp;\step&#123;7&#125; Y
                        \end&#123;align*&#125;
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        \(Y\): will \(B\) in \(b\) umwandeln oder mit \(C\) fortfahren:
                        \begin&#123;align*&#125;
                        YB&amp;\step&#123;8&#125; bY \\
                        Y&amp;\step&#123;9&#125; Z
                        \end&#123;align*&#125;
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        \(Z\): will \(C\) in \(c\) umwandeln. Wir
                        können aber auch einfach aufhören, zum Beispiel
                        wenn wir den rechten Rand erreicht haben:
                        \begin&#123;align*&#125;
                        ZC&amp;\step&#123;10&#125; cZ \\
                        Z&amp;\step&#123;11&#125; \epsilon
                        \end&#123;align*&#125;
                      </Paragraph>
                    </li>
                  </ul>
                  <Paragraph>
                    <Paragraph>
                      Nun müssen wir zeigen, dass die Grammatik die Sprache \(L\) erzeugt. Für
                      jedes Wort \(a^n b^n c^n \in L \) müssen wir zeigen, dass wir es ableiten können:
                      \begin&#123;align*&#125;
                      &amp;S \Step&#123;1&#125;^* S(ABC)^n \Step&#123;2&#125; X(ABC)^n
                      \Step&#123;3,4,5&#125;^* X A^n B^n C^n\\
                      &amp;\Step&#123;6&#125;^* a^n X B^n C^n
                      \Step&#123;7&#125; a^n Y B^n C^n
                      \Step&#123;8&#125;^* a^n b^n Y C^n
                      \Step&#123;9&#125; a^n b^n Z C^n
                      \Step&#123;10&#125;^* a^n b^n c^n Z
                      \Step&#123;11&#125;^* a^n b^n c^n
                      \end&#123;align*&#125;
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Als zweites müssen wir zeigen, dass jedes abgeleitete Wort
                      \(S \Step&#123;&#125;^* w \in \&#123;a,b,c\&#125;^*\) auch in \(L\) ist,
                      also die Form \(a^n b^n c^n\) haben. Wir machen das
                      nur zu 80% formal.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Die erste Beobachtung ist: solange \(S\) in der Wortform \(\beta\)
                      vorkommt, hat diese die Form \(\beta = S \gamma\)
                      mit \(\gamma \in \&#123;A,B,C\&#125;^*\) enthält gleich viele
                      \(A\) wie \(B\) wie \(C\).
                    </Paragraph>
                  </Paragraph>
                  <div class="well subtheorem theorem">
                    <Paragraph>
                      <span class="numbered-title">
                        Behauptung
                      </span>
                      Sei \(\#_&#123;A,a&#125;(\beta)\) die Anahl der \(A\) und \(a\) in der Wortform \(\beta\).
                      Wenn \(S \Step&#123;&#125; \beta\), dann gilt
                    </Paragraph>
                    <ol>
                      <li>
                        <Paragraph>
                          \(\#_&#123;A,a&#125;(\beta) = \#_&#123;B,b&#125;(\beta) = \#_&#123;C,c&#125;(\beta)\)
                        </Paragraph>
                      </li>
                      <li>
                        <Paragraph>
                          Außer \(A,a,B,b,C,c\) enthält \(\beta\) höchstens ein
                          weiteres Symbol, und dies ist in \(\&#123;S,X,Y,Z\&#125;\).
                        </Paragraph>
                      </li>
                      <li>
                        <Paragraph>
                          Wenn \(\beta\) das Symbol \(X\) enthält, dann ist
                          \(\beta = a^* X \gamma \).
                          Wenn es \(Y\) enthält, dann ist
                          \(\beta = a^* b^* Y \gamma \).
                          Wenn es \(Z\) enthält, dann ist es
                          \(\beta = a^* b^* c^* Z \gamma\).
                          In allen drei Fällen enthält \(\gamma\) keine Terminalsymbole.
                        </Paragraph>
                      </li>
                      <li>
                        <Paragraph>
                          Wenn es kein Symbol in \(S,X,Y,Z\) enthält, dann ist es von
                          der Form \(\beta = a^* b^* c^* \gamma\) und \(\gamma\) enthält
                          keine Terminalsymbole.
                        </Paragraph>
                      </li>
                    </ol>
                  </div>
                  <Paragraph>
                    Wir behaupten also, dass das \(\gamma\) in Punkt 3 aus den Nichtterminalen
                    \(A,B,C\) besteht, die jedoch nicht in der korrekten Reihenfolge sein müssen.
                    Wir können auch gar nicht verbieten, dass in einer Ableitung
                    die Vertausch-Regeln 3,4,5 und die Kontroll-Regeln 6,7,8,9,10,11
                    vermischt angewandt werden.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Die Behauptung kann man beispielsweise mit Induktion über die
                      Länge der Ableitung zeigen. Intuitiv gesprochen: Sie gilt unmittelbar,
                      nachdem \(S \rightarrow X\) angewandt wurde; danach
                      überträgt sich ihre Gültigkeit Schritt
                      für Schritt (z.B. weil Terminalsymbol immer nur links vom Symbol \(X / Y / Z\)
                      erzeugt werden können).
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wenn nun also \(S \rightarrow a^* b^* c^* \gamma\) und \(\gamma\) kein
                      Nichtterminal \(S,X,Y,Z\) enthält, also \(\gamma \in \&#123;A,B,C\&#125;^*\), dann
                      können keine weiteren Produktionen angewandt werden und die
                      Ableitung endet. Wenn das also ein Wort sein soll, muss
                      \(\gamma = \epsilon\) gelten und somit \(\beta = a^* b^* c^*\) gelten.
                      Da nach Behauptung die Anzahl der drei Symbole gleich sein muss,
                      gilt also \(\beta = a^n b^n c^n\) und somit \(\beta \in L\).
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Beispiel
                    </span>
                    Im{" "}
                    <a href="./05-10-not-context-free.html">
                      <Paragraph>
                        Teilkapitel 5.10
                      </Paragraph>
                    </a>
                    gab
                    es{" "}
                    <a href="./05-10-not-context-free.html#exericse-power-2">
                      <Paragraph>
                        Übungsaufgabe 5.10.2
                      </Paragraph>
                    </a>
                    ,
                    in der zu zeigen war, dass
                    \begin&#123;align*&#125;
                    L = \&#123; 1^n \ | \ n = 2^d \textnormal&#123; für ein $d \in \N$&#125;\&#125;
                    \end&#123;align*&#125;
                    nicht kontextfrei ist. Allerdings ist \(L\) kein sehr kompliziertes Gebilde.
                    So könnten Sie recht einfach ein Programm schreiben, dass für ein Eingabewort
                    prüft, ob es in \(L\) ist. Können wir also auch eine formale Grammatik
                    schreiben?
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Dies geht sogar nohc einfacher als die obigen Sprachen. Wir
                      schaffen eine Startregel:
                      \begin&#123;align*&#125;
                      S&amp;\step&#123;1&#125; L1R
                      \end&#123;align*&#125;
                      Die Nichtterminale \(L\) und \(R\) zeigen den linken und rechten Rand an.
                      Wir können am linken Rand einen "Verdopplungssymbol" \(D\) erzeugen. Dies
                      kann nur nach rechts durchwandern und bei \(R\) verschwinden und verdoppelt dabei
                      jede \(1\), die es trifft:
                      \begin&#123;align*&#125;
                      L&amp;\step&#123;2&#125; LD \\
                      D1&amp;\step&#123;3&#125; 11D \\
                      DR&amp;\step&#123;4&#125; R
                      \end&#123;align*&#125;
                      Schlussendlich definieren wir End-Produktionen, die die Randmarkierungen
                      löschen:
                      \begin&#123;align*&#125;
                      L&amp;\step&#123;5&#125; \epsilon \\
                      R&amp;\step&#123;6&#125; \epsilon
                      \end&#123;align*&#125;
                      Hier sehen Sie nun ein Beispiel für eine Ableitung:
                      \begin&#123;align*&#125;
                      S \Step&#123;1&#125; L1R \Step&#123;2&#125; LD1R \Step&#123;3&#125; L11DR
                      \Step&#123;2&#125; LD11DR \Step&#123;3&#125; L11D1DR
                      \Step&#123;4&#125; L11D1R \Step&#123;3&#125; L1111R \Step&#123;5&#125; 1111R \Step&#123;6&#125; 1111
                      \end&#123;align*&#125;
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Wagen wir ein letztes Beispiel: die Sprache aller Wörter,
                    deren Länge eine Quadratzahl ist. Spätestens dieses Beispiel sollte Sie
                    davon überzeugen, dass allgemeine formale Gramatiken, im Gegensatz zu
                    kontextfreien und regulären, nicht nur{" "}
                    <em>
                      Formate
                    </em>
                    syntaktisch
                    beschreiben, sondern komplizierte Rechnungen durchführen können.
                    Sie stellen somit ein völlig andersartiges Biest dar.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Beispiel
                    </span>
                    Sei \(L\) die Sprache aller Wörter über
                    \(\Sigma = \&#123;1\&#125;\), deren Länge eine Quadratzahl ist.
                    Wir werden als erstes eine{" "}
                    <em>
                      Multiplikationsgrammatik
                    </em>
                    erzeugen.
                    Dies soll eine Menge von Produktionen sein, die Ableitungen der Form
                    \begin&#123;align*&#125;
                    L A^m B^n R \Step&#123;&#125; L \tilde&#123;A&#125;^m B^n C^&#123;mn&#125; R
                    \end&#123;align*&#125;
                    ermöglicht. Wenn wir dies geschafft haben, sind wir fertig. Mittels
                    \begin&#123;align*&#125;
                    S&amp;\rightarrow L S' R \\
                    S'&amp;\rightarrow A S' B \ | \ \epsilon
                    \end&#123;align*&#125;
                    können wir alle \(S \Step&#123;&#125;^* L A^m B^m R\) ableiten.
                    Die Multiplikationsgrammatik wandelt uns dies in
                    \(L A^m B^m C^&#123;m^2&#125; T\) um. Schlussendlich führen
                    wir ein Killersymbol \(K\) ein, das bei \(T\) entsteht und sich
                    nach links durcharbeitet, dabei die \(C\) in \(1)\ umwandelt
                    und die \(\tilde&#123;A&#125;,B\) durch \(\epsilon\) ersetzt:
                    \begin&#123;align*&#125;
                    R&amp;\rightarrow K \\
                    CK&amp;\rightarrow K1 \\
                    BK&amp;\rightarrow K \\
                    \tilde&#123;A&#125;K&amp;\rightarrow K \\
                    LK&amp;\rightarrow \epsilon
                    \end&#123;align*&#125;
                    Es bleibt also, die Multiplikationsgrammatik zu entwerfen, die,
                    um es zu wiederholen,
                    \begin&#123;align*&#125;
                    L A^m B^n R \Step&#123;&#125; L \tilde&#123;A&#125;^m B^n C^&#123;mn&#125; R
                    \end&#123;align*&#125;
                    ermöglicht, aber nicht wirklich viel mehr. Wir erschaffen die Produktion
                    \begin&#123;align*&#125;
                    A&amp;\rightarrow \tilde&#123;A&#125; X
                    \end&#123;align*&#125;
                    Das neue Nichtterminal \(\tilde&#123;A&#125;\) bedeutet soviel wie "ein \(A\), das bereits
                    abgearbeitet worden ist." Das Nichtterminal \(X\) bedeutet:
                    erzeuge rechts vom \(B\)-Block einen \(C\)-Block gleicher Länge.
                    Wir wollen also
                    \begin&#123;align*&#125;
                    L \tilde&#123;A&#125;^i X A^j B^n R \Step&#123;&#125;
                    L \tilde&#123;A&#125;^i A^j B^n C^n R
                    \end&#123;align*&#125;
                    Die einfachste Möglichkeit ist vielleicht, das
                    \(X\) nach rechts durchrutschen zu lassen und dabei
                    jedes \(B\) durch ein \(B \tilde&#123;C&#125;\) ersetzen zu lassen:
                    \begin&#123;align*&#125;
                    XA&amp;\rightarrow AX \\
                    XB&amp;\rightarrow B \tilde&#123;C&#125;X\\
                    XR&amp;\rightarrow R\\
                    X\tilde&#123;C&#125;&amp;\rightarrow \tilde&#123;C&#125;X
                    \end&#123;align*&#125;
                    Das \(X\) erzeugt also von seinem Entstehen bis zu seinem Verschwinden bei \(R\)
                    genau \(n\) viele \(\tilde&#123;C&#125;\)-Symbole. Wir erstellen nun Regeln,
                    die uns zwingen, jedes \(\tilde&#123;C&#125;\) nach rechts laufen zu lassen,
                    wo sie in ein \(C\) umgewandelt werden können:
                    \begin&#123;align*&#125;
                    \tilde&#123;C&#125; B&amp;\rightarrow B \tilde&#123;C&#125; \\
                    \tilde&#123;C&#125; C&amp;\rightarrow C \tilde&#123;C&#125; \\
                    \tilde&#123;C&#125; R&amp;\rightarrow R
                    \end&#123;align*&#125;
                    Überzeugen wir uns, dass dies den gewünschten Effekt hat.
                  </Paragraph>
                  <ul>
                    <li>
                      <Paragraph>
                        Wir können \(R\) nur loswerden, indem wir es in das
                        Killersymbol \(K\) umwandeln. Das Killersymbol kann
                        nur bei \(L\) verschwinden. Dazwischen kann es
                        nur die Zeichen \(\tilde&#123;A&#125;, B, C\) passieren.
                        Zum Zeitpunkt, wo wir \(R \rightarrow K\) anwenden,
                        darf die Wortform also keine \(A\)-Symbole mehr enthalten.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Wir können eine \(A\) nur verschwinden lassen
                        durch \(A \rightarrow \tilde&#123;A&#125; X\) und \(X\) nur
                        auf diese Weise entstehen lassen. Wir produzieren also,
                        wenn wir mit \(L A^m B^n R\) beginnen, im Laufe der Ableitung genau
                        \(m\) mal ein \(X\).
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Um ein \(X\) wieder verschwinden zu lassen, muss es den ganzen
                        \(B\)-Block durchlaufen und produziert damit insgesamt \(n\) viele
                        (\tilde&#123;C&#125;\).
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Da wir insgesamt \(m\) viele \(X\) produzieren und jedes
                        \(X\) insgesamt \(n\) viele \(\tilde&#123;C&#125;\) produziert, werden
                        insgesamt \(mn\) viele \(\tilde&#123;C&#125;\) erzeugt.
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Jedes \(\tilde&#123;C&#125;\) kann nur in ein \(C\) umgewandelt werden.
                        Es entstehen also insgesamt \(mn\) viele \(C\).
                      </Paragraph>
                    </li>
                  </ul>
                  <Paragraph>
                    <Paragraph>
                      Wenn wir also aus
                      \(L A^m B^n R\) ein Wort ableiten, so
                      muss zum Zeitpunkt der Produktion \(R \rightarrow K\)
                      die Wortform so aussehen:
                      \begin&#123;align*&#125;
                      \tilde&#123;A&#125;^m B^n C^&#123;mn&#125; R \Step&#123;&#125; \tilde&#123;A&#125;^m B^n C^&#123;mn&#125; K
                      \end&#123;align*&#125;
                      Wir können die Produktion \(R \step&#123;&#125; K\) zwar schon früher
                      anwenden; wenn da allerdings noch \(A\)- oder \(\tilde&#123;C&#125;\)-Symbole
                      enthalten sind, ist es{" "}
                      <em>
                        game over
                      </em>
                      : wir könnten die nie
                      mehr in Terminale umwandeln.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      In einer leichten Variation können wir auch die Sprache
                      \begin&#123;align*&#125;
                      \&#123;a^m b^n c^&#123;mn&#125; \ | \ m,n \geq 0 \&#125;
                      \end&#123;align*&#125;
                      erzeugen.
                    </Paragraph>
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Die Sprache \&#123;a^m b^n c^&#123;m+n&#125;\&#125; können wir eh: die ist sogar kontextfrei.
                    Wir können also Arithmetik mit formalen Grammatiken "programmieren".
                  </Paragraph>
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Geben Sie ein formale Grammatik für
                    \begin&#123;align*&#125;
                    L = \&#123;w\texttt&#123;:&#125;w \ | \ w \in \&#123;a,b\&#125;^* \&#125;
                    \end&#123;align*&#125;
                    an. Dies ist auch ein Paradebeispiel für eine Sprache, die nicht kontextfrei ist.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Überlegen Sie, wie man "lineare Suche" implementieren könnte:
                  </Paragraph>
                </Paragraph>
                <div class="well well-lg numbered-exercise container">
                  <Paragraph>
                    <span class="numbered-title">
                      Übungsaufgabe
                    </span>
                    Sei \(L\) die Sprache über \(\Sigma = \&#123;a,b,:,;\&#125;\)
                    mit
                    \begin&#123;align*&#125;
                    L := w:w
                    <i>
                      1;w
                    </i>
                    2; \dots; w_n
                    \end&#123;align*&#125;
                    mit \(w, w_1, \dots, w_n \in \&#123;a,b\&#125;^*\).
                    Sie implementiert also im Prinzip die Funktion
                  </Paragraph>
                  <Paragraph>
                    <pre>
                      <Paragraph>
                        List.member x list
                      </Paragraph>
                    </pre>
                    die überprüft, ob \(x\) in der angegebenen Liste enthalten ist:
                    \begin&#123;align*&#125;
                    abba\text&#123;:&#125;aaaaaaa\text&#123;;&#125;abbbb\text&#123;;&#125;abba\text&#123;;&#125;bbbb \in L \\
                    abba\text&#123;:&#125;aaaaaaa\text&#123;;&#125;abbbb\text&#123;;&#125;abbba\text&#123;;&#125;bbbb \not \in L \\
                    \end&#123;align*&#125;
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                    <b>
                      Tip:
                    </b>
                    {" "}
                    das ist einfach, wenn Sie bereits eine Grammatik
                    für das vorherige Problem haben. Erzeugen Sie
                    \(wXwY\) und lassen dann aus \(X\) und \(Y\) den Rest der Liste entstehen.
                  </Paragraph>
                </div>
                <Paragraph>
                  <Paragraph>
                    Sie haben sicherlich gemerkt, dass wir die Grammatikproduktionen nun nicht
                    mehr nur zum{" "}
                    <em>
                      Erzeugen
                    </em>
                    verwenden wie bei kontextfreien Sprachen, sondern zum
                    Umformen, Rumschieben, Kopieren etc. Es ist nun an der Zeit, die
                    Welt der Grammatiken zu verlassen und zu formalisieren, was man
                    mit Umformen, Rumschieben, Kopieren erreichen kann. In anderen Worten:
                    eine Formalisierung des Begriffs des{" "}
                    <em>
                      Berechnens
                    </em>
                    .
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