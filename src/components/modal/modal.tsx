import { FC } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import { Person } from "../../utils/person-type";
import { ModalContent } from "./modal-content";
import { useFetch } from "../../hook/use-fetch";
import { Typography } from "../typography/typography";
import { Box } from "../box/box";
import { PersonDetailsModal } from "./person-details-modal";

interface ModalProps<T> {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  person: ReturnType<typeof useFetch<T | null>>;
}

const Modal: FC<ModalProps<Person | null>> = ({ showModal, setShowModal, person }) => {
  const { data, isLoading, error } = person;
  return (
    <Box onClick={() => setShowModal(false)}>
      {showModal &&
        createPortal(
          <Box className={styles.modalContainer}>
            {isLoading && <Typography>Loading...</Typography>}
            {error && <Typography>Error: {error.message}</Typography>}
            {data &&
              <Box className={styles.modalContent}>
                <ModalContent onClose={() => setShowModal(false)}>
                  <PersonDetailsModal data={data} />
                </ModalContent>
              </Box>
            }
          </Box>,
          document.body
        )}
    </Box>
  );
};

export { Modal };
