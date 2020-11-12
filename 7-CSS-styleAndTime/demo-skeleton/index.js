
const SWAPI_URL = "https://dog.ceo/api/breeds/image/random/4";
const dogsContainer = document.querySelector('.container__dogs');
const dogContainerTemplate = document.querySelector('.container__dog');

const displaySkeleton = () => {
  for (let i = 0; i < 4; i++) {
    const dogContainerClone = dogContainerTemplate.content.cloneNode(true);
    dogsContainer.appendChild(dogContainerClone);
  }
};

const fetchImages = async () => {
  const { message } = await fetch(SWAPI_URL)
    .then(res => res.json());

  const figureList = dogsContainer.querySelectorAll('figure');
  figureList.forEach((figure, idx) => {
    const image = figure.querySelector('img');
    image.classList.remove('loading');
    image.setAttribute('src', message[idx]);
    const caption = figure.querySelector('figcaption');
    caption.innerHTML = `woof I am dog ${idx + 1}`;
  });
};


displaySkeleton();
setTimeout(() => {
  fetchImages();
}, 2000);

