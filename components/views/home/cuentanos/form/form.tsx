import styles from './styles.module.css'
import {useState} from "react";
import Input from "./input/input";

export default function Form() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    return (
        <>
            <div className={styles.form}>
                <form action="">
                    <div className={styles.item_input}>
                        <Input placeholder={"Nombres*"}  name="name" value={name} id="name"
                               onChange={(event) => setName(event.target.value)} />
                        <Input placeholder={"Apellidos*"}  name="lastName" value={lastName} id="lastName"
                               onChange={(event) => setLastName(event.target.value)} />
                        <Input placeholder={"Cel/tel*"}  name="phone" value={phone} id="phone"
                               onChange={(event) => setPhone(event.target.value)} />
                        <Input placeholder={"E-mail*"}  name="email" value={email} id="email"
                               onChange={(event) => setEmail(event.target.value)} />

                    </div>
                    <button>CONTÁCTANOS</button>
                </form>
            </div>
        </>
    )
}