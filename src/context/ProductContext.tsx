import { createContext, useState, useContext } from 'react';
import { ContextProducts, stateProduct, stateProducts } from '../interfaces/Products';
import { getProductRequest, getProductsRequest } from '../api/products';

export const ProductContext = createContext<ContextProducts | null>(null);

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (!context) throw new Error("useProducts must be used within an AuthProvider");
  return context;
};

export const ProductsProvider = ({ children }: any) => {

  const [products, setProducts] = useState<stateProducts>({ loading: true, products: [], error: null })
  const [product, setProduct] = useState<stateProduct>({ loading: true, product: null, error: null })

  const getProducts = async () => {

    try {
      const jsonData = await getProductsRequest()
      setProducts({ loading: false, products: jsonData, error: null })
      // setProduct(jsonData[0])
    } catch (error) {
      setProducts({ loading: false, products: [], error: "Ups algo salio mal" })
      console.log(error)
    }

  }

  const getProduct = async (id: number) => {

    setProduct({ loading: true, product: null, error: null })

    try {
      const jsonData = await getProductRequest(id)
      setProduct({ loading: false, product: jsonData, error: null })
    } catch (error) {
      setProduct({ loading: false, product: null, error: "Ups algo salio mal" })
      console.log(error)
    }

  }


  return (
    <ProductContext.Provider value={{ products, product, getProducts, getProduct }}>
      {children}
    </ProductContext.Provider >
  )

}



