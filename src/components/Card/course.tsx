import { Eye} from "lucide-react";
import { Link } from "react-router-dom";


interface CourseCardProps {
    title: string;
    description: string;
    imageUrl: string;
}
export default function CourseCard({ title, description, imageUrl }: CourseCardProps) {
    return (
      <div className="w-2/3 h-full flex justify-center items-center bg-primaryViolete/30 p-4 shadow-md shadow-black rounded-2xl">
        <div className="w-full h-full flex flex-col justify-start bg-gray-100/50 rounded-xl">
            <Link to={`/products`}><img src={imageUrl} alt="Product" className="w-full rounded-t-xl h-32 mb-4" /></Link>
            <h2 className="text-xl font-bold text-gray-800 text-left ml-6">{title}</h2>
            <p className="text-gray-600 mt-2 ml-6">{description}</p>
            <div className="m-6 flex items-center justify-between w-full">
                <button className="bg-mainGradient text-white px-4 py-2 rounded-md hover:bg-secondaryGradient transition duration-300">
                    <Eye className="h-5 w-5 text-white" />
                </button>
            </div>
        </div>
      </div>
    )
  }