import styles from './form.module.css'


const Form = () => {
    return (

<div className={styles.form}>
            <div className={styles.h21} >
                <h2> Cuentanos <br/></h2>
                <h2> sobre tu <br/></h2>
                <h2> proyecto</h2>
            </div> 

             <div>
                <form className={styles.form_}>
                    <div className={styles.div_form}>
                        <div>
                        <input type="text"  name="name" placeholder="Nombres*"/>
                        </div>
                        <div >
                        <input type="text"  name="phone" placeholder="Apellidos*"/>
                        </div>
                    </div>
                    <div className={styles.div_form}>
                        <div>
                        <input type="number"  name="email" placeholder="Cel/tel*"/>
                        </div>
                        <div>
                        <input type="email"  name="email" placeholder="E-mail*"/>
                        </div>
                    </div>
                        <div className={styles.button} >
                        <button className="text-white px-2 py-2 ml-2 w-10/12">
            Contáctanos
          </button>
                        </div>
                </form>
            </div>
        </div>

);
};

export default Form;