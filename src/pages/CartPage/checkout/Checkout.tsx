import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { useAuth } from '../../../hooks/useAuth';
import { getTotalPrice, postOrder } from '../../../store/cart/cart.slice';
import styles from './Checkout.module.scss';

const Checkout = () => {

    const cart = useAppSelector(state => state.cartSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [cart])

    const { isAuth } = useAuth();

    const sendOrder = () => {
        dispatch(postOrder(cart));
    }


    return (
        <div className={styles.checkout}>
            <div>
                <p>
                    {" "}
                    <span>합계:</span> $ {cart.totalPrice.toFixed(2)}
                </p>

                {isAuth ?
                    <button
                        className={styles.checkout_button}
                        onClick={() => sendOrder()}
                    >
                        계산하기
                    </button>
                    :
                    <Link className={styles.checkout_button} to="/login">
                        로그인
                    </Link>
                }

            </div>
        </div>
    )
}

export default Checkout