export default async function AboutPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    return "Data Not found!";
  }

  console.log(res);

  return (
    <div>
      <h2>This is About page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        numquam maiores nostrum quos sequi voluptatum consequuntur, animi
        blanditiis quis similique quasi molestias! Sit accusamus recusandae
        velit saepe harum, magnam delectus natus autem magni facere.
      </p>
    </div>
  );
}
