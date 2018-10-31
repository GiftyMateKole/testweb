// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '976738042535147', // your App ID
        'clientSecret'  : 'c2d05c785852f34475d045b9efe0a046', // your App Secret
        'callbackURL'   : 'https://test-web-app78.herokuapp.com/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth' : {
        'consumerKey'       : 'VRhLUReocCEvevbL8ckBONoGh',
        'consumerSecret'    : 'Ix8zkcOWd4fJ5sNa4OaLKeG3JUtQ8ZcwAdb2gDZJph74cnWQw9',
        'callbackURL'       : 'https://test-web-app78.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '1086343707706-v3gkf9oe36qqq3pfnp2si53iv9j66i8k.apps.googleusercontent.com',
        'clientSecret'  : 'vo9bDkWahSC05xTxSIZ2Wi9o',
        'callbackURL'   : 'https://test-web-app78.herokuapp.com/auth/google/callback'
    }

};
