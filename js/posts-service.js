const POSTS_KEY = 'posts';

var gPosts;
createPosts()

function createPosts() {
    var posts = loadPostsFromStrorage();
    if (!posts) {
        posts = [
            createPost('https://i.imgur.com/G378rDS.jpg',
                'DUIS AUTE IRURE DOLOR IN HENDERIT IN VOLUPTATE.',
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...'
            ),
            createPost('https://i.imgur.com/KFVpL64.jpg',
                'DUIS AUTE IRURE DOLOR IN HENDERIT IN VOLUPTATE.',
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...'
            ),
            createPost('https://i.imgur.com/Mb76qqz.jpg',
                'DUIS AUTE IRURE DOLOR IN HENDERIT IN VOLUPTATE.',
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...'
            )
        ]
    }
    gPosts = posts;
    savePostsToStorage();
}

function createPost(imgUrl, title, text1, text2) {
    return {
        imgUrl,
        title,
        text1,
        text2
    }
}

function getPosts() {
    var postsStorage = loadPostsFromStrorage();
    return postsStorage ? postsStorage : gPosts;
}

function loadPostsFromStrorage() {
    return loadFromStorage(POSTS_KEY);
}

function savePostsToStorage() {
    saveToStorage(POSTS_KEY, getPosts());
}