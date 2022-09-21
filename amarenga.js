
const signContainer = document.getElementsByClassName("signLanguage");

// let signContainer = document.querySelector(".signLanguage");

console.log(signContainer);

// search
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
}

// const containerComponents = document.getElementsByClassName('signLanguage');


// selecting loading div
const loader = document.querySelector("#loading");
const inputPart = document.getElementById('inputPart');



// showing loading
function displayLoading() {
  loader.classList.add("display");
  // loaderr.classList.add("display");

  // to stop loading after some time
  // setTimeout(() => {
  //     loader.classList.remove("display");
  // }, 5000);
}

// hiding loading 
function hideLoading() {
  loader.classList.remove("display");
  //     loaderr.classList.remove("display");
  // 
}

function changeStyle() {
  var element = document.getElementById("inputPart");
  element.style.display = "none";
}


const displaySigns = async () => {

  const amarenga = await fetch('https://amarenga-version01.herokuapp.com/amarenga', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',

    },
  })

  const data = await amarenga.json()
  // spinner.setAttribute('hidden', '');
  console.log(data)
  let renderItem = "";
  data.map(amarenga => {


    // data.forEach(irenga => {
      renderItem += `<div class="polaroid">
      <img src="${amarenga.avatar}" alt="SIGN" style="width:100%">
      <div class="container" id="container">
      <p class="sign">${amarenga.kinyarwanda}</p>
      <p class="sign">${amarenga.english}</p>
      <p class="sign">${amarenga.french}</p>
      </div>
    </div>`


      // signContainer.appendChild(renderItem)
    // })
    signContainer[ 0 ].innerHTML = renderItem
    // signContainer.innerHTML = renderItem

    // 
    // signContainer.
    console.log(renderItem)


  })
}
displaySigns()




function search_sign() {

  let input = document.getElementById('search-id').value

  input = input.toLowerCase();
  let x = document.getElementsByClassName('polaroid');
  console.log(input);
  for (i = 0; i < x.length; i++) {
    if (!x[ i ].innerHTML.toLowerCase().includes(input)) {
      console.log('hello')
      x[ i ].style.display = "none";
    }
    else {
      console.log('hi')
      x[ i ].style.display = "inline-block";
    }
  }

}




console.log(amarenga)







