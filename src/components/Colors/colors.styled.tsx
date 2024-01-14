import styled from "styled-components";

export const ColorsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ColorItem = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 20px;
`

export const ColorItemContainer = styled.div<{ active: boolean }>`
  margin-left: 10px;
  padding: 2px;
  border: ${(props) => props.active ? '1px solid #4536E4' : 'none'};
  border-radius: 20px;
  cursor: pointer;
`