document.addEventListener('DOMContentLoaded', function() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const blogPostsContainer = document.getElementById('blogPosts');
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>By: ${post.username}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});

function goBack() {
    window.history.back();
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
