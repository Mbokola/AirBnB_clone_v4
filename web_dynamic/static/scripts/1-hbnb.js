$(document).ready(function() {
	const selectedAmenities = [];

	function updateSelectedAmenities() {
		$("#selected-amenities-list").text(selectedAmenities.join(", "));
	}
	$("input[type='checkbox']").change(function() {
		const amenityId = $(this).data("id");
		const amenityName = $(this).data("name");

		 if ($(this).prop("checked")) {
			 selectedAmenities.push(amenityName);
		 } else {
			 selectedAmenities = selectedAmenities.filter(function(name) {
				 return name !== amenityName;
			 });
		 }
		updateSelectedAmenities();
	});
});
