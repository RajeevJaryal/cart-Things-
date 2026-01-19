import classes from './Notification.module.css';

const Notification = (props) => {
  return (
    <section className={`${classes.notification} ${classes[props.status]}`}>
      <h2>{props.status === 'pending' && 'Sending...'}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
