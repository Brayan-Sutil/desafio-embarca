import { Typography, Skeleton } from "@mui/material";
import { useCharacterData } from "../../hook/useCharacterData";
import { useState, useEffect, memo } from "react";

interface IProps {
  label: string;
  value: string | string[];
}

const CharacterDetails = ({ label, value }: IProps) => {
  const { getCharacterData } = useCharacterData();
  const [data, setData] = useState<string | string[]>();

  useEffect(() => {
    if (value.length > 0) {
      if (!Array.isArray(value) && value.substring(0, 4) !== "http") {
        setData(value);
      } else {
        setData(undefined);
        if (Array.isArray(value)) {
          value.forEach((item) => {
            getCharacterData(item).then((res) => {
                const name = res.name ?? res.title
               setData((prev) =>
                 Array.isArray(prev) ? [...prev, name] : [name]
               );
            });
          });
        } else {
          getCharacterData(value).then((res) => {
            setData(res.name);
          });
        }
      }
    }
  }, [value]);

  return data ? (
    <li>
      <Typography>{`${label}: ${data}`}</Typography>
    </li>
  ) : (
    <Skeleton />
  );
};
export default memo(CharacterDetails);
