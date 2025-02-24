import { MetaProvider, Title } from "@solidjs/meta";
import TOC from "~/components/TOC";

export default function About() {
  return (
    <>
      <MetaProvider>
        <Title title="Ti2 | Table of contents" />
      </MetaProvider>
      <TOC />
    </>
  );
}
