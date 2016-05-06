jQuery(document).ready(function ($) {
var distanciaAnim;
//Damos medidas de height a los div
if($( window ).width() >= 600 ){
	$(".contenedor-imagen").css({"height": $( window ).height()});
	$(".contenedor-texto").css({"height": $( window ).height()});
	$(".contenedor-trabajos").css({"height": $( window ).height()});
	$(".contenedor-ampliacion").css({"height": $( window ).height()});
	$(".ampliacion__imagen").css({"height": $( window ).height()});
	distanciaAnim = $( window ).height();
}else{
	$("#nav").html("<div class='logo-moviles'></div>");
	$(".contenedor-imagen").css({"height": $( window ).height()})
	$("#portafolio").css({"display":"none"});
	$("#perfil").css({"display":"none"});
	$("#inicio>").find(".block-P").append("<ul class='contacto-moviles'><li><i class='fa fa-whatsapp' aria-hidden='true'></i> <a href='tel:+573013802590'>3013802590</a></li><li><i class='fa fa-paper-plane' aria-hidden='true'></i><a href='mailto:info@camilo-tabares.com'>info@camilo-tabares.com</a></li><li class='ds'><i class='fa fa-commenting-o' aria-hidden='true'></i>CHAT ONLINE</li></ul>");
	$(".block-P > p").html("FrontEnd developer, busco soluciones creativas para mis clientes a través de paginas web personalizadas para trabajar desde wordpress, contactame");
	$(".block-P > h1").addClass("Mr-movil");
	$(".block-P > p").addClass("Mr-movil");
	$(".ds").on("click", function(){
		$(".contenedor-chat").stop().animate({"top": "0px"},{ duration: 'slow',easing: 'easeOutQuad'});
	})
}
window.onresize = function() {

    if ($( window ).width() >= 600) { 
    	if ( distanciaAnim != $( window ).height() ) {
    		location.reload();
    	};
	}

}



//Animacion Botones Portafolio
//ANIMCACION MENU
$(".menu-icono").on("click", function(){
	$(this).stop().animate({"top" : "-100px"}, { duration: 'slow',easing: 'easeOutQuad', complete: function(){
			$(".MenuAnim").stop().animate({ "left" : "0%"},{ duration: 'slow',easing: 'easeOutQuad'});
		}
	});
})
$("nav>ul>li").each(function(){

	$(this).mouseover(function() {
		$(this).stop().animate({ borderColor: "#e14718", color: "#e14718"}, 200);
		$(this).find("a").stop().animate({ color: "#e14718"}, 200);

	  }).mouseout(function() {
		$(this).stop().animate({borderColor: "#313234"}, 800);
		$(this).find("a").stop().animate({ color: "#313234"}, 800);
	  });
	//ACCIONES PARA CLICK AMPLIAR INFO
	$( this ).on( "click", function() {
		var contLink = $(this).html();
		function nombreSecc(e){
			var str = e.split('>');
			var str2 = str[1];
			var strInicio = str2.replace("</a", "");
			var strInicioEs = strInicio.replace(/\s+/, "");
			return strInicioEs.toLowerCase();
		};
		var seccion = nombreSecc(contLink);
		console.log(seccion);
		if (seccion == "home" ) {
			seccion = "inicio";
		};
		if (seccion == "mywork" ) {
			seccion = "portafolio";
		};
		if (seccion == "profile" ) {
			seccion = "perfil";
		};
		if (seccion == "chat" ) {
			seccion = "hablemos";
		};
		$(".MenuAnim").stop().animate({ "left" : "100%"},{ duration: 'slow',easing: 'easeOutQuad', complete: function(){
			$(".menu-icono").stop().animate({"top": "0px"},{ duration: 'slow',easing: 'easeOutQuad', complete: function(){
					if (seccion == "inicio") {
						$(".CG").stop().animate({"top": "-"+(distanciaAnim*0)+"px" },{ duration: 'slow',easing: 'easeOutQuad'});
					}
					else if(seccion == "portafolio"){
						$(".CG").stop().animate({"top": "-"+(distanciaAnim*1)+"px" },{ duration: 'slow',easing: 'easeOutQuad'});
					}
					else if(seccion == "perfil"){
						$(".CG").stop().animate({"top": "-"+(distanciaAnim*2)+"px" },{ duration: 'slow',easing: 'easeOutQuad'});
					}
					else if (seccion == "hablemos") {
						$(".contenedor-chat").stop().animate({"top": "0px"},{ duration: 'slow',easing: 'easeOutQuad'});
					};
					$(".contenedor-trabajos").stop().animate({"left": "100%"})

				} 
			})
			} 
		});
	});

})

$( ".lista-items-portafolio>li" ).each(function() {
	//FUNCION PARA MOUSE OVER BOTONES DE PORTAFOLIO
	$(this).mouseover(function() {
		$(this).find(".icono_out").stop().animate({"opacity": "0"}, 150);
		$(this).find(".icono_over").stop().animate({"top": "0%"}, { duration: 'slow',easing: 'easeOutQuad'});
		$(this).find(".icono_texto").stop().animate({color: "#e14718"}, 200);

	  }).mouseout(function() {
		$(this).find(".icono_out").stop().animate({"opacity": "1"}, 200);	  	
	  	$(this).find(".icono_over").stop().animate({"top": "100%"}, { duration: 'slow',easing: 'easeOutQuad'});
		$(this).find(".icono_texto").stop().animate({color: "#282828"}, 280);

	  });
	//ACCIONES PARA CLICK AMPLIAR INFO
	$( this ).on( "click", function() {
		var clase = $(this).children().attr("class");
		var accion = clase.replace('icono ','');
		if($("#v").length == 0){
		  $("."+accion+"Amp").stop().animate({"left": "0"}, { duration: 'slow',easing: 'easeOutQuad'} , function(){
		  	$(this).attr('id', "v");
		  });
		}else{
			$(".contenedor-trabajos").stop().animate({"left": "100%"}, function(){
				$(this).removeAttr('id');
			})
		}
	});
	//LLAMADO DE ACCION BOTON CERRAR
	$(".fa-times").mouseover(function() {
		$(this).stop().animate({color: "#e14718"}, 150);

	  }).mouseout(function() {
		$(this).stop().animate({color: "#282828"}, 280);

	  });

	$(".fa-times").on("click", function(){
		$(this).parent().parent().stop().animate({"left": "100%"}, { duration: 'slow',easing: 'easeOutQuad'} , function(){
			$(this).removeAttr('id');
		});
	})

});
//Animacion thumbs para ampliar info
$(".thumb").each(function(){

	//FUNCION PARA MOUSE OVER
	$(this).mouseover(function() {
		$(this).find(".thumb__ampliarInfo").stop().animate({"opacity": "0.8"}, 150);
		$(this).find(".imagen-trabajos").stop().animate({"opacity": "0.5"}, 500);

	  }).mouseout(function() {
		$(this).find(".thumb__ampliarInfo").stop().animate({"opacity": "0"}, 900);
		$(this).find(".imagen-trabajos").stop().animate({"opacity": "1"}, 150);
	  });

})
//AMPLIACION INFO DE LOS TRABAJOS
$(".trabajo-recepturex").on("click", function(){
	window.open('https://www.facebook.com/recepturex.colombia','_blank');
});
$(".trabajo-elPaso-texmex").on("click", function(){
	window.open('http://elpasotex-mex.com/','_blank');
});
$(".trabajo-integridad").on("click", function(){
	window.open('http://arrendamientosintegridad.com.co/','_blank');
});
$(".trabajo-triangulo").on("click", function(){
	window.open('http://arrendamientoseltriangulo.com/','_blank');
});

$(".trabajo-avalos").on("click", function(){
	$(".ampliacion__imagen").removeClass("Amp-cafeMilena");
	$(".ampliacion__imagen").removeClass("Amp-fitnessDel");
	$(".ampliacion__imagen").addClass("Amp-avalos");
	$(".contenedor-ampliacion").stop().animate({"top": "0px"}, { duration: 'slow',easing: 'easeOutQuad'});
});
$(".trabajo-cafe-milena").on("click", function(){
	$(".ampliacion__imagen").removeClass("Amp-avalos");
	$(".ampliacion__imagen").removeClass("Amp-fitnessDel");	
	$(".ampliacion__imagen").addClass("Amp-cafeMilena");
	$(".contenedor-ampliacion").stop().animate({"top": "0px"}, { duration: 'slow',easing: 'easeOutQuad'});
});
$(".trabajo-fitness-delivery").on("click", function(){
	$(".ampliacion__imagen").removeClass("Amp-avalos");
	$(".ampliacion__imagen").removeClass("Amp-cafeMilena");		
	$(".ampliacion__imagen").addClass("Amp-fitnessDel");
	$(".contenedor-ampliacion").stop().animate({"top": "0px"}, { duration: 'slow',easing: 'easeOutQuad'});
});

$('.contenedor-ampliacion >.fa-times').on("click", function(){
	$(this).parent().stop().animate({"top": "-750px"}, { duration: 'slow',easing: 'easeOutQuad'});
})


$(".ampliacion__chat").append('<iframe name="iframe1" id="iframe1" src="https://purechat.me/t-bars84" style="border-style: none;width: 100%; height:'+$( window ).height()+'px;"></iframe>');
$('.contenedor-chat >.fa-times').on("click", function(){
	$(this).parent().stop().animate({"top": "-750px"}, { duration: 'slow',easing: 'easeOutQuad'});
})


});
