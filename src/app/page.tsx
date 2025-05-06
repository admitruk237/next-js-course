import ClientWrapper from './ClientWraper';

export default async function Home() {
  return (
    <main className="p-10">
      <h1
        className="font-bold text-2xl
      mb-10"
      >
        REACT
      </h1>
      <ClientWrapper />
    </main>
  );
}
