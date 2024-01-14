import styled from "styled-components";

export const ModalOverlay = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 800px;
  height: 500px;
`;

export const ModalBody = styled.div`
  height: 400px;
`

export const Bar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #F7F8FA;
`;

export const NavBar = styled(Bar)`
  justify-content: flex-start;
`

export const Title = styled.span`
  margin-left: 20px;
  font-weight: 600;
`

export const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`

export const CloseButton = styled(Button)`
  background: #F2F3F9;
`;

export const SubmitButton = styled(Button)`
  background: #8682f2;
  color: #fff;
  margin-right: 20px;
`;