import React from "react";

import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import SearchBar from "../../components/SearchBar";
import Card from "../../common/Card";


const Search = () => {
  return (
    <Container>
      <ScrollToTop />
      <SearchBar/>
      <Card hoverable />
    </Container>
  );
};

export default Search;
