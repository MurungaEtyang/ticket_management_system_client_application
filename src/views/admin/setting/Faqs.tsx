import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

const Faqs = () => {
    const [faqs, setFaqs] = useState([
        { id: 1, title: "What is Lorem Ipsum?", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { id: 2, title: "Why do we use it?", message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." },
        { id: 3, title: "Where does it come from?", message: "Contrary to popular belief, Lorem Ipsum is not simply random text." }
    ]);
    const [newTitle, setNewTitle] = useState('');
    const [newMessage, setNewMessage] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(-1); // Initialize with -1 instead of null

    const handleAddFaqs = () => {
        setFaqs([...faqs, { id: Date.now(), title: newTitle, message: newMessage }]);
        setNewTitle('');
        setNewMessage('');
    };

    const handleEdit = (index: React.SetStateAction<any>) => {
        setEditMode(true);
        setEditIndex(index);
        setNewTitle(faqs[index].title);
        setNewMessage(faqs[index].message);
    };

    const handleSaveEdit = () => {
        if (editIndex !== -1) { // Ensure editIndex is not -1
            const updatedFaqs = [...faqs];
            updatedFaqs[editIndex] = { id: updatedFaqs[editIndex].id, title: newTitle, message: newMessage };
            setFaqs(updatedFaqs);
            setEditMode(false);
            setEditIndex(-1); // Reset editIndex
            setNewTitle('');
            setNewMessage('');
        }
    };

    const handleSubmit = () => {
        // Gather all input values
        const allInputs = faqs.map(faq => ({ id: faq.id, title: faq.title, message: faq.message }));
        alert("Submitted Inputs:\n" + JSON.stringify(allInputs));
    };

    return (
        <div className={`faqs`}>
            <div className={`faqs-data-s`}>
                <h2>Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={faq.id} className={`faqs-input-input`}>
                        {editMode && editIndex === index ? (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Message"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <button onClick={handleSaveEdit}>Save</button>
                            </div>
                        ) : (
                            <div className={`displayed-input`}>
                                <div className={`faqs-data`}>
                                    <h3>{faq.title}</h3>
                                    <p>{faq.message}</p>
                                </div>
                                <FontAwesomeIcon icon={faEdit} className={`edit-icon`} onClick={() => handleEdit(index)} />
                            </div>
                        )}
                    </div>
                ))}
                <div className={`faqs-input`}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <div className={`faqs-button`}>
                        <button className={`add-faqs-input`} onClick={handleAddFaqs}>
                            <FontAwesomeIcon  icon={faPlus} />
                        </button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;
