import { FcIdea } from "react-icons/fc"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <header>
        <nav>
            <div>
                <Link to={'/'}>
                    <FcIdea />
                    <h2>m6motivation</h2>
                </Link>
            </div>
            <div>
                <Link to={'/create'}>CREATE</Link>
                <Link to={'/about'}>ABOUT</Link>
                <Link to={'/feedback'}>FEEDBACK</Link>
                <Link to={'/login'}>LOGIN</Link>
                <Link to={'/login'}>SIGN UP</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar