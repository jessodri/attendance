module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '159.65.0.218',
      username: 'root',
      // pem: '~/.ssh/id_rsa',
      // passphrase: ''
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },



  app: {
    // TODO: change app name and path
    name: 'bike-assessment-app',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },
    
    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: "http://159.65.0.218",
      MONGO_URL: 'mongodb+srv://eryk:Hxft2q4y2@bikeassessment-qd9hs.mongodb.net/assessment'
    },
    
    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:node-8.4.0-base',
    },
    
    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true,
    deployCheckWaitTime: 30,
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  // proxy: {
  //   domains: 'mywebsite.com,www.mywebsite.com',

  //   ssl: {
  //     // Enable Let's Encrypt
  //     letsEncryptEmail: 'email@domain.com'
  //   }
  // }
};
