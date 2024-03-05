import React from "react";
import './Form.css'

function Form() {
  return (
    <form style={{minWidth: "300px"}} className="input-group vertical d-flex flex-column ">
      <label htmlFor="name">Project Name</label>
      <input style={{width: '18rem'}} type="text" name="name" placeholder="enter name" />
      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="enter description" style={{resize: 'none',width: '18rem'}}/>
      <label htmlFor="budget">Project Budget</label>
      <input style={{width: '18rem'}} type="number" name="budget" placeholder="enter budget" />
      <label htmlFor="isActive">Active?</label>
      <input style={{width: '18rem'}} type="checkbox" name="isActive" />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium">
          cancel
        </button>
      </div>
    </form>
  );
}

export default Form;