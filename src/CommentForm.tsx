import { useState } from 'react';
import { CommentData } from './types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';


type CreatePostProps = {
  onAdd: ((comment: CommentData) => void)
};

function CommentForm( { onAdd } : CreatePostProps) {
  const [name, setName] = useState("");
  const [postText, setPostText] = useState("");
  const [reply, setReply] = useState(false)

  return (
    <>
      {!reply && <Button variant="text" onClick={() => {
              setReply(true);
              }}>
              Reply
            </Button>}
      {reply && <Card sx={{ width: 500, height: 250 }}>
        <CardContent>
          <text>write a reply.</text>
          <div style={{ marginTop: '16px' }}>
            <TextField
              label="name"
              value={name}
              sx={{ width: '100%' }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
            />
          </div >
          <div style={{ marginTop: '16px' }}>
            <TextField
            label="write your comment"
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
                  setReply(false);
                }
              }}>
              Submit
            </Button>
            <span style={{ margin: '0 8px' }}></span>
            <Button size="small" variant="outlined" onClick={() => {
              setReply(false);
              }}>
              Cancel
            </Button>
            </div>
        </CardContent>
      </Card>}
      
    </>
  )
}

export default CommentForm