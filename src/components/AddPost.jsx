import { useMutation, useQueryClient } from '@tanstack/react-query'
import PostForm from './PostForm'
import { createPost } from '../api/post'
import { v4 as uuidv4 } from "uuid"

const AddPost = () => {

  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    }
  })
  const handlePost = (post) => {
    createPostMutation.mutate({
      id: uuidv4(),
      ...post
    })
  }
  return (
    <div>
      <h2> Add new post </h2>
      <PostForm onSubmit={handlePost} initialValue={{}} />
    </div>
  )
}

export default AddPost