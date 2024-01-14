import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  background-color: #F2F3F9;
  padding-left: 20px;
`;

export const TabItem = styled.div<{ active: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 2px solid ${(props) => (props.active ? '#4536E4' : 'transparent')};
  color: ${(props) => (props.active ? '#4536E4' : '#000000')};
`;