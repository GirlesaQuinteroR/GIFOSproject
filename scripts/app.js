let limitGIF = 3;
let offset = 2
const slider = document.getElementById('animated-gifos');
const apiKey = 'A0JNLmX5wfE8Kn37Rj0KQFVR8t0Mnx3x'
const urlTrending = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limitGIF}&rating=g`
        fetch(urlTrending)
        .then(response => response.json())
        .then(trendingWordsArray => {
            for (let i = 0; i < limitGIF; i++) {
                let trendingParagraph = document.querySelector('.trending-giphy')
                let trendingWords = document.createElement('p')
                let trendingWordsArrayTitle = trendingWordsArray.data[i].title
                let titleSimplified = trendingWordsArrayTitle.split("GIF",100)
                trendingParagraph.insertAdjacentText('afterbegin', titleSimplified[0] + ", " )
            }
        })
        .catch(err => {
            console.error(err)
        })
           function trending(){
            async function trendingGiphy() {
                const response = await fetch(urlTrending);  
                var result = await response.json();  
                return result          
            }
            let infoTrending = trendingGiphy();   
            let GIFid = document.getElementsByClassName('slideCarousel').item(0); 
            let GIFidFinal = GIFid.id
            infoTrending.then(json => {                         
                var renderDOM = ' '
         
                json.data.forEach(gif => {
                    const url = gif.images.original.url
                    const title = gif.title
                    renderDOM += `
                    <div class= "GIFbox">
                        <div class="GIFcard">  
                            <img src="${url}" alt="${title}">
                        </div>
                        <div class="content"> 
                             <div class="tarjeta_texto">
                            </div>
                        </div>
                    </div>
                    `
                slider.innerHTML = renderDOM
                })
               
            }).catch(error => {                           
                console.log(error)
            })
        }
        
        trending()  
        
