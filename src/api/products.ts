import { instance } from './instance'

import { Product } from '../interfaces/Products';

// https://fakestoreapi.com/ API DOCUMENTACIÓN

export const getProductsRequest = async (): Promise<Product[]> => {

    const resp = await instance.get<Product[]>("/products")

    const jsonData = resp.data

    // LOVE TS :D RECORDAR COLOCARLO EN LOS DOS XD

    return jsonData

}

export const getProductRequest = async (id: number): Promise<Product> => {

    const resp = await instance.get<Product>(`/products/${id}`)

    const jsonData = resp.data

    return jsonData

}

