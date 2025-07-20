import AnimatedSection from "./AnimatedSection";

const ContactUs = () => {
    return (
        <div id='contactus' className="mb-20">
            <AnimatedSection delay={0.3}>
                <div className="text-center mb-5">
                    <h2 className="text-3xl font-semibold font-sans">Contact Us</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card  border-0 p-4">
                            <p className="mb-3">
                                Let us meet and discuss your unique requirements and build a plan of action.
                            </p>

                            <div className="d-flex justify-content-center mb-3">
                                <a
                                    href="#"
                                    className="text-primary fs-4 mx-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-primary fs-4 mx-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>

                            <p className="mb-2">
                                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                                <strong>Address:</strong> Lahore, Pakistan
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-phone me-2 text-secondary"></i>
                                <strong>Phone:</strong> +92-333-222-5555
                            </p>
                            <p className="mb-0">
                                <i className="fas fa-envelope me-2 text-secondary"></i>
                                <strong>Email:</strong> info@example.com
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default ContactUs;
