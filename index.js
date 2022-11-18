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
      title: ' Univers du WEB ',
      description:
        '(14/11) <br><br> Initiation aux différents langages : Html, Css, Javascript.<br> On commence à coder avec un édtieur de textes (codesanbox)...',
      image: 'https://picsum.photos/id/357/1200/600',
    },
    {
      title: ' Templates ',

      description:
        "(15/11) <br><br> Javascript (permet d'animer une page Web) : cube qui change de couleurs",

      image: 'https://picsum.photos/id/72/1200/600',
    },
    {
      title: ' Framework Bootstrap ',

      description:
        '(16/11) <br><br> Coupure de courant : Morpion sans Internet.<br> Bootstrap est une bibliothéque gratuite qui fournit des modèles pour le développement de sites Web',

      image: 'https://picsum.photos/id/823/1200/600',
    },
    {
      title: " Création d'un Portfolio et d'un Blog ",

      description:
        "(17/11) <br><br> On change d'éditeur de texte, on passe à Stackblitz pour créer un Portfolio <br> Nouveau format dans Javascript : le json",

      image: 'https://picsum.photos/id/94/1200/600',
    },
    {
      title: ' Fin du Blog ',

      description:
        " (18/11) <br><br> Insertion d'objet et de tableaux dans le Javascript pour afficher des cartes sur le blog. <br> De nouvelles syntaxes telles que : let cardList, myData.forEach...",

      image: 'https://picsum.photos/id/15/1200/600',
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
