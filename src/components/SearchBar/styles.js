import styled from "styled-components";
import {Input} from 'antd';

const {Search: AntdSearch} = Input;

export const Search = styled(AntdSearch)`
  color: red;
  & .ant-input-group-addon {
    color: red;
  }
`;
