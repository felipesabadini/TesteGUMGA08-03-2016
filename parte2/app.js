(function() {
  'use strict';
  angular
    .module('app', [])
    .controller('atividadeController', atividadeController);

  function atividadeController($http) {
    var vm = this;
    vm.atividade = undefined;
    vm.atividadesAtuais = [];
    vm.atividadesRecentes = [];

    vm.loadAtividadesRecentes = function() {
      $http.get('http://www.gumga.com.br/avaliacao-api/api/estabelecimento666').then(function(response) {
        console.log(response);
        vm.atividadesRecentes = response.data.values;
      });
    }
    vm.adicionarAtividade = function(atividade) {
      if(!vm.verificarSeAtividadeJaExiste(atividade.descricao))
        vm.atividadesAtuais.push(atividade.descricao);
    }
    vm.verificarSeAtividadeJaExiste = function(descricao) {
      if(vm.atividadesAtuais.length == 0)
        return false;

      var existe = false;
      for (var i = 0; i < vm.atividadesAtuais.length; i++) {
        if(vm.atividadesAtuais[i] === descricao)
          existe = true;
      }
      return existe;
    };

    vm.postarAtividade = function() {
      var atividade = {nome: vm.atividade.nome, atividades: vm.atividadesAtuais};
      $http.post('http://www.gumga.com.br/avaliacao-api/api/estabelecimento666', atividade )
      .then(
      function(response) {
        vm.loadAtividadesRecentes();
        // console.log(response);
      },
      function(response) {
        // console.error(response);
      });
    }
  };
})();
