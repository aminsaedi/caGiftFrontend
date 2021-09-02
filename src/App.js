import { Provider } from "react-redux";

import "./normalize.css";
import "./App.css";

import configureStore from "./store/configureStore";

import Navbar from "./components/Navbar";
import LandingBanners from "./components/LandingBanners";
import SwippableProducts from "./components/SwippableProducts";
import TextedBanner from "./components/TextedBanner";
import FAQ from "./components/FAQ";
import CallUs from "./components/CallUs";
import Footer from "./components/Footer";

function App() {
  const store = configureStore();
  document.title = "سی‌ای گیفت";
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <LandingBanners />
        <SwippableProducts
          label="جدید ترین گیفت کارت هامون"
          subLabel="محصولات جدیدمون"
          link="#"
        />
        <TextedBanner />
        <SwippableProducts label="جدید ترین گیفت کارت هامون" />
        <SwippableProducts
          label="محبوب ترین اکانت های بازی هامون"
          subLabel="اکانت های بازیمون"
          link="/"
        />
        <TextedBanner imageOnLeft />
        <FAQ />
        <CallUs />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
