import styled from "styled-components";
import {Card} from 'antd'

const StyledCard = styled(Card)`
  .ant-card-body {
    box-shadow: 0 0 2px 1px #0a1f44;
    border-radius: 8px;
    padding: 15px;
    color: #0a1f44;
  }
`;

export {
  StyledCard as Card
}
