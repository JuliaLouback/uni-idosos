import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Adicionar = (props) => {

    const { width = 40, height = 40  } = props;

    return (
        <Svg 
            width="30" 
            height="30" 
            viewBox="0 0 30 30" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path 
                d="M15 8.75C15.2486 8.75 15.4871 8.84877 15.6629 9.02459C15.8387 9.2004 15.9375 9.43886 15.9375 9.6875V14.0625H20.3125C20.5611 14.0625 20.7996 14.1613 20.9754 14.3371C21.1512 14.5129 21.25 14.7514 21.25 15C21.25 15.2486 21.1512 15.4871 20.9754 15.6629C20.7996 15.8387 20.5611 15.9375 20.3125 15.9375H15.9375V20.3125C15.9375 20.5611 15.8387 20.7996 15.6629 20.9754C15.4871 21.1512 15.2486 21.25 15 21.25C14.7514 21.25 14.5129 21.1512 14.3371 20.9754C14.1613 20.7996 14.0625 20.5611 14.0625 20.3125V15.9375H9.6875C9.43886 15.9375 9.2004 15.8387 9.02459 15.6629C8.84877 15.4871 8.75 15.2486 8.75 15C8.75 14.7514 8.84877 14.5129 9.02459 14.3371C9.2004 14.1613 9.43886 14.0625 9.6875 14.0625H14.0625V9.6875C14.0625 9.43886 14.1613 9.2004 14.3371 9.02459C14.5129 8.84877 14.7514 8.75 15 8.75V8.75Z" 
                fill="#FB7366"
            />
        </Svg>
    );
}