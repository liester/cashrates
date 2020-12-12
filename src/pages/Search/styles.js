import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 5px;
  width: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 125px;
  width: 125px;
  object-fit: cover;
`;

export const ProfileName = styled.div`
  font-size: 20px;
`;

export const CashRate = styled.div`
  display: flex;
  align-items: center;
  font-size: 50px;
  color: #ff825c;
`;

export const SearchResultsContent = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  `;

export const NoResults = styled.div`
  font-size: 25px;
  color: #ff825c;
  `;
