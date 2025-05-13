import { useState } from 'react';
import CourseCard from '../Card/videoCourse'
import Header from '../navBar'
import {textCourses} from '../textCourses/data'
import TextCourseCard from '../Card/textCourse';
// import {videoCourses} from '../videoCourses/data'




export default function AllCourses () {
    
    const [showVideo, setShowVideo] = useState(true);
    const [pdfToShow, setPdfToShow] = useState<string | null>(null);
    return(
        <div className="">
            <Header/>

            <div id='filter' className='w-full h-20 flex justify-center items-center gap-40 font-bold text-2xl bg-primaryPink/40'>
                <button  className={`hover:bg-primaryPink px-3 py-1 rounded-md ${!showVideo ? 'bg-primaryPink text-white' : ''}`}
                    onClick={() => setShowVideo(false)}>
                    Cours texte
                </button>
                <button className={`hover:bg-primaryPink px-3 py-1 rounded-md ${showVideo ? 'bg-primaryPink text-white' : ''}`}
                    onClick={() => setShowVideo(true)}>
                    Cours vidéo
                </button>
            </div>
            <h1 className='font-playfair font-extrabold text-4xl mt-8 ml-8 text-mainPink'>Catalogue des cours</h1>
            {showVideo ? (
                <div id='video'>
                    <div id='computerScience' className='w-full h-auto flex flex-col items-center justify-center gap-10 p-10'>
                                    <section id='digitalLitteracy' className='w-full h-auto flex flex-col justify-center gap-5'>
                                        <h1 className='font-roboto font-extrabold text-2xl text-black'>Bureautique</h1>
                                        <div className='w-full h-auto flex items-center justify-center gap-5'>
                                            <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Word' description='Apprenez à utiliser Word' imageUrl='/images/word.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                            <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Excel' description='Apprenez à utiliser Excel' imageUrl='/images/excel.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                            <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='PowerPoint' description='Apprenez à utiliser PowerPoint' imageUrl='/images/powerPoint.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                        </div>
                                    </section>
                                    <section id='advanced' className='w-full h-auto flex flex-col justify-center gap-5'>
                                        <h1 className='font-roboto font-extrabold text-2xl text-black'>Informatique avancée</h1>
                                        <div className='w-full h-auto flex items-center justify-center gap-5'>
                                            <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Marketing Digital' description='Devenez spécialiste marketing digital' imageUrl='/images/digitalMarketing.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                            <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Community Management' description='Cours complet en community manager' imageUrl='/images/communityManagement.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                            <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Graphic Design' description='Devenez graphic designer' imageUrl='/images/graphicDesign.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                        </div>
                                    </section>
                                
                    </div>
                    <div id='agriture' className='w-full h-auto flex flex-col items-center justify-center gap-10 p-10'>
                        <section id='agriculture' className='w-full h-auto flex flex-col justify-center gap-5'>
                            <h1 className='font-roboto font-extrabold text-2xl text-black'>Cultures</h1>
                            <div className='w-full h-auto flex items-center justify-center gap-5'>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Sols et fertilité' description='Apprenez tout sur les sols fertils' imageUrl='/images/fertility.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Epices' description='Apprenez tout sur la cultures des épices' imageUrl='/images/tomate.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Céréales' description='Apprenez tout sur la cultures des céréales' imageUrl='/images/cereale.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                            </div>
                        </section>
                        <section id='breeding' className='w-full h-auto flex flex-col justify-center gap-5'>
                            <h1 className='font-roboto font-extrabold text-2xl text-black'>Elévage</h1>
                            <div className='w-full h-auto flex items-center justify-center gap-5'>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Bovins' description="Apprendre l'élévage des bovins" imageUrl='/images/bovin.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Volaille' description="Apprendre l'élévage de la volaille" imageUrl='/images/woman&chicken.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Pâturages' description='Apprendre à trouver le bon paturage' imageUrl='/images/paturage.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                            </div>
                        </section>
                                
                    </div>
                    <div id='couture' className='w-full h-auto flex flex-col items-center justify-center gap-10 p-10'>
                        <section id='basics' className='w-full h-auto flex flex-col justify-center gap-5'>
                            <h1 className='font-roboto font-extrabold text-2xl text-black'>Les arts du fil</h1>
                            <div className='w-full h-auto flex items-center justify-center gap-5'>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Tricotage' description='Apprenez à tricoter' imageUrl='/images/tricotage.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Broderie' description='Tout sur la broderie' imageUrl='/images/broderie.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Tissage' description='Apprenez la couture traditionnelle' imageUrl='/images/tissage.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                            </div>
                        </section>
                        <section id='advanced' className='w-full h-auto flex flex-col justify-center gap-5'>
                            <h1 className='font-roboto font-extrabold text-2xl text-black'>Couture</h1>
                            <div className='w-full h-auto flex items-center justify-center gap-5'>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Coupe' description='Tout sur la coupe' imageUrl='/images/coupe.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Couture à la main' description='Précision et détails' imageUrl='/images/coutureMain.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                                <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Couture à la machine' description='Assemblez tous les morceaux à la machine' imageUrl='/images/couturemachine.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                            </div>
                        </section>
                                
                    </div>
                </div>
            ) : (
            <div id='text'>
                {textCourses.map((module, idx) => (
                        <div key={idx} className="w-full mb-10">
                            <h2 className="font-roboto font-extrabold text-2xl text-black my-10 mx-10">{module.module}</h2>
                            <div className="w-3/4 flex justify-center items-center gap-16 mx-10">
                                {module.courses.map((course, cidx) => (
                                    <TextCourseCard
                                        key={cidx}
                                        title={course.title}
                                        image={course.image}
                                        onRead={() => setPdfToShow(course.pdf)}
                                    />
                                ))}
                                </div>
                        </div>
                ))}

                 {pdfToShow && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                            <div className="relative w-11/12 h-[90vh] bg-white rounded-lg shadow-lg flex flex-col">
                                <button
                                    className="absolute top-2 right-4 text-2xl font-bold text-mainPink z-10"
                                    onClick={() => setPdfToShow(null)}
                                >
                                    &times;
                                </button>
                                <iframe
                                    src={pdfToShow}
                                    title="PDF du cours"
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                        </div>
                    )}
            </div>
            )}
        </div>
    )
}