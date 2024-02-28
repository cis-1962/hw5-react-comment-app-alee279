import { CommentData } from './types';
import CommentTree from './CommentTree';
import { useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type CommentProps = {
  comment: CommentData
  level: number
};

const Comment = ({ comment, level }: CommentProps) => {

  const [upvotes, setUpvotes] = useState(0);

  return (
    <>
    <div className='CommentContainer'>
      <div className='PostContainer'>
          <div className="Name">{comment.name}</div>
          <div className="Post">{comment.text}</div>
      </div>
      <div className='UpvotesContainer'>
        <div>
          <button className='VoteButton' onClick={() => setUpvotes(upvotes + 1)}>
            <ArrowUpwardIcon />
          </button>
          <div style={{ textAlign: 'center'}}>
          <span>{upvotes}</span>
          </div>
          <button className='VoteButton' onClick={() => setUpvotes(upvotes - 1)}>
            <ArrowDownwardIcon />
          </button>
        </div>
      </div>
    </div>
      {level < 2 && <CommentTree level= { level + 1 } />}
    </>
  );
};

export default Comment;
