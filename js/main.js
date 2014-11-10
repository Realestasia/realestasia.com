			
$(document).ready(function() {

	//selector
	$('select.jm-selector').each( function() {
		var name = $(this).attr('name');
		var value = $(this).val();
		var display = $(this).children("option:selected").text();
		
		if( $(this).attr('data-width') ){ var f_width = $(this).attr('data-width'); }        
		
		var tmp = '';
		tmp+= '<div class="jm-select"'+(f_width?' style="width:'+(parseInt(f_width)+7+32)+'px;"':'')+'>';
		//tmp+= '<input type="hidden" name="name" value="'+value+'" />';
		tmp+= '<a '+(f_width?' style="width:'+f_width+'px;"':'')+' href="javascript:void(0)"><span class="display">'+display+'</span><span class="arrow"></span></a>';
		tmp+= '<div class="options"'+(f_width?' style="width:'+(parseInt(f_width)+7)+'px;"':'')+'>';
		 $(this).children('option').each( function() {
			tmp+= '<div class="option"><span class="display">'+ $(this).html()+'</span><span class="value">'+ $(this).attr('value')+'</span></div>'; 
		 });
		tmp+= '</div>';
		tmp+= '</div>';
		
		$(this).after(tmp);
		$(this).hide();
		
	});
	

	
	$('.jm-select a').click( function() {
		$('.jm-select').addClass('inactiveSelect');
		$(this).parent('.jm-select').removeClass('inactiveSelect');
		$('.inactiveSelect').children('.options').hide();
		$(this).parent('.jm-select').children('.options').toggle();
	});
	
	$('.jm-select .options .option').click( function() {
		var tmp = $(this).children('span.value').html();
		var tmp2 = $(this).children('span.display').html();
		$(this).parent('.options').parent('.jm-select').siblings('select').val( tmp ).trigger('change');
		//$(this).parent('.options').parent('.jm-select').children('input').val( tmp );
		$(this).parent('.options').parent('.jm-select').children('a').children('.display').html( tmp2 );
		$('.jm-select').children('.options').hide();
	});
	
	$('.jm-select a').blur( function() {
		//$(this).parent('.jm-select').children('.options').hide();
	});
	
	
	//end selector

	//place holder
	$('input, textarea').each( function() {
		var tmp = $(this).attr('placeholder');
		if( $(this).val()=='')
			$(this).val( tmp );	
			
		$(this).click( function() {
			if( $(this).val()== tmp )
				$(this).val('');	
		});
		
		$(this).blur( function() {
			if( $(this).val()== '' )
				$(this).val(tmp);	
		});
		
	});
	
	$('.roller').mouseover( function() {  $(this).css('opacity','1.0'); });
	$('.roller').mouseout( function() {  $(this).css('opacity','0.80'); });	

	
	//check box
	$('.jm-check').each( function() {
		$(this).children('input').hide(); 
		
		if( $(this).children('input').attr('checked') )
			$(this).addClass('jm-check-on');
		
		$(this).click( function() {
		 	if( $(this).children('input').attr('checked') )
			{
				$(this).removeClass('jm-check-on');
				$(this).children('input').attr('checked',false)
			}
			else
			{
				$(this).addClass('jm-check-on');
				$(this).children('input').attr('checked',true)
			}
		});
	});
	
	
	//carsosels
	 $(".show1-img").jcarousel({
        scroll: 1,
		wrap: 'circular',
        buttonNextHTML: '<a href="javascript:void(0)"></a>',
        buttonPrevHTML: '<a href="javascript:void(0)"></a>'
    });
	
	//carsosels
	 $(".show2-img").jcarousel({
        scroll: 1,
		wrap: 'circular',
        buttonNextHTML: '<a href="javascript:void(0)"></a>',
        buttonPrevHTML: '<a href="javascript:void(0)"></a>'
    });
	
	//carsosels
	 $(".show3-img").jcarousel({
        scroll: 1,
		wrap: 'circular',
        buttonNextHTML: '<a href="javascript:void(0)"></a>',
        buttonPrevHTML: '<a href="javascript:void(0)"></a>'
    });
	
	//carsosels
	 $(".show4-img").jcarousel({
        scroll: 1,
        buttonNextHTML: '<a href="javascript:void(0)"></a>',
        buttonPrevHTML: '<a href="javascript:void(0)"></a>',
		itemFirstInCallback:  mycarousel_itemFirstInCallback,
    });

	//carsosels

	 $(".show5-img").jcarousel({
        scroll: 1,
        buttonNextHTML: '<a href="javascript:void(0)"><img src="/img/next3.png" /></a>',
        buttonPrevHTML: '<a href="javascript:void(0)"><img src="/img/prev3.png" /></a>'
    });


	 $(".slide4 a").lightBox();
	 $(".thumbs4 ul a").lightBox();

});


function mycarousel_itemFirstInCallback(carousel, item, idx, state) {
    var num = idx;
	var total =  $('.show4-img').children().length;
	
	while( num > total)
		num -= total;
	
	//alert(num);
	
	$('.show5-img li a').removeClass('active');
	$(".show5-img li a").eq( (num-1) ).addClass('active');
	//alert(num);
};
