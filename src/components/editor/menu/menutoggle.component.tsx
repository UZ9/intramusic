import { Checkmark, Close } from "@carbon/icons-react";
import MenuButton from "./menubutton.component";

export default function MenuToggle(props) {
    return (
        <>
            

            <MenuButton icon={<Checkmark size={20} color={"#FF7878"} />} />
            <MenuButton icon={<Close size={20} color={"#C3BFBF"} />} />
        </>
    );
}
