import { useState } from "react";
import Filter from "../components/Filter.jsx";
import { bookData } from "../constants/bookData.js"

function Collection() {

    const [filterCheck, setFilterCheck] = useState(true);
    const activateFilter = () => {
        setFilterCheck(!filterCheck)
    }


    return (
        <div>
            <Filter fCheck={filterCheck} actFilter={activateFilter} />
            <div className="grid grid-cols-3 mt-14 gap-2">
                {
                    Object.entries(bookData).map(([key, value]) => (
                        <p className={filterCheck ? "transition-all duration-500 ml-96" : "transition-all duration-500"} alt="key">{value.title}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default Collection;
