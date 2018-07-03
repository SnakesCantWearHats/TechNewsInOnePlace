//const elementLoadCount = 1;

// Page Elements

const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const arsTech = document.getElementById('arsTech');
const lietuva = document.getElementById('lietuva');
const techCrunch = document.getElementById('techCrunch');
const wired = document.getElementById('wired');
const cnn = document.getElementById('cnn');
const washingtonPost = document.getElementById('washingtonPost');
const bloomberg = document.getElementById('bloomberg');
const ign = document.getElementById('ign');
//const more = document.getElementById('more');
const main = document.getElementsByTagName('main')[0];


// News API urls

const apiKey = '91dc11087c1e492e84aca8ef647f38e7';
const engadgetUrl = 'https://newsapi.org/v2/top-headlines?sources=engadget&apiKey='+apiKey;
const recodeUrl = 'https://newsapi.org/v2/top-headlines?sources=recode&apiKey='+apiKey;
const nextWebUrl = 'https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey='+apiKey;
const arsTechUrl = 'https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey='+apiKey;
const techCrunchUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+apiKey;
const wiredUrl = 'https://newsapi.org/v2/top-headlines?sources=wired&apiKey='+apiKey;
const cnnUrl = 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey='+apiKey;
const washingtonPostUrl = 'https://newsapi.org/v2/top-headlines?sources=the-washington-post&apiKey='+apiKey;
const bloombergUrl = 'https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey='+apiKey;
const ignUrl = 'https://newsapi.org/v2/top-headlines?sources=ign&apiKey='+apiKey;
const mashableUrl = 'https://newsapi.org/v2/top-headlines?sources=mashable&apiKey='+apiKey;
const lietuvaUrl = 'https://newsapi.org/v2/top-headlines?country=lt&apiKey='+apiKey;

// Request News Function
async function getNews(url) {
  let response = await fetch(url);
  let jsonResponse = await response.json();
  let articleArray = jsonResponse.articles.slice(0, 10);
  return articleArray;
}
// Render Function

function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + article.title +'</h2>' +
      '   <h3>By ' + article.author + '</h3>' +
	  '   <div class="articlebody">' +
      '   	<p> ' + article.description + '</p>' +
			'<a href="' + article.url + '" target="_blank" class="readmore"><button type="button">Read more</button></a>' +
 //     '   	<a href="' + article.url + '" target="_blank" class="readmore"><p>Read More</p></a>' +
	  '   </div>' +
      ' </div>' +
      '   <img class="image" src="' + article.urlToImage + '" />';
	  '</div>'

    main.innerHTML += articleRow;
  });
 // main.innerHTML += '<button id="more" onclick="increaseElementCount>I want more!</button>';
  return articles;
}

function increaseElementCount(elementLoadCount) {
	elementLoadCount++;
}

// Button Event Listeners



engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(engadgetUrl).then(articlesArray => {
    renderNews(articlesArray);
});
}, false);

recode.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(recodeUrl).then(articlesArray => {
    renderNews(articlesArray);
  });
}, false);

nextWeb.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(nextWebUrl).then(articlesArray => {
    renderNews(articlesArray);
  });
}, false);

arsTech.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(arsTechUrl).then(articlesArray => {
    renderNews(articlesArray);
  });
}, false);

techCrunch.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(techCrunchUrl).then(articlesArray => {
    renderNews(articlesArray);
  });
}, false);

lietuva.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(lietuvaUrl).then(articlesArray => {
    renderNews(articlesArray);
  });
}, false);

wired.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(wiredUrl).then(articlesArray => {
    renderNews(articlesArray);
  });
}, false);

cnn.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(cnnUrl).then(articlesArray => {
    renderNews(articlesArray);
  });
}, false);

washingtonPost.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(washingtonPostUrl).then(articlesArray => {
    renderNews(articlesArray);
  });
}, false);

bloomberg.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(bloombergUrl).then(articlesArray => {
    renderNews(articlesArray);
  });
}, false);

ign.addEventListener('click', function() {
  main.innerHTML = ' ';
  getNews(ignUrl).then(articlesArray => {
    renderNews(articlesArray);
  });
}, false);



