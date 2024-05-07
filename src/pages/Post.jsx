import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPost } from '../api/post';


const Post = () => {

  const navigate = useNavigate()
  const { id } = useParams();

  const { isLoading, isError, data: post, error } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id)
  })

  if (isLoading) return <h1> Loading ... </h1>
  if (isError) return <h1>{error.message}</h1>

  return (
    <div>
      <button onClick={() => navigate(-1)}>back to list posts</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Post