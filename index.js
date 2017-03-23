function disableSubmitBtn(id)
{
	var btnId = $("#"+id).attr("formSubmitBtnId");
	$("#"+btnId).addClass('inactiveLink');
}