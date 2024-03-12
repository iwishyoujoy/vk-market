import { Group } from '@vkontakte/vkui';

import styles from './styles.module.css';

interface ICartItemsProps {
    className?: string;
}

export const CartItems: React.FC<ICartItemsProps> = (props) => {
    const { className } = props;

    return (
        <Group className={className}>
            
        </Group>
    )
}