const router = require ("express").Router();

router.post("/login", (req, res) => {
  console.log('req ', req.body);
  let previlage = {
      canInitialize: false,
      canBookParking: false,
      canSeeReports: true  //can be manage reports also 
  };
  const { email, password } = req.body;
  user.findOne({ email }, (err, data) => {
      if (err || !data) return res.status(400).json({
          success: false,
          message: "User Not Exist"
      });
      if (password !== data.password) return res.status(400).json({
          success: false,
          message: "Password is not correct"
      });
      if (data.type === 'agent') {
          Object.assign(previlage, { canInitialize: true, canBookParking: true });
      }
      let users = {
          u_id: data._userId,
          u_name: data.name,
          u_email: data.email,
          u_type: data.type,
          previlage
      }
      return res.json({ success: true, users });
  });
});

module.exports = router;