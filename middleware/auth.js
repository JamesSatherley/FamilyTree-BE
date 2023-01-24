import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, _, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;

        if (token) {      
            decodedData = jwt.verify(token, process.env.secret);

            req.userId = decodedData?.id;
        } else {
            throw new Error("Not authed")
        }
        
        next();
    } catch (error) {
        console.log("Middleware failure");
    }
};

export default auth;