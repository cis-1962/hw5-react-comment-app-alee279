import { useState } from 'react';
import { Post } from './post'

function CreatePost() {
  const [name, setName] = useState("");
  const [postText, setPostText] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePostTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostText(event.target.value);
  };

  const handleButtonClick = () => {
    const post = new Post(name, postText);
    return post.render()
  };
  
  return (
    <>
      <div>
        <header>Write a new post</header>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name.."
        />
      </div>
      <div>
        <input
          type="text"
          value={postText}
          onChange={handlePostTextChange}
          placeholder="Write a new post.."
        />
      </div>
      <button onClick={handleButtonClick}>
        Create post
      </button>
    </>
  )
}

export default CreatePost