import React, { useState } from "react";
import AdminNav from "../components/AdminNav";
import { SlTrash, SlPencil } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import Pagination from "../components/Pagination";
import Modal from "react-modal";
import Select from "react-select"
import { getFive } from "../data/products";

function AdminProducts() {
    const products = getFive();
    const [modalIsOpen, setModalIsOpen] = useState({addEdit: false, delete: false});

    const openModal = (type) => setModalIsOpen(prevState => ({...prevState, [type]: true}));
    const closeModal = (type) => setModalIsOpen(prevState => ({...prevState, [type]: false}));

    const CustomOption = ({ innerProps, isDisabled, label }) => {
        if(!isDisabled){
            return (
                <div {...innerProps} className="customOption">
                    {label}
                    <div >
                        <button className="btn-blue" ><SlPencil /></button>
                        <button className="btn-danger"><CgClose /></button>
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
                                        <td>
                                            <button className="btn-light mr-3">Edit</button>
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
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div>
                                <label htmlFor="description">Description:</label>
                                <textarea name="description" id="description"></textarea>
                            </div>
                            <div>
                                <label htmlFor="category">Categories:</label>
                                <Select 
                                    isClearable 
                                    options={[
                                            { value:'mouse', label: 'Mouse' },
                                            { value:'keyboard', label: 'Keyboard' },
                                            { value:'monitor', label: 'Monitor' },
                                            { value:'laptop', label: 'Laptop' },
                                    ]}
                                    components={{Option: CustomOption}}
                                />
                            </div>
                            <div>
                                <label htmlFor="new_category">Or add new category:</label>
                                <input type="text" name="new_category" id="new_category" />
                            </div>
                            <div>
                                <label htmlFor="price">Price:</label>
                                <input type="number" name="price" id="price" />
                            </div>
                            <div>
                                <label htmlFor="quantity">Quantity (Inventory):</label>
                                <input type="number" name="quantity" id="quantity" />
                            </div>
                            <div>
                                <label htmlFor="images">Images:</label>
                                <input type="file" name="images" id="images" />
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
                // contentLabel='Add Note'
            >
                <form className="delete_form">
                    <p>Are you sure you want to delete product "<span>A4teck KRS-85</span>" (ID: <span>183</span>)</p>
                    <div className="delete_form__footer">
                        <button className="btn-danger">Yes</button>
                        <button className="btn-light" onClick={() => closeModal('delete')}>No</button>
                    </div>
                </form>

            </Modal>

            <Pagination />
        </div>
    );
}

export default AdminProducts;
