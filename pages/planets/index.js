import { useRouter } from 'next/router';
import { planetsUrl } from '../../Urls/baseUrl';
import Pagination from '../../components/Pagination';

const Planets = ({ data }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(
      {
        query: { page: page },
      },
      undefined,
      { shallow: false }
    );
  };
  return (
    <>
      <h1 className='text-center text-lg '>List of Planets</h1>
      <div className='flex flex-wrap  '>
        {data?.results?.map((planet, index) => {
          return (
            <div key={planet.name} className='w-full md:w-1/3 p-2'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <img
                  className='h-36 w-full'
                  src={`https://source.unsplash.com/random/?planet&${planet.name}`}
                  alt={planet.name}
                />
                <h2 className='text-lg font-bold mt-4'>{planet.name}</h2>
                <div className='flex flex-wrap justify-between gap-1'>
                  <p className='text-gray-700'>
                    Population: {planet.population}
                  </p>
                  <p className='text-gray-700'>Climate: {planet.climate}</p>
                  <p className='text-gray-700'>Terrian: {planet.terrain}</p>
                  <p className='text-gray-700'>Diameter: {planet.diameter}</p>

                  <p className='text-gray-700'>
                    Created On: {new Date(planet.created).toLocaleDateString()}
                  </p>
                  <p className='text-gray-700'>
                    Edited On: {new Date(planet.edited).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination count={data?.count} parentPageChange={handlePageChange} />
    </>
  );
};

export async function getServerSideProps(context) {
  const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));

  const { query } = context;
  const page = query.page || 1;

  let res = await fetch(`${planetsUrl}?page=${page}`);
  await delay(1000);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Planets;
