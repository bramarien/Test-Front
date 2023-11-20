import BookCard from "./BookCard";

function BookGrid(props) {

    return (
        <div className={"grid gap-6 mx-10 my-10 pl-4 transition-all duration-500 " + (props.filterCheck ? "grid-cols-3 ml-96" : "grid-cols-4")}>
            {
                Object.entries(props.data).map(function([key, value]) {
                    if (props.settings.available === value.status || props.settings.available === "Both") {
                        if (props.settings.genre === value.genre || props.settings.genre === "None") {
                            if (value.title.toLowerCase().includes(props.fSearch.toLowerCase()) || value.author.toLowerCase().includes(props.fSearch.toLowerCase()))
                                return <BookCard data={props.data} img={value.img} key={key} author={value.author} date={value.year} title={value.title} desc={value.description} />
                        }
                    }
                    return null
                })
            }
        </div>
    )
}

export default BookGrid;