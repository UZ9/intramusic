import { CarbonIconType } from "@carbon/icons-react";
import { ReactElement } from "react";

type MenuInputProps = {
    placeholder?: string;
    label?: string;
};

export default function MenuInput({ placeholder, label }: MenuInputProps) {
    return (
        <div className="flex-grow flex justify-between">
            <div className="py-1 pl-3 font-special">{placeholder}</div>
            <div className="py-1 pr-3 text-[#abababab] ">{label}</div>
        </div>
    );
}
