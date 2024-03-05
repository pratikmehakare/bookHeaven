import React from 'react';

const Service = () => {
    return (
        <div>
            <section className="bg-gray-100 py-10 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-5 font-bold text-2xl">Our Services</h2>
                    <p className=" text-lg mb-8">
                        BookHeaven is more than just a bookstore; we offer a range of services to enhance your reading experience.
                        Explore the benefits of being a BookHeaven member and discover how we go beyond selling books.
                    </p>

                    <div className="service-item text-left mb-8">
                        <h3 className="text-xl font-bold mb-4">Personalized Recommendations</h3>
                        <p className="text-lg leading-relaxed">
                            Our expert team curates personalized book recommendations based on your preferences and reading history.
                            Rediscover the joy of reading with handpicked selections tailored just for you.
                        </p>
                    </div>

                    <div className="service-item text-left mb-8">
                        <h3 className="text-xl font-bold mb-4">Exclusive Events</h3>
                        <p className="text-lg leading-relaxed">
                            Join our community for exclusive events, author meet-ups, and book signings. Immerse yourself in the world
                            of literature with fellow book enthusiasts.
                        </p>
                    </div>

                    <div className="service-item text-left mb-8">
                        <h3 className="text-xl font-bold mb-4">Membership Benefits</h3>
                        <p className="text-lg leading-relaxed">
                            Become a BookHeaven member to enjoy special perks, discounts, and early access to new releases.
                            Unlock a world of benefits and connect with a community of avid readers.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;
