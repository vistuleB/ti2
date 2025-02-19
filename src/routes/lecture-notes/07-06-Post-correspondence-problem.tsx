import Chapter from "~/components/Section";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        title="Post correspondence problem"
        number={7.6}
        path="/lecture-notes52.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">Inhaltsverzeichnis</a>
          <a href="07-05-undecidability">&lt;&lt; Kapitel 7.5</a>
        </div>
        <div id="link-to-overview" style="text-align: end">
          <a href="/">zur Kursübersicht</a>
          <a href="07-07-PCP-applications">Kapitel 7.7 &gt;&gt;</a>
        </div>
        <div id="rightSideWrapper">
          <div class="content">
            <div class="chapter">
              <div class="subChapter">
                <h1 class="hidden-title">
                  <span class="subChapterTitle" />
                </h1>
                <Paragraph>
                  <Paragraph>
                    Die Unentscheidbarkeit des Halteproblems mag auf den ersten
                    Blick esoterisch anmuten. Es taucht ja nur auf, weil die
                    Problemstellung irgendwie selbstreferenziell ist. Das
                    täuscht: Unentscheidbarkeit taucht in vielen Bereichen der
                    theoretischen Informatik und der Mathematik auf, auch bei
                    Fragestellungen, die auf den ersten Blick nichts mit
                    Turingmaschinen zu tun haben und völlig harmlos wirken. Wie
                    zum Beispiel das rein kombinatorische{" "}
                    <i>Postsche Korrespondenzproblem.</i>{" "}
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Im Postschen Korrespondenzproblem haben wir endlich viele
                    Kärtchen (auch <i>Kacheln</i> genannt) gegeben, die oben und
                    unten jeweils ein Wort haben. Wir müssen die Kärtchen so
                    nebeneinander legen, dass oben und unten das gleiche Wort
                    entsteht; jedes Kärtchen kann beliebig oft verwendet werden.
                    Im folgenden Beispiel wird das beige-farbene Kärtchen
                    zweimal verwendet:
                  </Paragraph>
                </Paragraph>
                <figure class="centered-figure well container">
                  <a
                    data-slide="prev"
                    href="#pcp-wikipedia"
                    class="left carousel-control-prev-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <a
                    data-slide="next"
                    href="#pcp-wikipedia"
                    class="right carousel-control-next-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <div
                    style="display:inline-block"
                    data-interval={false}
                    class="carousel"
                    id="pcp-wikipedia">
                    <ol class="carousel-indicators">
                      <li
                        class="active"
                        data-slide-to={1}
                        data-target="#pcp-wikipedia"
                      />
                      <li data-slide-to={2} data-target="#pcp-wikipedia" />
                      <li data-slide-to={3} data-target="#pcp-wikipedia" />
                      <li data-slide-to={4} data-target="#pcp-wikipedia" />
                      <li data-slide-to={5} data-target="#pcp-wikipedia" />
                      <li data-slide-to={6} data-target="#pcp-wikipedia" />
                      <li data-slide-to={7} data-target="#pcp-wikipedia" />
                      <li data-slide-to={8} data-target="#pcp-wikipedia" />
                      <li data-slide-to={9} data-target="#pcp-wikipedia" />
                    </ol>
                    <div style="display:inline-block" class="carousel-inner">
                      <div class="item active">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </div>
                  </div>
                </figure>
                <Paragraph>
                  <Paragraph>(Diese Beispielinstanz ist von</Paragraph>
                  <Paragraph>
                    <a href="https://en.wikipedia.org/wiki/Post_correspondence_problem">
                      Wikipedia
                    </a>
                    ; die graphische Darstellung stammt von mir.)
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Schauen wir uns ein weiteres, komplizierteres Beispiel an.
                    Hier führen wir eine Sonderregel ein, nämlich dass man mit
                    der türkisen Kachel (der ersten) anfangen muss:
                  </Paragraph>
                </Paragraph>
                <figure class="centered-figure well container">
                  <a
                    data-slide="prev"
                    href="#pcp-expo"
                    class="left carousel-control-prev-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <a
                    data-slide="next"
                    href="#pcp-expo"
                    class="right carousel-control-next-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <div
                    style="display:inline-block"
                    data-interval={false}
                    class="carousel"
                    id="pcp-expo">
                    <ol class="carousel-indicators">
                      <li
                        class="active"
                        data-slide-to={1}
                        data-target="#pcp-expo"
                      />
                      <li data-slide-to={2} data-target="#pcp-expo" />
                      <li data-slide-to={3} data-target="#pcp-expo" />
                      <li data-slide-to={4} data-target="#pcp-expo" />
                      <li data-slide-to={5} data-target="#pcp-expo" />
                      <li data-slide-to={6} data-target="#pcp-expo" />
                      <li data-slide-to={7} data-target="#pcp-expo" />
                      <li data-slide-to={8} data-target="#pcp-expo" />
                      <li data-slide-to={9} data-target="#pcp-expo" />
                      <li data-slide-to={10} data-target="#pcp-expo" />
                      <li data-slide-to={11} data-target="#pcp-expo" />
                      <li data-slide-to={12} data-target="#pcp-expo" />
                      <li data-slide-to={13} data-target="#pcp-expo" />
                      <li data-slide-to={14} data-target="#pcp-expo" />
                      <li data-slide-to={15} data-target="#pcp-expo" />
                      <li data-slide-to={16} data-target="#pcp-expo" />
                      <li data-slide-to={17} data-target="#pcp-expo" />
                      <li data-slide-to={18} data-target="#pcp-expo" />
                      <li data-slide-to={19} data-target="#pcp-expo" />
                      <li data-slide-to={20} data-target="#pcp-expo" />
                      <li data-slide-to={21} data-target="#pcp-expo" />
                      <li data-slide-to={22} data-target="#pcp-expo" />
                      <li data-slide-to={23} data-target="#pcp-expo" />
                      <li data-slide-to={24} data-target="#pcp-expo" />
                      <li data-slide-to={25} data-target="#pcp-expo" />
                    </ol>
                    <div style="display:inline-block" class="carousel-inner">
                      <div class="item active">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                      <div class="item">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </div>
                  </div>
                </figure>
                <Paragraph>
                  <Paragraph>
                    Können Sie das zweie PCP-Puzzle lösen und zu Ende führen?
                    Informell sehen wir bereits: um das Puzzle zu lösen, müssen
                    wir die \(\texttt&#123;x&#125;\) loswerden. Das geht nur,
                    indem wir jedes \(\texttt&#123;x&#125;\) mit Hilfe des
                    fünften (beigefarbenen) Kärtchens nach rechts schieben, bis
                    es auf ein \(\texttt&#123;a&#125;\) stösst, wo wir es mit
                    dem sechsten (violetten) verschwinden lassen können. Jedes
                    \(\texttt&#123;x&#125;\) verdoppelt also die Anzahl der
                    Einsen. Dieses PCP "berechnet" in gewisser Weise die
                    Funktion \(n \mapsto 2^n\). In ganz ähnlicher Weise können
                    wir zu jeder Turingmaschine ein PCP-Puzzle bauen, das diese
                    Maschine "simuliert". Aber eins nach dem anderen. Wir
                    beginnen mit Terminologie.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">
                      Definition (Postsches Korrespondenz-Problem, PCP)
                    </span>
                    Sei \(\Sigma\) ein endliches Alphabet.
                  </Paragraph>
                  <ul>
                    <li>
                      Eine <i>Kachel</i> (auch <i>Kärtchen</i> genannt) ist ein
                      Paar \((\alpha : \beta) \in \Sigma^* \times \Sigma^*\).
                      Hier bezeichnet \(\alpha\) das Wort auf der oberen Hälfte
                      der Kachel und \(\beta\) das auf der unteren.
                    </li>
                    <li>
                      Ein PCP-Puzzle (oder einfach nur Puzzle in diesem
                      Zusammenhang) ist eine endliche Menge \(S\) von Kacheln.
                    </li>
                    <li>
                      Eine Kachelung ist eine Folge \(s\) von Kacheln aus \(S\),
                      also \begin&#123;align*&#125; s = (\alpha
                      <i>&#123;1&#125; : \beta</i>
                      &#123;1&#125;) (\alpha
                      <i>&#123;2&#125; : \beta</i>
                      &#123;2&#125;) \dots (\alpha
                      <i>&#123;m&#125; : \beta</i>
                      &#123;m&#125;) \end&#123;align*&#125; Für eine Kachelung
                      \(s\) definieren wir den <i>oberen Teil</i> \(\top(s)\)
                      und den <i>unteren Teil</i> \(\bottom(s)\):
                      \begin&#123;align*&#125; \top(s)&amp;:= \alpha
                      <i>1 \alpha</i>2 \dots \alpha
                      <i>m \\ \bottom(s)&amp;:= \beta</i>1 \beta
                      <i>2 \dots \beta</i>m \\ \end&#123;align*&#125;
                    </li>
                    <li>
                      Eine Kachelung \(s\) ist eine <i>Lösung</i> des Puzzles,
                      wenn \(\top(s) = \bottom(s)\) gilt.
                    </li>
                  </ul>
                </div>
                <Paragraph>
                  <Paragraph>
                    Illustrieren wir die Definitionen noch einmal anhand des
                    ersten Beispiels:
                  </Paragraph>
                </Paragraph>
                <figure>
                  <img src="../img/carousel-prev-icon.svg" />
                </figure>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Das Puzzle besteht aus drei Kacheln:
                      \begin&#123;align*&#125; k<i>1&amp;:= (a : baa) \\ k</i>
                      2&amp;:= (ab : aa) \\ k_3&amp;:= (bba : bb) \ .
                      \end&#123;align*&#125; Oben sehen wir eine Kachelung \(s
                      := k_3 k_2 k_3\) und \begin&#123;align*&#125;
                      \top(s)&amp;= bbaabbba \\ \bottom(s)&amp;= bbaabb \ .
                      \end&#123;align*&#125; Die Kachelung \(k_3 k_2 k_3\) ist
                      noch keine Lösung, aber \(k_3 k_2 k_3 k_1\) ist eine.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Für ein festes \(\Sigma\) können wir natürlich ein
                      PCP-Puzzle codieren, indem wir die Menge \(S\) der Kacheln
                      codieren, z.B. über dem Alphabet \(\Sigma \cup \&#123;(,
                      :, )\&#125;\). Das erste Beispielpuzzle \(S\) wäre dann
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125; \enc(S) := (a:baa)(ab:aa)(bba:bb)
                  \end&#123;align*&#125; Somit können wir das Postsche
                  Korrespondenzproblem formal als Sprache definieren:
                  \begin&#123;align*&#125; &#123;\rm PCP&#125; := \&#123;
                  \enc(S) \ | \ S \textnormal&#123; ist ein PCP-Puzzle und hat
                  eine Lösung&#125; \&#125; \ . \end&#123;align*&#125;
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <span class="numbered-title">Theorem</span>
                    PCP ist unentscheidbar.
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    {" "}
                    <b>Beweis.</b>{" "}
                  </Paragraph>
                  <Paragraph>
                    Wir zeigen: wenn PCP entscheidbar <i>wäre</i> , dann{" "}
                    <i>wäre</i>{" "}
                  </Paragraph>
                  <Paragraph>
                    auch \(\halt\) entscheidbar. Da letzteres jedoch
                    unentscheidbar ist, muss auch PCP unentscheidbar sein.
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Mehr im Detail: für eine Turingmaschine \(M\) und ein
                      Eingabewort \(x\) konstruieren wir ein Puzzle \(S\), so
                      dass \(S\) genau dann eine Lösung hat, wenn \(M(x)\)
                      akzeptiert. Ein Entscheidungsalgorithmus für das PCP
                      könnte somit auch \(\halt\) entscheiden.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Wie so oft in ähnlichen Beweisen machen wir einen
                      Zwischenschritt. Das{" "}
                      <i>Modifizierte Postsche Korrespondenzproblem (MPCP) </i>{" "}
                      ist genau das gleiche wie das PCP, nur dass es in \(S\)
                      eine markierte Startkachel gibt und jede Lösung mit dieser
                      Startkachel beginnen muss. Es ist also ein "strengeres"
                      Problem als das PCP.
                    </Paragraph>
                  </Paragraph>
                  <div class="well subtheorem theorem">
                    <Paragraph>
                      <span class="numbered-title">Lemma</span>
                      Gegeben ein MPCP-Puzzle \(S\), so können wir ein
                      (normales) PCP-Puzzle \(S'\) erstellen, mit der
                      Eigenschaft, dass \(S\) eine Lösung hat genau dann, wenn
                      \(S'\) eine Lösung hat.
                    </Paragraph>
                  </div>
                  <div class="well subtheorem">
                    <Paragraph>
                      {" "}
                      <b>Beweis.</b>{" "}
                    </Paragraph>
                    <Paragraph>
                      Im MPCP zwingen uns bereits die Spielregeln, mit der
                      markierten Startkachel zu beginnen. Wir müssen nun, von
                      \(S\) ausgehend, ein ähnliches Puzzle bauen, in welchem es
                      zwar keine Startkachel gibt, aber dennoch nur eine Kachel
                      überhaupt als Anfang in Frage kommt. Das geht mit einem
                      Trick, in dem wir jede Kachel durch eine "gesternte
                      Variante" ersetzen:
                    </Paragraph>
                    <figure>
                      <img src="../img/carousel-prev-icon.svg" />
                    </figure>
                    <Paragraph>
                      wobei * ein neues Symbol ist. Offensichtlich kann keine
                      solche Kachel ganz links stehen, da ja dann bereits das
                      erste Symbol nicht übereinstimmen würde. Für die markierte
                      Startkachel erstellen wir eine weitere "gesternte"
                      Variante:
                    </Paragraph>
                    <figure>
                      <img src="../img/carousel-prev-icon.svg" />
                    </figure>
                    <Paragraph>
                      <Paragraph>
                        Die gesternten Kacheln zwingen uns nun dazu, mit der
                        markierten zu beginnen, da diese ja die einzige ist, wo
                        das erste Symbol oben und unten übereinstimmt. Wir
                        können nun jede \(S'\)-Kachelung in eine \(S\)-Kachelung
                        übersetzen; allerdings steht bei der \(S\)-Kachelung
                        rechts unten ein *, rechts oben aber nicht. Wir
                        erstellen nun eine weitere Kachel, die am rechten Rand
                        und nur dort eingesetzt werden kann:
                      </Paragraph>
                    </Paragraph>
                    <figure>
                      <img src="../img/carousel-prev-icon.svg" />
                    </figure>
                    <Paragraph>
                      <Paragraph>
                        Sie sehen: die letzte Kachel ist die einzige, die am
                        rechten Rand stehen kann. Sollte nun das MPCP-Puzzle
                        \(S\) eine Lösung haben (die dann laut Spielregeln auch
                        mit der markierten Startkachel beginnt), so können wir
                        daraus eine Lösung des PCP-Puzzles \(S'\) konstruieren,
                        indem wir einfach jede \(S\)-Kachel durch die
                        entsprechende \(S'\)-Kachel ersetzen (Vorsicht: sollte
                        die markierte Startkachel in der \(S\)-Lösung mehrfach
                        vorkommen, so muss in \(S'\) anfangs die "türkise"
                        Version der Kachel genommen werden, mit * oben und
                        unten; jedes weitere Exemplar muss dann in \(S'\) durch
                        die violette türkise Kachel ersetzt werden). Ganz zum
                        Schluss hängen wir noch die Kachel für den rechten Rand
                        an. Sollte umgekehrt das PCP-Puzzle \(S'\) eine Lösung
                        haben, so erhalten wir eine Lösung des MPCP Puzzles
                        \(S\), indem wir alle Sterne herausstreichen und die
                        rechte Endkachel entfernen.
                      </Paragraph>
                      <span class="qed">\(\square\)</span>
                    </Paragraph>
                  </div>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Nun wissen wir also, dass wir den "Spieler" zwingen
                        können, mit einer bestimmten Kachel zu beginnen, ohne
                        dies explizit in die Spielregeln aufnehmen zu müssen.
                        Unser Ziel ist nun: gegeben eine Turingmaschine \(M\)
                        und ein Inputwort \(x\), darauf aufbauend ein
                        MPCP-Puzzle \(S\) zu konstruieren, das genau dann eine
                        Lösung hat, wenn \(M(x) = \texttt&#123;accept&#125;\)
                        gilt.
                      </Paragraph>
                    </Paragraph>
                    <Paragraph>
                      <Paragraph>
                        Erinneren wir uns: eine <i>Konfiguration</i> einer
                        Turingmaschine ist eine Folge \begin&#123;align*&#125; w
                        <i>1 w</i>2 \dots w<i>&#123;j-1&#125; q w</i>j \dots w
                        <i>
                          m \end&#123;align*&#125; mit \(w_i \in \Gamma\) und
                          \(q \in Q\). Die Bedeutung ist, dass auf dem Band das
                          Wort \(w_1 w_2 \dots w_m\) steht, die Turingmaschine
                          im Zustand \(q\) ist und der Schreib-Lese-Kopf über
                          den Zeichen \(w_j\) steht. Wir schreiben also den
                          Zustand unmittelbar{" "}
                        </i>
                        links_
                      </Paragraph>
                      <Paragraph>
                        von dem Zeichen, über dem er steht. Wenn das Eingabewort
                        \(x_1 \dots x_n\) und \(q_0 \in Q\) der Startzustand,
                        dann ist \begin&#123;align*&#125; C<i>0 := q</i>0 x
                        <i>1 \dots x</i>n \end&#123;align*&#125; die
                        Startkonfiguration. Die Berechnung einer Turingmaschine
                        ist nun eine Folge von Konfigurationen, die wir mit dem
                        \(\#\)-Zeichen separieren, also
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125; \#\# C<i>0 \# C</i>1 \# C
                    <i>2 \# C</i>3 \# \dots \# C_t \end&#123;align*&#125; Zwei
                    aufeinanderfolgende Konfigurationen \(C_i,
                    C_&#123;i+1&#125;\) unterscheiden sich nur in der
                    unmittelbaren Umgebung des Schreib-Lese-Kopfes. Der Rest ist
                    in beiden Konfigurationen identisch. Die Idee ist nun,
                    zuerst eine Startkachel
                  </Paragraph>
                  <figure>
                    <img src="../img/carousel-prev-icon.svg" />
                  </figure>
                  <Paragraph>
                    zu bauen. Wir sehen: oben "steht etwas über", und zwar genau
                    die Startkonfiguration. Wir wollen nun weitere Kacheln
                    entwerfen, die es dem Spieler erlauben, unten auch die
                    Konfiguration zu legen, ihn dabei allerdings zwingen, oben
                    die Folgekonfiguration zu legen. Hierfür brauchen wir
                    "Kopierkacheln", die es uns erlauben, Zeichen in die
                    Folgekonfiguration zu kopieren und "Kopf-Kacheln", die die
                    Aktion am Schreib-Lese-Kopf simulieren.
                    \begin&#123;align*&#125; \delta(q
                    <i>0, x</i>
                    1) = (q_1, y, \texttt&#123;R&#125;) \end&#123;align*&#125;
                    ist, dann würden wir folgende Kachel erzeugen und wie folgt
                    einsetzen:
                  </Paragraph>
                  <figure class="centered-figure">
                    <a
                      data-slide="prev"
                      href="#pcp-step-right"
                      class="left carousel-control-prev-icon">
                      <div class="carousel-nav-icon">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </a>
                    <a
                      data-slide="next"
                      href="#pcp-step-right"
                      class="right carousel-control-next-icon">
                      <div class="carousel-nav-icon">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </a>
                    <div
                      style="display:inline-block"
                      data-interval={false}
                      class="carousel"
                      id="pcp-step-right">
                      <ol class="carousel-indicators">
                        <li
                          class="active"
                          data-slide-to={1}
                          data-target="#pcp-step-right"
                        />
                        <li data-slide-to={2} data-target="#pcp-step-right" />
                        <li data-slide-to={3} data-target="#pcp-step-right" />
                        <li data-slide-to={4} data-target="#pcp-step-right" />
                        <li data-slide-to={5} data-target="#pcp-step-right" />
                        <li data-slide-to={6} data-target="#pcp-step-right" />
                        <li data-slide-to={7} data-target="#pcp-step-right" />
                        <li data-slide-to={8} data-target="#pcp-step-right" />
                      </ol>
                      <div style="display:inline-block" class="carousel-inner">
                        <div class="item active">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                      </div>
                    </div>
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Was geschieht nun? Für das Symbol \(q_1\), das ja einen
                      Zustand bezeichnet, gibt es keine Kopierkachel. Wenn nun
                      beispielsweise \begin&#123;align*&#125; \delta(q
                      <i>1, x</i>
                      2) = (q_3, z, \texttt&#123;L&#125;) \end&#123;align*&#125;
                      gilt, dann müssten wir den Kopf wieder nach links
                      verschieben, und er würde wiederum ganz am Anfang der
                      Konfiguration stehen. Es war also ein Fehler, \(y\) per
                      Kopierkachel zu kopieren. Wir machen es rückgängig und
                      legen eine der Regel \(\delta(q_1, x_2) = (q_3, z,
                      \texttt&#123;L&#125;)\) entsprechende Kopfkachel:
                    </Paragraph>
                  </Paragraph>
                  <figure class="centered-figure">
                    <a
                      data-slide="prev"
                      href="#pcp-step-left"
                      class="left carousel-control-prev-icon">
                      <div class="carousel-nav-icon">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </a>
                    <a
                      data-slide="next"
                      href="#pcp-step-left"
                      class="right carousel-control-next-icon">
                      <div class="carousel-nav-icon">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </a>
                    <div
                      style="display:inline-block"
                      data-interval={false}
                      class="carousel"
                      id="pcp-step-left">
                      <ol class="carousel-indicators">
                        <li
                          class="active"
                          data-slide-to={1}
                          data-target="#pcp-step-left"
                        />
                        <li data-slide-to={2} data-target="#pcp-step-left" />
                        <li data-slide-to={3} data-target="#pcp-step-left" />
                        <li data-slide-to={4} data-target="#pcp-step-left" />
                        <li data-slide-to={5} data-target="#pcp-step-left" />
                      </ol>
                      <div style="display:inline-block" class="carousel-inner">
                        <div class="item active">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                      </div>
                    </div>
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Hier brauchen wir halt eine Kopfkachel \((q_2yz:yq_1x_2)\)
                      für
                    </Paragraph>
                    <Paragraph>
                      {" "}
                      <i>jedes</i> Bandsymbol \(y\), da die Regel immer
                      anzuwenden ist, egal, welches Symbol \(y\) links vom
                      Schreib-Lese-Kopf steht.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Fassen wir zusammen, was wir bis jetzt gesehen haben. Wir
                      konstruieren Kopierkacheln \((x:x)\), die es dem Spieler
                      erlauben, die Konfiguration zu kopieren; Kopfkacheln, die
                      den Spieler zwingen, in der Umgebung des
                      Schreib-Lese-Kopfes den Regeln der Turingmaschine zu
                      folgen; und eine Startkachel, die die Startkonfiguration
                      abbildet. Also:
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img src="../img/carousel-prev-icon.svg" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Wir sind noch nicht ganz fertig. Wir brauchen noch Regeln
                      für den Fall, dass der Schreib-Lese-Kopf am Rand des
                      Bandinhaltes steht, konkret also die "Umgebung" des Kopfes
                      ein \(\texttt&#123;#&#125;\)-Zeichen beinhaltet. Wir
                      können entweder weitere Kopf-Kacheln entwerfen, die diese
                      Fälle behandeln, oder aber "Bandwrweiterungskacheln", die
                      uns erlauben, der Konfiguration \(C\) links oder rechts
                      ein Leersymbol \(\_\) anzuhängen. Ich überlasse es an
                      dieser Stelle dem Leser / der Leserin, die Details hierfür
                      auszuarbeiten.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Ganz zum Schluss müssen wir noch beschreiben, was
                      geschieht, wenn die Maschine in den akzeptierenden Zustand
                      \(q^*\) wechselt. Wir erschaffen Kacheln, die erlauben,
                      alle Bandsymbole zu löschen, bis das Band leer ist:
                    </Paragraph>
                  </Paragraph>
                  <figure>
                    <img src="../img/carousel-prev-icon.svg" />
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      und ganz am Schluss eine Kachel \((\# : q^* \# \#)\), um
                      alles abzuschließen. Die letzten zwei Schritte sehen dann
                      so aus:
                    </Paragraph>
                  </Paragraph>
                  <figure class="centered-figure">
                    <a
                      data-slide="prev"
                      href="#pcp-finishing-tile"
                      class="left carousel-control-prev-icon">
                      <div class="carousel-nav-icon">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </a>
                    <a
                      data-slide="next"
                      href="#pcp-finishing-tile"
                      class="right carousel-control-next-icon">
                      <div class="carousel-nav-icon">
                        <img src="../img/carousel-prev-icon.svg" />
                      </div>
                    </a>
                    <div
                      style="display:inline-block"
                      data-interval={false}
                      class="carousel"
                      id="pcp-finishing-tile">
                      <ol class="carousel-indicators">
                        <li
                          class="active"
                          data-slide-to={1}
                          data-target="#pcp-finishing-tile"
                        />
                        <li
                          data-slide-to={2}
                          data-target="#pcp-finishing-tile"
                        />
                        <li
                          data-slide-to={3}
                          data-target="#pcp-finishing-tile"
                        />
                      </ol>
                      <div style="display:inline-block" class="carousel-inner">
                        <div class="item active">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                        <div class="item">
                          <img src="../img/carousel-prev-icon.svg" />
                        </div>
                      </div>
                    </div>
                  </figure>
                  <Paragraph>
                    <Paragraph>
                      Strenggenommen müssten wir jetzt beweisen, dass das
                      MPCP-Puzzle genau dann lösbar ist, wenn die Turingmaschine
                      akzeptiert. Hierfür könnten wir zum Beispiel zeigen, dass,
                      wenn \(s\) eine Kachelung ist, in welcher \(\top(s)\) und
                      \(\bottom(s)\) beide auf dem Zeichen \(\#\) enden und wenn
                      \(\bottom(s)\) nicht das Zeichen \(q^*\) enthält, dann ist
                      \begin&#123;align*&#125; \top(s)&amp;= \#\# C<i>0 \# C</i>
                      1 \# \dots \# C
                      <i>&#123;j+1&#125;\# \\ \bottom(s)&amp;= \#\# C</i>0 \# C
                      <i>1 \# \dots \# C</i>
                      j\# \\ \end&#123;align*&#125; wobei \(C_0 = q_0 x_1 \dots
                      x_n\) die Startkonfiguration der Turingmaschine ist und
                      jedes \(C_&#123;i+1&#125;\) die Folgekonfiguration von
                      \(C_i\); dass also die Teillösung \(s\) des Puzzles getreu
                      die Berechnung der Turingmaschine abbildet. Wir ersparen
                      uns weitere Details.
                    </Paragraph>
                    <span class="qed">\(\square\)</span>
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
