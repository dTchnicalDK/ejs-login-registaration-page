import loginCredential from "../dbs/loginSchemaNModel.js";
import bcrypt from "bcrypt";

class LoginControllers {
  static homepage = (req, res) => {
    res.render("index");
  };

  //rendering registration page
  static registrationPage = (req, res) => {
    res.render("registration");
  };

  // actually registering users
  static registrationProcess = async (req, res) => {
    try {
      var hashPwd = await bcrypt.hash(req.body.password, 8);
      const doc = new loginCredential({
        name: req.body.name,
        email: req.body.email,
        password: hashPwd,
      });
      console.log(doc);

      // saving form fetched data
      const result = await doc.save();
      //redirection to login page
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  //getting login page
  static loginPage = (req, res) => {
    res.render("login");
  };

  //login user using validation
  static loggingIn = async (req, res) => {
    try {
      const uCredential = {
        email: req.body.email,
        password: req.body.password,
      };
      const uDbCredetial = await loginCredential.findOne({
        email: req.body.email,
      });
      if (uDbCredetial != null) {
        //veryfing user password with hash password in if condition
        const isMatch = await bcrypt.compare(
          uCredential.password,
          uDbCredetial.password
        );

        if (isMatch) {
          res.render("dashboard", { uDbCredetial });
        } else {
          res.send("Wrong Password");
        }
      } else {
        res.send("you are not regeistered user..... login now");
      }
    } catch (error) {
      console.log(error);
    }
  };

//getting login page
// static logOut = (req, res) => {
//   res.render("index");
// };
}

export default LoginControllers;
