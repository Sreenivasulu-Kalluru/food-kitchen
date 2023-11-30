import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const { status, statusText, error } = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2 text-white bg-black">
      <h2 className="text-3xl text-red-600 sm:text-6xl font-GrotBlack">
        <span>{status}</span> {statusText} !!!
      </h2>
      <p className="text-2xl sm:text-3xl font-GrotMed">{error?.message}</p>
      <Link
        to="/"
        className="flex items-center justify-center w-24 h-10 mt-3 text-base text-black bg-white rounded-md font-GrotMed"
      >
        Go Back
      </Link>
    </div>
  );
};

export default Error;
