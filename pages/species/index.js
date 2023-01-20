import { useRouter } from 'next/router';
import { speciesUrl } from '../../Urls/baseUrl';
import Pagination from '../../components/Pagination';

const Species = ({ data }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(`/species/?page=${page}`);
  };
  return (
    <>
      <h1 className='text-center text-lg '>List of Species</h1>
      <div className='flex flex-wrap  '>
        {data?.results?.map((specie, index) => {
          return (
            <div key={specie.name} className='w-full md:w-1/3 p-2'>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <img
                  className='h-36 w-full'
                  src={`https://source.unsplash.com/random/?species&${specie.name}`}
                  alt={specie.name}
                />
                <h2 className='text-lg font-bold mt-4'>{specie.name}</h2>
                <div className='flex flex-wrap justify-between gap-1'>
                  <p className='text-gray-700'>
                    Classification: {specie.classification}
                  </p>
                  <p className='text-gray-700'>
                    Designation: {specie.designation}
                  </p>
                  <p className='text-gray-700'>
                    Lifespan: {specie.average_lifespan}
                  </p>

                  <p className='text-gray-700'>
                    Created On: {new Date(specie.created).toLocaleDateString()}
                  </p>
                  <p className='text-gray-700'>
                    Edited On: {new Date(specie.edited).toLocaleDateString()}
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

  let res = await fetch(`${speciesUrl}?page=${page}`);
  await delay(1000);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Species;
