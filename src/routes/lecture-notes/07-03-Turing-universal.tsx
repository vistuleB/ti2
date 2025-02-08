import Chapter from "~/components/Chapter";
import Paragraph from "~/components/Paragraph";
import Container from "~/components/Container";
import Carousel from "~/components/Carousel";
const Article = () => {
  return (
    <Container>
      <Chapter
        title="Turing universal"
        number={7.3}
        path="/lecture-notes46.tsx">
        <div id="link-to-toc">
          <a href="../vorlesungsskript">
            Inhaltsverzeichnis
          </a>
          <a href="07-03-Turing-encoding">
            &lt;&lt; Kapitel 7.3
          </a>
        </div>
        <div
          id="link-to-overview"
          style="text-align: end">
          <a href="/">
            zur Kursübersicht
          </a>
          <a href="07-05-undecidability">
            Kapitel 7.5 &gt;&gt;
          </a>
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
                    <Paragraph>
                      Im letzten Teilkapitel haben wir gesehen, wie wir jede Turingmaschine $M
                      $mit
                      Eingabealphabet $\Sigma$ codieren können als
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  \enc(M) \in \Lambda^* \ ,
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      also als String über dem Codierungsalphabet
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  \Lambda := \writelambda
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Diese Codierungsschema enthält implizit Codierungsfunktionen
                      $\enc
                      <i>
                        Q : Q \rightarrow \&#123;0,1\&#125;^+$ und $\enc
                      </i>
                      \Gamma: \Gamma \rightarrow
                      \Sigma \cup \&#123;0,1\&#125;^+$,
                      die wir verwenden, um die Zustände und Arbeitszeichen von $M$ in
                      $\Lambda$-Zeichen zu
                      übersetzen.
                      Für eine Konfiguration
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  C = u
                  <i>
                    1 \dots u
                  </i>
                  m q v
                  <i>
                    1 \dots v
                  </i>
                  n
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    <Paragraph>
                      der Maschine $M$ definieren wir die Codierung von $C$ als
                    </Paragraph>
                  </Paragraph>
                  \begin&#123;align*&#125;
                  \enc(C) := \enc
                  <i>
                    \Gamma(u
                  </i>
                  1) \texttt&#123;#&#125; \enc
                  <i>
                    \Gamma(u
                  </i>
                  2) \dots \texttt&#123;#&#125;
                  \enc
                  <i>
                    \Gamma(u
                  </i>
                  m)\texttt&#123;#&#125;
                  \enc
                  <i>
                    Q(q) \texttt&#123;#&#125; \enc
                  </i>
                  \Gamma(v
                  <i>
                    1)\texttt&#123;#&#125; \dots \texttt&#123;#&#125;
                    \enc
                  </i>
                  \Gamma(v_n) \in \Lambda^* \ .
                  \end&#123;align*&#125;
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Das ist alles nicht besonders tiefgründig und dient allein dazu,
                    sicherzustellen, dass wir
                    die Konfigurationen von $M$ darstellen können in dem Alphabet $\Lambda$,
                    das
                  </Paragraph>
                  <Paragraph>
                    {" "}{" "}
                    <i>
                      unabhängig
                    </i>
                    {" "}
                    von $M$ ist. Dass wir also 
                    {" "}
                    <i>
                      jede
                    </i>
                    {" "}{" "}
                  </Paragraph>
                  <Paragraph>
                    Turingmaschine
                    $M$ mit Eingabealphabet $\Sigma$ und 
                    {" "}
                    <i>
                      jede
                    </i>
                    {" "}
                    ihrer Konfigurationen
                    als Strings über 
                    {" "}
                    <i>
                      einem
                    </i>
                    {" "}
                    festen Alphabet $\Lambda$ darstellen
                    können.
                  </Paragraph>
                </Paragraph>
                <Paragraph>
                  <Paragraph>
                    Eine Turingmaschine simulieren heißt nun, einen String
                    $\enc(M)\texttt&#123;;&#125;w$ mit $w \in \Sigma^
                    <b>
                      $ zu lesen und
                      daraus den String $\enc(\hat&#123;\delta&#125;^
                    </b>
                    {" "}{" "}
                    <i>
                      M (w))$ zu berechnen, also
                      das Ergebnis $\hat&#123;\delta&#125;^*
                    </i>
                    M(w)$, passend codiert über dem Alphabet
                    $\Lambda$.
                    Das zentrale Ergebnis dieses Teilkapitels ist, dass wir diese Simulation
                    selbst mit einer Turingmaschine implementieren können.
                  </Paragraph>
                </Paragraph>
                <div class="well container theorem">
                  <Paragraph>
                    <Paragraph>
                      <span class="numbered-title">
                        Theorem
                      </span>
                      {" "}{" "}
                      <b>
                        (Universelle
                        Turingmaschine).
                      </b>
                      {" "}
                      Zu
                      jedem
                      endlichen Eingabealphabet $\Sigma$ sei
                      $\Lambda := \writelambda$ das Codierungsalphabet. Es gibt es
                      eine
                      Turingmaschine $U = U_&#123;\Sigma&#125;$ mit Eingabealphabet
                      $\Lambda$,
                      so dass für alle $c \in \Lambda^
                      <b>
                        $ und $w \in \Sigma^
                      </b>
                      $
                      die Turingmaschine $U$ mit Eingabewort $x \in \Lambda^*$
                      folgendes tut:
                    </Paragraph>
                  </Paragraph>
                  <ul>
                    <li>
                      Falls $x$ nicht die Form
                      $\enc(M) \texttt&#123;;&#125; w$ mit $w \in \Sigma^*$ hat,
                      lehnt sie ab;
                    </li>
                    <li>
                      Ansonsten, falls also $c = \enc(M)$ für eine Turingmaschine
                      $M$ ist:
                      <ul>
                        <li>
                          Falls $M$ mit Eingabewort $w$ nicht
                          terminiert, dann terminiert $U$ mit
                          Eingabewort $c \texttt&#123;;&#125; w$ auch nicht.
                        </li>
                        <li>
                          Falls $M$ mit Eingabewort $w$ eine
                          Endkonfiguration $C = uqv$ erreicht,
                          dann
                          erreicht $U$ mit
                          Eingabewort $c \texttt&#123;;&#125; w$ die
                          Endkonfiguration
                          $q\ \enc(C)$. Das heißt insbesondere,
                          dass $U$ genau dann akzeptiert, wenn $M$
                          akzeptiert, und genau dann ablehnt, wenn
                          $M$ ablehnt.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <Paragraph>
                    <Paragraph>
                      <Paragraph>
                        $U$ akzeptiert also die Sprache
                      </Paragraph>
                    </Paragraph>
                    \begin&#123;align*&#125;
                    \&#123; c w \ | \ w \in \Sigma^* \textnormal&#123; und&#125; c = \enc(M) \textnormal&#123;
                    und $M$ akzeptiert $w$&#125; \&#125; \ .
                    \end&#123;align*&#125;
                  </Paragraph>
                </div>
                <div
                  style="margin-bottom:1em"
                  class="alert-info container">
                  <Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Ein technischer aber letztendlich irrelevanter Punkt:
                        {" "}
                      </b>
                      {" "}
                      die Mengen
                      $Q$ und $\Gamma$ der Turingmaschine $M$ können ja beliebige
                      (endliche) Mengen sein,
                      und weder $\Lambda$ noch die Turingmaschine $U$ haben "Kenntnis"
                      von ihnen.
                      Wir nehmen aber aus Gründen der Einfachheit an, dass $Q$ immer
                      die Zustände
                      $\qaccept$ und $\qreject$ enthält und auch $U$ diese Zustände
                      verwendet.
                      Daraus ergibt sich, dass für eine Endkonfiguration $uqv$ von $M$
                      zwar $q \in \&#123;\qaccept, \qreject\&#125;$ gilt, allerdings $\enc(q)
                      \in \&#123;0,1\&#125;^+$,
                      da wir diese $M$-Zustände binär codieren. Somit ist
                      $q\ \enc(uqv) \in \&#123;\qaccept, \qreject\&#125; \times \Lambda^*$ eine
                      Endkonfiguration von $U$.
                    </Paragraph>
                  </Paragraph>
                  <Paragraph>
                    <Paragraph>
                      Des weiteren gehen wir davon aus, dass das Blank-Symbol $\Box$
                      für alle
                      Turingmaschinen $M$ mit Eingabealphabet $\Sigma$ das gleiche
                      ist. Auch
                      $U$ verwendet es. Wenn wir allerdings $M$ codieren, so wird auch
                      $\Box$ als $\enc(\Box) \in \&#123;0,1\&#125;^+$ codiert, wie jedes
                      Arbeitssymbol $z \in \Gamma
                      \setminus \Sigma$ von $M$
                      binär codiert wird. Das heißt insbesondere, dass
                      für eine $M$-Konfiguration $C$ die Codierung $\enc(C)$ kein
                      $\Box$ enthält (selbst
                      wenn $C$ als Konfiguration von $M$ dies tut), und in der Tat ist
                      ja
                      $\enc(C) \in \Lambda^*$, und $\Lambda$ ist das Eingabealphabet
                      von $U$ mit
                      $\Box \not \in \Lambda$.
                    </Paragraph>
                  </Paragraph>
                </div>
                <div class="well container">
                  <Paragraph>
                    <Paragraph>
                      {" "}{" "}
                      <b>
                        Beweis.
                      </b>
                      {" "}{" "}
                    </Paragraph>
                    <Paragraph>
                      Den Beweis in allen Details zu führen hieße, die Maschine $U$
                      konkret als Turingmaschine
                      zu implementieren. Wir tun dies nicht. Wir beschränken uns auf
                      eine High-Level-Beschreibung
                      ihrer Arbeitsweise.
                    </Paragraph>
                  </Paragraph>
                </div>
                <figure class="centered-figure well container-fluid">
                  <a
                    data-slide="prev"
                    href="#universal-TM"
                    class="left carousel-control-prev-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <a
                    data-slide="next"
                    href="#universal-TM"
                    class="right carousel-control-next-icon">
                    <div class="carousel-nav-icon">
                      <img src="../img/carousel-prev-icon.svg" />
                    </div>
                  </a>
                  <div
                    style="display:inline-block"
                    data-interval={false}
                    class="carousel"
                    id="universal-TM">
                    <ol class="carousel-indicators">
                      <li
                        class="active"
                        data-slide-to={1}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={2}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={3}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={4}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={5}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={6}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={7}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={8}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={9}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={10}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={11}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={12}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={13}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={14}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={15}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={16}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={17}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={18}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={19}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={20}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={21}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={22}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={23}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={24}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={25}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={26}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={27}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={28}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={29}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={30}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={31}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={32}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={33}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={34}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={35}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={36}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={37}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={38}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={39}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={40}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={41}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={42}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={43}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={44}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={45}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={46}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={47}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={48}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={49}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={50}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={51}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={52}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={53}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={54}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={55}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={56}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={57}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={58}
                        data-target="#universal-TM" />
                      <li
                        data-slide-to={59}
                        data-target="#universal-TM" />
                    </ol>
                    <div
                      style="display:inline-block"
                      class="carousel-inner">
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
              </div>
            </div>
          </div>
        </div>
      </Chapter>
    </Container>
  );
};

export default Article;