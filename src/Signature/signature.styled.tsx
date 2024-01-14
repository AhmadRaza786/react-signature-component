import styled from "styled-components"

export const SignatureCanvasContainer = styled.div`
  margin: 0px auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: center;

  .sigCanvas {
    background-color: #F2F3F9;
    border: 1px dashed #3a3737;
    cursor: crosshair;
  }
`

export const SignatureTypeContainer = styled.div`
  margin: 0px auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: center;

  .sigCanvas {
    background-color: #F2F3F9;
    border: 1px dashed #3a3737;
  }
`

export const Input = styled.input`
  width: 500px;
  height: 40px;
  font-size: 30px;
  text-align: center;
  border: none;
  border-bottom: 1px solid #8A929F;
  padding: 5px;
`;

export const ClearSignature = styled.div`
  color: #2b1cc1;
  cursor: pointer;
  font-size: 14px;
`

export const SignLabel = styled.div`
  color: #5B616E;
  font-size: 14px;
`