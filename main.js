'use strict';

$(document).ready(init);

function init() {
	var $container = $('#container');
	$('#entryField').on('click', '#submit', submitData);
	$container.on('dblclick', '.close', removeElement); // 'click' doesn't work for some reason
	$('.list').on('click', '.record', clickRecord);
	$container.on('click', '.list', moveRecord);
}

function submitData(event) {
	var item = $('#item').val();
	var price = parseFloat($('#price').val());
	if(item !== '' || price !== 0.00) {
		var $close = $('<div>').addClass('close').text('X').attr('title', 'Double Click to Remove');
		var $record = $('<div>').addClass('record').text(item + ' $' + price);
		$record.append($close);
		$('#unsortedList').append($record);

		var total = 0;
		var $total = $('.total');
		for(var i = 0; i < $total.siblings().length; i++) {
			$total.siblings()[i].each(function(i, e) {
				$total.text(total += parseFloat(e.innerHTML.split(' $')[1].split('<')[0]));
			})
		}
		$('#item').val('');
		$('#price').val(0.00);
	}
}

function removeElement(event) {
	console.log('go');
	var $this = $(this);
	$this.parent().remove();
}

function clickRecord(event) {
	event.stopPropagation();
	var $this = $(this);
	var highlighted = $this.hasClass('highlight');
	$('.record').removeClass('highlight');
	if(!highlighted)	{
		$this.addClass('highlight');
	}
}

function moveRecord(event) {
	var $highlight = $('.highlight');
	$highlight.appendTo($(this));
	$highlight.removeClass('highlight');
}

function getTotal(price) {
	var sum = 0;
	$(this).siblings().each(function(i, e) {
		console.log(this.val());
	})
	// console.log(total);
}