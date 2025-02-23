import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export default function Button({ children, onClick, disabled, loading }: ButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {loading ? 'Loading...' : children}
        </button>
    );
}