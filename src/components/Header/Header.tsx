import { memo, useContext } from "react";
import "./Header.css";
import { UserManage } from "../UserManage/UserManage";
import { AppStateContext } from "../../states/AppState";

export const Header = memo(() => {
  const { user, isLoggedIn } = useContext(AppStateContext);

  return (
    <div className="header">
      {isLoggedIn ? (
        <UserManage fullName={user.name} icon={user.profile_picture_url} />
      ) : (
        <></>
      )}
    </div>
  );
});
