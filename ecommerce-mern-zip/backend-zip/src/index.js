const express=require("express")
const cors=require('cors');
const session = require("express-session");
const passport = require("passport");
const OAuth2strategy = require("passport-google-oauth20").Strategy
const usredb = require("./models/userlogin.js")

const app=express();

const clientId = "129161912402-soe0d9jp2r1hp4h1a8iu4g7p3jj49a8e.apps.googleusercontent.com";
const clientsecret = "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"

app.use(express.json())
app.use(cors())

//setup session 
app.use(session({
    secret:("snxbeuzbjerrayeabbtgakenbbhggyuutwerlmjsospexndbusnakdo"),
    resave:false,
    saveinitialized:true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2strategy({
        clientID:clientId,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken, refreshToken, profile, done)=>{
        try{
          let user = await usredb.findOne({googleId:profile.id});
          if(!user){
            user = new usredb({
                    googleId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    Image:profile.photos[0].value
            });
            await user.save();
          }
        }catch(error){
            return done(error, null)
        }
    }
    )
)

passport.serializeUser(()=>{
    done(null,user);
})
passport.deserializeUser((user,done)=>{
    done(null, user)
})

//initial google oauthlogin

app.get("/auth/google", passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback", passport.authenticate("google",{
    successRedirect:"http://localhost:3000/home",
    failureRedirect:"http://localhost:3000/login"
}))
   

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce api - node"})
})

const authRouter=require("./routes/auth.routes.js")
app.use("/auth",authRouter)

const userRouter=require("./routes/user.routes.js");
app.use("/api/users",userRouter)

const productRouter=require("./routes/product.routes.js");
app.use("/api/products",productRouter);

const adminProductRouter=require("./routes/product.admin.routes.js");
app.use("/api/admin/products",adminProductRouter);

const cartRouter=require("./routes/cart.routes.js")
app.use("/api/cart", cartRouter);

const cartItemRouter=require("./routes/cartItem.routes.js")
app.use("/api/cart_items",cartItemRouter);

const orderRouter=require("./routes/order.routes.js");
app.use("/api/orders",orderRouter);

const paymentRouter=require("./routes/payment.routes.js");
app.use('/api/payments',paymentRouter)

const reviewRouter=require("./routes/review.routes.js");
app.use("/api/reviews",reviewRouter);

const ratingRouter=require("./routes/rating.routes.js");
app.use("/api/ratings",ratingRouter);

// admin routes handler
const adminOrderRoutes=require("./routes/adminOrder.routes.js");
app.use("/api/admin/orders",adminOrderRoutes);

module.exports={app};