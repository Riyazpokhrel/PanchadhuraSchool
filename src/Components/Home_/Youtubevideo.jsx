// import React from "react";

// const Youvideo = () => {
//   return (
//     <div>
//       <div className="max-w[1500px] flex justify-center">
//         <iframe
//           className="h-[50vw] w-[1500px]"
//           src="https://www.youtube.com/embed/j5lG67bcM0Q?si=C5XYFeEiA362-Sp_"
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerpolicy="strict-origin-when-cross-origin"
//           allowfullscreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Youvideo;
import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  return (
    <div>
      <div className="p-4 flex flex-col items-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          controls
          className="w-full h-full md:h-96 lg:h-[680px] rounded shadow-lg"
        >
          <source src="public/nature.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
