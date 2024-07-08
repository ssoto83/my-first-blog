document.getElementById('blogForm').addEventListener('submit', function(event) {
    // to prevent the page from refreshing
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;

    if (username && title && content) {
        const post = {
            username,
            title,
            content
        };

        // Saving username, blog tittle and blog content to localStorage 
        let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.push(post);
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        // Redirecting to blog.html
        window.location.href = 'blog.html';
    } else {
        alert('Please fill out this field');
    }
});
