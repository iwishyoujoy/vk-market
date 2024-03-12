import { Icon16Add, Icon20DeleteOutline, Icon16Minus } from "@vkontakte/icons";
import { Div } from "@vkontakte/vkui";

import styles from './styles.module.css';

interface IControlsProps {
    counter: number;
    id: number;
}

export const Controls: React.FC<IControlsProps> = ({counter, id}) => {
    return (
        <Div className={styles.controls}>
            <Icon16Minus height={20} width={20} className={counter > 1 ? styles.active : styles.disabled}/>
            {counter}
            <Icon16Add height={20} width={20} className={counter < 10 ? styles.active : styles.disabled}/>
        </Div>        
    )
}