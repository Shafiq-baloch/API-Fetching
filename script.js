let postContainer = document.getElementById("posts");
let loadingText = document.getElementById("loading");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    loadingText.style.display = "none"; // Hide loader

    for (let i = 0; i < 10; i++) {
      let post = data[i];

      let card = document.createElement("div");
      card.classList.add("card");

      let title = document.createElement("h3");
      title.innerText = post.title;

      let body = document.createElement("p");
      body.innerText = post.body;

      card.appendChild(title);
      card.appendChild(body);
      postContainer.appendChild(card);
    }
  })
 .catch(function(error) {
  loadingText.style.display = "none"; // hide loader just in case

  const errorBox = document.createElement("div");
  errorBox.innerText = "❌ Error: Failed to load posts.";
  errorBox.style.color = "white";
  errorBox.style.backgroundColor = "red";
  errorBox.style.padding = "15px";
  errorBox.style.textAlign = "center";
  errorBox.style.borderRadius = "8px";
  errorBox.style.fontWeight = "bold";

  postContainer.appendChild(errorBox);

  console.log("Error occurred:", error);
});
