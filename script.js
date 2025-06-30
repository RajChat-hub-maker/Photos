const images = [
  { filename: "photo1.png", caption: "Office Day 1" },
  { filename: "photo2.png", caption: "Tool Screenshot" },
  { filename: "photo3.png", caption: "Team Meetup" }
  // Add more images here
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

  // Download
  const downloadBtn = document.createElement('button');
  downloadBtn.textContent = '⬇️ Download';
  downloadBtn.onclick = () => {
    const link = document.createElement('a');
    link.href = img.src;
    link.download = image.filename;
    link.click();
  };

  // Delete (frontend only)
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️ Delete';
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
