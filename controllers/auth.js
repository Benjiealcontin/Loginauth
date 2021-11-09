const User = require('../models/User')



exports.register = async (req, res, next) => {
    const {Name, Email, Password} = req.body

    try {
        const User = await User.create({
            Name,
            Email,
            Password,
        });
        res.status(201).json({
            success: true,
            user,
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error,message,
        })
    }
};

exports.login = (req, res, next) => {
    res.send('Login route');
};

exports.forgotpassword = (req, res, next) => {
    res.send('Forgot password route');
};

exports.resetpassword = (req, res, next) => {
    res.send('Reset password route');
};
