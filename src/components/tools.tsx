import React from 'react';
import MainComponent from './Maincomponent';
import { PiPencilSimpleLineFill } from 'react-icons/pi';
import { RiRectangleLine } from 'react-icons/ri';
import { FaArrowRight, FaMousePointer, FaRegCircle } from 'react-icons/fa';
import { RxText } from 'react-icons/rx';
import { LuEraser, LuMousePointer2 } from 'react-icons/lu';
import { BiRedo, BiUndo } from 'react-icons/bi';
import { TfiHandDrag, TfiLayoutLineSolid } from 'react-icons/tfi';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { TbLineDotted } from 'react-icons/tb';

const Tools = () => {
    return (
        <MainComponent className='w-fit h-full mt-2  '>
            <div className='flex flex-col gap-2 text-xl '>
                {[<LuMousePointer2 />,
                <TfiHandDrag />,
                <PiPencilSimpleLineFill />,
                <RiRectangleLine />,
                <FaRegCircle />,
                <HiOutlineArrowUpRight />,
                <TfiLayoutLineSolid />,
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