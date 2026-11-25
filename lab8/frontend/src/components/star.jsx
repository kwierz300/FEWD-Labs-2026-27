import { LuCoffee } from "react-icons/lu";

export default function Star({ selected, onSelect, label, active }) {
    return (
        <button type="button" className="btn p-1 border-0"
            onClick={onSelect} aria-label={label} aria-pressed={active}>
            <LuCoffee color={selected ? "#7863FE" : "#dddddd"} size={20} aria-hidden="true" />
        </button>
    );
}
