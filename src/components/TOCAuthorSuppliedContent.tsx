import TOCItem from "./TOCItem";

const TOCAuthorSuppliedContent = () => {
  return (
    <>
      <div id="Chapters">
        <ul style="list-style: none">
          <TOCItem
            label="Binär-Addierer"
            on_mobile="Binär-Addierer"
            number={1.3}
            href="01-03-binary-adder" />
        </ul>
      </div>
    </>
  );
};

export default TOCAuthorSuppliedContent;