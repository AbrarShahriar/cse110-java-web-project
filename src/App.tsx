import "./styles/splash.scss";
import SplashScreen from "./pages/SplashScreen";
import { useEffect } from "react";
import { translations } from "./lang";
import { slugify } from "./lib/utils";

function App() {
  useEffect(() => {
    console.log("App useEffect");

    if (!localStorage.getItem("sections")) {
      console.log("LS item not found: creating LS item");

      let localSectionData = translations.roadmapData.map((el, i) => ({
        index: i,
        slug: slugify(el.title.en),
        locked: i == 0 ? false : true,
      }));

      localStorage.setItem("sections", JSON.stringify(localSectionData));
      console.log("LS item created");
    }
  }, []);
  return <SplashScreen />;
}

export default App;
