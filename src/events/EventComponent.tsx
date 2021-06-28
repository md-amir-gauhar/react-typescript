const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.clientY);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragHandler}>
        Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
