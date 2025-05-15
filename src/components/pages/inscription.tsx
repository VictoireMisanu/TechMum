import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerAccountInfo } from '../../services/api'

export default function Inscription() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_firstname: "",
    user_name: "",
    user_email: "",
    user_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData()
    form.append("user_firstname", formData.user_firstname)
    form.append("user_name", formData.user_name)
    form.append("user_email", formData.user_email)
    form.append("user_password", formData.user_password)

    try {
      const response = await registerAccountInfo(form)
      // Supposons que response.data contient un token ou l'utilisateur
      // Stocke le token ou l'info utilisateur
      if (response?.token) {
        localStorage.setItem("token", response.token)
      }
      alert('Compte créé avec succès')
      navigate("/courses") // Redirige vers la page des cours
    } catch (error) {
      console.error(error)
      alert('Erreur lors de la création du compte')
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-6 justify-center ">
      <div id="header" className="px-10 py-5 flex items-center h-16 w-full border-b border-gray-100 shadow-sm shadow-mainPink">
        <Link to={`/`}><img src="/images/logoMumTech.png" alt="" className="w-16 h-16"/></Link>
      </div>
      <div id="mainSection" className="w-1/2 flex flex-col items-center justify-center my-10">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-medium tracking-wide">INSCRIPTION</h1>
          <p className="mt-4 text-base text-gray-700">Veuillez remplir les champs suivants :</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 w-3/4 flex flex-col justify-center">
          <input
            type="text"
            name="user_firstname"
            placeholder="Prénom"
            value={formData.user_firstname}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
            required
          />

          <input
            type="text"
            name="user_name"
            placeholder="Nom"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
            required
          />

          <input
            type="user_email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
            required
          />

          <input
            type="password"
            name="user_password"
            placeholder="Mot de passe"
            value={formData.user_password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full flex justify-center items-center font-semibold rounded-full py-3 px-4 transition-colors duration-200 mt-6 bg-mainPink hover:bg-primaryPink"
          >
            Créer
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Vous avez déjà un compte?{" "}
            <Link to="/login" className="font-medium text-black hover:text-mainPink">
              Connectez vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}