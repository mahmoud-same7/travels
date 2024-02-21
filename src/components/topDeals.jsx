import { Box, Typography, Grid, Container, Button } from "@mui/material";
import { Deal } from "../data";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Deals = () => {
  const [data, setData] = useState([...Deal]);
  const { t } = useTranslation();
  return (
    <Box className="top_Deals" pt={6} pb={6} sx={{ background: "#f4f6f9" }}>
      <Box className="top_Deals_header" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontWeight: "bolder",
            mb: 2,
            p: "10px",
            display: "inline-block",
          }}
        >
          <Typography
            variant="h4"
            component="p"
            color="primary"
            sx={{ display: "inline-block", fontWeight: "bolder" }}
          >
            {t("Top Deals")}
          </Typography>
          {t("world wide")}
        </Typography>
        <Typography
          variant="span"
          component="span"
          sx={{ display: "block", fontSize: "13px", pb: 3 }}
        >
          {t("TopDeals_span")}
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ pt: 3, pb: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {data.length ? (
              data.map((el, indx) => {
                return (
                  <Grid item xs={12} md={3} lg={2} key={indx}>
                    <Box
                      className="grid_box_Deals"
                      sx={{ position: "relative", textAlign: "center" }}
                    >
                      <Box className="image">
                        <img
                          src={el.img}
                          style={{
                            width: "100%",
                            height: '150px',
                          }}
                          alt={el.img}
                        />
                        <Box className="cricle">
                          <Typography variant="p" component="p">
                            up to
                          </Typography>
                          <Typography
                            variant="span"
                            component="span"
                            sx={{ fontWeight: "bold", fontSize: "18px" }}
                          >
                            {el.discount}
                          </Typography>
                        </Box>
                      </Box>
                      <Box className="text_grid">
                        <Typography
                          variant="body1"
                          component="p"
                          sx={{ fontWeight: "bold", mb: 1, pt: 7 }}
                        >
                          {el.title}
                        </Typography>
                        <Typography
                          variant="span"
                          component="span"
                          pb={2}
                          sx={{ display: "block" }}
                        >
                          {el.toursNum} + Tours
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                );
              })
            ) : (
              <Typography
                variant="p"
                component="p"
                color="primary"
                sx={{ textAlign: "center", pt: 4, pb: 4 }}
              >
                no data to show
              </Typography>
            )}
          </Grid>
        </Box>
      </Container>
      <a href="https://expedia.com/affiliate/cfuJMX7" target="blank">
        <Button
          sx={{
            textTransform: "lowercase",
            textAlign: "center",
            m: "auto",
            display: "block",
          }}
        >
          see all flight deals
        </Button>
      </a>
    </Box>
  );
};
export default Deals;
