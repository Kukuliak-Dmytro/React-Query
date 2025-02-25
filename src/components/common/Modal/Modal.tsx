import { ReactNode } from "react";
import './Modal.css'
import  ReactDOM  from "react-dom";
interface ModalProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}



export default function Modal({ children, open, onClose }: ModalProps) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-body">
                <button type="button" onClick={onClose}>X</button>
                {children}
            </div>
        </>,
        document.getElementById('portal') as HTMLElement
    );
}