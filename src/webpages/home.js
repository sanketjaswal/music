import { useHistory } from "react-router";
import { Ring } from "./homeComponents/Ring";
import { NavTabs } from "./homeComponents/Nav_tabs";
import { PlayStick } from "./homeComponents/Play_stick";
import { Surrounding } from "./homeComponents/Surrounding";
import "./home.css";

export const Home = () => {
  const history = useHistory();

  const pageChanger = (page) => {
    setTimeout(() => {
      pageHandler(page);
      logoClick_stickRotator_back();
    }, 2500);
  };

  const pageHandler = (page) => {
    history.push(`/${page}`);
  };

  const navs = ["Piano", "Xylophone", "Music", "Drums", "AudioCubes"];
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
    console.log(activeNav);
    logo_change(activeNav);
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
    document
      .getElementsByClassName("base_rotator")[0]
      .setAttribute("id", "base_rotation_on");
    document
      .getElementsByClassName("small_rotator")[0]
      .setAttribute("id", "small_rotation_on");
    document
      .getElementsByClassName("inner_circle")[0]
      .setAttribute("id", "inner_circle_shrink");
    document
      .getElementsByClassName("outer_circle")[0]
      .setAttribute("id", "outer_circle_border");
  };

  const logoClick_stickRotator_back = () => {
    document
      .getElementsByClassName("base_rotator")[0]
      .removeAttribute("id", "base_rotation_on");
    document
      .getElementsByClassName("small_rotator")[0]
      .removeAttribute("id", "small_rotation_on");
    document
      .getElementsByClassName("inner_circle")[0]
      .removeAttribute("id", "inner_circle_shrink");
    document
      .getElementsByClassName("outer_circle")[0]
      .removeAttribute("id", "outer_circle_border");
  };

  const logo_change = (activeNav) => {
    console.log(navs.indexOf(activeNav));
    for (var i = 0; i < navs.length; i++) {
      if (i !== navs.indexOf(activeNav)) {
        document.getElementsByClassName(
          `logo_${navs[i]}_container`
        )[0].style.display = "none";
      } else if (i === navs.indexOf(activeNav)) {
        document.getElementsByClassName(
          `logo_${activeNav}_container`
        )[0].style.display = "flex";
      }
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
