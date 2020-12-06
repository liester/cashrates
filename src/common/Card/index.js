import React from "react";

import * as S from "./styles";

const Card = (props) => (
  <S.Card {...props}>{props.children}</S.Card>
);

export default Card;
