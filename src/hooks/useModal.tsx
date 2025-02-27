import { useQueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";

export function useModal() {
    const queryClient = useQueryClient();

    const openModal = (content: ReactNode) => {
        queryClient.setQueryData(["modal"], { isOpen: true, content });
    };

    const closeModal = () => {
        queryClient.setQueryData(["modal"], { isOpen: false, content: null });
    };

    return { openModal, closeModal };
}
