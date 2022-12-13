import { useQuery } from '@tanstack/react-query';
import { Auth0 } from '../lib/Auth0';
import CatFactService from '../lib/CatFactService';

export default function Home() {
  const catFactService = new CatFactService();
  const { data: catFact, isLoading: isLoadingCatFact } = useQuery(["facts"], catFactService.getCatFact);

  return (
    <>
      {isLoadingCatFact && <div>Loading Cat Facts</div>}
      {catFact && <div>{catFact.fact}</div>}
    </>
  )
}

export const getServerSideProps = Auth0().withPageAuthRequired();
