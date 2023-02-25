import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <nav className="nav">
            <Link className= "nav-link" to="/">
                <div>The Oxford Job Dictionary</div>
            </Link>

            
            <div>
                <Link className="create-link" to="/create">
                    <div>Create</div>
                </Link>
            </div>
        </nav>
    )
}

export default Header