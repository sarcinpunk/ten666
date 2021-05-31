import React from 'react';
import { ReactVideo } from "reactjs-media";



export const videoPlayer1 = () => {
    return (
        <div>
            <ReactVideo
                src="https://vimeo.com/76979871.mp4"
                poster="https://www.example.com/poster.png"
                primaryColor="red"
                // other props
            />
        </div>
    );
};
