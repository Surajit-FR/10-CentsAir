var start_date = null, end_date = null;
var timestamp_start_date = null, timestamp_end_date = null;
var $input_start_date = null, $input_end_date = null;

function getDateClass(date, start, end){
	if(end != null && start != null){
		if(date > start && date < end)
			return [ true, "sejour", "Séjour" ];
	}
	
	if(date == start)
		return [ true, "start", "Début de votre séjour" ];
	if(date == end)
		return [ true, "end", "Fin de votre séjour" ];
	
	return false;
}

function datepicker_draw_nb_nights(){
	var $datepicker = jQuery("#ui-datepicker-div");
	setTimeout(function(){
		if(start_date != null && end_date != null){
			var $qty_days_stay = jQuery("<div />", { class: "ui-datepicker-stay-duration" });
			var qty_nights_stay = get_days_difference(timestamp_start_date, timestamp_end_date);
			$qty_days_stay.text(qty_nights_stay + " nights stay");
			$qty_days_stay.appendTo($datepicker);
		}
	});
}

var options_start_date = {
	showAnim: false,
	constrainInput: true,
  	numberOfMonths: 2,
	showOtherMonths: true,
	beforeShow: function(input, datepicker){
		datepicker_draw_nb_nights();
	},
	beforeShowDay: function(date){
		// 0: published
		// 1: class
		// 2: tooltip
		var timestamp_date = date.getTime();
		var result = getDateClass(timestamp_date, timestamp_start_date, timestamp_end_date);
		if(result != false)
			return result;
		
		return [true, "", ""];
		// return [ true, "chocolate", "Chocolate! " ];
	},
	onSelect: function(date_string, datepicker){
		// this => input
		start_date = $input_start_date.datepicker("getDate");
		timestamp_start_date = start_date.getTime();
	},
	onClose: function(){
		if(end_date != null){
			if(timestamp_start_date >= timestamp_end_date || end_date == null){
				$input_end_date.datepicker("setDate", null);
				end_date = null;
				timestamp_end_date = null;
				$input_end_date.datepicker("show");
				return;
			}
		}
		if(start_date != null && end_date == null)
			$input_end_date.datepicker("show");
	}
};
var options_end_date = {
	showAnim: false,
	constrainInput: true,
  	numberOfMonths: 2,
	showOtherMonths: true,
	beforeShow: function(input, datepicker){
		datepicker_draw_nb_nights();
	},
	beforeShowDay: function(date){
		var timestamp_date = date.getTime();
		var result = getDateClass(timestamp_date, timestamp_start_date, timestamp_end_date);
		if(result != false)
			return result;
		
		return [ true, "", "Chocolate !" ];
	},
	onSelect: function(date_string, datepicker){
		// this => input
		end_date = $input_end_date.datepicker("getDate");
		timestamp_end_date = end_date.getTime();
	},
	onClose: function(){
		if(end_date == null)
			return;
		
		if(timestamp_end_date <= timestamp_start_date || start_date == null){
			$input_start_date.datepicker("setDate", null);
			start_date = null;
			timestamp_start_date = null;
			$input_start_date.datepicker("show");
		}
	}
};

$input_start_date = jQuery("#start-date");
$input_end_date = jQuery("#end-date");

$input_start_date.datepicker(options_start_date);
$input_end_date.datepicker(options_end_date);

function get_days_difference(start_date, end_date){
	return Math.floor(end_date - start_date) / (1000*60*60*24);
}