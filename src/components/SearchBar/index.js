import React from 'react'
import * as S from './styles'

const SearchBar = (props) => {
  const {onChange} = props;
  return (
    <S.Search placeholder={"Find Therapist"} enterButton="Search" size="large" onChange={onChange}/>
  )
}
export default SearchBar
