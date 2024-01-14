import { useState, useRef, useEffect, FC } from 'react';
import Tabs from '../components/Tabs/Tabs';
import Modal from '../components/Modal/Modal';
import TabPanel from '../components/TabPanel/TabPanel';
import SignatureDraw from '../Signature/SignatureDraw';
import SignatureType, { SignatureTypeInfo } from '../Signature/SignatureType';
import { Container, SignContainer, SignTextContainer, SignText, SignatureImage, TypeSignature } from './signaturePad.styled';
import { colors, fonts } from '../utils/constants';

const SignaturePad: FC = () => {
  const signatureRef = useRef<any>(null);
  const [canvasIsEmpty, setCanvasIsEmpty] = useState(true)
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [signature, setSignature] = useState<string | SignatureTypeInfo | undefined>();
  const [signatureTypeInfo, setSignatureTypeInfo] = useState<SignatureTypeInfo>({
    color: colors[0],
    fontFamily: fonts[0],
    text: ''
  })

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
    signatureRef.current?.clear();
    setSignatureTypeInfo({
      ...signatureTypeInfo,
      text: ''
    })
  };

  const handleClearCanvas = () => {
    signatureRef.current?.clear();
  };

  const handleSaveCanvas = () => {
    if (!signatureRef.current.isEmpty()) {
      const signatureData = signatureRef.current?.toDataURL();
      setSignature(signatureData)
      handleClose();
    }
  };

  const handleTextSave = () => {
    if(signatureTypeInfo.text) {
      setSignature(signatureTypeInfo)
      handleClose();
    }
  };

  const handleClose = () => {
    handleClearCanvas();
    setSignatureTypeInfo({
      color: colors[0],
      fontFamily: fonts[0],
      text: ''
    })
    setCanvasIsEmpty(true)
    setOpen(false);
  };

  useEffect(() => {
    if (tabValue === 0) {
      signatureRef.current?.fromData([]);
    }
  }, [tabValue]);

  const handleSave = () => {
    switch (tabValue) {
      case 0:
        handleSaveCanvas()
        break;
      case 1:
        handleTextSave()
        break;
      default:
        console.log('Invalid tab: ', tabValue)
    }
  }

  const renderSignature = () => {
    if(signature) {
      if(typeof signature === 'string') {
        return <SignatureImage src={signature} alt="" />
      }
      return (
        <TypeSignature style={{ color: signature.color, fontFamily: signature.fontFamily }}>
          <span>{signature.text}</span>
        </TypeSignature>
      )
    }
    return null
  }

  return (
    <Container>
      <SignContainer onClick={() => setOpen(true)}>
        <SignTextContainer>
          {(!signature) && <SignText>Sign</SignText>}
          {renderSignature()}
        </SignTextContainer>
      </SignContainer>
      <Modal open={open} onClose={handleClose} onSubmit={handleSave}>
        <Tabs tabValue={tabValue} onChange={handleTabChange} />
        <TabPanel value={tabValue} index={0}>
          <SignatureDraw 
            selectedColor={selectedColor} 
            setSelectedColor={setSelectedColor} 
            signatureRef={signatureRef}
            canvasIsEmpty={canvasIsEmpty}
            setCanvasIsEmpty={setCanvasIsEmpty}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <SignatureType signatureInfo={signatureTypeInfo} setSignatureInfo={setSignatureTypeInfo}  />
        </TabPanel>
      </Modal>
    </Container>
  );
};

export default SignaturePad;
