import { IProduct } from "../products/products.type";

export interface IOrder {
    id: string;
    userId: string;
    totalPrice: number;
    products: IProduct[]
}