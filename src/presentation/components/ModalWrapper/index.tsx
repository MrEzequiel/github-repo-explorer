import { useRef } from "react";
import { createPortal } from "react-dom";

import useDisableScroll from "../../../hooks/useDisableScroll";

interface IModalWrapperProps {
  children: React.ReactNode
  onClose: () => void
}

export function ModalWrapper({ children, onClose }: IModalWrapperProps) {
  useDisableScroll()
  const contentRef = useRef<HTMLDivElement>(null)

  const handleClickBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement

    if (contentRef.current && !contentRef.current.contains(target)) {
      onClose()
    }
  }

  return createPortal(
    <div
      className="opacity-0 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none animate-fade bg-black/70 p-4"
      onClick={handleClickBackdrop}
    >
      <div className="relative w-full p-9 max-w-5xl my-6 mx-auto bg-gray-950 shadow-lg overflow-y-auto max-h-dvh" ref={contentRef}>
        {children}
      </div>
    </div>,
    document.body
  )
}
