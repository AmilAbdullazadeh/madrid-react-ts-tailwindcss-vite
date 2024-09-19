import s from './style.module.css';

interface DisplayProps {
    count: number;
}

function Display({ count }: DisplayProps) {
    return (
        <div className={`${s.box} ${s.dFlex}`}>
            <span>{count}</span>
        </div>
    )
}

export default Display;