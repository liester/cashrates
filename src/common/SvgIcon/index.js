import React from "react";
import { ReactSVG } from "react-svg";

const SvgIcon = (props) => <ReactSVG {...props} src={process.env.PUBLIC_URL+`/img/svg/${props.src}`} />;

export default SvgIcon;
