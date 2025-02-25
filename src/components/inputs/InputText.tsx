import './InputText.css';

interface InputTextProps {
    id: string;
    defaultValue?: string;
    placeholder: string;
    label: string;
    onChange: (event: any) => void;
    textArea?: boolean;
}

export default function InputText({ id, defaultValue, placeholder, label, onChange, textArea }: InputTextProps) {
    if (textArea) {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <textarea className='input-text textarea' id={id} placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} />
            </>
        );
    } else {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input className='input-text' type="text" id={id} placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} />
            </>
        );
    }
}