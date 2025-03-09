import './App.css'
import './styles.css'

const webhookURL = import.meta.env.VITE_WEBHOOK;

function sendWebhook() {

  // Get input elements and cast them to HTMLInputElement
  const nameInput = document.getElementById('name') as HTMLInputElement | null;
  const mapInput = document.getElementById('map') as HTMLInputElement | null;
  const contactInput = document.getElementById('contact') as HTMLInputElement | null;

  // Check if elements exist
  if (!nameInput || !mapInput || !contactInput) {
    console.error('One or more input elements are missing!');
    return;
  }

  // Get input values
  const name = nameInput.value;
  const map = mapInput.value;
  const contact = contactInput.value;

  // Create the embed object
  const embed = {
    title: 'New Map Request',
    color: 0x0099ff, // Blue color
    fields: [
      {
        name: 'Name',
        value: name || 'Not provided',
        inline: true,
      },
      {
        name: 'Map',
        value: map || 'Not provided',
        inline: true,
      },
      {
        name: 'Contact',
        value: contact || 'Not provided',
        inline: true,
      },
    ],
    timestamp: new Date().toISOString(),
  };

  // Send the webhook
  const xhr = new XMLHttpRequest();
  xhr.open('POST', webhookURL, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(
    JSON.stringify({
      username: 'AI',
      embeds: [embed],
    })
  );

  // Optional: Clear the form after submission
  nameInput.value = '';
  mapInput.value = '';
  contactInput.value = '';

  console.log('Webhook sent successfully!');
  alert("Form Successfully sent");
}

function App() {
  console.log(
    "%cHi! Please don't spam our webhook with junk. This is only for fun, and the webhook only leads to a private channel with my friend and I. So there's really no point to. Thank you <3",
    "font-size: 30px; font-weight: bold; color: #6c63ff; background: #f4f4f4; padding: 10px; border-radius: 5px;"
  );
  console.log(
    "%cHi! Please don't spam our webhook with junk. This is only for fun, and the webhook only leads to a private channel with my friend and I. So there's really no point to. Thank you <3",
    "font-size: 30px; font-weight: bold; color: #6c63ff; background: #f4f4f4; padding: 10px; border-radius: 5px;"
  );


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
                <li><a href="#buy">Buy a map</a></li>
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
            <h2>Jake</h2>
            <img className="map-image width: 50%;" src="https://github.com/Map-Edgers/Map-Edgers.github.io/blob/main/Jake.jpg?raw=true" alt="Ancient Map" />
            <h2>Chris</h2>
            <img className="map-image" src="https://github.com/Map-Edgers/Map-Edgers.github.io/blob/main/Chris.png?raw=true" alt="Ancient Map" />
    </section>

    <section id="buy">
    <h2>Buy our maps</h2>
      <p>Get a quote for an amazing map today! Your request may, or may not be ignored, because my boss doesn't pay me enough.</p>

  <input type="text" id="name" placeholder="Your Name" />
  <input type="text" id="map" placeholder="Map to Buy/Customize" />
  <input type="text" id="contact" placeholder="Contact Information" />
  <button onClick={sendWebhook}>Submit</button>
</section>


    <footer>
        <p>&copy; 2025 Making Maps. All rights reserved. Joke website, not meant to be taken seriously</p>
    </footer>
    </>
  )
}

export default App
