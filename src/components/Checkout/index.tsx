import { Group } from '@vkontakte/vkui';
import cn from 'classnames';

import styles from './styles.module.css';

interface ICheckoutProps {
    className?: string;
}

export const Checkout: React.FC<ICheckoutProps> = (props) => {
    const { className } = props;

    return (
        <Group className={cn(className, styles.container)}>
            
        </Group>
    )
}