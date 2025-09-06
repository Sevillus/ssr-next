import { notFound } from 'next/navigation';
import Navbar from "@/app/compontents/Navbar";
import Header from "@/app/compontents/Header";
import Gallery from './compontents/Gallery';


// Funkcja, która celowo opóźni renderowanie SSR i wpłynie na TTI
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Celowo ciężka operacja, która opóźni SSR i zablokuje serwer
const heavyTask = (iterations: number) => {
  let result = 0;
  for (let i = 0; i < iterations; i++) {
    result += Math.sqrt(i);
  }
  return result;
};

async function getData() {
  console.log("Serwer: Rozpoczęto generowanie strony.");

  // Symulacja długiego opóźnienia sieciowego na serwerze
  await delay(100);

  // Celowo blokujące zadanie na serwerze, które opóźnia TTI
  const serverResult = heavyTask(50000000);
  console.log("Serwer: Ciężka pętla zakończona. Wynik:", serverResult);

  const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!unsplashAccessKey) {
    console.error('Błąd: brak klucza API Unsplash.');
    notFound();
  }

  try {
    const response = await fetch(`https://api.unsplash.com/photos?per_page=30&client_id=${unsplashAccessKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Serwer: Błąd podczas ładowania danych:', error);
    notFound();
  }
}

export default async function Home() {
  const data = await getData();

  return (
      <div>
        <Navbar />
        <Header />
        <Gallery data={data} />
      </div>
  );
}