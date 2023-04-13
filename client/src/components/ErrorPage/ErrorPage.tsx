import { FormattedMessage } from "react-intl";
import ViewError from "../ViewError/ViewError";

function ErrorPage() {
  return (
    <ViewError>
      <FormattedMessage id="error_page" />
    </ViewError>
  );
}

export default ErrorPage;
