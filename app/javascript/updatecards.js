const skills = document.querySelectorAll(".skill");
const cardArea = document.querySelector(".section--skillset__cards");
const cards = document.querySelectorAll(".skillcard");
const cardContent = document.querySelectorAll(".skillcard__content");
const labels = document.querySelectorAll("skillcard__label");
let lastClicked;

const technologies = {
  backend: {
    title: ["PostgreSQL", "Node.js", "Ruby on Rails"],
    content: [
      "PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language",
      '"JavaScript everywhere", unifying web-application development around a single programming language.',
      "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.",
    ],
    logos: ["postgresql.svg", "node.svg", "rails.svg"],
  },
  frontend: {
    title: ["React.js", "HTML/CSS", "Sass"],
    content: [
      "My main front-end framework when developing single page applications, with either Node.js or Rails on the back-end. Implementing React hooks and/or Redux state management library for easily share state and code organization.",
      "Beautiful components and layouts designs by applying the latest HTML/CSS technologies, like CSS flexbox, grids and bootstrap.",
      "CSS preprocessor which enables the use of functions, variables and eases browser compatibility",
    ],
    logos: ["react.png", "css.svg", "sass.svg"],
  },
  ux: {
    title: [
      "Full responsiveness",
      "Wireframing and prototyping",
      "Browser   compatibility  ",
    ],
    content: [
      "Efficient and device-size independent designs by using media queries, CSS grid, Bootstrap framework and much more.",
      "Creation of medium to high-fidelity mockups following the most recent web development practices.",
      "There is nothing to worry about. Your scripts, CSS files and HTML codes will be fully functional on the different browsers available.",
    ],
    logos: ["responsive.svg", "prototype.svg", "browser.svg"],
  },
  management: {
    title: ["Project execution", "Version control", "Deployment"],
    content: [
      "From develop of product's target, unique value proposition, idea validation and user stories to deploy and pitch.",
      "Complete understanding on github and git workflow for team collaboration and code version control.",
      "Deployment of apps and websites using heroku and AWS as the main services.",
    ],
    logos: ["management.svg", "github.svg", "deploy.svg"],
  },
};

skills.forEach((skill) => {
  skill.addEventListener("click", function (event) {
    skills.forEach((skill) => {
      skill.classList.remove("active");
    });
    this.classList.toggle("active");
    if (this.dataset.skill != lastClicked) {
      cardArea.style.opacity = 0;
      cardArea.addEventListener("transitionend", () => {
        let skill = event.target.parentElement.dataset.skill;
        let i = 0;
        cards.forEach((card) => {
          card.querySelector(".skillcard__title").innerHTML =
            technologies[`${skill}`].title[i];
          card.querySelector(".skillcard__content").innerHTML =
            technologies[`${skill}`].content[i];
          card.querySelector(
            ".skillcard__label"
          ).src = `/app/images/${technologies[skill].logos[i]}`;
          i++;
        });
        cardArea.style.opacity = 1;
      });
      lastClicked = this.dataset.skill;
    }
  });
});
