import { createContext, ReactNode } from "react";
import portfolioConfig from "../config/portfolio.json";
import { PortfolioConfig } from "../types/config.ts";

export const PortfolioConfigContext = createContext<PortfolioConfig | null>(
  null,
);

export const PortfolioConfigProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <PortfolioConfigContext.Provider value={portfolioConfig}>
      {children}
    </PortfolioConfigContext.Provider>
  );
};
