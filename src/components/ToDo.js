import { useContext } from 'react';
import { appContext } from '../store/store.js';

// Done gets the data via props use it to get the text of the task

const ToDo = ({ data }) => {
  // useContext to dispatch to the reducer

  //const { dispatch } = useContext(appContext);

  return (
    <div className="ToDo">
      <p>Text of the Done item</p>

      <div className="actions">
        {/* onclick dispatches action type and payload to the reducer */}
        <button className="btn" onClick={() => {}}>
          ICON
        </button>
      </div>
    </div>
  );
};

export default ToDo;
