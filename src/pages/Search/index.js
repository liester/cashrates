import React from "react";

import ContentBlock from "../../components/ContentBlock";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import SearchBar from "../../components/SearchBar";


const Search = () => {
  return (
    <Container>
      <ScrollToTop />
      <SearchBar/>
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
