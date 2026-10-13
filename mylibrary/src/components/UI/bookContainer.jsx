import BookItem from "./partsUi/bookItem";

const BookContainer = ({ data }) => {
  return (
    <section className="bookContainer">
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

export default BookContainer;
