import styled from "styled-components";

export const StyledTabPanel = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'block' : 'none')};
  padding: 20px;
`;