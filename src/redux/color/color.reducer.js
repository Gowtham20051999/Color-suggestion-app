const INITIAL_STATE = {
    sections: [
      {
        title: 'Blue',
        imageUrl: 'https://serenoregis.org/wp-content/uploads/2021/06/January-2020-B-Fashion-Review-Colors-to-Banish-the-Winter-Blues.png',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'black',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZ4sgkgZByyEWRrRN4xDCBRQsPI4F_S9YWQ&usqp=CAU',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'red',
        imageUrl: 'https://www.color-hex.com/palettes/103574.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      
    ]
  };
  
  const colorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default colorReducer;
  