import React, { useEffect } from 'react'
import CartEmpty from '../../../components/cart-empty/CartEmpty';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useAuth } from '../../../hooks/useAuth'
import { fetchOrder } from '../../../store/order/order.slice';
import OrderItem from './order-item/OrderItem';
import styles from './OrdersList.module.scss';

const OrdersList = () => {
    const { id } = useAuth();
    const { order } = useAppSelector(state => state.orderSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOrder(id));
    }, [id])

    if (!order.length) {
        return <CartEmpty title="주문 내역" />
    }

    return (
        <div className={styles.orders}>
            {order.map(item => (
                <div key={item.id}>
                    <div className={styles.order_header}>
                        <h3>주문 번호_{item.id}</h3>
                        <p>합계: $ {item.totalPrice.toFixed(2)}</p>
                    </div>

                    <ul className={styles.orders_list}>
                        {item.products.map(order => (
                            <OrderItem key={order.id} order={order} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default OrdersList