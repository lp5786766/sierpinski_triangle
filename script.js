if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  location.href = 'mobile.html';
}


const triangle = $('#tri');

// triangle.click(() => {
//     alert("Hello!");
// });

function printMousePos(event) {
  console.log('clientX: ' + event.clientX + ' - clientY: ' + event.clientY);
}

document.addEventListener('click', printMousePos);
