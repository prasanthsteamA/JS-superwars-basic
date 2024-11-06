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
    let i=0;
    let type=true;
    for(let item of players){
        const obj={};
        obj.name=`${item}`;
        obj.strength=getRandomStrength();
        obj.image=`images/super-${i+1}.png`;
        obj.type=type?"hero":"villain";
        i=i+1;
        type=!type;
        detailedPlayers.push(obj);
        console.log(obj);
    }
    // Create players using for loop
    // Type your code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random()*100);
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';


    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for(let player of players){
        if(player.type===type){
            fragment += `
            <div class="player">
                <img src="${player.image}" alt="">
                <div class="name">${player.name}</div>
                <div class="strength">${player.strength}</div>
            </div>
        `;
        }
        

    }


    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {
   
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}