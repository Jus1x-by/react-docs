import { useContext } from "react";
import { Icon } from "../../Icon/Icon";
import "./UserManageDropdown.css";
import { AppStateContext } from "../../../states/AppState";
import ExitIcon from "../../../assets/icons/exit.svg";
import { useNavigate } from "react-router-dom";

export const UserManageDropdown = () => {
  const { user, logout } = useContext(AppStateContext);
  const navigate = useNavigate();

  return (
    <div
      className="user-manage-dropdown__container"
      data-testid="user-manage-dropdown"
    >
      <div className="user-manage-dropdown__user-name-container">
        <Icon
          src={user.profile_picture_url}
          alt="user-img-big"
          className="user-manage-dropdown__profile__pic"
        />
        <div className="user-manage-dropdown__user-name">
          <div className="user-manage-dropdown__user-text">{user.name}</div>
          <div className="user-manage-dropdown__user-recipient">Recipient</div>
        </div>
      </div>
      <div className="user-manage-dropdown__separator"></div>
      {/* Make it button, bc accessibility */}
      <div className="user-manage-dropdown__bottom" onClick={() => {
        logout()
        navigate('/')
      }}>
        <Icon src={ExitIcon} alt="exit" />
        <div className="user-manage-dropdown__bottom-text">Logout</div>
      </div>
    </div>
  );
};
