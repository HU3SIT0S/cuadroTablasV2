"use strict";
(self["webpackChunkcuadrotablasv2"] = self["webpackChunkcuadrotablasv2"] || []).push([["index"],{

/***/ "./src/js/modules/registro.js":
/*!************************************!*\
  !*** ./src/js/modules/registro.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ manejarRegistro)
/* harmony export */ });
function manejarRegistro() {
  const formulario = document.getElementById('registroForm');
  const mensaje = document.getElementById('mensaje');

  if (!formulario || !mensaje) {
    // console.error('❌ Error: No se encontró el formulario o el mensaje.');
    return;
  }

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const documento = document.getElementById('documento').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();

    if (!nombre || !documento || !ciudad || !telefono || !correo) {
      mensaje.textContent = '⚠️ Todos los campos son obligatorios.';
      mensaje.style.color = 'red';
    } else {
      mensaje.textContent = `✅ Registro exitoso para ${nombre}.`;
      mensaje.style.color = 'green';
    }
  });
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_registro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/modules/registro.js */ "./src/js/modules/registro.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_js_modules_registro_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTix1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDMUJ1RDs7QUFFdkQ7QUFDQSxFQUFFLG1FQUFlO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdWFkcm90YWJsYXN2Mi8uL3NyYy9qcy9tb2R1bGVzL3JlZ2lzdHJvLmpzIiwid2VicGFjazovL2N1YWRyb3RhYmxhc3YyLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFuZWphclJlZ2lzdHJvKCkge1xuICBjb25zdCBmb3JtdWxhcmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJvRm9ybScpO1xuICBjb25zdCBtZW5zYWplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnNhamUnKTtcblxuICBpZiAoIWZvcm11bGFyaW8gfHwgIW1lbnNhamUpIHtcbiAgICAvLyBjb25zb2xlLmVycm9yKCfinYwgRXJyb3I6IE5vIHNlIGVuY29udHLDsyBlbCBmb3JtdWxhcmlvIG8gZWwgbWVuc2FqZS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3JtdWxhcmlvLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBub21icmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9tYnJlJykudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IGRvY3VtZW50byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2N1bWVudG8nKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgY2l1ZGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdWRhZCcpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCB0ZWxlZm9ubyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWxlZm9ubycpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBjb3JyZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ycmVvJykudmFsdWUudHJpbSgpO1xuXG4gICAgaWYgKCFub21icmUgfHwgIWRvY3VtZW50byB8fCAhY2l1ZGFkIHx8ICF0ZWxlZm9ubyB8fCAhY29ycmVvKSB7XG4gICAgICBtZW5zYWplLnRleHRDb250ZW50ID0gJ+KaoO+4jyBUb2RvcyBsb3MgY2FtcG9zIHNvbiBvYmxpZ2F0b3Jpb3MuJztcbiAgICAgIG1lbnNhamUuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVuc2FqZS50ZXh0Q29udGVudCA9IGDinIUgUmVnaXN0cm8gZXhpdG9zbyBwYXJhICR7bm9tYnJlfS5gO1xuICAgICAgbWVuc2FqZS5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBtYW5lamFyUmVnaXN0cm8gZnJvbSAnLi9qcy9tb2R1bGVzL3JlZ2lzdHJvLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbWFuZWphclJlZ2lzdHJvKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==