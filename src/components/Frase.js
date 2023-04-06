import styles from './Frase.module.css';

function Frase({nome}){
    return(
        <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent}>{nome}</h1>
            <p className={styles.fraseContent}> componente estilizado</p>
        </div>
    )
}
export default Frase