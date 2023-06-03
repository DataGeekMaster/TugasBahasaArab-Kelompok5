var menuIcon = document.querySelector('.menu-icon');
var menuBox = document.getElementById('menu-box');
var closeBtn = document.getElementById('close-btn');

var memberListicon = document.getElementById('icon');
var memberListBox = document.getElementById('memberList');
var closeMemberlist = document.getElementById('close');
const checkbox = document.getElementById('checkbox');
const label = document.querySelector('.label');
const modeText = document.querySelector('.mode-text');

checkbox.addEventListener('change', () => {
  label.classList.toggle('dark', checkbox.checked);
  document.body.classList.toggle('dark');
  modeText.textContent = checkbox.checked ? 'Night Mode' : 'Light Mode';
});

menuIcon.addEventListener('click', function() {
  if (menuBox.classList.contains('show')) {
    menuBox.classList.add('close');
    menuBox.classList.remove('show');
    if (memberListBox.classList.contains('show')) {
      memberListBox.classList.remove('show');
    }
    setTimeout(function() {
      menuBox.classList.remove('close');
      menuBox.classList.add('hidden');
    }, 300);
  } else {
    menuBox.classList.add('show');
    menuBox.classList.remove('hidden');
  }
});

closeBtn.addEventListener('click', function() {
  menuBox.classList.add('close');
  menuBox.classList.remove('show');
  if (memberListBox.classList.contains('show')) {
    memberListBox.classList.remove('show');
  }
  setTimeout(function() {
    menuBox.classList.remove('close');
    menuBox.classList.add('hidden');
  }, 300);
});

memberListicon.addEventListener('click', function() {
  if (memberListBox.classList.contains('show')) {
    memberListBox.classList.remove('show');
  } else {
    memberListBox.classList.add('show');
  }
});

closeMemberlist.addEventListener('click', function() {
  memberListBox.classList.remove('show');
});

window.addEventListener('scroll', function() {
  var menuBox = document.getElementById('menu-box');
  var windowHeight = window.innerHeight;
  var windowScroll = window.scrollY || window.pageYOffset;

  var menuBoxHeight = menuBox.offsetHeight;

  var top = windowHeight / 2 - menuBoxHeight / 2 + windowScroll;
  var left = '50%';

  menuBox.style.top = top + 'px';
  menuBox.style.left = left;
});


