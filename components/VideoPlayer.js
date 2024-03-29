import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';
import colors from '../css-variables/colors'

const VideoPlayer = () => {

  const { videoState, autoplay, profileUser } = useContext(GlobalContext);

  // Autoplay off
  let videoSrc = `https://www.youtube.com/embed/${videoState.videoId}`;

  if (autoplay) {
    // Autoplay on
    videoSrc = `https://www.youtube.com/embed/${videoState.videoId}?autoplay=1`;
  }

  return (

    <div id="video-container">
      {profileUser.ownedVideos.length > 0 && videoState.title !== '' &&
        <div id="video-player">
          <iframe width="918" height="567" frameBorder="0" allowFullScreen allow="autoplay" src={videoSrc}></iframe>
        </div>
      }
      

  <style jsx>{`
    #video-container {
      margin-top: 3rem;
    }
    
    #video-player {
      width: 85%;
      margin: 4rem auto;
      padding: 1rem;
      border: 1px solid ${colors.primary}
    }

    iframe {
      padding: 0.5rem;
      margin: auto;
      width: 100%;
    }

    #video-info {
      margin-top: 1rem;
      text-align: center;
    }

    /* Media queries */
    @media (max-width: 1150px ) {

      #video-player {
        width: 90%;
        margin: auto;
      }

      iframe {
        margin: auto;
      }
    }

    @media (max-width: 1000px ) {
      iframe {
      }
    }

    @media (max-width: 580px ) {
      #video-player {
        width: 91%;
      }

      iframe {
        height: 33vh;
      }
    }

  `}</style>
  </div>
  )
}

export default VideoPlayer;