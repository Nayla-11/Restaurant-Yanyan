/* eslint-disable no-undef */
const DrawerInitiator = () => {
  // Function to handle keyboard events on the "About Us" menu item

  $(document).ready(() => {
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      e.stopPropagation();
    });

    $('html').click(() => {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(() => {
      $('.nav-list').slideToggle();
    });
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  });
};

export default DrawerInitiator;
