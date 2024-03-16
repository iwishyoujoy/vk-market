import { Image, RichCell, Separator, Spacing, Text, Title } from "@vkontakte/vkui";
import { Icon24DeleteOutline } from "@vkontakte/icons";
import { useDispatch } from "react-redux";
import cn from 'classnames';

import styles from './styles.module.css';
import { Controls } from "../Controls";
import { removeItem } from "../../redux/cartSlice";

interface ICartItemProps {
    className?: string;
    separatorClassName?: string;
    title: string;
    description?: string;
    price: number;
    image?: string;
    id: number;
    quantity: number;
}

export const CartItem: React.FC<ICartItemProps> = (props) => {
    const { className, separatorClassName, title, description, price, image, quantity, id } = props;
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(removeItem(id));
    }

    return (
        <>
            <RichCell
                className={cn(styles.cell, className)}
                text={
                    <Text weight="3" className={styles.description}>{description}</Text>
                }
                before={
                    <Image src={image} borderRadius="m" size={120}/>
                }
                after={
                    <div className={styles.priceAndDeleteContainer}>
                        <Text className={styles.price}>{(price * quantity).toFixed(2)} $</Text>
                        <div className={styles.delete} onClick={handleDeleteClick}>
                            <Icon24DeleteOutline height={20} width={20}/>
                            <Text>Delete</Text>
                        </div>
                    </div>
                }
                caption={
                    <Controls counter={quantity} id={id}/>
                }
            >
                <Title className={styles.title}>{title}</Title>
            </RichCell>
            <Spacing size={10} className={cn(styles.separator, separatorClassName)}>
                <Separator wide/>
            </Spacing>
        </>
       
    )
}