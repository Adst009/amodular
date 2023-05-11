import styles from './form.module.css'


const Form = () => {
    return (

<div className={styles.form}>
            <div className={styles.h21} >
                <h2> Cuentanos <br/></h2>
                <h2> sobre tu <br/></h2>
                <h2> proyecto</h2>
            </div> 


                <form className={styles.form_content}>

                        <div className="flex gap-10">

                                <input type="text"  name="name" placeholder="Nombres*"/>

                                <input type="text"  name="phone" placeholder="Apellidos*"/>

                        </div>
                        <div className="flex gap-10 pt-4">

                                <input type="number"  name="email" placeholder="Cel/tel*"/>

                                <input type="email"  name="email" placeholder="E-mail*"/>

                        </div>

                        <div className={styles.button+ " mt-10"} >
                        <button>
            Contáctanos
          </button>
                        </div>
                </form>
            </div>


);
};

export default Form;