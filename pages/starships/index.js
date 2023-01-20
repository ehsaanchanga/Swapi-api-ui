import { useRouter } from 'next/router';
import { starshipsUrl } from '../../Urls/baseUrl';
import Pagination from '../../components/Pagination';

const Starships = ({ data }) => {
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
      <h1 className='text-center text-lg '>List of Starships</h1>
      <div className='flex flex-wrap  '>
        {data?.results?.map((starship, index) => {
          return (
            <div key={starship.name} className='w-full md:w-1/3 p-2'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <img
                  className='h-36 w-full'
                  src={`https://source.unsplash.com/random/?starship&${starship.name}`}
                  alt={starship.name}
                />
                <h2 className='text-lg font-bold mt-4'>{starship.name}</h2>
                <div className='flex flex-wrap justify-between gap-1'>
                  <p className='text-gray-700'>Model: {starship.model}</p>
                  <p className='text-gray-700'>
                    Capacity: {starship.cargo_capacity}
                  </p>
                  <p className='text-gray-700'>
                    Consumables: {starship.consumables}
                  </p>
                  <p className='text-gray-700'>
                    Manufacturer: {starship.manufacturer}
                  </p>
                  <p className='text-gray-700'>
                    Passengers: {starship.passengers}
                  </p>

                  <p className='text-gray-700'>
                    Created On:{' '}
                    {new Date(starship.created).toLocaleDateString()}
                  </p>
                  <p className='text-gray-700'>
                    Edited On: {new Date(starship.edited).toLocaleDateString()}
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

  let res = await fetch(`${starshipsUrl}?page=${page}`);
  await delay(1000);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Starships;
