import React from 'react';
interface props {
    children: React.ReactNode;
    className: string;
}

const MainComponent: React.FC<props> = ({ children, className }) => {
    return (
        <div className={`sticky top-0 right-0 bg-secondary rounded-md  border shadow-md p-2  ${className}`}>
            {children}
        </div>
    );
};

export default MainComponent;