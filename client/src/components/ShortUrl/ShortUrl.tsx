import { Paper, Box, Typography, Button } from "@mui/material";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ShortUrl.module.scss";
import { IShortUrlProps } from "../../types/types";
import { CONTEXT } from "../../libs/constants";

function ShortUrl(props: IShortUrlProps) {
  const { link } = props;
  const { translation } = useContext(CONTEXT);
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
          {isCopied ? translation("copied") : translation("copy")}
        </Button>
      </Paper>
      <Box className={styles.bts_wrapper}>
        <Button
          component={Link}
          to={`/statistic/${link.shortCode}`}
          variant="contained"
          color="primary"
        >
          {translation("show_statistics")}
        </Button>
      </Box>
    </Box>
  );
}

export default ShortUrl;
