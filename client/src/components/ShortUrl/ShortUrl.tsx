import { Paper, Box, Typography, Button } from "@mui/material";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import styles from "./ShortUrl.module.scss";
import { IShortUrlProps } from "../../types/types";

function ShortUrl(props: IShortUrlProps) {
  const { link } = props;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(link.shortUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <Box className={styles.link_btns}>
      <Paper className={styles.link_wrapper}>
        <Box className={styles.link__textIcon}>
          <AddLinkIcon />
          <Typography variant="body1">{link.shortUrl}</Typography>
        </Box>
        <Button
          onClick={handleCopyClick}
          disabled={isCopied}
          variant="contained"
          color="primary"
        >
          {isCopied ? (
            <FormattedMessage id="copied" />
          ) : (
            <FormattedMessage id="copy" />
          )}
        </Button>
      </Paper>
      <Box className={styles.bts_wrapper}>
        <Button
          component={Link}
          to={`/statistic/${link.shortCode}`}
          variant="contained"
          color="primary"
        >
          <FormattedMessage id="show_statistics" />
        </Button>
      </Box>
    </Box>
  );
}

export default ShortUrl;
