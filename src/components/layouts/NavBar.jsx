import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="flex h-16 w-full justify-between bg-zinc-950 items-center px-2">
      <h1 className="font-extrabold text-sm text-zinc-100">Academy Admin</h1>
      <nav>
        <ul className="flex gap-4 text-zinc-200 font-semibol">
          <li className="hover:text-red-600">
            <Link to={'/'}>Início</Link>
          </li>
          <li className="hover:text-red-600">
            <Link to={'/signin'}>Login</Link>
          </li>
          <li className="hover:text-red-600">
            <Link to={'/signup'}>Cadastro</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
