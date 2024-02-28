import { useState } from 'react';
import { CommentData } from './types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


type CreatePostProps = {
  onAdd: ((comment: CommentData) => void)
};

function PostForm( { onAdd } : CreatePostProps) {
  const [name, setName] = useState("");
  const [postText, setPostText] = useState("");

  return (
    <>
      <Card sx={{ width: 500, height: 380}}>
        <CardContent>
          <Typography variant="h5">make a new post.</Typography>
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
            multiline
            rows={6}
            label="write your post here"
            value={postText}
            sx={{ width: '100%' }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPostText(event.target.value);
            }}
            />
          </div>
          <div style={{ marginTop: '16px' }}>
            <Button variant="contained" onClick={() => {
                if (postText.trim() !== '' || name.trim() !== '') {
                onAdd({id: crypto.randomUUID(), name, text: postText});
                setName("");
                setPostText("");
                }
              }}>
              Submit
            </Button>
            </div>
        </CardContent>
      </Card>
    </>
  )
}

export default PostForm