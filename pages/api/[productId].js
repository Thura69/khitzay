import { adidas } from "../../data/adidas_data";

export default function handler(req, res) {
    const { productId } = req.query;
    const singleData = adidas.find((data) => (data.id) == parseInt(productId));

    res.status(200).json(singleData)

    
}