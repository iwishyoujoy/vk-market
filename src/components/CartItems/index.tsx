import { Group, Spinner } from '@vkontakte/vkui';
import { Icon16ErrorCircle } from '@vkontakte/icons';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useGetCartItemsQuery } from '../../redux/services/api';
import { CartItem } from '../CartItem';
import { setCartItems } from '../../redux/cartSlice';

import styles from './styles.module.css';
import { RootState } from '../../redux/store';


interface ICartItemsProps {
    className?: string;
}

export const CartItems: React.FC<ICartItemsProps> = (props) => {
    const { className } = props;

    const dispatch = useDispatch();
    const { isLoading, isError, data } = useGetCartItemsQuery();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        if (data) {
          dispatch(setCartItems(data));
        }
     }, [data, dispatch]);

    if (isLoading) {
        return (
            <Group className={cn(className, styles.loading)}>
                <Spinner size='regular'/>
            </Group>
        )
    }

    if (isError) {
        return (
            <Group className={cn(className, styles.error)}>
                <Icon16ErrorCircle height={40} width={40} fill="#9bb2cc"/>
                <span className={styles.errorText}>Что-то пошло не так при загрузке данных, перезагрузите страницу</span>
            </Group>
        )
    }

    return (
        <Group className={className}>
            {cartItems.map((item) => {
                return (
                    <CartItem 
                        key={item.id} 
                        id={item.id}
                        title={item.title} 
                        description={item.description} 
                        price={item.price} 
                        image={item.image} 
                        category={item.category}
                        separatorClassName={styles.separator}
                        quantity={item.quantity}
                    />
                )
            })}
        </Group>
    )
}