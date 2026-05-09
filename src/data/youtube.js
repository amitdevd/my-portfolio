export const youtubeChannel = {
  name: 'Amit Dwivedi YouTube',
  url: 'https://www.youtube.com/channel/UCSy1kmf9WTa7Bjo7HeAgOWQ',
  videosUrl: 'https://www.youtube.com/channel/UCSy1kmf9WTa7Bjo7HeAgOWQ/videos',
  shortsUrl: 'https://www.youtube.com/channel/UCSy1kmf9WTa7Bjo7HeAgOWQ/shorts',
  playlistsUrl: 'https://www.youtube.com/channel/UCSy1kmf9WTa7Bjo7HeAgOWQ/playlists',
  postsUrl: 'https://www.youtube.com/channel/UCSy1kmf9WTa7Bjo7HeAgOWQ/community',
};

export const youtubeVideos = [
  {
    title: 'madhugangeshwar mandir (bhagulinaath mandir)',
    meta: '51 views - 2 weeks ago',
    duration: '0:24',
    videoId: 'zrqm6BXJitI',
    url: youtubeChannel.videosUrl,
  },
];

export const youtubeShorts = [
  ['NZefD3gmbew', 'Savdhan ho jao tattoo banwane walo', '1 view'],
  ['jxY-Nevw5uo', 'tention he ki jaati hi ni #funnyvideo #comedy #funny #viralreels', '36 views'],
  ['qZRP9pV32MA', 'indian gas se #funnyvideo #comedy', '200 views'],
  ['A3qXY0ik_Oo', 'batao fir 1 million kidhr he #funnyvideo #comedy #viralreels', '431 views'],
  ['Lg1wgyHL1yg', '#comedy #funnyvideo #viralreels #viralvideo #funny', '99 views'],
  ['W8-eQbDWMSQ', 'gyan jyada jaruri nahi he paisa jyada jaruri he', '39 views'],
  ['1oxM1HSZfjM', '#viral #viralreels #viralvideo #viralshorts #funny', '41 views'],
  ['p6gzlbI7A64', '#viralvideo #viralshorts #viralvideos #viralreels', '389 views'],
  ['GvTTSd9AS94', '#viral #funny #funnyvideo #funnyshorts #chamaktasitara', '150 views'],
  ['ZSvexxUguq4', '#funnyvideo #manoranjan #khelakhelo', '399 views'],
  ['pS-BriYwFhU', '27 April 2026', '245 views'],
  ['wZrXDJup9h8', 'welcome to my blog', '61 views'],
  ['XbUTx6ToVs4', 'Bhojan se pehle mantra #sanatandharma #sanatangyan', '31 views'],
  ['dhpUtVaO5kU', 'Hamare ghar ki Lakshmi #entertainmentvideo #gharkikahani', '416 views'],
  ['CSt3b4YtD6Y', 'trending done', '441 views'],
  ['Z-lh761hono', 'Meri bhanji ka annaprashan sanskar', '354 views'],
  ['S5MlBLMbTHU', 'ise suno aap logo ke dukh dard dur honge jaldi', '1 thousand views'],
  ['6I2bQqF4Ufo', 'Roman Abramovich Private Jet Was Unreal', '534 views'],
].map(([videoId, title, meta]) => ({
  title,
  meta,
  duration: 'Shorts',
  videoId,
}));
