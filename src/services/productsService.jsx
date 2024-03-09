import {useEffect, useState} from "react";
import {Api, Api2} from "../enviroments/devApi.jsx";

export const GetProducts = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`${Api2}/products`)
            .then(res => res.json())
            .then(data => {
                setData(data);

            })
            .catch(err => {
                console.log('caught it!', err);
            });
    }, []);

    return data;
};

