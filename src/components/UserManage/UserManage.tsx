import { memo, useState } from "react";
import { Icon } from "../Icon/Icon";
import ArrowDownIcon from "../../assets/icons/arrow_down.svg";

import "./UserManage.css";
import { IconButton } from "../IconButton/IconButton";
import { UserManageDropdown } from "./Dropdown/UserManageDropdown";

export interface UserManageProps {
  icon?: string;
  fullName?: string;
}

export const UserManage = memo(({ icon, fullName }: UserManageProps) => {
  const [dropDownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div className="user-manage">
        <Icon
          className="user-manage__icon"
          imgClassName="user-manage__user__icon__img"
          src={icon}
          alt="user"
        />
        <div className="user-manage__name">{fullName}</div>
        <IconButton
          buttonClassName="user-manage__icon"
          src={ArrowDownIcon}
          alt="arrow-down"
          onClick={() => setDropdownOpen(!dropDownOpen)}
        />
      </div>
      {dropDownOpen && <UserManageDropdown />}
    </>
  );
});
