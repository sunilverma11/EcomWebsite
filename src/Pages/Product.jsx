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
  const [age, setAge] = useState('');
  const [sortby, setSortby] = useState('')

  const addToCart = (ele) => {
    let newCartValue = JSON.parse(localStorage.getItem('addToCart')) || []
    localStorage.setItem("addToCart", JSON.stringify([...newCartValue, ele]))
  }
  const handleChange = (event, type) => {
    type(event.target.value);
  };
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
    localStorage.setItem("productData", JSON.stringify(tempData))
    setProducts([...tempData])
  }, [sortby])
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
        <div></div>
        <Box sx={{}}>
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
      <div style={{ width: '80%', alignItems: 'center', display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '10px', margin: 'auto' }}>
        {
          products.map((element) => {
            return <div key={element.id} style={{ width: '100%', height: '450px' }}>
              <img style={{ width: '100%', height: '75%' }} src={element.imageURL} alt='Lost shoes pic' />
              <p>{element.name}</p>
              <h4 style={{ textAlign: 'center' }}>{element.price}$</h4>
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