import { ComponentType } from "react";

export interface IInfoCardProps {
    title: string;
    value: string;
    percentage: number;
    icon: ComponentType;
    className?: string;
    avgPriceIsDropping: boolean;
  }