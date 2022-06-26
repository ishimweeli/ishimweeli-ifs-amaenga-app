
const french = document.getElementById('french');
const english = document.getElementById('english');
const kinyarwanda = document.getElementById('kinyarwanda');
const image = document.getElementById('image');


function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}


const handleArticles = async (e) => {

    // displayLoading()
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



