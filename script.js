// Variable to store the reference to the white box
var whiteBox = null;

// Function to create and display the white box
function displayWhiteBox(event) {
  // Check if there is already a white box displayed
  if (whiteBox !== null) {
    return;
  }

  // Create the white box element
  var whiteBoxElement = document.createElement("div");
  whiteBoxElement.classList.add("white-box");

  // Create the close button
  var closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";

  // Add event listener to close the box when clicked
  closeButton.addEventListener("click", function() {
    document.body.removeChild(whiteBoxElement);
    whiteBox = null;
  });

  // Add event listener to close the box when clicked anywhere on the screen
  document.addEventListener("click", function(event) {
    if (event.target === whiteBoxElement) {
      document.body.removeChild(whiteBoxElement);
      whiteBox = null;
    }
  });

  // Get the text based on the .indo class value
  var indoText = event.currentTarget.querySelector(".indo").textContent;
  var whiteBoxText = "";

  // Set the text based on the .indo class value
  switch (indoText) {
    case "Alpukat":
      whiteBoxText = "Alpukat adalah buah yang lezat dan kaya akan lemak sehat. Ia memiliki kulit hijau dan daging kuning yang kaya akan nutrisi.";
      break;
    case "Aprikot":
      whiteBoxText = "Aprikot adalah buah dengan kulit yang halus dan warna oranye cerah. Buah ini memiliki daging yang lembut dan rasanya manis dengan sedikit keasaman.";
      break;
    case "Asparagus":
      whiteBoxText = "Asparagus kaya akan nutrisi seperti serat, vitamin K, vitamin C, vitamin E, vitamin B6, dan asam folat. Sayuran ini juga mengandung mineral penting seperti zat besi, kalium, dan seng. Asparagus memiliki kandungan antioksidan yang tinggi, yang dapat membantu melawan kerusakan sel dan radikal bebas dalam tubuh.";
      break;
    case "Bawang Putih":
      whiteBoxText = "Bawang putih adalah tanaman umbi-umbian yang sering digunakan sebagai bumbu dalam masakan. Umbinya terdiri dari beberapa siung yang terbungkus oleh lapisan kulit tipis berwarna putih. Bawang putih memiliki rasa yang kuat, pedas, dan aromatik yang khas.";
      break;
    case "Blackberry": //5
      whiteBoxText = "Blackberry adalah jenis buah beri yang tumbuh di semak berduri yang disebut blackberry bush. Buah ini memiliki warna hitam keunguan yang pekat dan memiliki tekstur yang lembut dengan biji-biji kecil di dalamnya. Blackberry memiliki rasa manis dan sedikit masam, memberikan kombinasi yang menyegarkan.";
      break;
    case "Buah":
      whiteBoxText = "Buah adalah bagian yang matang dari tumbuhan yang mengandung biji atau bagian yang dapat dimakan. Buah biasanya memiliki rasa manis atau asam dan sering digunakan sebagai makanan segar atau sebagai bahan dalam masakan dan minuman.";
    break;
    case "Bunga Surga":
      whiteBoxText = "Bunga Surga juga dikenal dengan beberapa nama lain, termasuk Bunga Eden atau Bunga Neraka. Meskipun tidak ada spesies bunga tertentu yang secara botani disebut Bunga Surga, konsep ini muncul dalam karya sastra dan kepercayaan agama. Makna dan Simbolisme: Bunga Surga dianggap sebagai bunga yang indah dan sempurna yang melambangkan keindahan surga atau kebahagiaan spiritual.";
    break;
    case "Bunga Teratai":
      whiteBoxText = "Bunga Teratai memiliki bentuk yang unik dan menarik. Mereka memiliki kelopak besar yang terbuka, seringkali dengan warna cerah seperti merah muda, putih, kuning, atau ungu. Daun-daunnya juga besar dan mengapung di permukaan air. Akar-akarnya panjang dan tertanam di dasar lumpur atau tanah di dasar kolam.";
    break;
    case "Ceri":
      whiteBoxText = "Ceri adalah buah kecil yang tumbuh di pohon ceri, yang merupakan anggota keluarga Rosaceae. Buah ini memiliki ukuran kecil hingga sedang, dengan diameter sekitar 1-2 sentimeter.";
    break;
    case "Daun Mint": //10
      whiteBoxText = "Daun Mint, juga dikenal sebagai daun peppermint atau daun mint hijau, adalah bagian yang paling umum digunakan dari tanaman mint yang termasuk dalam genus Mentha.";
    break;
    case "Delima":
      whiteBoxText = "Delima adalah buah yang berasal dari pohon delima, yang memiliki nama ilmiah Punica granatum. Buah ini memiliki ukuran sedang hingga besar dengan bentuk bulat atau sedikit lonjong. Kulit luarnya keras dan mengkilap, biasanya berwarna merah, tetapi ada juga varietas delima dengan warna kulit kuning atau putih.";
    break;
    case "Durian":
      whiteBoxText = "Durian adalah buah tropis yang terkenal dengan aroma yang kuat dan unik. Buah ini berasal dari pohon Durian yang memiliki nama ilmiah Durio zibethinus. Durian memiliki bentuk bulat atau oval dengan kulit yang keras dan berduri. Kulitnya berwarna hijau atau cokelat dengan duri-duri yang tajam.";
    break;
    case "Jeruk Nipis":
      whiteBoxText = "Jeruk nipis sering digunakan dalam masakan, minuman, dan pengobatan tradisional. Rasanya yang asam membuatnya menjadi bahan tambahan yang populer dalam banyak hidangan, seperti salad, saus, minuman, dan makanan penutup. Jeruk nipis juga sering digunakan sebagai bumbu dalam masakan untuk memberikan sentuhan asam dan segar.";
    break;
    case "Kacang Adas":
      whiteBoxText = "Kacang adas, juga dikenal sebagai biji adas, adalah biji-bijian yang berasal dari tanaman adas (Foeniculum vulgare). Tanaman adas adalah tanaman herbal yang populer dan banyak digunakan dalam masakan dan pengobatan tradisional.";
    break;
    case "Kelopak Bunga":
      whiteBoxText = "Kelopak bunga adalah bagian dari bunga yang terletak di luar mahkota bunga. Kelopak terdiri dari daun-daun yang biasanya berwarna mencolok dan melindungi bagian dalam bunga sebelum mekar sepenuhnya. Bentuk, ukuran, dan warna kelopak bunga dapat bervariasi tergantung pada jenis bunga yang sedang diamati.";
    break;
    case "Kesemek":
      whiteBoxText = "Kesemek, juga dikenal sebagai persimmon, adalah buah yang berasal dari beberapa spesies pohon di genus Diospyros dalam keluarga Ebenaceae. Buah ini memiliki bentuk bulat atau kerucut dengan kulit yang halus dan mengkilap. Kesemek umumnya memiliki warna oranye kemerahan ketika matang, meskipun ada beberapa varietas yang memiliki warna kuning atau merah.";
    break;
    case "Kunyit":
      whiteBoxText = "Kunyit, juga dikenal sebagai turmeric, adalah sejenis rempah-rempah yang berasal dari Asia Selatan. Tanaman kunyit tumbuh dengan memiliki umbi yang berwarna oranye kemerahan di dalam tanah. Umbi kunyit kemudian dikeringkan dan diolah menjadi serbuk kunyit yang sering digunakan dalam memasak, pengobatan tradisional, dan sebagai pewarna alami.";
    break;
    case "Mangga":
      whiteBoxText = "Mangga adalah buah yang berasal dari pohon mangga (Mangifera indica) dan termasuk dalam keluarga Anacardiaceae. Buah ini memiliki bentuk bulat atau oval dengan kulit yang halus dan berwarna hijau, kuning, oranye, atau merah tergantung pada jenisnya. Daging buah mangga umumnya berwarna kuning, manis, dan juicy.";
    break;
    case "Oregano":
      whiteBoxText = "Oregano adalah sejenis tanaman herbal yang digunakan sebagai bumbu dalam masakan. Tanaman oregano termasuk dalam keluarga Labiatae atau mint. Oregano memiliki daun kecil berwarna hijau gelap yang memiliki aroma khas dan rasa yang kuat.";
    break;
    case "Paprika": //20
      whiteBoxText = "Paprika adalah sejenis buah yang digunakan sebagai bumbu dalam masakan. Buah paprika memiliki bentuk bulat atau kerucut dan biasanya memiliki warna merah, hijau, kuning, oranye, atau ungu tergantung pada varietasnya. Paprika termasuk dalam keluarga Solanaceae dan berasal dari Amerika Tengah dan Selatan.";
    break;
    case "Rambutan":
      whiteBoxText = "Rambutan adalah sejenis buah tropis yang berasal dari daerah Asia Tenggara. Buah ini memiliki kulit berduri yang tebal dan berwarna merah atau kuning tergantung pada tingkat kematangan. Ketika kulitnya dikupas, terlihat daging buah yang berwarna putih atau merah muda dengan biji yang besar di tengahnya.";
    break;
    case "Buah pala":
      whiteBoxText = "Buah pala adalah buah yang berasal dari pohon pala, yang dikenal dengan nama ilmiah Myristica fragrans. Pala memiliki bentuk bulat dan ukuran yang relatif kecil, dengan diameter sekitar 5-7 cm. Kulit buahnya kasar dan berwarna merah kecokelatan, sedangkan bagian dalamnya terdiri dari daging buah yang berwarna putih atau merah muda, dan biji yang berukuran besar yang dikenal sebagai biji pala.";
    break;
    case "Sawi":
      whiteBoxText = "Sawi adalah sejenis sayuran daun yang berasal dari keluarga Brassicaceae. Ada berbagai jenis sawi, termasuk sawi hijau, sawi putih, sawi bok choy, dan lain-lain. Sawi sering digunakan dalam masakan Asia, terutama dalam hidangan tumis, sup, salad, dan acar.";
    break;
    case "Tebu":
      whiteBoxText = "Tebu, yang juga dikenal sebagai tebu gula atau tebu manis, adalah sejenis tanaman rumput yang tergolong dalam keluarga Poaceae. Tanaman ini terkenal karena getahnya yang kaya akan gula, yang digunakan sebagai bahan baku utama dalam produksi gula.";
    break;
    case "Zaitun":
      whiteBoxText = "Zaitun adalah buah yang berasal dari pohon zaitun (Olea europaea), yang termasuk dalam keluarga Oleaceae. Buah zaitun memiliki bentuk bulat atau oval dengan kulit yang halus dan berwarna hijau atau hitam, tergantung pada tingkat kematangannya. Zaitun tumbuh di daerah dengan iklim mediterania dan menjadi salah satu simbol penting dari wilayah tersebut.";
    break;
    default:
      whiteBoxText = "Teks tidak ditemukan.";
  }

  // Set the text inside the white box
  whiteBoxElement.textContent = whiteBoxText;

  // Append the white box and close button to the body
  document.body.appendChild(whiteBoxElement);
  whiteBoxElement.appendChild(closeButton);

  // Update the reference to the white box
  whiteBox = whiteBoxElement;
}

// Get all elements with class "kotak"
var kotakElements = document.querySelectorAll(".kotak");

// Add event listener to each "kotak" element
kotakElements.forEach(function(element) {
  element.addEventListener("click", displayWhiteBox);
});

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


