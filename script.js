function showSideBar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.right = '0px';
}

function hideSideBar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.right = '-100rem';
}


document.querySelector('.see-more').addEventListener('click', function() {
  var moreTours = document.querySelector('.more-tours');
  if (moreTours.style.display === 'none' || moreTours.style.display === '') {
      moreTours.style.display = 'block';
      this.textContent = 'Show Less';
  } else {
      moreTours.style.display = 'none';
      this.textContent = 'See More';
  }
});