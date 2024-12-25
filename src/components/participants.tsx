import React from 'react';
import MainComponent from './Maincomponent';

interface ParticipantsProps {

}

const Participants: React.FC<ParticipantsProps> = (props) => {
    return (
        <MainComponent className=' max-w-2xl h-full mt-2 '>
            <h1 className='text-xl font-semibold text-gray-600'>Participants</h1>
            <div className='flex flex-col gap-1 text-xl'>
                {[{ name: "Ram", status: "active" },
                { name: "Sita", status: "inactive" },
                { name: "Lakshman", status: "active" },
                { name: "Hanuman", status: "active" },
                { name: "Bharat", status: "inactive" },
                { name: "Shatrughna", status: "active" },
                { name: "Sugriva", status: "inactive" }].map((color, index) => (
                    <div key={index} className='flex  w-full h-14 justify-between p-2  items-center'><div className='
                    flex h-12  p-1'><img src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg' className=' object-cover object-center h-full rounded-full mr-5 ' alt='null'></img> <div className=' text-[16px] flex items-center '>{color.name} </div>  </div>
                        <div className={`items-center  text-sm ${color.status === "active" ? "text-yellow-400":"text-red-600"}`} >{color.status}</div>
                    </div>
                ))}

            </div>
        </MainComponent>
    );
};

export default Participants;