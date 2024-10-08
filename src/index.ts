import './bootsrap'
import {RestClientV5} from "bybit-api";

const client = new RestClientV5({
    key: API_KEY,
    secret: API_SECRET,
    testnet: useTestnet,
    // Optional: enable to try parsing rate limit values from responses
    // parseAPIRateLimits: true
},)

console.log(process.env.API_KEY)
