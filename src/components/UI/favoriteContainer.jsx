import BookItem from "./partsUi/bookItem";

const FavContainer = ({ data }) => {
  return (
    <section className="BookContainer">
      {data.map((book) => (
        <BookItem
          title={book.title}
          cover={book.cover_i}
          key={book.key}
        ></BookItem>
      ))}
    </section>
  );
};

export default FavContainer;