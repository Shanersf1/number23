import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <article className="services-container">
      <h1>Our Services</h1>
      <section className="service-section">
        <h2>Wedding Watches</h2>
        <p>
          We specialise in creating exquisite wedding watches to celebrate your most beautiful day. A unique timepiece to mark the beginning of a lifelong journey together.
        </p>
      </section>
      <section className="service-section">
        <h2>Special Birthday Watches</h2>
        <p>
          Commemorate a milestone birthday with a bespoke watch. We create special pieces for 18th, 21st, 40th, and other significant birthdays.
        </p>
      </section>
      <section className="service-section">
        <h2>Bespoke Display Pieces</h2>
        <p>
          We also create beautiful display pieces where a Pocket watch and Ladies watch are framed in a display case with the time set at the exact time the couple were announced Husband and Wife.
        </p>
        <p>
          The case is lined with the very same material as the bride's dress, there would be a flash of material the same colour as the groom's tie, there will be flowers to match the bride's bouquet and the glass will be detailed with the couples names, date and time of the wedding.
        </p>
        <p>
          These can be wall mounted or placed on a stand that can be displayed wherever you chose in you home.
        </p>
      </section>
      <section className="service-section">
        <h2>Watch Movements</h2>
        <p>
          We offer both fully automatic movements along side manual wind movements and quartz. This allows us to encompass clients with specific budgets.
        </p>
      </section>
      <section className="service-section">
        <h2>Watch Restoration & Servicing</h2>
        <p>
          We also offer a range of restoration and repair services to bring your treasured timepieces back to their former glory. This includes watch bracelet restoration, scratch removal, and crystal polishing or replacement.
        </p>
      </section>
    </article>
  );
};

export default ServicesPage;
