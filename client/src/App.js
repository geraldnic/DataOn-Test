import Home from "./pages/home";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./pages/catalog";
import Distributors from "./pages/distributors";
import AddDistributor from "./pages/addDistributor";
import EditDistributor from "./pages/editDistributor";
import Upload from "./pages/upload";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Box maxW={"70vw"} mx={"auto"}>
            <Header />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/catalog"
                element={
                  <ProtectedRoute>
                    <Catalog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/distributors"
                element={
                  <ProtectedRoute>
                    <Distributors />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/adddistributor"
                element={
                  <ProtectedRoute>
                    <AddDistributor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/editdistributor/:id"
                element={
                  <ProtectedRoute>
                    <EditDistributor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </Box>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
