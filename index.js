function rollDice(){
    const rollDice = Math.floor(Math.random()*6)+1;
    document.getElementById('DiceResult').textContent = `you rolledice: ${rollDice}`;
}