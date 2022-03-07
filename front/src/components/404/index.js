import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
import NotFoundSvg from "../../assets/images/undraw_page_not_found_su7k.svg"
import NotFoundPng from "../../assets/images/not_found.png"

const NotFound = () => (
  <>
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%'
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* <Typography
            align="center"
            color="textPrimary"
            variant="h1"
          >
            404: The page you are looking for isn’t here
          </Typography> */}
          <img style={{width: 560, marginTop:"50px"}}
           src={NotFoundSvg} />
          <Typography
            align="center"
            color="textPrimary"
            variant="h4"
          >
            Page inaccessible
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              alt="Under development"
              src={NotFoundPng}
              style={{
                marginTop: 50,
                display: 'inline-block',
                maxWidth: '100%',
                width: 400
              }}
            />
          </Box>
          <NavLink
            to="/"
          >
            <Button
              component="a"
              startIcon={(<ArrowBackIcon fontSize="small" />)}
              sx={{ mt: 3 }}
              variant="contained"
            >
              Go back to Home
            </Button>
          </NavLink>
        </Box>
      </Container>
    </Box>
  </>
);

export default NotFound;