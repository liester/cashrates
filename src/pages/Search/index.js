import React, {useState, useCallback} from "react";

import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import SearchBar from "../../components/SearchBar";
import Card from "../../common/Card";
import providers from '../../content/providers.json'
import profileImages from '../../content/profile-images.json'
import * as S from './styles.js';

const CardContent = (props) => {
  const {provider} = props;
  return (
    <S.CardContent>
      <S.ProfileImage src={profileImages[provider.id]}></S.ProfileImage>
      <div>
        <div>
          {provider.first_name} {provider.last_name}
        </div>
        <div>
          {provider.id % 2 === 0 ? `PLMHP` : `LADAC`}
        </div>
      </div>
      <div>
        <div>
          {provider.gender}
        </div>
        <div>
          {provider.credentialed_with}
        </div>
      </div>
      <S.CashRate>
        <span style={{fontSize: '20px'}}>$</span>{provider.cash_rate}
      </S.CashRate>
    </S.CardContent>
  )
}

const filterOnSearch = (searchString, provider) => {
  return provider.first_name.toString().toLowerCase().includes(searchString) ||
    provider.last_name.toString().toLowerCase().includes(searchString)
}

const Search = () => {
  const [searchString, setSearchString] = useState("")
  const handleSearchOnChange = useCallback(
    (event) => {
      setSearchString(event.target.value);
    },
    [setSearchString],
  );

  const providerResults = providers.slice(0, 30).filter((provider) => filterOnSearch(searchString, provider))
  return (
    <Container>
      <ScrollToTop/>
      <SearchBar onChange={handleSearchOnChange}/>
      <S.SearchResultsContent>
        {providerResults.map(provider => {
          return (<S.CardContainer>
            <Card hoverable>
              <CardContent provider={provider}/>
            </Card>
          </S.CardContainer>)
        })}
        {providerResults.length === 0 && <S.NoResults>We're sorry, no providers found</S.NoResults>}
      </S.SearchResultsContent>
    </Container>
  );
};

export default Search;
