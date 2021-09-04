import { Link } from 'react-router-dom';

const Home = () => (
  <main className="Home">
    <section className="Home_titles">
      <h1>StuffToDo()</h1>
      <h2>StuffToDo helps you keeping things under control</h2>

      <div className="btn_callForAction">
        <Link exact to="/dashboard">
          <button>Start your first Dashboard</button>
        </Link>
      </div>

      <hr />
    </section>

    <section className="Home_instructions">
      <h4>
        You do not know how to use it? <br />
        No problem take a look here:
      </h4>

      <ol className="instructions">
        <li>
          Structure your tasks into lists in your head or a piece of paper
        </li>
        <li>Give a name to your first list and add it to your dashboard</li>
        <li>Start adding some tasks to your first list</li>
        <li>All tasks are labelled as toDo</li>
        <li>
          Once you are done with one of your tasks, click on it to label it as
          done!!
        </li>
        <li>
          If you want to add more lists you can simply start from step one and
          add more
        </li>
        <li>
          If you make a mistake you can delete lists and tasks by clicking on
          the respective button
        </li>
        <li>
          If you simply want to move tasks from one list to another use the drag
          and drop functionality
        </li>
      </ol>
    </section>
  </main>
);

export default Home;
