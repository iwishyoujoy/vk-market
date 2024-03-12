import { RichCell } from "@vkontakte/vkui";

interface ICartItemProps {
    className?: string;
}

export const CartItem: React.FC<ICartItemProps> = (props) => {
    const { className } = props;

    return (
        <RichCell />
    )
}