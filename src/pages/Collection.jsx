import { useState } from "react";
import { bookData } from "../constants/bookData.js"
import Filter from "../components/Filter.jsx";
import BookGrid from "../components/BookGrid.jsx";
import { useLocation } from "react-router-dom";


function Collection() {

    const location = useLocation()

    const [data, setData] = useState(bookData);

    const defaultSettings = { sortType: "None", available: "Both", genre: "None" };
    const [filterCheck, setFilterCheck] = useState(true);
    const [filterSetting, setFilterSetting] = useState(() => {
        if (location.state)
            return { sortType: "None", available: "Both", genre: location.state }
        return defaultSettings
    });
    const [filterSearch, setFilterSearch] = useState("");

    function filterReset() {
        setData([...bookData])
        setFilterSetting(defaultSettings)
        setFilterSearch("")
    }

    const sortByDate = (arr) => arr.sort((a, b) => (a.year > b.year) ? 1 : -1);
    const sortByAplha = (arr) => arr.sort((a, b) => (a.title.localeCompare(b.title)));

    function filterSort(value) {
        if (value === "Date" || value === "Alpha") {
            let newData = [...data]
            if (value === "Date")
                newData = sortByDate(newData)
            else if (value === "Alpha")
                newData = sortByAplha(newData)
            setData(newData)
            setFilterSetting((prevState) => {
                return ({
                    ...prevState,
                    sortType: value
                })
            })
        }
        else if (value === "Both" || value === "Disponible" || value === "Emprunté") {
            setFilterSetting((prevState) => {
                return ({
                    ...prevState,
                    available: value
                })
            })
        }
        else if (value === "None" || value === "Classiques" || value === "Science-Fiction" ||
            value === "Fantasy" || value === "Dystopies" || value === "Aventures" || value === "Philosophie") {
            setFilterSetting((prevState) => {
                return ({
                    ...prevState,
                    genre: value
                })
            })
        }
    }

    return (
        <div>
            <Filter sort={filterSort} reset={filterReset} fCheck={filterCheck} setFCheck={setFilterCheck} settings={filterSetting} fSearch={filterSearch} setFSearch={setFilterSearch} />
            <BookGrid data={data} filterCheck={filterCheck} settings={filterSetting} fSearch={filterSearch}/>
        </div>
    );
}

export default Collection;
