import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import AddPost from '../components/AddPost'
import { deletePost, fetchPosts } from '../api/post'
import { useNavigate } from "react-router-dom"

const PostLists = () => {

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Get Data
  const { isLoading, isError, data: posts, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })
  // Delete Data
  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    }
  });

  if (isLoading) return <h1> Loading ... </h1>
  if (isError) return <h1>{error.message}</h1>

  const handleDelete = (id) => {
    deletePostMutation.mutate(id)
  }

  return (
    <>
      <AddPost />
      <div>
        {posts.map(post => (
          <div key={post.id} style={{ background: "#777" }}>
            <h4 onClick={() => navigate(`/post/${post.id}`)}>{post.title}</h4>
            <button onClick={() => navigate(`/post/${post.id}/edit`)}> Edit </button>
            <button onClick={() => handleDelete(post.id)}> Delete </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PostLists