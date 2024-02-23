import "../../../resource_files/css/all_props.css";
import React, { useState } from 'react';
import {BeatLoader} from "react-spinners";

export interface TicketFormDataOptionalEmail {
    title: string;
    message: string;
    department?: string;
    attachment?: File | null;
}

interface TicketPropsFormProps {
    onSubmit: (data: TicketFormDataOptionalEmail) => void;
}

const TicketPropsForm: React.FC<TicketPropsFormProps> = ({ onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<TicketFormDataOptionalEmail>({
        title: '',
        message: '',
        department: '',
        attachment: null,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAttachmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setFormData((prevData) => ({
                ...prevData,
                attachment: file,
            }));
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        setIsLoading(true);
        event.preventDefault();
        setTimeout(() => {
            onSubmit(formData);

            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="form-container">

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        maxLength={255}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        maxLength={100}
                    />
                </div>
                <div>
                    <label htmlFor="department">Department:</label>
                    <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select a department</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Support">Support</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="attachment">Attachment:</label>
                    <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        accept="image/png,image/jpeg,application/pdf"
                        onChange={handleAttachmentChange}
                        required
                    />
                </div>
                <div>
                    {isLoading ? (
                        <BeatLoader color="blue" size={30}/>
                    ) : (
                        <>
                            <button type="submit">Submit</button>
                        </>
                    )}
                </div>
            </form>

        </div>
    );
};

export default TicketPropsForm;
