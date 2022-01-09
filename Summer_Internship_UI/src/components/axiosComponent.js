import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import Checkbox from '@material-ui/core/Checkbox';
import polygon2 from "../assets/polygon2.svg"
import polygon1 from "../assets/polygon1.svg"
import axios from "axios";
import searchLogo from "../assets/searchLogo.svg";
import { CheckRounded } from '@material-ui/icons';
import {Tempcomponent} from "./DeleteModal";
import {Edit} from "./EditModal";

const styles = theme => ({
  root: {
    width: '7vw',
    Height:"5vh",
    align: "center",
    margin:"auto auto",
    overflow: 'auto', 
  },
  table: {
    minWidth: '70vw',
   
  },
  center: {
    margin: "auto",
   width: "50vw",
   border: "3px solid green",
   padding: "10px",
   
  },
  bar: {
    backgroundImage:`url=(${searchLogo})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition: 'right',
    margin:".5rem",
    borderRadius:".3rem",
    backgroundColor:"#273D49",
    padding:"0.4rem",
    border:"1px solid #14AFF1",
    width:"15rem",
    margin:"15px"
   }

});
function Table_data() {
    let [responseData, setResponseData] = React.useState([]);
    let [isNext, isNextFunc] = React.useState(false);
    let [pageCount, setCount] = React.useState(1);
    var [data_arr, setData]=React.useState([]);
    var [searchterm,setSearchterm]=React.useState('');
    var[search,setSearch]=React.useState(false)
    
    const fetchData = () => {
      setTimeout(function(){ 
        let limit=50;
        axios  
          .get(
            `http://localhost:8080/1805054/TableRetrieval?page=${pageCount}&limit=${limit}`)//&limit=10page=${pageCount}&limit=10
          .then((response) => {
            console.log(response);
            console.log(pageCount);
            setCount(pageCount + 1);
            setResponseData([...responseData, ...response.data]);
            isNextFunc(true);
          })
          .catch((error) => {
            console.log(error);
          });
        },50)
    };
    function fetchMoreData() {
      if(pageCount<5001){
        fetchData();
      }
      else{
        isNextFunc(false);  
      } 
    }
   
   useEffect(() => {
		fetchData();
	}, []);

   function checked(docid){
     let newdata=data_arr
     if(newdata.includes(docid)){
       var index=newdata.indexOf(docid);
       newdata.splice(index,1);}
     else{newdata.push(docid);}
     setData(newdata);
   }
   
    return (
      <div>
      <div className={styles.center} >
        <InfiniteScroll
          dataLength={responseData.length}
          next={fetchMoreData}
          hasMore={isNext}
          loader={
            <div
              style={{ height: "80%", paddingLeft: "35%", overflow: "hidden", align:"center"}}
            ><p>...PLEASE WAIT...</p>
              <CircularProgress />
            </div>
          }
        
          
        >
        
        <TableContainer component={Paper}>
        <Paper className={styles.root}  >
        <Table  className={styles.root}>

          
          <TableHead display="block" position="sticky" style={{backgroundColor:'#273D49CC'}}>
            <TableRow >
            <TableCell padding="checkbox" ><Checkbox style={{color:"#97A1A9"}}/></TableCell>
             <TableCell align="left">Customer Name</TableCell>
              <TableCell align="left">Customer number</TableCell>
              <TableCell align="left">Bill_number</TableCell>
              <TableCell align="left">Bill_amount
              <img style={{position:"relative",bottom:".5rem",left:".7rem"}} src={polygon2} alt="Polygon 2"/>
              <img src={polygon1} alt="Polygon 1"/></TableCell>
              <TableCell align="left">Due Date
            <img style={{position:"relative",bottom:".5rem",left:".7rem"}} src={polygon2} alt="Polygon 2"/>
            <img src={polygon1} alt="Polygon 1"/>
            </TableCell>
              <TableCell align="left">Predicted Payment Date</TableCell>
              <TableCell align="left">Predicted aging bucket</TableCell>
              <TableCell align="left">notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
       
          {responseData.filter((data)=>{
            if(searchterm==""){
              return data}
            else if(data.doc_id.includes(searchterm)){
              return data
            }
          }).map((data => (
              <TableRow key={data.doc_id}>
                <TableCell padding="checkbox" onClick={()=>{checked(data.doc_id);Tempcomponent(data_arr);Edit(data_arr);}} style={{backgroundColor:'#273D49CC'}}><Checkbox style={{color:"#97A1A9"}}/></TableCell>
                <TableCell style={{backgroundColor:'#273D49CC'}}>{data.name_customer}</TableCell>
                <TableCell style={{backgroundColor:'#273D49CC'}}>{data.cust_number}</TableCell>
                <TableCell style={{backgroundColor:'#273D49CC'}}>{data.invoice_id}</TableCell>
                <TableCell style={{backgroundColor:'#273D49CC'}}>{data.total_open_amount}</TableCell>
                <TableCell style={{backgroundColor:'#273D49CC'}}>{data.due_in_date}</TableCell>
                <TableCell style={{backgroundColor:'#273D49CC'}}>{}</TableCell>
                <TableCell style={{backgroundColor:'#273D49CC'}}>{}</TableCell>
                <TableCell style={{backgroundColor:'#273D49CC'}}>{data.notes}</TableCell>
              </TableRow>
            )))}
          
        </TableBody>
        </Table>
        </Paper>
        </TableContainer>
        </InfiniteScroll>
       </div>
      </div>
      
    );
  }
  
  export default Table_data;
 