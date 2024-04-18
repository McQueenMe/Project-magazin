function changePrice(button, price) {
   // Убираем выделение с других кнопок
   var buttons = document.querySelectorAll('.flex-right__l');
   buttons.forEach(function (btn) {
      btn.classList.remove('selected');
   });

   // Выделяем текущую кнопку
   button.classList.add('selected');

   const butt1 = document.getElementsByClassName('price__left');
   const butt = document.getElementsByClassName('price__right');
   console.log(butt, butt1);
   if (price < 18) {
      document.getElementById('price-right').innerHTML = "";
   } else if (price > 18 && price < 20) {
      document.getElementById('price-right').innerHTML = '$' + 24.99;
   } else {
      console.log("No gay");
      document.getElementById('price-right').innerHTML = '$' + 29.99;
   }

   // Изменяем цену
   document.getElementById('price-left').innerText = '$' + price.toFixed(2);
}