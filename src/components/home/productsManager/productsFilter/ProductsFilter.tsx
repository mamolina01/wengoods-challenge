import { ChangeEvent } from 'react'
import { IoSearch } from 'react-icons/io5'
import styles from './ProductsFilter.module.scss'

interface Props {
  productName: string
  filterByName: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ProductsFilter = ({ productName, filterByName }: Props) => {
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
