import React from "react";
import searchLogo from "../assets/searchLogo.svg";
import axios from 'axios';
const search={
    bar:{
        backgroundImage:`url=(${searchLogo})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition: 'right',
        margin:".5rem",
        borderRadius:".3rem",
        backgroundColor:"#273D49",
        padding:"0.4rem",
        border:"1px solid #14AFF1",
        width:"15rem"
        
        
        }
}
function SearchBar(){
const [searchid,setSearchdata]=React.useState('');
  const handlesearch =(event) =>
  { 
    setTimeout(function(){ 
        setSearchdata(event.target.value)
        event.preventDefault();
        axios.get(`http://localhost:8080/1805054/SearchServlet?searchid=${searchid}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })},10000)
  }
    return(
        <>
        <input style={search.bar} type="text" placeholder="Search By Invoice Number" onChange={handlesearch} />
        </>
    );
}
export default SearchBar;