// xác nhận đặt hàng
function xacnhandathang(){
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var address = document.getElementById("address").value;
	if(email==""||phone==""||address==""){
		document.getElementById("vali_address").innerHTML = "*Vui lòng nhập đầy đủ thông tin giao hàng"
	}else{
		if(isNaN(phone)){
			document.getElementById("vali_phone").innerHTML = "*Số điện thoại không đúng"
		}else{
			alert("Bạn đã đặt hàng thành công")
			document.getElementById("link_page_home").href="index.html"
		}
	}

}
// ẩn cảnh báo validate
function hide_text_validate(){
	document.getElementById("vali_phone").innerHTML=""
	document.getElementById("vali_address").innerHTML=""
	document.getElementById("vali_email").innerHTML=""
}
// tính tiền
function tinhtien(){

	var total = 0
	var cart_items = document.getElementsByClassName("cart-items")[0]
	var cart_rows = cart_items.getElementsByClassName("cart-row")
	for(var i = 0; i < cart_rows.length; i++){
		var cart_row = cart_rows[i]
		var sl = cart_row.getElementsByClassName("soluong")[0].value
		var gia = cart_row.getElementsByClassName("gia")[0].innerText
		var soluong1 = parseInt(sl)
		var gia1 = parseInt(gia)
		total = total + (soluong1*gia1)
	}
	
	document.getElementById("tongtien").innerHTML=total + " VNĐ"
}
// Xóa sản phẩm

	var remove_items = document.getElementsByClassName("remove_items")
	for(var i=0; i<remove_items.length; i++){
		var button = remove_items[i]
		button.addEventListener("click",function(){
			var button_remove = event.target
			button_remove.parentElement.parentElement.remove()
		})

	}
