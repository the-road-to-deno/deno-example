const url = 'http://hn.algolia.com/api/v1/search?query=javascript';

const result = await fetch(url).then((result) => result.json());

const stories = result.hits.map((hit) => ({
  title: hit.title,
  url: hit.url,
  createdAt: hit.created_at_i,
}));

console.log(stories);
