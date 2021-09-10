import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors';

const ProfileInfo = ({ setEditMode, editMode }) => {

  const { authState, currentUser, profileUser, addFavourite, removeFavourite } = useContext(GlobalContext);

  const addFavouriteHandler = () => {
    addFavourite(profileUser.id);
  }

  const removeFavouriteHandler = () => {
    removeFavourite(profileUser.id);
  }

  const getLanguageString = () => {
    const languages = profileUser.languages;
    let languageString = '';

    if (profileUser.languages.length === 0) {
      return languageString;
    }

    else {
      languages.map((language, index) => {
        if (language !== '') {
          languageString += language;
          if (languages[index + 1] !== '' && index + 1 !== languages.length) {
            languageString += ' ' + '/' + ' ';
          }
        }
      })
      return languageString;
    }
  }

  return (
      <section id="user" className="animate__animated animate__fadeIn">
        <div id="profile-photo">
          {profileUser.profilePhotoFilename !== null && profileUser.profilePhotoFilename !== '' &&
            <div className="crop animate__animated animate__fadeIn" id="user-photo">
            </div>
          }
          {(profileUser.profilePhotoFilename === null || profileUser.profilePhotoFilename === '') &&
            <div className="crop animate__animated animate__fadeIn">
              <img src='/default-avatar.jpg' alt="profile-photo" />
            </div>
          }
        </div>

        <div id="user-info">
          <div id="info">
            <h1>{profileUser.firstName} {profileUser.lastName}</h1>
            <h2>Job Title: &nbsp; {profileUser.jobTitle}</h2>
            <h2>Location: &nbsp; {profileUser.location}</h2>
            <h2>Languages: &nbsp; {getLanguageString()}</h2>
          </div>

          <div id="buttons">
            {profileUser.id === currentUser.id &&
              <i className="fa fa-cog fa-2x" id="profile-edit-cog" aria-hidden="true" onClick={() => setEditMode(!editMode)}></i>
            }
            {profileUser.id !== currentUser.id && !(currentUser.favourites.includes(profileUser.id)) && authState.authenticated === true &&
              <button id="add-favourite" onClick={addFavouriteHandler}>
                <i className="fa fa-star-o fa-2x favourite" aria-hidden="true"></i>
              </button>
            }
            {currentUser.favourites.includes(profileUser.id) &&
              <button id="remove-favourite" onClick={removeFavouriteHandler}>
                <i className="fa fa-star fa-2x favourite" aria-hidden="true"></i>
              </button>
            }
          </div>
        </div>


    <style jsx>{`

      section {
        border-radius: 10px;
        margin-top: 1rem;
      }
      
      #user {
        margin: 3rem 0 2rem 0;
        display: flex;
        justify-content: space-between;
        background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
        background: linear-gradient(to right, #FF4B2B, #FF416C);
      }

      #user h1 {
        font-size: 3rem;
        margin: 1rem 0 4rem 0;
        line-height: 3rem;
      }
      
      #user h2 {
        margin-bottom: 2rem;
      }

      #profile-photo {
        width: 33%;
        background: white;
        padding: 3.5rem 3rem 3rem 3rem;
        border: 1px solid black;
        border-right: none;
        border-radius: 10px 0 0 10px;
      }

      img {
        width: 50px;
      }

      #user-info {
        width: 61%;
        padding: 3rem;
        display: flex;
        justify-content: space-between;
      }

      i#profile-edit-cog {
        cursor: pointer;
        transition: transform 2s;
      }

      i#profile-edit-cog:hover {
        transform: rotate(360deg);
      }
      
      button#add-favourite, button#remove-favourite {
        cursor: pointer;
        background: white;
        color: black;
        border: 1px solid ${colors.tertiary};
        border-radius: 50%;
        padding: 0.7rem;
        font-size: 1rem;
        height: 50px;
        width: 50px;
        position: relative;
      }

      #playlist {
        margin-top: 4rem;
      }

      .crop {
        width: 266px;
        height: 266px;
        overflow: hidden;
        border-radius: 50%;
        background-size: cover;
      }

      #user-photo {
        background-image: url('/image/${profileUser.profilePhotoFilename}');
      }
      
      img {
        width: 100%;
        height: 100%;
      }

      i.favourite {
        color: ${colors.secondary};
        position: absolute;
        top: 9px;
        left: 9.6px;
      }

      /* Media queries */
      @media (max-width: 1150px ) {
        #user {
          flex-direction: column;
          background: none;
          width: 75%;
          margin: auto;
        }

        #profile-photo {
          margin: auto;
          width: 61%;
          background: none;
        }

        .crop {
          margin: auto;
        }

        #user-info {
          background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
          background: linear-gradient(to right, #FF4B2B, #FF416C);
          margin: auto;
          width: 90%;
          border-radius: 10px;
          padding: 2.5rem;
        }
      }

      @media (max-width: 800px) {
        #profile-photo {
          padding: 0;
          margin: 3rem auto 3rem auto;
        }
      }

      @media (max-width: 768px) {
        #user-info {
          position: relative;
        }

        #info {
          width: 100%;
          margin: auto;
        }

        #buttons {
          position: absolute;
          right: 21px;
          top: 21px;
        }

      }

      @media (max-width: 580px ) {
        #user {
          width: 100%;
        }
        
        #user h1 {
          margin: 2rem 0 3rem 0;
          font-size: 2.5rem 
        }

        h2 {
          font-size: 1.5rem;
        }
      }

      @media (max-width: 470px ) {

        #buttons {
          position: absolute;
          right: 14px;
          top: 14px;
        }

        #user-info h1 {
          text-align: center;
        } 

        #user-info {
          padding: 2rem;
        }
        
        #user h1 {
          font-size: 2rem;
          margin-bottom: 1rem; 
        }

        h2 {
          font-size: 1.2rem;
          text-align: center;
        }
      }

      @media (max-width: 445px ) {
        #profile-photo {
          width: 100%;
        }

        .crop {
          max-width: 200px;
          max-height: 200px;
        }
      }

      @media (max-width: 370px ) {

        i.favourite {
          top: 4.7px;
          left: 5.7px;
        }

        .fa-star .fa-2x, .fa-star-o <div className="fa-2x"></div> {
          font-size: 1.4em
        }

        button#remove-favourite {
          height: 41px;
          width: 41px;
        }

      }

      @media (max-width: 320px ) {
        #user h1 {
          font-size: 2.2rem;
          margin-bottom: 2rem;
        }
      }

      @media (max-height: 820px ) {
        #profile-photo {
          margin: 2rem auto;
        }
      }

      @media (max-height: 770px ) {
        #profile-photo {
          margin: 2rem auto;
        }
      }
    
    `}</style>
    </section>
  )
}

export default ProfileInfo;
