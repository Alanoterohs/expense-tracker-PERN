import { Fragment, useState } from 'react';
import Form from '../../components/formOperations/Form';
import ListExpenses from '../../components/expensesItems/ListExpenses';
function FormExpenses() {

  const [operation, setOperation] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [option, setOption] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const incomerOrExpenses = {
      title,
      amount,
      description,
      option,
      category,
      date,
    };

    setOperation([...operation, incomerOrExpenses]);
    console.log(operation);

    setDescription('');
    setAmount('');
  };

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
      <ListExpenses
      operation = {operation}
      />
    </Fragment>
  );
}

export default FormExpenses;
