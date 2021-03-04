let limitGIF = 5;
let offset = 2
const apiKey = 'A0JNLmX5wfE8Kn37Rj0KQFVR8t0Mnx3x'
const urlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limitGIF}&rating=g`


        fetch(urlTrending)
        .then(response => response.json())
        .then(trendingWordsArray => {
            for (let i = 0; i < limitGIF; i++) {
                let trendingParagraph = document.querySelector('.trending-giphy')
                let trendingWords = document.createElement('p')
                trendingWordsArrayTitle = trendingWordsArray.data[i].title
                titleSimplified = trendingWordsArrayTitle.split("GIF",100)
                trendingParagraph.insertAdjacentText('afterbegin', titleSimplified[0] + ", " )

            }
        })
        .catch(err => {
            console.error(err)
        })

        fetch(urlTrending)
        .then(response => response.json())
        .then(trending => {
            for (let i = 0; i < limitGIF; i++) {
                let giphyMobile = document.querySelector('.animated-gifos')
                let gifBox = document.createElement('img')
                giphyMobile.insertAdjacentElement('afterbegin', gifBox)
                gifURL = trending.data[i].images.downsized.url
                gifBox.setAttribute('src', gifURL)                

            }})
        .catch(err => {
            console.error(err)
        })
