import { useState, useEffect, FC } from 'react'
import ProductCard from '../../components/productCard/productCard'
import styles from './Products.module.css'
import { Product } from '../../interfaces/product'

const App: FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async (API: string) => {
    setIsLoading(true)
    try {
      const res = await fetch(API)
      const data = await res.json()

      setIsLoading(false)
      setProducts(data)
      return data
    } catch (error) {
      setIsLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData('https://fakestoreapi.com/products')
  }, [])


  const Loading: FC = () => {
    return (
      <div className={styles.app}>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={styles.App}>
      <h1>Tienda</h1>
      <div className={styles.ship}>
        {
          products?.map((product: Product) => <ProductCard data={product} key={product.id} />)
        }
      </div>
    </div>
  )
}

export default App
