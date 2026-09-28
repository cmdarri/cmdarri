/* ==========================================================================
   CmDarri — application catalogue
   --------------------------------------------------------------------------
   SINGLE SOURCE OF TRUTH for every app shown on the site.

   Paths below are written WITHOUT a leading "./" and WITHOUT a page-depth
   prefix. Each page declares its own depth in window.CMDARRI_BASE
   ('' on root pages, '../' inside /apps and /privacy), and the renderer
   joins the two. This keeps the site working from any GitHub Pages
   sub-directory.

   status: 'published'  -> listed as available now
           'development'-> in development, not released

   playUrl: the Google Play listing URL. All three published apps are
            listed. If one is ever delisted, set it back to the placeholder
            string '[ADD GOOGLE PLAY URL]' and the UI renders a
            non-clickable "link pending" state instead of a dead button.
            In-development apps use null, so no store button is shown.

   privacyDoc: the source policy document on Google Docs, shared view-only.
   ========================================================================== */

window.CMDARRI_APPS = {

  /* ======================================================================
     PUBLISHED APPLICATIONS
     ====================================================================== */
  publishedApps: [

    /* ---------------------------------------------------------------- */
    {
      slug: 'bulk-vid-to-mp3',
      name: 'Bulk Vid to MP3 Converter Free',
      listingName: 'oncegovt Bulk MP3 Converter',
      status: 'published',
      platform: 'Android',
      package: 'com.oncegovt.mp3',
      icon: 'assets/img/apps/bulk-vid-to-mp3/icon.png',
      tagline: 'Batch video-to-audio conversion',
      short:
        'Free bulk video to MP3 converter. Fast, offline background audio extraction.',
      summary:
        'Queue multiple videos and extract audio in the background without ' +
        'breaking a sweat. Multiple files are selected in one pass and every ' +
        'conversion runs locally on the device, so your media is never sent ' +
        'anywhere. Built for music-video batches, recorded lectures, webinars, ' +
        'meetings and voice notes.',
      features: [
        { t: 'True batch conversion',
          d: 'Select multiple videos from your gallery or file manager and convert them all in one pass instead of one file at a time.' },
        { t: 'MP3, AAC and WAV output',
          d: 'MP3 up to 320 kbps for compatibility, AAC as a modern compressed format, or lossless uncompressed WAV.' },
        { t: 'Background processing',
          d: 'A dedicated background mode keeps conversions running when the screen locks or you switch to another app.' },
        { t: 'Conversion dashboard',
          d: 'A live status panel tracks the total, completed and active conversions for the current batch.' },
        { t: 'On-device conversion',
          d: 'Conversion is performed entirely on the device using native FFmpeg libraries. Media files are not uploaded to a server or cloud database.' },
        { t: 'Custom output location',
          d: 'Save to the default Music directory or target a specific folder of your choice.' }
      ],
      screenshots: [
        { src: 'assets/img/apps/bulk-vid-to-mp3/shot-01.jpg',
          alt: 'Conversion screen showing the batch status panel and the output format, bitrate and save-location sheet.',
          caption: 'Batch queue with live status, output format and bitrate selection' }
      ],
      playUrl: 'https://play.google.com/store/apps/details?id=com.oncegovt.mp3',
      privacyPage: 'privacy/bulk-vid-to-mp3.html',
      privacyDoc: 'https://docs.google.com/document/d/1JfpXUP5J6EGRBNl4dAJau3Pi0SBDqCQp8SudjS2Rq6g/view?usp=sharing',
      privacyUpdated: 'September 27, 2026'
    },

    /* ---------------------------------------------------------------- */
    {
      slug: 'framelock',
      name: 'FrameLock - Ageing TimeLapse',
      listingName: 'FrameLock',
      status: 'published',
      platform: 'Android',
      package: 'com.vaitns.framelock',
      icon: 'assets/img/apps/framelock/icon.png',
      tagline: 'Photo-sequence timelapse stabiliser',
      short:
        'Image stabilisation for timelapses, using eye detection, object tracking or manual alignment.',
      summary:
        'FrameLock aligns sequences of photographs rather than stabilising shaky ' +
        'video. Choose a reference frame and it rotates, scales and pans every ' +
        'other image to match — locking onto eyes, onto an object you pick, or ' +
        'under manual control — then renders the result at up to 4K. Because it ' +
        'matches on specific features instead of generic motion, photos taken ' +
        'days, weeks or years apart still line up.',
      features: [
        { t: 'Ageing Timelapse — AI face lock',
          d: 'Facial landmark detection identifies eye positions and aligns each image to the reference face. If the wrong person is picked in a crowded shot, the tracked face can be re-selected manually.' },
        { t: 'Select Object — auto-tracking',
          d: 'SIFT feature matching fingerprints the selected object and locates it in every following frame, even when lighting or surroundings change. A custom region of interest narrows the match to exactly what matters.' },
        { t: 'Full Manual alignment',
          d: 'A virtual D-pad gives precise panning, fine rotation and incremental scaling, with a difference blend overlay that highlights misalignment in real time until the matching areas turn black.' },
        { t: '4K export quality',
          d: 'Render the finished timelapse in 4K, Full HD, or the original photo resolution.' },
        { t: 'Custom frame rates',
          d: 'Choose anything from a slow, cinematic 1 FPS up to 60 FPS, or enter a custom value up to 240 FPS for ultra-smooth playback.' },
        { t: 'Background and aspect control',
          d: 'Fill the frame with solid black, a blurred-edge look, or transparency for further editing, and export at 16:9, 4:3, or the original photo ratio.' },
        { t: 'Project management',
          d: 'Track several timelapses at once, with a dashboard showing the day streak and total frame count for each project. Import whole folders in bulk or pick individual photos.' }
      ],
      screenshots: [
        { src: 'assets/img/apps/framelock/shot-01.jpg',
          alt: 'Mode selection screen offering Ageing Timelapse, Select Object and Full Manual.',
          caption: 'Choose Mode — ageing timelapse, select object, or full manual' },
        { src: 'assets/img/apps/framelock/shot-02.jpg',
          alt: 'Reference settings screen with pan, zoom and rotation readouts and a virtual D-pad.',
          caption: 'Reference settings — drag to pan, pinch to zoom, plus D-pad, zoom and rotation controls' },
        { src: 'assets/img/apps/framelock/shot-03.jpg',
          alt: 'Image picker with a per-frame options sheet offering restabilize, manual stabilize, stabilize other face, set as reference and delete frame.',
          caption: 'Per-frame options — restabilise, manual stabilise, track another face, set as reference' }
      ],
      playUrl: 'https://play.google.com/store/apps/details?id=com.vaitns.framelock',
      privacyPage: 'privacy/framelock.html',
      privacyDoc: 'https://docs.google.com/document/d/1q7ib8S861Mof56FldkeHLdzMENdniFJAe2KmwkMi30w/view?usp=sharing',
      privacyUpdated: null
    },

    /* ---------------------------------------------------------------- */
    {
      slug: 'offline-ai',
      name: 'CmDarri - Offline AI',
      listingName: 'OfflineAI',
      status: 'published',
      platform: 'Android',
      package: 'com.oa',
      icon: 'assets/img/apps/offline-ai/icon.png',
      tagline: 'On-device AI assistant',
      short:
        'Private offline AI. Chat without internet after downloading a model.',
      summary:
        'CmDarri - Offline AI runs an AI model directly on your phone. Download ' +
        'the model of your choice once, then ask questions, brainstorm ideas ' +
        'and get help writing with no connection at all — useful on flights, in ' +
        'remote areas, or anywhere you would rather not be online. Chats, notes ' +
        'and settings are stored locally.',
      features: [
        { t: 'Local AI chat',
          d: 'Ask questions, brainstorm and get help writing. Responses are generated on the device by an AI model running through llama.cpp — messages are never sent to a server.' },
        { t: 'Multiple models',
          d: 'Download and switch between models to balance speed and capability. Smaller models respond faster on older devices; larger models give better answers.' },
        { t: 'Built-in notes',
          d: 'Keep and manage notes alongside your chats, in a dedicated Notes tab.' },
        { t: 'Works offline',
          d: 'Once the model is installed the app needs no internet connection at all.' },
        { t: 'Tunable engine',
          d: 'Adjust default context length, default temperature, CPU threads and GPU acceleration, and turn streaming responses or auto-load on start on or off.' },
        { t: 'Conversation management',
          d: 'Keep multiple named conversations, set a maximum conversation count, and start a new chat at any time.' }
      ],
      screenshots: [
        { src: 'assets/img/apps/offline-ai/shot-02.jpg',
          alt: 'Chat screen showing a conversation with a locally generated reply and a token count.',
          caption: 'Chat — replies generated on the device' },
        { src: 'assets/img/apps/offline-ai/shot-01.jpg',
          alt: 'Home screen listing saved conversations with a New Chat action.',
          caption: 'Home — saved conversations' },
        { src: 'assets/img/apps/offline-ai/shot-03.jpg',
          alt: 'Model Manager listing installed and downloadable models with file sizes.',
          caption: 'Model Manager — download and switch models' },
        { src: 'assets/img/apps/offline-ai/shot-04.jpg',
          alt: 'Notes screen with an empty state and a note entry field.',
          caption: 'Notes — write alongside your chats' },
        { src: 'assets/img/apps/offline-ai/shot-05.jpg',
          alt: 'Settings screen with AI engine sliders and data options.',
          caption: 'Settings — context length, temperature, threads, GPU acceleration' }
      ],
      playUrl: 'https://play.google.com/store/apps/details?id=com.oa',
      privacyPage: 'privacy/offline-ai.html',
      privacyDoc: 'https://docs.google.com/document/d/1Y4f7ZubAlSnzm13DBcKrXONOLHu6KJkG1OrmqO3P4ho/view?usp=sharing',
      privacyUpdated: 'August 1, 2026'
    }
  ],

  /* ======================================================================
     IN DEVELOPMENT — not released, no store listing yet
     ====================================================================== */
  developmentApps: [

    {
      slug: 'bohcipher',
      name: 'Bohcipher',
      listingName: 'Bohcipher',
      status: 'development',
      platform: 'Android',
      icon: 'assets/img/apps/bohcipher/icon.png',
      tagline: 'Advanced cipher engine',
      short:
        'Encode, decode and auto-detect ciphers in a cyberpunk interface.',
      summary:
        'A cipher tool built around a custom algorithm for messaging and data ' +
        'obfuscation. An auto-detect mode tells plain text apart from encoded ' +
        'text so you do not have to choose first, a searchable cipher reference ' +
        'table documents the character codes, and a local history keeps every ' +
        'operation and can be exported to the Downloads folder.',
      features: [
        { t: 'Custom cipher engine', d: 'Encode and decode with the app\'s own cipher algorithm.' },
        { t: 'Auto-detect', d: 'Plain text and encoded text are told apart automatically, removing the guesswork.' },
        { t: 'Cipher reference', d: 'A built-in lookup table for searching specific character codes.' },
        { t: 'Local history', d: 'Previous operations are kept on the device and can be exported to the Downloads folder.' },
        { t: 'Dark cyberpunk interface', d: 'High-contrast dark mode with glass surfaces and clear encode/decode lanes.' }
      ],
      screenshots: [
        { src: 'assets/img/apps/bohcipher/shot-01.jpg',
          alt: 'Bohcipher screen showing an encoded output lane above a plain text input lane.',
          caption: 'Encode and decode lanes' },
        { src: 'assets/img/apps/bohcipher/shot-02.jpg',
          alt: 'Bohcipher screen with the encoded result and a running character count.',
          caption: 'Result with live character count' }
      ],
      playUrl: null,
      privacyPage: null,
      privacyDoc: 'https://docs.google.com/document/d/1vGZ4jwyQ7oiXUSnoW1K2sLrRhuo-y5L0X9z8pPH9cRQ/view?usp=sharing',
      privacyUpdated: 'September 27, 2026'
    },

    {
      slug: 'video-player',
      name: 'CmDarri — Video Player',
      listingName: 'CmDarri — Video Player',
      status: 'development',
      platform: 'Android',
      package: 'com.vaitns.videoplayer',
      icon: 'assets/img/apps/video-player/icon.png',
      tagline: 'Offline local video player',
      short:
        'A simple, fast and reliable video player for watching your videos with ease.',
      summary:
        'A clean offline player for video already on the device. It browses the ' +
        'local collection through Android MediaStore, keeps playback progress, ' +
        'favourites, playlists and settings in private app storage, and carries ' +
        'no internet permission at all.',
      features: [
        { t: 'Organised library', d: 'Browse and reach the on-device video collection from one place.' },
        { t: 'Playback controls', d: 'Play, pause, seek, skip and volume control.' },
        { t: 'Offline by design', d: 'The app has no internet permission, so it cannot transmit data anywhere.' },
        { t: 'Progress and library data', d: 'Playback position, favourites, playlists and settings stay in app-private storage.' },
        { t: 'Hand off to other apps', d: 'Share or open a file with another app of your choosing when you need to.' }
      ],
      screenshots: [
        { src: 'assets/img/apps/video-player/shot-01.jpg',
          alt: 'CmDarri Video Player landscape screenshot.', caption: 'Library' },
        { src: 'assets/img/apps/video-player/shot-02.jpg',
          alt: 'CmDarri Video Player landscape screenshot.', caption: 'Playback' },
        { src: 'assets/img/apps/video-player/shot-03.jpg',
          alt: 'CmDarri Video Player landscape screenshot.', caption: 'Queue' }
      ],
      playUrl: null,
      privacyPage: null,
      privacyDoc: 'https://docs.google.com/document/d/1X0BNfZIQm6duOMD0Sm9v8k4Hj16WPrujEP46RJQAaFo/view?usp=sharing',
      privacyUpdated: 'August 23, 2026'
    },

    {
      slug: 'audio-player',
      name: 'CmDarri — Audio Player',
      listingName: 'CmDarri — Audio Player',
      status: 'development',
      platform: 'Android',
      package: 'com.vaitns.audioplayer',
      icon: 'assets/img/apps/audio-player/icon.png',
      tagline: 'Offline local audio player',
      short:
        'A simple, fast audio player for enjoying your audio files with ease.',
      summary:
        'A lightweight offline player for music on the device. Audio files and ' +
        'their artwork are read through MediaStore, playback continues in the ' +
        'background with notification controls, and favourites, playlists, ' +
        'history and preferences are kept in app-private storage.',
      features: [
        { t: 'Organised library', d: 'Browse and manage on-device audio files and their album artwork from one place.' },
        { t: 'Background playback', d: 'Playback continues while you use other apps or when the screen is off.' },
        { t: 'Resume where you left off', d: 'Play history and last-playback positions are kept locally.' },
        { t: 'Notification controls', d: 'Play, pause and next from the media notification.' },
        { t: 'Simple, clean design', d: 'A straightforward interface focused on playback rather than extra complexity.' }
      ],
      screenshots: [
        { src: 'assets/img/apps/audio-player/shot-01.jpg',
          alt: 'CmDarri Audio Player landscape screenshot.', caption: 'Library' },
        { src: 'assets/img/apps/audio-player/shot-02.jpg',
          alt: 'CmDarri Audio Player landscape screenshot.', caption: 'Now playing' },
        { src: 'assets/img/apps/audio-player/shot-03.jpg',
          alt: 'CmDarri Audio Player landscape screenshot.', caption: 'Queue' }
      ],
      playUrl: null,
      privacyPage: null,
      privacyDoc: 'https://docs.google.com/document/d/1SPHevcuQglQS89IQXWCsuChHaDjnEb_geortakVf9Hs/view?usp=sharing',
      privacyUpdated: 'August 23, 2026'
    },

    {
      slug: 'riddles-1000',
      name: 'Exactly 1000 Riddles — English',
      listingName: 'Exactly 1000 Riddles',
      status: 'development',
      platform: 'Android',
      icon: 'assets/img/apps/riddles-1000/icon.png',
      tagline: '1000 riddles with answers',
      short:
        '1000 hand-picked riddles to challenge your brain. Can you solve them all?',
      summary:
        'A riddle book containing precisely 1000 hand-picked riddles ranging from ' +
        'easy to challenging, across logic, wordplay, maths and classic riddles. ' +
        'Tap to reveal each answer. It works fully offline with no ads and no ' +
        'subscription.',
      features: [
        { t: '1000 unique riddles', d: 'Each riddle has an answer; difficulty ranges from easy to challenging.' },
        { t: 'Mixed categories', d: 'Logic, wordplay, maths and classic riddles.' },
        { t: 'Tap to reveal', d: 'Answers stay hidden until you choose to see them.' },
        { t: 'Fully offline', d: 'No internet connection required.' },
        { t: 'No ads, no subscription', d: 'A one-time purchase with no advertising.' }
      ],
      screenshots: [
        { src: 'assets/img/apps/riddles-1000/shot-01.jpg',
          alt: 'Riddle list screen.', caption: 'Riddle list' },
        { src: 'assets/img/apps/riddles-1000/shot-02.jpg',
          alt: 'Riddle question screen.', caption: 'Question' },
        { src: 'assets/img/apps/riddles-1000/shot-03.jpg',
          alt: 'Answer reveal screen.', caption: 'Tap to reveal the answer' }
      ],
      playUrl: null,
      privacyPage: null,
      privacyDoc: 'https://docs.google.com/document/d/1oc40gB-krVkrx_GzPQELfw7D01Dw3xq2Dm7Ncb_kQEs/view?usp=sharing',
      privacyUpdated: 'June 2026'
    },

    {
      slug: 'tasbeeh-counter',
      name: 'Tasbeeh Counter: Sunnah Zikr',
      listingName: 'Tasbeeh Counter',
      status: 'development',
      platform: 'Android',
      package: 'com.vaitns.tasbeehcounter',
      icon: 'assets/img/apps/tasbeeh-counter/icon.png',
      tagline: 'Digital tasbeeh with Sunnah dhikr',
      short:
        'Elegant digital Tasbeeh counter with authentic Sunnah dhikrs and progress tracking.',
      summary:
        'A distraction-free digital tasbeeh for daily dhikr. Each entry carries the ' +
        'Arabic text with diacritics, a transliteration, an English translation and ' +
        'a hadith reference, with counting modes, cycle tracking, focus mode and ' +
        'local progress history. It runs entirely offline.',
      features: [
        { t: 'Sunnah dhikr library', d: 'A curated set of essential dhikrs with Arabic text and diacritics, transliteration, English translation and authentic hadith references from Sahih al-Bukhari and Sahih Muslim.' },
        { t: 'Counting modes', d: 'Auto-reset for repeating cycles, Stop to signal the target is reached, or Continue to track extra recitations.' },
        { t: 'Cycle tracking', d: 'Current cycle number and target progress are visible at a glance.' },
        { t: 'Volume button counting', d: 'Increment the count with the physical volume buttons for a tactile, screen-free rhythm.' },
        { t: 'Focus mode', d: 'Hides everything except the counter and the dhikr text.' },
        { t: 'Progress and history', d: 'Daily and lifetime recitation statistics, with archived sessions and pinned dhikrs.' },
        { t: 'Sensory feedback', d: 'Gentle haptic feedback, vibration and subtle sounds on cycle completion and target reached.' },
        { t: 'Arabic typography', d: 'Multiple Arabic fonts including Amiri, Tajawal and Cairo for readability.' }
      ],
      screenshots: [
        { src: 'assets/img/apps/tasbeeh-counter/shot-01.jpg',
          alt: 'Tasbeeh Counter landscape screenshot.', caption: 'Counter' },
        { src: 'assets/img/apps/tasbeeh-counter/shot-02.jpg',
          alt: 'Tasbeeh Counter landscape screenshot.', caption: 'Dhikr with translation' },
        { src: 'assets/img/apps/tasbeeh-counter/shot-03.jpg',
          alt: 'Tasbeeh Counter landscape screenshot.', caption: 'Library' }
      ],
      playUrl: null,
      privacyPage: null,
      privacyDoc: 'https://docs.google.com/document/d/1u6rzoQzC1mXrBMcctkRsO96uDJEdtAsKsZKu1qUqTIA/view?usp=sharing',
      privacyUpdated: 'August 3, 2026'
    }
  ]
};
