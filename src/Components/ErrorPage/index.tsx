import React from "react";
import { withRouter} from "react-router-dom";
import { Button } from "@material-ui/core";
import { ErrorPageProps } from "./types";
import { ErrorPageStyles } from "./style";

const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const { error } = props;

  const epClasses = ErrorPageStyles();

  const errorCodeGenerator = () => {
    if (error) {
      let code = error.status.toString();

      let output = [];
      let i = 0;

      while (i < code.length) {
        console.log(output, code[i], code);
        output.push(<span> {code[i]}</span>);
        i++;
      }

      return output;
    } else {
      return (
        <>
          <span>5</span>
          <span> 0</span>
          <span> 0</span>{" "}
        </>
      );
    }
  };

  return (
    <div>
      <p className={epClasses.errorPageAnimator}>
        <span>E</span>
        <span>R</span>
        <span>R</span>
        <span>O</span>
        <span>R</span>
        <br />
        {errorCodeGenerator()}
      </p>
      <div className={epClasses.errorPageTexts}>
        We are sorry, currently the site is experiencing an error.
        <br></br>
        Please come back later
      </div>

      <Button
        className={epClasses.homeButton}
        onClick={() => props.history.push("/")}
      >
        Go To Mainpage
      </Button>
    </div>
  );
};

export default withRouter(ErrorPage);
