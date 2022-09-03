// children componets
import React from "react"
import { Container } from "react-bootstrap"
import Collection from "./collection.albums"

const Albums = (props) => {
    return (
        <React.Fragment>
            <Container className="mt-3">
            <h1>{props.title}</h1>
            <i>{props.description}</i>
            <Collection/>
            </Container>
        </React.Fragment>
    )
}
export default Albums ;