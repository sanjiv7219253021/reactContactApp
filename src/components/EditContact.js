import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const dispatch= useDispatch();
  const history= useHistory();

  const contacts = useSelector((state) => state);
  const currentContact = contacts.find((contact) => contact.id === +id);
  console.log(currentContact);

  useEffect(()=>{
    if(currentContact){
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number)
    }
  },[currentContact])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const checkEmail= contacts.find(contact=> {
      let mailId=""
      if(contact.email=== email) mailId= email;

      return mailId;
    })

    const checkNumber= contacts.find(contact=> {
      let num;
      if(contact.number=== +number) num= number;

      return num
    })

    if(!email || !number || !name){
      return toast.warning("Please fill in all fields");
    }

    if(checkEmail){
      return toast.error("Email already exists")
    }

    if(checkNumber){
      return toast.error("Number already exists")
    }

    const data={
      id: id,
      name,
      email,
      number
    }

    dispatch({type:"UPDATE_CONTACT", payload: data});
    toast.success("Student added successfully");
    history.push("/");
  }

  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center">Edit Student {id}</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control my-3"
                value={name}
                onChange={e=>setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                className="form-control my-3"
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control my-3"
                value={number}
                onChange={e=>setNumber(e.target.value)}
              />
            </div>

            <div className="form-group d-flex align-items-center justify-content-between my-2">
              <input
                type="submit"
                value="Update Student"
                className="btn btn-dark"
              />

              <Link to="/" className="btn btn-danger">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
