
const posts = [
  {
    id: 'post1',
    tag: 'section-1',
    time: '2024-03-22T09:30:00',
    user: {
      name: 'John',
      img: 'https://source.unsplash.com/random/100x100?man',
    },
    post: {

      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit condimentum, tincidunt metus nec, tincidunt odio. Ut ultricies orci vel ante maximus efficitur. Nulla facilisi.',
      caption: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aulabore et dolore magnam aliquam quaerat voluptatem.',
    },
    actions: { likes: 20, comments: 5, views: 100 },
  },
  {
    id: 'post2',
    tag: 'section-2',
    time: '2024-03-21T15:45:00',
    user: {
      name: 'Emma',
      img: 'https://source.unsplash.com/random/100x100?woman',
    },
    post: {

      text: 'Suspendisse potenti. Quisque a tortor id dui eleifend accumsan. Vivamus vehicula lectus nec enim tristique, vitae efficitur nunc eleifend. Integer ac justo diam. Cras sed turpis eget lectus tincidunt luctus at nec ipsum.',
      caption: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aulabore et dolore magnam aliquam quaerat voluptatem.',
    },
    actions: { likes: 30, comments: 8, views: 80 },
  },
  {
    id: 'post3',
    tag: 'section-3',
    time: '2024-03-20T20:00:00',
    user: {
      name: 'Sophia',
      img: 'https://source.unsplash.com/random/100x100?girl',
    },
    post: {

      text: 'Cras sed consequat massa. Nunc id semper ligula, et eleifend purus. In hac habitasse platea dictumst. Fusce in efficitur quam. Ut nec urna nec nisi laoreet ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      caption: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aulabore et dolore magnam aliquam quaerat voluptatem.',
    },
    actions: { likes: 50, comments: 15, views: 120 },
  },
  {
    id: 'post4',
    tag: 'section-1',
    time: '2024-03-19T12:00:00',
    user: {
      name: 'Michael',
      img: 'https://source.unsplash.com/random/100x100?man',
    },
    post: {

      text: 'Donec vitae eros vitae nunc rhoncus sagittis. Integer sollicitudin nunc nec orci tincidunt, ut gravida sapien ultricies. Vestibulum posuere auctor nisi, eu dapibus odio elementum eu. Duis pulvinar orci vitae nulla fermentum volutpat. Ut consectetur, ligula vel dapibus consectetur, eros dui pharetra nunc, nec dictum enim velit nec velit.',
      caption:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aulabore et dolore magnam aliquam quaerat voluptatem.',
    },
    actions: { likes: 40, comments: 12, views: 90 },
  },
  {
    id: 'post5',
    tag: 'section-2',
    time: '2024-03-18T18:30:00',
    user: {
      name: 'Olivia',
      img: 'https://source.unsplash.com/random/100x100?woman',
    },
    post: {

      text: 'Integer vitae libero et ligula euismod laoreet. Mauris in nunc quis eros suscipit vehicula. Fusce sollicitudin ultrices diam, eget accumsan magna malesuada nec. Duis quis magna sit amet orci ultricies rutrum nec a erat. Phasellus condimentum urna vitae nisi bibendum, id accumsan enim consequat. Ut sollicitudin est ut lorem dictum, eget sagittis dui tincidunt.',
      caption: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aulabore et dolore magnam aliquam quaerat voluptatem.',
    },
    actions: { likes: 25, comments: 6, views: 70 },
  },
  {
    id: 'post6',
    tag: 'section-3',
    time: '2024-03-17T09:15:00',
    user: {
      name: 'William',
      img: 'https://source.unsplash.com/random/100x100?man',
    },
    post: {

      text: 'Praesent in sollicitudin nulla, non scelerisque nibh. Donec mollis lorem vel metus ultrices, eget pharetra ante aliquam. Nam aliquet, nisi vitae bibendum rutrum, nunc velit faucibus purus, non fringilla leo felis vel enim. Nullam vitae fringilla turpis. Vestibulum condimentum magna non commodo tincidunt.',
      caption: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aulabore et dolore magnam aliquam quaerat voluptatem.',
    },
    actions: { likes: 35, comments: 9, views: 60 },
  },
];
export default posts