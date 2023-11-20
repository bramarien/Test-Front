function BookCard(props) {

    return (
        <div>
            <div className="flex flex-col h-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img src={props.img} className="w-full h-96" alt="book cover" />
                </div>
                <div className="grow p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {props.title}
                    </h4>
                    <p className="mt-3 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
                        {props.desc}
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center -space-x-3">
                        <p>{props.author}</p>
                    </div>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                        {props.date}
                    </p>
                </div>
                <div className="absolute m-4 opacity-90">
                    {
                        props.status === "Emprunté" ? <span className="items-center rounded-md bg-indigo-50 px-2 py-1 text-lg font-medium text-indigo-600 ring-1 ring-inset ring-gray-500/10">Emprunté jusqu'au {props.dueDate}</span> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default BookCard;