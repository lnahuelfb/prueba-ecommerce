import { FC } from "react"
import { Product } from "../../interfaces/product"
import styles from './productCard.module.css'
import { Link } from 'react-router-dom'

interface props {
  data: Product
}

const productCard: FC<props> = ({
  data: {
    id,
    title,
    price,
    description,
    image,
    rating: {
      rate, count
    }
  }
}) => {

  return (
    <div className={styles.container}>
      <Link to={id.toString()}>
        <figure className={styles.imageContainer}>
          <img src={image} alt={title} />
        </figure>
      </Link>
      <div className={styles.data}>
        <h2>{rate}</h2>
        <small>{count} calificaciones</small>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <h3>${price}</h3>
      </div>
    </div>
  )
}

export default productCard