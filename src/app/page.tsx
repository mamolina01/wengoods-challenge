import Image from 'next/image'
import { ProductsList } from './components/productsList/ProductsList'
import { products } from '@/constants/products'

export default function Home() {
  const {
    data: { rows: productsList }
  } = products

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ProductsList productsList={productsList} />
    </main>
  )
}
