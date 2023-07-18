import { stateProduct } from '../../interfaces/Products';

interface Props { product: stateProduct }

export const HomeProduct = ({ product }: Props) => {

    const { loading, error, product: pr } = product

    return (
        <div>
            {loading && <h3>loading..</h3>}
            {error && <h3>Lo sentimos algo salio mal</h3>}

            {
                pr &&
                <div style={{ width: 250 }}>
                    <h5>{pr.title}</h5>
                    <img src={pr.image} width={100} height={100} />
                    <h5>{pr.description}</h5>
                    <h5>{pr.category}</h5>
                </div>
            }

        </div>


    )
}