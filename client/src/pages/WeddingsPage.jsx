import { useEffect } from 'react';
import './WeddingsPage.css';

function WeddingsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Weddings | Number 23 by John R Doughty';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="weddings-page">
      <section className="weddings-hero">
        <h1>Weddings</h1>
        <p className="weddings-tagline">Framed wedding watches that capture a frozen moment in time</p>
      </section>
      <article className="weddings-content">
        <p>
          These frames are created with the exact moment you become Husband and Wife in mind. The layout is designed to capture that exact minute in time and the watches are both stopped then, a time you can look back on for years to come, a truly significant, special time frozen for ever.
        </p>
        <figure className="weddings-figure">
          <img
            src="/18229.jpg"
            width="1400"
            height="1859"
            alt="Framed wedding display on a stand, with a gold pocket watch, a ladies wristwatch, pink flowers, and gold lettering marking the moment the couple became Husband and Wife."
          />
        </figure>
        <section className="weddings-block" aria-labelledby="frame-heading">
          <h2 id="frame-heading">The frame</h2>
          <p>
            The frame is lined with the same coloured material as the bride&apos;s dress, the gentleman&apos;s pocket watch set into this and looks stunning. The ladies watch is set into a section of material the same as the groom&apos;s tie.
          </p>
          <p>
            The flowers in her bridal bouquet are replicated as close as possible with miniature versions.
          </p>
          <p>
            The bride and groom&apos;s names, wedding date and a personal message is printed on the inside of the glass.
          </p>
          <figure className="weddings-figure weddings-figure-inset">
            <img
              src="/18232.jpg"
              width="1400"
              height="1859"
              alt="Close view of gold lettering on the inside of the frame glass, with the couple's names, wedding date, and the words Became Husband and Wife."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>
        <section className="weddings-block" aria-labelledby="watches-heading">
          <h2 id="watches-heading">The watches</h2>
          <p>
            The groom&apos;s watch is a traditional gold plated pocket watch, elegant, very stylish and looks fantastic set into the display.
          </p>
          <p>
            The ladies watch is a replica of the very first ladies watch made to be worn on the wrist. This was commissioned on 8th of June 1810, Watch No2639 with A L Breguet for Caroline Murat, The Queen of Naples. She was the sister of Napoleon Bonaparte. Very elegant and fit for a Queen.
          </p>
          <div className="weddings-photo-pair">
            <figure className="weddings-figure weddings-figure-inset">
              <img
                src="/18230.jpg"
                width="1400"
                height="1859"
                alt="Gold plated pocket watch with an open engraved cover, Roman numerals, and a chain, set beside pink flowers."
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="weddings-figure weddings-figure-inset">
              <img
                src="/18231.jpg"
                width="1400"
                height="1859"
                alt="Oval ladies wristwatch with a white strap, set on patterned fabric with miniature pink flowers."
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>
        <section className="weddings-block" aria-labelledby="display-heading">
          <h2 id="display-heading">Display and finish</h2>
          <p>
            The frame has been treated and varnished to take on an aged appearance to accompany the vintage pocket watch and the historic ladies watch. The frame can be mounted on the wall or sat on the display frame. It all comes in a velvet carry sleeve to protect it.
          </p>
          <p>
            There can also be a black modern style box frame if preferred. It really depends on where in your home you will be displaying it and your personal preference.
          </p>
        </section>
        <section className="weddings-block" aria-labelledby="planning-heading">
          <h2 id="planning-heading">Planning your piece</h2>
          <p>
            As you enjoy the excitement of planning your wedding and you make your final choices for the bride&apos;s dress and groom&apos;s suit and tie colours, the flowers chosen for the bridal bouquet, this information can be passed on to me so I can begin to match these colours for the display frame. Also your choice of words that is printed inside the glass. The reason for this being the inside is so you can clean the glass on the frame without affecting the print. You can choose many variations for these words, personal message, quotes or simplicity can all be accommodated, this is your moment in time.
          </p>
        </section>
        <section className="weddings-block" aria-labelledby="day-heading">
          <h2 id="day-heading">On the wedding day</h2>
          <p>
            If your wedding reception venue is within a reasonable distance of my studio in Norwich, on the day if it&apos;s possible for a family member or friend to contact me with the exact time you were announced Husband and Wife, I can then set the times on the watches, seal the frame up and deliver it to you so you can have this beautiful piece on display at your reception for you and your wedding guests to enjoy.
          </p>
        </section>
        <section className="weddings-block" aria-labelledby="size-heading">
          <h2 id="size-heading">Size</h2>
          <p>The frame shown measures 23cm x 23cm.</p>
          <p>The frame size can vary depending on the customer&apos;s requirements.</p>
        </section>
        <p className="weddings-closing">
          Each of these beautiful pieces are absolutely personal and bespoke for the Bride and Groom. I genuinely enjoy creating these as I understand and appreciate that exact moment is gone in the blink of an eye as you are swept up in the pleasure, emotion and excitement of your wedding day. Luckily you can look back at that exact time and see elements of your wedding day on display in your home.
        </p>
        <aside className="weddings-price" aria-label="Price">
          <p className="weddings-price-label">Price</p>
          <p className="weddings-price-amount">&pound;350</p>
        </aside>
        <section className="weddings-enquire" aria-labelledby="enquire-heading">
          <h2 id="enquire-heading">Enquire</h2>
          <p>
            Please email enquiries to{' '}
            <a className="weddings-email" href="mailto:no23bespokewatches@gmail.com">
              no23bespokewatches@gmail.com
            </a>, giving details of the wedding date, and the venue if possible.
          </p>
          <p>
            I will then set up a consultation where all the details required can be spoken about when your plans and choices are decided.
          </p>
        </section>
      </article>
    </div>
  );
}

export default WeddingsPage;