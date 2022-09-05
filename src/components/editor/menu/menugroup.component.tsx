import { Touch_1Filled } from "@carbon/icons-react";

type MenuGroupProps = {
    children: React.ReactNode;
    label: string;
};

export default function MenuGroup({ children, label }: MenuGroupProps) {
    return (
        <>
            <div
                className="bg-wh text-sm flex items-center justify-between container px-5 font-special 
            text-title-secondary"
            >
                <div className="flex-1 mr-3 ">{label}</div>
                <div className="flex-1 shadow-button border-stroke-secondary border rounded-sm">
                    <div className="flex justify-between h-7">
                        
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
