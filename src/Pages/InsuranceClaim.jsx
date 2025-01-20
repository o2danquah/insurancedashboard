import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
function InsuranceClaim() {
    const [errors, setError] = useState("")
    const [success, setSuccess] = useState(false)

    const [PolicyNum, setPolicyNum] = useState("")
    const [File, setFile] = useState("")
    const [ClaimType, setClaimType] = useState("")
    const [Description, setDescription] = useState("")
    
    const [PNumverifies, setPNumverified] = useState(false)
    const [Fileverified, setFileVerified] = useState(false)



// Check to make sure file isnt greater than 2mb and only accepts pdf/doc
    const handleFile = (e) => {
        const SelectedFile = e.target.files[0];
        console.log(SelectedFile)
        console.log(File)
        // an array of allowed file types/extensions
        const allowTypes = ["application/pdf", "application/docx"]

        // checking to make sure file does not exceed 2MB
        if(SelectedFile?.size > 2000000){
            setError("Maximum size is 2mb")
            document.getElementById("formFile").value = ""
            setFileVerified(false)
        }
        // checking to make sure file is doc or pdf
        if(!allowTypes.includes(SelectedFile?.type)){
            setError("Only PDF and DOC are accepted")
            document.getElementById("formFile").value = ""
            setFileVerified(false)
        }
        setFileVerified(true)
       

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Fileverified && !errors){
            setSuccess(true)
        }
       


    }

console.log(errors)
  return (
    <div className='d-flex h-100 align-content-center px-4'>
        <div className="col-lg-12 d-flex align-items-center">
            <div className="card w-100">
              <div className="card-body">
                <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title fw-semibold">INSURANCE CLAIM</h5>
                  </div>
                </div>
                
                <div>
      <form onSubmit={handleSubmit}>
        
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="PolicyNumberLabel">Policy Number</InputLabel>
        <Select
          labelId="PolicyNumber"
          id="PolicyNumber"
        //   value={}
          label="Policy Number"
        onChange={(e) => {setPolicyNum(e.target.value)}}
        value={PolicyNum}
        style={{marginBottom: "20px"}}
        required
        >
          <MenuItem value={11}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
        </Select>
        
        <TextField id="ClaimType" name='claimType' label="Claim Type" variant="outlined" value={ClaimType} required onChange={(e) => {setClaimType(e.target.value)}} style={{marginBottom: "20px"}}/>

        <TextField id="Description"  label="Description" variant="outlined" onChange={(e) => {setDescription(e.target.value)}} style={{marginBottom: "20px"}}/>

        <div className="mb-3">
    
        <input className="form-control" type="file" id="formFile" onChange={handleFile} required/>
        <p>Maximum file size is 5MB</p>
        <button className='btn btn-primary btn-lg'> Send</button>
        </div>
      </FormControl>
    </Box>

    // displays error if found
    <p className='text-danger'> {errors}</p>
    <p className='text-success'> {success ? "Successfully Sent" : ""}</p>
        </form>              
    
    

                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default InsuranceClaim