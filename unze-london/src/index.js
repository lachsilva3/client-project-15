import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';


// Context
import { ShopContextProvider } from './context/shop-context';
// Routing
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

// Routes
import Root from './routes/root';
import Index from './routes';
import ErrorPage from './error-page';
import Loginpage from './routes/loginpage';
import Registerpage from './routes/registerpage';
import Trackorderpage from './routes/trackorderpage';
import Contactpage from './routes/contactpage';
import Deliveryinfopage from './routes/deliveryinfopage';
import Privacypolicypage from './routes/privacypolicypage';
import Helpfaqpage from './routes/helpfaqpage';
import Aboutpage from './routes/aboutpage';
import Storefinder from './routes/storefinder';
import Sizeguide from './routes/sizeguide';
import Promotions from './routes/unzepromotions';
import Franchise from './routes/franchise';
import Paywithcard from './routes/paywithcard';
import Ordercancel from './routes/ordercancel';
import Returnpolicy from './routes/returnpolicy';
import Orderstatuscheck from './routes/orderstatuscheck';
import Returnsupport from './routes/returnsupport';
import Wishlistpage from './routes/wishlistpage';
import Admin from './routes/admin'; 

// pages (includes)
import Cart from "./pages/cart/cart";
import Wishlist from "./pages/wishlist/wishlist";
import ManageProducts from "./pages/manageproducts/manageproducts"  ;
import Womenstable from "./pages/womenstable/womenstable";
import Menstable from "./pages/menstable/menstable";
import Kidstable from "./pages/kidstable/kidstable";
import Womenatable from "./pages/womenatable/womenatable";
import Menatable from "./pages/menatable/menatable";
import Kidatable from "./pages/kidatable/kidatable";

// collections
import Womenshoes from './collections/womenshoes';
import Menshoes from './collections/menshoes';
import Kidshoes from './collections/kidshoes';
import Womenapparel from './collections/womenapparel';
import Menapparel from './collections/menapparel';
import Kidapparel from './collections/kidapparel';
import AutheticationProvider from './context/AutheticationContext';


const router=createBrowserRouter([  
  {
  path:"/",
    element:<Root />,
    errorElement:<ErrorPage />,
children:[
    {index:true,element: <Index />},
    {path:"kidatable",
    element: <Kidatable />
   },
    {path:"menatable",
    element: <Menatable />
   },
    {path:"womenatable",
    element: <Womenatable />
   },
    {path:"kidstable",
    element: <Kidstable />
   },
    {path:"login",
    element: <Loginpage />
   },
   {path:"register",
   element:<Registerpage /> 
  },
    {path:"trackorder",
     element:<Trackorderpage />
    },
    {path:"contact",
    element: <Contactpage />
   },
   {path:"deliveryinfo",
    element: <Deliveryinfopage />
   },
   {path:"privacypolicy",
    element: <Privacypolicypage />
   },
   {path:"helpfaq",
   element: <Helpfaqpage />
  },
  {path:"about",
  element: <Aboutpage />
 },
 {path:"storefinder",
 element: <Storefinder />
  },
{path:"sizeguide",
element: <Sizeguide />
},
{path:"promotions",
element: <Promotions />
},
{path:"franchise",
element: <Franchise />
},
{path:"paywithcard",
element: <Paywithcard />
},
{path:"ordercancel",
element: <Ordercancel />
},
{path:"returnpolicy",
element: <Returnpolicy />
},
{path:"orderstatuscheck",
element: <Orderstatuscheck />
},
{path:"returnsupport",
element: <Returnsupport />
},
{path:"wishlistpage",
element: <Wishlistpage />
},
{path:"womenshoes",
element: <Womenshoes />
},
{path:"cart",
element: <Cart />
},
{path:"wishlist",
element: <Wishlist />
},
{path:"menshoes",
element: <Menshoes />
},
{path:"kidshoes",
element: <Kidshoes />
},
{path:"womenapparel",
element: <Womenapparel />
},
{path:"menapparel",
element: <Menapparel />
},
{path:"kidapparel",
element: <Kidapparel />
},
{path:"admin",
element: <Admin />
},
{path:"manageproducts",
element: <ManageProducts />
},
{path:"womenstable",
element: <Womenstable />
},
{path:"menstable",
element: <Menstable />
},
  ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<AutheticationProvider>
  <React.StrictMode>
   <ShopContextProvider>

    <RouterProvider router={router} />
 
    </ShopContextProvider>
  </React.StrictMode>
  </AutheticationProvider>

);

