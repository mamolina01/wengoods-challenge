'use client'
import { Row } from '@/types/products'
import { ProductsList } from './productsList/ProductsList'
import { ProductsFilter } from './productsFilter/ProductsFilter'
import { ChangeEvent, useState } from 'react'

export const ProductsManager = ({ productsList }: { productsList: Row[] }) => {
  const [filteredProducts, setFilteredProducts] = useState<Row[]>(productsList)
  const [filter, setFilter] = useState<string>('')

  const filterByName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    setFilter(name)
    const filteredProducts = productsList.filter(product => product.title.toLowerCase().includes(name.toLowerCase()))
    setFilteredProducts(filteredProducts)
  }

  const clearFilter = () => {
    setFilter('')
    setFilteredProducts(productsList)
  }

  return (
    <>
      <ProductsFilter productName={filter} filterByName={filterByName} />
      <ProductsList productsList={filteredProducts} filter={filter} clearFilter={clearFilter} />
    </>
  )
}
