import express from 'express';
import cors from 'cors';
import { Client } from '@elastic/elasticsearch';

const client = new Client({ node: 'http://localhost:9200' })
const app = express();

app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/:foodName', async (req, res) => {
    const { foodName } = req.params;
    const result = await client.search({
        index: 'ciqual',
        body: {
            query: {
                match: { "alim_nom_eng": foodName }
            }
        }
    });

    res.send(result.body.hits.hits ?? null);
});

app.listen(8888);