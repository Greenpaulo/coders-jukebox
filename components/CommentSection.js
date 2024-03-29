import { useContext, useState } from 'react';
import Comment from './Comment';
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors';

const CommentSection = ({ profileUser }) => {

  const { addComment, authState} = useContext(GlobalContext);

  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  }
  
  const commentSubmitHandler = (e) => {
    e.preventDefault();
    addComment(content);
    setContent('');
  }


  return (
    <section id="comment-section">
      <h2>Comments</h2> 

      <section id="comments">
        {profileUser.playlistComments.length === 0 && 
          <h3>Be the first to add a comment!</h3>
        }

        {profileUser.playlistComments.map(comment => (
          <Comment comment={comment} key={comment._id}/>
        )
        )}
      </section>

      {authState.authenticated === true &&
        <section id="add-comment">
          <form onSubmit={(e) => commentSubmitHandler(e)}>
            <label htmlFor="comment-input">Add a comment</label>
            <textarea name="comment-input" id="comment-input" value={content} cols="30" rows="3" onChange={handleChange}></textarea>
            <button type="submit">Post</button>
          </form>
        </section>
      }


    <style jsx>{`
      section#comment-section {
        margin: 3rem 0;
        padding: 3rem;
        border: 1px solid black;
        border-radius: 10px;
        color: black;
        background: ${colors.gradient};
      }

      section#comments {
        margin-top: 1rem;
      }

      form {
        margin: 1rem 0;
      }

      label {
        font-weight: bold;
        font-size: 1.2rem;
      }

      textarea {
        margin-top: 0.5rem;
        width: 100%;
        font: inherit;
        font-size: 1.2rem;
        padding: 0.5rem;
      }

      button {
      background-color: white;
      color: black;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      margin: 0.5rem 0;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      transition: background-color 0.2s ease-in-out;
      }

      button:hover {
        background-color: #eee;
      }

      /* Media queries */
      @media (max-width: 1150px ) {

        section#comment-section {
          width: 80%;
          margin: auto;
        }
      }

      @media (max-width: 660px ) {
        section#comment-section {
          width: 95%;
        }
      }

      @media (max-width: 620px ) {
        section#comment-section {
          padding: 2rem;
        }
      }

      @media (max-width: 390px ) {
        section#comment-section {
          padding: 1.5rem;
        }
      }

      @media (max-width: 360px ) {
        section#comment-section {
          padding: 1rem;
        }
      }
    
    `}</style>
    </section>
  )
}

export default CommentSection;