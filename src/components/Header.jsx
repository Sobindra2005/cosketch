import React from 'react';
import Maincomponent from './Maincomponent';

const Header = () => {
    return (
        <Maincomponent className='w-full'>
            <div className='text-xl lg:text-2xl font-bold'>
                <span className='text-blue-600'>Co</span><span className='text-green-600'>sketch</span>
            </div>
        </Maincomponent>
    );
};

export default Header;