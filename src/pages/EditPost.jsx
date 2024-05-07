import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../components/PostForm'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPost, updatePost } from '../api/post';

const EditPost = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const queryClient = useQueryClient();

  const { isLoading, isError, data: post, error } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id)
  })

  const updatedPostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    }
  })
  if (isLoading) return <h1> Loading ... </h1>
  if (isError) return <h1>{error.message}</h1>

  const handleSubmit = (updatedPost) => {
    updatedPostMutation.mutate({ id, ...updatedPost })
    navigate(-1)
  }

  return (
    <div>
      <PostForm onSubmit={handleSubmit} initialValue={post} />
    </div>
  )
}

export default EditPost