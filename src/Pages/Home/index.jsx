
import Card from "../../Components/Card/index.jsx";
import {GetProducts} from "../../services/productsService.jsx";

function Home() {

    const items = GetProducts();
    return (

        <div className='grid gap-4  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full max-w-screen-lg px-2'>
            {
                items?.map(item => (
                    <Card key={item.id} data={item}/>
                ))
            }
        </div>


    )
}

export default Home
