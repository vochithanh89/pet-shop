var giohang = localStorage.getItem('giohang');
        if (giohang) {
          giohang = JSON.parse(giohang);
          var dsgiohang = document.getElementById('dsgiohang');
          for (var i = 0; i < giohang.length; i++) {
            var sp = giohang[i];
            var hienthi = '<li><b class="p1">Tên sản phẩm:</b> ' + sp.namesp + ', <b class="p2">Số lượng:</b> <input type="number" value="' + sp.soluong + '" min="0" step="1" onchange="changeQuantity(' + i + ', this.value)">, <b class="p3">Giá:</b> ' + sp.gia + ' <button onclick="removeItem(' + i + ')">Xóa</button></li>';
            dsgiohang.insertAdjacentHTML('beforeend', hienthi);
          }
        } else {
          alert('Giỏ hàng của bạn đang trống.');
        }
      
        function changeQuantity(index, quantity) {
          var giohang = JSON.parse(localStorage.getItem('giohang'));
          giohang[index].soluong = quantity;
          localStorage.setItem('giohang', JSON.stringify(giohang));
          updateCart();
        }
      
        function removeItem(index) {
          var giohang = JSON.parse(localStorage.getItem('giohang'));
          giohang.splice(index, 1);
          localStorage.setItem('giohang', JSON.stringify(giohang));
          updateCart();
        }
      
        function updateCart() {
          var giohang = JSON.parse(localStorage.getItem('giohang'));
          var dsgiohang = document.getElementById('dsgiohang');
          dsgiohang.innerHTML = '';
          var tongTien = 0;
          var tenSanPham = '';
          for (var i = 0; i < giohang.length; i++) {
            var sp = giohang[i];
            var thanhTien = sp.soluong * sp.gia;
            tongTien += thanhTien;
            tenSanPham += sp.namesp + ', ';
            var hienthi = '<li><b class="p1">Tên sản phẩm:</b> ' + sp.namesp + ', <b class="p2">Số lượng:</b> <input type="number" value="' + sp.soluong + '" min="0" step="1" onchange="changeQuantity(' + i + ', this.value)">, <b class="p3">Giá:</b> ' + sp.gia + ' <button onclick="removeItem(' + i + ')">Xóa</button></li>';
            dsgiohang.insertAdjacentHTML('beforeend', hienthi);
          }
          var spElement = document.querySelector('.sp');
          var tongcongElement = document.querySelector('.tongcong');
          spElement.value = tenSanPham;
          tongcongElement.value = tongTien.toFixed(2) + " $";
        }