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

let father;
let mother;

function SearchPersona(relative) {
  let searchPerson;

  if (relative) {
    searchPerson = relative;
  } else {
    searchPerson = document.getElementById('inpSearch').value;
  }

  for (let i = 0; i < person.length; i++) {
    const element = person[i];

    if (element.name === searchPerson) {
      father = element.father;
      mother = element.mother;
      document.getElementById('pPrincipal').innerHTML = element.name;
      document.getElementById('imgPrincipal').src = element.img;
    }
  }
  for (let i = 0; i < person.length; i++) {
    const element = person[i];

    if (element.name === father) {
      document.getElementById('pFather').innerHTML = element.name;
      document.getElementById('imgFather').src = element.img;
    }

    if (element.name === mother) {
      document.getElementById('pMother').innerHTML = element.name;
      document.getElementById('imgMother').src = element.img;
    }
  }
  if (mother === '') {
    document.getElementById('pMother').innerHTML ='Mom not found';
    document.getElementById('imgMother').src = '';
  }
  if (father === '') {
    document.getElementById('pFather').innerHTML = 'Father not found';
    document.getElementById('imgFather').src = '';
  }
}

document.getElementById('imgMother').addEventListener('click', function () {
  SearchPersona(mother);
});
document.getElementById('imgFather').addEventListener('click', function () {
  SearchPersona(father);
});
