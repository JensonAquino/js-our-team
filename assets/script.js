const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];



const containerElem = document.getElementById("container")

const generateCard = () => {
  let cardInner = "";
  teamMembers.forEach(curcard => {
    cardInner += `
       <div class="col-3 bg-primary p-2 mt-4 d-flex ">
                <img src="./assets/${curcard.img}" alt="">
                <div>
                    <p>${curcard.name}</p>
                    <p>${curcard.role}</p>
                    <p>${curcard.email}</p>
                </div>    
            </div>
      `
  })
  containerElem.innerHTML = cardInner;
}
generateCard()

