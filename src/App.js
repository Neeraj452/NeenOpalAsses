import { useEffect, useState } from "react";
import "./App.css";
import {
  deleteIcon,
  editIcon,
  heart,
  emailIcon,
  mobileIcon,
  globalIcon,
  selectHeart,
} from "./assets/image";
import CustomModal from "./component/customModal";
import CustomInput from "./component/customInput";
import CustomButton from "./component/CustomButton";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState([{}]);
const [formData, setFormData] = useState({});
  const handleFetch = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const response = await data.json();
    if (response?.users?.length > 0) {
      setUserData(
        response?.users?.map((item) => {
          return {
            id: item.id,
            name: item.username,
            email: item.email,
            phone: item.ein,
            image: item.image,
            domain: item.domain,
            isLiked: false,
          };
        })
      );
    }
  };
  console.log(userData);

  useEffect(() => {
    handleFetch();
  }, []);

  const openModal = (item) => {
    setIsModalOpen(true);
    setFormData(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleDelete = (id) => {
    let newData = userData.filter((item) => item.id !== id);
    setUserData(newData);
  };
  const handleIlikeDislike = (id) => {
    console.log(id);
    let newData = userData.map((item) => {
      if (item.id === id) {
        return { ...item, isLiked: !item.isLiked };
      }
      return item;
    });
    setUserData(() => [...newData]);
  };
  const editUser = (data) => {
    let newData = userData.map((item) => {
      if (item.id === data.id) {
        return { ...data };
      }
      return item;
    });
    setUserData(() => [...newData]);
    closeModal();
  }

  return (
    <div className="container">
      <div className="card-caintainer">
        {userData.map((item) => {
          return (
            <div key={item?.id} className="card">
              <div className="top">
                <div className="image">
                  <img src={item.image} alt="avatar" />
                </div>
              </div>
              <div className="bottom">
                <div className="content">
                  <p className="text">{item?.name}</p>
                  <div>
                    <li className="list">
                      <span >{emailIcon}</span>
                      <span>{item?.email}</span>
                    </li>
                    <li className="list">
                      <span>{mobileIcon}</span>
                      <span>{item?.phone}</span>
                    </li>
                    <li className="list">
                      <span>{globalIcon}</span>

                      <span>{item?.domain}</span>
                    </li>
                  </div>
                </div>
              </div>
              <div className="actions">
                <span onClick={() => handleIlikeDislike(item?.id)}>
                  {item?.isLiked ? selectHeart : heart}
                </span>
                <span className="vertical-pipe"></span>
                <span className="card_icon" onClick={()=>openModal(item)}>
                  {editIcon}
                </span>
                <span className="vertical-pipe"></span>
                <span
                  className="card_icon"
                  onClick={() => handleDelete(item?.id)}
                >
                  {deleteIcon}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {console.log({formData})}
      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="ant-modal-body">
          <div className="form">
          <CustomInput label="Name" value={formData.name} onChange={(e)=>setFormData((prev)=>({...prev,name:e.target.value}))} error={formData?.name}/>
          <CustomInput label="Email" value={formData.email} onChange={(e)=>setFormData((prev)=>({...prev,email:e.target.value}))} error={formData?.email}/>
          <CustomInput label="Phone" value={formData.phone} onChange={(e)=>setFormData((prev)=>({...prev,phone:e.target.value}))} error={formData?.phone}/>
          <CustomInput label="Domain" value={formData.domain} onChange={(e)=>setFormData((prev)=>({...prev,domain:e.target.value}))} error={formData?.domain}/>
          <div className="btn">
            <CustomButton label="Cancel" onClick={closeModal} type="cancel"/>
            <CustomButton label="Edit" onClick={()=>editUser(formData)} type="edit"/>
          </div> 
          </div>
        </div>
      </CustomModal>
    </div>
  );
}

export default App;
