
import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { CustomText } from "../components/props/CustomText";

interface Faq {
    id: number;
    title: string;
    description: string;
}

const FaqsClient = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [faqs, setFaqs] = useState<Faq[]>([]); // Specify the type for the faqs state variable

    useEffect(() => {
        setTimeout(() => {
            const fetchedFaqs: Faq[] = [
                {
                    id: 1,
                    title: 'What is React?',
                    description: 'React is a JavaScript library for building user interfaces.',
                },
                {
                    id: 2,
                    title: 'How do you create a component in React?',
                    description: 'You can create a component in React by using the `React.Component` class or by using functional components.',
                },
                // Add more FAQs as needed
            ];

            setFaqs(fetchedFaqs);
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="FAQ">
            <h1> FREQUENTLY ASKED QUESTIONS </h1>

            {isLoading ? (
                <div className="loader-container">
                    <BeatLoader color="blue" size={30} />
                </div>
            ) : (
                faqs.map((faq) => (
                    <div className="FAQ-item" key={faq.id}>
                        <h6 className="FAQ-title">
                            <CustomText label={faq.title} />
                        </h6>
                        <p className="FAQ-description">
                            <CustomText label={faq.description} />
                        </p>
                    </div>
                ))
            )}
        </div>
    );
};

export default FaqsClient;
