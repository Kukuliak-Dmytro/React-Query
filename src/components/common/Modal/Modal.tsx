import ReactDOM from "react-dom";
import { ReactNode } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import "./Modal.css";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}
interface GlobalModalType {
    isOpen: boolean;
    content: ReactNode | null;
}

export default function Modal({ open, onClose, children }: ModalProps) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-body">
                <button type="button" onClick={onClose}>X</button>
                {children}
            </div>
        </>,
        document.getElementById("portal") as HTMLElement
    );
}

export function GlobalModal() {
    const queryClient = useQueryClient();
    const { data } = useQuery<GlobalModalType>({
        queryKey: ["modal"],
        queryFn: async () => ({ isOpen: false, content: null }),
        initialData: { isOpen: false, content: null }
    });

    return (
        <Modal open={data?.isOpen ?? false} onClose={() => queryClient.setQueryData<GlobalModalType>(["modal"], ()=>{
            return {isOpen:false, content:null}
        })}>
            {data?.content ?? null}
        </Modal>
    );
}
