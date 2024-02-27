import { useState } from 'react';
import { CommentData } from './types';

type CreatePostProps = {
  onAdd: ((comment: CommentData) => void)
};

function CommentForm( { onAdd } : CreatePostProps) {
  const [name, setName] = useState("");
  const [postText, setPostText] = useState("");

  return (
    <>
      <div>
        <header>Write a new post</header>
        <input
          type="text"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          placeholder="Name.."
        />
      </div>
      <div>
        <input
          type="text"
          value={postText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPostText(event.target.value);
          }}
          placeholder="Write a new post.."
        />
      </div>
      <button onClick={() => {onAdd({id: crypto.randomUUID(), name, text: postText})}}>
        Submit
      </button>
    </>
  )
}

export default CommentForm