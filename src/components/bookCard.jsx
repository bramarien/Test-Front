function BookCard(props) {

    return (
        <div>
            <div className="relative flex flex-col h-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img src={props.img} className="w-full h-96" alt="book cover" />
                </div>
                <div className="p-6">
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
            </div>
        </div>
    )
}

export default BookCard;