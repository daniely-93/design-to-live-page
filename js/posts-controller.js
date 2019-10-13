renderPosts();

function renderPosts(){
    var posts = getPosts();
    var strHTMLs = posts.map(post => {
        return `<section class="card flex">
            <img class="card-img" src="${post.imgUrl}" alt="${post.title}" />
            <div class="card-content space-between flex wrap">
                <h2 class="card-title">${post.title}</h2>
                <p class="card-text">${post.text1}</p>
                <p class="card-text">${post.text2}</p>
                <button class="card-continue-btn" type="button">Continue Reading</button>
            </div>
        </section>`
    }).join('');
    document.querySelector('.card-container').innerHTML = strHTMLs;
}