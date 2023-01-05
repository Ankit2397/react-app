import { useNavigate } from "react-router-dom"

export default function Post() {
    let navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate("./")}>Go Back One</button>
            <button onClick={() => navigate("../")}>Go Back Two</button>
        </div>
    )
}