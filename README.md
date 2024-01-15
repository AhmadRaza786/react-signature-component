# React Signature Component

A Component to help in draw/type the digital signature

## Install

```
npm i react-signature-component

OR

yarn add react-signature-component
```

### Usage

```javascript
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

### SignatureInput
A Default SignatureInput component has the following props
`signature` has type as `string` or `SignatureTypeInfo`

`string` type will return a base64 digital signature drawing.

`SignatureTypeInfo` type will have three properties to render the digital signature with these props accordingly.

1. `color`: `string` color code
2. `fontFamily`: `string` font family
3. `text`: `string` Name for digital signaure

 `SignatureInput` is a default input component that can be replaced with your own input designed component. Just to make sure that component should have same props like `SignatureInputProps`

 ### SignaturePad
 A component that allows to draw the signature or type signature with support of different font-families.

 #### Props
 `showSignatureModal`: A callback function that triggrs and enable the digital signature modal to render into dom.

 `onClose`: A callback that triggeres when the modal get closed.

 `setSignature`: A calback that returns the signature on submit call and returns the signature to render it on `SignatureInput` accordingly.