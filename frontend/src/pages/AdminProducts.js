import React, { useState } from "react";
import AdminNav from "../components/AdminNav";
import { SlTrash, SlPencil } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import { AiFillCloseCircle } from 'react-icons/ai'
import Pagination from "../components/Pagination";
import Modal from "react-modal";
import Select from "react-select"
import { getFive } from "../data/products";

function AdminProducts() {
    const products = getFive();
    const [modalIsOpen, setModalIsOpen] = useState({addEdit: false, delete: false, update: false});
    const [uploadImages, setUploadImages] = useState([])

    const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        const imagesArr = selectedFiles.map(item => URL.createObjectURL(item))
        setUploadImages(imagesArr)
        console.log(imagesArr);
    }

    const openModal = (type) => setModalIsOpen(prevState => ({...prevState, [type]: true}));
    const closeModal = (type) => setModalIsOpen(prevState => ({...prevState, [type]: false}));

    const handleRemoveImage = (img) => {
        setUploadImages(prevState => prevState.filter(item => item !== img))
    }

    const CustomOption = ({ innerProps, isDisabled, label }) => {
        if(!isDisabled){
            return (
                <div {...innerProps} className="customOption">
                    {label}
                    <div >
                        <button className="btn-blue" onClick={() => openModal('update')}><SlPencil /></button>
                        <button className="btn-danger" onClick={() => openModal('delete')}><CgClose /></button>
                    </div>
                </div>
            )
        }
        return null
    };

    Modal.setAppElement('#root')

    return (
        <div className="container orders">
            <AdminNav />

            <div className="orders__main">
                <div className="orders__filter">
                    <form>
                        <input type="text" name="search" placeholder="Search" />
                    </form>
                    <button className="btn-primary" onClick={() => openModal('addEdit')} >Add New Product</button>
                </div>
                <div className="table">
                    <table>
                        <thead className="table__heading">
                            <tr>
                                <th>Picture</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Inventory Count</th>
                                <th>Quantity Sold</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item) => {
                                let images = JSON.parse(item.images);

                                return (
                                    <tr>
                                        <td>
                                            <img src={`/images/${images[0]}`} alt={item.name} />
                                        </td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.inventory}</td>
                                        <td>{item.sold}</td>
                                        <td className="table__action">
                                            <button className="btn-light">Edit</button>
                                            <button type="submit" className="btn-danger" onClick={() => openModal('delete')}>
                                                <SlTrash />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal 
                isOpen={modalIsOpen.addEdit} 
                onRequestClose={() => closeModal('addEdit')} 
                className='modal' 
                // contentLabel='Add Note'
            >
                <div className="form">
                    <div className="form__header">
                        <p className="heading-2">Add a new product</p>
                        <button className="btn-danger" onClick={() => closeModal('addEdit')}><CgClose /></button>
                    </div>
                    <form>
                        <div className="form__main">
                            <div className="form__group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form__group">
                                <label htmlFor="description">Description:</label>
                                <textarea name="description" id="description"></textarea>
                            </div>
                            <div className="form__group">
                                <label htmlFor="category">Categories:</label>
                                <Select 
                                    options={[
                                            { value:'mouse', label: 'Mouse' },
                                            { value:'keyboard', label: 'Keyboard' },
                                            { value:'monitor', label: 'Monitor' },
                                            { value:'laptop', label: 'Laptop' },
                                    ]}
                                    components={{Option: CustomOption}}
                                />
                            </div>
                            <div className="form__group">
                                <label htmlFor="new_category">Or add new category:</label>
                                <input type="text" name="new_category" id="new_category" />
                            </div>
                            <div className="form__group">
                                <label htmlFor="price">Price:</label>
                                <input type="number" name="price" id="price" />
                            </div>
                            <div className="form__group">
                                <label htmlFor="quantity">Quantity (Inventory):</label>
                                <input type="number" name="quantity" id="quantity" />
                            </div>
                            <div className="form__group upload_image">
                                <label>Images:</label>
                                <label htmlFor="images">
                                    <span className="btn-light">Upload</span>
                                    <input 
                                        type="file" 
                                        name="images" 
                                        id="images" 
                                        multiple
                                        accept="image/png, image/jpeg, image/webp"
                                        onChange={handleImageChange}
                                    />
                                </label>
                                <p>Maximum of 5 images and first image will be the main.</p>
                            </div>
                            <div className="images">
                                    { uploadImages.map((item, index) => (
                                        <div onClick={() => handleRemoveImage(item)}>
                                            <img 
                                                src={item}
                                                alt={`upload-${index}`}
                                            />
                                            <AiFillCloseCircle className="images__remove" />
                                        </div>
                                    )) }
                            </div>
                        </div>

                        <div className="form__footer">
                            <button className="btn-danger" onClick={() => closeModal('addEdit')}>Cancel</button>
                            <button type="submit" className="btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </Modal>

            <Modal 
                isOpen={modalIsOpen.delete} 
                onRequestClose={() => closeModal('delete')} 
                className='modal' 
            >
                <form className="delete_form">
                    <p>Are you sure you want to delete product "<span>A4teck KRS-85</span>" (ID: <span>183</span>)</p>
                    <div className="delete_form__footer">
                        <button className="btn-danger">Yes</button>
                        <button className="btn-light" onClick={() => closeModal('delete')}>No</button>
                    </div>
                </form>
            </Modal>

            <Modal 
                isOpen={modalIsOpen.update} 
                onRequestClose={() => closeModal('update')} 
                className='modal' 
            >
                <form className="update_form">
                <p>Update "<span>Laptop</span>" category.</p>
                    <input type="text" defaultValue={'Laptop'} />
                    <div className="update_form__footer">
                        <button className="btn-primary">Update</button>
                        <button className="btn-light" onClick={() => closeModal('update')}>Cancel</button>
                    </div>
                </form>
            </Modal>

            <Pagination />
        </div>
    );
}

export default AdminProducts;
