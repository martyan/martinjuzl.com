import React from 'react'
import Generator from 'react-customizable-progressbar/dist/Generator'

import SEO from '../../components/seo'

import './generator.scss'
import ReactGA from 'react-ga'


const RCP = () => (
    <div className="rcp-generator">

        <SEO title="Playground / generator of react-circle-progressbar" keywords={[`react`, `circle`, `circular`, `progress`, `bar`, `component`, `generator`, `playground`]} />

        <div className="header">
            <p>Generator of {' '}
                <a
                    href="https://github.com/martyan/react-circle-progressbar"
                    target="_blank"
                    onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-circle-progressbar'})}
                >react-circle-progressbar</a>
            </p>
            <p>See{' '}
                <a
                    href="/react-circle-progressbar"
                    onClick={() => ReactGA.event({category: 'User', action: 'Clicked on react-circle-progressbar examples'})}
                >examples</a>
            </p>
        </div>

        <Generator />

    </div>
)

export default RCP
