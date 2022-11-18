const card = (title, description) => `
  <div class="col-lg-4 col-sm-12">
    <div class="card mb-5 shadow-sm">
      <img src="https://picsum.photos/1000/600" class="img-fluid" />

      <div class="card-body">
        <div class="card-title">
          <h2>${title}</h2>
        </div>
        <div class="card-text">
          <p>${description}</p>
        </div>
        <a href="#" class="btn btn-outline-info rounded-0 float-end">Read More</a>
      </div>
    </div>
  </div>
`;

(async () => {
  const apiData = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((response) => response.json());
  console.log(apiData);
  const myData = [{ title: 'le titre ', description: 'ze description' }];

  let cardList = '';

  myData.forEach((post) => {
    console.log(post.title);
    document.getElementById('card-list').innerHTML += card(
      post.title,
      post.description
    );
  });
})();
