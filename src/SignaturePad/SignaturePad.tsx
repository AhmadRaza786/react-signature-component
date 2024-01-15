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

/**
 * Component to render the SignaturePad including draw and type features
 * @param {SignaturePadProps} 
 */
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

  /**
   * Function that renders on tab change
   * @param {number} value 
   */
  const handleTabChange = (value: number) => {
    setTabValue(value);
    handleClearCanvas();
    setSignatureTypeInfo({
      ...signatureTypeInfo,
      text: ''
    })
  };

  /**
   * Function to clear the canvas
   */
  const handleClearCanvas = () => {
    signatureRef.current?.clear();
    setCanvasIsEmpty(true)
  };

  /**
   * Function to save the drawing on canvas
   */
  const handleSaveCanvas = () => {
    if (!signatureRef.current.isEmpty()) {
      const signatureData = signatureRef.current?.toDataURL();
      setSignature(signatureData)
      handleClose();
    }
  };

  /**
   * Function to save the text signature
   */
  const handleTextSave = () => {
    if(signatureTypeInfo.text) {
      setSignature(signatureTypeInfo)
      handleClose();
    }
  };

  /**
   * Function to close the modal and reset the state
   */
  const handleClose = () => {
    handleClearCanvas();
    setSignatureTypeInfo({
      color: colors[0],
      fontFamily: fonts[0],
      text: ''
    })
    onClose();
  };

  /**
   * Triggeres on tab change to Draw and make sure that it has reset the canvas
   */
  useEffect(() => {
    if (tabValue === 0) {
      signatureRef.current?.fromData([]);
    }
  }, [tabValue]);

  /**
   * Save callaback to save signature either draw or type
   */
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
