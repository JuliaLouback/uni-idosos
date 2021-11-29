import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Peso = (props) => {

    const { width = 50, height = 50  } = props;

    return (
        <Svg 
            width = {width}
            height= {height} 
            viewBox="0 0 50 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path 
                d="M35.9375 3.125H14.0625C11.1626 3.1281 8.38245 4.28144 6.33195 6.33195C4.28144 8.38245 3.1281 11.1626 3.125 14.0625V35.9375C3.1281 38.8374 4.28144 41.6175 6.33195 43.6681C8.38245 45.7186 11.1626 46.8719 14.0625 46.875H35.9375C38.8374 46.8719 41.6175 45.7186 43.6681 43.6681C45.7186 41.6175 46.8719 38.8374 46.875 35.9375V14.0625C46.8719 11.1626 45.7186 8.38245 43.6681 6.33195C41.6175 4.28144 38.8374 3.1281 35.9375 3.125ZM39.4736 20.5078L36.2197 24.3369C35.8373 24.7905 35.3605 25.1551 34.8226 25.4054C34.2847 25.6557 33.6987 25.7856 33.1055 25.7861C32.336 25.7851 31.5821 25.5694 30.9287 25.1631C29.54 24.3057 27.3838 23.2832 25.002 23.2832C22.6201 23.2832 20.4639 24.3057 19.0752 25.1631C18.2412 25.6855 17.2468 25.8896 16.2745 25.7378C15.3022 25.5861 14.4173 25.0887 13.7822 24.3369L10.5264 20.5078C9.6912 19.5322 9.26971 18.2692 9.3516 16.9876C9.43349 15.706 10.0123 14.5069 10.9648 13.6455C13.6836 11.1699 18.3252 8.21875 25 8.21875C31.6748 8.21875 36.3164 11.1699 39.0352 13.6455C39.9877 14.5069 40.5665 15.706 40.6484 16.9876C40.7303 18.2692 40.3088 19.5322 39.4736 20.5078Z" 
                fill="white"
            />
        </Svg>
    );
}