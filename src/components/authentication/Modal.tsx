import { createPortal } from "react-dom";

type Props = {
  closeModal: (value: React.SetStateAction<boolean>) => void;
};

export function BackDrop({ closeModal }: Props) {
  return (
    <div
      onClick={() => closeModal(false)}
      className="fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-30"
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
      <div className="fixed transform translate-x-[50%] translate-y-[50%] h-20 w-20 bg-yellow-300 z-30">
        {children}
      </div>
    </>,
    document.getElementById("modal")!
  );
}
