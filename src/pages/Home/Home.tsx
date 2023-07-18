import { useEffect } from 'react';
import st from './Home.module.scss'

import { useProducts } from '../../context/ProductContext';
import { HomeProduct } from './HomeProduct';
import { HomeProducts } from './HomeProducts';

export const Home = () => {

  const { products, product, getProducts, getProduct } = useProducts()

  useEffect(() => {
    getProducts()
    getProduct(1)
  }, [])

  return (
    <div className={st.cont}>

      <h1 className={st.cont__title}>Products</h1>

      <div className={st.cont__products}>
        <HomeProducts products={products} getProduct={getProduct} />
        <HomeProduct product={product} />
      </div>

    </div>
  )
}
