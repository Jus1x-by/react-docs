import "./Navigation.css";

import LogoIcon from "../../assets/icons/navigation/logo.svg";
import HomeIcon from "../../assets/icons/navigation/home.svg";
import PaperIcon from "../../assets/icons/navigation/paper.svg";
import LightIcon from "../../assets/icons/navigation/light.svg";
import GuardIcon from "../../assets/icons/navigation/guard.svg";
import SettingsIcon from "../../assets/icons/navigation/settings.svg";
import { IconButton } from "../IconButton/IconButton";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="navigation">
      <IconButton
        src={LogoIcon}
        alt="logo"
        imgClassName="navigation-button-logo__img"
        buttonClassName={"navigation-button-logo"}
        onClick={() => navigate("/")}
      />
      <IconButton
        src={HomeIcon}
        alt="home"
        imgClassName={"navigation-button-default__img"}
        buttonClassName={"navigation-button-default"}
      />
      <IconButton
        src={PaperIcon}
        alt="paper"
        imgClassName={"navigation-button-default__img"}
        buttonClassName={"navigation-button-default"}
      />
      <IconButton
        src={LightIcon}
        alt="ideas"
        imgClassName={"navigation-button-default__img"}
        buttonClassName={"navigation-button-default"}
      />
      <IconButton
        src={GuardIcon}
        alt="guard"
        imgClassName={"navigation-button-default__img"}
        buttonClassName={"navigation-button-default"}
      />
      <IconButton
        src={SettingsIcon}
        alt="settings"
        imgClassName={"navigation-button-default__img"}
        buttonClassName={"navigation-button-default"}
      />
    </div>
  );
};
