import React, { FC } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import { Person } from "../../entities/person-type";
import { ModalContent } from "./modal-content";
import { useFetch } from "../../shared/hook/use-fetch";
import { Typography } from "../../shared/ui-kit/typography/typography";
import { Box } from "../../shared/ui-kit/box/box";
import { PersonDetails } from "./person-details";
import { Loader } from "../../shared/ui-kit/loader/loader";

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
            {isLoading && <Loader/>}
            {error && <Typography>Error: {error.message}</Typography>}
            {data &&
              <Box className={styles.modalContent}>
                <ModalContent onClose={() => setShowModal(false)}>
                  <PersonDetails data={data} />
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
