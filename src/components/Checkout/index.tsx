import { Group } from '@vkontakte/vkui';
import styles from './styles.module.css';

interface ICheckoutProps {
    className?: string;
}

export const Checkout: React.FC<ICheckoutProps> = (props) => {
    const { className } = props;
    
    return (
        <Group className={className}>
            
        </Group>
    )
}