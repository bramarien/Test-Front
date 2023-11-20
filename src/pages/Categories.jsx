import { useState } from "react";
import { shelfData } from "../constants/shelfData";
import CategorieCard from "../components/CategorieCard";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";


function Categories () {

    const navigate = useNavigate()
    const [popUp, setPopUp] = useState(false);
    const [modName, setModName] = useState("");
    const [modInfo, setModInfo] = useState("");

    const printPopUp = (name, info) => {
        if (!popUp) {
            setModName(name)
            setModInfo(info)
        }
        setPopUp(!popUp)
    }

    const goToCollection = (categories) => {
        setPopUp(!popUp)
        navigate("/collection", {state: categories})
    }
    
    return(
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <Modal open={popUp} title={modName} onDismiss={printPopUp} goToCollection={goToCollection}>{"Nous avons " + modInfo + " ouvrages en possession, vous pouvez les voir en cliquant sur le bouton Collection."}</Modal>
            <div className="grid my-10 grid-cols-3 grid-rows-2 gap-6">
                { Object.entries(shelfData).map(([key, value]) => (
                    <CategorieCard name={value.name} img={value.img} key={key} len={value.books.length} printPopUp={printPopUp}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Categories;