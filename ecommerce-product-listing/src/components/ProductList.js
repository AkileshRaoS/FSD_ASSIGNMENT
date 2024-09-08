// // src/components/ProductList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import LazyLoad from 'react-lazyload';

// // Styled-Components
// const ProductListWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const SearchFilterWrapper = styled.div`
//   margin-bottom: 20px;
//   display: flex;
//   gap: 10px;

//   input {
//     padding: 10px;
//     font-size: 16px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     width: 200px;
//   }

//   select {
//     padding: 10px;
//     font-size: 16px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
// `;

// const ProductGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 20px;
//   width: 100%;
// `;

// const ProductCard = styled.div`
//   border: 1px solid #eee;
//   padding: 20px;
//   text-align: center;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const ProductImage = styled.img`
//   max-width: 100%;
//   height: auto;
//   margin-bottom: 15px;
//   border-radius: 5px;
// `;

// const ProductTitle = styled.h2`
//   font-size: 18px;
//   margin: 10px 0;
// `;

// const ProductPrice = styled.p`
//   font-size: 16px;
//   color: #00aaff;
// `;

// // ProductList Component
// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const filtered = products.filter(product => {
//       return (
//         product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (category === '' || product.category === category)
//       );
//     });
//     setFilteredProducts(filtered);
//   }, [searchTerm, category, products]);

//   return (
//     <ProductListWrapper>
//       <h1>Product List</h1>
//       <SearchFilterWrapper>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <select onChange={(e) => setCategory(e.target.value)} value={category}>
//           <option value="">All Categories</option>
//           <option value="men's clothing">Men's Clothing</option>
//           <option value="women's clothing">Women's Clothing</option>
//           <option value="jewelery">Jewelery</option>
//           <option value="electronics">Electronics</option>
//         </select>
//       </SearchFilterWrapper>
//       <ProductGrid>
//         {filteredProducts.map(product => (
//           <ProductCard key={product.id}>
//             <Link to={`/product/${product.id}`}>
//               <LazyLoad height={200} offset={100}>
//                 <ProductImage src={product.image} alt={product.title} />
//               </LazyLoad>
//               <ProductTitle>{product.title}</ProductTitle>
//               <ProductPrice>${product.price}</ProductPrice>
//             </Link>
//           </ProductCard>
//         ))}
//       </ProductGrid>
//     </ProductListWrapper>
//   );
// };

// export default ProductList;

// src/components/ProductList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import styled, { ThemeProvider } from 'styled-components';
// import LazyLoad from 'react-lazyload';
// import { lightTheme, darkTheme } from '../theme';

// const ProductListWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-color: ${({ theme }) => theme.body};
//   color: ${({ theme }) => theme.text};
//   min-height: 100vh;
// `;

// const ThemeToggle = styled.button`
//   background: ${({ theme }) => theme.toggleBorder};
//   border: 2px solid ${({ theme }) => theme.text};
//   border-radius: 30px;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 0.8rem;
//   padding: 0.6rem;
//   margin-bottom: 20px;
//   outline: none;
//   color: ${({ theme }) => theme.text};
// `;

// const SearchFilterWrapper = styled.div`
//   margin-bottom: 20px;
//   display: flex;
//   gap: 10px;

//   input,
//   select {
//     padding: 10px;
//     font-size: 16px;
//     border: 1px solid ${({ theme }) => theme.inputBorder};
//     border-radius: 5px;
//     background: ${({ theme }) => theme.inputBackground};
//     color: ${({ theme }) => theme.text};
//   }
// `;

// const ProductGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 20px;
//   width: 100%;
// `;

// const ProductCard = styled.div`
//   border: 1px solid ${({ theme }) => theme.inputBorder};
//   padding: 20px;
//   text-align: center;
//   background: ${({ theme }) => theme.cardBackground};
//   border-radius: 10px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const ProductImage = styled.img`
//   max-width: 100%;
//   height: auto;
//   margin-bottom: 15px;
//   border-radius: 5px;
// `;

// const ProductTitle = styled.h2`
//   font-size: 18px;
//   margin: 10px 0;
// `;

// const ProductPrice = styled.p`
//   font-size: 16px;
//   color: #00aaff;
// `;

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState('');
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const filtered = products.filter((product) => {
//       return (
//         product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (category === '' || product.category === category)
//       );
//     });
//     setFilteredProducts(filtered);
//   }, [searchTerm, category, products]);

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//       <ProductListWrapper>
//         <ThemeToggle onClick={toggleTheme}>
//           {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
//         </ThemeToggle>
//         <h1>Product List</h1>
//         <SearchFilterWrapper>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <select
//             onChange={(e) => setCategory(e.target.value)}
//             value={category}
//           >
//             <option value="">All Categories</option>
//             <option value="men's clothing">Men's Clothing</option>
//             <option value="women's clothing">Women's Clothing</option>
//             <option value="jewelery">Jewelery</option>
//             <option value="electronics">Electronics</option>
//           </select>
//         </SearchFilterWrapper>
//         <ProductGrid>
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id}>
//               <Link to={`/product/${product.id}`}>
//                 <LazyLoad height={200} offset={100}>
//                   <ProductImage src={product.image} alt={product.title} />
//                 </LazyLoad>
//                 <ProductTitle>{product.title}</ProductTitle>
//                 <ProductPrice>${product.price}</ProductPrice>
//               </Link>
//             </ProductCard>
//           ))}
//         </ProductGrid>
//       </ProductListWrapper>
//     </ThemeProvider>
//   );
// };

// export default ProductList;



// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import LazyLoad from 'react-lazyload';
import { lightTheme, darkTheme } from '../theme';

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
`;

const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  padding: 0.6rem;
  margin-bottom: 20px;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const SearchFilterWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;

  input,
  select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 5px;
    background: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.text};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
`;

const ProductCard = styled.div`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 5px;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #00aaff;
`;

const CartButton = styled.button`
  background-color: #00aaff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === '' || product.category === category)
      );
    });
    setFilteredProducts(filtered);
  }, [searchTerm, category, products]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to cart!`);
  };

  const goToCart = () => {
    navigate('/cart', { state: { cart } });
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ProductListWrapper>
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </ThemeToggle>
        <h1>Product List</h1>
        <button onClick={goToCart}>Go to Cart ({cart.length})</button>
        <SearchFilterWrapper>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </SearchFilterWrapper>
        <ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <Link to={`/product/${product.id}`}>
                <LazyLoad height={200} offset={100}>
                  <ProductImage src={product.image} alt={product.title} />
                </LazyLoad>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>${product.price}</ProductPrice>
              </Link>
              <CartButton onClick={() => handleAddToCart(product)}>
                Add to Cart
              </CartButton>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductListWrapper>
    </ThemeProvider>
  );
};

export default ProductList;
