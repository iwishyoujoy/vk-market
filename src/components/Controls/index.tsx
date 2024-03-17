import { Icon16Add, Icon16Minus } from "@vkontakte/icons";
import { Div, useAppearance } from "@vkontakte/vkui";
import { useDispatch } from "react-redux";
import cn from 'classnames';

import styles from './styles.module.css';
import { decrementItemQuantity, incrementItemQuantity } from "../../redux/cartSlice";

interface IControlsProps {
    counter: number;
    id: number;
}

export const Controls: React.FC<IControlsProps> = ({counter, id}) => {
    const dispatch = useDispatch();
    const theme = useAppearance();

    const handleIncrementClick = () => {
        dispatch(incrementItemQuantity(id));
    }

    const handleDecrementClick = () => {
        dispatch(decrementItemQuantity(id));
    }
    
    return (
        <Div className={cn(styles.controls, theme === 'light' ? styles.light : styles.dark)}>
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