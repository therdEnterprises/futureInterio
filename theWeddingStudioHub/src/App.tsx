import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          {/*public routes*/}
          <Routes>
            {/* <Route path="/login" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="email" element={<LoginEmail />} />
              <Route path="mobile" element={<MobileNumber />} />
              <Route path="otp" element={<MobileOtp />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route
                path="reset-password/:email/:password"
                element={<ResetPassword />}
              />
            </Route> */}
            <Route path="/" element={<Home />} />

            {/* <Route path="*" element={<NotFound />} /> */}

            {/*private routes*/}
            {/* <Route path="/coach" element={<CoachLayout />}>
              <Route index element={<CoachHome />} />
              <Route path="calendar" element={<CoachCalendar />} />
            </Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
