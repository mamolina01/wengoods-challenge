'use client'
import { Row } from '@/types/products'
import { ProductsList } from './productsList/ProductsList'
import { ProductsFilter } from './productsFilter/ProductsFilter'
import { useState } from 'react'

export const ProductsManager = ({ productsList }: { productsList: Row[] }) => {
  const [filteredProducts, setFilteredProducts] = useState<Row[]>(productsList)

  return (
    <>
      <ProductsFilter productsList={productsList} setProductsList={setFilteredProducts} />
      <ProductsList productsList={filteredProducts} />
    </>
  )
}
