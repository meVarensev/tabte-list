import React from "react";
import {IconX} from  "@tabler/icons-react";

import { Button } from "../button/button";
import { Box } from "../box/box";
import styles from "./modal.module.scss";

interface PropsModalContent {
  onClose: () => void;
  children: React.ReactNode
}

export const ModalContent: React.FC<PropsModalContent> = ({ onClose , children  }) => (
    <Box >
      <Box className={styles.IconXWrapper}>
        <Button type="button" onClick={onClose} variant="contained" isIcon>
          <IconX />
        </Button>
      </Box>
      {children}
      <Box className={styles.CloseWrapper}>
        <Button type="button" onClick={onClose} variant="contained" style={{padding: "10px 75px"}}>
          Close
        </Button>
      </Box>

    </Box>
  );
