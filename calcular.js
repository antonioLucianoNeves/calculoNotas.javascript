    var Calcular = new function() {
      this.totalNotas = 0;		
		
	  this.exibirEntradas = function() {
		 this.totalNotas = parseInt(document.getElementById("totalNotas").value);
		 var calculoDiv = document.getElementById("calculo");
		 calculoDiv.style.display = "block";
		
		 var elementoHtml = '';
		 for (var i = 0; i < this.totalNotas; i++){
             elementoHtml += '<input type="text" id="Nota_' + i +'"><br />';
		 }
		 var entradasDiv = document.getElementById("entradas");
		 entradasDiv.innerHTML = elementoHtml;
		};
      this.calcularMedia = function(){
		   var total = 0;
           for (var i = 0; i < this.totalNotas; i++){
		       total += parseFloat(document.getElementById("Nota_" + i).value);
		   }  			   
		   var media = total / this.totalNotas;
		   //alert("A media e: " + media);
		   
		   var resultadoDiv = document.getElementById("resultado");
		       if (media >= 6){
		          resultadoDiv.innerHTML = '<h1 style="color:#008800">' + media +"</h1>";
			   } else {
                  resultadoDiv.innerHTML = '<h1 style="color:#880000">' + media +"</h1>";
			   }				  
	  };		
	};