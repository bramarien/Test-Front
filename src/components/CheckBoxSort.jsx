function InputBox(props) {

    return (
        <div className="flex">
            <input className="w-5 ml-16 mr-5" type="radio" value={props.value} name={props.name} checked={props.toCheck === props.value} onChange={(e) => props.sort(e.target.value)} />
            <p>{props.children}</p>
        </div>
    )
}


function CheckBoxSort(props) {

    return (
        <div className="flex flex-col text-center text-white bg-slate-800 my-5 mx-10 rounded-xl shadow-xl shadow-gray-600">
            <h1 className="font-semibold pt-4 pb-2 mx-4 border-b-2 border-gray-700 text-xl">Trier par:</h1>

            <div className="flex flex-col mx-7 mt-3 pb-3 text-gray-300 border-b-2 border-gray-700 justify-center">
                <h1 className="text-lg pb-3">Ordre</h1>
                <InputBox settings={props.settings} sort={props.sort} value="Date" name="Sort" toCheck={props.settings.sortType}>Année</InputBox>
                <InputBox settings={props.settings} sort={props.sort} value="Alpha" name="Sort" toCheck={props.settings.sortType}>Alphabétique</InputBox>
            </div>

            <div className="flex flex-col mx-7 mt-3 pb-3 text-gray-300 border-b-2 border-gray-700 justify-center">
                <h1 className="text-lg pb-3">Disponibilité</h1>
                <InputBox settings={props.settings} sort={props.sort} value="Disponible" name="available" toCheck={props.settings.available}>Disponible</InputBox>
                <InputBox settings={props.settings} sort={props.sort} value="Emprunté" name="available" toCheck={props.settings.available}>Emprunté</InputBox>
                <InputBox settings={props.settings} sort={props.sort} value="Both" name="available" toCheck={props.settings.available}>Les deux</InputBox>
            </div>

            <div className="flex flex-col mx-7 mt-3 pb-3 text-gray-300 border-b-2 border-gray-700 justify-center">
                <h1 className="text-lg pb-3">Genre</h1>
                <InputBox settings={props.settings} sort={props.sort} value="None" name="genre" toCheck={props.settings.genre}>Tous</InputBox>
                <InputBox settings={props.settings} sort={props.sort} value="Classiques" name="genre" toCheck={props.settings.genre}>Classiques</InputBox>
                <InputBox settings={props.settings} sort={props.sort} value="Science-Fiction" name="genre" toCheck={props.settings.genre}>Science-Fiction</InputBox>
                <InputBox settings={props.settings} sort={props.sort} value="Fantasy" name="genre" toCheck={props.settings.genre}>Fantasy</InputBox>
                <InputBox settings={props.settings} sort={props.sort} value="Dystopies" name="genre" toCheck={props.settings.genre}>Dystopies</InputBox>
                <InputBox settings={props.settings} sort={props.sort} value="Aventures" name="genre" toCheck={props.settings.genre}>Aventures</InputBox>
                <InputBox settings={props.settings} sort={props.sort} value="Philosophie" name="genre" toCheck={props.settings.genre}>Philosophie</InputBox>
            </div>

            <button className="mx-16 my-6 p-2 bg-red-800 rounded-xl hover:bg-red-600 text-lg" onClick={props.reset}>Réinitialiser</button>
        </div>
    )

}

export default CheckBoxSort;