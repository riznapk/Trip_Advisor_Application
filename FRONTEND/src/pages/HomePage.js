import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import tourImage from "../assets/images/tour.jpg";
import travelImage from "../assets/images/travel.jpg";
import background from "../assets/images/bg1.jpg";

const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#E8F5E6",
    // backgroundImage: { background },
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    maxWidth: 345,
    margin: "0 16px",
  },
  cardImage: {
    height: 140,
  },
};

function HomePage() {
  return (
    <>
      <Header />
      <div style={styles.cardContainer}>
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} md={3}>
            <Link to="/package-list" style={{ textDecoration: "none" }}>
              <Card style={styles.card}>
                <CardMedia
                  style={styles.cardImage}
                  image={travelImage} // replace with your own image URL
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Travel Packages
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Create and Manage Travel Packages
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Link to="/tour-list" style={{ textDecoration: "none" }}>
              <Card style={styles.card}>
                <CardMedia
                  style={styles.cardImage}
                  image={tourImage} // replace with your own image URL
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tour Services
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Create and Manage Tour Services
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomePage;
