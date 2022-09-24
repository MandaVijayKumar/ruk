import React, {useState} from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'

function Employees() {
  const [Employees, setEmployees] = useState({
    employees: [{
      id:1,
      name: 'ram sri',
      salary: 43444,
      email: 'vijaykamesh33@gmail.com',
      isSelected: false
    },
    {
      id:2,
      name: 'ramya',
      salary: 43444,
      email: 'vijaykamesh33@gmail.com',
      isSelected: false
    },
    {
      id:3,
      name: 'serisha',
      salary: 43444,
      email: 'vijaykamesh33@gmail.com',
      isSelected: false
    },
    {
      id:4,
      name: 'ram kuamr',
      salary: 43444,
      email: 'vijaykamesh33@gmail.com',
      isSelected: false
    },
    {
      id:5,
      name: 'vijay kumar',
      salary: 43444,
      email: 'vijaykamesh33@gmail.com',
      isSelected: false
    }]
  })

  const update = (empid) => {
    const findEmp = Employees.employees.map((emp)=>{
      if(emp.id === empid) {
        emp.isSelected = !emp.isSelected;
       
      }
      return emp;
    })
   setEmployees({employees: findEmp});
   console.log(findEmp)

    
  }
  return (
    <Container fluid>
      <Row className='bg-secondary p-4 text-center text-white'>
        <Col>
                    <h1>Employees list</h1>
                    <p>dk;ljfsdlkjfksdjf dskfjsdkj dksjfsdk jasdkjfsdk jfasdjfsdk fdsjf sd</p>
        </Col>
      </Row>
      <Stack direction='horizontal' gap={5} style={{display: 'flex', justifyContent: 'flex-start'}}>
        <div className='bg-primary border'>
          <ul className='list-group'>
          {
           Employees.employees.length !== 0 && Employees.employees.map(employee => (<li key={employee.id} className='list-group-item'>
            <input onChange ={()=>update(employee.id)} type='checkbox' className=' me-2' checked={employee.isChecked}/> {employee.name}
           </li>))
          }
          
          </ul>
          

        </div>
        <div className='bg-succes border mx-auto'>
          <div>
            
            {
              Employees.employees.length !== 0 && Employees.employees.map(emp => (<>
              {
                emp.isSelected &&(<ul key={emp.id} className='list-group border border-primary my-2 bg-secondary'>
                <li className='list-group-item'>id:<span>{emp.id}</span></li>
                <li className='list-group-item'>name:<span>{emp.name}</span></li>
                <li className='list-group-item'>salary:<span>{emp.salary}</span></li>
                <li className='list-group-item'>email:<span>{emp.email}</span></li>
              </ul>)
              }</>))

            }

          
          </div>

        </div>
      </Stack>
    </Container>
  )
}

export default Employees