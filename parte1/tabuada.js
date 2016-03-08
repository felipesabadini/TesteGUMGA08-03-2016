(function() {
  'use strict';
  angular
    .module('app', [])
    .controller('tabuadaController', tabuadaController);

  function tabuadaController() {
    var vm = this;
    vm.erro = false;
    vm.tabuada = 0;
    vm.mostrarTabuada = false;
    vm.lista = [1,2,3,4,5,6,7,8,9,10];
    vm.listarTabuada = function(tabuada) {
      vm.mostrarTabuada = true;
      if(Number(tabuada) >= 1 &&
        (Number(tabuada) <= 10)) {
          vm.tabuada = tabuada;
        } else {
          vm.erro = true;
          vm.mostrarTabuada = false;
        }
    };
  };
})();
