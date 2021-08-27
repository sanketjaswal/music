import { useHistory } from "react-router";
import { Ring } from "./homeComponents/Ring";
import { NavTabs } from "./homeComponents/Nav_tabs";
import { PlayStick } from "./homeComponents/Play_stick";
import { Surrounding } from "./homeComponents/Surrounding";
import "./home.css";

export const Home = () => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("This will run after 1 second!");
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // });

  const history = useHistory();

  const pageChanger = (page) => {
    setTimeout(() => {
      handleClick(page);
    }, 3000);
  };

  const handleClick = (page) => {
    console.log("mangekyo");
    history.push(`/${page}`);
  };

  const navs = ["Piano", "XyloPhone", "Music", "Drums", "AudioCubes"];
  let activeIndex = 2;
  let activeNav = navs[activeIndex];

  var rot = 0;
  const navRotator = (evt) => {
    if (evt.target.id === "up_btn") {
      rot += 45;
      document.getElementsByClassName(
        "tabs_holding_circle"
      )[0].style.transform = "rotate(" + rot + "deg)";
      activeIndex -= 1;
      activeNav = navs[activeIndex];
    } else if (evt.target.id === "down_btn") {
      rot -= 45;
      document.getElementsByClassName(
        "tabs_holding_circle"
      )[0].style.transform = "rotate(" + rot + "deg)";
      activeIndex += 1;
      activeNav = navs[activeIndex];
    }
    logoChanger(activeNav);
    navRotatorDisappearer(evt);
  };

  const navRotatorDisappearer = (evt) => {
    if (
      document.getElementsByClassName("tabs_holding_circle")[0].style
        .transform === "rotate(90deg)"
    ) {
      evt.target.style.display = "none";
    } else if (
      document.getElementsByClassName("tabs_holding_circle")[0].style
        .transform === "rotate(-90deg)"
    ) {
      evt.target.style.display = "none";
    } else {
      document.getElementsByClassName("arrows")[0].style.display = "flex";
      document.getElementsByClassName("arrows")[1].style.display = "flex";
    }
  };

  const logoClick_stickRotator = () => {
    document.getElementsByClassName("base_rotator")[0].style.transform =
      "rotate(160deg)";
    document.getElementsByClassName("small_rotator")[0].style.transform =
      "rotate(-30deg)";
    document.getElementsByClassName("inner_circle")[0].style.padding = "45px";
    document.getElementsByClassName("outer_circle")[0].style.border =
      "5px solid rgb(175, 175, 175)";
    document.getElementsByClassName("inner_circle")[0].style.padding = "45px";
  };

  const logoChanger = (activeNav) => {
    if (activeNav === "Piano") {
      document.getElementsByClassName("logo_piano_container")[0].style.display =
        "flex";
      document.getElementsByClassName("logo_xylo_container")[0].style.display =
        "none";
    } else if (activeNav === "XyloPhone") {
      document.getElementsByClassName("logo_piano_container")[0].style.display =
        "none";
      document.getElementsByClassName("logo_xylo_container")[0].style.display =
        "flex";
      document.getElementsByClassName("music_logo_container")[0].style.display =
        "none";
    } else if (activeNav === "Music") {
      document.getElementsByClassName("logo_xylo_container")[0].style.display =
        "none";
      document.getElementsByClassName("music_logo_container")[0].style.display =
        "block";
      document.getElementsByClassName("logo_drums_container")[0].style.display =
        "none";
    } else if (activeNav === "Drums") {
      document.getElementsByClassName("music_logo_container")[0].style.display =
        "none";
      document.getElementsByClassName("logo_drums_container")[0].style.display =
        "block";
      document.getElementsByClassName(
        "logo_audioCubes_container"
      )[0].style.display = "none";
    } else if (activeNav === "AudioCubes") {
      document.getElementsByClassName("logo_drums_container")[0].style.display =
        "none";
      document.getElementsByClassName(
        "logo_audioCubes_container"
      )[0].style.display = "block";
    }
  };

  return (
    <div className="home">
      <NavTabs navs={navs} navRotator={navRotator} />
      <Ring click={logoClick_stickRotator} pageChanger={pageChanger} />
      <Surrounding />
      <PlayStick />
    </div>
  );
};
