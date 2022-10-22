# Fetching posts comments lab

## Overview
Fetching data from an API endpoint is one of the main concepts that a front-end web developer needs to know. 
In this lab you're going to receive data from an endpoint and display it on the webpage.

ENDPOINT: 
```js
const API_URL = "https://jsonplaceholder.typicode.com/posts/{id number here}/comments"
```
If https://jsonplaceholder.typicode.com is the link to the whole API, then an endpoint is the path you go to in the API to get data relating to that particular thing. So **posts** endpoint gives us info about posts, **users** endpoint gives us data about users and so on.

You will also notice that we have posts in the url which means that we want to look in the posts, then we have The <code>{id number here}</code> which gives us the ability to look for info relating to individual posts. Finally, we have comments at the end of the endpoint url which means that we want the comments for a particular post.

Run the following url in the browser; it will give you all the comments for the 2nd post. Treat this as an example of a **VALID** url.
https://jsonplaceholder.typicode.com/posts/2/comments

## Instructions
1. In the HTML there is an input called <code>postnumber</code>, a submit button, and a div called <code>comments</code>
2. The user will insert the the post's id number in the input and will click on Get comments which will show him all the comments for that post.
3. Replace <code>{id number here}</code> in the endpoint with the value inserted in the input
4. Fetch all the comments on a post
5. Show the comments in the comments section in HTML
6. If the user inserted an invalid post, show a **Can't find comments for this post** message for the user.

### Bonus:
If you finished this early. Try to do create a list of all posts and by clicking on a post you get all the comments on the page. This way, we don't to type in the post id and that is a better use experience :D 


If you have issues, google them.
<br>
If you still have issues, talk to your friends in the same room.
<br>
If you still have issues, talk to your instructors.
<br>
<br>
DON'T SUFFER ALONE!

Good luck and have fun :D 