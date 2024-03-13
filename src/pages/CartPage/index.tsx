import { PanelHeader } from '@vkontakte/vkui'

import { CartItems } from '../../components/CartItems';
import { Checkout } from '../../components/Checkout';
import { Wrapper } from '../../components/Wrapper';
import styles from './styles.module.css';

export const CartPage = () => {
    return (
        <>
            <PanelHeader>VK Market</PanelHeader>
            <Wrapper>
                <div className={styles.container}>
                    <Checkout className={styles.checkout}/>
                    <CartItems className={styles.items}/>
                </div>
            </Wrapper>
        </>
    )
}