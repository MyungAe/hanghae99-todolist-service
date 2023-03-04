import Card from './Card';

// 한 번에 두 개의 컴포넌트를 렌더할 수 있을까?
// map 함수 한 번 사용해서 working 리스트 렌더해보기
function TodoList() {
  return (
    <>
      <section>
        Working.. 🔥
        <Card />
      </section>
      <section>
        Done..! 🎉
        <Card />
      </section>
    </>
  );
}

export default TodoList;
