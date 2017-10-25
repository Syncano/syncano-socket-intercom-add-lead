# Syncano Socket - Intercom Add Lead

Simple Intercom integration for adding leads. Uses the Intercom [Node SDK](https://developers.intercom.com/v2.0/docs/intercom-node-sdk#section-leads) under the hood.

## Usage:

### Config
- Setup [Syncano account](https://syncano.github.io/syncano-node-cli/#/)
- `syncano-cli add intercom-add-lead`
- Use Intercom Access Tokens for configuration. They can be found in the Intercom dashboard. Go to settings > app settings > API Keys.

### In your app

With [Syncano Client JS](https://github.com/Syncano/syncano-client-js)

```javascript
const s = new Syncano('INSTANCE_NAME')

s.get('intercom-add-lead/add_lead', {
  env,
  email,
  custom_attributes: customAttributes
})
```

With axios

```javascript
axios.post('https://INSTANCE_NAME.syncano.space/intercom-add-lead/add_lead/', {
  env,
  email,
  custom_attributes: customAttributes
});```
