import { Fragment, useState } from 'react';
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


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const body = { title, amount, description, option, category, date };
    const response = await fetch('http://localhost:5000/operations/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }

  // export const deleteIncomes = async (id) => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/operations/${id}`, {
  //       method: 'DELETE',
  //     });
  //     console.log(response);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   const incomerOrExpenses = {
  //     title,
  //     amount,
  //     description,
  //     option,
  //     category,
  //     date,
  //   };

  //   setOperation([...operation, incomerOrExpenses]);

  //   console.log(operation);

  //   setDescription('');
  //   setAmount('');
  // };

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
      <ListExpenses operation = {operation} letter = 'form'/>
    </ContainerLastExpenses>
    </Fragment>
  );
}

export default FormExpenses;
