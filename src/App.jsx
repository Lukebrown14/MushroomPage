import "./App.css";
// import Header from "./component/header/Header";
// import Body from "./component/body/body";

function App() {
  return (
    <section class="layout">
      <div class="header">
        {<h1 className="mushrooms-header">MUSHROOMS</h1>}
      </div>
      <div class="main">
        {
          <p className="introText">
            🍄 Welcome to the enchanting world of mushrooms! 🌿 Delve into the
            fascinating realm where fungi flourish and reveal their mystical
            secrets. Our website is your gateway to the diverse and magical
            universe of mushrooms—nature's silent architects. From the humble
            button mushroom to the elusive chanterelle, embark on a journey of
            discovery, learning, and appreciation. Explore the ecological
            wonders, culinary delights, and medicinal marvels that mushrooms
            offer. Whether you're a seasoned forager, a curious chef, or a
            nature enthusiast, join us as we unravel the mysteries and celebrate
            the extraordinary beauty of mushrooms. Let the mycelial adventure
            begin! 🌍🍄
          </p>
        }
      </div>
      <div class="footer">3</div>
    </section>
  );
}

export default App;
