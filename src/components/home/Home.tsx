import { getProducts } from '@/actions/getProducts'
import { ProductsManager } from './productsManager/ProductsManager'

export const Home = async () => {
  const {
    data: { rows: productsList }
  } = await getProducts()

  return <ProductsManager productsList={productsList} />
}
