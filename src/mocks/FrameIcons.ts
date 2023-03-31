import { ReactComponent as VehicleIcon } from "@/assets/icons/ic-vehicle.svg";
import { ReactComponent as ClientIcon } from "@/assets/icons/ic-person.svg";
import { ReactComponent as TriangulationIcon } from "@/assets/icons/ic-triangle.svg";
import { ReactComponent as FinanceIcon } from "@/assets/icons/ic-wallet.svg";
import { ReactComponent as HomeIcon } from "@/assets/icons/ic-home.svg";

export const IconsProperties = [
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