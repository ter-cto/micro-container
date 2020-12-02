import Head from "next/head";

const Header = (await import("header/Header")).default;

const Home = () => (
  <div className="container">
    <Head>
      <title>Homepage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header />
      <h1>Homepage</h1>
    </main>
  </div>
);

export default Home;
