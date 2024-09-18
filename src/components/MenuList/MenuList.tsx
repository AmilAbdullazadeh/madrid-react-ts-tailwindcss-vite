import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import s from "./style.module.css";

interface MenuListProps {
    activeLevel: string;
    handleClick: (level: string) => void;
}

function MenuList({ activeLevel, handleClick }: MenuListProps) {
  const [levels, setLevels] = useState<string[]>(["Hard", "Medium", "Easy", "Random"]);

  return (
    <div className={s.box}>
      {
        levels.map((level, index) => (
            <MenuItem key={index} handleClick={handleClick} isActive={level === activeLevel}  level={level} />
        ))
      }
    </div>
  );
}

export default MenuList;
