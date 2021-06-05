import React from "react";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="data:image/jpeg;base64,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"
          alt="TS"
        />
        <div className="footer__songInfo">
          <h4>I did something Bad</h4>
          <p>Taylor Swift</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
