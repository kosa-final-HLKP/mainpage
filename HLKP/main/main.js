

document.addEventListener('scroll', function () {
  var targetElement = document.querySelector('.p4box img');
  var positionFromTop = targetElement.getBoundingClientRect().top;

  if (positionFromTop - window.innerHeight <= 3000) {
      targetElement.style.animation = 'img-slider 3s ease-in-out infinite alternate';
  } else {
      
      targetElement.style.animation = 'none';
  }
});

document.addEventListener('scroll', function () {
  var targetElement = document.querySelector('page-3 img');
  var positionFromTop = targetElement.getBoundingClientRect().top;

  if (positionFromTop - window.innerHeight <= 2800) {
      targetElement.style.animation = 'img-slider 3s ease-in-out infinite alternate';
  } else {
     
      targetElement.style.animation = 'none';
  }
});