export default eventHandler(async () => {
  return [
    {
      content: 'hello world',
      file: 'TestController.php',
      expanded: false,
      color: 'indigo',
      time: '09:20:35',
    },
    {
      content: [1, 2, 3],
      file: 'Model.php',
      expanded: false,
      color: 'green',
      time: '10:15:20',
    },

    {
      content: [{ name: 'John', age: 20 }, { name: 'Brandon', age: 84 }],
      file: 'Model.php',
      expanded: false,
      color: 'gray',
      time: '10:19:13',
    },

    {
      content: 69420,
      file: 'TestEvent.php',
      expanded: false,
      color: 'blue',
      time: '10:21:38',
    },

    {
      content: 'SELECT * FROM `users` \nWHERE email = \'gtorregosa@gmail.com\'',
      file: 'TestEvent.php',
      expanded: false,
      color: 'red',
      time: '10:33:15',
    },
  ]
})
