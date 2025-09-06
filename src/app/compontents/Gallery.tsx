'use client'; // TA LINIA JEST KLUCZOWA I MUSI BYĆ NA GÓRZE PLIKU

import React, { useEffect } from 'react';

// Celowo ciężka operacja, która opóźni SSR i zablokuje serwer
const heavyClientTask = (iterations: number) => {
    let result = 0;
    for (let i = 0; i < iterations; i++) {
        result += Math.random();
    }
    console.log("Klient: Ciężkie zadanie zakończone.");
};

interface Photo {
    id: string;
    urls: { small: string };
    alt_description: string;
    user: { name: string; username: string };
}

interface GalleryProps {
    data: Photo[];
    error?: string;
}

const Gallery = ({ data, error }: GalleryProps) => {
    // Celowo blokujące zadanie na kliencie, które obciąża TBT
    useEffect(() => {
        console.log("Klient: Rozpoczynam ciężkie zadanie.");
        heavyClientTask(1000000000); // Duża liczba, która zablokuje wątek
    }, []);

    if (error) {
        return <p className="text-danger">{error}</p>;
    }

    return (
        <main className="container py-5">
            <h2 className="text-center mb-5">Galeria Danych (ładowanie celowo spowolnione)</h2>
            <div className="row">
                {Array.isArray(data) && data.map((item) => (
                    <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100">
                            <img
                                src={item.urls.small}
                                className="card-img-top"
                                alt={item.alt_description}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.user.name}</h5>
                                <p className="card-text">Autor: {item.user.username}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Gallery;