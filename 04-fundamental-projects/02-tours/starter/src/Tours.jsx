import Tour from "./Tour";

const Tours = (props) => {
  const listTours = props.listTours;

  return (
    <>
      {listTours.map((tour) => {
        return (

            <Tour tour={tour} handleRemove ={props.handleRemove} key={tour.id}/>

        );
      })}
    </>
  );
};

export default Tours;
