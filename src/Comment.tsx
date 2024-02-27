import { CommentData } from './types';
import CommentTree from './CommentTree';

type CommentProps = {
  comment: CommentData
  level: number;
};

const Comment = ({ comment, level }: CommentProps) => {
  return (
    <>
      <div className="Name">{comment.name}</div>
      <div className="Post">{comment.text}</div>
      {level < 2 && <CommentTree level= { level + 1 } />}
    </>
  );
};

export default Comment;
