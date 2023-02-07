import styles from './MyInput.module.css'

export const MyInput = () => {
    return(
       <input className={styles.myInput} type='text' placeholder="Введите название товара..."/>
    )
}