import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
function Appop() {
  const popover = (
    <Popover>
      <Popover.Title as="h3">Popover Top</Popover.Title>
      <Popover.Content>
          The quick brown fox jumps over the lazy dog!
      </Popover.Content>
    </Popover>
  );
  return (
      <OverlayTrigger 
         trigger="hover" 
         placement="top" 
         overlay={popover}
         >
        <Button variant="danger">Hover over me</Button>
      </OverlayTrigger>
  );
}
export default Appop;