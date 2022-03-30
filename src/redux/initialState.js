const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title I',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      content: 'Accumsan lacus vel facilisis volutpat. Felis donec et odio pellentesque. Nam libero justo laoreet sit amet cursus. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Lectus mauris ultrices eros in cursus turpis massa tincidunt. ',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Sport'
    },

    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Faucibus in ornare quam viverra orci sagittis eu volutpat...',
      content: 'Non curabitur gravida arcu ac tortor dignissim convallis aenean. Quis commodo odio aenean sed adipiscing diam. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Nulla at volutpat diam ut venenatis tellus. Adipiscing commodo elit at imperdiet dui accumsan sit. Convallis a cras semper auctor neque. Quisque sagittis purus sit amet volutpat consequat mauris. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Quis eleifend quam adipiscing vitae proin. Turpis egestas integer eget aliquet nibh praesent tristique magna. ',
      publishedDate: new Date('02-14-2022'),
      author: 'Jan Kowalski',
      category: 'News'
    },

    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Tristique senectus et netus et malesuada cras semper fames...',
      content: 'Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Sapien et ligula ullamcorper malesuada proin libero. Arcu vitae elementum curabitur vitae. Convallis a cras semper auctor.',
      publishedDate: new Date('02-28-2022'),
      author: 'Margaret Pink',
      category: 'Movies'
    },
    {
      id: '4',
      title: 'Article title IV',
      shortDescription: 'Faucibus in ornare quam viverra orci sagittis eu volutpat...',
      content: 'Non curabitur gravida arcu ac tortor dignissim convallis aenean. Quis commodo odio aenean sed adipiscing diam. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Nulla at volutpat diam ut venenatis tellus. Adipiscing commodo elit at imperdiet dui accumsan sit. Convallis a cras semper auctor neque. Quisque sagittis purus sit amet volutpat consequat mauris. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Quis eleifend quam adipiscing vitae proin. Turpis egestas integer eget aliquet nibh praesent tristique magna. ',
      publishedDate: new Date('03-14-2022'),
      author: 'Jan Kowalski',
      category: 'News'
    },

    {
      id: '5',
      title: 'Article title V',
      shortDescription: 'Tristique senectus et netus et malesuada cras semper fames...',
      content: 'Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Sapien et ligula ullamcorper malesuada proin libero. Arcu vitae elementum curabitur vitae. Convallis a cras semper auctor.',
      publishedDate: new Date('03-28-2022'),
      author: 'Margaret Pink',
      category: 'Movies'
    }
  ],
  categories: [
    {
      id: '1',
      name: 'Sport'
    },
    {
      id: '2',
      name: 'News'
    },
    {
      id: '3',
      name: 'Movies'
    }
  ]

};

export default initialState;