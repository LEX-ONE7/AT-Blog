const card = `
  <div class="col-4 col-md-4 col-sm-12">
    <div class="card mb-5 shadow-sm">
      <img src="https://picsum.photos/1000/600" class="img-fluid" />

      <div class="card-body">
        <div class="card-title">
          <h2>This is the post title</h2>
        </div>
        <div class="card-text">
          <p>
            En effet, mon profil correspond à la description recherchée sur
            l’offre d’emploi (préciser où l’annonce a été vue). (Si le candidat
            possède peu d’expérience professionnelle) Ma formation en (préciser la
            formation) m'a permis d'acquérir de nombreuses compétences parmi
            celles que vous recherchez. Je possède tous les atouts qui me
            permettront de réussir dans le rôle que vous voudrez bien me confier.
            Motivation, rigueur et écoute sont les maîtres mots de mon
            comportement professionnel...
          </p>
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
  const dataDiv = document.getElementById('data');
  dataDiv.innerHTML = card;
})();
