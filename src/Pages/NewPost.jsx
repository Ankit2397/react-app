import { useOutletContext } from "react-router-dom"

export default function NewPost() {
  const [currentUser] = useOutletContext()

    return (
        <div>
            <h1>Welcome {currentUser}, write a new post!</h1>
      <form/>
        </div>
    )
}