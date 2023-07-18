import { createContext, useState, useContext } from 'react';
import { ContextProducts, Product } from '../interfaces/Products';
import { getProductRequest, getProductsRequest } from '../api/products';

const initDate: Product = {
  id: 2,
  title: "",
  price: 2,
  description: "",
  category: 'electronics',
  image: "",
  rating: {
    count: 3,
    rate: 3
  }
}

export const ProductContext = createContext<ContextProducts | null>(null);

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (!context) throw new Error("useProducts must be used within an AuthProvider");
  return context;
};

export const ProductsProvider = ({ children }: any) => {

  const [products, setProducts] = useState<Product[]>([])
  const [product, setProduct] = useState<Product>(initDate)

  const getProducts = async () => {

    try {
      const jsonData = await getProductsRequest()

      console.log(jsonData)

      setProducts(jsonData)
      setProduct(jsonData[0])
    } catch (error) {
      setProducts([])
      console.log(error)
      alert("Ups algo salio mal")
    }

  }

  const getProduct = async (id: number) => {
    const jsonData = await getProductRequest(id)
    setProduct(jsonData)
  }

  return (
    <ProductContext.Provider value={{ products, product, getProducts, getProduct }}>
      {children}
    </ProductContext.Provider >
  )

}



