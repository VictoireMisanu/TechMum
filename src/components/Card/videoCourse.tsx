import { Book, BookCheck, Clock, Eye, Languages} from "lucide-react";
import { Link } from "react-router-dom";


interface CourseCardProps {
    title: string;
    description: string;
    imageUrl: string;
    courses:number;
    time : number;
    test : number;
    price : number;
    language : string;
    path : string;
    className: string;
}
export default function CourseCard({ className, title, description, imageUrl, courses, time, test, price, language, path }: CourseCardProps) {
    return (
      <div className={className}>
                  <Link to={path}><img src={imageUrl} alt="Product" className="w-full h-52 mb-4 brightness-90" /></Link>
                  <h2 className="w-52 text-md text-nowrap font-bold text-black text-left pl-3 ml-6 bg-primaryPink/40">{title}</h2>
                  <p className="text-black font-light mt-2 ml-6">{description}</p>
                  <div id="details" className="w-full h-10 flex gap-5 ml-6">
                    <div id="module" className="w-auto h-auto flex justify-center items-center gap-2">
                      <Book className="w-5 h-5 text-black "/>
                      <p className="font-bold">{`${courses}`} cours</p>
                    </div>
                    <div id="time" className="w-auto h-auto flex justify-center items-center gap-2">
                      <Clock className="w-5 h-5 text-black "/>
                      <p className="font-bold">{`${time}`} jours</p>
                    </div>
                    <div id="test" className="w-auto h-auto flex justify-center items-center gap-2">
                      <BookCheck className="w-5 h-5 text-black "/>
                      <p className="font-bold">{`${test}`} heures</p>
                    </div>
                  </div>
                  <div id="language" className="mx-6 w-32 h-auto flex items-center justify-center gap-3 bg-primaryPink/40">
                      <Languages className="w-5 h-5 text-black "/>
                      <p className="font-semibold">{language}</p>
                    </div>
                    <div id="progress-bar" className="mx-6 mt-2 w-3/4 h-3 bg-gray-300 rounded-md overflow-hidden">
                      <div className="w-full h-full bg-mainPink rounded-md" style={{ width: '60%' }}></div>
                    </div>
                  <div className="p-6 flex items-center justify-between w-full">
                      <button className="bg-mainPink text-white px-4 py-2 rounded-md hover:bg-primaryPink transition duration-300">
                          <Eye className="h-5 w-5 text-white" />
                      </button>
                      <p className="w-16 h-8 flex justify-center items-center bg-primaryPink/40 font-bold">{`${price}$`}</p>
                  </div>
              </div>
    )
  }