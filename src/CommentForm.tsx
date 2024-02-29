import { useState } from 'react';
import { CommentData } from './types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';


type CreatePostProps = {
  onAdd: ((comment: CommentData) => void)
  isTop: boolean
};

function CommentForm( { onAdd, isTop } : CreatePostProps ) {
  const [name, setName] = useState("");
  const [reply, setReply] = useState(isTop);
  const [postText, setPostText] = useState("");

  return (
    <>
      {!reply && <Button variant="text" sx={{ marginBottom: 2 }} onClick={() => {
              setReply(true);
              }}>
              Reply
            </Button>}
      {reply && <Card sx={{ width: 500, height: 250, marginBottom: 2 }}>
        <CardContent>
          <text>{isTop ? 'start a new thread.' : 'write your reply.'}</text>
          <div style={{ marginTop: '16px' }}>
            <TextField
              label="your name."
              value={name}
              sx={{ width: '100%' }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
            />
          </div >
          <div style={{ marginTop: '16px' }}>
          <TextField
            label={isTop ? 'write your post here.' : 'write your reply here.'}
            value={postText}
            sx={{ width: '100%' }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPostText(event.target.value);
            }}
          />
          </div>
          <div style={{ marginTop: '16px' }}>
            <Button size="small" variant="contained" onClick={() => {
                if (postText.trim() !== '' || name.trim() !== '') {
                  onAdd({ id: crypto.randomUUID(), name, text: postText });
                  setName('');
                  setPostText('');
                  if (!isTop) setReply(false);
                }
              }}>
              Submit
            </Button>
            <span style={{ margin: '0 8px' }}></span>
            {!isTop && <Button size="small" variant="outlined" onClick={() => {
              setReply(false);
              }}>
              Cancel
            </Button>}
            </div>
        </CardContent>
      </Card>}
      
    </>
  )
}

export default CommentForm