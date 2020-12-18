import React, {useEffect} from "react";
import {BackTop} from "antd";
import SvgIcon from "../../common/SvgIcon";
import {useLocation} from "react-router-dom";

import * as S from "./styles";

const Input = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <BackTop>
      <S.Up>
        <SvgIcon src="scroll-top.svg"/>
      </S.Up>
    </BackTop>
  );
}

export default Input;
