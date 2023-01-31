import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import Profile from "../Profile";
import SignPopUp from "../SignPopUp";
import { Modal } from "./Modal";

const AuthModal = () => {
  const [open, setModal] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      {!user && (
        <button
          onClick={() => setModal(true)}
          className="p-2 md:px-4 bg-[gold] rounded-md text-black font-semibold"
        >
          SignIn
        </button>
      )}
      {user && <Profile />}
      {open && (
        <Modal closeModal={setModal}>
          <SignPopUp setModal={setModal} />
        </Modal>
      )}
    </>
  );
};
export default AuthModal;
