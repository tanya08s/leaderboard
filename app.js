const Second_container = document.querySelector(".second_container");
// console.log(Second_container);

const playerInfo = [];

const generateNewCard = (playerData) => `
<div class="second" id=${playerData.id}>
        <div class="second_1">
            <div>${playerData.firstName}</div>
            <div>${playerData.lastName}</div>
            <div>${playerData.Country}</div>
            <div>${playerData.Score}</div>
            
        </div>
        <div class="second_2">
            <div class="display"><img style="width: 20px;" src="./dustbin-svgrepo-com.svg"/></div>
            <div class="display">+5</div>
            <div class="display">-5</div>
        </div>
    </div>
`;

const loadInitialData = () => {
    const getCardData = localStorage.getItem("player_array");
    const {cards} = JSON.parse(getCardData);
    cards.map((card_obj)=>{
        Second_container.insertAdjacentHTML("afterend",generateNewCard(card_obj));
        playerInfo.push(card_obj);
    });
}

const savePlayerData = () => {
    const playerData = {
        id: `${Date.now()}`,
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        Country: document.getElementById("country").value,
        Score: document.getElementById("score").value
    }
    // console.log(playerData);
    Second_container.insertAdjacentHTML("afterend", generateNewCard(playerData));

    playerInfo.push(playerData);
    localStorage.setItem("player_array", JSON.stringify({cards:playerInfo}));
     
} ;