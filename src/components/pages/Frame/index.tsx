import React from "react";
import Icon from "components/common/Icon";
import { ReactComponent as VehicleIcon } from "@/assets/icons/ic-vehicle.svg";
import { ReactComponent as ClientIcon } from "@/assets/icons/ic-person.svg";
import { ReactComponent as TriangulationIcon } from "@/assets/icons/ic-triangle.svg";
import { ReactComponent as FinanceIcon } from "@/assets/icons/ic-wallet.svg";
import { ReactComponent as DryveLogo } from "@/assets/icons/dryve-logo.svg";
import { ReactComponent as HomeIcon } from "@/assets/icons/ic-home.svg";
import { NavLink } from "react-router-dom";

const IconsProperties = [
  {
    src: HomeIcon,
    link: "/",
    name: "Início",
    enabled: true,
  },
  {
    src: ClientIcon,
    link: "/clients",
    name: "Clientes",
    enabled: true,
  },
  {
    src: VehicleIcon,
    link: "/vehicles",
    name: "Veículos",
    enabled: true,
  },
  {
    src: TriangulationIcon,
    link: "/triangulation",
    name: "Triangulação",
    enabled: true,
  },
  {
    src: FinanceIcon,
    link: "/finance",
    name: "Financeiro",
    enabled: false,
  },
];

const Frame: React.FC = () => {
  const [isMenuOptionsVisible, setMenuOptionsVisibility] =
    React.useState(false);

  const showMenuOptions = () => {
    setMenuOptionsVisibility(true);
  };

  const collapseMenuOptions = () => {
    setMenuOptionsVisibility(false);
  };

  const MenuIcons = () => {
    return (
      <>
        {IconsProperties.map((icon, index) => (
          <NavLink
            key={index}
            to={icon.link}
            style={{ pointerEvents: icon.enabled ? "auto" : "none" }}
          >
            {({ isActive }) => (
              <div
                className={`w-auto h-8 mb-4 ml-1 flex items-center hover:bg-ice-blue rounded-md`}
              >
                <Icon
                  className={`ml-3 mr-6 ${
                    isActive
                      ? "fill-bright-blue"
                      : icon.enabled
                      ? "fill-light-gray"
                      : "opacity-10 cursor-not-allowed"
                  }`}
                  IconComponent={icon.src}
                  key={index}
                />
                <div
                  className={`opacity-0 w-0 -ml-96 z-0 transition-all duration-500 ease-in-out ${
                    isMenuOptionsVisible &&
                    "opacity-100 w-5 h-auto ml-0 z-auto"
                  }`}
                >
                  <p
                    className={`font-inter font-medium ${
                      isActive ? "text-bright-blue" : icon.enabled ? "text-black-87" : "text-light-gray"
                    }`}
                  >
                    {icon.name}
                  </p>
                </div>
              </div>
            )}
          </NavLink>
        ))}
      </>
    );
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
          <div className="w-full h-auto flex flex-col mt-7">{MenuIcons()}</div>
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
      <div className="absolute bottom-0 flex flex-col w-screen h-[60px] bg-pale-gray z-0 text-brownish-gray text-[14px] font-roboto pl-[110px] pr-[30px]">
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
