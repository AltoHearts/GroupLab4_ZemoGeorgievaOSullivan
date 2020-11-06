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
  document.getElementById("articleID").innerHTML = "<h1>Iao Valley, Hawaii</h1><p><img src=\"iao-needle-stream.jpg\" width=\"300px\">Iao Valley is a lush, stream-cut valley in West Maui, Hawaii, located 3.1 miles west of Wailuku. Because of its natural environment and history, it has become a tourist location. It was designated a National Natural Landmark in 1972.</p><div class=\"clearfix\"><div class=\"img-container\"> <img src=\"Iao-Valley-in-Maui-Hawaii.jpg\" alt=\"Iao vally Hawaii\" style=\"width:100%\"> </div><div class=\"img-container\"> <img src=\"iaovalleypark.jpg\" alt=\"Ioa Vally State Park\" style=\"width:100%\"></div> <div class=\"img-container\"> <img src=\"ioastatepark.jpg\" alt=\"Ioa River\" style=\"width:100%\"></div></div>"

}