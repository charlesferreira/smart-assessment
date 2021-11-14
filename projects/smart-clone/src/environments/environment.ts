export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiY2hhcmxlc2ZlcnJlaXJhIiwiYSI6ImNrdnV4M2xlczB6dGoyd28yNWRxb3BvZmUifQ.qIjzCMH4DjhVJml84G_Ehg',
    style: 'https://api.maptiler.com/maps/74a1fbc2-29a2-41f6-932e-48794340ff54/style.json?key=LmQtBBRUitvZZP7HybC7',
  },
  smart: {
    apiUrl: 'https://app.smartapartmentdata.com/List/json',
    hardCoded: {
      // the following data is hard-coded for the demo
      listID: 5363950,
      token: '5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E',
    },
  },
};
