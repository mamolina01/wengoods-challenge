import { products } from '@/constants/products'
import { ProductsManager } from '../components/productsManager/ProductsManager'

export default function Home() {
  const {
    data: { rows: productsList }
  } = products

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center p-4 md:p-5">
      <h4 className="text-lg">Administrator Panel</h4>
      <ProductsManager productsList={productsList} />
    </main>
  )
}
