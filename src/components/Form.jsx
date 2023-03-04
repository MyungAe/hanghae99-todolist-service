function Form() {
  return (
    <form>
      <label htmlFor="">제목</label>
      <input type="text" />
      <label htmlFor="">내용</label>
      <input type="text" />
      <input
        type="submit"
        value="추가하기"
      />
    </form>
  );
}
export default Form;
