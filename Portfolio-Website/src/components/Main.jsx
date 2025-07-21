import AnimatedSection from './AnimatedSection';
import headerImage from '../icons/headerImage.png'

const Main = () => {


    return (
        <div id='home' className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-white text-gray-900">

            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0 md:pl-15 ">
                <AnimatedSection delay={0.4} >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight ">
                        Rubab Javaid
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet, ligula eu ultrices convallis,
                        nisi turpis laoreet justo, et fermentum nisl erat non leo. Nulla facilisi. Sed vulputate, sem sed sodales feugiat,
                        justo sapien vehicula tellus, nec accumsan lacus erat a nulla. Fusce nec mauris nec urna convallis porta.
                        Vivamus vulputate nunc sed suscipit sagittis. Praesent nec magna sed leo posuere tristique. Curabitur ac risus ac leo dictum bibendum.
                    </p>

                </AnimatedSection>
            </div>

            {/* Right Image */}

            <div className="w-full md:w-1/2 flex justify-center">
                <AnimatedSection delay={0.6} >
                    <img src={headerImage} alt="Header" className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-lg" />
                </AnimatedSection>
            </div>
        </div >


    )
}

export default Main;