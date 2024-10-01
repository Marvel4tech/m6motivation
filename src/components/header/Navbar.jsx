import { FcIdea } from "react-icons/fc"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <header className=" border-b border-b-yellow-500">
        <nav className=" max-w-6xl mx-auto flex justify-between items-center h-[90px]">
            <div className=" border-b border-b-blue-600">
                <Link to={'/'}>
                    <div className=" flex flex-col items-center ">
                        <FcIdea className=" text-4xl " />
                        <h2 className=" font-mono font-bold">m6motivation</h2>
                    </div>
                </Link>
            </div>
            <div className=" flex text-sm font-medium items-center justify-center">
                <Link className=" py-9 px-5 hover:bg-slate-200" to={'/create'}>CREATE</Link>
                <Link className=" py-9 px-5 hover:bg-slate-200" to={'/about'}>ABOUT</Link>
                <Link className=" py-9 px-5 hover:bg-slate-200" to={'/feedback'}>FEEDBACK</Link>
                <Link className=" py-9 px-5 hover:bg-slate-200" to={'/login'}>LOGIN</Link>
                <Link className=" py-3 px-6 border border-blue-800 rounded-full hover:bg-blue-800 hover:text-white" to={'/signup'}>
                    SIGN UP
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar