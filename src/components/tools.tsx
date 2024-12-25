import React from 'react';
import MainComponent from './Maincomponent';
import { PiPencilSimpleLineFill } from 'react-icons/pi';
import { RiRectangleLine } from 'react-icons/ri';
import { FaArrowRight, FaRegCircle } from 'react-icons/fa';
import { RxText } from 'react-icons/rx';
import { LuEraser } from 'react-icons/lu';
import { BiRedo, BiUndo } from 'react-icons/bi';

const Tools = () => {
    return (
        <MainComponent className='w-fit h-full mt-2  '>
            <div className='flex flex-col gap-2 text-xl '>
                {[
                    <PiPencilSimpleLineFill />,
                    <RiRectangleLine />,
                    <FaRegCircle />,
                    <FaArrowRight />,
                    <RxText />,
                    <LuEraser />,
                    <BiUndo />,
                    <BiRedo />,
                ].map((icon, index) => (
                    <div key={index} className='p-3 cursor-default hover:bg-gray-200'>{icon}</div>
                ))}
            </div>
        </MainComponent>
    );
};

export default Tools;