import CourseCard from '../Card/videoCourse'
import Header from '../navBar'



export default function DigitalLitteracy () {
    return(
        <div className="">
            <Header/>
            <div className='w-full h-20 flex justify-center items-center bg-heroPattern bg-cover bg-no-repeat bg-center'>
                <h1 className='font-playfair font-extrabold text-4xl text-white'>Informatique</h1>
            </div>
            <div id='filter' className='w-full h-20 flex justify-center items-center gap-40 font-bold text-2xl bg-primaryPink/40'>
                <button className='hover:bg-primaryPink px-3 py-1 rounded-md'>Cours texte</button>
                <button className='hover:bg-primaryPink px-3 py-1 rounded-md'>Cours vidéo</button>
            </div>
            <div id='courses' className='w-full h-auto flex flex-col items-center justify-center gap-10 p-10'>
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
        </div>
    )
}