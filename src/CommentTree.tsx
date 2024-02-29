import { useState } from 'react';
import Comment from './Comment';
import { CommentData } from './types';
import CommentForm from './CommentForm';
// import PostForm from './PostForm';


function CommentTree({ level }: {level: number}) {
  const [comments, setComments] = useState<CommentData[]>([]);
  function addComment(comment: CommentData) {
    setComments([...comments, comment])
  }
  
  return (
    <>
      <div>
      {/* {level === 0 ? (
        <PostForm onAdd={addComment} />
      ) : (
        <CommentForm onAdd={addComment} />
      )} */}
      <CommentForm onAdd={addComment} isTop={level === 0}/>
      <div />
        <ul>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Comment comment={comment} level={level}/>
          </div>
        ))}

        </ul>
      </div>
    </>
  )
}

export default CommentTree