import React, {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';


const ShowcaseSection = () => {
     const sectionRef = useRef(null);
     const project1Ref = useRef(null);
     const project2Ref = useRef(null);
     const project3Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        const cards = [project1Ref.current, project2Ref.current, project3Ref.current];
        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

     return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/waterproj.png" alt="Plant Watering Project"/>
                        </div>
                        <div className="text-content">
                            <h2>Plant Watering System</h2>
                            <p>Developed an automated plant watering system which utilized real-time soil moisture data to water plants when needed. The project supported efficient water use and sustainable ecosystems, aligning with UN Sustainable Development Goals 6 (Clean Water and Sanitation) and 15 (Life on Land).</p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div>
                                <img src="/images/jerseyproj.png" alt="Raptors Jersey Project"/>
                            </div>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div>
                                <img src="/images/courtproj.png" alt="Raptors Court Project"/>
                            </div>
                            <h2>Toronto Raptors Rebrand</h2>
                            <p>Designed a rebrand concept for the Toronto Raptors with a bold and modern look. The concept used strong typography, clean colour palettes, and iconic elements like claw marks and the maple leaf to create a unified visual identity.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
