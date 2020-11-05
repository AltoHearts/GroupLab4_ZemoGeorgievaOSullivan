document.getElementById("LondonListID").addEventListener("click",displayLondon);
document.getElementById("ParisListID").addEventListener("click", displayParis);
document.getElementById("IaoListID").addEventListener("click", displayIao);

function displayLondon() 
{
  document.getElementById("articleID").innerHTML = "<h1>London</h1>		<p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>	<p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>"
}
			
function displayParis() 
{
  document.getElementById("articleID").innerHTML = "<h1>Paris</h1><p>Paris is great</p>"
}
	
function displayIao() 
{
  document.getElementById("articleID").innerHTML = "<h1>Iao Valley, Hawaii</h1><p>Iao Valley is a lush, stream-cut valley in West Maui, Hawaii, located 3.1 miles west of Wailuku. Because of its natural environment and history, it has become a tourist location. <img src=\"iao-needle-stream.jpg\" width=\"300px\"> It was designated a National Natural Landmark in 1972."
}