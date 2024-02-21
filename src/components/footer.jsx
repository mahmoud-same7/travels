import { Box, Container, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const company = [
    t("Contact Us"),
    t("About"),
    t("Terms & Conditions"),
    t("Refund Policy"),
  ];
  const links = [
    t("Flight"),
    t("Hotel"),
    t("Transfers"),
    t("car"),
    t("Active"),
    t("holiday"),
  ];
  const support = [
    t("Privacy Policy"),
    t("Disclaimer Policy"),
    t("Refund Policy"),
  ];
  return (
    <Box className="footer" sx={{ background: "#000", pt: 10 ,pb:2  }}>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
              <>
                <Box
                  sx={{
                    width: "200px",
                    height: "200px",
                    position: "relative",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "-30px",
                      display: "block",
                    }}
                    src={require('../assets/IMG-20240219-WA0032.jpg')}
                    alt="logo"
                  />
                </Box>
                
              </>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography
                variant="p"
                component="p"
                sx={{ fontWeight: "bold", fs: "18px" , color:'#fff' }}
              >
                {t("CompanyFooter")}
              </Typography>
              <ul>
                {company.map((el, indx) => {
                  return <li key={indx}>{el}</li>;
                })}
              </ul>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography
                variant="p"
                component="p"
                sx={{ fontWeight: "bold", fs: "18px" , color:'#fff'}}
              >
                {t("Quick Links")}
              </Typography>
              <ul>
                {links.map((el, indx) => {
                  return <li key={indx}>{el}</li>;
                })}
              </ul>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography
                variant="p"
                component="p"
                sx={{ fontWeight: "bold", fs: "18px" , color:'#fff' }}
              >
                {t("Supporting")}
              </Typography>
              <ul>
                {support.map((el, indx) => {
                  return <li key={indx}>{el}</li>;
                })}
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{textAlign:'center' , color:'#fff' , pt:3}}>
        <Typography variant="p" component='p'>copy Right &copy; 2024 Developed by M & A</Typography>
      </Box>
    </Box>
  );
};
export default Footer;
