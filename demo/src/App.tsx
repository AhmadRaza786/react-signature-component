import SignaturePad from '../../src/SignaturePad/SignaturePad';
import './App.css';
import React, { useState } from 'react';
import { SignatureTypeInfo } from '../../src/Signature/SignatureType';
import SignatureInput from '../../src/components/SignatureInput/SignatureInput';


function App() {
  const [signature, setSignature] = useState<string | SignatureTypeInfo | undefined>();
  const [showSignatureModal, setShowSignatureModal] = useState(false);

  return (
    <div className='App'>
      <SignatureInput signature={signature} setShowSignatureModal={() => setShowSignatureModal(true)}  />
      <SignaturePad showSignatureModal={showSignatureModal} onClose={() => setShowSignatureModal(false)} setSignature={setSignature} />
    </div>
  );
}

export default App;
