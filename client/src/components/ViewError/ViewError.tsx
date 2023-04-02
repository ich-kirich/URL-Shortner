import { FormattedMessage } from "react-intl";
import { IChildernProps } from "../../types/types";

function ViewError(props: IChildernProps) {
  const { children } = props;
  return (
    <h1>
      <FormattedMessage id="there_was_error" />
      <FormattedMessage id={children as string} />
    </h1>
  );
}

export default ViewError;
