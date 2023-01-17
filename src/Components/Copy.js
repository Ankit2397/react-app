import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
function Copy() {
  
  const [copied, setCopied] = useState(false);
  const discount = 'Black Friday Discount 59%';
  return (
    <div className="down">
      <h3>Black Friday Discount</h3>
      <div className={copied ? 'discount-code discount-applied' : 'discount-code'} >
        <div className="black-code">{discount}</div>{
          copied ? <div className="discount-copied">Copied!</div>:
            <CopyToClipboard text={discount} onCopy={() => setCopied(true)}>
              <div className="copy">Copy</div>
            </CopyToClipboard>
        }</div>
    </div >
  );
}
export default Copy;