import './App.css'
import './styles.css'

function App() {
  const webhookURL = encodeURIComponent(import.meta.env.VITE_WEBHOOK);

  function discord_message(message: any) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", webhookURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': message,
        'username':'AI',
    }));
}
  discord_message("test")
  return (
    <>

    <header>
        <h1>Map Edgers™</h1>
        <nav>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#tools">Hating Gooners</a></li>
                <li><a href="#techniques">Aimlabs</a></li>
                <li><a href="#resources">The Team</a></li>
            </ul>
        </nav>
    </header>

    <section id="introduction">
        <h2>What is Map Edgers™</h2>
        <p>We have a **Massive** passion for making maps. And our passion for edging will never **fade**.</p>
        <img src="https://i.redd.it/flm5ehfarlk21.jpg" alt="Ancient Map" className='map-image'/>
    </section>
    
    <section id="tools">
        <h2>We hate gooners</h2>
        <p>We are D1 edgers, and we hate gooning. Never goon, it's against our policies, and you may be framed for crimes you didn't commit. The offenses may include, but are not limited to:</p>

            <p>Assault</p>
            <p>Battery on a police officer</p>
            <p>War crimes</p>
    </section>

    <section id="techniques">
        <h2>If you purchase a map, you may also get a raffle chance for 1 month free trail of Aimlabs</h2>
        <p>You should consider buying map, not just for the map, but a chance to fix your trash aim.</p>
    </section>

    <section id="resources">
        <h2>Meet the edgers of the month</h2>

            <h2>John</h2>
            <img className="map-image" src="https://github.com/Map-Edgers/Map-Edgers.github.io/blob/main/John.png?raw=true" alt="Ancient Map" />
            <h2>Dave</h2>
            <img className="map-image width: 50%;" src="https://github.com/Map-Edgers/Map-Edgers.github.io/blob/main/Dave.jpg?raw=true" alt="Ancient Map" />
    </section>

    <footer>
        <p>&copy; 2025 Making Maps. All rights reserved. Joke website, not meant to be taken seriously</p>
    </footer>
    </>
  )
}

export default App
