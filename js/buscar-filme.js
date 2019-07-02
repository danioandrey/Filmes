
 
function buscaFilme (api) {
	var xhr = new XMLHttpRequest();
	
	xhr.open("GET", `https://api-content.ingresso.com/v0/templates/highlights/${api}/partnership/home`);
	
	xhr.addEventListener("load", function(){
		var resposta = xhr.responseText;
		var title = JSON.parse(resposta);
		
		
		
		
		for (i=0; i< title.length; i++){
						 
				console.log(title[i]);
				let nome  = title[i].event.title;
				let url = title[i].event.images[0].url;
				let trailer = title[i].event.trailers[0].embeddedUrl;
				const filme = document.getElementById('movie');	
				renderlista(url,nome,trailer, filme);

				 			

			
		}
			
		
	});
	
	xhr.send();
	
} 

