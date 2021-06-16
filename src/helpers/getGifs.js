 export const getGifs= async(category)=>{
     const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&rating=R&limit=10&api_key=fK9YB9adB3cTxVbUVkyYNBWU5GqZEYcw` 
     const resp=await fetch(url);
     const {data }= await resp.json();
    
        const gifs = data.map(img=>{
            return{
                id:img.id,
                title:img.title,
                url: img.images?.downsized_medium.url
            }
        })

    
        return gifs;
    }