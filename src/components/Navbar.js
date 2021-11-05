
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className = "navbar">
            <Link to='/homepage'>
                <li> Homepage </li>
            </Link>
            <Link to='/pricecomparison'>
                <li> Price comparison </li>
            </Link>
            <Link to='/suggestarea'>
                <li> Suggest area </li>
            </Link>

        </div>
    )
}

export default Navbar
