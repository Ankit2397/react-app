import { useOutletContext } from "react-router-dom";
import React from 'react';

export default function NewPost() {
  const [currentUser] = useOutletContext()

    return (
        <div>
            <h1>Welcome {currentUser}, write a new post!</h1>
            <h3>hhehehhe</h3>
        </div>
    )
}