import { Stack,IconButton } from "@mui/material";
import {Link} from "react-router-dom";
import {logo} from '../utils/constants';
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";  
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
   <Stack direction = "row"
   alignItems= "center"
    p={2} 
    sx = {{position : 'sticky',background :'#000',top : 0,justifyContent : 'space-between'}}>

<Stack direction="row" alignItems="center">
        <IconButton>
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
      </Stack>
      <SearchBar />
      <IconButton>
        <AccountCircleIcon sx={{ color: "white" }} />
      </IconButton>

   </Stack>
   
  )
}

export default Navbar