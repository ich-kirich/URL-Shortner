import { useContext } from "react";
import { CONTEXT } from "../../libs/constants";
import { IChildernProps } from "../../types/types";

function ViewError(props: IChildernProps) {
  const { children } = props;
  const { translation } = useContext(CONTEXT);
  return (
    <h1>
      {translation("there_was_error")} {children}
    </h1>
  );
}

export default ViewError;
