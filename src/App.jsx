import { Box, Container, CssBaseline, GlobalStyles } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./routes";


function App() {
  return (
  <BrowserRouter>
  <CssBaseline />
  <GlobalStyles
        styles={{
          html: { height: '100%', overflowX: 'hidden' },
          body: { height: '100%', margin: 0, padding: 0, overflowX: 'hidden' },
          '#root': { height: '100%' },
        }}
      />
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        // minHeight: '100vh',
        // height: '100vh', // Add this to prevent extra scroll
        // overflow: 'hidden' 
      }}>
    <Header />
    <Box sx={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          mt:"64px",
          // minHeight:"calc(100vh - 64px)"
           overflow: 'hidden'
        }}>
    <Box sx={{ flex: 1, overflow:"auto",position:"absolute",top:"64px",left:"0",right:"0",bottom:"0" }}>
      <AppRoutes />
      <Footer  />
    </Box>
    
  </Box>
  </Box>
  
  </BrowserRouter>
  );
}

export default App;