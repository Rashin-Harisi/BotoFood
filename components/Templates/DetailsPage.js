import Dollar from '../Icons/Dollar';
import Location from '../Icons/Location';
import styles from './DetailsPage.module.css'

const DetailsPage = (props) => {
    const {id, name, details, price, discount, introduction, ingredients, recipe} = props;
  return (
    <div className={styles.container}>
        <h2>Details</h2>
        <div className={styles.subContainer}>
            <div className={styles.banner}>
                <img src={`/images/${id}.jpeg`} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <span className={styles.location}>
                        <Location/>
                        {details[0].Cuisine} 
                    </span>
                    <span className={styles.price}>
                        <Dollar/>
                        {discount ? (price * (100 - discount))/100 : price} $
                    </span>    
                    {discount? <span className={styles.discount}>{discount} % OFF</span>: null}
                </div>            
            </div>
            <div className={styles.introduction}>{introduction}</div>
            <div className={styles.details}>
                <h4>Details</h4>
                <ul>
                    {details.map((detail,index)=>(
                        <li key={index}>
                            <p>{Object.keys(detail)[0]} :</p>
                            <span>{Object.values(detail)[0]}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.details}>
                <h4>Ingredients</h4>
                {ingredients.map((ingredient,index)=>(
                    <li key={index}><p>{ingredient}</p></li>
                ))}
            </div>
            <div className={styles.recipe}>
                <h4>Recipe</h4>
                {recipe.map((item,index)=>(
                    <div key={index} className={index % 2 ? styles.odd: styles.even }>
                        <span>{index + 1 }</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default DetailsPage