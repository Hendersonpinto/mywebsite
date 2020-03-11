const skills = document.querySelectorAll('.skill');
const cardArea = document.querySelector('.section--skillset__cards');
const cards = document.querySelectorAll('.skillcard');
const cardContent = document.querySelectorAll('.skillcard__content');
const labels = document.querySelectorAll('skillcard__label')
let lastClicked;

const technologies = {
	backend: {
		title: ['PostgreSQL', 'Node.js', 'Ruby'],
		content: [
			'PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language',
			'"JavaScript everywhere", unifying web-application development around a single programming language.',
			'A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.'
		],
		logos: ['postgresql.svg', 'node.svg', 'Ruby.svg']
	},
	frontend: {
		title: ['JavaScript (ES6)', 'Ruby on Rails', 'Sass'],
		content: [
			'Ajax calls, arrow functions, promises, event handling and more',
			'Object oriented programming, ActiveRecord, Ruby gems',
			'CSS preprocessor which enables the use of functions, variables and eases browser compatibility'
		],
		logos: ['Javascript.svg', 'Rails.png', 'Sass.png']
	},
	ux: {
		title: ['Full responsiveness', 'Wireframing and prototyping', 'Browser compatibility'],
		content: [
			'Ajax calls, arrow functions, promises, event handling and more',
			'Object oriented programming, ActiveRecord, Ruby gems',
			'CSS preprocessor which enables the use of functions, variables and eases browser compatibility'
		],
		logos: ['responsive.svg', 'prototype.svg', 'browser.svg']
	},
	management: {
		title: ['Project planning', 'Version control', 'Deployment'],
		content: [
			'Ajax calls, arrow functions, promises, event handling and more',
			'Object oriented programming, ActiveRecord, Ruby gems',
			'CSS preprocessor which enables the use of functions, variables and eases browser compatibility'
		],
		logos: ['management.svg', 'github.svg', 'deploy.svg']
	}
};

skills.forEach((skill) => {
	skill.addEventListener('click', function (event) {
		if (this.dataset.skill != lastClicked) {
			cardArea.style.opacity = 0;
			cardArea.addEventListener('transitionend', () => {
				let skill = event.target.parentElement.dataset.skill;
				let i = 0;
				cards.forEach((card) => {
					card.querySelector('.skillcard__title').innerHTML = technologies[`${skill}`].title[i];
					card.querySelector('.skillcard__content').innerHTML = technologies[`${skill}`].content[i];
					console.log(`/app/images/${technologies[skill].logos[i]}`);
					card.querySelector('.skillcard__label').src = `/app/images/${technologies[skill].logos[i]}`
					i++;
				});
				cardArea.style.opacity = 1;
			});
			lastClicked = this.dataset.skill;
		}
	});
});