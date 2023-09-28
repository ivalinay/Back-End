const http = require("http");
const homeHtml = require("./views/home/index.js");
const siteCss = require("./content/styles/site.js");
const addBreedHtml = require("./views/addBreed.js");
const catTemplate = require("./views/home/catTemplate.js");
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

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/") {
    const imageUrlPattern = /{{imageUrl}}/g;
    const namePattern = /{{name}}/g;
    const breedPatern = /{{breed}}/g;
    const descriptionPattern = /{{description}}/g;
    const catHtml = cats.map((cat) =>
      catTemplate
        .replace(imageUrlPattern, cat.imageUrl)
        .replace(namePattern, cat.name)
        .replace(breedPatern, cat.breed)
        .replace(descriptionPattern, cat.description)
    );

    const homeHtmlTemplate = homeHtml.replace("{{cats}}", catHtml);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homeHtmlTemplate);
  } else if (url === "/content/styles/site.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(siteCss);
  } else if (url === "/cats/add-breed") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(addBreedHtml);
  }

  res.end();
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
