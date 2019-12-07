$(function(){

function printplanche(){
	var light = 1;
	var colums =['a','b','c','d','e','f','g','h'];
	for(var l=8;l>=1;--l){
		for(var c=0;c < colums.length;++c)
		{
			var sq = colums[c]+l;
			var lightdark =(light== 1)? 'light' : 'dark';
		 $('.board').append('<div class="square-board '+lightdark+'" id="'+sq+'">'+sq+'</div>');
		light ^= 1;
		}
		light ^= 1;
	}
}

printplanche();


	function objseach(obj ,valeur){
		var retorno =null;
		$.each(obj,function(i,val)
          {
          	if (val == valeur) {
          		return i;
          	}

  			});
		return retorno;
	}



function objseach(obj ,index){
		var retorno =null;
		$.each(obj,function(i,val)
          {
          	if (i== index) {
          		return i;
          	}

  			});
		return retorno;
	}



	});