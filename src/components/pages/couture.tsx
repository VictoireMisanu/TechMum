import CourseCard from '../Card/course'
import Header from '../navBar'

export default function Couture () {
    return(
        <div className="">
            <Header/>
            <div className='w-full h-20 flex justify-center items-center bg-heroPattern bg-cover bg-no-repeat bg-center'>
                <h1 className='font-playfair font-extrabold text-4xl text-white'>Couture</h1>
            </div>
            <div id='filter' className='w-full h-20 flex justify-center items-center gap-40 font-bold text-2xl bg-primaryPink/40'>
                <button className='hover:bg-primaryPink px-3 py-1 rounded-md'>Cours texte</button>
                <button className='hover:bg-primaryPink px-3 py-1 rounded-md'>Cours vidéo</button>
            </div>
            <div id='courses' className='w-full h-auto flex flex-col items-center justify-center gap-10 p-10'>
                <section id='basics' className='w-full h-auto flex flex-col justify-center gap-5'>
                    <h1 className='font-roboto font-extrabold text-2xl text-black'>Les arts du fil</h1>
                    <div className='w-full h-auto flex items-center justify-center gap-5'>
                        <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Tricotage' description='Apprenez à utiliser Word' imageUrl='/images/couture.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                        <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Broderie' description='Apprenez à utiliser Excel' imageUrl='/images/couture.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                        <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Tissage' description='Apprenez à utiliser PowerPoint' imageUrl='/images/couture.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                    </div>
                </section>
                <section id='advanced' className='w-full h-auto flex flex-col justify-center gap-5'>
                    <h1 className='font-roboto font-extrabold text-2xl text-black'>Couture</h1>
                    <div className='w-full h-auto flex items-center justify-center gap-5'>
                        <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Coupe' description='Tout sur la coupe' imageUrl='/images/couture.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                        <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Couture à la main' description='Précision et détails' imageUrl='/images/couture.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                        <CourseCard className="w-1/3 h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300" title='Couture à la machine' description='Assemblez tous les morceaux à la machine' imageUrl='/images/couture.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
                    </div>
                </section>
            
            </div>
        </div>
    )
}