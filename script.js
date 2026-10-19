const lockScreen = document.querySelector("#lock-screen");
const siteContent = document.querySelector("#site-content");
const unlockForm = document.querySelector("#unlock-form");
const unlockPassword = document.querySelector("#unlock-password");
const lockError = document.querySelector("#lock-error");
const numberPad = document.querySelector("#number-pad");
const wishForm = document.querySelector("#wish-form");
const wishInput = document.querySelector("#wish-text");
const characterCount = document.querySelector("#character-count");
const wishList = document.querySelector("#wish-list");
const photoInput = document.querySelector("#photo-input");
const photoCarousel = document.querySelector("#photo-carousel");
const photoGrid = document.querySelector("#photo-grid");
const photoEmpty = document.querySelector("#photo-empty");
const photoPrevious = document.querySelector("#photo-previous");
const photoNext = document.querySelector("#photo-next");
const photoCount = document.querySelector("#photo-count");
const uploadHint = document.querySelector("#upload-hint");
const toast = document.querySelector("#toast");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector("#lightbox-close");
const lightboxPrevious = document.querySelector("#lightbox-previous");
const lightboxNext = document.querySelector("#lightbox-next");
const lightboxCount = document.querySelector("#lightbox-count");
const videoTrack = document.querySelector("#video-track");
const videoCards = [...videoTrack.querySelectorAll(".video-card")];
const videoDots = [...document.querySelectorAll(".video-dot")];
const videoArrows = [...document.querySelectorAll(".video-arrow")];
const videoCount = document.querySelector("#video-count");
const musicAudio = document.querySelector("#music-audio");
const musicDock = document.querySelector("#music-dock");
const musicDockTitle = document.querySelector("#music-dock-title");
const musicDockToggle = document.querySelector("#music-dock-toggle");
const musicDockNext = document.querySelector("#music-dock-next");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const WISH_STORAGE_KEY = "thuong-gui-nguoi-yeu:wishes";
const PHOTO_STORAGE_KEY = "thuong-gui-nang:photos";
const PHOTO_AUTOPLAY_DELAY = 8000;
const UNLOCK_PASSWORD = "2212";
const MUSIC_TRACKS = [
  { title: "Lời Yêu Em", src: "music/Lời Yêu Em.mp3" },
  { title: "Số 1 Thế Giới", src: "music/Số 1 Thế Giới.mp3" },
  { title: "Yêu Đương", src: "music/Yêu Đương.mp3" },
  { title: "Đến Khi Nào (Chill Out)", src: "music/Đến Khi Nào (Chill Out).mp3" },
];
const BUNDLED_PHOTOS = [
  { src: "Images/1792381798417_131250798445050534_694923841989362896_b881e9c0ac9610dbec309e4e0402d158.webp", caption: "Một ngày dịu dàng giữa núi rừng · 01", alt: "Nhật Linh trong chiếc váy trắng giữa núi rừng, ảnh 1" },
  { src: "Images/1792381799329_131250798445050534_694923841989362896_0e9f44e160e8fc70f21929cf012dc28e.webp", caption: "Một ngày dịu dàng giữa núi rừng · 02", alt: "Nhật Linh trong chiếc váy trắng giữa núi rừng, ảnh 2" },
  { src: "Images/1792381800222_131250798445050534_694923841989362896_36031c2fea22b1e1a7c38481684af1f8.webp", caption: "Một ngày dịu dàng giữa núi rừng · 03", alt: "Nhật Linh trong chiếc váy trắng giữa núi rừng, ảnh 3" },
  { src: "Images/1792381800975_131250798445050534_694923841989362896_14e4275065783be2165d5afee5ae7a80.webp", caption: "Một ngày dịu dàng giữa núi rừng · 04", alt: "Nhật Linh trong chiếc váy trắng giữa núi rừng, ảnh 4" },
  { src: "Images/1792381801814_131250798445050534_694923841989362896_687d7869303d06722f9140e3cfce0be0.webp", caption: "Một ngày dịu dàng giữa núi rừng · 05", alt: "Nhật Linh trong chiếc váy trắng giữa núi rừng, ảnh 5" },
  { src: "Images/1792381802547_131250798445050534_694923841989362896_6f7b7506ab575cabcb881d384eec9ff5.webp", caption: "Một ngày dịu dàng giữa núi rừng · 06", alt: "Nhật Linh trong chiếc váy trắng giữa núi rừng, ảnh 6" },
  { src: "Images/1792381803331_131250798445050534_694923841989362896_6049ea39f3531a3c766566ea0081648b.webp", caption: "Chiều mây phủ lưng đồi · 07", alt: "Nhật Linh bên căn nhà nhỏ giữa đồi núi, ảnh 7" },
  { src: "Images/1792381804058_131250798445050534_694923841989362896_db58c7087887acff06442cd3a4ffd273.webp", caption: "Chiều mây phủ lưng đồi · 08", alt: "Nhật Linh giữa khung cảnh đồi núi, ảnh 8" },
  { src: "Images/1792381804855_131250798445050534_694923841989362896_c438b44ee63e280c5a23f9512256c783.webp", caption: "Chiều mây phủ lưng đồi · 09", alt: "Nhật Linh trong chiếc váy trắng bên căn nhà trên đồi, ảnh 9" },
  { src: "Images/1792381805674_131250798445050534_694923841989362896_89ceb1bd93957a8c7bea38c80b95fb3d.webp", caption: "Chiều mây phủ lưng đồi · 10", alt: "Nhật Linh giữa khung cảnh núi đồi, ảnh 10" },
  { src: "Images/1792381806454_131250798445050534_694923841989362896_c0d69fde3eb0baa5843528b805dc0ce5.webp", caption: "Chiều mây phủ lưng đồi · 11", alt: "Nhật Linh ngắm cảnh bên căn nhà nhỏ trên đồi, ảnh 11" },
  { src: "Images/1792381807213_131250798445050534_694923841989362896_541ae75322bb373ac16b98269f84b679.webp", caption: "Chiều mây phủ lưng đồi · 12", alt: "Nhật Linh giữa triền đồi lúc chiều muộn, ảnh 12" },
  { src: "Images/1792381807899_131250798445050534_694923841989362896_a03642c98515177da37449fbfa39a947.webp", caption: "Chiều mây phủ lưng đồi · 13", alt: "Nhật Linh trong khung cảnh núi rừng, ảnh 13" },
  { src: "Images/1792381808704_131250798445050534_694923841989362896_58f6a06b65f85bfea8de4fc4aaaa9785.webp", caption: "Chiều mây phủ lưng đồi · 14", alt: "Nhật Linh giữa khung cảnh đồi núi lúc chiều, ảnh 14" },
  { src: "Images/1792381809364_131250798445050534_694923841989362896_c232135d7ca251e2ca1037d238e4490d.webp", caption: "Chiều mây phủ lưng đồi · 15", alt: "Nhật Linh tạo dáng giữa thung lũng, ảnh 15" },
  { src: "Images/1792381810234_131250798445050534_694923841989362896_7f8753cecbc06954e796d23752af6013.webp", caption: "Nắng chiều trên triền núi · 16", alt: "Nhật Linh giữa triền núi trong nắng chiều, ảnh 16" },
  { src: "Images/1792381810970_131250798445050534_694923841989362896_031d0c749067ed0c1e6e7f4786843eb3.webp", caption: "Chiều mây phủ lưng đồi · 17", alt: "Nhật Linh giữa cảnh núi rừng, ảnh 17" },
  { src: "Images/1792381811865_131250798445050534_694923841989362896_5cac6caf703fbacce09881c738d7736a.webp", caption: "Một ngày dịu dàng giữa núi rừng · 18", alt: "Nhật Linh trong chiếc váy trắng bên sườn núi, ảnh 18" },
  { src: "Images/1792381812517_131250798445050534_694923841989362896_c5f72919093e5a9409a93d2760f98f53.webp", caption: "Chiều mây phủ lưng đồi · 19", alt: "Nhật Linh giữa đồi núi trong ánh chiều, ảnh 19" },
  { src: "Images/1792381813400_131250798445050534_694923841989362896_3f9589ea78378b9148e889529b04fd59.webp", caption: "Một ngày dịu dàng giữa núi rừng · 20", alt: "Nhật Linh trong chiếc váy trắng giữa thung lũng, ảnh 20" },
  { src: "Images/1792381814209_131250798445050534_694923841989362896_7ca1cc2edcd026ac9762011d5cd93a14.webp", caption: "Một ngày dịu dàng giữa núi rừng · 21", alt: "Nhật Linh trong chiếc váy trắng giữa đồi cỏ, ảnh 21" },
  { src: "Images/1792381815114_131250798445050534_694923841989362896_b8bb14e6949cc10a35290dc86368cb91.webp", caption: "Một ngày dịu dàng giữa núi rừng · 22", alt: "Nhật Linh trên triền cỏ xanh, ảnh 22" },
  { src: "Images/1792381816082_131250798445050534_694923841989362896_85604865ccb7876df7de3580228a2f8d.webp", caption: "Một ngày dịu dàng giữa núi rừng · 23", alt: "Nhật Linh bên sườn núi xanh, ảnh 23" },
  { src: "Images/1792381816653_131250798445050534_694923841989362896_37915a7d5a9d8c511fe6a6e3a967d4a7.webp", caption: "Chạm vào mây trời · 24", alt: "Nhật Linh đứng giữa mây trời và lá cờ đỏ, ảnh 24" },
  { src: "Images/1792381817303_131250798445050534_694923841989362896_6bc8c17385204b740818306fd21c9e77.webp", caption: "Chạm vào mây trời · 25", alt: "Nhật Linh giữa biển mây dưới bầu trời xanh, ảnh 25" },
  { src: "Images/1792381818062_131250798445050534_694923841989362896_eb2a718dbb55639ab40b8f66a221fe3a.webp", caption: "Chạm vào mây trời · 26", alt: "Nhật Linh trên đỉnh núi giữa mây trắng, ảnh 26" },
  { src: "Images/1792381818773_131250798445050534_694923841989362896_1ca0c9df04f9ee7e9544112fbcce0c8e.webp", caption: "Chạm vào mây trời · 27", alt: "Nhật Linh tạo dáng giữa biển mây, ảnh 27" },
  { src: "Images/1792381819398_131250798445050534_694923841989362896_b716253660f1500386b7969954cd805c.webp", caption: "Chạm vào mây trời · 28", alt: "Khung cảnh biển mây trắng giữa núi, ảnh 28" },
  { src: "Images/1792381820398_131250798445050534_694923841989362896_4cfdaadc49d5f59232829986aae2ae5c.webp", caption: "Một ngày dịu dàng giữa núi rừng · 29", alt: "Nhật Linh giữa thung lũng xanh, ảnh 29" },
  { src: "Images/1792381820990_131250798445050534_694923841989362896_f7586ba1f7f509d548577daf113e7ed9.webp", caption: "Chạm vào mây trời · 30", alt: "Nhật Linh bên lá cờ đỏ giữa mây trời, ảnh 30" },
];
let toastTimeout;
let activePhotoCard = null;
let photoAutoplayTimer = null;
let photoScrollFrame = 0;
const photoCarouselPauseReasons = new Set();
let activeVideoIndex = 0;
let videoScrollFrame = 0;
let musicQueue = [];
let musicQueueIndex = -1;
let currentMusicIndex = -1;

function shuffleMusicQueue() {
  musicQueue = MUSIC_TRACKS.map((_, index) => index);
  for (let index = musicQueue.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [musicQueue[index], musicQueue[swapIndex]] = [musicQueue[swapIndex], musicQueue[index]];
  }
  if (musicQueue.length > 1 && musicQueue[0] === currentMusicIndex) {
    const swapIndex = 1 + Math.floor(Math.random() * (musicQueue.length - 1));
    [musicQueue[0], musicQueue[swapIndex]] = [musicQueue[swapIndex], musicQueue[0]];
  }
  musicQueueIndex = -1;
}

function updateMusicPlaybackState() {
  const isPlaying = !musicAudio.paused;
  musicDock.classList.toggle("is-playing", isPlaying);
  musicDockToggle.textContent = isPlaying ? "Ⅱ" : "▶";
  musicDockToggle.setAttribute("aria-label", isPlaying ? "Tạm dừng nhạc nền" : "Phát nhạc nền");
}

function playNextMusicTrack() {
  if (musicQueueIndex + 1 >= musicQueue.length) shuffleMusicQueue();
  musicQueueIndex += 1;
  currentMusicIndex = musicQueue[musicQueueIndex];
  const track = MUSIC_TRACKS[currentMusicIndex];
  musicAudio.pause();
  musicAudio.src = track.src;
  musicAudio.load();
  musicDockTitle.textContent = track.title;
  musicDock.hidden = false;
  musicAudio.play().catch((error) => {
    updateMusicPlaybackState();
    if (error.name === "NotAllowedError") {
      showToast("Trình duyệt chưa cho phép phát nhạc. Hãy nhấn nút phát để thử lại.");
    }
  });
}

function toggleMusicPlayback() {
  if (musicAudio.paused) {
    if (currentMusicIndex < 0) {
      playNextMusicTrack();
    } else {
      musicAudio.play().catch((error) => {
        if (error.name === "NotAllowedError") showToast("Trình duyệt chưa cho phép phát nhạc. Hãy nhấn nút phát để thử lại.");
      });
    }
  } else {
    musicAudio.pause();
  }
}

musicDockToggle.addEventListener("click", toggleMusicPlayback);
musicDockNext.addEventListener("click", playNextMusicTrack);
musicAudio.addEventListener("play", updateMusicPlaybackState);
musicAudio.addEventListener("pause", updateMusicPlaybackState);
musicAudio.addEventListener("ended", playNextMusicTrack);
musicAudio.addEventListener("error", () => {
  const track = MUSIC_TRACKS[currentMusicIndex];
  if (track) showToast(`Trình duyệt không thể phát bài “${track.title}”. Hãy thử mở trang bằng trình duyệt hỗ trợ MP3.`);
});

function showHeartEffect(button) {
  const bounds = button.getBoundingClientRect();
  const heart = document.createElement("span");
  heart.className = "key-heart";
  heart.setAttribute("aria-hidden", "true");
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = `${bounds.left + bounds.width / 2}px`;
  heart.style.top = `${bounds.top + bounds.height / 2}px`;
  lockScreen.append(heart);
  window.setTimeout(() => heart.remove(), reducedMotion.matches ? 100 : 950);
}

numberPad.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  showHeartEffect(button);
  lockError.textContent = "";
  if (button.dataset.key && unlockPassword.value.length < unlockPassword.maxLength) {
    unlockPassword.value += button.dataset.key;
  } else if (button.dataset.action === "backspace") {
    unlockPassword.value = unlockPassword.value.slice(0, -1);
  } else if (button.dataset.action === "clear") {
    unlockPassword.value = "";
  }
});

function updateVideoSlide(index) {
  const nextIndex = Math.max(0, Math.min(videoCards.length - 1, index));
  activeVideoIndex = nextIndex;
  videoDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === nextIndex;
    dot.classList.toggle("is-active", isActive);
    if (isActive) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });
  videoCount.textContent = `${String(nextIndex + 1).padStart(2, "0")} / ${String(videoCards.length).padStart(2, "0")}`;
  videoCards.forEach((card, cardIndex) => {
    if (cardIndex !== nextIndex) card.querySelector("video").pause();
  });
}

function goToVideo(index) {
  const nextIndex = Math.max(0, Math.min(videoCards.length - 1, index));
  videoTrack.scrollTo({
    left: nextIndex * videoTrack.clientWidth,
    behavior: reducedMotion.matches ? "auto" : "smooth",
  });
  updateVideoSlide(nextIndex);
}

videoDots.forEach((dot, index) => dot.addEventListener("click", () => goToVideo(index)));
videoArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const direction = Number(arrow.dataset.videoDirection);
    const nextIndex = (activeVideoIndex + direction + videoCards.length) % videoCards.length;
    goToVideo(nextIndex);
  });
});
videoTrack.addEventListener("scroll", () => {
  if (videoScrollFrame) return;
  videoScrollFrame = window.requestAnimationFrame(() => {
    const index = Math.round(videoTrack.scrollLeft / videoTrack.clientWidth);
    if (index !== activeVideoIndex) updateVideoSlide(index);
    videoScrollFrame = 0;
  });
});
window.addEventListener("resize", () => {
  videoTrack.scrollTo({ left: activeVideoIndex * videoTrack.clientWidth, behavior: "auto" });
});
updateVideoSlide(0);

unlockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (unlockPassword.value !== UNLOCK_PASSWORD) {
    lockError.textContent = "Mật khẩu chưa đúng rồi, thử lại nhé ♡";
    unlockPassword.value = "";
    return;
  }

  lockError.textContent = "";
  siteContent.hidden = false;
  lockScreen.hidden = true;
  document.body.classList.remove("is-locked");
  window.requestAnimationFrame(() => {
    updatePhotoCarousel();
    schedulePhotoAutoplay();
  });
  playNextMusicTrack();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3400);
}

function readSavedList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    showToast("Không thể đọc nội dung đã lưu. Bạn vẫn có thể thêm nội dung mới.");
    return [];
  }
}

function persistList(key, items) {
  try {
    localStorage.setItem(key, JSON.stringify(items));
    return true;
  } catch (error) {
    if (error instanceof DOMException && (error.name === "QuotaExceededError" || error.name === "NS_ERROR_DOM_QUOTA_REACHED")) {
      showToast("Bộ nhớ trình duyệt đã đầy. Hãy xóa bớt ảnh hoặc dữ liệu trang để lưu thêm nhé.");
      return false;
    }
    showToast("Không thể lưu vào trình duyệt. Vui lòng kiểm tra cài đặt lưu trữ.");
    return false;
  }
}

function addWishCard(text, number) {
  const card = document.createElement("article");
  card.className = "wish-card";

  const heading = document.createElement("span");
  heading.className = "wish-number";
  heading.append(document.createTextNode(`${String(number).padStart(2, "0")} `));
  const label = document.createElement("span");
  label.textContent = "— NHẬT LINH";
  heading.append(label);

  const message = document.createElement("p");
  message.textContent = `“${text}”`;

  const author = document.createElement("span");
  author.className = "wish-author";
  author.append(document.createTextNode("Một lời nhắn từ anh "));
  const heart = document.createElement("span");
  heart.setAttribute("aria-hidden", "true");
  heart.textContent = "♡";
  author.append(heart);

  card.append(heading, message, author);
  wishList.prepend(card);
}

function restoreWishes() {
  const saved = readSavedList(WISH_STORAGE_KEY).filter((item) => typeof item === "string" && item.trim());
  saved.slice().reverse().forEach((message, index) => addWishCard(message, saved.length - index + 3));
}

wishInput.addEventListener("input", () => {
  characterCount.textContent = `${wishInput.value.length} / 260`;
});

wishForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = wishInput.value.trim();
  if (!text) {
    wishInput.focus();
    return;
  }

  const saved = readSavedList(WISH_STORAGE_KEY);
  if (!persistList(WISH_STORAGE_KEY, [text, ...saved])) return;

  addWishCard(text, saved.length + 4);
  wishForm.reset();
  characterCount.textContent = "0 / 260";
  showToast("Lời nhắn đã được gửi và lưu lại trên thiết bị này. ♡");
  wishList.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "center" });
});

function renderPhoto(dataUrl, name) {
  const card = document.createElement("figure");
  card.className = "photo-card user-photo-card";

  const image = document.createElement("img");
  image.src = dataUrl;
  image.alt = name ? `Ảnh kỷ niệm: ${name}` : "Ảnh kỷ niệm được thêm vào album";

  const caption = document.createElement("figcaption");
  const title = document.createElement("span");
  title.className = "photo-caption";
  title.textContent = name || "Một khoảnh khắc đáng yêu";

  const heart = document.createElement("span");
  heart.className = "photo-heart";
  heart.setAttribute("aria-hidden", "true");
  heart.textContent = "♡";

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-photo";
  removeButton.setAttribute("aria-label", `Xóa ảnh ${name || "đã thêm"}`);
  removeButton.title = "Xóa ảnh này";
  removeButton.textContent = "×";
  removeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const saved = readSavedList(PHOTO_STORAGE_KEY);
    const index = saved.findIndex((photo) => photo.dataUrl === dataUrl && (photo.name || "") === (name || ""));
    if (index < 0) {
      card.remove();
      updateEmptyState();
      return;
    }
    saved.splice(index, 1);
    if (!persistList(PHOTO_STORAGE_KEY, saved)) return;
    card.remove();
    updateEmptyState();
    showToast("Đã xóa ảnh khỏi album.");
  });

  caption.append(title, heart, removeButton);
  card.append(image, caption);
  photoGrid.insertBefore(card, photoEmpty);
}

function renderBundledPhotos() {
  BUNDLED_PHOTOS.forEach(({ src, caption, alt }) => {
    const card = document.createElement("figure");
    card.className = "photo-card bundled-photo-card";

    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;
    image.loading = "lazy";
    image.decoding = "async";

    const figcaption = document.createElement("figcaption");
    const title = document.createElement("span");
    title.textContent = caption;
    const heart = document.createElement("span");
    heart.className = "photo-heart";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = "♡";

    figcaption.append(title, heart);
    card.append(image, figcaption);
    photoGrid.insertBefore(card, photoEmpty);
  });
}

function updateEmptyState() {
  const hasPhotos = photoGrid.querySelectorAll(".photo-card").length > 0;
  photoEmpty.classList.toggle("is-hidden", hasPhotos);
  photoCarousel.classList.toggle("is-empty", !hasPhotos);
  updatePhotoCarousel();
  schedulePhotoAutoplay();
}

function getPhotoCarouselMetrics() {
  const cards = [...photoGrid.querySelectorAll(".photo-card")];
  if (cards.length < 2 || photoGrid.clientWidth === 0) {
    return { step: 0, maxIndex: 0, index: 0 };
  }

  const firstLeft = cards[0].getBoundingClientRect().left;
  const nextColumn = cards.find((card) => card.getBoundingClientRect().left > firstLeft + 1);
  const columnGap = Number.parseFloat(getComputedStyle(photoGrid).columnGap) || 0;
  const step = nextColumn
    ? nextColumn.getBoundingClientRect().left - firstLeft
    : cards[0].getBoundingClientRect().width + columnGap;
  const maxScroll = Math.max(0, photoGrid.scrollWidth - photoGrid.clientWidth);
  const maxIndex = step > 0 ? Math.round(maxScroll / step) : 0;
  const index = step > 0 ? Math.min(maxIndex, Math.round(photoGrid.scrollLeft / step)) : 0;
  return { step, maxIndex, index };
}

function updatePhotoCarousel() {
  const { index, maxIndex } = getPhotoCarouselMetrics();
  photoCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(maxIndex + 1).padStart(2, "0")}`;
}

function schedulePhotoAutoplay() {
  window.clearTimeout(photoAutoplayTimer);
  if (
    photoCarouselPauseReasons.size > 0
    || document.hidden
    || siteContent.hidden
    || reducedMotion.matches
    || photoGrid.querySelectorAll(".photo-card").length < 2
  ) return;

  photoAutoplayTimer = window.setTimeout(() => movePhotoCarousel(1), PHOTO_AUTOPLAY_DELAY);
}

function movePhotoCarousel(direction) {
  const { step, maxIndex, index } = getPhotoCarouselMetrics();
  if (maxIndex === 0 || step === 0) {
    schedulePhotoAutoplay();
    return;
  }

  const nextIndex = (index + direction + maxIndex + 1) % (maxIndex + 1);
  photoGrid.scrollTo({
    left: Math.min(photoGrid.scrollWidth - photoGrid.clientWidth, nextIndex * step),
    behavior: reducedMotion.matches ? "auto" : "smooth",
  });
  updatePhotoCarousel();
  schedulePhotoAutoplay();
}

photoPrevious.addEventListener("click", () => movePhotoCarousel(-1));
photoNext.addEventListener("click", () => movePhotoCarousel(1));
photoGrid.addEventListener("scroll", () => {
  if (photoScrollFrame) return;
  photoScrollFrame = window.requestAnimationFrame(() => {
    updatePhotoCarousel();
    photoScrollFrame = 0;
  });
  schedulePhotoAutoplay();
});
photoGrid.addEventListener("keydown", (event) => {
  if (event.target !== photoGrid) return;
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    movePhotoCarousel(event.key === "ArrowLeft" ? -1 : 1);
  }
});
photoCarousel.addEventListener("pointerenter", (event) => {
  if (event.pointerType !== "mouse") return;
  photoCarouselPauseReasons.add("pointer");
  window.clearTimeout(photoAutoplayTimer);
});
photoCarousel.addEventListener("pointerleave", (event) => {
  if (event.pointerType !== "mouse") return;
  photoCarouselPauseReasons.delete("pointer");
  schedulePhotoAutoplay();
});
photoCarousel.addEventListener("focusin", () => {
  photoCarouselPauseReasons.add("focus");
  window.clearTimeout(photoAutoplayTimer);
});
photoCarousel.addEventListener("focusout", (event) => {
  if (photoCarousel.contains(event.relatedTarget)) return;
  photoCarouselPauseReasons.delete("focus");
  schedulePhotoAutoplay();
});
document.addEventListener("visibilitychange", schedulePhotoAutoplay);
window.addEventListener("resize", () => {
  window.requestAnimationFrame(() => {
    updatePhotoCarousel();
    schedulePhotoAutoplay();
  });
});

function restorePhotos() {
  const saved = readSavedList(PHOTO_STORAGE_KEY).filter(
    (photo) => photo && typeof photo.dataUrl === "string" && photo.dataUrl.startsWith("data:image/"),
  );
  saved.forEach((photo) => renderPhoto(photo.dataUrl, photo.name));
  updateEmptyState();
}

function updateLightboxPhoto() {
  const cards = [...photoGrid.querySelectorAll(".photo-card")];
  const index = cards.indexOf(activePhotoCard);
  if (index < 0) {
    closeLightbox();
    return;
  }
  const image = activePhotoCard.querySelector("img");
  const caption = activePhotoCard.querySelector(".photo-caption")?.textContent
    || [...activePhotoCard.querySelectorAll("figcaption span")].find((span) => !span.hasAttribute("aria-hidden"))?.textContent
    || image.alt;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = caption;
  lightboxCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
}

function openLightbox(card) {
  activePhotoCard = card;
  photoCarouselPauseReasons.add("lightbox");
  window.clearTimeout(photoAutoplayTimer);
  updateLightboxPhoto();
  lightbox.showModal();
  document.body.classList.add("dialog-open");
}

function moveLightboxPhoto(direction) {
  const cards = [...photoGrid.querySelectorAll(".photo-card")];
  if (!cards.length) return;
  const currentIndex = cards.indexOf(activePhotoCard);
  const nextIndex = (currentIndex + direction + cards.length) % cards.length;
  activePhotoCard = cards[nextIndex];
  updateLightboxPhoto();
}

function closeLightbox() {
  lightbox.close();
  document.body.classList.remove("dialog-open");
  activePhotoCard = null;
  photoCarouselPauseReasons.delete("lightbox");
  schedulePhotoAutoplay();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrevious.addEventListener("click", () => moveLightboxPhoto(-1));
lightboxNext.addEventListener("click", () => moveLightboxPhoto(1));
lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveLightboxPhoto(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    moveLightboxPhoto(1);
  }
});
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  activePhotoCard = null;
  photoCarouselPauseReasons.delete("lightbox");
  schedulePhotoAutoplay();
});
photoGrid.addEventListener("click", (event) => {
  if (event.target.closest(".remove-photo")) return;
  const card = event.target.closest(".photo-card");
  if (card?.querySelector("img")) openLightbox(card);
});

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("Không đọc được nội dung ảnh."));
    });
    reader.addEventListener("error", () => reject(reader.error || new Error("Không thể đọc tệp ảnh.")));
    reader.readAsDataURL(file);
  });
}

function compressImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => {
      const maxSide = 1200;
      const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext("2d");
      if (!context) {
        reject(new Error("Trình duyệt không thể xử lý ảnh này."));
        return;
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/webp", 0.8));
    });
    image.addEventListener("error", () => reject(new Error("Tệp này không phải là ảnh hợp lệ.")));
    image.src = dataUrl;
  });
}

async function addPhotos(files) {
  const imageFiles = [...files].filter((file) => file.type.startsWith("image/"));
  if (imageFiles.length === 0) {
    showToast("Vui lòng chọn tệp ảnh để thêm vào album.");
    return;
  }

  const saved = readSavedList(PHOTO_STORAGE_KEY);
  let added = 0;

  for (const file of imageFiles) {
    if (file.size > 15 * 1024 * 1024) {
      showToast(`Ảnh “${file.name}” lớn hơn 15 MB nên chưa được thêm.`);
      continue;
    }

    try {
      const original = await readFileAsDataUrl(file);
      const dataUrl = await compressImage(original);
      const photo = { dataUrl, name: file.name.replace(/\.[^.]+$/, "").slice(0, 70) };
      const next = [...saved, photo];
      if (!persistList(PHOTO_STORAGE_KEY, next)) break;
      saved.push(photo);
      renderPhoto(photo.dataUrl, photo.name);
      updateEmptyState();
      added += 1;
    } catch (error) {
      showToast(error instanceof Error ? error.message : `Không thể xử lý ảnh “${file.name}”.`);
    }
  }

  if (added > 0) {
    showToast(added === 1 ? "Ảnh đã được thêm và lưu vào album. ♡" : `${added} ảnh đã được thêm và lưu vào album. ♡`);
  }
  photoInput.value = "";
}

photoInput.addEventListener("change", () => addPhotos(photoInput.files || []));

for (const eventName of ["dragenter", "dragover"]) {
  document.addEventListener(eventName, (event) => {
    event.preventDefault();
    document.body.classList.add("is-dragging");
    uploadHint.classList.add("drag-active");
  });
}

for (const eventName of ["dragleave", "drop"]) {
  document.addEventListener(eventName, (event) => {
    if (event.target instanceof Element && eventName === "dragleave" && event.target.closest(".upload-hint, .photo-grid")) return;
    event.preventDefault();
    document.body.classList.remove("is-dragging");
    uploadHint.classList.remove("drag-active");
    if (eventName === "drop" && event.dataTransfer?.files.length) {
      addPhotos(event.dataTransfer.files);
    }
  });
}

function createPetal() {
  if (document.hidden || reducedMotion.matches) return;
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = Math.random() > 0.52 ? "✿" : "✾";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.fontSize = `${9 + Math.random() * 10}px`;
  petal.style.animationDuration = `${10 + Math.random() * 9}s`;
  petal.style.setProperty("--drift", `${Math.random() * 130 - 65}px`);
  document.querySelector("#petal-layer").append(petal);
  window.setTimeout(() => petal.remove(), 20000);
}

restoreWishes();
renderBundledPhotos();
restorePhotos();
if (!reducedMotion.matches) window.setInterval(createPetal, 1100);
