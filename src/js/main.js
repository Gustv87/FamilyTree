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
    name: 'Patty',
    father: 'Clancy',
    mother: 'Jackie',
  },
  {
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
  {
    name: 'Nediana Flanders',
    father: 'Nedsel Flanders',
    mother: 'Agnes Turnipseed',
  },
  {
    name: 'Ned Flanders',
    father: 'Nedsel Flanders',
    mother: 'Agnes Turnipseed',
  },
  {
    name: 'Rodd',
    father: 'Ned Flanders',
    mother: 'Maude',
  },
  {
    name: 'Todd',
    father: 'Ned Flanders',
    mother: 'Maude',
  },
];

function SearchPersona() {
  const searchPerson = document.getElementById('inpSearch').value;

  let papa;
  let mama;

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
      console.log(element.name);

      document.getElementById('pMother').innerHTML = element.name;
      document.getElementById('imgMother').src = element.img;
    }
  }
  document.getElementById('imgMother').addEventListener('click', function () {
    console.log(mama);
    for (let i = 0; i < person.length; i++) {
      const element = person[i];

      if (element.name === mama) {
        document.getElementById('imgPrincipal').innerHTML = element.name;
        document.getElementById('imgPrincipal').src = element.img;
        document.getElementById('pPrincipal').innerHTML = element.name;
      }
    }
  });
}

