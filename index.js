const card = (title, description, date, image) => `
  <div class="col-lg-4 col-sm-12">
    <div class="card mb-5 shadow-sm">
      <img src=${image} class="img-fluid" />

      <div class="card-body">
        <div class="card-title">
          <h2>${title}</h2>
          <h3>${date}</h3>
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
  let response = await fetch(
    'https://api.airtable.com/v0/appxHQIGj9Aa2gmHl/tblUyor4igSb5m6mE',

    {
      headers: {
        Authorization: 'Bearer keyppkeCDEzJh47Vt',

        'Content-Type': 'application/json',

        'Access-Control-Allow-Origin': '*',
      },
    }
  )
    .then((response) => response.json())

    .then((json) => console.log(json));
})();

(async () => {
  const apiData = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((response) => response.json());
  console.log(apiData);
  const myData = [
    {
      title: ' Le WEB ',
      description:
        'Initiation aux différents langages : Html, Css, Javascript.<br> Codage avec un édtieur de textes (codesanbox) et affichage sur un navigateur...',
      date: ' Lundi 14 Novembre ',
      image:
        'https://th.bing.com/th/id/R.55a7cc0600e543951cd3aea85fe6e383?rik=jZ6b%2fb38p4a1RA&pid=ImgRaw&r=0',
    },
    {
      title: ' Framework et Templates ',

      description:
        "Mardi 15 Novembre <br><br> Bootstrap est un framework de frontend gratuit : C'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript en option ",
      date: ' Mardi 15 Novembre ',

      image:
        'https://blog.templatetoaster.com/wp-content/uploads/2020/05/Bootstrap-5-Facebbok.png',
    },
    {
      title: ' Framework Bootstrap ',

      description:
        '(16/11) <br><br> Coupure de courant : Morpion sans Internet.<br> Bootstrap est une bibliothéque gratuite qui fournit des modèles pour le développement de sites Web',
      date: ' Mercredi 16 Novembre ',

      image: 'https://picsum.photos/id/823/1200/600',
    },
    {
      title: " Création d'un Portfolio et d'un Blog ",

      description:
        "(17/11) <br><br> On change d'éditeur de texte, on passe à Stackblitz pour créer un Portfolio <br> Nouveau format dans Javascript : le json",
      date: ' Jeudi 17 Novembre ',

      image: 'https://picsum.photos/id/94/1200/600',
    },
    {
      title: ' Fin du Blog ',

      description:
        " (18/11) <br><br> Insertion d'objet et de tableaux dans le Javascript pour afficher des cartes sur le blog. <br> De nouvelles syntaxes telles que : let cardList, myData.forEach...",
      date: ' Vendredi 18 Novembre ',

      image: 'https://picsum.photos/id/15/1200/600',
    },
  ];

  let cardList = '';

  myData.forEach((post) => {
    console.log(post.title);
    document.getElementById('card-list').innerHTML += card(
      post.title,
      post.description,
      post.date,
      post.image
    );
  });
})();
