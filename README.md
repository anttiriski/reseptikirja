## Sähköinen reseptikirja

Projektin tarkoituksena oli toteuttaa sähköinen reseptikirja, jossa voi lisätä, poistaa tai muokata reseptejä. Idea lähti liikkeelle opiskelijajärjestömme telegram-keskusteluista.

Tavoitteenani oli oppia tekemään oma backend joka kommunikoi MongoDB kanssa.

## Käyttöönotto

### Frontend

1. Forkkaa projekti itsellesi
2. $ git clone
3. $ cd reseptikirja
4. $ npm start

### Backend

1. Tee tunnukset MongoDB-atlakseen, alusta tietokanta ja etsi tietokannan avain. (Löytyy kohdasta "Connect" ja "Connect your application")
2. Lisää server kansioon tiedosto .env
3. Lisää .env tiedostoon -> ATLAS_URI=<Sinun tokenisi minkä löysin 1. kohdassa>
4. Avaa uusi terminaali
5. $ cd server
6. $ node server.js

Loistavaa! Sait sähköisen reseptikirjasi toimimaan



