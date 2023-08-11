import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { deleteFromCart, incrementProduct, decrementProduct } from '../../../../store/cart/cart.slice';
import styles from './CartItem.module.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { useAppDispatch } from '../../../../hooks/redux';
import { IProduct } from '../../../../store/products/products.type';

type CartItemProps = {
    item: IProduct;
}

const CartItem: FC<CartItemProps> = ({ item }) => {

    const dispatch = useAppDispatch();

    const deleteProduct = () => {
        dispatch(deleteFromCart(item.id))
    }

    const incrementCount = () => {
        dispatch(incrementProduct(item.id))
    }

    const decrementCount = () => {
        dispatch(decrementProduct(item.id));
    }

    return (
        <div className={styles.cart_item}>
            <Link to={`/card/${item.id}`}>
                <img src={item.image} alt="product card" />
            </Link>
            <div className={styles.cart_description}>
                <h3>{item.category}</h3>
                <h2>{item.title}</h2>
                <span>
                    {item.price} x {item.quantity} = $ {item.total.toFixed(2)}
                </span>
            </div>

            <div className={styles.cart_count}>
                <div>
                    <button disabled={item.quantity === 1} onClick={decrementCount}>
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button disabled={item.quantity === 10} onClick={incrementCount}>
                        +
                    </button>
                </div>

            </div>

            <button onClick={deleteProduct} className={styles.cart_delete}>
                <AiOutlineDelete />
            </button>
        </div>
    )
}

export default CartItem