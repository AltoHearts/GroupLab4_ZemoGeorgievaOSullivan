document.getElementById("LondonListID").addEventListener("click",displayLondon);
document.getElementById("MaldivesListID").addEventListener("click", displayMaldives);
document.getElementById("IaoListID").addEventListener("click",displayIao);

function displayLondon() 
{
  document.getElementById("articleID").innerHTML = "<h1>Zakynthos, Greece</h1><img src=\"greece.jpg\" width=\"300px\"><p>Zakynthos is a Greek island in the Ionian Sea and a well-known summer resort. The harbor city of Zakynthos is the capital and major hub, centered around waterfront Solomos Square. Popular beaches like Agios Nikolaos, Alykanas and Tsilivi offer swimming and water sports. Accessed by boat, Navagio beach is the site of a famed 1980 shipwreck resting in a sandy cove framed by cliffs.</p>"
}
			
function displayMaldives() 
{
  document.getElementById("articleID").innerHTML = "<h1>Maldives</h1><img src=\"maldives.jpeg\" width=\"300px\"><p>Maldives is a country in South Asia offically called the Republic of Maldives. Maldives is a archipelagic island located in the Arabian Sea of the Indian Ocean. Maldives is about 700 meters from Asia Mainland. Maldives is known as a beautiful island resort but may disapear in the forseable future due to the sea level rise.</p><div class=\"clearfix\"><div class=\"img-container\"> <img src=\"maldives2.jpg\" alt=\"Maldives Capital Male\" style=\"width:100%\"> </div><div class=\"img-container\"> <img src=\"maldives3.jpg\" alt=\"Maldives Dock\" style=\"width:100%\"></div>"
}
	
function displayIao() 
{
  document.getElementById("articleID").innerHTML = "<h1>Iao Valley, Hawaii</h1><p><img src=\"iao-needle-stream.jpg\" width=\"300px\"><br />Iao Valley is a lush, stream-cut valley in West Maui, Hawaii, located 3.1 miles west of Wailuku. Because of its natural environment and history, it has become a tourist location. It was designated a National Natural Landmark in 1972.</p><div class=\"clearfix\"><div class=\"img-container\"> <img src=\"Iao-Valley-in-Maui-Hawaii.jpg\" alt=\"Iao vally Hawaii\" style=\"width:100%\"> </div><div class=\"img-container\"> <img src=\"iaovalleypark.jpg\" alt=\"Ioa Vally State Park\" style=\"width:100%\"></div> <div class=\"img-container\"> <img src=\"ioastatepark.jpg\" alt=\"Ioa River\" style=\"width:100%\"></div></div>"

}