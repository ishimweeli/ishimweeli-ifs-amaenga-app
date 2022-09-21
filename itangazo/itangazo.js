const amatangazo = document.getElementsByClassName("announcement");

// let signContainer = document.querySelector(".signLanguage");

// console.log(signContainer);

const displayAnnouncement = async () => {

  const announcement = await fetch('https://amarenga-version01.herokuapp.com/announcement', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',

    },
  })

  const data = await announcement.json()
  // spinner.setAttribute('hidden', '');
  console.log(data)
  let renderItem = "";
  data.map(announcement => {


     renderItem+= `<div class="item" ">
            <img src="${announcement.avatar}" alt="Course #1">
        
            <div class="down-content">
              <h4>${announcement.title}</h4>
              <p>${announcement.content}</p>
              <div class="author-image">
                <img src="../IMG_8309.JPG" alt="Author 1">
              </div>
              <div class="text-button-pay">
                <a href="#">VIEW <i class="fa fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>`




   
    amatangazo[0].innerHTML = renderItem
   
    console.log(renderItem)


  })
}
displayAnnouncement()




