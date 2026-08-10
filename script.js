/* ==========================================
   SURAT PERPISAHAN DIGITAL - JAVASCRIPT LOGIC
   Dynamic Content, Interactive Hands Pickup Sequence, Shared Video Farewell & Lightbox
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------------------------------
  // 1. DATA TEMAN FALLBACK (INLINE BACKUP)
  // ----------------------------------------------------
  const dataTeman = {
    bambang: {
      namaLengkap: "Bambang",
      pesan: "Woey mbing, pisah dulu kita yak, ojo kakean ngular, dikurang-kurangi kejailane. Di usia yang makin bertambah mulai lah belajar buat melangkah ke chapter chapter kehidupan lainnya. ketika hidup itu merupakan serangkain peristiwa akibat dari pilihan-pilihan kita. terkadang kita mesti berkorban dalam kedua opsi pilihan yang ada, terkadang pilihan hidup kita a harus mengorbankan yang b, ataupun sebaliknya sehingga ketika jalan kehidupan memaksamu untuk memilih semoga kau takkan menyesalinya. Jika kau ada waktu mungkin kamu bisa mengintip keluar kehidupan di luar kebun, cerita-cerita dari orang-orang luar kebun, sesekali coba kau lihat kehidupan dan pemandangan di luar negara kita. terkadang ada kalanya kita marah kepada bawahan kita, namun tetap jaga kemanusiaan yang kita punya, wes lah aing sudah kehabisan kata-kata yak. Pokok sukses selalu, hari ini, hari hari kedepan dan dimanapun kau berpijak kelak, dalam setiap pilihan yang ada semoga pilihanmu itu merupakan pilihan terbaik yang pernah kau pilih",
      pesanBelakang: "\"Berjalanlah di muka bumi, maka perhatikanlah bagaimana Allah menciptakan (manusia) dari permulaannya, kemudian Allah menjadikannya sekali lagi.\" — QS. Al-Ankabut: 20\n\n\"Dunia adalah sebuah buku, dan meka yang tidak bepergian hanya membaca satu halaman saja.\" — Santo Agustinus\n\n\"Jangan takut untuk melangkah ke babak baru. Kamu tidak bisa membaca bab selanjutnya jika kamu terus membaca ulang bab sebelumnya.\" — C.S. Lewis",
      fotoUtama: [
        { src: "assets/recipients/bambang/foto/WhatsApp_Image_2026-08-06_at_21.30.00.jpeg", caption: "Perpisahan Bang Rikson Ke ASP Jabiren", diari: "Setiap orang ada masanya untuk pergi dan kembali kan ya." },
        { src: "assets/recipients/bambang/foto/Lupa_namanya.png", caption: "Foto Kebersamaan", diari: "Simpan setiap memori gambarnya meskipun kau mungkin kelak akan lupa sama namanya." },
        { src: "assets/recipients/bambang/foto/Perpisahan_anjar.png", caption: "Perpisahan Anjar", diari: "Sudah banyak kan orang pergi dan datang, jadi nikmati memori yang ada." }
      ],
      fotoBelakang: "",
      fileLagu: "assets/audio/sampai_jumpa.mp3",
      fileVoiceNote: "assets/recipients/bambang/audio/voice_note.wav",
      fileVideo: "assets/video/farewell.mp4"
    },
    evie: {
      namaLengkap: "Evie",
      pesan: "halo Nona Evie, adek yang suka kali merajukan, hupsss jangan lagi merajukan lagi ya, jangan mudah kali blokir orang, kalo ada masalah diomong kan, kan orang jadi gk tau kalo kamu bermasalah dengan dia kalo langsung kau blok kan yak, hehehehe belajar untuk legowo dan ikhlas ya, hidup itu adalah sebuah perjalanan penuh pilihan, terkadang terdapat pilihan untuk bertahan dan terkadang ada pilihan untuk pergi, dalam setiap pilihan konsekuensi, dalam setiap pilihan yang kita pilih terkadang mungkin tidak sesuai ekspetasi kita, untuk itu sisakan sedikit ruang untuk kecewa dan ikhlas. namun jika kau yakin terhadap pilihanmu maka perjuangkan, karena di dunia ini pilihan itu diperjuangkan, atau kau harus mengiklaskannya. selama tidak melanggar norma yang ada. namun ada kalanya kau akan lelah terhadap perjuangan pada keinginan yang belum terlaksana, disitu sebaiknya kita mengambil waktu untuk rehat dan memikirkan segalanya wkwkwkwkwk tau kan ya, Dalam setiap awal akan selalu akhir, dan dalam setiap pertemuan pasti akan ada perpisahan, dan hari ini sudah waktunya aku mengucapkan perpisahan untuk adek pupuk yang merajukan ini, semoga selalu bahagia, semoga selalu semangat, semoga tak ada yang akan membuatmu menangis, dan segala hal tersemogakan yang baik untukmu.",
      pesanBelakang: "\"Boleh jadi kamu membenci sesuatu, padahal ia amat baik bagimu, dan boleh jadi (pula) kamu menyukai sesuatu, padahal ia amat buruk bagimu; Allah mengetahui, sedang kamu tidak mengetahui.\" — QS. Al-Baqarah: 216\n\n\"Kedamaian jiwa tidak datang dari tidak adanya masalah, melainkan dari kemampuan untuk menerima dan ikhlas terhadap apa yang tidak bisa kita ubah.\" — Epictetus (Filsuf Stoa)",
      fotoUtama: [
        { src: "assets/recipients/evie/foto/17_agustus.png", caption: "17 Agustus 2025", diari: "Abaikan perut gendutku, namun dalam setiap perjalanan memiliki memori jadi simpan baik baik memori baik itu bukan." },
        { src: "assets/recipients/evie/foto/kerja_terus.png", caption: "Di R10 Aja Masih Ngerjain Tugas Ya", diari: "Kalo stress tuh istirahat bukannya malah kerja, contoh lah kami yang tiap hari istirahat." },
        { src: "assets/recipients/evie/foto/Pasted_image.png", caption: "Momen Bersama", diari: "Perayaan kejutan dan kehangatan yang tak akan pernah terlupakan." }
      ],
      fotoBelakang: "",
      fileLagu: "assets/audio/sampai_jumpa.mp3",
      fileVoiceNote: "assets/recipients/evie/audio/voice_note.wav",
      fileVideo: "assets/video/farewell.mp4"
    },
    fika: {
      namaLengkap: "Fika",
      pesan: "Terima kasih yang mendalam untuk Fika atas seluruh kebersamaan, dukungan, dan memori indah yang telah kita ukir bersama di PT. GIJ. Setiap tawa, kerjasama, dan cerita yang kita lalui menjadi bagian tak terpisahkan dari perjalanan berharga ini. Semoga kebaikan, semangat, dan energi positif ini selalu menyertai setiap langkahmu menuju puncak kesuksesan.",
      pesanBelakang: "Perpisahan ini bukanlah akhir dari segalanya, melainkan awal dari babak baru yang penuh dengan kebahagiaan dan kejayaan. Semoga kesuksesan selalu menyertaimu di manapun berpijak!",
      fotoUtama: [
        { src: "assets/recipients/fika/foto/wide_team_memory.png", caption: "Perayaan Perpisahan Tim 🎉", diari: "Setiap momen kebersamaan adalah kenangan indah yang tak akan terlupakan." },
        { src: "assets/recipients/fika/foto/wide_office_moments.png", caption: "Momen Kebersamaan Kantor ☕", diari: "Canda tawa dan kerja keras bersama tim." }
      ],
      fotoBelakang: "",
      fileLagu: "assets/audio/sampai_jumpa.mp3",
      fileVoiceNote: "assets/recipients/fika/audio/voice_note.wav",
      fileVideo: "assets/video/farewell.mp4"
    },
    default: {
      namaLengkap: "Sahabat Seperjuangan",
      pesan: "Terima kasih yang mendalam untuk seluruh kebersamaan, dukungan, dan memori indah yang telah kita ukir bersama di PT. GIJ. Setiap tawa, tantangan, dan cerita yang kita lalui menjadi bagian tak terpisahkan dari perjalanan berharga ini.",
      pesanBelakang: "Perpisahan ini bukanlah akhir, melainkan awal dari babak baru yang penuh dengan potensi dan kejayaan. Semoga kesuksesan dan kebahagiaan selalu menyertaimu!",
      fotoUtama: [
        { src: "assets/recipients/default/foto/wide_team_memory.png", caption: "Perayaan Perpisahan Tim 🎉", diari: "Momen indah perpisahan dan hangatnya persaudaraan." },
        { src: "assets/recipients/default/foto/wide_office_moments.png", caption: "Momen Kebersamaan Kantor ☕", diari: "Canda tawa di sela-sela jam kerja kantor." }
      ],
      fotoBelakang: "",
      fileLagu: "assets/audio/sampai_jumpa.mp3",
      fileVoiceNote: "assets/audio/voice_note.wav",
      fileVideo: "assets/video/farewell.mp4"
    }
  };

  // ----------------------------------------------------
  // 2. DOM ELEMENTS SELECTION
  // ----------------------------------------------------
  const envelopeScene = document.getElementById("envelope-scene");
  const envelope = document.getElementById("envelope");
  const waxSeal = document.getElementById("wax-seal");
  const letterPaper = document.getElementById("letter-paper");
  const backdropOverlay = document.getElementById("backdrop-overlay");
  const btnCloseFullscreen = document.getElementById("btn-close-fullscreen");
  const handsContainer = document.getElementById("animated-hands-container");

  const btnFlipToBack = document.getElementById("btn-flip-to-back");
  const btnFlipToFront = document.getElementById("btn-flip-to-front");
  const instructionBanner = document.getElementById("instruction-banner");

  const letterTitle = document.getElementById("letter-title");
  const photoGallery = document.getElementById("photo-gallery");
  const letterBody = document.getElementById("letter-body");
  const backMessage = document.getElementById("back-message");

  const bgMusic = document.getElementById("bg-music");

  // Lightbox Modal DOM
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxBackdrop = document.getElementById("lightbox-backdrop");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const polaroidSlideFrame = document.getElementById("polaroid-slide-frame");
  const slideImg = document.getElementById("slide-img");
  const slideCaption = document.getElementById("slide-caption");
  const slideDiary = document.getElementById("slide-diary");
  const slideshowPrev = document.getElementById("slideshow-prev");
  const slideshowNext = document.getElementById("slideshow-next");
  const btnAutoplay = document.getElementById("btn-autoplay");
  const autoplayIcon = document.getElementById("autoplay-icon");
  const autoplayText = document.getElementById("autoplay-text");
  const slideshowDots = document.getElementById("slideshow-dots");

  // Google Apps Script Webhook URL Resmi milik Pengguna
  window.GAS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzmDgYjis5EbKlqpYFfSNGdCqMO8LLbysD0qlxbDlCtIrIRkgpbI7-J9C5kkOOH0vpXEQ/exec";

  // Farewell Video Modal DOM & Players
  const videoModal = document.getElementById("video-modal");
  const videoBackdrop = document.getElementById("video-backdrop");
  const videoClose = document.getElementById("video-close");
  const videoTitle = document.getElementById("video-title");
  const videoStage = document.querySelector(".video-stage");
  const videoPlayer = document.getElementById("farewell-video-player");
  const youtubePlayer = document.getElementById("youtube-video-player");
  const videoSource = document.getElementById("video-source");
  const videoWaButton = document.getElementById("video-wa-button");
  const videoVnSection = document.getElementById("video-vn-section");
  const videoContactSection = document.getElementById("video-contact-section");
  const btnNextToContacts = document.getElementById("btn-next-to-contacts");

  let albumPhotos = [];

  // Voice Note Google Drive DOM Elements
  const voiceNoteCard = document.getElementById("voice-note-card");
  const btnVnPlay = document.getElementById("btn-vn-play");
  const vnPlayIcon = document.getElementById("vn-play-icon");
  const vnPlayText = document.getElementById("vn-play-text");
  const vnAudioPlayer = document.getElementById("vn-audio-player");

  // Helper: Convert Google Drive share link into direct audio streaming URL
  function getGoogleDriveStreamUrl(url) {
    if (!url) return null;
    if (url.includes("drive.google.com")) {
      const match = url.match(/\/file\/d\/([^\/\?]+)/) || url.match(/id=([^\/\&]+)/);
      if (match && match[1]) {
        return `https://docs.google.com/uc?export=download&id=${match[1]}`;
      }
    }
    return url;
  }

  // Helper: Extract YouTube embed URL with autoplay
  function getYouTubeEmbedUrl(url) {
    if (!url) return null;
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?autoplay=1&enablejsapi=1&rel=0`;
      }
    }
    return null;
  }

  // ----------------------------------------------------
  // 3. DYNAMIC RECIPIENT LOADER (FETCH WITH CACHE-BUSTING)
  // ----------------------------------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const recipientKey = (urlParams.get("to") || "").toLowerCase().trim() || "default";

  fetch(`assets/recipients/${recipientKey}/config.json?v=${Date.now()}`)
    .then((response) => {
      if (response.ok) return response.json();
      return dataTeman[recipientKey] || dataTeman.default;
    })
    .catch(() => dataTeman[recipientKey] || dataTeman.default)
    .then((currentData) => {
      renderLetterContent(currentData);
    });

  function renderLetterContent(currentData) {
    albumPhotos = currentData.fotoUtama || [];

    // Render Sisi Depan Surat
    letterTitle.textContent = `Untuk ${currentData.namaLengkap}`;
    letterBody.innerHTML = `<p>${currentData.pesan}</p>`;

    // Render Galeri Foto
    photoGallery.innerHTML = "";
    if (Array.isArray(currentData.fotoUtama)) {
      currentData.fotoUtama.forEach((item, index) => {
        const polaroid = document.createElement("div");
        polaroid.className = "polaroid-frame";
        polaroid.title = "Klik untuk melihat album kenangan";
        polaroid.innerHTML = `
          <img src="${item.src}" alt="${item.caption}" class="polaroid-img">
          <div class="polaroid-caption">${item.caption}</div>
        `;
        polaroid.addEventListener("click", (e) => {
          e.stopPropagation();
          openLightbox(index);
        });
        photoGallery.appendChild(polaroid);
      });
    }

    // Render Sisi Belakang Surat
    backMessage.textContent = currentData.pesanBelakang;

    // Configure Audio Sources Direct (HTML5 Standard)
    const songPath = currentData.fileLagu || "assets/audio/sampai_jumpa.mp3";
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.src = songPath;
      bgMusic.load();
    }

    // Google Drive & Local Storage Voice Note Wall Setup
    renderVoiceNoteList();



    // Farewell Video Setup: Detect YouTube link vs Local MP4
    const rawVideoPath = currentData.fileVideo || "assets/video/farewell.mp4";
    const youtubeEmbedUrl = getYouTubeEmbedUrl(rawVideoPath);

    if (youtubeEmbedUrl) {
      if (videoStage) videoStage.classList.add("is-youtube");
      if (youtubePlayer) youtubePlayer.src = youtubeEmbedUrl;
    } else {
      if (videoStage) videoStage.classList.remove("is-youtube");
      if (youtubePlayer) youtubePlayer.src = "";
      if (videoSource) videoSource.src = rawVideoPath;
      if (videoPlayer) {
        videoPlayer.src = rawVideoPath;
        videoPlayer.load();
      }
    }

    if (videoTitle) {
      videoTitle.textContent = `Kenangan Indah Farewell Tim PT. GIJ`;
    }

    // Configure WhatsApp Link inside Farewell Video Modal (Dedicated to Achmad Hairil Affan)
    if (videoWaButton) {
      const waMessage = encodeURIComponent(
        `Halo Achmad Hairil Affan! Aku udah buka surat perpisahan dan nonton videonya untuk ${currentData.namaLengkap} nih. Makasih banyak ya kesan, pesan, dan kenangannya! Sukses terus buat kamu!`
      );
      videoWaButton.href = `https://wa.me/6289696538737?text=${waMessage}`;
    }
  }

  // ----------------------------------------------------
  // 4. AUDIO FADE CONTROLLER
  // ----------------------------------------------------
  let fadeInterval = null;

  function fadeAudio(audioElement, targetVolume, duration = 600, callback) {
    if (fadeInterval) clearInterval(fadeInterval);
    const stepTime = 50;
    const steps = duration / stepTime;
    const volumeStep = (targetVolume - audioElement.volume) / steps;

    fadeInterval = setInterval(() => {
      let nextVol = audioElement.volume + volumeStep;
      if (volumeStep > 0 && nextVol >= targetVolume) {
        audioElement.volume = targetVolume;
        clearInterval(fadeInterval);
        if (callback) callback();
      } else if (volumeStep < 0 && nextVol <= targetVolume) {
        audioElement.volume = targetVolume;
        clearInterval(fadeInterval);
        if (callback) callback();
      } else {
        audioElement.volume = Math.max(0, Math.min(1, nextVol));
      }
    }, stepTime);
  }

  // ----------------------------------------------------
  // 5. ANIMATION SEQUENCE: INTERACTIVE HANDS PICKUP & OPEN
  // ----------------------------------------------------
  let isEnvelopeOpen = false;
  let isOpeningSequenceRunning = false;

  function triggerOpenSequence() {
    if (isEnvelopeOpen || isOpeningSequenceRunning) return;
    isOpeningSequenceRunning = true;

    // Phase 1: Hands reach up & 3D pickup envelope from table
    if (handsContainer) handsContainer.classList.add("hands-active");
    if (envelopeScene) envelopeScene.classList.add("picking-up", "scene-open");
    if (instructionBanner) instructionBanner.classList.add("hidden");

    // Phase 2: Right hand unseals & opens top flap after pickup (400ms)
    setTimeout(() => {
      envelope.classList.add("open");
      backdropOverlay.classList.add("active");

      try {
        bgMusic.volume = 1.0;
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Autoplay audio dicegah oleh browser:", err);
          });
        }
      } catch (e) {
        console.warn("Audio play exception:", e);
      }
    }, 400);

    // Phase 3: Letter paper full expansion & hands retract smoothly (1000ms)
    setTimeout(() => {
      isEnvelopeOpen = true;
      isOpeningSequenceRunning = false;
      if (handsContainer) handsContainer.classList.remove("hands-active");
    }, 1000);
  }

  waxSeal.addEventListener("click", (e) => {
    e.stopPropagation();
    triggerOpenSequence();
  });

  envelopeScene.addEventListener("click", (e) => {
    if (!isEnvelopeOpen && !isOpeningSequenceRunning) triggerOpenSequence();
  });

  // ----------------------------------------------------
  // 6. CLOSE LETTER & AUTOMATIC FAREWELL VIDEO POPUP
  // ----------------------------------------------------
  function closeLetterAndShowVideo() {
    if (!isEnvelopeOpen) return;
    isEnvelopeOpen = false;

    // Retract letter & close envelope
    if (envelopeScene) envelopeScene.classList.remove("scene-open", "picking-up");
    envelope.classList.remove("open");
    backdropOverlay.classList.remove("active");
    if (instructionBanner) instructionBanner.classList.remove("hidden");
    letterPaper.classList.remove("flipped");

    bgMusic.pause();
    if (vnAudioPlayer) {
      vnAudioPlayer.pause();
      vnAudioPlayer.currentTime = 0;
      if (vnPlayIcon) vnPlayIcon.textContent = "▶️";
      if (vnPlayText) vnPlayText.textContent = "Putar Voice Note";
    }

    // Trigger Farewell Video Modal popup after letter finishes closing animation (750ms)
    setTimeout(() => {
      openVideoModal();
    }, 750);
  }

  btnCloseFullscreen.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLetterAndShowVideo();
  });

  backdropOverlay.addEventListener("click", () => {
    if (isEnvelopeOpen && !lightboxModal.classList.contains("active") && !videoModal.classList.contains("active")) {
      closeLetterAndShowVideo();
    }
  });

  btnFlipToBack.addEventListener("click", (e) => {
    e.stopPropagation();
    letterPaper.classList.add("flipped");
  });

  btnFlipToFront.addEventListener("click", (e) => {
    e.stopPropagation();
    letterPaper.classList.remove("flipped");
  });

  // Stop all voice notes when closing modal
  function stopAllVoiceNotes() {
    document.querySelectorAll(".vn-audio-player").forEach((a) => {
      a.pause();
      a.currentTime = 0;
      const parentCard = a.closest(".voice-note-card");
      if (parentCard) {
        const pIcon = parentCard.querySelector(".vn-play-icon");
        const pText = parentCard.querySelector(".vn-play-text");
        if (pIcon) pIcon.textContent = "▶️";
        if (pText) pText.textContent = "Dengarkan Balasan";
      }
    });
  }
  // ----------------------------------------------------
  // DYNAMIC REPLIES WALL & VOICE RECORDER SYSTEM
  // ----------------------------------------------------
  const replyAuthorName = document.getElementById("reply-author-name");
  const replyTextMessage = document.getElementById("reply-text-message");
  const btnSubmitReply = document.getElementById("btn-submit-reply");
  const btnVrRecord = document.getElementById("btn-vr-record");
  const vrRecIcon = document.getElementById("vr-rec-icon");
  const vrRecText = document.getElementById("vr-rec-text");
  const vrTimer = document.getElementById("vr-timer");
  const vrStatus = document.getElementById("vr-status");

  let mediaRecorder = null;
  let audioChunks = [];
  let recordTimer = null;
  let recordSeconds = 0;
  let lastRecordedBlobUrl = null;

  // Helper: Load local stored replies from localStorage
  function getStoredReplies() {
    try {
      const stored = localStorage.getItem("surat_perpisahan_replies");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  function saveReply(replyObj) {
    try {
      const current = getStoredReplies();
      current.unshift(replyObj);
      localStorage.setItem("surat_perpisahan_replies", JSON.stringify(current));
    } catch (e) {
      console.warn("Gagal menyimpan balasan ke localStorage:", e);
    }
  }

  // Render Chat Bubbles Wall (Ruang Chat Pop-up Hall of Memory)
  function renderVoiceNoteList() {
    const chatWall = document.getElementById("chat-messages-wall");
    if (!chatWall) return;

    chatWall.innerHTML = "";

    // Load user submitted replies from localStorage
    let userReplies = getStoredReplies();

    // Default chat messages
    let defaultChatList = [
      { nama: "Bambang", pesan: "Sukses selalu Mas Affan! Terima kasih untuk bimbingan dan kebersamaannya di PT. GIJ.", time: "10:15" },
      { nama: "Evie", pesan: "Sampai jumpa lagi Mas Affan, jangan lupa sama kami ya!", time: "11:30" },
      { nama: "Fika", pesan: "Semoga sukses di tempat baru Mas Affan, sehat & bahagia selalu!", time: "12:45" }
    ];

    // Combine default list + user replies (user replies appear at bottom)
    let list = [...defaultChatList, ...userReplies];

    list.forEach((item) => {
      const itemNama = item.nama || "Sahabat";
      const initial = itemNama.charAt(0).toUpperCase();
      const timeStr = item.time || "Baru saja";

      const bubble = document.createElement("div");
      bubble.className = "chat-bubble";

      let mediaContent = "";
      if (item.pesan) {
        mediaContent += `<div class="chat-text-msg">${item.pesan}</div>`;
      }

      if (item.url || item.voiceUrl) {
        const rawUrl = item.url || item.voiceUrl;
        const streamUrl = getGoogleDriveStreamUrl(rawUrl) || rawUrl;
        mediaContent += `
          <div class="chat-vn-player" style="margin-top: 8px;">
            <button class="btn-vn-play" type="button">
              <span class="vn-play-icon">▶️</span>
              <span class="vn-play-text">Dengarkan Voice Note ${itemNama}</span>
            </button>
            <audio class="vn-audio-player" src="${streamUrl}" preload="none"></audio>
          </div>
        `;
      }

      bubble.innerHTML = `
        <div class="chat-avatar">${initial}</div>
        <div class="chat-content-box">
          <div class="chat-author-name">${itemNama}</div>
          ${mediaContent}
          <div class="chat-time-tag">🕒 ${timeStr}</div>
        </div>
      `;

      // Event Listener Play Audio Voice Note di dalam Chat Bubble
      const btnPlay = bubble.querySelector(".btn-vn-play");
      if (btnPlay) {
        const audioPlayer = bubble.querySelector(".vn-audio-player");
        const playIcon = bubble.querySelector(".vn-play-icon");
        const playText = bubble.querySelector(".vn-play-text");

        btnPlay.addEventListener("click", (e) => {
          e.stopPropagation();
          document.querySelectorAll(".vn-audio-player").forEach((a) => {
            if (a !== audioPlayer) {
              a.pause();
              const pCard = a.closest(".chat-bubble");
              if (pCard) {
                const pIcon = pCard.querySelector(".vn-play-icon");
                const pText = pCard.querySelector(".vn-play-text");
                if (pIcon) pIcon.textContent = "▶️";
                if (pText) pText.textContent = "Dengarkan Voice Note";
              }
            }
          });

          if (audioPlayer.paused) {
            fadeAudio(bgMusic, 0.1, 500);
            audioPlayer.play().then(() => {
              if (playIcon) playIcon.textContent = "⏸️";
              if (playText) playText.textContent = "Hentikan Suara";
            }).catch((err) => console.warn("Gagal memutar audio:", err));
          } else {
            audioPlayer.pause();
            if (playIcon) playIcon.textContent = "▶️";
            if (playText) playText.textContent = `Dengarkan Voice Note ${itemNama}`;
            fadeAudio(bgMusic, 1.0, 500);
          }
        });

        if (audioPlayer) {
          audioPlayer.addEventListener("ended", () => {
            if (playIcon) playIcon.textContent = "▶️";
            if (playText) playText.textContent = `Dengarkan Voice Note ${itemNama}`;
            fadeAudio(bgMusic, 1.0, 500);
          });
        }
      }

      chatWall.appendChild(bubble);
    });

    // Auto scroll ke paling bawah chat room
    chatWall.scrollTop = chatWall.scrollHeight;
  }

  // Live Browser Microphone Recorder
  if (btnVrRecord) {
    btnVrRecord.addEventListener("click", async (e) => {
      e.stopPropagation();
      if (!mediaRecorder || mediaRecorder.state === "inactive") {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          audioChunks = [];
          mediaRecorder = new MediaRecorder(stream);

          mediaRecorder.ondataavailable = (ev) => {
            if (ev.data.size > 0) audioChunks.push(ev.data);
          };

          mediaRecorder.onstop = () => {
            stopTimer();
            const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
            lastRecordedBlobUrl = URL.createObjectURL(audioBlob);

            if (vrStatus) vrStatus.textContent = "⌛ Mengunggah Voice Note ke Google Drive...";

            const reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = async () => {
              const base64Data = reader.result.split(",")[1];
              const authorInput = document.getElementById("reply-author-name");
              const author = authorInput ? authorInput.value.trim() || "Sahabat" : "Sahabat";

              if (window.GAS_WEBHOOK_URL) {
                try {
                  fetch(window.GAS_WEBHOOK_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                      "Content-Type": "text/plain"
                    },
                    body: JSON.stringify({
                      nama: author,
                      type: "voice",
                      audioBase64: base64Data,
                      contentType: "audio/webm"
                    })
                  }).then(() => {
                    if (vrStatus) vrStatus.innerHTML = `✅ <strong>Tersimpan di Google Drive!</strong> (VoiceNote_${author})`;
                  }).catch(err => console.warn("Error uploading voice note:", err));
                } catch (err) {
                  if (vrStatus) vrStatus.innerHTML = "✅ <strong>Perekaman Selesai!</strong> Klik '🚀 Simpan Balasan'.";
                }
              } else {
                if (vrStatus) vrStatus.innerHTML = "✅ <strong>Perekaman Selesai!</strong> Klik '🚀 Simpan Balasan'.";
              }
            };
          };

          mediaRecorder.start();
          btnVrRecord.classList.add("recording");
          if (vrRecIcon) vrRecIcon.textContent = "⏹️";
          if (vrRecText) vrRecText.textContent = "Selesai Rekam";
          if (vrTimer) vrTimer.style.display = "inline-block";
          if (vrStatus) vrStatus.textContent = "🎙️ Perekaman berjalan... Bicara ke mikrofon HP/Laptop Anda.";
          startTimer();
        } catch (err) {
          alert("Izin akses mikrofon dibutuhkan untuk merekam suara di browser.");
        }
      } else if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        btnVrRecord.classList.remove("recording");
        if (vrRecIcon) vrRecIcon.textContent = "🔴";
        if (vrRecText) vrRecText.textContent = "Rekam Ulang";
      }
    });
  }

  // Chat Room Mic Recorder Handler (#btn-chat-mic)
  const btnChatMic = document.getElementById("btn-chat-mic");
  const chatMicIcon = document.getElementById("chat-mic-icon");
  const chatRecStatus = document.getElementById("chat-rec-status");

  if (btnChatMic) {
    btnChatMic.addEventListener("click", async (e) => {
      e.stopPropagation();
      if (!mediaRecorder || mediaRecorder.state === "inactive") {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          audioChunks = [];
          mediaRecorder = new MediaRecorder(stream);

          mediaRecorder.ondataavailable = (ev) => {
            if (ev.data.size > 0) audioChunks.push(ev.data);
          };

          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
            lastRecordedBlobUrl = URL.createObjectURL(audioBlob);

            if (chatRecStatus) chatRecStatus.innerHTML = "✅ Voice note siap! Klik <strong>🚀 Kirim</strong> untuk mengirim.";

            const reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = async () => {
              const base64Data = reader.result.split(",")[1];
              const senderInput = document.getElementById("chat-sender-name");
              const senderName = senderInput ? senderInput.value.trim() || "Sahabat" : "Sahabat";

              if (window.GAS_WEBHOOK_URL) {
                fetch(window.GAS_WEBHOOK_URL, {
                  method: "POST",
                  mode: "no-cors",
                  headers: { "Content-Type": "text/plain" },
                  body: JSON.stringify({
                    nama: senderName,
                    type: "voice",
                    audioBase64: base64Data,
                    contentType: "audio/webm"
                  })
                }).catch(err => console.warn("Drive voice note upload error:", err));
              }
            };
          };

          mediaRecorder.start();
          btnChatMic.classList.add("recording");
          if (chatMicIcon) chatMicIcon.textContent = "⏹️";
          if (chatRecStatus) chatRecStatus.textContent = "🎙️ Perekaman suara berjalan...";
        } catch (err) {
          alert("Izin akses mikrofon dibutuhkan untuk merekam suara di browser.");
        }
      } else if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        btnChatMic.classList.remove("recording");
        if (chatMicIcon) chatMicIcon.textContent = "🎙️";
      }
    });
  }

  function startTimer() {
    recordSeconds = 0;
    if (vrTimer) vrTimer.textContent = "00:00";
    recordTimer = setInterval(() => {
      recordSeconds++;
      const mins = String(Math.floor(recordSeconds / 60)).padStart(2, "0");
      const secs = String(recordSeconds % 60).padStart(2, "0");
      if (vrTimer) vrTimer.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  function stopTimer() {
    if (recordTimer) clearInterval(recordTimer);
    if (vrTimer) vrTimer.style.display = "none";
  }

  // Helper: Navigasi Modal Sinematik 2-Halaman (Video Farewell ➔ Kontak WhatsApp & LinkedIn)
  function showModalPage(pageId) {
    const pages = ["page-video", "page-contacts"];
    pages.forEach((p) => {
      const el = document.getElementById(p);
      if (el) {
        el.style.display = (p === pageId) ? "flex" : "none";
      }
    });
  }

  // Bulletproof Event Delegation untuk Navigasi Modal (Video ➔ WhatsApp / LinkedIn)
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("#btn-goto-contacts, #btn-restart-flow, #btn-goto-reply");
    if (!btn) return;

    e.stopPropagation();
    const btnId = btn.id;
    if (btnId === "btn-goto-contacts" || btnId === "btn-goto-reply") {
      showModalPage("page-contacts");
      stopAllVoiceNotes();
    } else if (btnId === "btn-restart-flow") {
      showModalPage("page-video");
    }
  });
  function openVideoModal() {
    if (!videoModal) return;
    videoModal.classList.add("active");
    videoModal.setAttribute("aria-hidden", "false");

    showModalPage("page-video");

    if (videoStage && videoStage.classList.contains("is-youtube")) {
      if (youtubePlayer && youtubePlayer.src) {
        let currentSrc = youtubePlayer.src;
        if (!currentSrc.includes("autoplay=1")) {
          youtubePlayer.src = currentSrc + (currentSrc.includes("?") ? "&autoplay=1" : "?autoplay=1");
        }
      }
    } else {
      try {
        if (videoPlayer) {
          videoPlayer.currentTime = 0;
          const vPromise = videoPlayer.play();
          if (vPromise !== undefined) {
            vPromise.catch((err) => {
              console.warn("Video autoplay blocked by browser:", err);
            });
          }
        }
      } catch (err) {
        console.warn("Video playback exception:", err);
      }
    }
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove("active");
    videoModal.setAttribute("aria-hidden", "true");
    stopAllVoiceNotes();
    if (videoPlayer) {
      videoPlayer.pause();
    }
    if (youtubePlayer) {
      // Reload iframe src to stop YouTube video audio playback when modal is closed
      const currentSrc = youtubePlayer.src;
      youtubePlayer.src = currentSrc;
    }
  }

  if (videoClose) videoClose.addEventListener("click", closeVideoModal);
  if (videoBackdrop) videoBackdrop.addEventListener("click", closeVideoModal);

  if (btnNextToContacts) {
    btnNextToContacts.addEventListener("click", (e) => {
      e.stopPropagation();
      if (videoVnSection) videoVnSection.style.display = "none";
      if (videoContactSection) videoContactSection.style.display = "flex";
      stopAllVoiceNotes();
    });
  }

  // ----------------------------------------------------
  // 8. LIGHTBOX SLIDESHOW CONTROLLER
  // ----------------------------------------------------
  let currentSlideIndex = 0;
  let autoplayTimer = null;
  let isAutoplayRunning = false;

  function openLightbox(index = 0) {
    if (albumPhotos.length === 0) return;
    currentSlideIndex = index;
    lightboxModal.classList.add("active");
    lightboxModal.setAttribute("aria-hidden", "false");
    renderDots();
    showSlide(currentSlideIndex);
  }

  function closeLightbox() {
    lightboxModal.classList.remove("active");
    lightboxModal.setAttribute("aria-hidden", "true");
    stopAutoplay();
  }

  function showSlide(index) {
    if (index < 0) currentSlideIndex = albumPhotos.length - 1;
    else if (index >= albumPhotos.length) currentSlideIndex = 0;
    else currentSlideIndex = index;

    polaroidSlideFrame.classList.add("fade-anim");
    setTimeout(() => {
      const slide = albumPhotos[currentSlideIndex];
      slideImg.src = slide.src;
      slideCaption.textContent = slide.caption;
      if (slideDiary) slideDiary.textContent = slide.diari || "Momen kenangan indah bersama.";
      lightboxCounter.textContent = `${currentSlideIndex + 1} / ${albumPhotos.length}`;
      updateDots();
      polaroidSlideFrame.classList.remove("fade-anim");
    }, 200);
  }

  function nextSlide() { showSlide(currentSlideIndex + 1); }
  function prevSlide() { showSlide(currentSlideIndex - 1); }

  function renderDots() {
    slideshowDots.innerHTML = "";
    albumPhotos.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = `dot ${i === currentSlideIndex ? "active" : ""}`;
      dot.addEventListener("click", () => showSlide(i));
      slideshowDots.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = slideshowDots.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      if (i === currentSlideIndex) dot.classList.add("active");
      else dot.classList.remove("active");
    });
  }

  function toggleAutoplay() {
    if (isAutoplayRunning) stopAutoplay();
    else startAutoplay();
  }

  function startAutoplay() {
    isAutoplayRunning = true;
    autoplayIcon.textContent = "⏸️";
    autoplayText.textContent = "Hentikan Slideshow";
    autoplayTimer = setInterval(nextSlide, 3000);
  }

  function stopAutoplay() {
    isAutoplayRunning = false;
    autoplayIcon.textContent = "▶️";
    autoplayText.textContent = "Putar Slideshow Otomatis";
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  slideshowNext.addEventListener("click", () => { nextSlide(); if (isAutoplayRunning) stopAutoplay(); });
  slideshowPrev.addEventListener("click", () => { prevSlide(); if (isAutoplayRunning) stopAutoplay(); });
  btnAutoplay.addEventListener("click", toggleAutoplay);
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (lightboxModal.classList.contains("active")) {
      if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "Escape") closeLightbox();
    } else if (videoModal.classList.contains("active")) {
      if (e.key === "Escape") closeVideoModal();
    }
  });

  // Easter Egg
  console.log(
    "%c✉️ Terima kasih telah membaca Surat Perpisahan Digital! %c\nCreated with ❤️ by Achmad Hairil Affan.",
    "color: #d4af37; font-size: 16px; font-weight: bold; background: #2c1d14; padding: 8px 14px; border-radius: 6px; border: 1px solid #d4af37;",
    "color: #fdfbf5; font-size: 13px; font-family: sans-serif; line-height: 1.6;"
  );
});
