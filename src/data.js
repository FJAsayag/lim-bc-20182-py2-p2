const cambiarPropiedad = (data) => {
  return data.map(obj => Object.assign({}, obj, {name: obj.name.toUpperCase()}));
}; 

const agregaPropiedad = (data) => {
  const insignias = {
    'Gryffindor': 'https://images-mm.s3.amazonaws.com/HP_Gryf_Rubber_Crest_Magnet_POP.jpg',
    'Slytherin': 'https://www.logolynx.com/images/logolynx/03/03dbf0844ed87fe57429a519488ff3d4.jpeg',
    'Hufflepuff': 'https://www.hp-lexicon.org/wp-content/uploads/2015/08/hufflepuff-shield-200x0-c-default.jpg',
    'Ravenclaw': 'https://images-mm.s3.amazonaws.com/HP_Ravenclaw_Emb_Patch_POP.jpg'
  };
  const newArray = data.map((obj) => {
    if (obj.hogwartsStudent) {
      return Object.assign({}, obj, {insignia: insignias[obj.house] });
    } else {
      return Object.assign({}, obj);
    }
  });
  return newArray;
};

const filtrarCasasUnicas = (data) => {
  const arrCasas = data.reduce((acum, ele) => {
    if (ele.house !== '' && acum.indexOf(ele.house) === -1) {
      acum.push(ele.house);
    }
    return acum;
  }, []);
  return arrCasas;
};

window.potter = {
  cambiarPropiedad,
  agregaPropiedad,
  filtrarCasasUnicas,
};