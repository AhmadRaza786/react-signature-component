import React, { useState, useRef, useEffect, FC } from 'react';
import Tabs from '../components/Tabs/Tabs';
import Modal from '../components/Modal/Modal';
import TabPanel from '../components/TabPanel/TabPanel';
import SignatureDraw from '../Signature/SignatureDraw';
import SignatureType, { SignatureTypeInfo } from '../Signature/SignatureType';
import { Container } from './signaturePad.styled';
import { colors, fonts } from '../utils/constants';

export interface SignaturePadProps {
  showSignatureModal: boolean
  onClose: () => void
  setSignature: (data: string | SignatureTypeInfo) => void
}

const SignaturePad: FC<SignaturePadProps> = ({ showSignatureModal, onClose, setSignature }: SignaturePadProps) => {
  const signatureRef = useRef<any>(null);
  const [canvasIsEmpty, setCanvasIsEmpty] = useState(true)
  const [tabValue, setTabValue] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [signatureTypeInfo, setSignatureTypeInfo] = useState<SignatureTypeInfo>({
    color: colors[0],
    fontFamily: fonts[0],
    text: ''
  })

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
    handleClearCanvas();
    setSignatureTypeInfo({
      ...signatureTypeInfo,
      text: ''
    })
  };

  const handleClearCanvas = () => {
    signatureRef.current?.clear();
    setCanvasIsEmpty(true)
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
    onClose();
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

  return (
    <Container>
      <Modal open={showSignatureModal} onClose={handleClose} onSubmit={handleSave}>
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
