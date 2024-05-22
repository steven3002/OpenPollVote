
import { useState, useEffect } from 'react';
import { useStore } from '@/layout';
import { HelloNearContract } from '../config';

import { TodoApp } from '@/todoMain/todo';



// Contract that the app will interact with
const CONTRACT = HelloNearContract;

export default function Home() {
  const { signedAccountId, wallet } = useStore();
  const [greeting, setGreeting] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (!signedAccountId) { return }
    else {
      data1()
    };
  }, [signedAccountId]);

  useEffect(() => {
    setLoggedIn(!!signedAccountId);
    data1
    console.log(signedAccountId)
  }, [signedAccountId]);




  const data1 = async () => {
    setShowSpinner(true);
    let data = await wallet.callMethod({ contractId: CONTRACT, method: 'list_todos', args: {} });
    setGreeting(data)
    console.log(data)
    setShowSpinner(false);
  }
  const handleDeleteM = async (index) => {
    setShowSpinner(true);
    await wallet.callMethod({ contractId: CONTRACT, method: 'delete_todo', args: { id: index } })
    let data = await wallet.callMethod({ contractId: CONTRACT, method: 'list_todos', args: {} });
    setGreeting(data)
    console.log(data)
    setShowSpinner(false);
  }

  const handleCompleted = async (index) => {
    setShowSpinner(true);
    await wallet.callMethod({ contractId: CONTRACT, method: 'set_completed', args: { id: index } })
    let data = await wallet.callMethod({ contractId: CONTRACT, method: 'list_todos', args: {} });
    setGreeting(data)
    console.log(data)
    setShowSpinner(false);
  }
  const handleinputvalue = async (value) => {
    setShowSpinner(true);
    await wallet.callMethod({ contractId: CONTRACT, method: 'add_todo', args: { text: value } })
    let data = await wallet.callMethod({ contractId: CONTRACT, method: 'list_todos', args: {} });
    setGreeting(data)
    console.log(data)
    setShowSpinner(false);
  }



  return (
    <>
      <div className="w-100 text-end align-text-center" hidden={loggedIn}>
        <h3>Please login</h3>

      </div>

      <div className='subbody' hidden={!loggedIn}>
        <TodoApp todoData={greeting} handleDelete={handleDeleteM} handleCompleted={handleCompleted} handleInputValue={handleinputvalue} />
      </div>
    </>
  );
}