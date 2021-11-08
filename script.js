document.addEventListener('DOMContentLoaded',()=>{
//card options
	const cardArray = [
	{
		name:'fries',
		img:'images/fries.png'

	},
	{
		name:'cheeseburger',
		img:'images/cheeseburger.png'

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
	var cardsChosen = []
	var cardsChosenId= []
	//create the board 
	function createBoard(){
		for (let i=0 ; i<=cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('src', 'images/blank.png')
			card.setAttribute('data-id', i)
			card.addEventListener('click',flipcard)
			grid.appendChild(card)

		}
	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		if (cardsChosen[0] === cardsChosen[1]){
			alert('you found a match')
		}
	}
	function flipCard(){
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if (cardsChosen.length === 2){
			setTimeout(checkForMatch, 500)
		}
	}


	}
	createBoard()
})