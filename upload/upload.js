
const french = document.getElementById('french');
const english = document.getElementById('english');
const kinyarwanda = document.getElementById('kinyarwanda');
const image = document.getElementById('image');





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

const handleArticles = async (e) => {

    displayLoading()
    changeStyle()
    e.preventDefault()

    const data = new FormData();
    data.append("image", image.files[ 0 ]);
    data.append("kinyarwanda", kinyarwanda.value);
    data.append("english", english.value);
    data.append("french", french.value);


    console.log(data)

    await fetch('https://amarenga-backend.herokuapp.com/ifs/amarenga', {
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
                alert(res.error)
                return res.error
            } else {
                alert("success")
                return res
            }
        })


    // {
    // method: 'POST', // or 'PUT'
    // headers: {
    //     'Content-Type': 'multipart/form-data',
    // },
    // body: data,
}
// console.log(data);


// angular.module('ionicApp', [ 'ionic' ])

//     .controller('PlaylistsCtrl', function ($scope, $ionicPopup, $timeout) {
//         $scope.data = {}

//         // Triggered on a button click, or some other target
//         $scope.showPopup = function () {
//             var alertPopup = $ionicPopup.prompt({
//                 title: 'Do not cancel wait for success message!',
//                 template: 'waiting......................'
//             });
//             alertPopup.then(function (res) {
//                 console.log('Thank you for waiting');
//             });
//         };
//     });

