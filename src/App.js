import React from "react";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="container">
        <header className="title">
          <h2>Review App</h2>
          <div className="underline"></div>
        </header>
      </section>
      <section className="container">
        <Review />
      </section>
    </main>
  );
}

export default App;
