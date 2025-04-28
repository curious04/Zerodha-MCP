import { KiteConnect } from "kiteconnect";
const apikey = "your_api_key";
let accessToken = "your_access_token";

const kc = new KiteConnect({ api_key: apiKey });

async function init() {
try {
    kc.setAccessToken (accessToken);
        await kc.placeOrder("regular", {
            exchange: "NSE",
            tradingsymbol: "HDFCBANK",
            transaction_type: "SELL",
            quantity: 1,
            product: "CNC",
            order_type: "MARKET"
        });
} catch (err) {
    console.error(err);
}
}

init()