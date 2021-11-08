document.addEventListener('DOMContentLoaded',()=>{
//card options
	const cardArray = [
	{
		name:'fries',
		img:'images/fries.png'

	},
	{
		name:'cheesburger',
		img:'images/cheesburger.png'

	},
	{
		name:'hotdog',
		img:'images/hotdog.png'

	},
	{
		name:'ice-cream',
		img:'images/ice-cream.png'

	},
	{
		name:'milkshake',
		img:'images/milkshake.png'

	},
	{
		name:'pizza',
		img:'images/pizza.png'

	},
	{
		name:'white',
		img:'images/white.png'

	}
	]
	const grid = document.querySelector('.grid')
	//create the board 
	function createBoard(){
		for (let i=0 ; i<=cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('src', 'images/blank.png')
			card.setAttribute('data-id', i)
			//card.addEventListener('click',flipcard)
			grid.appendChild(card)

		}


	}
	createBoard()
})