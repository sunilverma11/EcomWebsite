import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';

function SignupSignin() {
    return (
      <div>
        <NavBar/>
      <div className="" style={{color:'green',position:'relative',paddingTop:'50px',alignItems:'center'}}>
        <div style={{display:'flex',width:'70rem',height:'35VW',border:'1px solid lightgray',margin:'auto'}}>
          <div style={{width:'50%',borderRight:'1px solid lightgray',padding:'20px' }}>
          <h3>Welcome Back!</h3>
          <Form>
            <FormGroup>
              <Label for="userEmail">
                Email
              </Label>
              <Input
                id="loginEmail"
                name="email"
                placeholder="Enter your Email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="userPassword">
                Password
              </Label>
              <Input
                id="loginPassword"
                name="password"
                placeholder="Enter your Password"
                type="password"
              />
            </FormGroup>
            <Button color="primary" >
              Signin
            </Button>
          </Form>
          </div>
          <div style={{width:'50%',padding:'20px'}}>
            <h3>Register</h3>
          <Form>
          <FormGroup>
              <Label for="userName">
                Name
              </Label>
              <Input
                id="userName"
                name="name"
                placeholder="Enter Your Name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="userPhone">
                Phone
              </Label>
              <Input
                id="userPhone"
                name="phone"
                placeholder="Enter your Phone number"
                type="number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="userEmail">
                Email
              </Label>
              <Input
                id="userEmail"
                name="email"
                placeholder="Enter your Email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="userPassword">
                Password
              </Label>
              <Input
                id="userPassword"
                name="password"
                placeholder="Enter password"
                type="password"
              />
            </FormGroup>
            <Button color="primary" >
              Submit
            </Button>
          </Form>
          </div>
        </div>
      </div>
      </div>
    );
  }
  export default SignupSignin;