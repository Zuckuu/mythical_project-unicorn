const cards = document.querySelectorAll('.card');
let cardOne, cardTwo;

function flipCard(e){
    let clickedCard = e.target
    
    if(clickedCard !== cardOne) {
        clickedCard.classList.add('flip');

        if(!cardOne){
            return cardOne = clickedCard;
        }
        
        cardTwo = clickedCard;

        let cardOneImg = cardOne.querySelector('img').src,
        cardTwoImg = cardTwo.querySelector('img').src;
        console.log(cardOneImg,cardTwoImg);
    }   
}



cards.forEach(card => {
    card.addEventListener('click',flipCard);
})