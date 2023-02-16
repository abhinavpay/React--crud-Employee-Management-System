import React, { useState , useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom';

import Employee from './Employee';

import uuid from 'react-uuid';


function Add() {

  const history = useNavigate()

  const [id,setId]=useState('')
  const [empname,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState('');


  
  const handleAdd=(e)=>{

    e.preventDefault()

    let ids =uuid();
    console.log(ids);

    let uniqueId= ids.slice(0,8)
    console.log(uniqueId);



    Employee.push({
      id:uniqueId,
      empname:empname,
      age:age,
      designation:designation,
      salary:salary
    })

    history('/')

  }

  return (
    <>
    
    <h1 className='text-primary text-center m-4'>Add Employee</h1>

<p className='col-lg-12'>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>

<Row>
  <Col>
    <img  src='https://cdn2.iconfinder.com/data/icons/office-and-business-round-set-1/64/6-512.png' />
  </Col>
  <Col>
  <Form className='border border-3 p-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control type="id" placeholder="Enter id"  
        // value={id }
         onChange={(e)=>setId(e.target.value)} required  />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="id" placeholder="Enter Name" 
        // value={empname}
        
        onChange={(e)=>setEmpname(e.target.value)}  required   />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="id" placeholder="Enter Age" 
        // value={age}
          onChange={(e)=>setAge(e.target.value)} required   />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="id" placeholder="Enter designation" 
        // value={designation} 
         onChange={(e)=>setDesignation(e.target.value)}  required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="id" placeholder="Enter salary" 
        // value={salary}
         onChange={(e)=>setSalary(e.target.value)}   required  />
        
      </Form.Group>

      
      <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
        Add
      </Button>
    </Form>
    </Col>
</Row>

    
    </>
  )
}

export default Add