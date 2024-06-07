document.addEventListener('DOMContentLoaded', () =>{

    const cardsArray = [
        'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
        'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H',
    ];

    let gameBoard = document.getElementById('game-board');
    let shuffleCards = shuffle(cardsArray);
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    function shuffle(array){
        for (let i = array.lenght - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function createBoard(){
        shuffleCards.forEach(symbol => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.dataset.symbol = symbol;
            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }

    function flipCard(){
        if (lockBoard)return;
        if (this === firstCard) return;

        this.classList.add('flipped');
        this.textContent = this.dataset.symbol;

        if(!firstCard){
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;

        checkForMatch();
    }

    function checkForMatch(){
        if (firstCard.dataset.symbol === secondCard.dataset.symbol){
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards(){
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');

        resetBoard();
    }

    function unflipCards(){
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard.textContent = '';
            secondCard.textContent = '';

            resetBoard();
        }, 1000);
    }

    function resetBoard(){
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    createBoard();
});