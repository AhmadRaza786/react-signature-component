import styled from "styled-components"

export const FontsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
`

export const FontSelection = styled.div<{ active: boolean}>`
  background-color: ${(props) => props.active ? '#4636E2': 'transparent'};
  width: 20px;
  height: 20px;
  border-radius: 20px;
`

export const FontSelectionContainer = styled.div`
  margin-left: 10px;
  padding: 2px;
  border: 1px solid #D7DFEB;
  border-radius: 20px;
  cursor: pointer;
  width: fit-content;
`

export const FontOption = styled.div`
  background: #F0F3F9;
  display: flex;
  align-items: center;
  gap: 20px;

  border: 1px solid #D7DFEB;
  padding: 20px;
  font-size: 30px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: transparent
  }
`