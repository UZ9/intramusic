import { Checkmark, Close } from "@carbon/icons-react";
import { useState } from "react";
import MenuButton from "./menubutton.component";

export default function MenuToggle(props) {
    const [toggle, setToggle] = useState(false);

    const enabled = "#FF7878"
    const disabled = "#637b7f"

    return (
        <>
            <MenuButton onClick={() => setToggle(true)} icon={<Checkmark size={20} color={toggle ? enabled : disabled} />} />
            <MenuButton onClick={() => setToggle(false)} icon={<Close size={20} color={toggle ? disabled : enabled} />} />
        </>
    );
}
