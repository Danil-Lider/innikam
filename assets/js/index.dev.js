"use strict";

//  ПОЛУЧАЕМ ВСЕ ЭЛЕМЕНТЫ
var items = document.querySelectorAll('.block-open');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var elem = _step.value;
    // .querySelector('.open-items')
    var main_elem_click = elem;
    var all_items = elem.querySelector('.all-items');
    main_elem_click.addEventListener("click", function (e) {
      if (e.target.classList == 'open-items') {
        e.preventDefault();
      } // e.preventDefault()123


      all_items.classList.toggle('active');
    });
  };

  for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  } //  FOR PAGE NUMBER 5  frequently-asked-questions

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var items_often_asked_questions = document.querySelectorAll('.frequently-asked-questions .item');
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop2 = function _loop2() {
    var elem = _step2.value;
    console.log(elem);
    var main_elem_click = elem.querySelector('.image');
    var all_items = elem.querySelector('.text'); // let all_items_images = elem.querySelectorAll('.image')

    main_elem_click.addEventListener("click", function (e) {
      e.preventDefault();
      all_items.classList.toggle('active');

      if (all_items.classList.contains('active')) {
        main_elem_click.querySelector('.not-active').classList.add('active');
        main_elem_click.querySelector('.active').classList.remove('active');
      } else {
        main_elem_click.querySelector('.not-active').classList.remove('active');
        main_elem_click.querySelector('.active-first').classList.add('active');
      }
    });
  };

  for (var _iterator2 = items_often_asked_questions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop2();
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}