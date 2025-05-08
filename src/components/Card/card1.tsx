interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export default function Card({title, description, imageUrl}: CardProps) {
    return(
        <div className="w-64 h-44 flex flex-col justify-center items-center gap-7 px-5 py-10 bg-chocoGradient rounded-lg shadow-md shadow-black">
            <div className="w-full h-1/2 flex justify-center items-center">
                <img src={imageUrl} alt="Card Image" className="w-10 h-10 rounded-full my-2" />
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center text-center gap-4 mb-5">
                <h2 className="text-lg font-semibold text-primaryViolete">{title}</h2>
                <p className="text-black mb-3">{description}</p>
            </div>
        </div>
    )
}