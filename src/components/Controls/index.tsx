import { Icon16Add, Icon16Minus } from "@vkontakte/icons";
import { Div } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";

import styles from './styles.module.css';
import { decrementItemQuantity, incrementItemQuantity } from "../../redux/cartSlice";

interface IControlsProps {
    counter: number;
    id: number;
}

export const Controls: React.FC<IControlsProps> = ({counter, id}) => {
    const dispatch = useDispatch();

    const handleIncrementClick = () => {
        dispatch(incrementItemQuantity(id));
    }

    const handleDecrementClick = () => {
        dispatch(decrementItemQuantity(id));
    }
    
    return (
        <Div className={styles.controls}>
            <Icon16Minus 
                height={20} 
                width={20} 
                className={counter > 1 ? styles.active : styles.disabled}
                onClick={handleDecrementClick}
            />
            {counter}
            <Icon16Add 
                height={20} 
                width={20} 
                className={counter < 10 ? styles.active : styles.disabled}
                onClick={handleIncrementClick}
            />
        </Div>        
    )
}