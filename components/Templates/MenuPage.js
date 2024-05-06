import Card from '../Modules/Card'
import styles from './MenuPage.module.css'

const MenuPage = ({data}) => {
  return (
    <div className={styles.container}>
        <h2>Menu</h2>
        <div className={styles.subContainer}>
            {data.map((food,index)=>(<Card key={index} {...food}/>))}
        </div>
    </div>
  )
}

export default MenuPage