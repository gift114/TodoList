import styles from './Style/Footer.module.css'

export default function Footer( {totalTodos, completedCount }){
    return <div className={styles.footer}>
        <p>Task Completed: {completedCount}</p>
        <p>Total Task: {totalTodos}</p>
    </div>
}