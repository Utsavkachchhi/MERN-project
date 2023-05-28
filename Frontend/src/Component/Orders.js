import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


  


const Order = () => {
    const customer = useSelector((state) => state?.auths?.auths?.data?.data?.id);
    const dispatch = useDispatch();

    const GetCustomerData= async() => {
      await axios.get(`http://localhost:8080/api/cart/cartlist/${customer}`)
      .then(response => {
      //  dispatch(getCartItem(response.data.data))
      })
      .catch(error =>{
        console.log("error",error);
      })
    }
  
    useEffect(() => {
      GetCustomerData();
    })
    const classes = useStyles();

    return  (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Orders Table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>quantity</TableCell>
              <TableCell>Order date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {orders.map((order) => ( */}
              <TableRow>
                <TableCell>11</TableCell>
                <TableCell>11</TableCell>
                <TableCell>11</TableCell>
                <TableCell>11</TableCell>
                <TableCell>11</TableCell>
              </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    
    )

}

export default Order;