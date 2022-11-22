const card = (title, description, date, image) => `
  <div class="col-lg-4 col-sm-12">
    <div class="card mb-5 shadow-sm ">
      <img src=${image} class="img-fluid" />

      <span class="border border-primary">
        <div class="card-body">
      
          <div class="card-title">
            <h2 class="text-decoration-underline">${title}</h2>
            <h3 class="display-5 fs-5">${date}</h3>
          </div>
        <div class="card-text">
          <p>${description}</p>
        </div>
        <a href="#" class="btn btn-outline-info rounded-0 float-end"> Read More </a>
        
        </div>
      </div>
      </span>
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
      title: " La Création d'un site WEB ",
      description:
        'Initiation aux différents langages : Html, Css, Javascript.<br> Codage avec un édtieur de textes (codesanbox), affichage sur un navigateur...',
      date: ' Lundi 14 Novembre ',
      image:
        'https://pic.clubic.com/v1/images/1709696/raw?width=1200&fit=max&hash=b66a110eab5bfb759d547630534eb1be823a7b82',
    },
    {
      title: ' Framework et Templates ',

      description:
        "Un framework (ex: Bootstrap) de frontend gratuit : c'est un ensemble qui contient des codes HTML et CSS, des formulaires, boutons, outils de navigation et autres éléments interactifs, ainsi que des extensions JavaScript en option. ",
      date: ' Mardi 15 Novembre ',

      image:
        'https://techibhai.com/wp-content/uploads/2019/12/Web-Application-Frameworks-1.png',
    },
    {
      title: ' Framework Bootstrap ',

      description:
        'Bootstrap, une bibliothéque gratuite qui fournit des modèles pour le développement de sites Web',
      date: ' Mercredi 16 Novembre ',

      image:
        'https://www.bootstrapdash.com/wp-content/uploads/2019/10/one-host-1.png',
    },
    {
      title: " Création d'un Portfolio ",

      description:
        "Utilisation de l'éditeur de textes Stackblitz, pour un Portfolio personnel<br> Une nouvelle extension dans Javascript : le json, un format utilisé pour structurer et échanger des données...",
      date: ' Jeudi 17 Novembre ',

      image:
        'https://i.pinimg.com/736x/63/fa/f1/63faf161c069249a0b9ff7ac01d91616.jpg',
    },
    {
      title: " Création d'un Blog ",

      description:
        "Insertion d'objet et de tableaux dans le Javascript pour afficher des cartes sur le blog. <br> De nouvelles syntaxes telles que : let cardList, const myData, forEach...",
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
