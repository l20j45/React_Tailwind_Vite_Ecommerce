import {useEffect, useState} from "react";
import {Api} from "../enviroments/test.js";

export const GetProducts = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`${Api}/products`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => {
                console.log('caught it!', err);
            });
    }, []);

    return data;
};

