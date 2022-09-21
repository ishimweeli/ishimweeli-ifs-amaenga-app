
const title = document.getElementById('content');
const content = document.getElementById('content');
const file = document.getElementById('file');
// const image = document.getElementById('image');

var uploadField = document.getElementById("file");


uploadField = function () {
    if (this.files[ 0 ].size > 1000000) {
        alert("File is too big! max 1mb");
        this.value = "";
    };
};


// selecting loading div
const loader = document.querySelector("#loading");
const inputPart = document.getElementById('container');



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
    var element = document.getElementById("container");
    element.style.display = "none";
}




const handleAnnouncement = async (e) => {
     e.preventDefault()
  displayLoading()
    changeStyle()
   

    const data = new FormData();
   
   data.append("file", file.files[ 0 ]);
    data.append("title", title.value);
    data.append("content", content.value);

    console.log(data)

    await fetch(' https://amarenga-version01.herokuapp.com/announcement', {
        method: "POST",
        body: data

    })

        .then(async (response) => {
          hideLoading()
            location.reload()
            // hideLoading()
            let res = await response.json()
            console.log(res)
            
            if (res.error) {
                // alert(error)
                return res.error
            } else {
                alert("success")
                console.log(data)
            }
              
        })


  
}
