// import { useState } from 'react';
// import CourseCard from '../Card/course';
// import Header from '../navBar';
// import { textCourses } from '../textCourses/data';

type TextCourseProps = {
  title: string;
  image?: string;
    onRead?: () => void;
};

// type TextModule = {
//   module: string;
//   courses: TextCourseProps[];
// };

function TextCourseCard( { title, image, onRead }:TextCourseProps) {
  return (
    <div className="w-1/3 flex flex-col bg-slate-100 shadow-sm shadow-slate-500 hover:shadow-black hover:bg-slate-300 rounded-lg overflow-hidden">
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
        <img
          src={image || '/images/powerPoint.jpg'}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-4">
        <h3 className="font-bold text-lg text-black mb-4">{title}</h3>
        <button
          className="mt-auto bg-mainPink text-white px-4 py-2 rounded-md hover:bg-primaryPink transition duration-300"
          onClick={onRead}
        >
          Lire
        </button>
      </div>
    </div>
  );
}

export default TextCourseCard