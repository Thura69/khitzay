import { adidas } from "../../data/adidas_data"

export default function handler(req, res) {
    res.status(200).json(adidas)
}