function add(){
    var namesp = document.getElementById('namesp').innerHTML;
    var gia = document.getElementById('gia').innerHTML;
    var soluong = document.getElementById('soluong').value;
    var sp = {
      namesp: namesp,
      gia: gia,
      soluong: soluong
    };
    var giohang = localStorage.getItem('giohang');
    if (!giohang) {
      giohang = [];
    } else {
      giohang = JSON.parse(giohang);
    }
    giohang.push(sp);
    localStorage.setItem('giohang', JSON.stringify(giohang));
    alert('Đã thêm sản phẩm vào giỏ hàng.');
  }