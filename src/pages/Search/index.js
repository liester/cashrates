import React from "react";

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
          {Math.random()>.5? `PLMHP`:`LADAC`}
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

const Search = () => {
  return (
  <Container>
  <ScrollToTop/>
  <SearchBar/>
  {providers.slice(0, 30).map(provider => {
    return (<S.CardContainer>
      <Card hoverable>
        <CardContent provider={provider}/>
      </Card>
    </S.CardContainer>)
  })}
  </Container>
  );
};

export default Search;
