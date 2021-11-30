import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SemSono = (props) => {

    const { width = 60, height = 60  } = props;

    return (
        <Svg 
            width={width} 
            height={height}
            viewBox="0 0 36 36" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path 
                d="M18 36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36V36ZM15.75 14.625C15.75 16.488 14.742 18 13.5 18C12.258 18 11.25 16.488 11.25 14.625C11.25 12.762 12.258 11.25 13.5 11.25C14.742 11.25 15.75 12.762 15.75 14.625ZM9.64125 21.5258C9.89964 21.3766 10.2067 21.3361 10.4949 21.4134C10.7831 21.4906 11.0288 21.6791 11.178 21.9375C11.869 23.1353 12.8634 24.1298 14.061 24.8211C15.2586 25.5123 16.6172 25.8758 18 25.875C19.3828 25.8758 20.7414 25.5123 21.939 24.8211C23.1366 24.1298 24.131 23.1353 24.822 21.9375C24.8953 21.8085 24.9934 21.6953 25.1107 21.6044C25.228 21.5135 25.362 21.4467 25.5052 21.4078C25.6484 21.369 25.7979 21.3588 25.945 21.3779C26.0921 21.397 26.234 21.4451 26.3625 21.5193C26.491 21.5935 26.6035 21.6923 26.6936 21.8102C26.7838 21.928 26.8497 22.0625 26.8876 22.206C26.9255 22.3494 26.9347 22.4989 26.9146 22.6459C26.8945 22.7929 26.8455 22.9345 26.7705 23.0625C25.882 24.6023 24.6036 25.8809 23.064 26.7696C21.5243 27.6583 19.7777 28.1258 18 28.125C16.2223 28.1258 14.4757 27.6583 12.936 26.7696C11.3964 25.8809 10.118 24.6023 9.2295 23.0625C9.08032 22.8041 9.0399 22.497 9.11711 22.2089C9.19433 21.9207 9.38287 21.6749 9.64125 21.5258ZM22.5 18C21.258 18 20.25 16.488 20.25 14.625C20.25 12.762 21.258 11.25 22.5 11.25C23.742 11.25 24.75 12.762 24.75 14.625C24.75 16.488 23.742 18 22.5 18Z" 
                fill="white"
            />
        </Svg>
    );
}
