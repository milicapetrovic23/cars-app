export const CarsList = ({ cars }) => {
  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>
          {car.brand} {car.model}
        </li>
      ))}
    </ul>
  );
};
