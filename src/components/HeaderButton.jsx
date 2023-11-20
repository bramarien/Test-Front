import { Link, useLocation } from "react-router-dom";

function HeaderButton({ path, input, active }) {

    const location = useLocation();

    const className = location.pathname === path ?
        "bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
        :
        "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"

    return (
        <div className={className}>
            <Link to={path}>
                {input}
            </Link>
        </div>
    );
}

export default HeaderButton;