import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate">
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 TMG</p>
        
        <h3>Betreiber der Website</h3>
        <p>
          Musterfirma GmbH<br />
          Musterstraße 123<br />
          12345 Musterstadt<br />
          Deutschland
        </p>

        <h3>Kontakt</h3>
        <p>
          Telefon: +49 (0) 123 456789<br />
          E-Mail: info@fahrlehrer-stellenangebote.de
        </p>

        <h3>Registereintrag</h3>
        <p>
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Musterstadt<br />
          Registernummer: HRB 12345
        </p>

        <h3>Umsatzsteuer-ID</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          DE 123 456 789
        </p>

        <h3>Haftungsausschluss (Disclaimer)</h3>
        <p>
          <strong>Haftung für Inhalte</strong><br />
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
            Dies ist ein Demo-Projekt. Keine echten Stellenangebote.
        </p>
      </div>
    </div>
  );
};

export default Impressum;