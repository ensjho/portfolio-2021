import { RouteComponentProps } from "react-router-dom";

export interface ErrorPageProps extends RouteComponentProps {
  /** Error object from making an api call */
  error?: any;
}
