var scores,roundscore,activePlayer,dice;


function init(){
scores=[0,0];
roundscore=0;
activePlayer=0;
document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0';
document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');

}


init();


document.querySelector('.dice').style.display='none';

//on rolling dice

document.querySelector('.btn-roll').addEventListener('click',function(){
	var dice=Math.floor(Math.random()*6)+1;
	var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
	 if(dice!==1){
	 	roundscore+=dice;
	 	document.querySelector('#current-'+activePlayer).textContent=roundscore;
	 }
	 else{
	 	nextPlyer();
	 }

});

//on holding buton

document.querySelector('.btn-hold').addEventListener('click',function()
{
	scores[activePlayer]+=roundscore;
	document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
	if(scores[activePlayer]>=100)
	{
		document.querySelector('#name-'+activePlayer).textContent='Winner';
		document.querySelector('.dice').style.display='none';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
	}
	else
	nextPlyer();
	
});

// calling the next player
function nextPlyer(){
	activePlayer===0?activePlayer=1:activePlayer=0;
	roundscore=0;
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	 	document.querySelector('.player-1-panel').classList.toggle('active');
	 	document.querySelector('.dice').style.display='none';

}
document.querySelector(".btn-new").addEventListener('click',init);
