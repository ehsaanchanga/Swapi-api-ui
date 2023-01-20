import { filmsUrl } from '../../Urls/baseUrl';

const Films = ({ data }) => {
  return (
    <>
      <h1 className='text-center text-lg '>List of Films</h1>
      <div className='flex flex-wrap gap-3 justify-center'>
        {data?.results?.map((film, index) => {
          return (
            <div key={film.title} className='bg-white p-6 rounded-lg shadow-md'>
              <img
                className='h-36 w-full'
                src={`https://source.unsplash.com/random/?movie&${film.title}`}
                alt={film.title}
              />
              <h2 className='text-lg font-medium mt-4'>{film.title}</h2>
              <p className='text-gray-700'>Director: {film.director}</p>
              <p className='text-gray-700'>
                Release Date: {new Date(film.release_date).toLocaleDateString()}
              </p>
              <p className='text-gray-700'>
                Created On: {new Date(film.created).toLocaleDateString()}
              </p>
              <p className='text-gray-700'>
                Edited On: {new Date(film.edited).toLocaleDateString()}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const delay = (s) => new Promise((resolve) => setTimeout(resolve, s));

  let res = await fetch(`${filmsUrl}`);
  await delay(1000);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Films;
