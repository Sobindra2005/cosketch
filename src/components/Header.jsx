import React from 'react';
import Maincomponent from './Maincomponent';
import Link from 'next/link';

const Header = () => {
    return (
        <Maincomponent className='w-full'>
            <div className='text-xl lg:text-2xl font-bold'>
                <Link href={'/'} >   <span className='text-blue-600'>Co</span><span className='text-green-600'>sketch</span></Link>
            </div>
        </Maincomponent>
    );
};

export default Header;