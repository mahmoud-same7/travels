import { Box, Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
const Top_Hotel_Part = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ pt: 8, pb: 4}}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: "bolder", mb: 6 }}
        >
          {t("Top Hotel Destination")}
        </Typography>
        <Box sx={{ flexGrow: 1  , direction:'ltr'  }}>
          <Grid container spacing={2}>
            <Grid item xs={8} md={3}>
              <Box className="grid_box" sx={{ position: "relative" }}>
                <a href="https://expedia.com/affiliate/rvx7Mp8" target="blank">
                  <img
                    src={require('../assets/sunset-8327637_640.jpg')}
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "100%",
                    }}
                    alt=""
                  />
                </a>
                <Box className="text_grid">
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    london
                  </Typography>
                  <Typography variant="span" component="span">
                    (0 hotels)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} md={5}>
              <Box className="grid_box" sx={{ position: "relative" }}>
                <a href="https://expedia.com/affiliate/rvx7Mp8" target="blank">
                  <img
                    src={require('../assets/chinatown-4582511_640.jpg')}
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "100%",
                    }}
                    alt=""
                  />
                </a>
                <Box className="text_grid">
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontWeight: "bold" }}
                  >
                    Paris
                  </Typography>
                  <Typography variant="span" component="span">
                    (0 hotels)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="grid_box" sx={{ position: "relative" }}>
                <a href="https://expedia.com/affiliate/rvx7Mp8" target="blank">
                  <img
                    src={require("../assets/city-of-london-4481399_640.jpg")}
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "100%",
                    }}
                    alt=""
                  />
                </a>
                <Box className="text_grid">
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontWeight: "bold" }}
                  >
                    london
                  </Typography>
                  <Typography variant="span" component="span">
                    (0 hotels)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={8}>
              <Box className="grid_box" sx={{ position: "relative" }}>
                <a href="https://expedia.com/affiliate/rvx7Mp8" target="blank">
                  {" "}
                  <img
                    src={require('../assets/istanbul-4785964_640.jpg')}
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "100%",
                    }}
                    alt=""
                  />
                </a>
                <Box className="text_grid">
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontWeight: "bold" }}
                  >
                    Dubai
                  </Typography>
                  <Typography variant="span" component="span">
                    (0 hotels)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box className="grid_box" sx={{ position: "relative" }}>
                <a href="https://expedia.com/affiliate/rvx7Mp8" target="blank">
                  <img
                    src={require('../assets/mosque-3905675_640.jpg')}
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "100%",
                    }}
                    alt=""
                  />
                </a>
                <Box className="text_grid">
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontWeight: "bold" }}
                  >
                    Türkiye city
                  </Typography>
                  <Typography variant="span" component="span">
                    (0 hotels)
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default Top_Hotel_Part;
