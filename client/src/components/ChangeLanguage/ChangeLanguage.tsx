import { Box, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext, useState } from "react";
import i18n from "i18next";
import styles from "./ChangeLanguage.module.scss";
import { CONTEXT } from "../../libs/constants";

function ChangeLanguage() {
  const { translation } = useContext(CONTEXT);
  const [language, setLanguage] = useState(i18n.language);
  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    i18n.changeLanguage(event.target.value as string);
  };
  return (
    <Box className={styles.choose_wrapper}>
      <Select
        value={language}
        onChange={handleChange}
        className={styles.choose_list}
      >
        <MenuItem value="ru">{translation("ru")}</MenuItem>
        <MenuItem value="en">{translation("en")}</MenuItem>
      </Select>
    </Box>
  );
}
export default ChangeLanguage;
