const url = "http://localhost:3030/jsonstore/collections/books";
const tbody = document.querySelector("tbody");
const loadBtn = document.getElementById("loadBooks");
const form = document.querySelector("form");

loadBtn.addEventListener("click", loadBooks);
form.addEventListener("submit", createBook);

async function loadBooks() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    tbody.innerHTML = ""; // Clear existing content
    for (const id in data) {
      const book = data[id];
      const row = createRow(id, book.title, book.author);
      tbody.appendChild(row);
    }
  } catch (error) {
    console.error("Error loading books:", error);
  }
}

function createRow(id, title, author) {
  const row = document.createElement("tr");
  const titleCell = document.createElement("td");
  titleCell.textContent = title;
  const authorCell = document.createElement("td");
  authorCell.textContent = author;
  const actionsCell = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => editBook(id, title, author));
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteBook(id));
  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);
  row.appendChild(titleCell);
  row.appendChild(authorCell);
  row.appendChild(actionsCell);
  return row;
}

async function createBook(event) {
  event.preventDefault();
  const titleInput = form.querySelector('input[name="title"]');
  const authorInput = form.querySelector('input[name="author"]');
  const title = titleInput.value;
  const author = authorInput.value;

  if (title.trim() === "" || author.trim() === "") {
    return; // Don't create if fields are empty
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author }),
    });

    if (response.ok) {
      titleInput.value = "";
      authorInput.value = "";
      loadBooks(); // Reload books after successful creation
    } else {
      console.error("Error creating book:", response.statusText);
    }
  } catch (error) {
    console.error("Error creating book:", error);
  }
}

async function deleteBook(id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      loadBooks(); // Reload books after successful deletion
    } else {
      console.error("Error deleting book:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting book:", error);
  }
}

async function editBook(id, title, author) {
  const titleInput = form.querySelector('input[name="title"]');
  const authorInput = form.querySelector('input[name="author"]');
  titleInput.value = title;
  authorInput.value = author;

  form.removeEventListener("submit", createBook); // Remove previous submit listener
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const newTitle = titleInput.value;
    const newAuthor = authorInput.value;

    if (newTitle.trim() === "" || newAuthor.trim() === "") {
      return; // Don't update if fields are empty
    }

    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, author: newAuthor }),
      });

      if (response.ok) {
        titleInput.value = "";
        authorInput.value = "";
        loadBooks(); // Reload books after successful update
        form.removeEventListener("submit", this);
        form.addEventListener("submit", createBook); // Restore original submit listener
      } else {
        console.error("Error updating book:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  });
}
