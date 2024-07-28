import { Row } from '@/types/products'
import styles from './ProductsList.module.scss'
import { ProductItem } from './productItem/ProductItem'
import { NoResults } from './noResults/NoResults'

interface Props {
  productsList: Row[]
  filter: string
  clearFilter: () => void
}

export const ProductsList = ({ productsList, filter, clearFilter }: Props) => {
  return (
    <div className={styles.container}>
      {productsList.length === 0 ? (
        <NoResults filter={filter} clearFilter={clearFilter} />
      ) : (
        productsList.map(product => <ProductItem key={product.id} product={product} />)
      )}
    </div>
  )
}
