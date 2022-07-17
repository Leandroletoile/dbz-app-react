
export const GetGifs = async (category) =>{
    const API_KEY = 'iFevdSAsxQJ0fo99IX1iwVBEivBC1P7m' ;
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${15}&offset=0&rating=g&lang=en`

    const resp = await fetch(url);

    const {data} = await resp.json()

    const gifs = data.map(img =>(
        {
            id: img.id,
            title:img.title,
            url:img.images.original.url
        }
    ))

    console.log(resp);
    return gifs;

}