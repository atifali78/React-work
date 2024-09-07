// import axios from "axios";
// import home from "./home";
// import { useEffect, useState } from "react";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     console.log(response.data);
//     setProducts(response.data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <h1>Products Page</h1>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {products.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               width: "200px",
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{ width: "100%", height: "150px", objectFit: "contain" }}
//             />
//             <h3>{product.title}</h3>
//             <p>${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductsPage;
// ..................................................................

// import axios from "axios";
// import { useEffect, useState } from "react";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//    const fetchProducts = async () => {
//      const response = await axios.get("https://fakestoreapi.com/products/1")
//     .then((res) => res.data)
//      .then((json) => console.log(json));
//      console.log(response);
//      setProducts([response]);
//    };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <h1>Products Page</h1>

//       <input
//         type="text"
//         placeholder="Search for products..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           padding: "10px",
//           marginBottom: "20px",
//           width: "100%",
//           boxSizing: "border-box",
//         }}
//       />

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               style={{
//                 border: "1px solid #ccc",
//                 padding: "10px",
//                 width: "200px",
//               }}
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 style={{
//                   width: "100%",
//                   height: "150px",
//                   objectFit: "contain",
//                 }}
//               />
//               <h3>{product.title}</h3>
//               <p>${product.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products found</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductsPage;
// -------------------------------------------------------

import axios from "axios";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Products Page</h1>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          boxSizing: "border-box",
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
