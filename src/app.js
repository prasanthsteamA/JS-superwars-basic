const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];



// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    let isHero=true;
    for (let i=0 ;i<players.length;i++){
        let player={};
        player.name=players[i];
        player.strength = getRandomStrength();
        player.image=`./images/super-${i+1}.png`;
        player.type=isHero?"hero":"villain"
        isHero=!isHero;
        detailedPlayers.push(player)
    }

    // console.log(detailedPlayers)
    return detailedPlayers;
}





// getting random strength
const getRandomStrength = () => {
    return Math.floor((Math.random()*100)+1)
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    
    for (let i=0 ; i<players.length;i++){
        if(players[i].type==type){
        fragment+= `<div class="player">
    <img src="${players[i].image}" alt="">
    <div class="name">${players[i].name}</div>
    <div class="strength">${players[i].strength}</div>
</div>`
        }
          
    }
    // console.log("fragment",fragment,type)

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');


    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');


}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}