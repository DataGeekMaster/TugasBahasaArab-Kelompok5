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
  if (menuBox.style.display === 'block') {
    menuBox.style.right = '-200px';
    setTimeout(function() {
      menuBox.style.display = 'none';
    }, 300);
    if (memberListBox.classList.contains('show')) {
      memberListBox.classList.remove('show');}
  } else {
    menuBox.style.display = 'block';
    setTimeout(function() {
      menuBox.style.right = '0';
    }, 0);
  }
});

closeBtn.addEventListener('click', function() {
  menuBox.style.right = '-200px';
  setTimeout(function() {
    menuBox.style.display = 'none';
  }, 300);
  if (memberListBox.classList.contains('show')) {
    memberListBox.classList.remove('show');}
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
