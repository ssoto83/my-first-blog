document.getElementById('blogForm').addEventListener('submit', function(event) {
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

        // Save to localStorage
        let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.push(post);
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        // Redirect to blog.html
        window.location.href = 'blog.html';
    } else {
        alert('Please complete all fields.');
    }
});
