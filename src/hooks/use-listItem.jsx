import { useEffect, useState } from "react";

export default function useListItem() {
  const [listItem, setListItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    fetch("data/listitem.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setListItem(data);
      })
      .catch((e) => setError("에러가 발생했습니다."));
    return () => {
      console.log("return");
    };
  }, []);
  return [loading, error, listItem];
}
