import CourseCard from '../Card/course'
import Header from '../navBar'



export default function DigitalLitteracy () {
    return(
        <div className="">
            <Header/>
            <div className='w-full h-20 flex justify-center items-center bg-heroPattern bg-cover bg-no-repeat bg-center'>
                <h1 className='font-playfair font-extrabold text-4xl text-white'>Initiation à la bureautique</h1>
            </div>
            <div id='filter' className='w-full h-20 flex justify-center items-center gap-40 font-bold text-2xl bg-primaryPink/40'>
                <button className='hover:bg-primaryPink px-3 py-1 rounded-md'>Cours texte</button>
                <button className='hover:bg-primaryPink px-3 py-1 rounded-md'>Cours vidéo</button>
            </div>
            <div id='courses' className='w-full h-auto flex flex-row items-center justify-center gap-10 p-10'>
                <CourseCard title="MS. Word" description='Cours complet en bureautique' imageUrl='/images/coding.jpeg' courses={5} time={5} test={1} price={15} language='Français' path='/course1'/>
                <CourseCard title='MS. Excel' description='Cours complet en marketing digital' imageUrl='/images/digitalMarketing.jpg' courses={3} time={3} test={1} price={30} language='Français'path='/course2'/> 
                <CourseCard title='MS. Powerpoint' description='Cours complet en community manager' imageUrl='/images/communityManagement.jpg' courses={7} time={3} test={1} price={50} language='Français'path='/course3'/>
            
            </div>
        </div>
    )
}