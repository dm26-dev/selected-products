export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
}

export type Category = "men's clothing" | "jewelery" | "electronics" | "women's clothing";

export interface Rating {
    count: number,
    rate: number
}

export type ContextProducts = {
    products: Product[],
    product: Product | null,
    getProducts: () => Promise<void>
    getProduct: (id: number) => Promise<void>
}
