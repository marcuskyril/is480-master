var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    'script!foundation-sites/js/foundation.dropdownMenu.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,

    alias: {
      Abnormal: 'app/components/Abnormal.jsx',
      Admin: 'app/components/Admin.jsx',
      ActionLog: 'app/components/ActionLog.jsx',
      DowntimeManager: 'app/components/DowntimeManager.jsx',
      AddSensor: 'app/components/AddSensor.jsx',
      app: 'app',
      Building: 'app/components/Building.jsx',
      BuildingOverview: 'app/components/BuildingOverview.jsx',
      Dashboard: 'app/components/Dashboard.jsx',
      DeleteSensor: 'app/components/DeleteSensor.jsx',
      EditSensor: 'app/components/EditSensor.jsx',
      EditSNMPSpeedTest: 'app/components/EditSNMPSpeedTest.jsx',
      HistoricalChart: 'app/components/HistoricalChart.jsx',
      WatchList: 'app/components/WatchList.jsx',
      Login: 'app/components/Login.jsx',
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      NotificationBar: 'app/components/NotificationBar.jsx',
      NotificationLog: 'app/components/NotificationLog.jsx',
      PageNotFound: 'app/components/PageNotFound.jsx',
      PauseSensor: 'app/components/PauseSensor.jsx',
      PinSensor: 'app/components/PinSensor.jsx',
      RebootSensor: 'app/components/RebootSensor.jsx',
      Results: 'app/components/Results.jsx',
      Score: 'app/components/Score.jsx',
      SensorDetails: 'app/components/SensorDetails.jsx',
      SensorHealthOverview: 'app/components/SensorHealthOverview.jsx',
      ServerList: 'app/components/ServerList.jsx',
      Tableaux: 'app/components/Tableaux.jsx',
      Terminal: 'app/components/Terminal.jsx',
      UnpinSensor: 'app/components/UnpinSensor.jsx',
      Uptime: 'app/components/Uptime.jsx',
      SensorList: 'app/components/SensorList.jsx',

      editSNMPSpeedTestAPI: 'app/api/editSNMPSpeedTestAPI.jsx',
      climberManagementAPI: 'app/api/climberManagementAPI.jsx',
      downtimeSchedulerAPI: 'app/api/downtimeSchedulerAPI.jsx',
      manageSensorAPI: 'app/api/manageSensorAPI.jsx',
      notificationLogAPI: 'app/api/notificationLogAPI.jsx',
      retrieveSensorDetails: 'app/api/retrieveSensorDetails.jsx',
      retrieveHistoricalDataAPI: 'app/api/retrieveHistoricalDataAPI.jsx',
      scoreAPI: 'app/api/scoreAPI.jsx',
      settingsAPI: 'app/api/settingsAPI.jsx',

      applicationStyles: 'app/styles/app.scss',
      bigCalendarStyles: 'app/styles/big-calendar.scss',
      griddleStyles: 'app/styles/griddle.scss',
      loginStyles: 'app/styles/login.scss',
      navStyles: 'app/styles/nav.scss',
      reactSelect: 'app/styles/react-select.scss',

      actions: 'app/actions/actions.jsx',
      configureStore: 'app/store/configureStore.jsx',
      reducers: 'app/reducers/reducers.jsx'

    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
