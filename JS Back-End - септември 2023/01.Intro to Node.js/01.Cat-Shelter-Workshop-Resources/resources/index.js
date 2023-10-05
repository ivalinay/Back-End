const http = require("http");
const fs = require("fs/promises");
const PORT = 5555;

const cats = [
  {
    imageUrl: "https://i.ytimg.com/vi/E9iP8jdtYZ0/maxresdefault.jpg",
    name: "Tsunami",
    breed: "ulichna1",
    description: "Very cute cat1!",
  },
  {
    imageUrl: "https://i.ytimg.com/vi/E9iP8jdtYZ0/maxresdefault.jpg",
    name: "Pesho",
    breed: "ulichna2",
    description: "Very cute cat2!",
  },
  {
    imageUrl: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    name: "Dancho",
    breed: "ulichna3",
    description: "Very cute cat3!",
  },
  {
    imageUrl: "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?cs=srgb&dl=pexels-peng-louis-1643457.jpg&fm=jpg",
    name: "Mariika",
    breed: "ulichna4",
    description: "Very cute cat4!",
  },
];

const server = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === "/") {
    const imageUrlPattern = /{{imageUrl}}/g;
    const namePattern = /{{name}}/g;
    const breedPatern = /{{breed}}/g;
    const descriptionPattern = /{{description}}/g;

    const catTemplate = await fs.readFile("./views/home/catTemplate.html", "utf-8");
    const homeHtml = await fs.readFile("./views/home/index.html", "utf-8");

    const catHtml = cats
      .map((cat) =>
        catTemplate
          .replace(imageUrlPattern, cat.imageUrl)
          .replace(namePattern, cat.name)
          .replace(breedPatern, cat.breed)
          .replace(descriptionPattern, cat.description)
      )
      .join("");

    const homeHtmlTemplate = homeHtml.replace("{{cats}}", catHtml);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homeHtmlTemplate);
  } else if (url === "/content/styles/site.css") {
    const siteCss = await fs.readFile("./content/styles/site.css", "utf-8");

    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(siteCss);
  } else if (url === "/cats/add-breed") {
    const addBreedHtml = await fs.readFile("./views/addBreed.html", "utf-8");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(addBreedHtml);
  }

  res.end();
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
