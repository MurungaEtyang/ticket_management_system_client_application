
import "../../../resource_files/css/all_props.css";
import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import {Button} from "./Button";
export interface TicketFormData {
    title?: string;
    message?: string;
    department?: string;
    attachment?: File | null;
    email?: string;
}

interface TicketPropsFormProps {
    onSubmit: (data: TicketFormData) => void;
}

const departments = [
    { value: "", label: "Select a department" },
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Support", label: "Support" },
];

const TicketPropsForm: React.FC<TicketPropsFormProps> = ({ onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<TicketFormData>({
        email: "",
        title: '',
        message: '',
        department: '',
        attachment: null
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
        <div className={`ticket-form`}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">subject of the ticket *</label>
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
                    <label htmlFor="message">description of the ticket *</label>
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
                    <label htmlFor="department">Department *</label>
                    <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                    >
                        {departments.map((department) => (
                            <option key={department.value} value={department.value}>
                                {department.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="attachment">Attachment</label>
                    <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        accept="image/png,image/jpeg,application/pdf"
                        onChange={handleAttachmentChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        maxLength={255}
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
