require('../src/data.js');

const input = 
[
  {name: 'Argus Filch', species: 'human', hogwartsStudent: false, house: ''}, 
  {name: 'Arthur Weasley', species: 'human', hogwartsStudent: false, house: 'Gryffindor'}, 
  {name: 'Bellatrix Lestrange', species: 'human', hogwartsStudent: false, house: 'Slytherin'}, 
  {name: 'Cedric Diggory', species: 'human', hogwartsStudent: true, house: 'Hufflepuff'},
  {name: 'Cho Chang', species: 'human', hogwartsStudent: true, house: 'Ravenclaw'},
  {name: 'Harry Potter', species: 'human', hogwartsStudent: true, house: 'Gryffindor'}
];

const output = [
  {name: 'ARGUS FILCH', species: 'human', hogwartsStudent: false, house: ''}, 
  {name: 'ARTHUR WEASLEY', species: 'human', hogwartsStudent: false, house: 'Gryffindor'}, 
  {name: 'BELLATRIX LESTRANGE', species: 'human', hogwartsStudent: false, house: 'Slytherin'}, 
  {name: 'CEDRIC DIGGORY', species: 'human', hogwartsStudent: true, house: 'Hufflepuff'},
  {name: 'CHO CHANG', species: 'human', hogwartsStudent: true, house: 'Ravenclaw'},
  {name: 'HARRY POTTER', species: 'human', hogwartsStudent: true, house: 'Gryffindor'}
];

/* convención de insginias 
Gryffindor : 'https://images-mm.s3.amazonaws.com/HP_Gryf_Rubber_Crest_Magnet_POP.jpg'
Slytherin : 'https://www.logolynx.com/images/logolynx/03/03dbf0844ed87fe57429a519488ff3d4.jpeg'
Hufflepuff: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/hufflepuff-shield-200x0-c-default.jpg'
Ravenclaw: 'https://images-mm.s3.amazonaws.com/HP_Ravenclaw_Emb_Patch_POP.jpg'
*/

const output2 = [
  {name: 'Argus Filch', species: 'human', hogwartsStudent: false, house: ''}, 
  {name: 'Arthur Weasley', species: 'human', hogwartsStudent: false, house: 'Gryffindor'}, 
  {name: 'Bellatrix Lestrange', species: 'human', hogwartsStudent: false, house: 'Slytherin'}, 
  {name: 'Cedric Diggory', species: 'human', hogwartsStudent: true, house: 'Hufflepuff', insignia: 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/hufflepuff-shield-200x0-c-default.jpg'},
  {name: 'Cho Chang', species: 'human', hogwartsStudent: true, house: 'Ravenclaw', insignia: 'https://images-mm.s3.amazonaws.com/HP_Ravenclaw_Emb_Patch_POP.jpg'},
  {name: 'Harry Potter', species: 'human', hogwartsStudent: true, house: 'Gryffindor', insignia: 'https://images-mm.s3.amazonaws.com/HP_Gryf_Rubber_Crest_Magnet_POP.jpg'}
];

const output3 = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

describe('potter', () => {
  it('Debería ser un objeto', () => {
    expect(typeof potter).toBe('object');
  });
  describe('potter.cambiarPropiedad', () => {
    it('debería ser una función', () => {
      expect(typeof potter.cambiarPropiedad).toBe('function');
    });
    it('debería retornar un array de objetos, con el valor de la propiedad name en mayusculas', () => {
      expect(potter.cambiarPropiedad(input)).toEqual(output);
    });
    it('debería retornar un nuevo array, no modificar el original', () => {
      expect(potter.cambiarPropiedad(input)).not.toEqual(input);
    });
  });
  describe('potter.agregaPropiedad', () => {
    it('debería ser una función', () => {
      expect(typeof potter.agregaPropiedad).toBe('function');
    });
    it('deberia agregar la propiedad insignia a todos los estudiantes de hogwarts', () => {
      expect(potter.agregaPropiedad(input)).toEqual(output2);
    });
    it('debería retornar un nuevo array, no cambiar el array original', () => {
      expect(potter.agregaPropiedad(input)).not.toEqual(input);
    });
  });
  describe('potter.filtrarCasasUnicas', () => {
    it('debería ser una función', () => {
      expect(typeof potter.filtrarCasasUnicas).toBe('function');
    });
    it('debería retornar un nuevo array con las casas de howards de manera única', () => {
      expect(potter.filtrarCasasUnicas(input)).toEqual(output3);
    });
  });
});
  