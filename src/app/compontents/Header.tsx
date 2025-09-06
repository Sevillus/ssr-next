import React from 'react';

const Header = () => (
    <header className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <h1 className="display-4">Witaj na Słabej Stronie (Next.js SSR)</h1>
            <p className="lead">Obejrzyj nasz film, który ładuje się bardzo wolno.</p>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    allowFullScreen
                    loading="eager"
                />
            </div>
        </div>
    </header>
);

export default Header;