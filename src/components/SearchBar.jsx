import SearchIcon from "../assets/rechercher.png"

function SearchBar(props) {

    return (
        <div>
            <h1 className='text-center text-white font-semibold pb-1'>Rechercher:</h1>
            <div className='relative w-52'>
                <input className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-12 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Nom de Livre" value={props.fSearch} onChange={(e) => props.setFSearch(e.target.value)} />
                <button type="submit" className="absolute w-7 right-3 top-1.5">
                    <img alt="search loupe" src={SearchIcon} />
                </button>
            </div>
        </div>
    )
}

export default SearchBar;