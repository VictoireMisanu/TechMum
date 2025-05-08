
import type React from "react"

import { useState } from "react"
import {Link} from "react-router-dom"


export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    motDePasse: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Données du formulaire soumises:", formData)
    // Logique pour envoyer les données à votre API
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
            name="prenom"
            placeholder="Prénom"
            value={formData.prenom}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
            required
          />

          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={formData.nom}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
            required
          />

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
            name="motDePasse"
            placeholder="Mot de passe"
            value={formData.motDePasse}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full font-semibold rounded-full py-3 px-4 transition-colors duration-200 mt-6 bg-mainPink hover:bg-primaryPink"
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

