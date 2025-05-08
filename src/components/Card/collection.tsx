import { Eye} from "lucide-react";
import { Link } from "react-router-dom";


interface CollectionCardProps {
    title: string;
   
}
export default function CollectionCard({ title}: CollectionCardProps) {
    return (
        <div className="w-1/4 h-full p-5 flex flex-col justify-center bg-lightGray rounded-lg shadow-md  shadow-darkGray">
            <Link to={`/collections`} id="collection" className="w-3/4 h-3/4">
                <div id='deco1' className="w-32 h-32 flex justify-center items-center rounded-full bg-darkGray ml-3">
                    <img src="/images/blancMotifVa.png" alt="blanc motif" className="w-32 h-20 rounded-full " />
                </div>
                <div id='deco2' className="w-20 h-20 flex justify-center items-center rounded-full bg-simpleGray -mt-36 ml-36 mb-5 absolute">
                    <img src="/images/blackMotifVa.png" alt="about us" className="w-20 h-14 rounded-full " />
                </div>
                <div id='deco2' className="w-20 h-20 flex justify-center items-center rounded-full bg-simpleGray mt-1 ml-3 absolute">
                    <img src="/images/blancMotifVa.png" alt="about us" className="w-20 h-14 rounded-full " />
                </div>
                <div id='deco2' className="w-20 h-20 flex justify-center items-center rounded-full bg-simpleGray -mt-62 ml-24 absolute">
                    <img src="/images/blackMotifVa.png" alt="about us" className="w-20 h-14 rounded-full " />
                </div>
                <div id='deco2' className="w-20 h-20 flex justify-center items-center rounded-full bg-simpleGray -mt-16 ml-40 absolute">
                    <img src="/images/blancMotifVa.png" alt="about us" className="w-20 h-14 rounded-full " />
                </div>
                
            </Link>

            <div className="mt-4 flex items-center justify-between w-full pt-3 border-t-[1px] border-black">
                <h2 className="text-xl font-bold text-orangeChoco">{title}</h2>
                <Link to={`/collection`} className="bg-orangeChoco hover:bg-secondaryOrange text-white px-4 py-2 rounded-md transition duration-300 shadow-sm shadow-black">
                    <Eye className="h-5 w-5 text-white" />
                </Link>
            </div>
        </div>
    )
  }