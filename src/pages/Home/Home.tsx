import { useEffect } from 'react';
import st from './Home.module.scss'

import { useProducts } from '../../context/ProductContext';

export const Home = () => {

  const { getProducts, products, product, getProduct } = useProducts()

  useEffect(() => { getProducts() }, [])

  return (
    <div>
      <h1>Products</h1>

      <div className={st.cont}>

        <div className={st.cont__products}>
          {
            products.map(data => {
              return (
                <div key={data.id}>
                  <h5><button onClick={() => getProduct(data.id)}>{data.id}</button> -- {data.title} </h5>
                </div>
              )
            })
          }
        </div>

        <div className={st.cont__product}>
          <hr />

          {/* SI ALGO VIENE PRIMERO NULL SE LE ANTEPONE EL ? SIGNO DE SI VIENE PONGALO */}
          {/* <h5>{product?.title}</h5> */}

          {
            // TRUCO PARA QUE VENGA PONER TODOf
            product &&
            <div style={{ width: 250 }}>
              <h5>{product.title}</h5>
              <img src={product.image} width={100} height={100} />
              <h5>{product.description}</h5>
              <h5>{product.category}</h5>
            </div>
          }

        </div>

      </div>

    </div>
  )
}
