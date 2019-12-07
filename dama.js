$(function(){
var initialPosition ={
 a8 :'A',
 b8 :'A',
 c8 :'A',
 d8 :'A',
 e8 :'A',
 f8 :'A',
 g8 :'A',
 h8 :'A',

 a7 :'A',
 b7 :'A',
 c7 :'A',
 d7 :'A',
 e7 :'A',
 f7 :'A',
 g7 :'A',
 h7 :'A',

 a2 :'B',
 b2 :'B',
 c2 :'B',
 d2 :'B',
 e2 :'B',
 f2 :'B',
 g2 :'B',
 h2 :'B',

 a1 :'B',
 b1 :'B',
 c1 :'B',
 d1 :'B',
 e1 :'B',
 f1 :'B',
 g1 :'B',
 h1 :'B',

};


function newgame(){
	$('.square-board').each(function(){
		var square = $(this);
		var sq = square.attr('id');
		if (objsearchIndex(initialPosition,sq) !=null ) {
			$(this).html('<div class="piece '+initialPosition[sq]+'"></div>')
		}
	});
}
function printplanche(){
	var light = 1;
	var colums =['a','b','c','d','e','f','g','h'];
	for(var l=8;l>=1;--l){
		for(var c=0;c < colums.length;++c)
		{
			var sq = colums[c]+l;
			var lightdark =(light== 1) ? 'light' : 'dark';
		 $('.board').append('<div class="square-board '+lightdark+'" id="'+sq+'"></div>');
		light ^= 1;
		}
		light ^= 1;
	}
}

printplanche();
newgame();


	function objSeach(obj ,valeur){
		var retorno =null;
		$.each(obj,function(i,val)
          {
          	if (val == valeur) {
          		retorno = i;
          	}

  			});
		return retorno;
	}
function objsearchIndex(obj ,index){
		var retorno =null;
		$.each(obj,function(i,val)
          {
          	if (i== index) {
          		retorno =i;
          	}

  			});
		return retorno;
	}
	});