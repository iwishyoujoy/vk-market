import { Image, RichCell, Separator, Spacing, Text } from "@vkontakte/vkui";
import cn from 'classnames';

import styles from './styles.module.css';
import { Controls } from "../Controls";
import { Icon24DeleteOutline } from "@vkontakte/icons";

interface ICartItemProps {
    className?: string;
    separatorClassName?: string;
    title: string;
    category: string;
    description?: string;
    price: number;
    image?: string;
    id: number;
    quantity: number;
}

export const CartItem: React.FC<ICartItemProps> = (props) => {
    const { className, separatorClassName, title, description, price, image, category, quantity, id } = props;

    return (
        <>
            <RichCell
                className={styles.cell}
                text={
                    <span className={styles.description}>{description}</span>
                }
                before={
                    <Image src={image} borderRadius="m" size={120}/>
                }
                after={
                    <div className={styles.priceAndDeleteContainer}>
                        <Text className={styles.price}>{price} $</Text>
                        <div className={styles.delete}>
                            <Icon24DeleteOutline height={20} width={20}/>
                            <Text>Delete</Text>
                        </div>
                    </div>
                }
                caption={
                    <Controls counter={quantity} id={id}/>
                }
            >
                {title}
            </RichCell>
            <Spacing size={10} className={cn(styles.separator, separatorClassName)}>
                <Separator wide/>
            </Spacing>
        </>
       
    )
}