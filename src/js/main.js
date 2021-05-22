let person = [
  {
    img: 'src/img/Bart.png',
    name: 'Bart',
    father: 'Homer',
    mother: 'Marge',
  },
  {
    img: 'src/img/Lisa.png',
    name: 'Lisa',
    father: 'Homer',
    mother: 'Marge',
  },
  {
    img: 'src/img/Maggie.png',
    name: 'Maggie',
    father: 'Homer',
    mother: 'Marge',
  },
  {
    img: 'src/img/Homer.png',
    name: 'Homer',
    father: 'Abraham',
    mother: 'Mona',
  },

  {
    img: 'src/img/Abraham.png',
    name: 'Abraham',
    father: '',
    mother: '',
  },
  {
    img: 'src/img/Mona.png',
    name: 'Mona',
    father: '',
    mother: '',
  },
  {
    img: 'src/img/Herb.png',
    name: 'Herb',
    father: 'Abraham',
    mother: 'Mona',
  },
  {
    img: 'src/img/Marge.png',
    name: 'Marge',
    father: 'Clancy',
    mother: 'Jackie',
  },
  {
    img: 'src/img/Clancy.png',
    name: 'Clancy',
    father: '',
    mother: '',
  },
  {
    img: 'src/img/Jackie.png',
    name: 'Jackie',
    father: '',
    mother: '',
  },
  {
    img: 'src/img/Patty.png',
    name: 'Patty',
    father: 'Clancy',
    mother: 'Jackie',
  },
  {
    img: 'src/img/Selma.png',
    name: 'Selma',
    father: 'Clancy',
    mother: 'Jackie',
  },
  {
    img: 'src/img/Ling.png',
    name: 'Ling',
    father: '',
    mother: 'Selma',
  },
];

let papa;
let mama;

function SearchPersona(pariente) {
  let searchPerson;

  if (pariente) {
    searchPerson = pariente;
  } else {
    searchPerson = document.getElementById('inpSearch').value;
  }
  

  for (let i = 0; i < person.length; i++) {
    const element = person[i];

    if (element.name === searchPerson) {
      papa = element.father;
      mama = element.mother;
      document.getElementById('pPrincipal').innerHTML = element.name;
      document.getElementById('imgPrincipal').src = element.img;
    }
  }
  for (let i = 0; i < person.length; i++) {
    const element = person[i];

    if (element.name === papa) {
      document.getElementById('pFather').innerHTML = element.name;
      document.getElementById('imgFather').src = element.img;
    }

    if (element.name === mama) {
      document.getElementById('pMother').innerHTML = element.name;
      document.getElementById('imgMother').src = element.img;
    }
  }
  if (mama === '') {
    document.getElementById('pMother').innerHTML = 'Mamá no encontrada';
    document.getElementById('imgMother').src = '';
  }
  if (papa === '') {
    document.getElementById('pFather').innerHTML = 'Padre no encontrado';
    document.getElementById('imgFather').src = '';
  }
}

document.getElementById('imgMother').addEventListener('click', function () {
  SearchPersona(mama);
});
document.getElementById('imgFather').addEventListener('click', function () {
  SearchPersona(papa);
});




