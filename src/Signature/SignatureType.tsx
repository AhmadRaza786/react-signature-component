import Colors from "../components/Colors/Colors"
import { FC } from 'react';
import FontsGrid from "../components/FontSelector/FontSelector";
import { SignatureTypeContainer, Input, ClearSignature, SignLabel } from "./signature.styled";

export type SignatureTypeInfo = {
  color: string;
  fontFamily: string;
  text?: string
}

interface SignatureTypeProps {
  signatureInfo: SignatureTypeInfo;
  setSignatureInfo: (info: SignatureTypeInfo) => void
}

const SignatureType: FC<SignatureTypeProps> = ({ signatureInfo, setSignatureInfo }: SignatureTypeProps) => {
  const handleChangeInfo = (info: Partial<SignatureTypeInfo>) => {
    setSignatureInfo({
      ...signatureInfo,
      ...info
    })
  }

  return (
    <>
      <SignatureTypeContainer>
        <Colors selectedColor={signatureInfo.color} onChange={(newColor) => handleChangeInfo({ color: newColor })} />
        <Input 
          type="text" 
          value={signatureInfo.text} 
          onChange={(e) => handleChangeInfo({ text: e.target.value })} 
          style={{ fontFamily: signatureInfo.fontFamily, color: signatureInfo.color }} 
          placeholder="Signature"
        />
        {signatureInfo.text ? 
          <ClearSignature onClick={() => handleChangeInfo({ text: '' })}>Clear Signature</ClearSignature> : 
          <SignLabel>Sign Here</SignLabel>}
      </SignatureTypeContainer>
      <FontsGrid fontFamily={signatureInfo.fontFamily} setFontFamily={(font) => handleChangeInfo({ fontFamily: font })} />
    </>
  )
}

export default SignatureType;