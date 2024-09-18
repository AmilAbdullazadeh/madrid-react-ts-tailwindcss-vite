import s from './style.module.css';

interface DisplayProps {
    activeLevel: string;
}

function Display({ activeLevel }: DisplayProps) {
    return (
        <div className={`${s.box} ${s.dFlex}`}>
            <h1>{activeLevel}</h1>
        </div>
    )
}

export default Display;