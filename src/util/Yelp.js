const apiKey = "9Q1b1B_gFDl0Il7HvpulZqM3fMqs-0XLn5vsxvl97QW_K4xMKVDEyrV8-_sseMYRfRoOa2MPAE1oU-RPRxWezVyK3WSPPQbkQ45bEZ-MpK6cN8960Y9QyD1q3w6KYHYx"




const Yelp = {
    search(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                AUTHORIZATION: `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if(jsonResponse.businesses){
                return  jsonResponse.businesses.map((business)=>{
                    console.log(business)
                    return {
                        id: business.id,
                        imageSrc : business.image_url,
                        name: business.name,
                        address: business.location.address,
                        city: business.location.city,
                        state: business.location.address1,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                })
            }
        })
    }
}


export default Yelp;