import { Touch_1Filled } from "@carbon/icons-react";
import MenuButton from "../menu/menubutton.component";
import MenuCategory from "../menu/menucategory.component";
import MenuGroup from "../menu/menugroup.component";
import MenuInput from "../menu/menuinput.component";
import MenuToggle from "../menu/menutoggle.component";

export default function SideMenu() {
    return (
        <div className="flex-col w-[22rem] border-r border-t border-stroke-secondary bg-sidebar-background">
            <div className="flex flex-grow flex-col h-16 border-b mb-5 border-stroke-secondary justify-center">
                <div className="text-center text-[1.35em] mt-2 font-title font-bold text-title-secondary">
                    Rhythm
                </div>
            </div>

            <MenuCategory title="Tempo">
                <MenuGroup label="Beats per Minute">
                    <MenuButton
                        icon={<Touch_1Filled size={20} color={"#FF7878"} />}
                    />
                    <MenuInput placeholder="100" label="BPM" />
                </MenuGroup>

                <MenuGroup label="Beats per Minute">
                    <MenuButton
                        icon={<Touch_1Filled size={20} color={"#FF7878"} />}
                    />
                    <MenuInput placeholder="100" label="BPM" />
                </MenuGroup>

                <MenuGroup label="Some Option">
                    <MenuInput placeholder="100" label="BPM" />
                </MenuGroup>

                <MenuGroup label="Some Option">
                    <MenuToggle />
                </MenuGroup>
            </MenuCategory>
        </div>
    );
}