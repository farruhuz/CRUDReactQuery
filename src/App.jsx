import { Route, Routes } from "react-router-dom"
import PostLists from "./pages/PostLists"
import Post from "./pages/Post"
import EditPost from "./pages/EditPost"

function App() {
  return (
    <>
      <h1>Awesome blog</h1>
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
      </Routes>
    </>
  )
}

export default App
