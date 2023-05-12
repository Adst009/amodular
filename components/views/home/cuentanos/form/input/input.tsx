import styles from './styles.module.css'

interface InputProps {
    name: string;

    id: string;
    value: string;

    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({name,placeholder, id, value, onChange}) => {
    return (

        <input className={styles.input} placeholder={placeholder} name={name} value={value} id={id} onChange={onChange} type="text"/>

    );
}

export default Input;