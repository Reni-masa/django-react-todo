//React関係
import React, { useState, useEffect } from 'react';

// スタイル読み込み
import './App.css';

const App = () => {
  // usestate
  const [todoLists, setTodoList] = useState([]);
  const [activeItem, setActiveItem] = useState({
    id: null,
    title: '',
    completed: false
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // const subscription = props.source.subscribe();
    // return () => {
    //   // Clean up the subscription
    //   subscription.unsubscribe();
    // };
    console.log('ok...');
  });

  return (
    <div className="container">
      <div id="task-container">
        {/* タスク入力 */}
        <div id="form-wrapper">
          <form id="form">
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add task..."
                />
              </div>
              <div className="col-2">
                <input
                  className="btn btn-primary"
                  id="submit"
                  type="submit"
                  value="sumbit"
                />
              </div>
            </div>
          </form>
        </div>
        {/* タスク一覧 */}
        <div id="list-wrapper"></div>
      </div>
    </div>
  );
};

export default App;
