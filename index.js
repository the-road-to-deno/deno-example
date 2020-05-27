const url = 'http://hn.algolia.com/api/v1/search?query=javascript';

fetch(url)
  .then((result) => result.json())
  .then((result) => {
    const stories = result.hits.map((hit) => ({
      title: hit.title,
      url: hit.url,
      createdAt: hit.created_at_i,
    }));

    console.log(stories);
  });
