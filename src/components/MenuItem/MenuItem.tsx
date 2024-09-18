import s from "./style.module.css";

interface MenuItemProps {
    isActive?: boolean;
    level: string;
    handleClick: (level: string) => void;
}

function MenuItem (props: MenuItemProps) {
    const { level, isActive, handleClick } = props;
    return (
        <div onClick={() => handleClick(level)} className={`${s.item} ${isActive && s.active}`}>{level}</div>
    );
}

export default MenuItem;