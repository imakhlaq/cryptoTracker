import { useState } from "react";
import SignPopUp from "../SignPopUp";
import { Modal } from "./Modal";

const AuthModal = () => {
  const [open, setModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setModal(true)}
        className="p-2 md:px-4 bg-[gold] rounded-md text-black font-semibold"
      >
        SignIn
      </button>
      {open && (
        <Modal closeModal={setModal}>
          <SignPopUp setModal={setModal}/>
        </Modal>
      )}
    </>
  );
};
export default AuthModal;
