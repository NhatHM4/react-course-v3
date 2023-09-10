import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [listTours, setListTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchListTours();
  }, []);

  const handleRemove = (id) => {
    const listToursAfter = listTours.filter((item) => {
      return item.id !== id;
    });
    setListTours(listToursAfter);
  };

  const wait3second = () => {
    setTimeout(() => {
      //do somthing
    }, 3000);
  };

  const fetchListTours = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // wait for 3 seconds
    const res = await fetch(url);
    try {
      if (!res.ok) {
        throw new Error("fetch data fail");
      }
      const data = await res.json();
      console.log(data);
      setListTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container d-flex justify-content-around">
      <Tours listTours={listTours} handleRemove={handleRemove} />
    </div>
  );
};
export default App;
