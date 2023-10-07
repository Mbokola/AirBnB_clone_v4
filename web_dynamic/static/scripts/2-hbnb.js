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
	function checkApiStatus() {
		$.get("http://0.0.0.0:5001/api/v1/status/", function(data) {
			if (data.status === "OK") {
				 $("#api_status").addClass("available");
			} else {
				$("#api_status").removeClass("available");
			}
		});
	}
	checkApiStatus();
});
