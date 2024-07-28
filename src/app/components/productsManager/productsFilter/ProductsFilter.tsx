import { Row } from '@/types/products'
import { ChangeEvent, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import styles from './ProductsFilter.module.scss'

interface Props {
  productsList: Row[]
  setProductsList: (product: Row[]) => void
}

export const ProductsFilter = ({ productsList, setProductsList }: Props) => {
  const [productName, setProductName] = useState<string>('')

  const filterByName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    setProductName(name)
    const filteredProducts = productsList.filter(product => product.title.toLowerCase().includes(name.toLowerCase()))
    setProductsList(filteredProducts)
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search product by name"
          value={productName}
          onChange={filterByName}
          className={styles.input}
        />
      </div>
      <button className={styles.button}>
        <IoSearch className={styles.icon} />
        <span>Search</span>
      </button>
    </div>
  )
}
