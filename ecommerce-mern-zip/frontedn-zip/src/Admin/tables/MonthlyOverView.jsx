// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

// ** Icons Imports
import TrendingUp from "mdi-material-ui/TrendingUp";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import DotsVertical from "mdi-material-ui/DotsVertical";
import CellphoneLink from "mdi-material-ui/CellphoneLink";
import AccountOutline from "mdi-material-ui/AccountOutline";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// const salesData = [
//   {
//     users: "length",
//     title: "Customers",
//     color: "success",
//     icon: <AccountOutline sx={{ fontSize: "1.75rem" }} />,
//   },
//   {
//     stats: "511k",
//     title: "Sales",
//     color: "primary",
//     icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
//   },

//   {
//     stats: "1.54k",
//     color: "warning",
//     title: "Products",
//     icon: <CellphoneLink sx={{ fontSize: "1.75rem" }} />,
//   },
//   {
//     stats: "$88k",
//     color: "info",
//     title: "Revenue",
//     icon: <CurrencyUsd sx={{ fontSize: "1.75rem" }} />,
//   },
// ];

// const renderStats = () => {

//   return salesData.map((item, index) => (

//   ))
// }

const MonthlyOverview = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { adminsOrder } = useSelector((store) => store);

  const [users, setUsers] = useState([]);
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await axios.get("/api/users");

      setUsers(response?.data);
      console.log(response?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const loadProduct = async () => {
    try {
      const response = await axios.get("/api/products");

      setProduct(response?.data);
      console.log(response?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const loadOrder = async () => {
    try {
      const response = await axios.get("/api/admin/orders");

      setOrder(response?.data);
      console.log(response?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    loadUsers();
    loadProduct();
    loadOrder();
  }, []);

  return (
    <Card>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
          >
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Total 48.5% growth
            </Box>{" "}
            😎 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />

      <CardContent
        className=" relative"
        sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}
      >
        <Grid container spacing={[5, 0]} className=" relative flex ">
          <Grid item xs={12} sm={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                variant="rounded"
                sx={{
                  mr: 3,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "common.white",
                  
                }}                
              >
                <AccountOutline sx={{ fontSize: "1.75rem" }} />
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption">Customers</Typography>
                <Typography variant="h6">{users?.length}</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                variant="rounded"
                sx={{
                  mr: 3,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "common.white",
                  backgroundColor: "primary",
                }}
              >
                <TrendingUp sx={{ fontSize: "1.75rem" }} />
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption">Sales</Typography>
                <Typography variant="h6">{order?.length}</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                variant="rounded"
                sx={{
                  mr: 3,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "common.white",
                  backgroundColor: " success",
                }}
              >
                <CellphoneLink sx={{ fontSize: "1.75rem" }} />
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption">Products</Typography>
                <Typography variant="h6">{product?.content?.length}</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                variant="rounded"
                sx={{
                  mr: 3,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "common.white",
                  backgroundColor: "info",
                }}
              >
                <CurrencyUsd sx={{ fontSize: "1.75rem" }} />
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption">Revenue</Typography>
                <Typography variant="h6">{users?.length}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
