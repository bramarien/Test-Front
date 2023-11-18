function Filter(props) {

    return(
        <div className="flex ">
            <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" checked={props.fCheck}/>
            <label htmlFor="drawer-toggle" className="absolute left-0 inline-block mt-1 p-4 transition-all duration-500 bg-gray-700 rounded-lg peer-checked:rotate-180 peer-checked:left-96" onClick={props.actFilter}>
                <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
                <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
            </label>
            <div className="fixed left-0 z-20 w-96 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
                <div className="px-6 py-4">
                    <h2 className="text-lg font-semibold">Drawer</h2>
                    <p className="text-gray-500">This is a drawer.</p>
                </div>
            </div>
        </div>        
    )

}

export default Filter;