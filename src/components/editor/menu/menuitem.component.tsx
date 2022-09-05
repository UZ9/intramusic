import { Touch_1Filled } from "@carbon/icons-react";

enum OptionType {
    Button,
    Value,
}

type MenuItemProps = {
    label: string;
};

export default function MenuItem(props: MenuItemProps) {
    return (
        <>
            <div className="py-1 px-3 font-special border-r border-stroke-secondary">
                <Touch_1Filled size={20} color={"#FF7878"} />
            </div>

            <div className="flex-grow flex justify-between">
                <div className="py-1 pl-3 font-special">499</div>
                <div className="py-1 pr-3 text-[#abababab] ">BPM</div>
            </div>
        </>
    );
}
