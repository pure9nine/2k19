import React, {Component} from "react"
import Layout from '../layouts/Layout'

class PageTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage

        return (
            <Layout>
                <div>
                    <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                    <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>
                    <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
                    <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
                </div>
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`
