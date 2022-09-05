import { CarbonIconType } from "@carbon/icons-react";
import { ReactElement } from "react";

type MenuButtonProps = {
    icon?: ReactElement,
    label?: string
};

export default function MenuButton({ icon, label }: MenuButtonProps) {
    return (
        <>
            {label ?? (
                <div className="flex w-2  flex-grow justify-center py-1 px-3 font-special border-r border-stroke-secondary">
                    {icon}
                </div>
            )}
        </>
    );
}
