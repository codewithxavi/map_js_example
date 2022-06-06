const users = [
  {
    name: 'John',
    occupation: 'teacher',
  },
  {
    name: 'Jane',
    occupation: 'student',
  },
  {
    name: 'Bob',
    occupation : 'retired',
  }
]

const profiles = users.map(({name, occupation}) => {
  return `${name} is a ${occupation}`
})

console.log(profiles)

