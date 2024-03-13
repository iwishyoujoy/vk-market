import { Button, Group, Separator, Spacing, Title } from '@vkontakte/vkui';
import cn from 'classnames';

import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { selectTotalCartPrice } from '../../redux/cartSlice';

interface ICheckoutProps {
    className?: string;
}

export const Checkout: React.FC<ICheckoutProps> = (props) => {
    const { className } = props;

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const delivery = useSelector((state: RootState) => state.cart.deliveryCost);
    const totalCartItems = useSelector(selectTotalCartPrice);

    return (
        <Group className={cn(className, styles.container)}>
            <Title level="2" className={styles.title}>Checkout</Title>
            <Spacing size={10} className={styles.separator}>
                <Separator wide/>
            </Spacing>
            <div className={styles.total}>
                <span className={styles.text}>{cartItems.length} items:</span>
                <span className={cn(styles.text, styles.bold)}>{totalCartItems.toFixed(2)} $</span>
            </div>
            <div className={styles.total}>
                <span className={styles.text}>Shipping:</span>
                <span className={cn(styles.text, styles.bold)}>{cartItems.length > 0 ? delivery : 0} $</span>
            </div>
            <Spacing size={10} className={styles.separator}>
                <Separator wide/>
            </Spacing>
            <div className={styles.checkout}>
                <Title level='3' className={styles.checkoutItem}>Total:</Title>
                <Title level='3' className={styles.checkoutItem}>{((cartItems.length > 0 ? delivery : 0) + totalCartItems).toFixed(2)} $</Title>
            </div>
            <Button className={styles.button} size='m'>Proceed to checkout</Button>
        </Group>
    )
}