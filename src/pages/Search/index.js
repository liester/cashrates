import React from "react";

import ContentBlock from "../../components/ContentBlock";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";


const Search = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={"Here is the future page for search"}
        content={"This will be how people find providers"}
        icon="developer.svg"
      />

    </Container>
  );
};

export default Search;
