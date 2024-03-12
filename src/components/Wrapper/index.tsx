import { ReactNode } from "react";
import cn from 'classnames';

import styles from './styles.module.css';

interface IWrapperProps {
    className?: string;
    children: ReactNode
}

export const Wrapper: React.FC<IWrapperProps> = ({className, children}) => {
    return (
        <div className={cn(className, styles.wrapper)}>
            {children}
        </div>
    )
}