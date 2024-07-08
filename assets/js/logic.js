document.addEventListener('DOMContentLoaded', function() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const blogPostsContainer = document.getElementById('blogPosts');
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>Title: ${post.title}</h2>
            <p>Content: ${post.content}</p>
            <p>Blog written by: ${post.username}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});
