import React from "react";
import PropTypes from 'prop-types';

import * as S from "./styles";

const Container = (props) => (
  <S.Container {...props}>{props.children}</S.Container>
);

Container.propTypes = {
  flexDirection: PropTypes.oneOf(['row', 'column']),
  flexGrow: PropTypes.number,
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignItems: PropTypes.oneOf(['stretch', 'center', 'start', 'end']),
  alignSelf: PropTypes.oneOf(['stretch', 'center', 'start', 'end'])
}
export default Container;
