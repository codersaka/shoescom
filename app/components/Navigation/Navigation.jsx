import React from "react";

import styles from "./Navigation.module.css";
import {
  Language,
  Logonav,
  MidNavText,
  NavItems,
  NonLogoNavComponent,
  ProfileSection,
} from "./NavigationHelpers";

const Navigation = ({ isLogoNav, hasNavItems, hasProfile }) => {
  return (
    <nav
      className={`flex justify-between items-center px-2 py-1 text-sm text-white ${
        isLogoNav ? " " : styles.upper_nav
      }`}
    >
      {isLogoNav ? <Logonav /> : <NonLogoNavComponent />}

      {hasNavItems ? <NavItems /> : <MidNavText />}

      {hasProfile ? <ProfileSection /> : <Language />}
    </nav>
  );
};

export default Navigation;
