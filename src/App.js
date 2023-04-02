import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";
import Guide from "./pages/Guide/Guide";
import WorkShop from "./pages/WorkShop/WorkShop";
import Offers from "./pages/Offers/offers";
(function(d, m){
  var kommunicateSettings = 
      {"appId":"58684b090878f5375ef61651806b5a0b","popupWidget":true,"automaticChatOpenOnNavigation":true};
  var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div
      className="App" 
    >
    
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />


          <Route
          path="/guide"
          element={user ? <Guide /> : <Navigate to="../auth" />}
        />

          <Route
          path="/workshops"
          element={user ? <WorkShop /> : <Navigate to="../auth" />}
        />

         <Route
          path="/offers"
          element={user ? <Offers /> : <Navigate to="../auth" />}
        />


      </Routes>
    </div>
  );
}

export default App;
