import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Apps</a>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Web Apps</a></li>
            <li><a>Mobile Apps</a></li>
          </ul>
        </li>
        <li><a>Installation</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className='w-6 h-6' src={logo} alt="Project IO Logo" />Project IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Apps</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Web Apps</a></li>
            <li><a>Mobile Apps</a></li>
          </ul>
        </details>
      </li>
      <li><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-white hover:shadow-md rounded-xl hover:scale-105 transition-all duration-300 bg-linear-to-br from-purple-600 to-purple-400 text-white"><img className="w-5 h-5" src="https://img.icons8.com/?size=100&id=106562&format=png&color=000000" alt="" />Contribute</a>
  </div>
</div>
    );
};

export default Navbar;