import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CommentTree from './CommentTree.tsx'
import { Typography } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ marginTop: '100px' }}>
      <Typography variant="h2" align='center' marginBottom={3}>thread.</Typography>
      <Typography align='center'>welcome to thread. create new posts down below.</Typography>
      <Typography align='center' marginBottom={3}>comment and vote on posts you love. or hate. </Typography>
      <div>
        <CommentTree level={0} />
      </div>
    </div>
  </React.StrictMode>,
)
