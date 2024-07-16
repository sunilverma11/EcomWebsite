import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import NavBar from '../components/NavBar';
import data from '../data.json'
function Product() {
  const [products, setProducts] = useState([])
  const [gender, setGender] = useState('');
  const [sortby, setSortby] = useState('')

  const addToCart = (ele) => {
    let newCartValue = JSON.parse(localStorage.getItem('addToCart')) || []
    localStorage.setItem("addToCart", JSON.stringify([...newCartValue, ele]))
  }
  const handleChange = (event, type) => {
    type(event.target.value);
  };
  const filterBrandBased = (brand)=>{
    let tempData = [...data]
    brand==='all'? tempData = [...data]:
    tempData = tempData.filter((el) => el.brand===brand)
    setProducts([...tempData])
  }
  useEffect(() => {
    let tempData = [...data]
    if (sortby) {
      if (sortby === 'ltoh') {
        tempData = tempData.sort((a, b) => a.price - b.price)
      }
      if (sortby === 'htol') {
        tempData = tempData.sort((a, b) => b.price - a.price)
      }      
    }
    if(gender){
      if(gender=== 'women'){
        console.log("women in")
        tempData = tempData.filter((el) => el.gender==='WOMEN')
      }
      if(gender=== 'men'){
        console.log("men in")
        tempData = tempData.filter((el) => el.gender==='MEN')
      }
      if(gender=== 'kids'){
        console.log("kids in")
        tempData = tempData.filter((el) => el.gender==='KIDS')
      }
    }
    localStorage.setItem("productData", JSON.stringify(tempData))
    setProducts([...tempData])
  }, [sortby,gender])
  return (
    <div className="">
      <NavBar />
      <div style={{ paddingTop: '100px', width: '80%', margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
        {/* <Box sx={{display:'flex',minWidth: 120,alignItems:'center' }}>
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 100}}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box> */}
        <div>
          <Button sx={{backgroundColor:'lightpink'}} onClick={()=>filterBrandBased('all')}>All</Button>
          <Button sx={{backgroundColor:'lightpink',marginLeft:'10px'}} onClick={()=>filterBrandBased('NIKE')}>Nike</Button>
          <Button sx={{backgroundColor:'lightpink',marginLeft:'10px'}} onClick={()=>filterBrandBased('ADIDAS')}>ADIDAS</Button>
          <Button sx={{backgroundColor:'lightpink',marginLeft:'10px'}} onClick={()=>filterBrandBased('Reebok')}>Reebok</Button>
          <Button sx={{backgroundColor:'lightpink',marginLeft:'10px'}} onClick={()=>filterBrandBased('HUSHPUPPIES')}>HUSHPUPPIES</Button>
        </div>
        <Box sx={{}}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Gender</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="gender-select-small"
              value={gender}
              label="Gender"
              name="gender"
              onChange={(e) => handleChange(e, setGender)}
            >
              <MenuItem value={''}>None</MenuItem>              
              <MenuItem value={'kids'}>Kids</MenuItem>
              <MenuItem value={'women'}>Women</MenuItem>
              <MenuItem value={'men'}>Men</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Sort by</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={sortby}
              label="Sort by"
              name="sortby"
              onChange={(e) => handleChange(e, setSortby)}
            >
              <MenuItem value={''}>None</MenuItem>
              <MenuItem value={'featured'}>Featured</MenuItem>
              <MenuItem value={'ltoh'}>Low to High</MenuItem>
              <MenuItem value={'htol'}>High to Low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div style={{width: '80%', alignItems: 'center', display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '10px', margin: 'auto' }}>
        {
          products.map((element) => {
            return <div key={element.id} style={{border:'solid #D3D3D3 2px',borderRadius:'5px',padding:'10px', width: '100%', height: '550px' }}>
              <span style={{color:'green',fontWeight:'bold',fontSize:'.8rem'}}>{element.brand}</span>
              <img style={{ width: '100%', height: '65%' }} src={element.imageURL} alt='Lost shoes pic' />
              <p>{element.name}</p>
              <p style={{lineHeight:'0.2',color:'gray'}}>({element.category} Shoes)</p>             
              <h4 style={{ textAlign: 'center' }}>Price: {element.price}$</h4>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" endIcon={<SendIcon />} onClick={() => addToCart(element)}>
                  Add to cart
                </Button>
              </div>

              {/* <Stack sx={{textAlign:'center'}} direction="row" spacing={2}>
              <Button variant="contained" endIcon={<SendIcon />}>
                Add to cart
              </Button>
              </Stack> */}

            </div>
          })
        }
      </div>
    </div>
  );
}
export default Product;