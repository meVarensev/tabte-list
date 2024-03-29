import React, { FC } from "react";
import { Typography } from "../../shared/ui-kit/typography/typography";
import { Box } from "../../shared/ui-kit/box/box";
import { Person } from "../../entities/person-type";
import styles from "./modal.module.scss";

interface PersonDetailsProps {
  data: Person
}

const PersonDetails: FC<PersonDetailsProps> = ({data}) => (
    <Box className={styles.TypographyContent}>
      <table>
        <tbody>
        <tr>
          <td><Typography label="ФИО:" /></td>
          <td><Typography>{`${data?.firstName} ${data?.lastName} ${data?.maidenName}`}</Typography></td>
        </tr>
        <tr>
          <td><Typography label="Возраст: " /></td>
          <td><Typography>{data?.age}</Typography></td>
        </tr>
        <tr>
          <td><Typography label="Адрес: " /></td>
          <td><Typography>{`${data?.address.address} ${data?.address.city}`}</Typography></td>
        </tr>
        <tr>
          <td><Typography label="Рост: " /></td>
          <td><Typography>{data?.height}</Typography></td>
        </tr>
        <tr>
          <td><Typography label="Вес:" /></td>
          <td><Typography>{data?.weight}</Typography></td>
        </tr>
        <tr>
          <td><Typography label="Номер телефона: " /></td>
          <td><Typography>{data?.phone}</Typography></td>
        </tr>
        <tr>
          <td><Typography label="email-адрес: " /></td>
          <td><Typography>{data?.email}</Typography></td>
        </tr>
        </tbody>
      </table>
    </Box>
  );

export { PersonDetails };
