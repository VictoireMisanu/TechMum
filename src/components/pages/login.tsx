
import type React from "react"

import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { authenticateUser } from "../../services/api";

export default function Connexion() {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            navigate('/courses');
        }
    }, [navigate]);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        formData.forEach((value, key) => {
        console.log(key, value);
        });
        

        await authenticateUser(formData).then((result)=>{

            localStorage.setItem('auth_token', result.token.token);
            localStorage.setItem('user_info', JSON.stringify(result.userInfo));
            console.log(result)
            alert("vous êtes connecté")
            navigate('/courses')
        }).catch((error)=>{
            alert(error.response.data.message + " ; " +error.response.data.error)
        })
    }
  return (
    <div className="w-full flex flex-col items-center gap-6 justify-center ">
      <div id="header" className="px-10 py-5 flex items-center h-16 w-full border-b border-gray-100 shadow-sm shadow-mainPink">
        <Link to={`/`}><img src="/images/logoMumTech.png" alt="" className="w-16 h-16"/></Link>
      </div>
      <div id="mainSection" className="w-1/2 flex flex-col items-center justify-center my-10">
        <div className="mb-16 text-center">
          <h1 className="text-2xl font-medium tracking-wide">CONNEXION</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-10 w-3/4 flex flex-col justify-center">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full font-semibold rounded-full py-3 px-4 transition-colors duration-200 mt-6 bg-mainPink hover:bg-primaryPink"
          >
            Se Connecter
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Vous n'avez pas de compte?{" "}
            <Link to="/register" className="font-medium text-black hover:text-mainPink">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

