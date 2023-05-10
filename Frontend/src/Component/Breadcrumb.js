import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import { useLocation,Link as RouterLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
function toTitleCase(str) {
    return str.replace(/\b\w+/g, function (s) {
      return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()
    })
  }

const Breadcrumb = () => {

    const mystyle = {
        backgroundColor : "hsl(0deg 0% 50% / 20%)",
        padding: "10px 10px",
        color: "blue",
        fontSize: "12px"
     }

let location = useLocation();
// console.log(location)
const pathnames = location.pathname.split('/').filter((x) => x)
// console.log(pathnames);

return(
    
    <Breadcrumbs aria-label="breadcrumb" style={mystyle}>
    
    <Link color='inherit' component={RouterLink} to='' className="breadcrumb-menu" >
       <HomeIcon style={{verticalAlign:"middle"}}/>
       <label style={{verticalAlign:"middle"}}>Home</label> 
         </Link>
    {
        pathnames.map((value,index) => {
            const last = index  === pathnames.length - 1;
            const to = `/${pathnames.slice(0,index+1).join('/')}`
       
    return last ? (
          <Typography color='textPrimary' key={to} style={{verticalAlign:"middle"}} className="breadcrumb-menu">
            {toTitleCase(value)}
          </Typography>
        ) : (
          <Link color='inherit' component={RouterLink} to='/' key={to} style={{verticalAlign:"middle"}} className="breadcrumb-menu">
            {toTitleCase(value)}
          </Link>
        )
      })}

    </Breadcrumbs>
)
}
export default Breadcrumb;