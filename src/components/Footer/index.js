import React, {Fragment} from "react";
import {Row, Col, Select} from "antd";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import {Fade} from "react-reveal";

import Container from "../../common/Container";
import SvgIcon from "../../common/SvgIcon";

import * as S from "./styles";

const Footer = () => {
  const {Option} = Select;
  const {t} = useTranslation();
  const handleChange = (event) => {
    i18n.changeLanguage(event);
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container justifyContent="space-between">
            <Col lg={10} md={10} sm={12} xs={24}>
              <S.Language>{t("Contact")}</S.Language>
              <S.Large to="/">{t("Tell us everything")}</S.Large>
              <S.Para>
                {t(
                  `Do you have any question regarding the project? Feel free to reach out.`
                )}
              </S.Para>
              <a href="mailto:levi.liester@gmail.com">
                <S.Chat>{t(`Let's Chat`)}</S.Chat>
              </a>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24}>
              <S.Select>
                <S.Language>{t("Language")}</S.Language>
                <Select
                  defaultValue="en"
                  onChange={handleChange}
                  value={i18n.language}
                >
                  <Option value="en">English</Option>
                  <Option value="es">Español</Option>
                </Select>
              </S.Select>
            </Col>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true" justifyContent={"space-between"}>
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              wrap={false}
              style={{paddingTop: "3rem"}}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon src="logo.svg"/>
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <a
                  href="https://github.com/liester"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="github.svg"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/levi-liester-3485b42b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SvgIcon src="linkedin.svg"/>
                </a>
                {/*<a*/}
                {/*  href="https://twitter.com/Adrinlolx"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  <SvgIcon src="twitter.svg" />*/}
                {/*</a>*/}
                {/*<a*/}
                {/*  href="https://github.com/Adrinlol/"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  <SvgIcon src="instagram.svg" />*/}
                {/*</a>*/}
                {/*<a*/}
                {/*  href="https://medium.com/@lashakakabadze/"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  <SvgIcon src="medium.svg" />*/}
                {/*</a>*/}
              </S.FooterContainer>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={12} md={12} sm={12} xs={24}>
                <S.CSite>
                  All Rights Reserved - Mind Canary © {new Date().getFullYear()}
                </S.CSite>
              </Col>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default Footer;
