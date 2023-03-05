import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../../interfaces/product'
import styles from './product.module.css'

const ProductPage: FC = () => {
  const [product, setProduct] = useState<Product>()
  const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams()

  const fetchData = async (API: string) => {
    setIsLoading(true)
    try {
      const res = await fetch(API)
      const data = await res.json()

      setIsLoading(false)
      setProduct(data)

      return data
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData(`https://fakestoreapi.com/products/${id?.toString()}`)
  }, [id])

  const Loading: FC = () => {
    return (
      <div className={styles.app}>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isLoading) return <Loading />

  return (
    <div className={styles.container}>
      <h1>{product?.title}</h1>
    </div>
  )
}

export default ProductPage