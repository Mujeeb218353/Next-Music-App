import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Oops! Looks like you have ventured into unknown territory.</p>
      <Link href="/courses" className="text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
