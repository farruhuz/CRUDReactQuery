export async function fetchPosts() {
  const response = await fetch("https://66260426052332d553214ba8.mockapi.io/posts");
  return await response.json();
}

export async function fetchPost(id) {
  const response = await fetch(`https://66260426052332d553214ba8.mockapi.io/posts/${id}`);
  return await response.json();
}

export async function createPost(newPost) {
  const response = await fetch(`https://66260426052332d553214ba8.mockapi.io/posts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost)
  });
  return await response.json();
}

export async function updatePost(updatedPost) {
  const response = await fetch(`https://66260426052332d553214ba8.mockapi.io/posts/${updatedPost.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedPost)
  });
  return await response.json();
}

export async function deletePost(id) {
  const response = await fetch(`https://66260426052332d553214ba8.mockapi.io/posts/${id}`, {
    method: "DELETE",
  });
  return await response.json();
} 