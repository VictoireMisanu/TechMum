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
}
export default function CourseCard({ title, description, imageUrl, courses, time, test, price, language, path }: CourseCardProps) {
    return (
      <div className="w-full h-full flex flex-col gap-2 justify-start bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300">
                  <Link to={path}><img src={imageUrl} alt="Product" className="w-full h-40 mb-4 brightness-50" /></Link>
                  <h2 className="w-44 text-md text-nowrap font-bold text-black text-left pl-3 ml-6 bg-primaryPink/40">{title}</h2>
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
                  <div className="p-6 flex items-center justify-between w-full">
                      <button className="bg-mainPink text-white px-4 py-2 rounded-md hover:bg-primaryPink transition duration-300">
                          <Eye className="h-5 w-5 text-white" />
                      </button>
                      <p className="w-16 h-8 text-center bg-primaryPink/40 font-bold">{`${price}$`}</p>
                  </div>
              </div>
    )
  }