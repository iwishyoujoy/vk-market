import { Button, Title } from '@vkontakte/vkui';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import styles from './styles.module.css';
import { RootState } from '../../../redux/store';
import { selectTotalCartPrice } from '../../../redux/cartSlice';
import React from 'react';

interface ICheckoutFloatingBlock {
    className?: string;
}
export const CheckoutFloatingBlock: React.FC<ICheckoutFloatingBlock> = ({className}) => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const delivery = useSelector((state: RootState) => state.cart.deliveryCost);
    const totalCartItems = useSelector(selectTotalCartPrice);

    return (
        <div className={cn(styles.floatingBlock, className)}>
            <div className={styles.checkout}>
                <Title level='3' className={styles.checkoutItem}>Total:</Title>
                <Title level='3' className={styles.checkoutItem}>{((cartItems.length > 0 ? delivery : 0) + totalCartItems).toFixed(2)} $</Title>
            </div>
            <Button className={styles.button} size='m'>Proceed to checkout</Button>
        </div>
    )
}