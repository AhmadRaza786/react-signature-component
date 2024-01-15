# React Signature Component

A Component to help in draw/type the digital signature

## Install

```
npm i react-signature-component

OR

yarn add react-signature-component
```

### Usage

```
import { SignaturePad, SignatureTypeInfo, SignatureInput } from 'react-signature-component';

const YourComponentName = () => {
  const [signature, setSignature] = useState<string | SignatureTypeInfo | undefined>();
  const [showSignatureModal, setShowSignatureModal] = useState(false);

  return (
    <div className="App">
      <SignatureInput signature={signature} setShowSignatureModal={() => setShowSignatureModal(true)}  />
      <SignaturePad showSignatureModal={showSignatureModal} onClose={() => setShowSignatureModal(false)} setSignature={setSignature} />
    </div>
  );
}
```

`SignatureInput` is a default input component that can be replaced wit your own input designed component. Just to make sure that component should have 2 props like `SignatureInputProps`