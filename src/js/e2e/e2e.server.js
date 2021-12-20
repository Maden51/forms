/* eslint-disable import/no-extraneous-dependencies */

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../../webpack.config';

const server = new WebpackDevServer(webpack(config), {});
server.start(9020, 'localhost', (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send('ok');
  }
});
