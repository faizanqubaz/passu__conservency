import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated from useHistory to useNavigate
import axios from 'axios';
import './popularhunt.css'; // Assuming you have the same CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const AdminPortor = () => {
    const navigate = useNavigate(); // Replaces useHistory
    const [ibexname, setibexName] = useState('');
    const [description, setDescription] = useState('');
    const [ibexphotos, setIbexPhotos] = useState([]); // Multiple image input
    const [ibexrate, setIbexRate] = useState('');
    const [guidephotos, setguidephotos] = useState([]);
    const [guideName, setGuideName] = useState('');
    const [Ibexlocation, setIbexLocation] = useState('');
    const [huntername, setHunterName] = useState('');
    const [hunterlocation, setHunterLocation] = useState('');
    const [guiderate, setGuideRate] = useState('');
    const [ibexsize, setIbexSize] = useState('');
    const [priceOld, setPriceOld] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [huntdate,setHuntdate] = useState('')
    const [successMessage, setSuccessMessage] = useState(false);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [loading, setLoading] = useState(false); 


    const regionMap = {
        passu: { lat: '36.4789', lon: '74.8936' },
        batura: { lat: '36.5675', lon: '74.8456' },
        chitral: { lat: '35.8511', lon: '71.7864' },
        skardu: { lat: '35.2973', lon: '75.6330' }
    };

    const handleRegionChange = (e) => {
        const selectedRegion = e.target.value;
        if (regionMap[selectedRegion]) {
            setLatitude(regionMap[selectedRegion].lat);
            setLongitude(regionMap[selectedRegion].lon);
        }
    };

    const handleIbexPhotoChange = (e) => {
        setIbexPhotos([...e.target.files]); // Handle Ibex photos
    };
    
    const handleGuidePhotoChange = (e) => {
        setguidephotos([...e.target.files]); // Handle Guide photos
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('ibexname', ibexname);
        formData.append('description', description);
        ibexphotos.forEach((photo) => formData.append('ibexphotos', photo)); // Ibex photos
        guidephotos.forEach((photo) => formData.append('guidephotos', photo)); // Guide photos
        formData.append('ibexrate', ibexrate);
        formData.append('guideName', guideName);
        formData.append('ibexlocation', Ibexlocation); // Append dropdown value
        formData.append('ibexsize', ibexsize);
        formData.append('priceOld', priceOld);
        formData.append('huntername', huntername);
        formData.append('hunterlocation', hunterlocation);
        formData.append('newPrice', newPrice);
        formData.append('huntdate', huntdate); // Append hunt date
        formData.append('latitude', latitude);
        formData.append('longitude', longitude); // Append latitude and longitude
    
        // Log formData contents
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }
    
        try {
            const response = await axios.post('https://zakhari-a63a222c7c96.herokuapp.com/api/v2/ibex/topoffer', formData);
            console.log('Hunt added:', response.data);
            setLoading(false); // Hide spinner
            setSuccessMessage(true); // Show success message
            setTimeout(() => {
                navigate('/dashboard'); // Redirect after success
                setSuccessMessage(false);
            }, 2000);
        } catch (error) {
            console.error('Error adding hunt:', error);
            setLoading(false);
        }
    };
    

    return (
        <div className="admin_portor_container">
            <div className="admin_portor_head">
                <h2 className="admin_portor_heading">Add Top Offer</h2>
            </div>
            {successMessage && <p className="success_message">Hunt added successfully!</p>}

            <form onSubmit={handleSubmit}>
                <div className="admin_portor_flex_1">
                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="ibexname">Ibex Name:</label>
                        <input
                            type="text"
                            id="ibexname"
                            className="admin_portor_flex_1_input"
                            value={ibexname}
                            onChange={(e) => setibexName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            className="admin_portor_flex_1_input"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="admin_portor_flex_1">
                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="ibexphotos">Ibex Photos:</label>
                        <input
                            type="file"
                            id="ibexphotos"
                            className="admin_portor_flex_1_input"
                            onChange={handleIbexPhotoChange}
                            multiple
                            accept="image/*"
                            required
                        />
                    </div>

                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="ibexrate">IbexRate:</label>
                        <input
                            type="text"
                            id="rate"
                            className="admin_portor_flex_1_input"
                            value={ibexrate}
                            onChange={(e) => setIbexRate(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="admin_portor_flex_1">
                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="guideName">Guide Name:</label>
                        <input
                            type="text"
                            id="guideName"
                            className="admin_portor_flex_1_input"
                            value={guideName}
                            onChange={(e) => setGuideName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="ibexsize">Ibex Size:</label>
                        <input
                            type="text"
                            id="ibexsize"
                            className="admin_portor_flex_1_input"
                            value={ibexsize}
                            onChange={(e) => setIbexSize(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="admin_portor_flex_1">
                <div className="admin_portor_flex_1_conatiner">
                <label htmlFor="region">Region:</label>
            <select id="region" onChange={handleRegionChange}>
                <option value="">Select Region</option>
                <option value="passu">Passu</option>
                <option value="batura">Batura</option>
                <option value="chitral">Chitral</option>
                <option value="skardu">Skardu</option>
            </select>
                    </div>

                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="guiderate">Guide Rate:</label>
                        <input
                            type="text"
                            id="guiderate"
                            className="admin_portor_flex_1_input"
                            value={guiderate}
                            onChange={(e) => setGuideRate(e.target.value)}
                            required
                        />
                    </div>
                </div>


                <div className="admin_portor_flex_1">
                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="huntername">Hunter Name:</label>
                        <input
                            type="text"
                            id="huntername"
                            className="admin_portor_flex_1_input"
                            value={huntername}
                            onChange={(e) => setHunterName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="hunterlocation">Hunter Location:</label>
                        <input
                            type="text"
                            id="hunterlocation"
                            className="admin_portor_flex_1_input"
                            value={hunterlocation}
                            onChange={(e) => setHunterLocation(e.target.value)}
                            required
                        />
                    </div>
                </div>


                <div className="admin_portor_flex_1">
                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="huntdate">Hunt Date:</label>
                        <input
                            type="text"
                            id="huntdate"
                            className="admin_portor_flex_1_input"
                            value={huntdate}
                            onChange={(e) => setHuntdate(e.target.value)}
                            required
                        />
                    </div>

                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="photos">Guide Photos:</label>
                        <input
                            type="file"
                            id="photos"
                            className="admin_portor_flex_1_input"
                            onChange={handleGuidePhotoChange}
                            multiple
                            accept="image/*"
                            required
                        />
                    </div>
                </div>


                <div className="admin_portor_flex_1">
                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="priceOld">Old Price:</label>
                        <input
                            type="text"
                            id="priceOld"
                            className="admin_portor_flex_1_input"
                            value={priceOld}
                            onChange={(e) => setPriceOld(e.target.value)}
                            required
                        />
                    </div>

                    <div className="admin_portor_flex_1_conatiner">
                        <label className="admin_portor_flex_1_label" htmlFor="newPrice">New Price:</label>
                        <input
                            type="text"
                            id="newPrice"
                            className="admin_portor_flex_1_input"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                            required
                        />
                    </div>

                    
                </div>

                <div className="admin_portor_flex_1_conatiner_btn">
                    <button type="submit" className="admin_portor_flex_1_conatiner_button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminPortor;
