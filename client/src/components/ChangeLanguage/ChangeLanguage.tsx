import { Box, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { CONTEXT } from "../../libs/constants";
import { LOCALES } from "../../locales/locales";
import styles from "./ChangeLanguage.module.scss";

function ChangeLanguage() {
  const { locale, setLocale } = useContext(CONTEXT);
  const handleChange = (event: SelectChangeEvent) => {
    setLocale(event.target.value as string);
  };
  return (
    <Box className={styles.choose_wrapper}>
      <Select
        value={locale}
        onChange={handleChange}
        className={styles.choose_list}
      >
        <MenuItem value={LOCALES.RUSSIAN}>
          <FormattedMessage id="ru" />
        </MenuItem>
        <MenuItem value={LOCALES.ENGLISH}>
          <FormattedMessage id="en" />
        </MenuItem>
      </Select>
    </Box>
  );
}
export default ChangeLanguage;
