const articleContainer = document.querySelector(".product-list")
const searchInput = document.querySelector("#searchInput")
let articleList = null
fetch('https://671e10601dfc429919812c56.mockapi.io/api/article/article', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    })
    .then((article) => {
        console.log(article)
            //update artical list
        articleList = article
            // Do something with the list of tasks
        renderFunction(article)
    })
    .catch((error) => {
        // handle error
    })

function searchFunction() {
    const searchValue = searchInput.value.toLowerCase().trim(); // Trim spaces for better matching
    console.log(searchValue);

    if (!searchValue) {
        renderFunction(articleList); // Render all articles if search is empty
        return;
    }

    const articleFilter = articleList.filter(function(article) {
        return String(article.name).toLowerCase().includes(searchValue);
    });

    renderFunction(articleFilter); // Render filtered articles
}


function renderFunction(article) {
    articleContainer.innerHTML = "";
    for (let i = 0; i < article.length; i++) {
        const articleElement = document.createElement("div");
        articleElement.classList.add("product-item");
        articleElement.innerHTML = `
            <img class="img" src="${article[i].img}" alt="${article[i].name}" />
            <p class="blue">${article[i].name}</p>
            <p class="blue">${article[i].money}$</p>
            <button class="btn-mua" onclick="addToCart(event, ${article[i].id}, '${article[i].name}')">Purchase</button>
        `;
        articleContainer.appendChild(articleElement);
    }
}