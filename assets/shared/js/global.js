var goSwipe = true;

// Enable swiping next/prev
document.addEventListener('DOMContentLoaded', async function () {

  $(function () {

    $('body').swipe({
      //Generic swipe handler for all directions
      swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        console.log('You swiped ' + direction);

        if (direction == 'left' && $(this).attr('data-next')) {
          console.log($(this).attr('data-next'));

          var destination = '' + $(this).attr('data-next');
          location.href = `../${destination}/${destination}.html`;
        }
        if (direction == 'right' && $(this).attr('data-prev')) {
          console.log($(this).attr('data-prev'));

          var destination = '' + $(this).attr('data-prev');
          location.href = `../${destination}/${destination}.html`;
        }
      },
      // Default is 75px, set to 0 for demo so any distance triggers swipe
      threshold: 75,
    });
  });
});

function openPDF(url = '../shared/pdf/LOK_PI.pdf#pagemode=none&navpanes=0') {
  // (write only) Count page views
  let statsViews = parseInt(localStorage.getItem(`stats-PI-views`));
  if (!statsViews) {
    statsViews = 0;
  }
  statsViews = statsViews + 1;
  localStorage.setItem(`stats-PI-views`, statsViews);

  const strWindowFeatures = 'location=no,height=1000,width=700,scrollbars=yes,status=no,menubar=no,toolbar=no';

  console.log(url);
  window.open(url, '_blank', strWindowFeatures);
}
