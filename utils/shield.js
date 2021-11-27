var shieldDisplayarray=[];
var selectedbadges = ['Javascript','Bootstrap', 'CSS'];
var shieldComplete=[];

function renderShield(selectedbadges) {
var shieldArray = [
    {
      language: 'HTML',
      shieldlink: '![Shield:HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)'
    },
    {
      language: 'Javascript',
      shieldlink: '![Shield:Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)' 
    },
    {
      language: 'CSS',
      shieldlink: '![Shield:CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)' 
    },
    {
      language: 'JQuery',
      shieldlink: '![Shield:jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)' 
    },
    {
      language: 'Bootstrap',
      shieldlink: '![Shield:Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)' 
    },
  ];

  //returns true or false if included
for (let i=0; i<shieldArray.length;i++) {
  if (selectedbadges.includes(shieldArray[i].language)) {
  shieldDisplayarray.push(shieldArray[i]);
    } 
  }
};
function renderShieldSection(selectedbadges,shieldDisplayarray) {
  if (!shieldDisplayarray) {
    shieldComplete = [];
  } else {
    for (let i=0; i<selectedbadges.length;i++) {
    shieldComplete.push(shieldDisplayarray[i].shieldlink);
    }
  }
  };
renderShield(selectedbadges);
renderShieldSection(selectedbadges, shieldDisplayarray);
console.log(shieldComplete);





          
