import React from 'react';
import Particles from 'react-particles-js';

export default class ParticlesLayout extends React.Component {
    render() {
        return (
            <Particles 
                params={{
                    particles: {
                        number: {
                            value: 100
                        },
                        color: {
                            value: "#000000"
                        },
                        line_linked: {
                            enable: true,
                            color: "#000000"
                        }
                    }
                }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
            />
        )
    }
}