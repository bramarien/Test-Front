function CategorieCard(props) {

    return (
        <div className=" bg-gray-100 cursor-pointer rounded overflow-hidden shadow hover:bg-gray-300 transition-all hover:scale-105" 
            onClick={() => {props.printPopUp(props.name, props.len)}}>            
            <img className="w-full h-56 justify-center rounded" src={props.img} alt=""/>
            <p className="text-center font-sans font-semibold p-2 text-gray-800">{props.name} ({props.len})</p>
        </div>
    );
}

export default CategorieCard;