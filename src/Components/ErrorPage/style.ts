import { makeStyles } from "@material-ui/core";

const t = "2s";
const d = "0.08em";
const e = "cubic-bezier(0.860, 0.000, 0.070, 1.000)";
const front = "black";
const back = "lightblue";

function animationFunc() {
  return {
    "0%": {
      transform: "translate3d(0,0,0)",
      textShadow: `0em 0em 0 ${back}`,
      color: front,
    },
    "30%": {
      transform: "translate3d(0,0,0)",
      textShadow: `0em 0em 0 ${back}`,
      color: front,
    },
    "70%": {
      transform: `translate3d(${d},-${d},0)`,
      textShadow: `-${d} ${d} ${back}`,
      color: front,
    },
    "100%": {
      transform: `translate3d(${d},-${d},0)`,
      textShadow: `-${d} ${d} ${back}`,
      color: front,
    },
  };
}

export const ErrorPageStyles = makeStyles((theme) => ({
  errorPageAnimator: {
    fontFamily: "Futura, sans-serif",
    fontWeight: 900,
    fontSize: "100px",
    animation: `$ani ${t} infinite alternate ${e}`,
  },
  errorPageTexts: {
    textAlign: "left",
    fontFamily: "Futura, sans-serif",
    fontSize: "25px",
    marginTop: 20,
    marginLeft: 5,
  },
  span: {
    position: "relative",
    display: "inline-block",
    animation: `ani ${t} infinite alternate ${e}`,
  },
  homeButton: {
    marginTop: 50,
    marginLeft: 5,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    boxShadow: "none",
    border: "none",
    fontWeight: "bold",
  },
  "@keyframes ani": {
    ...animationFunc(),
  },
  "@for i from 1 through 3": {
    "&:nth-last-child(#{$i}3)": { animationDelay: "-1s*$i/3/2" },
  },
}));

export const DashboardButtonStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    boxShadow: "none",
    border: "none",
    fontWeight: "bold",
  },
}));
