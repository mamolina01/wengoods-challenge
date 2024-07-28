import { Row } from '@/types/products'
import styles from './ProductsList.module.scss'
import { ProductItem } from './productItem/ProductItem'

export const ProductsList = ({ productsList }: { productsList: Row[] }) => {
  return (
    <div className={styles.container}>
      {productsList.length === 0 ? (
        // <TextContainer text="No results" />
        <p>No results</p>
      ) : (
        productsList.map(product => <ProductItem key={product.id} product={product} />)
      )}
    </div>
  )
}
