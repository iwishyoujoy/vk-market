import { Image, RichCell, Separator, Spacing } from "@vkontakte/vkui";
import cn from 'classnames';

import styles from './styles.module.css';

interface ICartItemProps {
    className?: string;
    separatorClassName?: string;
    title: string;
    category: string;
    description?: string;
    price: number;
    image?: string;
}

export const CartItem: React.FC<ICartItemProps> = (props) => {
    const { className, separatorClassName, title, description, price, image, category } = props;

    return (
        <>
            <RichCell
                className={styles.cell}
                text={description}
                before={
                    <Image src={image} borderRadius="s" size={120}/>
                }
                after={price}
            >
                {title}
            </RichCell>
            <Spacing size={10} className={cn(styles.separator, separatorClassName)}>
                <Separator wide/>
            </Spacing>
        </>
       
    )
}