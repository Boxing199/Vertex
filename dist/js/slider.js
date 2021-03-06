$('.screenshots__sl').slick({
    arrows: false,
    asNavFor: '.screenshots__min-sl',
    slidesToShow: 1
  });

  $('.screenshots__min-sl').slick({
    slidesToShow: 3,
    asNavFor: '.screenshots__sl',
    vertical: true,
    focusOnSelect: true,
    prevArrow: '<svg class="prev" xmlns="http://www.w3.org/2000/svg" width="39" height="19" viewBox="0 0 39 19"><g><g><path d="M3.287 18.996L19.501 3.198l16.213 15.798h3.289L19.501-.006l-.824.801L-.005 18.996z"/></g></g></svg>',
    nextArrow: '<svg class="next" xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 40 20"><g><g><path d="M36.078.598l-16.11 16.11L3.858.597H.591l19.377 19.377.818-.818L39.35.597z"/></g></g></svg>',
    responsive: [
        {
            breakpoint: 951,
            settings: {
                vertical: false,
                arrows: true,
                slidesToShow: 3
              }
        },
        {
            breakpoint: 851,
            settings: {
                vertical: false,
                arrows: true,
                slidesToShow: 2
              }
        },
        {
          breakpoint: 579,
          settings: {
              vertical: false,
              arrows: true,
              slidesToShow: 1
            }
      }
    ]
  });
