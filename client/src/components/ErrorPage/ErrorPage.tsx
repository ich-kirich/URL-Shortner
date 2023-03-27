import { useContext } from "react";
import { CONTEXT } from "../../libs/constants";
import ViewError from "../ViewError/ViewError";

function ErrorPage() {
  const { translation } = useContext(CONTEXT);
  return <ViewError>{translation("error_page")}</ViewError>;
}

export default ErrorPage;
