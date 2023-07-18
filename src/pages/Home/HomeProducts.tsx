import { stateProducts } from '../../interfaces/Products';

interface Props { products: stateProducts, getProduct: (id: number) => Promise<void> }

export const HomeProducts = ({ products, getProduct }: Props) => {

    const { loading, error, products: data } = products

    return (
        <div >
            {loading && <h3>loading..</h3>}
            {error && <h3>Lo sentimos algo salio mal</h3>}

            {
                data.map(data => {
                    return (
                        <div key={data.id}>
                            <h5><button onClick={() => getProduct(data.id)}>{data.id}</button> -- {data.title} </h5>
                        </div>
                    )
                })
            }

        </div>
    )
}
