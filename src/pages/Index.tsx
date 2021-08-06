import { useDispatch } from "react-redux";
import { Button } from '@material-ui/core';

// Components
import CardsGrid from "../components/CardsGrid/CardsGrid";

// Actions
import { filterByLikes, filterByComments } from "../store/actions/images";

const Index: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button color="primary" variant="contained" onClick={() => dispatch(filterByLikes())}>Filterby likes</Button>
      <Button color="primary" variant="contained" onClick={() => dispatch(filterByComments())}>Filter by comments</Button>
      <CardsGrid />
    </>
  );
}

export default Index;