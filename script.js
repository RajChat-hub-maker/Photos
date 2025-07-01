const images = [
  { filename: "photo1.jpg", caption: "Office Day 1" },
  { filename: "photo2.jpg", caption: "Tool Screenshot" },
  { filename: "photo3.jpg", caption: "Team Meetup" },
  { filename: "photo4.jpg", caption: "Version 2.0 Release" },
  { filename: "photo5.jpg", caption: "Behind the Scenes" }
];

function createGalleryItem(image) {
  const wrapper = document.createElement('div');
  wrapper.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = `photos/${image.filename}`;
  img.alt = image.caption;
  img.loading = 'lazy';

  const actions = document.createElement('div');
  actions.className = 'actions';

  const downloadBtn = document.createElement('button');
  downloadBtn.textContent = '⬇️';
  downloadBtn.title = 'Download';
  downloadBtn.onclick = () => {
    const link = document.createElement('a');
    link.href = img.src;
    link.download = image.filename;
    link.click();
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.title = 'Delete';
  deleteBtn.onclick = () => {
    wrapper.remove();
  };

  actions.appendChild(downloadBtn);
  actions.appendChild(deleteBtn);
  wrapper.appendChild(img);
  wrapper.appendChild(actions);
  return wrapper;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('gallery');
  images.forEach(img => {
    const item = createGalleryItem(img);
    container.appendChild(item);
  });
});
