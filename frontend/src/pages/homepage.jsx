import { useEffect, useState } from 'react';
import Card from '../components/productcard/Card';
import axios from 'axios'

function HomePage() {
  const [data, setdata] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const res = await axios.get("http://localhost:8080/product/get-products");
        setdata(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])

  console.log(data);

  return (
    <div>
      <h1 className="text-center">'Home Page fro Follow along'</h1>

      <div className="grid grid-cols-3">
        {data.map((ele, index) => {
          return (
            <div style={{ margin: 'auto' }} key={index} className="border border-white">
              <Card 
              title={ele.title}  
              rating={ele.rating}
              des={ele.description}
              discountedPrice={ele.discountedPrice}
              OriginalPrice={ele.OriginalPrice}
              url={ele.images[0]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage; 