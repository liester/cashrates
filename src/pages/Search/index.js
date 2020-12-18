import React, {useState, useCallback} from "react";
import { useHistory } from "react-router-dom"

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
  const providerFirstName = provider.first_name.toLowerCase();
  const providerLastName = providerFirstName.toLowerCase()
  const search = searchString.toLowerCase();
  return providerFirstName.includes(search) ||
    providerLastName.includes(search)
}

const Search = () => {
  const [searchString, setSearchString] = useState("")
  const handleSearchOnChange = useCallback(
    (event) => {
      setSearchString(event.target.value);
    },
    [setSearchString],
  );
  const history = useHistory();

  const providerResults = providers.slice(0, 30).filter((provider) => filterOnSearch(searchString, provider))
  return (
    <Container flexDirection={"column"}>
      <ScrollToTop/>
      <SearchBar onChange={handleSearchOnChange}/>
      <S.SearchResultsContent>
        {providerResults.map(provider => {
          return (<S.CardContainer key={provider.id}>
            <Card hoverable onClick={()=> history.push(`/profile/${provider.id}`)}>
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
