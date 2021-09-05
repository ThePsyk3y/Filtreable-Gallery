/* function changeTheme() {
    var img = document.getElementById("mode-toggle").src;
    if (img.indexOf('assets/light.png')!=-1) {
        document.getElementById("mode-toggle").src = 'assets/dark.png';
    } else {
        document.getElementById("mode-toggle").src = 'assets/light.png';
    }
    document.querySelector('body').classList.toggle('dark');
}

console.log("Is JS Working?"); */

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  document.querySelector('body').classList.toggle('dark');
}

toggleSwitch.addEventListener('change', switchTheme, false);
/* 
function setActive(elem) {
  if (elem.target.classList('active')) {
  }
} */
var filterCategory = document.querySelector('.categories');
var filterImages = document.querySelectorAll('.griditems');

window.onload = () => {
  filterCategory.onclick = (selItem) => {
    if (selItem.target.classList.contains('item')) {
      filterCategory.querySelector('.active').classList.remove('active');
      selItem.target.classList.add('active');

      let filterName = selItem.target.getAttribute('data-name');

      filterImages.forEach((image) => {
        let filterImage = image.getAttribute('data-name');

        if (filterImage == filterName || filterName == 'all') {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
  };
};
