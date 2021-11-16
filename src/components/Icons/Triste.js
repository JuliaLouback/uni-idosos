import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Triste = (props) => {

    const { width = 40, height = 40  } = props;

    return (
        <Svg 
            width="60" 
            height="60" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path 
                d="M20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0C14.6957 0 9.60859 2.10714 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C9.60859 37.8929 14.6957 40 20 40V40ZM17.5 16.25C17.5 18.32 16.38 20 15 20C13.62 20 12.5 18.32 12.5 16.25C12.5 14.18 13.62 12.5 15 12.5C16.38 12.5 17.5 14.18 17.5 16.25ZM10.7125 31.0825C10.4254 30.9167 10.2159 30.6437 10.1301 30.3235C10.0443 30.0033 10.0892 29.6621 10.255 29.375C11.2422 27.6641 12.6626 26.2435 14.3734 25.256C16.0841 24.2685 18.0247 23.7491 20 23.75C21.9752 23.7496 23.9156 24.2692 25.6263 25.2567C27.3369 26.2441 28.7574 27.6645 29.745 29.375C29.9081 29.6619 29.9512 30.0018 29.8647 30.3203C29.7782 30.6389 29.5692 30.9103 29.2834 31.0753C28.9975 31.2404 28.658 31.2857 28.3389 31.2013C28.0197 31.1169 27.7469 30.9098 27.58 30.625C26.8122 29.2942 25.7074 28.1891 24.3767 27.421C23.046 26.653 21.5364 26.2491 20 26.25C18.4636 26.2491 16.954 26.653 15.6233 27.421C14.2926 28.1891 13.1878 29.2942 12.42 30.625C12.2542 30.9121 11.9812 31.1216 11.661 31.2074C11.3408 31.2932 10.9996 31.2483 10.7125 31.0825ZM25 20C23.62 20 22.5 18.32 22.5 16.25C22.5 14.18 23.62 12.5 25 12.5C26.38 12.5 27.5 14.18 27.5 16.25C27.5 18.32 26.38 20 25 20Z" 
                fill="white"
            />
        </Svg>
    );
}
