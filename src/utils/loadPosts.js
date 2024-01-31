export const loadPosts = async () => {
  const postsResp = fetch("https://jsonplaceholder.typicode.com/posts"); // API pública para teste / Public API for test
  const photosResp = fetch("https://jsonplaceholder.typicode.com/photos");

  const [posts, photos] = await Promise.all([postsResp, photosResp]);

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postAndPhotos = postsJson.map((post, index) => {
    return { ...post, photos: photosJson[index].url };
  });

  return postAndPhotos;
};
