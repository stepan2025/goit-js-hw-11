import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <a href="${largeImageURL}" class="gallery-item">
      <img src="${webformatURL}" alt="${tags}" />
      <div class="info">
        <p>Likes ${likes}</p>
        <p>Views ${views}</p>
        <p>Comments ${comments}</p>
        <p>Downloads ${downloads}</p>
      </div>
    </a>`
    )
    .join('');
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}
