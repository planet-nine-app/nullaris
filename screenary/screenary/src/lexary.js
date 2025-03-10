import gestures from './input/gestures.js';
import loadingIndicator from './layouts/components/loading-indicator.js';
import imageSelector from './layouts/components/image-selector.js';
import video from './layouts/components/video.js';
import getLexaryRow from './layouts/components/svgs/lexary-row.js';

const mockPosts = [
  {
        uuid: '1',
        url: 'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:wwdgpsqzc5jeidoyupoyn6lg/bafkreienfrv6xyd4zgj2egqtxikdjl3aycaxgkwkoup6wtvhzgtfxlx45m@jpg',
        images: ['https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:wwdgpsqzc5jeidoyupoyn6lg/bafkreienfrv6xyd4zgj2egqtxikdjl3aycaxgkwkoup6wtvhzgtfxlx45m@jpg'],
        isVertical: true,
        title: 'Big Buck Bunny',
        description: 'A sample video for testing'
    },
    {
        uuid: '2',
        url: 'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:wwdgpsqzc5jeidoyupoyn6lg/bafkreienfrv6xyd4zgj2egqtxikdjl3aycaxgkwkoup6wtvhzgtfxlx45m@jpg',
        title: 'Elephants Dream',
        isVertical: false,
        mediaType: 'image',
        description: 'Another sample video'
    },
    {
        uuid: '3',
        url: './gil.mp4',
        title: 'For Bigger Blazes',
        images: ['https://wallpapercave.com/wp/wp9329705.jpg'],
        isVertical: 'false',
        mediaType: 'image',
        description: 'One more sample video'
    }
];

function createPostElement(mediaURL, uuid, postData) {
  const div = document.createElement('div');
  div.classList.add('post-cell');
  div.classList.add('vertical-post');
  div.classList.add('horizontal-post');

  const postContainer = document.createElement('div');
  postContainer.classList.add('post-container');

/*  const textContainer = document.createElement('div');
  textContainer.classList.add('post-text-container');
  textContainer.innerHTML = `<p>${postData.description}</p>`;

  postContainer.appendChild(textContainer);

  if(mediaURL) {
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('media-container');

    if(postData.mediaType === 'video') {
      video(mediaContainer, mediaURL);
    } else if(postData.mediaType === 'image') {
      imageSelector(mediaContainer, mediaURL);
    }

    postContainer.appendChild(mediaContainer);
  }

  div.appendChild(postContainer);

  return div; */

  const lexaryRow = getLexaryRow(postData.description, postData.images);
console.log(postContainer);
  postContainer.appendChild(lexaryRow);

//  return postContainer;
  div.appendChild(postContainer);
  return div;
};

function appendLexary() {
  const container = document.getElementById('main');
  Array.from(container.classList).forEach($ => {
    if($.indexOf('ontainer') !== -1) {
      container.classList.remove($);
    }
  });
  container.classList.add('lexary-container');
  mockPosts.forEach((post) => {
    const div = createPostElement(post.url, post.uuid, post);
    container.appendChild(div);
  });
};

export default appendLexary;
