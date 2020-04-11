import React, {
    useState,
    useContext,
    useEffect
} from 'react'

import {
    v4
} from "uuid";

import axios from 'axios';

import {
    ProductContext
} from "../ProductContext";


import ProductList from "./productlist";
import Menu from "./menu";
import Navbar from "./navbar";

// export default class Layout extends React.Component {
export default function Layout() {

    // componentDidMount() {
    //     // const [,setProducts] = useContext(ProductContext);
    //     const [,setProducts] = this.context;
    //     axios.get('https://ikchkii2sd.execute-api.us-west-2.amazonaws.com/?q=thor')
    //     // axios.get(`http://www.reddit.com/r/reactjs.json`)
    //       .then(res => {
    //         // const posts = res.data.data.children.map(obj => obj.data);
    //         const results = res.data.hits.hits.map(hit => hit._source);
    //        setProducts({ results });
    //       });
    //   }

    const [products,setProducts] = useContext(ProductContext);

    //   useEffect(()=>{
    //     axios.get('https://ikchkii2sd.execute-api.us-west-2.amazonaws.com/?q=thor')
    //     // axios.get(`http://www.reddit.com/r/reactjs.json`)
    //       .then(res => {
    //         // const posts = res.data.data.children.map(obj => obj.data);
    //         const results = res.data.hits.hits.map(hit => hit._source);
    //        setProducts({ results });
    //       },products);
    //   })

    // render() {
        return ( 
            <div>
            {/*<FetchDemo subreddit = "reactjs" />*/}
            <Navbar />
            <div class = "columns" >
            <div class = "column is-one-fifth is-clipped" > <Menu /> </div> 
            <div class = "column" > <ProductList /> </div> 
            </div> 
            </div>
        )
    // }
}