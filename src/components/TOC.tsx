import TOCAuthorSuppliedContent from "./TOCAuthorSuppliedContent";

const TOC = () => {
  return (
    <>
      <div>
        <p>
          <a href="https://www.tu-chemnitz.de/informatik/theoretische-informatik/TI-2/index.html">
            zur Kursübersicht
          </a>
        </p>
      </div>
      <div class="container" style="text-align: center;">
        <div style="text-align: center; margin-bottom: 4em;">
          <h1>
            <span class="coursename"></span>Theoretische Informatik 2 -
            Vorlesungsskript
          </h1>
          <h3>Bachelor-Studium Informatik</h3>
          <h3>Dominik Scheder, TU Chemnitz</h3>
        </div>
        <div class="row content">
          <div class="col-sm-3 sidenav" id="course-list"></div>
          <div class="col-sm-9 text-left">
            <div id="table-of-content-div">
              <TOCAuthorSuppliedContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TOC;
