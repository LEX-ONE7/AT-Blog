const card = (title, description, image) => `
  <div class="col-lg-4 col-sm-12">
    <div class="card mb-5 shadow-sm">
      <img src=${image} class="img-fluid" />

      <div class="card-body">
        <div class="card-title">
          <h2>${title}</h2>
        </div>
        <div class="card-text">
          <p>${description}</p>
        </div>
        <a href="#" class="btn btn-outline-info rounded-0 float-end"> Read More </a>
        
        </div>
      </div>
    </div>
  </div>
`;

(async () => {
  const apiData = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((response) => response.json());
  console.log(apiData);
  const myData = [
    {
      title: ' Lundi ',
      description: 'Description 1',
      image: 'https://picsum.photos/id/1/1200/600',
    },
    {
      title: ' Mardi ',

      description: 'Description 2',

      image: 'https://picsum.photos/id/2/1200/600',
    },
    {
      title: ' Mercredi ',

      description: 'Description 3',

      image: 'https://picsum.photos/id/3/1200/600',
    },
    {
      title: ' Jeudi ',

      description: 'Description 4',

      image: 'https://picsum.photos/id/4/1200/600',
    },
    {
      title: ' Vendredi ',

      description: 'Description 5',

      image: 'https://picsum.photos/id/5/1200/600',
    },
  ];

  let cardList = '';

  myData.forEach((post) => {
    console.log(post.title);
    document.getElementById('card-list').innerHTML += card(
      post.title,
      post.description,
      post.image
    );
  });
})();
