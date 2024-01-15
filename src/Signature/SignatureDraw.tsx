import SignatureCanvas from 'react-signature-canvas';
import Colors from "../components/Colors/Colors"
import React, { FC, RefObject } from 'react';
import { ClearSignature, SignLabel, SignatureCanvasContainer } from './signature.styled';

export interface SignatureDrawProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void
  signatureRef: RefObject<SignatureCanvas>
  canvasIsEmpty: boolean
  setCanvasIsEmpty: (value: boolean) => void
}

/**
 * Component that renders the Canvas to draw the signature
 * @param {SignatureDrawProps} 
 * @returns 
 */
const SignatureDraw: FC<SignatureDrawProps> = ({ 
  selectedColor, 
  setSelectedColor, 
  canvasIsEmpty,
  setCanvasIsEmpty,
  signatureRef 
}: SignatureDrawProps) => {

  const handleClearCanvas = () => {
    signatureRef.current?.clear();
    setCanvasIsEmpty(true)
  }

  return (
    <SignatureCanvasContainer>
      <Colors selectedColor={selectedColor} onChange={(newColor) => setSelectedColor(newColor)} />
      <SignatureCanvas
        ref={signatureRef}
        penColor={selectedColor}
        canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
        onBegin={() => setCanvasIsEmpty(false)}
      />
      {!canvasIsEmpty ? 
        <ClearSignature onClick={handleClearCanvas}>Clear Signature</ClearSignature> : 
        <SignLabel>Sign Here</SignLabel>}
    </SignatureCanvasContainer>
  )
}

export default SignatureDraw;