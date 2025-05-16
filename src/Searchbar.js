// import React, { useState } from 'react'
// import { data } from 'react-router-dom'
// import organdetails from './Productdet';
// import Heartphoto from "./images/Heart.png";

// export const Searchbar = ({carting,setcarting}) => {

//     const [searchFirst, setsearchFirst] = useState("")


//     const particulardata = (params) => {
//         setcarting([...carting, params])
//     };
    
//   return (
//     <>
//        <div className='search-container'>
//             <div className='search-bar'>
//                 <input placeholder='search...' onChange={(event) => {
//                     setsearchFirst(event.target.value);
//                 }} />
//             </div>
//             </div>
//             <div className='search-container-two'>
//                 {
//                  organdetails
//                     .filter((value)=>{
//                         if (searchFirst == ""){
//                             return;

//                         }else if (value.organame.toLowerCase().includes(searchFirst.toLowerCase())){
//                             return value;
//                         }
//                     })
//                     .map((value) => {
//                         return(
//                             <div className='card' key={value.organid}>
                            

//                             <img src={value.organimage}></img>
//                             <div className='card-words'>
//                                 <p>
//                                     {value.organame}
//                                 </p>
//                                 <p>
//                                     {value.organcondition}
//                                 </p>
//                                 <p>
//                                     {value.organrate}
//                                 </p>
//                                 <button className='card-button-one'>Buy now</button>
//                                 <button className='card-button-two' onClick={()=>particulardata(value)}>Add to Cart</button>
            
//                             </div>
//                              <div className='kard-card'>
//                 <img src={value.organimage}></img>
//                 <div className='kard-whish-card'>
                
//                 <img>
//                 <Heartphoto ></Heartphoto>
//                 </img>
                
//             </div>
//                 <div className='kard-words'>
//                     <h2>
//                         {value.organame}
//                     </h2>
//                     <div className='kard-words-two'>
//                     <p>
//                         {value.organrate}
//                     </p>
//                     <span></span>
//                     <p>
//                         {value.organcondition}
//                     </p>
//                     </div>
//                     <p className='kard-p'>{value.organdescription}</p>
//                     <button className='card-button-one'onClick={()=>whishingdata(arraydata)}>Whishlist</button>
//                     <button className='kard-p-button' onClick={()=>particulardata(value)}>Add to Cart</button>

//                 </div>


//         </div>
                            
            
            
//                     </div>
            
//                         )
//                     })
//                 }

//             </div>
        
//     </>
//   )
// }
import React, { useState } from 'react';
import organdetails from './Productdet'; // Ensure Productdet exports the correct array of objects
import Heartphoto from "./images/Heart.png";

export const Searchbar = ({ carting, setcarting }) => {
    const [searchFirst, setsearchFirst] = useState("");

    const particulardata = (params) => {
        setcarting([...carting, params]);
    };

    return (
        <>
            <div className='search-container'>
                <div className='search-bar'>
                    <input
                        placeholder='Search...'
                        onChange={(event) => setsearchFirst(event.target.value)}
                    />
                </div>
            </div>

            <div className='search-container-two'>
                {organdetails
                    .filter((value) => {
                        // if (searchFirst === "") {
                        //     return true; // Return all items when search input is empty
                        // } else if (value.organame.toLowerCase().includes(searchFirst.toLowerCase())) {
                        //     return true; // Return matched items
                        // }
                        // return false;
                        if (searchFirst == ""){
                                             return;
                            
                                                    }else if (value.organame.toLowerCase().includes(searchFirst.toLowerCase())){
                                                        return value;
                                                    }
                    })
                    .map((value) => (
                        <div className='kard-container-card'>
                            <div>
                        <div className='kard-card' key={value.organid}>
                            <img src={value.organimage} alt={value.organame} />
                            <div className='kard-whish-card'>
                                <img src={Heartphoto} alt="Heart Icon" />
                            </div>
                            <div className='kard-words'>
                                <h2>{value.organame}</h2>
                                <div className='kard-words-two'>
                                    <p>{value.organrate}</p>
                                    <span></span>
                                    <p>{value.organcondition}</p>
                                </div>
                                <p className='kard-p'>{value.organdescription}</p>
                                <button
                                    className='kard-p-button'
                                    onClick={() => particulardata(value)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        </div>
                        </div>
                    ))}
                {organdetails.filter((value) => {
                    if (searchFirst === "") return true;
                    return value.organame.toLowerCase().includes(searchFirst.toLowerCase());
                }).length === 0 && <p>No items found. Try searching for something else!</p>}
            </div>
        </>
    );
};
