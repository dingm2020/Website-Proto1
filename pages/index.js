import React, {Component} from "react"
import fetch from "isomorphic-unfetch"


// Website made using this guide
// https://coderrocketfuel.com/article/how-to-create-a-website-with-next-js-and-react
export default class extends Component {

    static async getInitialProps() {
        const res = await fetch("https://random.dog/woof.json?filter=mp4,webm")
        const data = await res.json()
    
        return {
            imageURL: data.url
        }
    }

    render() {
        return(
            //<div>Your Next.js App</div>
            <div className="homepage-wrapper">
                <h1>Random Dog Image</h1>
                <img src={this.props.imageURL} />
            </div>
        )
    }
}