import { createStore } from "redux";
const initialState = {
  products :[
    {productId :1,
    productImg:'./images/men1.webp',
    productName :"Incredible (MU2PBW25KN10N5)",
    prouctPrice : 4990,
    productCategory :"Men"
    },
    {productId :2,
    productImg:'./images/women1.webp',
    productName :"Teal-Khaddar-2 Piece (SWT212P96P)",
    prouctPrice : 4990,
    productCategory :"Women"
    },
    {productId :3,
      productImg:'',
    productName :"GHI",
    prouctPrice : 3000,
    productCategory :"Kids"
    },
    {productId :4,
      productImg:'./images/men2.webp',
    productName :"Heritage (MU2PBW25Z9O2)",
    prouctPrice : 4990,
    productCategory :"Men"
    },
    
    {productId :5,
      productImg:'./images/men3.webp',
    productName :"Heritage (MU2PBW25Z9O3)",
    prouctPrice : 4490,
    productCategory :"Men"
    },
    {productId :6,
      productImg:'./images/men4.webp',
    productName :"Onyx (MU2PBW25A10N1)",
    prouctPrice : 3990,
    productCategory :"Men"
    },
    {productId :7,
      productImg:'./images/men5.webp',
    productName :"Incredible (MU2PBW25NO9O1)",
    prouctPrice : 4990,
    productCategory :"Men"
    },
    {productId :8,
    productImg:'./images/men6.webp',
    productName :"Onyx (MU2PBW25A9O1)",
    prouctPrice : 3990,
    productCategory :"Men"
    },
     {productId :9,
    productImg:'./images/men7.webp',
    productName :"Incredible (MUS25BL2227)",
    prouctPrice : 4990,
    productCategory :"Men"
    },
    
     {productId :10,
    productImg:'./images/men8.webp',
    productName :"Incredible (MU2PBW25NO9O2)",
    prouctPrice : 4990,
    productCategory :"Men"
    },
     {productId :11,
    productImg:'./images/men9.webp',
    productName :"Onyx (MU2PBW25A9O2)",
    prouctPrice : 3990,
    productCategory :"Men"
    },
    
     {productId :12,
    productImg:'./images/men10.webp',
    productName :"Incredible (MU2PBW25O9O3)",
    prouctPrice : 4990,
    productCategory :"Men"
    },
    {productId :13,
    productImg:'./images/women2.webp',
    productName :"Rust-Khaddar-3 Piece (SWT213P98P)",
    prouctPrice : 7190,
    productCategory :"Women"
    },
    {productId :14,
    productImg:'./images/women3.webp',
    productName :"Cream-Cambric-2 Piece (WP3PPBS252B7A38)",
    prouctPrice : 6990,
    productCategory :"Women"
    },
    {productId :15,
    productImg:'./images/women4.webp',
    productName :"Black-Khaddar-3 Piece (WP3PPBW25B9O1)",
    prouctPrice : 10990,
    productCategory :"Women"
    },
    {productId :16,
    productImg:'./images/women5.webp',
    productName :"Bisque-Cambric-3 Piece (WP3PPBW25B9O25)",
    prouctPrice : 10490,
    productCategory :"Women"
    },
    {productId :16,
    productImg:'./images/women6.webp',
    productName :"White-Jacquard-3 Piece (WPS25DE3013)",
    prouctPrice : 11990,
    productCategory :"Women"
    },
    {productId :17,
    productImg:'./images/women7.webp',
    productName :"Magenta-Dobby-3 Piece (WPS25DE3016)",
    prouctPrice : 10990,
    productCategory :"Women"
    },
    {productId :18,
    productImg:'./images/women8.webp',
    productName :"P-Yellow-Dobby-3 Piece (WPS25DE3036)",
    prouctPrice : 10990,
    productCategory :"Women"
    },
    {productId :19,
    productImg:'./images/women9.webp',
    productName :"L-Yellow-Dobby-3 Piece (WPS25DE3037)",
    prouctPrice : 11990,
    productCategory :"Women"
    },
    {productId :20,
    productImg:'./images/women10.webp',
    productName :"S-Blue-Jacquard-3 Piece (WPS25JD3043)",
    prouctPrice : 10940,
    productCategory :"Women"
    },
    {productId :21,
    productImg:'./images/unstitch1.webp',
    productName :"Ice - 3 Pc (WU3PPBS25KA8S3)",
    prouctPrice : 5190,
    productCategory :"Unstitch"
    },
    {productId :22,
    productImg:'./images/unstitch2.webp',
    productName :"Vintage Noir - 3 Pc (WU3PPBS25KA8S6)",
    prouctPrice : 5190,
    productCategory :"Unstitch"
    },
    {productId :23,
    productImg:'./images/unstitch3.webp',
    productName :"Festival Bloom - 3 Pc (WU3PPBS25LI8S16)",
    prouctPrice : 3290,
    productCategory :"Unstitch"
    },
    {productId :24,
    productImg:'./images/unstitch4.webp',
    productName :"Jade Elvy - 3 Pc (WU3PPBS25LI8S18)",
    prouctPrice : 3890,
    productCategory :"Unstitch"
    },
    {productId :25,
    productImg:'./images/unstitch5.webp',
    productName :"Spell - 3 Pc (WU3PPBS25LI8S19)",
    prouctPrice : 3290,
    productCategory :"Unstitch"
    },
    {productId :26,
    productImg:'./images/unstitch6.webp',
    productName :"Garden Tapestry - 3 Pc (WU3PPBS25LI8S2)",
    prouctPrice : 3890,
    productCategory :"Unstitch"
    },
  ]
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
export const  store = createStore(ProductReducer);