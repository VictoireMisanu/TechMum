// import { useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../navBar'
import { Info, Play } from 'lucide-react'
import BigTitle from '../Title/bigTitle'
import Card from '../Card/card1'
import CourseCard from '../Card/videoCourse'
import Footer from '../footer'


export default function LandingPage() {

  
  return (
    <div className="w-full flex flex-col">
        <Header/>
        <div id="heroSection" className="w-full min-h-screen bg-heroPattern bg-no-repeat bg-center bg-cover flex flex-col justify-center gap-10 md:gap-20 lg:gap-20 px-10">
            <div id="text" className="w-full md:w-3/5 h-3/4 flex flex-col gap-6 md:gap-10 lg:gap-20 px-4 md:px-20">
                <div className="w-full text-xl md:text-5xl lg:text-7xl font-playfair font-extrabold bg-mainGradient bg-clip-text text-transparent">Mum's Tech</div>
                <p className=" font-playfair text-3xl text-white leading-[35px] md:leading-[45px] lg:leading-[40px]">
                Parce que chaque maman mérite une seconde chance et un futur numérique, notre espace t’ouvre les portes de l’apprentissage et de l’espoir.
                </p>
            </div>
            <div id="btnSection" className=" flex flex-row justify-start items-center mx-20  gap-4 -mt-10">
              <div className='w-1/4 h-full'>
                <Link to={`/courses`} className="bg-mainGradient w-full rounded-2xl py-2 flex justify-center items-center gap-5 hover:shadow-lg hover:shadow-black text-sm md:text-base text-white font-roboto font-bold">
                  <span>Commencer</span>
                  <Play className="h-9 w-9 text-white" />
                </Link>
              </div>
              <div className='w-1/4 h-full'>
                <Link to={`/a-propos`} className="w-full bg-none rounded-2xl py-2 flex justify-center items-center gap-5 border-2 border-primaryPink hover:shadow-lg hover:shadow-black text-sm md:text-base text-primaryPink font-roboto font-bold">
                  <span>En savoir plus</span>
                  <Info className="h-9 w-9 text-primaryPink"/>
                </Link>
              </div>
            </div>
        </div>
        <div id='aboutSection' className='h-[35rem] bg-simpleGray p-10 flex flex-col gap-10'>
          <BigTitle id="about">Pourquoi nous choisir?</BigTitle>
          <div id='aboutContent' className='w-full h-full flex justify-center items-center gap-10 px-10'>
          <div id='image' className="w-1/2 pt-10 pl-0 pr-10 border-r-[1px] border-black relative">
            <img src="/images/momlearning.jpg" alt="hero" className="w-full h-full object-cover rounded-lg shadow-lg shadow-black"/>
            
          </div>
            <div id='text' className="w-1/2 flex flex-col justify-center gap-10 pl-8">
              <p className="text-gray-800 mb-6 leading-relaxed text-justify">
                Notre plateforme est dédiée à l'éducation et à l'autonomisation des mamans. Nous croyons que chaque maman mérite une seconde chance et un futur numérique. C'est pourquoi nous avons créé un espace où elles peuvent apprendre, grandir et s'épanouir. Grâce à nos cours préenregistrés, nos ressources et notre communauté de soutien, nous offrons aux mamans les outils dont elles ont besoin pour réussir dans le monde numérique d'aujourd'hui.
              
              </p>

              <div>
              <Link to={`/about`} className="w-1/2 bg-mainGradient rounded-2xl py-2 flex justify-center items-center gap-5  hover:shadow-lg hover:shadow-black text-sm md:text-base text-white font-roboto font-bold">
                  <span>En savoir plus</span>
                  <Info className="h-9 w-9 text-white"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id='ourParticularity' className='h-auto bg-gray-100 p-10 flex flex-col gap-10'>
          <BigTitle id="whyUs">Notre particularité</BigTitle>
          <div id='whyUsContent' className='w-full h-full flex flex-row gap-10 '>
            {/* Cards Section */}
            <div id='cards' className='w-1/2 flex flex-wrap gap-6 justify-center items-center'>
              <Card title='Diversité des cours' description='Nous vous proposons une diversité des cours' imageUrl='/svg/diversity.svg'/>
              <Card title='Accessibilité offline' description="Vous pouvez suivre les cours même en étant offline" imageUrl='/svg/offline.svg'/>
              <Card title="Suivi de l'évolution" description="Nos tests sont fait pour vous suivre votre évaluation" imageUrl='/svg/community.svg'/>
              <Card title="Communauté d'entraide" description="Nous avons une communauté d'échange" imageUrl='/svg/community.svg'/>
            </div>
            {/* Image Section */}
            <div id='image' className="w-1/2 pl-10  relative">
              <img src="/images/momAlone.jpg" alt="hero" className="w-full h-full object-cover rounded-lg shadow-lg shadow-black"/>
            </div>
          </div>
        </div>
        <div id='courseSection' className='h-[50rem] bg-simpleGray p-10 flex flex-col gap-10'>
          <BigTitle id="Courses">Nos cours</BigTitle>
          <p className='text-xl leading-10'>Nous vous proposons une gamme de cours diversifiés adaptés pour vous.</p>
          <div id='courses' className='w-full h-auto flex flex-row items-center justify-center gap-10'>
            <CourseCard className="w-full h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title="Informatique" description='Différents modules disponibles.' imageUrl='/images/women&computer.jpg' courses={6} time={5} test={1} price={40} language='Français' path='/course1'/>
            <CourseCard className="w-full h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Agriculture' description='Tout pour commencer son projet agricole.' imageUrl='/images/agriculture.jpg' courses={6} time={3} test={1} price={40} language='Français'path='/course2'/> 
            <CourseCard className="w-full h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Couture' description='Devenir couturière professionnelle.' imageUrl='/images/couture.jpg' courses={6} time={3} test={1} price={40} language='Français'path='/course3'/>

          </div>
          <Link to={`/courses`} className="bg-mainPink w-1/5 rounded-2xl py-2 ml-5 flex justify-center items-center hover:shadow-lg hover:shadow-black text-sm md:text-base text-white font-roboto font-bold hover:bg-primaryPink">
            <span>Découvrez plus</span>
          </Link>
        </div>
        <div id="writeUs" className="bg-mainPink/10 w-full min-h-screen flex flex-col px-4 md:px-16 py-10 gap-10">
          <BigTitle>Ecrivez-nous</BigTitle>
            <div id="content" className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
              <form className="w-full lg:w-1/2 p-4 md:p-10 flex flex-col gap-10 bg-white/30 rounded-lg">
                <p className="text-lg">
                  Sentez-vous libre de nous écrire.
                  Nous vous rassurons que nous vous répondrons dès que possible.
                </p>
                <div id="content" className='flex flex-col gap-5'>
                  <input 
                    className='bg-transparent border-b-[1px] border-black w-full h-12 p-5 outline-none' 
                    placeholder='Prenom et nom' 
                    type="text" 
                    name='userName' 
                  />
                  <input 
                    className='bg-transparent border-b-[1px] border-black w-full h-12 p-5 outline-none' 
                    placeholder='Adress email' 
                    type="email" 
                    name='emailAddress' 
                  />
                  <textarea 
                    className='bg-transparent border-b-[1px] border-black w-full h-24 p-5 outline-none resize-none' 
                    placeholder='Votre message' 
                    name='message'
                  ></textarea>
                  <button 
                    className='bg-mainPink w-full h-12 text-white font-bold hover:cursor-pointer hover:text-[#404A3D] hover:border-[#404A3D] border-2 hover:bg-transparent hover:shadow-lg hover:rounded-md shadow-black transition-all duration-300'
                    type="submit"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
              {/* {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-4">Message envoyé avec succès</h2>
                        <button className="bg-green-950 text-white px-4 py-2 rounded-md" onClick={() => setShowPopup(false)}>Fermer</button>
                    </div>
                </div>
            )} */}
              <div id="contact" className="w-full lg:w-1/3 bg-mainPink relative p-8 md:p-14">
                <div className="absolute -left-5 -top-5 w-10 h-10 bg-primaryPink"></div>
                <div className="absolute -right-5 bottom-5 w-10 h-10 bg-primaryPink"></div>
                <div className="flex flex-col gap-8">
                  <div className="text-white text-xl font-extrabold font-['Roboto Serif'] text-center">
                    Info
                  </div>
                  <div className="flex flex-col gap-7">
                    <a href="tel:+24382505784" className="flex items-center gap-3 group">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#FFFFFF" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
                        </svg>
                      </span>
                      <div className="text-white text-sm font-normal font-['Titillium Web'] group-hover:text-white transition-colors">
                        +2438 2505 7845
                      </div>
                    </a>
                    <a href="mailto:contact.farmprod@gmail.com" className="flex items-center gap-3 group">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#FFFFFF" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
                        </svg>
                      </span>
                      <div className="text-white text-sm font-normal font-['Titillium Web'] group-hover:text-white transition-colors">
                        contact.mumstech@gmail.com
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="#FFFFFF" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8.5-.207V6.97a.5.5 0 1 0-1 0v5.015a.5.5 0 0 0 .146.369l2.829 2.828a.5.5 0 1 0 .707-.707z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <div className="text-white text-sm font-normal font-['Titillium Web']">
                        9h - 18h
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
    </div>
  )
}
