// Global import
const jwt = require('jsonwebtoken');

// Local import
const model = require('../../models/reviews/post');

// module.exports = (req, res) => {
//   const {color_id, reviewPhoto, reviewRating, user_id, reviewMessage} = req.body;
//   const params = [color_id, reviewPhoto, reviewRating, user_id, reviewMessage];
//   model(params, (err, rows) => {
//     if (err) throw err;
//     else res.send({
//       login: req.session.userMail ? true : false,
//       review_id: req.body.review_id,
//       post: true
//     });
//   })
// };

module.exports = {
  message: (req, res) => {
    
    // console.log('req.headers: ', req.headers);
    // console.log('req.headers.token: ',req.headers.token);
    const userMail = jwt.verify(req.headers.token, 'jwt-secret').userMail;
    // console.log('decoded: ', decoded);

    const {color_id, reviewPhoto, reviewRating, reviewMessage} = req.body;
    const params = [color_id, reviewPhoto, reviewRating, userMail, reviewMessage];
    model(params, (err, rows) => {
      if (err) throw err;
      else res.send('posted');
    })
  },

  upload: (req, res) => {
    const imageFile = req.files.file;
  
    imageFile.mv(`${__dirname}/public/reviews/${req.body.filename}.jpg`, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.json({file: `public/reviews/${req.body.filename}.jpg`});
    }); 
  }
};
