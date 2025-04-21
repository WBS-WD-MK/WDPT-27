import { X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Modal = ({ title, triggerContent, triggerStyle, children }) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialogElement = ref.current;
    if (isOpen) {
      dialogElement?.showModal();
    } else {
      dialogElement?.close();
    }
    return () => {
      if (dialogElement?.open) {
        dialogElement.close();
      }
    };
  }, [isOpen]);

  const childWithProps = React.isValidElement(children)
    ? React.cloneElement(children, { closeModal: () => setIsOpen(false) })
    : children;
  return (
    <>
      <button className={triggerStyle} onClick={() => setIsOpen(true)}>
        {triggerContent}
      </button>
      {isOpen && (
        <dialog className='modal' ref={ref}>
          <div className='modal-box'>
            <button
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              onClick={() => setIsOpen(false)}
            >
              <X className='h-5 w-5' />
            </button>

            <h3 className='font-bold text-lg m-2'>{title}</h3>
            <div className='m-2'>{childWithProps}</div>
          </div>
          <div className='modal-backdrop' onClick={() => setIsOpen(false)} />
        </dialog>
      )}
    </>
  );
};

export default Modal;
