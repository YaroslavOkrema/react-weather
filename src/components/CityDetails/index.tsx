import { useParams } from "react-router-dom";

export const CityDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Деталі погоди для міста з ID: {id}</h1>
    </div>
  );
};
