import { useState } from "react";

export const useImportModal = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const onClick = () => setShow(true);

  return {
    show,
    handleClose,
    onClick, 
  }

}