let count = 0;
function Message() {
  console.log("Message called", count);
  count++;
  return (
    <>
      <h3>Message{count}</h3>
    </>
  );
}
export default Message;
