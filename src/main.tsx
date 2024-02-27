import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CommentTree from './CommentTree.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CommentTree level={0}/>
  </React.StrictMode>,
)
