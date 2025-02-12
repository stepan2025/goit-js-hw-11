import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  const images = await fetchImages(query);
  loader.style.display = 'none';

  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message: 'Sorry, no images found. Try again!',
    });
    return;
  }

  renderGallery(images);
});
