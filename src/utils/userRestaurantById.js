import { useEffect, useState } from 'react';

const useRestaurantById = (resId) => {
    const [restaurant, setRestaurant] = useState([]);
    debugger;
    const singleRestaurant = async (resId) => {
        const url = "https://namastedev.com/api/v1/listRestaurantMenu/" + resId;
        const getRestarantById = await fetch(url);
        const data = await getRestarantById.json();
        const extractedData =
        data?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards[0]?.card?.info;
        console.log('restarant by id check ', extractedData);
        setRestaurant(extractedData);
    }


    useEffect(()=> {
       singleRestaurant()
    }, [resId])

    return restaurant;
}

export default useRestaurantById;

