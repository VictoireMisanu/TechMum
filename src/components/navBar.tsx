import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Play, Search, User } from "lucide-react"

export default function HeaderNav() {
  const [searchValue, setSearchValue] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // État pour le dropdown
  const navigate = useNavigate()
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Recherche:", searchValue)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const users = JSON.parse(localStorage.getItem("user_info") || "{}");
  
const [showUserMenu, setShowUserMenu] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);
const isLoggedIn = Object.keys(users).length > 0;


const handleUserIconClick = () => {
  
  if (!isLoggedIn) {
      navigate('/login');
      return;
  }
  setShowUserMenu(!showUserMenu);
};

const handleDeconnection = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_info');
  setShowUserMenu(false);
  navigate('/');
};


  return (
    <header className="w-full h-20 flex flex-row items-center bg-white py-4 px-6 border-b border-gray-100 shadow-sm shadow-primaryViolete sticky top-0 z-50">
      <div className="w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 mr-10">
          <Link to="/">
            <div className="relative w-16 h-16">
              <Link to={`/`}><img src="/images/logoMumTech.png" alt="Mumstech" /></Link>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-primaryPink font-medium">
            Acceuil
          </Link>
          <Link to="/a-propos" className="text-gray-800 hover:text-primaryPink font-medium">
            A propos
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-800 hover:text-primaryPink font-medium focus:outline-none"
            >
              Cours
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-48">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/course1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primaryPink"
                    >
                      Informatique
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primaryPink"
                    >
                      Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/course3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primaryPink"
                    >
                      Couture
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/contact" className="text-gray-800 hover:text-primaryPink font-medium">
            Contact
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Recherchez un cours..."
                value={searchValue}
                onChange={handleSearchChange}
                className="w-64 py-2 pl-10 pr-4 rounded-full border border-coral-400 focus:outline-none focus:ring-2 focus:ring-primaryPink focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </form>
  
          <Link to={`/courses`} className="bg-mainGradient w-40 h-12 rounded-2xl py-2 flex justify-center items-center gap-5 hover:shadow-lg hover:shadow-black text-sm md:text-base text-white font-roboto font-bold hover:bg-secondaryOrange">
            <span>Commencer</span>
            <Play className="h-7 w-7 text-white" />
          </Link> {/* Cart Icon */}


          {/* User Icon */}
         <button 
            onClick={handleUserIconClick}
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <User className="w-8 h-8 md:w-10 md:h-10"/>
          </button>
            {showUserMenu && isLoggedIn && (
          <div 
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
          >
            <div className="px-4 py-3 border-b border-gray-200">
              <p className="text-sm font-medium text-gray-900">{users.user_name}</p>
              <p className="text-sm text-gray-500">{users.user_email}</p>
            </div>
            <button 
              onClick={handleDeconnection}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
            >
              Déconnexion
            </button>
          </div>
         )}
        </div>
      </div>
    </header>
  )
}