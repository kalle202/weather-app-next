"use client"

import {useEffect, useState} from "react"

export async function getCurrentLocation(){
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const url = `http://api.weatherapi.com/v1/forecast.json?key=5b0014324a6f41c6932180412233108&q=${latitude,longitude}&days=3&aqi=yes&alerts=yes`
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
    }, []);
    
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error();
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
    }

}