import React from "react";
import Icon from "components/common/Icon";
import { ReactComponent as DryveLogo } from "@/assets/icons/dryve-logo.svg";
import { NavLink } from "react-router-dom";
import { MenuIcons } from "./components/MenuIcons";

const Frame: React.FC = () => {
  const [isMenuOptionsVisible, setMenuOptionsVisibility] =
    React.useState(false);

  const showMenuOptions = () => {
    setMenuOptionsVisibility(true);
  };

  const collapseMenuOptions = () => {
    setMenuOptionsVisibility(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-[80px] h-screen transition-width duration-700 ease-in-out hover:w-[240px] bg-white border-r-2 border-neutral-200 z-50 border-solid`}
        onMouseEnter={showMenuOptions}
        onMouseLeave={collapseMenuOptions}
      >
        <div className="flex flex-col h-full w-full pl-3 pr-3">
          <div className="w-14 h-14 bg-bright-blue rounded-full mt-10 flex justify-center items-center">
            <img
              src="https://avatars.githubusercontent.com/u/52474261?v=4"
              alt="avatar"
              className="w-10/12 h-10/12 rounded-full border-solid border-white box-content border-2"
            />
          </div>
          <div className="w-full h-auto flex flex-col mt-7">{MenuIcons(isMenuOptionsVisible)}</div>
        </div>
      </div>
      <div className="fixed top-0 w-screen h-[70px] bg-white z-0 flex items-center pl-20 border-b-2 border-neutral-200 border-solid">
        <NavLink
          to={"/"}
          className="flex flex-row items-end h-3/6 w-auto -mb-[6px]"
        >
          <Icon IconComponent={DryveLogo} className="w-[101px] ml-[30px]" />
          <p className="w-auto text-light-gray text-[10px] pb-[4px] ml-[7px] font-roboto">
            BACKOFFICE
          </p>
        </NavLink>
      </div>
      <div className="absolute bottom-0 flex flex-col w-screen h-[66px] bg-pale-gray z-0 text-brownish-gray text-[14px] font-roboto pl-[110px] pr-[30px]">
        <div className="h-[1px] w-full bg-neutral-300" />
        <div className="flex items-center justify-between w-full h-full">
          <p>2020 © Dryve Tecnologia Ltda.</p>
          <p>Versão 1.0.1</p>
        </div>
      </div>
    </>
  );
};

export default Frame;
