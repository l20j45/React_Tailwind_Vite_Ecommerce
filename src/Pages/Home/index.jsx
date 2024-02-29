
import Card from "../../Components/Card/index.jsx";
import {GetProducts} from "../../services/productsService.jsx";

function Home() {

    const items = GetProducts();
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
