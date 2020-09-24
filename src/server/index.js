const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

const models = require('./models');
app.set('sequelize', models.sequelize);
app.set('models', models.sequelize.models);
models.sequelize.sync()

app.use(require('body-parser').urlencoded({ limit: '50mb', extended: true }));
app.use(require('body-parser').json({ limit: '50mb' }));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


app.post('/api/invoice', (req, res) => {
  const { invoice_number, total, currency, invoice_date, due_date, vendor_name} = req.body;

      const invoiceData = {
        id:null,
        invoice_number: invoice_number,
        total: total,
        currency: currency,
        invoice_date: invoice_date,
        due_date: due_date,
        vendor_name: vendor_name,

      };

      models.invoice.create(invoiceData).then(async (i) => {
            return res.status(200).send({ result: 'ok', message: "invoice submitted successfully"});
      }).catch(error => {
            console.log(error)
            return res.status(200).send({ error: { message:'Intente nuevamente ocurrió un error' } });
      });


});


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
