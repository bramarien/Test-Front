import SearchBar from "./SearchBar";
import RadioFilter from "./RadioFilter";

function Filter(props) {

    return (
        <div className="flex ">
            <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" defaultChecked={props.fCheck}/>
            <label htmlFor="drawer-toggle" className="fixed opacity-80 z-10 left-0 inline-block p-4 transition-all duration-500 bg-gray-700 rounded-lg peer-checked:rotate-180 peer-checked:left-96" onClick={() => props.setFCheck(!props.fCheck)}>
                <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
                <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
            </label>
            <div className="fixed top-0 pt-20 left-0 z-20 w-96 h-full transition-all duration-500 transform -translate-x-full bg-gray-700  shadow-lg peer-checked:translate-x-0">
                <div className="mx-16 my-5 rounded-xl shadow-xl shadow-gray-600 text-center bg-gray-800">
                    <h2 className="text-xl pt-4 font-sans text-white font-semibold">Filtre</h2>
                    <p className="py-4 text-base text-gray-300 font-semibold">Triez comme vous le souhaitez.</p>
                </div>
                <div className="flex justify-center">
                    <SearchBar fSearch={props.fSearch} setFSearch={props.setFSearch} />
                </div>
                <RadioFilter sort={props.sort} reset={props.reset} settings={props.settings} fSearch={props.fSearch}/>
            </div>
        </div>        
    )

}

export default Filter;