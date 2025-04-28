import { KiteConnect } from "kiteconnect";
const apikey = "your_api_key"; // Replace with your actual API key
let accessToken = "your_access_token"; // Replace with your actual access token

const kc = new KiteConnect({ api_key: apikey });

export async function placeOrder (tradingsymbol: string, quantity: number, type: "BUY" | "SELL") {
try {
    kc.setAccessToken (accessToken);
        await kc.placeOrder("regular", {
            exchange: "NSE",
            tradingsymbol,
            transaction_type: type,
            quantity,
            product: "CNC",
            order_type: "MARKET"
        });
}
catch (err) {
console.error(err);
    }
}