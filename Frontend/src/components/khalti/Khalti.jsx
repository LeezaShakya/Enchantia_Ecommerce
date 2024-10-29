// import React, { useEffect } from 'react'
// // import KhaltiCheckout from "khalti-checkout-web";
// import config from './Khalticonfig';

// const Khalti = () => {
//     useEffect(() => {
//         const checkout = new KhaltiCheckout(config);
//         const btn = document.getElementById('payment-button');
//         btn.onclick = function () {
//           // minimum transaction amount must be 10, i.e., 1000 in paisa.
//           checkout.show({ amount: 1000 });
//         };
//       }, []);
//     return (
//         <div>
//             <button className='btn btn-about mt-4 mb-4' id='payment-button'>
//                 Pay Via Khalti
//             </button>
//         </div>
//     )
// }

// export default Khalti