import {useEffect, useState} from "react";
import Card from "../../Components/Card/index.jsx";

function Home() {
    const [items, setItems] = useState(null)
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => {
                console.log('caught it!', err);
            });

    }, [])

    return (

        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {
                items?.map(item => (
                    <Card key={item.id} data={item}/>
                ))
            }
        </div>


    )
}

export default Home
