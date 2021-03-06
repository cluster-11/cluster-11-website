import React, { useState } from "react";
import NavBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import styles from "./app-bar.module.css";
import SearchBar from "../search-bar/search-bar";
import GitHubIcon from "@material-ui/icons/GitHub";
import Tooltip from "@material-ui/core/Tooltip";
import { Props } from "./app-bar.model";

const AppBar: React.FC<Props> = (props: Props) => {
  //the search-bar enter, changes url before completing setHideTitle function. Thats producing the warning
  const [hideTitle, setHideTitle] = useState(false);
  const { backgroundColor } = props;

  return (
    <>
      <div className={styles.root}>
        <NavBar
          position="static"
          className={styles.container}
          style={{
            backgroundColor: backgroundColor
              ? backgroundColor
              : "rgba(22, 22, 22, 1)",
          }}
        >
          <Toolbar className={styles.navBarContent}>
            {/* <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
            <h3 className={hideTitle ? styles.titleSM : styles.title}>
              Cluster 11
            </h3>
            <span
              className={
                hideTitle
                  ? styles.githubIconContainerSM
                  : styles.githubIconContainer
              }
            >
              <a
                href="https://github.com/cluster-11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Tooltip
                  title="view github organization"
                  aria-label="view github organization"
                >
                  <IconButton>
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              </a>
            </span>

            <SearchBar setHideTitle={setHideTitle} />
          </Toolbar>
        </NavBar>
      </div>
    </>
  );
};

export default AppBar;
