import { createPortal } from "react-dom";

type Props = {
  closeModal: (value: React.SetStateAction<boolean>) => void;
};

export function BackDrop({ closeModal }: Props) {
  return (
    <div
      onClick={() => closeModal(false)}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-30 overflow-x-hidden overflow-y-hidden w-full h-full"
    />
  );
}

type ModalProps = {
  closeModal: (value: React.SetStateAction<boolean>) => void;
  children: React.ReactNode;
};
export function Modal({ closeModal, children }: ModalProps) {
  return createPortal(
    <>
      <BackDrop closeModal={closeModal} />
    </>,
    document.getElementById("modal")!
  );
}
