import Head from 'next/head';
    import Link from 'next/link';

    const Home: React.FC = () => {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Head>
            <title>Sports Quiz</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              Welcome to the Sports Quiz!
            </h1>

            <p className="mt-3 text-2xl">
              Test your sports knowledge
            </p>

            <div className="flex items-center justify-center mt-6">
              <Link href="/quiz" passHref>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Start Quiz
                </button>
              </Link>
            </div>
          </main>
        </div>
      );
    };

    export default Home;
