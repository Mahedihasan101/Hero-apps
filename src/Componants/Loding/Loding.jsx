import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loding = () => {
    return (
        <div>
            <Audio height="400"
                width=""
                radius="5"
                color="#7e48ea"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass>

            </Audio>
        </div>
    );
};

export default Loding;