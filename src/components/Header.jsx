import HeaderButton from "./HeaderButton";
import Icon from "../assets/Biblicon.png"

function Header() {

    return (
        <nav className="bg-gray-700">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative z-50 flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex gap-5 flex-shrink-0 items-center">
                            <img className="h-10 w-auto" src={Icon} alt="BibliOnline" />
                            <div className="flex space-x-4">
                                <HeaderButton path="/" input={"Home"} />
                                <HeaderButton path="/collection" input={"Collection"} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Header;