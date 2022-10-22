// 1. In the HTML there is an input called <code>postnumber</code>, a submit button, and a div called <code>comments</code>
// 2. The user will insert the the post's id number in the input and will click on Get comments which will show him all the comments for that post.
// 3. Replace <code>{id number here}</code> in the endpoint with the value inserted in the input
// 4. Fetch all the comments on a post
// 5. Show the comments in the comments section in HTML
// 6. If the user inserted an invalid post, show a **Can't find comments for this post** message for the user.

document.getElementById("getcomments").addEventListener("click", function (e) {
  e.preventDefault();
  const id = document.getElementById("postnumber").value;
  fetchComments(id);
  fetchPosts(id);
});

const commentsContainer = document.getElementById("comments");
const postsContainer = document.getElementById("posts");

// Fetch all the comments on a post and show the comments in the comments section in HTML
// If the user inserted an invalid post, show a **Can't find comments for this post** message for the user.

function fetchComments(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((data) => {
      commentsContainer.innerHTML = "";
      if (data.length === 0) {
        const commentElement = document.createElement("p");
        commentElement.innerText = "Can't find comments for this post";
        commentsContainer.appendChild(commentElement);
      } else {
        data.forEach((comment) => {
          const commentElement = document.createElement("p");
          commentElement.innerText = comment.body;
          commentsContainer.appendChild(commentElement);
        });
      }
    });
}

// create a list of all posts and show the posts in the HTML in the posts section

function fetchPosts(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      postsContainer.innerHTML = "";
      const postElement = document.createElement("p");
      postElement.innerText = data.body;
      postsContainer.appendChild(postElement);
    });
}
