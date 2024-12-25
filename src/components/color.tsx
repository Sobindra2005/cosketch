import React from 'react';
import MainComponent from './Maincomponent';
import { IoAddOutline } from 'react-icons/io5';

const Color = () => {
    return (
        <MainComponent className=' max-w-2xl h-fit mt-2'>
            <div className='flex gap-1 text-xl'>
                {["#000000", "#FF0000", "#06F906", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"].map((color, index) => (
                    <div key={index} className='p-1 cursor-pointer rounded-lg  w-10 h-8'>
                        <div className={`w-full h-full rounded-3xl `} style={{ backgroundColor: color }}></div>
                    </div>
                ))}
                <div className='p-1 cursor-default rounded-lg  w-10 h-8'>
                    <div className='text-gray-400 text-2xl cursor-pointer rounded-3xl border border-gray-400 flex items-center justify-center w-full h-full '><IoAddOutline /></div>
                </div>
            </div>
        </MainComponent>
    );
};

export default Color;