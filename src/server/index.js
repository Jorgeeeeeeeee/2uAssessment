const express = require('express');
const os = require('os');
const cors = require('cors');
const app = express();


var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

app.use(require('body-parser').urlencoded({ limit: '50mb', extended: true }));
app.use(require('body-parser').json({ limit: '50mb' }));

app.options('*', cors());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  //dev
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  //
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  if ('OPTIONS' == req.method) {
          res.send(200);
      }
      else {
          next();
      }

});

app.use(express.static('dist'));


const models = require('./models');
app.set('sequelize', models.sequelize);
app.set('models', models.sequelize.models);
models.sequelize.sync()
//post a new invoice
app.post('/api/invoice', (req, res) => {

  console.log(req.body)
  const { invoice_number, total, currency, invoice_date, due_date, vendor_name, remittance_address} = req.body;

      const invoiceData = {
        status:'pending',
        invoice_number: invoice_number,
        total: total,
        currency: currency,
        invoice_date: invoice_date,
        due_date: due_date,
        vendor_name: vendor_name,
        remittance_address: remittance_address
      };

      models.invoice.create(invoiceData).then(async (i) => {
            console.log(i)
            return res.status(200).json({message: "invoice submitted successfully"});
      }).catch(error => {
            console.log(error)
            return res.status(200).json({ error: { message:'Intente nuevamente ocurrió un error' } });
      });


});

//List invoices
app.get('/api/invoices', (req, res) => {
      models.invoice.findAll({
        where: {
          //your where conditions, or without them if you need ANY entry
        },
        order: [ [ 'createdAt', 'DESC' ]]

      }).then(async function(invoices){
        if (invoices) {
          return res.json({ result:{data:invoices} });
        }
        return res.status(200).json({error: {message: 'Broken.' } });

      }).catch(err => {
        console.log(err);
        // return res.status(400).send({ error: {message: err.toString() }  });
        return res.status(400).json({ error: {message: 'Broken.' }  });
      });
});



//Approve invoices
app.post('/api/invoices', (req, res) => {
      const {id} = req.body;
      models.invoice.findOne({
        where: {
          id:id,
          //your where conditions, or without them if you need ANY entry
        },
        order: [ [ 'createdAt', 'DESC' ]]

      }).then(function(invoice){

        if (invoice) {
          invoice.update({
            status: 'Approved'
          });

          return res.json({ result:{message:"Approved!", data:invoice} });
        }
        return res.status(200).json({error: {message: 'Broken.' } });

      }).catch(err => {
        console.log(err);
        // return res.status(400).send({ error: {message: err.toString() }  });
        return res.status(400).json({ error: {message: 'Broken.' }  });
      });
});




app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
