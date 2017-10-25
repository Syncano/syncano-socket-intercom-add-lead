var Intercom = require('intercom-client');
var token = ARGS.env === 'production' ? CONFIG.production : CONFIG.staging;
var client = new Intercom.Client({ token });

const payload = {
  email: ARGS.email,
  custom_attributes: ARGS.custom_attributes
}

client.leads.create(payload, function (r) {
  setResponse(new HttpResponse(r.code, JSON.stringify(r.raw_body), 'application/json'));
});
