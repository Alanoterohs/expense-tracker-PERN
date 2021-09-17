import { Fragment, useState, useEffect } from 'react';
import Form from '../../components/formOperations/Form';
import ListExpenses from '../../components/expensesItems/ListExpenses'; 
import ContainerLastExpenses  from '../../components/lastExpenses/ContainerLastExpenses';

function FormExpenses({ operation, setOperation }) {

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [option, setOption] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState();

  let amountTemp;
  const handleOnSubmit = async (e) => {
    const body = { title, amount, description, option, category, date };
    console.log(body);
    const response = await fetch('http://localhost:5000/operations/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    setOperation([...operation, body]);
    setTitle('')
    setDescription('');
    setAmount('');
    setCategory('');
    setOption('')
    setDate('')
  }

  const handleOnDelete = async (index1, id) => {
    try {
      const response = await fetch(`http://localhost:5000/operations/${id}`, {
        method: 'DELETE',
      });
        let temp = operation.filter((v, index) => index !== index1);
        setOperation(temp);
      
    } catch (err) {
      console.error(err.message);
    }
  }

  const getAllOperations = async () => {
    try {
      const response = await fetch('http://localhost:5000/operations/', {
        method: 'GET',
      });
      const { getOperations } = await response.json();
      setOperation(getOperations);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllOperations();
  }, []);


  return (
    <Fragment>
      <Form
      title = {title}
      setTitle = {setTitle}
      amount = {amount}
      setAmount = {setAmount}
      description = {description}
      setDescription = {setDescription}
      option = {option}
      setOption = {setOption}
      category = {category}
      setCategory = {setCategory}
      date = {date}
      setDate = {setDate}
      handleOnSubmit = {handleOnSubmit}
      />
    <ContainerLastExpenses title= 'Registros totales'>
      <ListExpenses 
      operation = {operation}
      letter = 'form'
      handleOnDelete = {handleOnDelete}
      />
    </ContainerLastExpenses>
    </Fragment>
  );
}

export default FormExpenses;
