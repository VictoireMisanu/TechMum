import React from "react";
import ReactPlayer from "react-player";
// import { useParams } from "react-router-dom";
import Header from "../navBar";

declare global {
  interface Window {
    CinetPay?: any;
    checkout?: () => void;
  }
}

// Exemple de données (à remplacer par vos vraies données ou props)
const currentVideo = {
  title: "Microsoft Word",
  videoUrl: "https://youtu.be/zbZ4GYt8i_0?si=oYVOuW_nETPUUfE8",
};

const relatedCourses = [
  {
    title: "Microsoft Excel",
    thumbnail: "/images/excel.jpg",
    videoUrl: "https://youtu.be/rvg-ZsAqInk?si=gUSlVI0IRv9UMDEj",
  },
  {
    title: "Marketing Digital",
    thumbnail: "/images/digitalMarketing.jpg",
    videoUrl: "https://youtu.be/6EqJCCGmM_o?si=nqmh_IVhwEq28XN9",
  },
  {
    title: "Community Management",
    thumbnail: "/images/communityManagement.jpg",
    videoUrl: "https://youtu.be/-M4AplRotQM?si=l9sEGezHLOCBTzLQ",
  },
  {
    title: "Couture",
    thumbnail: "/images/couture.jpg",
    videoUrl: "https://youtu.be/uX5ZYSWktnQ?si=ANXQTJJSVEz2iT8l",
  },
  {
    title: "Elevage",
    thumbnail: "/images/bovin.jpg",
    videoUrl: "https://youtu.be/UBSIlYu5yBo?si=bBVfNsSVFeNv9yKO",
  },
  {
    title: "Agropastoral",
    thumbnail: "/images/paturage.jpg",
    videoUrl: "https://youtu.be/hf4YbsH6MyE?feature=shared",
  },
];

export default function CourseDetail() {
  const [selectedVideo, setSelectedVideo] = React.useState(currentVideo);
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const [isPaying, setIsPaying] = React.useState(false);

  localStorage.getItem("isSubscribed") === "true"

  React.useEffect(() => {
    const isSubscribed = localStorage.getItem("isSubscribed") === "true";
    setIsSubscribed(isSubscribed);
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col bg-white p-8">
      <Header />
      <h2 className="font-bold text-2xl text-mainPink my-10">{selectedVideo.title}</h2>
      {/* En-tête de la page */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Vidéo principale */}
                <div className="flex-1">
          <div className="w-full aspect-video bg-black rounded-lg overflow-hidden mb-4 flex items-center justify-center">
            {!isSubscribed ? (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <p className="text-xl font-semibold mb-6 text-mainPink">Abonnez-vous pour accéder à cette vidéo</p>
                <button
                  className="bg-mainPink text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-primaryPink transition"
                  onClick={() => window.checkout && window.checkout()}
                  disabled={isPaying}
                >
                  {isPaying ? "Paiement en cours..." : "S’abonner"}
                </button>
              </div>
            ) : (
              <ReactPlayer
                url={selectedVideo.videoUrl}
                controls
                width="100%"
                height="100%"
                style={{ borderRadius: "0.5rem", background: "black" }}
              />
            )}
          </div>
        </div>
        
        {/* Miniatures des autres cours */}
        <div className="w-full md:w-72 flex flex-col gap-4">
          <h3 className="font-semibold text-lg text-gray-700 mb-2">Autres cours</h3>
          {relatedCourses.map((course, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 cursor-pointer bg-slate-100 hover:bg-slate-200 rounded-md p-2 transition"
              onClick={() => setSelectedVideo(course)}
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-16 h-12 object-cover rounded"
              />
              <span className="font-medium text-gray-800">{course.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}