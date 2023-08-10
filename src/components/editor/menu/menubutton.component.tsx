import { CarbonIconType } from "@carbon/icons-react";
import { MouseEventHandler, ReactElement } from "react";

type MenuButtonProps = {
    icon?: ReactElement,
    label?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
};

export default function MenuButton({ icon, label, onClick }: MenuButtonProps) {
    return (
        <>
        
            {label ?? (
            
                <button onClick={(event) => { if (onClick) onClick(event) }} className="bg-[#15171f] hover:bg-black text-logo-primary flex w-2  flex-grow justify-center py-1 px-3 font-special border-r border-stroke-secondary">
                    {(label && label != "") ? label : icon}
                </button>
            )}
        </>
    );
}
