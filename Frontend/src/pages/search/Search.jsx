import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import { useParams } from 'react-router-dom';
import { searchBraceletApi, searchEaringApi, searchNecklaceApi, searchRingApi } from '../../apis/Api';
// import { toast } from 'react-toastify';

const Search = () => {

    const { query } = useParams();
    
    const [necklaces, setNecklaces] = useState([]);
    const [earings, setEarings] = useState([]);
    const [bracelets, setBracelets] = useState([]);
    const [rings, setRings] = useState([]);
    
        
    
    const [searchQuery, setSearchQuery] = useState(query);




    //can use this code as well
    // useEffect(() => {
    //     Promise.all([searchProductsApi(query), searchNecklaceApi(query)])
    //       .then(([productsRes, necklacesRes]) => {
    //         console.log(productsRes.data);
    //         setProducts(productsRes.data);
    //         console.log(necklacesRes.data);
    //         setNecklaces(necklacesRes.data);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   }, []);


    useEffect(() => {

        //fetch necklaces
        searchNecklaceApi(query).then(res => {
            console.log(res.data)
            setNecklaces(res.data)
        }).catch(err => {
            console.log(err)
        });

        //fetch earing
        searchEaringApi(query).then(res => {
            console.log(res.data)
            setEarings(res.data)
        }).catch(err => {
            console.log(err)
        });

        //fetch bracelet
        searchBraceletApi(query).then(res => {
            console.log(res.data)
            setBracelets(res.data)
        }).catch(err => {
            console.log(err)
        });

        //fetch ring
        searchRingApi(query).then(res => {
            console.log(res.data)
            setRings(res.data)
        }).catch(err => {
            console.log(err)
        });
    })

    // useEffect(() => {
    //     // Combine products and necklaces into items array
    //     const combinedItems = [...products, ...necklaces];
    //     setItems(combinedItems);
    //   }, [products, necklaces]);

    // 
    const handleSearch = (e) => {
        e.preventDefault();
      
        Promise.all([searchNecklaceApi(searchQuery), searchEaringApi(searchQuery), searchBraceletApi(searchQuery), searchRingApi(searchQuery)])
          .then((res,) => {
            console.log(res.data);
            setNecklaces(res.data);
            console.log(res.data);
            setEarings(res.data);
            console.log(res.data);
            setBracelets(res.data);
            console.log(res.data);
            setRings(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      };
      

    return (
        <div className='container mt-3'>
            <div className='d-flex justify-content-between'>
                <h4>Search products</h4>

                <form action="">
                    <input onChange={(e) => setSearchQuery(e.target.value)} type="text" className="form-control mb-3" placeholder="Search products by name" />
                    <button onClick={handleSearch} type="submit" hidden>Search</button>
                </form>

            </div>
            <p>
                Result for <strong>"{searchQuery}"</strong>
            </p>

            <div className='row row-cols-1 row-cols-md-4 g-4 row'>
                {
                    
                    necklaces.length > 0 ? necklaces.map(necklaces => (
                        <Card necklace={necklaces} /> 
                    )): rings.length > 0 ? rings.map(rings => (
                        <Card ring={rings} />
                    )): bracelets.length > 0 ? bracelets.map(bracelets => (
                        <Card bracelet={bracelets} />
                    )): earings.length > 0 ? earings.map(earings => (
                        <Card earing={earings} />
                    )): <h4>No product Found</h4>
                    
                    
                }
            </div>
        </div>
    )
}

export default Search