import { useState } from 'react';
import Comment from './Comment';
import { CommentData } from './types';
import CommentForm from './CommentForm';


function CommentTree({ level }: {level: number}) {
  const [comments, setComments] = useState<CommentData[]>([]);
  function addComment(comment: CommentData) {
    setComments([...comments, comment])
  }

  const [reply, setReply] = useState(false)
  
  return (
    <>
      <div>
      {level === 0 && <CommentForm onAdd={(addComment)}/>}
      <div/>
        <ul>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Comment comment={comment} level={level} />
            {!reply && (
              <button onClick={() => setReply(!reply)}>
                Reply
              </button>
            )}
            {reply && <>
              <CommentForm onAdd={addComment} />
              <button onClick={() => setReply(!reply)}>
                Cancel
              </button>
              </>
            }
          </div>
        ))}

        </ul>
      </div>
    </>
  )
}

export default CommentTree