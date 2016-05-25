import Ember from 'ember';


var artistas = [{
	  nome: 'Gilberto Gil', 
	  genero: 'MPB', 
	  qtd_musicas: 39,
	 
	},{
      nome: 'MV Bill', 
      genero: 'Rap', 
      qtd_musicas: 26 
  },{
       nome: 'Jorge Aragão', 
       genero: 'Samba', 
       qtd_musicas: 23 
}];

export default Ember.Route.extend({
	 model() {
    return artistas;
  }
});
