$('button').on('click', function () {
    alert('clicked!')
  })
/******************************* */
  $('button').click(function () {
    alert('clicked!')
  })
/************************ */
  const clicked = function () {
    alert('clicked!')
  }
  
  $('button').on('click', clicked)


/*************** */
  const clicked = function () {
    alert('clicked!')
  }
  
  $('button').click(clicked)