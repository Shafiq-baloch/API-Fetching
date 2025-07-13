document.addEventListener("DOMContentLoaded", function () {
  let postContainer = document.getElementById("posts");
  let loadingText = document.getElementById("loading");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(function (data) {
      loadingText.style.display = "none";

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
    .catch(function (error) {
      loadingText.style.display = "none";

      const errorBox = document.createElement("div");
      errorBox.innerText = "❌ Error: Unable to fetch posts. Please check your connection.";
      errorBox.style.color = "white";
      errorBox.style.backgroundColor = "red";
      errorBox.style.padding = "15px";
      errorBox.style.textAlign = "center";
      errorBox.style.borderRadius = "8px";
      errorBox.style.fontWeight = "bold";
      errorBox.style.marginTop = "20px";

      postContainer.appendChild(errorBox);

      console.error("Error occurred:", error);
    });
});
