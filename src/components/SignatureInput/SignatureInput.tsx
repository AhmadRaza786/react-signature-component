import React, { FC } from "react"
import { SignatureTypeInfo } from "../../Signature/SignatureType"
import { SignatureImage, TypeSignature, SignText, SignContainer, SignTextContainer } from "../../SignaturePad/signaturePad.styled"

export interface SignatureInputProps {
  signature: string | SignatureTypeInfo | undefined
  setShowSignatureModal: () => void
}

const SignatureInput: FC<SignatureInputProps> = ({ signature, setShowSignatureModal }: SignatureInputProps) => {
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
    return <SignText>Sign</SignText>
  }
  return (
    <SignContainer onClick={setShowSignatureModal}>
        <SignTextContainer>
          {renderSignature()}
        </SignTextContainer>
      </SignContainer>
  )
}

export default SignatureInput;