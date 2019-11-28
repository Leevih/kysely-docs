import React, { useContext } from 'react';

import ReactJson from 'react-json-view';
import { Link } from 'react-router-dom';

import InteractiveGetDemo from './InteractiveGetDemo';
import AppContext from '../utilities/AppContext';

const teema = 'summerfruit';

const displayUrl = (endpoint) => {
    return `http://kyselyhomma1.herokuapp.com/${endpoint}`
}

const Kotisivu = () => {
    const app = useContext(AppContext);

    return (
        <div className="container">
            <div className="content">
                <h1>Kyselyrajapinnan ohjeet</h1>
                <p>
                    Jokaisella erillisellä sivulla näet kyseistä endpointtia vastaavan url osoitteen.
                    Osoite näkyy navigaatiopalkissa, josta saat sen kopioitua klikkaamalla.
            </p>
                <div className="main-p-container">
                    <h2>1. Post ohjeet</h2>
                    <h3>1.1 Vastauksen lähettäminen</h3>
                    <p className="explanation-p">
                        Lähetä alla näkyvän esimerkki-objektin mallinen JSON-objekti osoitteeseen <b><Link to="/vastaukset">{displayUrl('vastaukset')}</Link></b>, käyttäen HTTP-protokollan POST metodia.
                        Objektin "content" kenttä pitää sisällään vastauksen sisällön, eli pääkäyttäjän tallentaman tekstin. Kohta "kysymys" taas
                        pitää sisällään toisen olion, jonka ainut täytettävä kenttä on vastatun kysymysksen kysymyksen ID. Tämä tieto tulee olla kokonaisluku (integer) muodossa.
            </p>
                    <ReactJson
                        src={postVastaus}
                        theme={teema}
                        enableClipboard={false}
                    />
                    <h3>1.2 Kysymksen lähettäminen</h3>
                    <p className="explanation-p">
                        Taas sama homma, mutta tällä kertaa vaihda vain kysymys-objektin paikalle samalla tavalla käyttäytyvä kysely-objekti.
            </p>
                    <ReactJson
                        src={postKysymys}
                        theme={teema}
                        enableClipboard={false}
                    />
                    <h3>1.2 Kyselyn lähettäminen</h3>
                    <p>Tämä on vielä kesken.</p>
                </div>
                <div className="main-p-container">
                    <h2>2. Get ohjeet</h2>
                    <h3>2.1 Tämä on helppoa</h3>
                    <p className="explanation-p">
                        Lähetä GET pyyntö haluamaasi osoitteeseen. Jos esimerkiksi haluat kaikki kysymykset, saat sen kutsumalla <b><Link to="/kysymykset">{displayUrl('kysymykset')}</Link></b>
                        , GET pyynnön kautta.

                        Data näyttää vastaavalta, mutta alla näkyvä esimerkki on rajattu vain yhteen tulokseen. Navigaatiopalkista pääset tarkastelemaan kaikkea dataa.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Kotisivu;

const postVastaus = {
    "content": "tämä on vastaus kysymykseen, jonka id on 17",
    "kysymys": {
        "kysymysId": 17
    }
}

const postKysymys = {
    "content": "tämä on kysymys kyselylle, jonka id on 1",
    "kysely": {
        "kyselyId": 1
    }
}