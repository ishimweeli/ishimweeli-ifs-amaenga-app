
const signContainer = document.getElementsByClassName("signLanguage");

// let signContainer = document.querySelector(".signLanguage");

console.log(signContainer);

// const amarenga = [
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1Pmsy61Yrhjq-Uqd0y0CvpIeowk6Ch_VT',
//     kinya: 'kurya',
//     english: "to eat",
//     french: 'Manger'
//   },
//   {

//     gifUrl: 'https://drive.google.com/uc?export=view&id=1c2sL7ZiIhA8wV8uY47a4FNn6Atr83oWJ',
//     kinya: 'Umunyarwanda',
//     english: "Rwandan",
//     french: 'Rwandais'
//   },

//   {

//     gifUrl: 'https://drive.google.com/uc?export=view&id=1Sh0IaEn7IxfRYUnBQFL4-6-ODhlgIBwC',
//     kinya: 'irati',
//     english: "ruler",
//     french: 'règle'
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1Pmsy61Yrhjq-Uqd0y0CvpIeowk6Ch_VT',
//     kinya: 'kurya',
//     english: "eat",
//     french: 'mange'
//   },

//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1OXL7z3u2oiqvAb_7gH5WAcRNUBnMhC9X',
//     kinya: 'kinini',
//     english: "big",
//     french: 'grosse(feminine),gros(masculine)'

//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1lHhMHZ_lyjyh7VSdUfNRPlNu7KAZ0Vqh',
//     kinya: 'igitabo',
//     english: "book",
//     french: 'livre'

//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=11jXeqhpfrbufDyHSaStyQjgWecnrW5b_',
//     kinya: 'intebe',
//     english: 'chair',
//     french: 'chaise',

//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1I6B2jWxi3CKQJ2IyaOpFWmabv6UZ_qzZ',
//     kinya: 'ingwa',
//     english: 'chalk',
//     french: '.....',

//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1TzwCHxBPvGYmINjoe_BLuGKds41iwiUP',
//     kinya: 'agacaruziga',
//     english: 'compass',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1DAQwH2XZf7_pVdsTTIG4gdHyZiySSBtM',
//     kinya: 'icyongereza',
//     english: 'english',
//     french: 'anglais',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1k4BeUTzXOI_sgz_Th76HnLcWMTE5y0bg',
//     kinya: 'igifaransa',
//     english: 'french',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1ZNMfuFd0sWkE_W4trrl7t9VdSEoiReaJ',
//     kinya: 'ameza',
//     english: 'table',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1mz84EjAtIs6155W4L3iGogNBvOGzPbLL',
//     kinya: 'ijerekani',
//     english: 'Jercan',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1-XS8a7vMBvkL9Dw4IhyeIcebktqHV1c3',
//     kinya: 'ikinyarwanda',
//     english: 'kinyarwanda',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1-kfq6ql8rVBgx9VbTtOpY3dJ3SWtANZ8',
//     kinya: '..........',
//     english: '........',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1VHCAx3PUWQB3zRKPNMV0lv5SdTh8-WlF',
//     kinya: 'ikayi',
//     english: 'notebook',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=17BsesD5TJtQDeU2Qq3VVs4OituIAxwO7',
//     kinya: 'ikaramu yigiti',
//     english: 'pencil',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1Kry4AkPJEff2qktwKqurnKZ3EIMCl3zj',
//     kinya: 'ibikoresho byikoranabuhanga',
//     english: 'technology tools',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1Ts25qqG5WWCdfn2ICRzcckTfFIdr6ub_',
//     kinya: 'telefoni',
//     english: 'telephone',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1CxpbC4MkWEDubCa2DkIXJ9cHL6LcHoWP',
//     kinya: 'mudasobwa',
//     english: 'computer',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1Ts25qqG5WWCdfn2ICRzcckTfFIdr6ub_',
//     kinya: 'telephone',
//     english: 'telephone',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1B5bXN0yC3HWoOeWn6_u6eCd36hPXTftk',
//     kinya: 'radio',
//     english: 'radio',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1MCfevH6-voXNUmCBm9qtOvVTLEVDgzqT',
//     kinya: 'ibikoresho byikoranabuhanga',
//     english: 'technology tools',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1VkWaOgBL3od_l4f8syA_t070308riRMs',
//     kinya: 'mpa mudasobwa',
//     english: 'give me the computer',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1-AWMBrxqdnwChmd7rWt7tihX5LHuhq1G',
//     kinya: 'cagi',
//     english: 'charger',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1wZ5JbwQnlGEfg9oYC1PwgGnBYdr3Fqb7',
//     kinya: 'gukonja',
//     english: 'cold',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=12-ja8wXNyCnbvIjVdf14Wxo30KUcfHM0',
//     kinya: 'ishyiga',
//     english: 'stove',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1T0SfdevM3g0Ny5yqzO2qCTBNbGn0XhxG',
//     kinya: 'hoteli',
//     english: 'hotel',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1OGNSKAtfRKgro0j2F0KTokGhVkz5eGCA',
//     kinya: 'map',
//     english: 'map',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1PsxzCCb8AjS0CENvZ2uWW2WDjAgPijSY',
//     kinya: '.............',
//     english: '........',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=17TvTUcMlxWJeR2sd4nFCAzaF4xoBof_f',
//     kinya: 'guca urubanza',
//     english: 'judgement',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1aHscSR6T_gcEAex0yYrm0kTWNLFk-6uo',
//     kinya: 'ishuri',
//     english: 'school',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=19pZ5aq5g0-IKim-RovgwEvKAwn2Ke_-m',
//     kinya: '..........',
//     english: '........',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=15m5jmK20KU7BBx6PbFWPK_FLvqFKn66M',
//     kinya: '........',
//     english: '.......',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=16rz8dgR96bwHUY-oxy2qTBkFkJnAvu-X',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amfaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1CMwqFWJmDteM1Zfbk7PdpsWzPe0zhzA0',
//     kinya: 'igiceri',
//     english: 'coin',
//     french: '.....',
//   },

//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1MwmCwRDe7Za73xOMsEDWeGZ9wdVw6otH',
//     kinya: 'igiceri',
//     english: 'coin',
//     french: '.....',
//   },

//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1T1WUL9LJjog1MDQGDmkCpentNvu7e9I8',
//     kinya: '...............',
//     english: '..........',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1XTlPZpQjL48CnlcfA_75YjcqWOBELLMm',
//     kinya: '.........',
//     english: '........',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1S5snJEfY2ehF0imSB8gzVeEkrV7LXoHa',
//     kinya: 'guca urubanza',
//     english: 'judjement',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1R3WWI0Kqi9Y-YRygBByN7czTYRRKCQlF',
//     kinya: 'muremure',
//     english: 'tall',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1q1BEyNv-88SFv4k3lyksISTlyLeFFrRG',
//     kinya: 'uburetse',
//     english: 'wait',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=10dst82Hy2qt22FqzdpTd-zWNuHmn4Pql',
//     kinya: 'inzu',
//     english: 'house',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=13KusUii8uPerFO4v_rxbTmy5AMfuNO9q',
//     kinya: 'umudugdu',
//     english: 'cell',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1Qp_cporRqms3gxwn3ziD8Wv6mec32_Xr',
//     kinya: 'umuryango',
//     english: 'family',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1HYHFHY2zHKGDLNdedg5lilQFsSCyK4wL',
//     kinya: 'perezida',
//     english: 'presindent',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=15lZQ-ex3IEN_h5Gr7i5uqBKE7CLdehzS',
//     kinya: '..........',
//     english: '........',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=153oiYwWYBDmCw1J5jxSMybNLokDhuRWL',
//     kinya: '............',
//     english: '.........',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1oKhKVuS7Sduyl5L6Xsbo3v40QWIKpqjU',
//     kinya: 'inama',
//     english: 'meeting',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1LiLwjSyeBif2Se41LTcK3Lux_JeNZ3ij',
//     kinya: '.......',
//     english: '..........',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga ',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amfaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },
//   {
//     gifUrl: 'https://drive.google.com/uc?export=view&id=1txjBhs7fyhpZqtQeiJGwV02rVopmQE7y',
//     kinya: 'amafaranga',
//     english: 'money',
//     french: '.....',
//   },


// ]

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







