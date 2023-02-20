import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <div>The Oxford Job Dictionary</div>
            </Link>
        </nav>
    )
}

export default Header