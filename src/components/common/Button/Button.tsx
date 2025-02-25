import  { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    type?:'submit'|'button'
}

export default function Button({ children, onClick, disabled, loading, type='button' }: ButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} type={type}>
            {loading ? 'Loading...' : children}
        </button>
    );
}