// let a = [1, 2, 3].pop()
// console.log(a)

const obj1 = {
	type : 'button',
	text : 'кнопик',
	render : function () {
		const b = document.createElement(this.type);
		b.textContent = this.text;
		return b;
	}
}

// document.querySelector('#id1').append(obj1.render());

const rendEl = obj1.render;
const renderP = rendEl.bind({type : 'p',
	text : 'Помните, в ботинке на опушке жила-была старушка'})
	document.querySelector('#id1').append(renderP());

	function getWidth() {
		console.log(this.offsetWidth);
	}
let c = document.querySelector('.test2');
document.querySelector('.test1').onclick = getWidth.bind(c)


const arr = new Set(['done', 'success', 'finish']);

const society = [
	{ name: 'johny', status: 'done' },
	{ name: 'rita', status: 'success' },
	{ name: 'flora', status: 'apchy' }
];

const iteration = society
	.filter(people => arr.has(people.status))
	.map(people => people.name);

console.log(iteration);