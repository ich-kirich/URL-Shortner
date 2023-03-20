import { Box, TextField } from "@mui/material";
import { useState } from "react";
import ShortnerBtn from "../ShortnerBtn/ShortnerBtn";
import isValidUrl from "../../libs/link";
import styles from "./InputUrl.module.scss";

function InputUrl() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(true);
  return (
    <>
      <Box className={styles.inputShortner__wrapper}>
        <TextField
          id="currecny"
          label="Enter your url..."
          variant="filled"
          size="medium"
          type="url"
          value={value}
          fullWidth
          error={error}
          helperText={error ? "Enter url..." : ""}
          FormHelperTextProps={{
            classes: { root: styles.shortner__helperText },
          }}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={() => setError(!isValidUrl(value))}
          className={styles.shortner__input}
        />
      </Box>
      <ShortnerBtn url={value} isError={error} />
    </>
  );
}

export default InputUrl;
