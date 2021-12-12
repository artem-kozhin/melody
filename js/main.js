$(document).ready(function () {
  var currentfloor = 02; //Переменная где хранится текущий этаж
  var floorPath = $(".home-image path");// каждый отдельный этаж в SVG
  var counterUp = $(".counter-button-up");/*Кнопка увеличения этажа*/
  var counterDown = $(".counter-button-down");/*Кнопка уменьшения этажа */
 
  
  //функция анимации при наведении мышкой на этаж
  floorPath.on('mouseover',function(){
      floorPath.removeClass("current-floor");// удаляем анимацию активного этажа
      currentfloor = $(this).attr("data-floor"); //Получаем значение текущего этажа
      $(".counter").text(currentfloor);// записываем значение этажа в счетчик справа
  });
  //функция отвечающая за увеличения счетчика этажей
  counterUp.on("click",function (){
    if (currentfloor < 18) {currentfloor++; //Проверяем знач этажа не больше 18 и прибавляем 1 этаж
      usCurrentFloor = currentfloor.toLocaleString("en-US",{minimumIntegerDigits: 2,
      useGrouping: false}); //форматирование текста чтобы впереди этажа до 10 стоял 0
      $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
      $(".home-image path").removeClass("current-floor"); // удаляем анимацию активного этажа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсветка текущего этажа
    }
  //Функция отвечающая за уменьшения счетчика этажей  
  });
  counterDown.on("click",function(){
    if (currentfloor > 2) {currentfloor--; //Проверяем знач этажа больше 2 и уменьшаем 1 этаж
      usCurrentFloor = currentfloor.toLocaleString("en-US",{minimumIntegerDigits: 2,
      useGrouping: false});//форматирование текста чтобы впереди этажа до 10 стоял 0
      floorPath.removeClass("current-floor");// удаляем анимацию активного этажа
      $(".counter").text(usCurrentFloor);//записываем значение этажа в счетчик справа
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");// подсветка текущего этажа
    }
  })
});