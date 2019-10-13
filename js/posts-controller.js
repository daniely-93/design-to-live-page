renderPosts();

function renderPosts() {
    var posts = getPosts();
    var strHTMLs = posts.map(post => {
        console.log(post)
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
    var elCardCont = document.querySelector('.card-container');
    elCardCont.innerHTML = '<button class="btn-success btn-new" onclick="onAddPost()">New Post</button>' + strHTMLs;
    renderNavBtns();
}

function renderNavBtns() {
    var strHTML = `<section class="nav-container space-between flex">
                    <button class="btn" type="button">← Previous</button>
                    <button class="btn" type="button">Next →</button>
                    </section>`;
    document.querySelector('.card-container').innerHTML += strHTML;
}

function onAddPost() {
    renderForm();
    var btn = document.querySelector('.btn-add');
    btn.innerText = 'Add';
    btn.onclick = () => onAddSubmit();
}

function onAddSubmit() {
    var imgUrl = document.querySelector('.pic').value;
    var title = document.querySelector('.title').value;
    var text1 = document.querySelector('.text1').value;
    var text2 = document.querySelector('.text2').value;
    addPost(imgUrl, title, text1, text2);
    document.querySelector('.modal').remove();
    renderPosts();
}

function renderForm() {
    var strHTMLs = '<div class="modal">'
    strHTMLs += `<div class="modal-content">
                    <div class="close-btn">
                        <span onclick="document.querySelector('.modal').remove()" class="close" title="Close Modal">&times;</span>
                    </div>
                    <div class="container">
                        <label for="pic">Picture (URL)</label>
                        <input class="input pic" type="text" name="pic" required>

                        <label for="title">Title</label>
                        <input class="input title" type="text" name="title" required>

                        <label for="text1">Text</label>
                        <input class="input text1" type="text" name="text1" required>

                        <label for="text2">Extra Text (Optional)</label>
                        <input class="input text2" type="text" name="text2">
                          
                        <button class="btn-success btn-add">Add</button>
                    </div>
                </div>`;
    strHTMLs += '</div>';
    document.querySelector('.card-container').innerHTML += strHTMLs;
}