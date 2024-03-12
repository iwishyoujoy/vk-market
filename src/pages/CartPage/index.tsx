import { PanelHeader } from '@vkontakte/vkui'

import { CartItems } from '../../components/CartItems';
import { Checkout } from '../../components/Checkout';
import { Wrapper } from '../../components/Wrapper';
import styles from './styles.module.css';

export const CartPage = () => {
    return (
        <>
            <PanelHeader>VK market</PanelHeader>
            <Wrapper>
                <div className={styles.container}>
                    <CartItems className={styles.items}/>
                    <Checkout className={styles.checkout}/>
                </div>
            </Wrapper>
        </>
    )
}