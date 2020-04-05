function addDoggo(){
    let option = document.querySelector('#select')
    let dog = option.value   
    console.log(option.value)
    const BREEDS_URL = `https://dog.ceo/api/breed/${dog}/images/random`
    fetch(BREEDS_URL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const img = document.querySelector('img')
        img.src = data.message
        img.alt = 'Failed to load.'
        document.querySelector('.doggos')(img)
        console.log(BREEDS_URL)
    })
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               