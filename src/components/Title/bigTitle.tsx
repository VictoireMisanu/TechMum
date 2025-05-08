import React, { JSX } from 'react'

interface SectionTitleProps{
    id?: string;
    children: JSX.Element | string
}

const BigTitle: React.FC<SectionTitleProps> = ({id, children}) => {
    return (
        <div id={id} className="w-full h-20 flex flex-col items-center gap-3 mb-5">
            <p className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-black text-center">{children}</p>
            <div id='deco' className="flex flex-col gap-1 ">
                <div className="w-16 h-1 bg-mainGradient"></div>
            </div>
        </div>
    )
}

export default BigTitle