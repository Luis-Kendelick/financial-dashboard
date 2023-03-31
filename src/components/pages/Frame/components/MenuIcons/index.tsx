import Icon from "components/common/Icon";
import { IconsProperties } from "mocks/FrameIcons";
import { NavLink } from "react-router-dom";

export const MenuIcons = (menuWasOpened: boolean) => (
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
                menuWasOpened && "opacity-100 w-5 h-auto ml-0 z-auto"
              }`}
            >
              <p
                className={`font-inter font-medium ${
                  isActive
                    ? "text-bright-blue"
                    : icon.enabled
                    ? "text-black-87"
                    : "text-light-gray"
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
