function openmainNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closemainNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function openNav() {
  document.getElementById("mySidenav_modal").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav_modal").style.width = "0";
}

$(document).ready(function () {
	$('.block_links li a').click(function(e) {

		$('.block_links li.active').removeClass('active');

		var $parent = $(this).parent();
		$parent.addClass('active');
		e.preventDefault();
	});
});

function toggleMenu() {
  var menuBox = document.getElementById('menu-box');    
  if(menuBox.style.display == "none") { // if is menuBox displayed, hide it
	menuBox.style.display = "block";
  }
  else { // if is menuBox hidden, display it
	menuBox.style.display = "none";
  }
}

function togglemodalMenu() {
  var menuBox = document.getElementById('modal-menu-box');    
  if(menuBox.style.display == "none") { // if is menuBox displayed, hide it
	menuBox.style.display = "block";
  }
  else { // if is menuBox hidden, display it
	menuBox.style.display = "none";
  }
}

//$('#menu').on('click', function(){
	//$('#menu').removeClass('current');
	//$(this).addClass('current');
//	});

$('#menu').click(function() {
	$(this).toggleClass("arrow_down");
});
$('#menu_modal').click(function() {
	$(this).toggleClass("arrow_down");
});

	

$('.right-corder-container-button').click(function() { $(this).toggleClass('right-corder-container-button-big') });

$(".right-corder-container-button").click(function() {
	$(".long-text").toggleClass("show-long-text");   
	
});

$(function () {
	$("#check_box").click(function () {
		if ($(this).is(":checked")) {
			$("#detailed_entry").show();
			$("#quick_entry").hide();
		} else {
			$("#detailed_entry").hide();
			$("#quick_entry").show();
		}
	});
});



$('#add_section_btn').click(function() {
   $('#book_detail_content').show();
   return false;
}); 
$('#add_section_btn1').click(function() {
   $('#book_detail_content1').show();
   return false;
}); 




$(document).ready(function(){
  $("#add_goal").click(function(){
	$("#section_sankirtan_goal").toggle();
  });
});


//counter scripts

$(document).ready(function(){
	$('.count').prop('disabled', true);
	$(document).on('click','.plus',function(){
		$('.count').val(parseInt($('.count').val()) + 1 );
	});
	$(document).on('click','.minus',function(){
		$('.count').val(parseInt($('.count').val()) - 1 );
			if ($('.count').val() == 0) {
				$('.count').val(1);
			}
		});
});

$(document).ready(function(){
	$('.count1').prop('disabled', true);
	$(document).on('click','.plus1',function(){
		$('.count1').val(parseInt($('.count1').val()) + 1 );
	});
	$(document).on('click','.minus1',function(){
		$('.count1').val(parseInt($('.count1').val()) - 1 );
			if ($('.count1').val() == 0) {
				$('.count1').val(1);
			}
		});
});
$(document).ready(function(){
	$('.count3').prop('disabled', true);
	$(document).on('click','.plus3',function(){
		$('.count3').val(parseInt($('.count3').val()) + 1 );
	});
	$(document).on('click','.minus3',function(){
		$('.count3').val(parseInt($('.count3').val()) - 1 );
			if ($('.count3').val() == 0) {
				$('.count3').val(1);
			}
		});
});
$(document).ready(function(){
	$('.count4').prop('disabled', true);
	$(document).on('click','.plus4',function(){
		$('.count4').val(parseInt($('.count4').val()) + 1 );
	});
	$(document).on('click','.minus4',function(){
		$('.count4').val(parseInt($('.count4').val()) - 1 );
			if ($('.count4').val() == 0) {
				$('.count4').val(1);
			}
		});
});
$(document).ready(function(){
	$('.count5').prop('disabled', true);
	$(document).on('click','.plus5',function(){
		$('.count5').val(parseInt($('.count5').val()) + 1 );
	});
	$(document).on('click','.minus5',function(){
		$('.count5').val(parseInt($('.count5').val()) - 1 );
			if ($('.count5').val() == 0) {
				$('.count5').val(1);
			}
		});
});
$(document).ready(function(){
	$('.count6').prop('disabled', true);
	$(document).on('click','.plus6',function(){
		$('.count6').val(parseInt($('.count6').val()) + 1 );
	});
	$(document).on('click','.minus6',function(){
		$('.count6').val(parseInt($('.count6').val()) - 1 );
			if ($('.count6').val() == 0) {
				$('.count6').val(1);
			}
		});
});
$(document).ready(function(){
	$('.count7').prop('disabled', true);
	$(document).on('click','.plus7',function(){
		$('.count7').val(parseInt($('.count7').val()) + 1 );
	});
	$(document).on('click','.minus7',function(){
		$('.count7').val(parseInt($('.count7').val()) - 1 );
			if ($('.count7').val() == 0) {
				$('.count7').val(1);
			}
		});
});
$(document).ready(function(){
	$('.count8').prop('disabled', true);
	$(document).on('click','.plus8',function(){
		$('.count8').val(parseInt($('.count8').val()) + 1 );
	});
	$(document).on('click','.minus8',function(){
		$('.count8').val(parseInt($('.count8').val()) - 1 );
			if ($('.count8').val() == 0) {
				$('.count8').val(1);
			}
		});
});



$(document).ready(function(){
	$('.count2').prop('disabled', true);
	$(document).on('click','.plus2',function(){
		$('.count2').val(parseInt($('.count2').val()) + 1 );
	});
	$(document).on('click','.minus2',function(){
		$('.count2').val(parseInt($('.count2').val()) - 1 );
			if ($('.count2').val() == 0) {
				$('.count2').val(1);
			}
		});
});
		
		
$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});