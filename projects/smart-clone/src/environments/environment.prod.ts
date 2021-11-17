export const environment = {
  production: true,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiY2hhcmxlc2ZlcnJlaXJhIiwiYSI6ImNrdnV4M2xlczB6dGoyd28yNWRxb3BvZmUifQ.qIjzCMH4DjhVJml84G_Ehg',
    style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh',
  },
  smart: {
    apiUrl: 'https://app.smartapartmentdata.com/List/json',
    hardCoded: {
      // the following hard-coded data is for demo purposes only
      listID: 5363950,
      token: '5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E',
    },
  },
};
